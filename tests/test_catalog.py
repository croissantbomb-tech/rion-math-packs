import importlib.util
import json
import tempfile
import unittest
import zipfile
from pathlib import Path

spec = importlib.util.spec_from_file_location('catalog', Path(__file__).resolve().parents[1] / 'build_catalog.py')
catalog = importlib.util.module_from_spec(spec)
spec.loader.exec_module(catalog)


class CatalogTests(unittest.TestCase):
    def test_versions(self):
        self.assertGreater(catalog.version_key('1.10.0'), catalog.version_key('1.9.0'))
        self.assertGreater(catalog.version_key('1.0.0'), catalog.version_key('1.0.0-rc.1'))

    def test_unsafe_paths(self):
        for path in ('../a', '/a', '%2e%2e/a', 'x\\a', 'x?a', 'x//a'):
            with self.assertRaises(ValueError):
                catalog.safe_path(path)

    def test_publish_latest_and_preserve_previous_on_invalid_upload(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            (root / 'uploads').mkdir()
            (root / 'index.html').write_text('test')
            for version in ('1.0.0', '1.10.0', '1.9.0'):
                with zipfile.ZipFile(root / 'uploads' / (version + '.zip'), 'w') as z:
                    z.writestr('manifest.json', json.dumps(dict(id='demo', title='Demo', version=version, runtime='web-bundle', entry='site/index.html')))
                    z.writestr('site/index.html', '<h1>Demo</h1>')
            result = catalog.build(root)
            self.assertEqual(result['packs'][0]['version'], '1.10.0')
            before = (root / '_site/catalog.json').read_bytes()
            with zipfile.ZipFile(root / 'uploads/bad.zip', 'w') as z:
                z.writestr('../escape', 'bad')
            with self.assertRaises(ValueError):
                catalog.build(root)
            self.assertEqual(before, (root / '_site/catalog.json').read_bytes())
