"""Build a Pages catalog without executing uploaded content. Python stdlib only."""
import hashlib
import json
import re
import shutil
import sys
import zipfile
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parent
ID = re.compile(r'^[A-Za-z0-9][A-Za-z0-9._-]{0,95}$')
VERSION = re.compile(r'^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?$')
LIMIT = 64 * 1024 * 1024


def version_key(version):
    match = VERSION.fullmatch(version)
    if not match:
        raise ValueError('Version must use 1.0.0 or 1.0.0-beta.1')
    pre = match[4]
    return (*map(int, match.group(1, 2, 3)), pre is None,
            tuple((0, int(p)) if p.isdigit() else (1, p) for p in pre.split('.')) if pre else ())


def safe_path(name):
    path = unquote(name, errors='strict')
    if not path or path.startswith('/') or any(c in path for c in '\\:?#') or any(ord(c) < 32 or ord(c) == 127 for c in path):
        raise ValueError('Invalid archive path: ' + name)
    if any(p in ('', '.', '..') for p in path.split('/')):
        raise ValueError('Unsafe archive path: ' + name)
    return path


def inspect_pack(path):
    if path.stat().st_size > LIMIT:
        raise ValueError('Pack exceeds 64 MiB')
    if path.suffix.lower() == '.zip':
        with zipfile.ZipFile(path) as archive:
            files = [i for i in archive.infolist() if not i.is_dir()]
            if len(files) > 2048 or sum(i.file_size for i in files) > LIMIT:
                raise ValueError('Archive exceeds 2048 files / 64 MiB')
            names = [safe_path(i.filename) for i in files]
            if len(set(names)) != len(names):
                raise ValueError('Duplicate archive paths')
            descriptor = next((i for i in files if i.filename == 'manifest.json'), None)
            if descriptor is None or descriptor.file_size > 100_000:
                raise ValueError('ZIP needs a root manifest.json')
            manifest = json.loads(archive.read(descriptor))
            if manifest.get('runtime') != 'web-bundle':
                raise ValueError('ZIP runtime must be web-bundle')
            entry = safe_path(manifest.get('entry', 'index.html'))
            if entry not in names or not re.search(r'\.html?$', entry, re.I):
                raise ValueError('Entry HTML missing')
    else:
        manifest = json.loads(path.with_suffix(path.suffix + '.json').read_text(encoding='utf-8'))
        if manifest.get('runtime', 'react-module') != 'react-module':
            raise ValueError('JS sidecar must use react-module')
        manifest['runtime'] = 'react-module'
    if not ID.fullmatch(manifest.get('id', '')) or not str(manifest.get('title', '')).strip():
        raise ValueError('Pack needs valid id and title')
    if not isinstance(manifest.get('title'), str) or len(manifest['title']) > 4000:
        raise ValueError('Invalid title')
    version_key(manifest.get('version', ''))
    if 'spa' in manifest and not isinstance(manifest['spa'], bool):
        raise ValueError('spa must be boolean')
    # Only publish supported metadata. No injected remote download URLs or file lists.
    keys = ('id', 'title', 'version', 'runtime', 'entry', 'subtitle', 'description', 'icon', 'badge', 'themeColor', 'bottleneck', 'license', 'spa')
    result = {k: manifest[k] for k in keys if k in manifest}
    for key, value in result.items():
        if key != 'spa' and (not isinstance(value, str) or len(value) > 4000):
            raise ValueError('Invalid metadata: ' + key)
    return result


def build(root=ROOT):
    output = root / '_site'
    entries, versions, payloads = {}, {}, []
    for path in sorted((root / 'uploads').rglob('*')):
        if path.is_symlink():
            raise ValueError('Symlinks are not supported')
        if not path.is_file() or path.suffix.lower() not in ('.zip', '.js', '.mjs'):
            continue
        manifest = inspect_pack(path)
        digest = hashlib.sha256(path.read_bytes()).hexdigest()
        identity = (manifest['id'], manifest['version'])
        if identity in versions and versions[identity] != digest:
            raise ValueError('Same id/version has different bytes: ' + str(identity))
        versions[identity] = digest
        destination = f"packs/{manifest['id']}/{manifest['version']}/{digest}{path.suffix.lower()}"
        manifest.update(bundleUrl='./' + destination, sha256=digest, size=f'{path.stat().st_size / 1024:.1f} KB')
        old = entries.get(manifest['id'])
        if not old or version_key(manifest['version']) > version_key(old['version']):
            entries[manifest['id']] = manifest
        payloads.append((path, destination))
    if not entries:
        raise ValueError('Refusing to publish an empty catalog')
    # Validate every upload before modifying the generated site.
    output.mkdir(exist_ok=True)
    for source, destination in payloads:
        target = output / destination
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(source, target)
    catalog = {'version': '1.0.0', 'packs': sorted(entries.values(), key=lambda m: m['id'])}
    (output / 'catalog.json').write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    shutil.copyfile(root / 'index.html', output / 'index.html')
    (output / '.nojekyll').touch()
    print(f"Validated and published {len(entries)} packs to {output}")
    return catalog


if __name__ == '__main__':
    try:
        build()
    except Exception as error:
        sys.exit('Catalog build failed: ' + str(error))
