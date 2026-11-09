# ASTRA micro motion — 덱 배포 사본

정본 및 생성 출처: `Live2D/source/micro-gesture-v1/README.md` (저장소 루트 기준).

`01-amr_hgn_design_concept.html`의 씬0에서 사용한다. RGBA 투명 원화 3장과 `astra-micro.js`가 필요하다. 원본 이미지·표정 생성본은 별도로 보존한다.

갱신은 저장소 루트에서 `node Live2D/preview/deploy-micro.mjs`로 한다. 외부 CDN/API 호출은 없다. 실제 Cubism 모델이 아닌 작은 범위의 Canvas2D 메시 리그다.
