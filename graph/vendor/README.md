# vendor — 외부 라이브러리·폰트 로컬 사본

발표장 인터넷이 끊겨도 5편 전부 재생되도록 CDN 자산을 내려받아 둔 것. 내려받은 날짜 2026-08-06.

| 파일 | 버전 | 크기 | 원본 URL |
|------|------|------|----------|
| `d3.v7.min.js` | 7.9.0 | 273 KB | https://d3js.org/d3.v7.min.js |
| `proj4.js` | 2.9.0 | 88 KB | https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.9.0/proj4.js |
| `fonts.css` + `fonts/` | — | 4.3 MB (woff2 131개) | https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap |
| `three-r170.iife.js` | three 0.170.0 + postprocessing(EffectComposer·RenderPass·UnrealBloomPass·OutputPass) | 687 KB | CDN 이 아니라 **이 덱에서 묶었다** — `scripts/build_three_vendor.mjs`(esbuild IIFE, `video-multiscale-design/node_modules` 의 three). 02 편 v3 의 3D 층(2026-09-25). file:// 에서 module·importmap 을 못 써서 전역 `THREE` 로 묶는다 |

## 편별 사용 현황

| 편 | d3 | proj4 | fonts.css |
|----|----|----|----|
| 01 설계개념 | ○ | ○ | — (시스템 폰트 스택) |
| 02 잠재공간 융합 | — (v2 부터 캔버스) | ○ | ○ · three-r170 (v3 3D 층) |
| 03 아키텍처 해부 | ○ | — | ○ |
| 04 데이터 파이프라인 | ○ | — | ○ |
| 05 검증 프로토콜 | ○ | — | ○ |

## 주의

- 파일을 수정하지 말 것. 갱신이 필요하면 원본 URL에서 다시 받고 이 표의 버전·날짜를 고친다.
- `d3.v7.min.js` 는 URL에 patch 버전이 고정돼 있지 않다(v7 최신본을 주는 주소). 재다운로드 시 버전이 올라갈 수 있으므로 파일 첫 줄 주석의 버전을 확인할 것.
- `fonts.css` 는 Google 이 준 CSS 원본에서 `https://fonts.gstatic.com/...` 절대 URL만 `fonts/<패밀리>-<해시>.woff2` 상대경로로 치환한 것이다. unicode-range 분할이 그대로 살아 있어, 브라우저는 131개 중 실제 필요한 subset(측정 시 17개)만 내려받는다.
- 폰트 CSS 는 5편의 weight 합집합(Inter 300·400·500·600·700 / Noto Sans KR 300·400·500·700)으로 한 벌만 받아 공유한다. 편별 weight 조합이 달라도 이 한 파일로 커버된다.
- 재다운로드 절차는 `fonts.css` 를 새로 받은 뒤 절대 URL을 같은 규칙으로 치환하면 된다. 치환 후 `grep -c 'fonts.gstatic.com' fonts.css` 가 0 이어야 한다.
