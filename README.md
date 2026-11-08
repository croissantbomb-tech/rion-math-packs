# 리온 수학 팩 보관소

팩 업로드: https://github.com/croissantbomb-tech/rion-math-packs/upload/main/uploads

콘솔 카탈로그: https://croissantbomb-tech.github.io/rion-math-packs/catalog.json

## 새 팩 올리기

1. 위 팩 업로드 링크를 열고 ZIP 파일을 끌어 놓습니다.
2. **Commit changes**로 main에 저장합니다.
3. Actions의 **Publish packs**가 초록색으로 끝나면 배포됩니다.
4. 콘솔의 **새 콘텐츠 확인**을 누릅니다. 실행 중에는 5분 간격으로도 확인합니다.

ZIP에는 루트 `manifest.json`이 필요합니다. 최소 정보는 다음과 같습니다.

```json
{"runtime":"web-bundle","id":"my-game","title":"나의 수학 놀이","version":"1.0.0","entry":"index.html"}
```

기존 JS 팩은 `name.pack.js`와 `name.pack.js.json`을 함께 올립니다. JSON에는 id, title, version, runtime(react-module)을 넣습니다. JS 코드 자체에 메타데이터가 없어 설명 파일이 필요합니다.

업데이트는 같은 id와 더 높은 version을 사용하세요. 예전 파일을 남길 때는 새 파일명을 사용하면 됩니다. 버전별로 원본 파일은 보관하고 목록에는 최신 버전 하나를 표시합니다. 같은 id/version의 다른 파일이 함께 있으면 오류입니다.

64 MiB·2048파일 이하만 지원합니다. GitHub 웹 업로드의 파일별 제한을 넘으면 Git으로 올립니다. 외부 API·CDN은 자동으로 오프라인화되지 않습니다. 공개 저장소이므로 팩 파일은 공개 다운로드됩니다.

처음 연결: 콘솔 → 보호자 관리 → 콘텐츠 목록 주소에 위 catalog.json 주소 저장 → 지금 확인.

카탈로그는 직접 편집하지 않습니다. uploads에 저장한 ZIP/JS를 검사해 GitHub Actions가 자동으로 만듭니다. 실패한 빌드는 직전 정상 배포를 바꾸지 않습니다.

로컬 검증: `python -m unittest discover -s tests` 후 `python build_catalog.py`.
