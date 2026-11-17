/* KSEIA 덱 사본(2026-11-15 · 2026-11-16 · 2026-11-17 건화 26쪽 최종판으로 다시 복사 — 11-17: 3단계 측정소 기둥 제거 · 펄스 약화 · 굴뚝 연기, 4단계 확대 장면 3차원 도시 모형 kh-future-city.js) — 원본 ../../../ppt-건화ai-tft-20261208/발표덱/assets/js/kh-future.js(건화 덱 26쪽 통합 환경 디지털 트윈 · 자동 재생 · 진행 막대).
   바꾼 것 — 1 장 목록 main.deck > .slide → .slide(숨긴 .cut 은 빠진다)  2 받을 파일 경로(three.js → graph/vendor, fut_*.js · kh-future-city.js → graph/fut)  3 계기판 왼쪽 위 절 번호 4 → 5(이 덱 5 전망).
   지금 장(.is-active) · 단계(data-step-now) · KHDeck(next · prev · go · slides)는 deck_link.js 가 이 덱에 맞춰 대 준다. 나레이션 · 배경음악은 ../../트윈나레이션/(건화 덱 사본, narr.js 의 경로 그대로).
   원본을 고치면 다시 복사하고 위 셋을 다시 바꾼다. ── 아래는 원본 그대로 ── */
/* 4장 현업 응용 — 미래상 '통합 환경 디지털 트윈' 화면 (2026-11-12 전면 재작성, 사용자 지시 — "실제 지도와 실제 확보되어 있는 데이터 … 최첨단 하이테크 느낌으로")
   .slide.fut-stage 에 두 겹으로 그린다 — 아래 canvas.futgl(three.js 3차원 장면) · 위 canvas.futcv(2D 계기판). 단계(.step 8개)를 넘길 때마다 장면이 바뀐다.
     0 대상 지역        미호강 상류(진천 · 음성) 3차원 지형 둘러보기
     1 구역 설정        (2026-11-13 사용자 지시 — 경계에 이어 평가대상범위 둘을 긋는다: 경계 반경 1 km(소음 · 진동) → 물러나며 10 km(대기질). 10 km 선은 3단계, 1 km 선은 6단계에도 선다. 시간표 TL1 · zoneRing) 가상 사업지구 경계가 바닥에 점선으로 그어진다(빛 장막은 2026-11-13 사용자 지시로 걷었다 — "빛 번짐 때문에 불난 것 같다")
     2 측정망 · 위성 · API 연계  실제 측정소(AirKorea) 실측값 · Two-Stage 1 km 추론 농도장(2023-03 사례 구간 재생 — 2026-11-12 사용자 지시로 E2E 에서 바꿈) + 오른쪽 판의 수신 채널 넷(측정망 · GEMS · TROPOMI · 기상청 API — 위성 · 기상청은 연계 구상의 연출이지 실제 수신이 아니다. 지도 위 위성 · API 그림은 복잡해 같은 날 걷었다)
                        2026-11-13 사용자 지시로 장면을 차례로 펼친다(시간표 TL2) — 넓은 뷰(지형은 그대로 두고 둘레 측정소까지, 서로 그래프로 이어 신호를 주고받는다) → 위 층 CMAQ-DA 5 km 장(실제 자료)
                        → 종전 뷰로 확대 → 아래 층 1 km 격자 → 두 층이 지형으로 내려앉으며 Two-Stage 1 km 농도장 → 사업지구 근접(1 km 칸) → 종전 뷰. 종전의 '측정소 → 사업지구' 호는 그래프로 바꿨다
     3 대기질 · 건강영향  배치 대안 1,000개를 돌려 농도장 · 파레토 전선 · 최적안 · 위해도(2026-11-12 사용자 지시로 건강영향을 대기 쪽에 묶었다)
                        2026-11-13 사용자 지시 — 대안을 돌리는 동안은 가까이 · 낮은 고도각으로 굴뚝 자리와 연기 방향을 보이고, 최적안이 서면 물러나 Two-Stage 1 km 배경 농도장에 대안 기여분(가상)을 더한 예측 농도장 한 장으로 합친다(시간표 S3)
     4 오존 고농도 · 폭염  Two-Stage 1 km O₃(2023-07-20 실제 고농도일의 칸별 일 최고값 — 2026-11-16 사용자 지시로 3월 사례 구간에서 바꿨다. 그날 측정소 실측 최고도 함께 보인다)로 오존 핫스팟 → 폭염 격자(가상)와 겹치는 칸 → 그 칸을 확대해 가상 건물 · 수목 · 그림자 · 지표면 온도 → 중첩 지도(2026-11-13 사용자 지시로 새로 넣었다 — 뒤 단계 번호가 하나씩 밀렸다. 시간표 TL4)
     5 수질 · 목표수질   소하천 → 본류 KRF 노드를 따라 하류로 퍼지는 BOD · TOC · SS 와 목표수질 판정(같은 날 지시 — 종전 PEC/PNEC · 위해도 판정을 걷었다)
                         2026-11-15 사용자 지시 — 수리 · 수질 모델 AI 에뮬레이터가 유량 · 부하 · 수온 조건을 바꾼 시나리오 500건을 돌리는 형태로(표 = 시나리오 중앙값, 초과 시나리오 비율). 시나리오 수 · 시간 · 초과 비율은 가상
                        2026-11-13 사용자 지시 — 동쪽 소하천에 더해 서쪽 소하천(→ 본류 30110213 → 합류점)도 함께 흘리고, 선은 배출구 빨강에서 하류 맑은 물색으로 칠한다. 2 · 3 · 5단계에서는 하천 흐름(입자 · 점선)을 움직이지 않는다
     6 소음 · 진동      (2026-11-13 사용자 지시 — 하루 시계: 가상 교통량 곡선을 따라 도로 소음이 출퇴근 피크에 오르고 새벽에 내리며, 지형이 해 뜨고 지듯 밝아지고 어두워진다. noiseClock) 사업지구 확대 · 실시간 등음선(실제 고속도로 선형 + 가상 장비) · 수음점 판정
     7 생태 · 종분포    미호종개 랜덤포레스트 종분포모델 · SHAP 요약 · 상호작용 제거 주효과(eco_sdm.js)
     8 생태 · 대안 영향  조사지점 ΔHSI 정규 크리깅 면 · 대안별 서식지 감소율 · 베리오그램
     9 종합 · 최적안    평행좌표(1,000개 → 기준 충족 → 최적 1) · 상위 후보 비교표 · 레이더 · 선정 근거
   ── 실제 자료 ──
     위성영상  fut_sat.js    국토교통부 VWorld 위성 z14                         (scripts/build_fut_sat.py)
     표고      fut_dem.js    Terrain Tiles(AWS Open Data) z12 → 0.001° 격자      (scripts/build_fut_dem.py)  ※ 화면은 높이를 EXAG 배 과장한다
     도로      fut_roads.js  © OpenStreetMap contributors 간선도로              (scripts/build_fut_roads.py)
     농도장 · 측정소 fut_air.js  Two-Stage 1 km 추론 NO₂ · AirKorea 실측 · CMAQ-DA 5 km NO₂, 2023-03-11 ~ 13 KST 사례 구간  (scripts/build_fut_air.mjs)
     바람      fut_wind.js   ERA5 10 m u · v 0.25°, 같은 사례 구간 2시간 간격 — 2단계 CMAQ 층 위의 바람장                    (scripts/build_fut_wind.py)
     하천      krf_scene.js  하천 KRF ver3 · 소하천 KRF 선형 · 노드 번호(102서버)
   ── 가상(홍보용 개념) ──
     사업지구 위치 · 경계, 굴뚝 · 장비, 배치 대안과 그 농도 · 수질 · 소음 · 생태 영향 수치, 수음점, 종분포 조사자료(eco_sdm.js 는 실제 계산이지만 입력이 가상).
     사례 구간 자료를 되돌려 트는 것이지 '실시간'이 아니다 — 화면 위 시계 칩에 사례 날짜를 적는다.
   three.js · 위 자료 넷은 이 장 두 쪽 앞에 닿으면 받는다(받기 전에는 계기판만 선다). ?print 는 8단계 끝 장면을 그린다. */
(function () {
  "use strict";
  const K = window.KRF_SCENE; if (!K) return;
  const slide = document.querySelector(".slide.fut-stage"); if (!slide) return;
  const cv = slide.querySelector("canvas.futcv"), glc = slide.querySelector("canvas.futgl");
  let g = cv.getContext("2d");
  const HUD = g;
  const QS = new URLSearchParams(location.search), PRINT = QS.has("print");
  const TAU = Math.PI * 2, W = 1920, H = 1080;
  const MX = 40, MY = 172, MW = K.W, MH = K.H;          // 8단계 카드 틀(종전 지도 틀 자리)
  const PX = 1330, PW = 560;                              // 오른쪽 판
  const FS = "Pretendard, 'Malgun Gothic', sans-serif", FD = "NanumSquare, Pretendard, sans-serif", FM = "Consolas, 'D2Coding', monospace";
  const rng = s => () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296;
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const ease = x => { x = clamp(x); return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; };
  const lerp = (a, b, f) => a + (b - a) * f;
  const pts = a => { const o = []; for (let i = 0; i < a.length; i += 2) o.push([a[i], a[i + 1]]); return o; };
  const fmt = n => Math.round(n).toLocaleString("en-US");

  /* ---------- 좌표 — 지도 틀(px, krf_scene.js) ↔ 경위도 ↔ 장면(km, x 동 · z 남 · y 위) ---------- */
  const LON0 = 127.36, LAT1 = 36.985, DLON = .30, DLAT = .17;           // 지도 틀 = 하천 KRF 자료 범위
  const CLON = 127.51, CLAT = 36.90, KX = 89.02, KZ = 110.95;           // 장면 원점 · 1° 의 km(위도 36.9°)
  const f2ll = (x, y) => [LON0 + x / MW * DLON, LAT1 - y / MH * DLAT];
  const ll2f = (lon, lat) => [(lon - LON0) / DLON * MW, (LAT1 - lat) / DLAT * MH];
  const ll2w = (lon, lat) => [(lon - CLON) * KX, -(lat - CLAT) * KZ];
  const f2w = (x, y) => ll2w(...f2ll(x, y));
  const EXAG = 3.2, HBASE = 60;                                         // 높이 과장 · 기준 표고(m)

  /* ---------- 자료(하천 · 가상 사업지구) ---------- */
  const MAIN = K.M.map(m => ({ id: m.id, p: pts(m.p) })), SMALL = K.S.map(pts);
  const PATH = pts(K.path), PL = [0];
  for (let i = 1; i < PATH.length; i++) PL.push(PL[i - 1] + Math.hypot(PATH[i][0] - PATH[i - 1][0], PATH[i][1] - PATH[i - 1][1]));
  const PLEN = PL[PL.length - 1];
  const pathAt = s => { s = clamp(s, 0, PLEN); let i = 1; while (i < PL.length - 1 && PL[i] < s) i++;
    const f = (s - PL[i - 1]) / Math.max(1e-6, PL[i] - PL[i - 1]); return [lerp(PATH[i - 1][0], PATH[i][0], f), lerp(PATH[i - 1][1], PATH[i][1], f)]; };
  const onPath = (x, y) => { let best = 1e9, bs = 0; for (let i = 0; i < PATH.length; i++) { const d = Math.hypot(PATH[i][0] - x, PATH[i][1] - y); if (d < best) { best = d; bs = PL[i]; } } return [best, bs]; };
  const PNODES = [];
  K.SN.forEach(([id, x, y]) => { const [d, s] = onPath(x, y); if (d < 3 && s < 90) PNODES.push({ id, x, y, s, kind: "소하천" }); });
  K.N.forEach(([id, x, y]) => { const [d, s] = onPath(x, y); if (d < 5) PNODES.push({ id, x, y, s, kind: "본류" }); });
  PNODES.sort((a, b) => a.s - b.s);
  const NODES = []; PNODES.forEach(n => { if (!NODES.some(m => m.id === n.id || Math.abs(m.s - n.s) < 25)) NODES.push(n); }); NODES.splice(6);
  // 서쪽 소하천 경로(2026-11-13 사용자 지시 — "좌측 소하천도 시뮬레이션") — 사업지구 남서쪽 소하천(KRF 노드 3011021328)이 본류 30110213 에 들고, 그 본류가 동쪽 경로와 만나는 합류점(30110214 시작점)까지.
  // 선형 · 노드 번호는 실제 KRF, 농도는 동쪽과 같은 가상 식이다. 합류점 아래는 동쪽 경로(PATH)가 이어 그린다
  const PATH2 = (() => { const sm = SMALL.find(q => q.some(([x, y]) => Math.hypot(x - 494, y - 426) < 2) && q.some(([x, y]) => Math.hypot(x - 448, y - 479) < 2)), mn = MAIN.find(m => m.id === "30110213");
    if (!sm || !mn) return [];
    const a = Math.hypot(sm[0][0] - 494, sm[0][1] - 426) < 2 ? sm.slice() : sm.slice().reverse(), e = a[a.length - 1];                      // 사업지구 안 → 본류
    let k = 0, best = 1e9; mn.p.forEach(([x, y], i) => { const d = Math.hypot(x - e[0], y - e[1]); if (d < best) { best = d; k = i; } });
    const end = PATH.reduce((b, q) => Math.min(b, Math.hypot(q[0] - mn.p[mn.p.length - 1][0], q[1] - mn.p[mn.p.length - 1][1])), 1e9) < 5;       // 본류 끝이 동쪽 경로와 닿는 쪽인지
    return a.concat(end ? mn.p.slice(k + 1) : mn.p.slice(0, k).reverse()); })();
  const PL2 = [0]; for (let i = 1; i < PATH2.length; i++) PL2.push(PL2[i - 1] + Math.hypot(PATH2[i][0] - PATH2[i - 1][0], PATH2[i][1] - PATH2[i - 1][1]));
  const PLEN2 = PL2[PL2.length - 1] || 0;
  const SCONF = PATH2.length ? onPath(...PATH2[PATH2.length - 1])[1] : 0;                    // 합류점의 동쪽 경로 거리
  const path2At = s2 => { s2 = clamp(s2, 0, PLEN2); let i = 1; while (i < PL2.length - 1 && PL2[i] < s2) i++;
    const f = (s2 - PL2[i - 1]) / Math.max(1e-6, PL2[i] - PL2[i - 1]); return [lerp(PATH2[i - 1][0], PATH2[i][0], f), lerp(PATH2[i - 1][1], PATH2[i][1], f)]; };
  const NODES2 = !PATH2.length ? [] : [{ id: "3011021328", x: PATH2[0][0], y: PATH2[0][1], s: 0, kind: "소하천(서)" }, (() => { const q = K.SN.find(([, x, y]) => Math.hypot(x - 448, y - 479) < 2), i = PATH2.findIndex(([x, y]) => Math.hypot(x - 448, y - 479) < 2); return { id: q ? q[0] : "30110213", x: 448, y: 479, s: PL2[Math.max(0, i)], kind: "본류" }; })()];
  if (NODES[0]) NODES[0].kind = "소하천(동)";
  // 수질 색 — 배출구(상류) 빨강 → 주황 → 하류 맑은 물색. u = 0(배출구) … 1(경로 끝)
  const WQC = [[0, [255, 58, 44]], [.3, [255, 150, 60]], [.62, [200, 222, 170]], [1, [112, 218, 255]]];
  const wqCol = u => { u = clamp(u); let i = 1; while (i < WQC.length - 1 && WQC[i][0] < u) i++; const [u0, A] = WQC[i - 1], [u1, B] = WQC[i], f = (u - u0) / (u1 - u0); return [0, 1, 2].map(q => Math.round(lerp(A[q], B[q], f))); };

  // 가상 사업지구(소하천 발원부를 감싼다) · 수음점
  const SITE = [[452, 380], [512, 368], [541, 381], [551, 409], [540, 438], [489, 447], [455, 431], [446, 404]];
  const SC = [497, 408], SCLL = f2ll(...SC), SCW = f2w(...SC);
  const area = (() => { let a = 0; SITE.forEach((p, i) => { const q = SITE[(i + 1) % SITE.length]; a += p[0] * q[1] - q[0] * p[1]; }); return Math.abs(a / 2) / (K.pxkm * K.pxkm); })();
  const inSite = (x, y) => { let c = false; for (let i = 0, j = SITE.length - 1; i < SITE.length; j = i++) { const [xi, yi] = SITE[i], [xj, yj] = SITE[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c; } return c; };
  // 수음점(가상) — 2026-11-13 사용자 지시("소음 수음점은 1km 이내로 이동")로 모두 사업지구 경계에서 1 km 안에 둔다. 경계까지 A 0.63 · B 0.53 · C 0.71 · D 0.70 km(종전 A 0.97 · C 1.15 · D 1.48 km. B 는 그대로)
  const RCV = [[570, 442, "A"], [502, 345, "B"], [432, 455, "C"], [578, 386, "D"]];
  // 평가대상범위(2026-11-13 사용자 지시 — "사업지구 경계 반경 1km, 10km 경계선 … 대기질 예측할때는 10km, 소음 예측할때는 1km") — 사업지구 경계에서 바깥으로 r km 떨어진 선(버퍼).
  // 장면 좌표(km)로 만든다: 꼭짓점마다 앞 · 뒤 변의 바깥 법선 사이를 호로 잇는다(사업지구는 볼록 다각형이다). 지도 틀(약 27 × 19 km)을 벗어나므로 지형 덮개가 아니라 계기판 판에 장면 좌표를 화면으로 옮겨 긋는다(zoneRing).
  // 반경 1 km · 10 km 는 사용자가 준 값이다(사업지구가 가상이라 실제 평가서의 범위가 아니다).
  const SITEW = SITE.map(p => f2w(...p));
  const bufRing = r => { const n = SITEW.length, arc = [], out = [];
    const nrm = i => { const a = SITEW[i], b = SITEW[(i + 1) % n], dx = b[0] - a[0], dz = b[1] - a[1], l = Math.hypot(dx, dz); let nx = dz / l, nz = -dx / l;
      if (nx * ((a[0] + b[0]) / 2 - SCW[0]) + nz * ((a[1] + b[1]) / 2 - SCW[1]) < 0) { nx = -nx; nz = -nz; } return Math.atan2(nz, nx); };
    for (let i = 0; i < n; i++) { const a0 = nrm((i + n - 1) % n); let da = nrm(i) - a0; while (da > Math.PI) da -= TAU; while (da < -Math.PI) da += TAU; const m = Math.max(1, Math.ceil(Math.abs(da) / .12));
      for (let k = 0; k <= m; k++) { const a = a0 + da * k / m; arc.push([SITEW[i][0] + r * Math.cos(a), SITEW[i][1] + r * Math.sin(a)]); } }
    arc.forEach((p, i) => { const q = arc[(i + 1) % arc.length], m = Math.max(1, Math.ceil(Math.hypot(q[0] - p[0], q[1] - p[1]) / .35)); for (let k = 0; k < m; k++) out.push([lerp(p[0], q[0], k / m), lerp(p[1], q[1], k / m)]); });   // 지형을 따라가게 0.35 km 마다 점을 둔다
    return out; };
  const ZONE = { noise: { nm: "소음 · 진동 평가대상범위 · 경계 반경 1 km", col: "255,255,255", ring: bufRing(1) }, air: { nm: "대기질 평가대상범위 · 경계 반경 10 km", col: "127,208,255", ring: bufRing(10) } };

  // 배치 대안 — 굴뚝 3기 위치 · 배출 계수(가상)
  const rndIn = r => { for (let k = 0; k < 200; k++) { const x = lerp(446, 551, r()), y = lerp(368, 447, r()); if (inSite(x, y)) return [x, y]; } return SC; };
  const ALTN = 1000, OPT = 607;                 // 2026-11-12 사용자 지시 — 대안 1,000개(종전 3,248개). 후보 번호도 1,000 안으로 옮겼다
  const RENO = { 2077: 277, 2981: 881, 1207: 607 }, reno = n => RENO[n] || n;   // eco_sdm.js(종전 번호로 계산해 둔 자료)의 대안 번호 → 화면 번호
  const OPT_ST = [[461, 420, .62], [470, 396, .62], [486, 433, .62]];
  const altStacks = k => { const r = rng(9001 + k * 7919); const q = .7 + .55 * r(); return [rndIn(r), rndIn(r), rndIn(r)].map(p => [p[0], p[1], q]); };
  const SCAT = (() => { const r = rng(77), a = []; for (let k = 0; k < ALTN; k++) { const x = r(), base = .18 + .5 * Math.pow(1 - x, 1.6); a.push([x, clamp(base + .55 * r() * r() + .03 * r())]); } return a; })();
  const PARETO = (() => { const s = SCAT.map((p, i) => [p[0], p[1], i]).sort((a, b) => a[0] - b[0]), o = []; let m = 9; s.forEach(p => { if (p[1] < m) { m = p[1]; o.push(p); } }); return o; })();
  const KNEE = PARETO[Math.floor(PARETO.length * .45)];

  /* ---------- 지형에 덮는 그림(지도 틀 좌표, OS 배) ---------- */
  const off = (w, h) => { const c = document.createElement("canvas"); c.width = w; c.height = h; return c; };
  const OS = 1.6, OVC = off(Math.round(MW * OS), Math.round(MH * OS)), OX = OVC.getContext("2d");
  // 서식적합도 분포(예시) — 본류를 따라 적합 구간과 비적합 구간을 나눠 칠한다. 구간 나눔은 화면용 예시 식이다(모델 출력이 아니다, 2026-11-12 사용자 지시 — "적합지, 비적합지 예시로 표현").
  const suit = (x, y) => Math.sin(x * .011 + 1.3) + Math.cos(y * .013 - .4) + .6 * Math.sin((x + y) * .006) > -.15;
  const HAB = (want, wMain, wSmall, blur, col) => {
    const c = off(MW, MH), x = c.getContext("2d"); x.filter = `blur(${blur}px)`; x.strokeStyle = col; x.lineCap = "round"; x.lineJoin = "round"; x.lineWidth = wMain;
    MAIN.forEach(m => { for (let i = 1; i < m.p.length; i++) { const a = m.p[i - 1], b = m.p[i]; if (suit((a[0] + b[0]) / 2, (a[1] + b[1]) / 2) !== want) continue; x.beginPath(); x.moveTo(a[0], a[1]); x.lineTo(b[0], b[1]); x.stroke(); } });
    if (wSmall) { x.globalAlpha = .7; x.lineWidth = wSmall; SMALL.forEach(s => { x.beginPath(); s.forEach((p, i) => i ? x.lineTo(...p) : x.moveTo(...p)); x.stroke(); }); }
    return c;
  };
  const UNC = [240, 128, 140];                    // 비적합지 색(옅은 산호빛 — 적합지 초록보다 약하게)
  const SPC = [{ nm: "미호종개", en: "Cobitis choii", gr: "멸종위기 야생생물 Ⅰ급 · 고유종", hab: HAB(true, 16, 0, 7, "rgb(120,230,190)"), un: HAB(false, 13, 3, 7, `rgb(${UNC.join(",")})`), col: [120, 230, 190] }];
  // 가상 조사자료 — 출현은 적합 구간, 비출현은 비적합 구간 · 소하천에 놓는다(그림과 맞물리게)
  const OCC = (() => { const r = rng(31), a = []; for (let k = 0; k < 400 && a.length < 70; k++) { const m = MAIN[Math.floor(r() * MAIN.length)].p, p = m[Math.floor(r() * m.length)]; if (suit(p[0], p[1])) a.push([p[0] + (r() - .5) * 6, p[1] + (r() - .5) * 6]); } return a; })();
  const ABS = (() => { const r = rng(47), a = []; for (let k = 0; k < 60; k++) { const s = SMALL[Math.floor(r() * SMALL.length)], p = s[Math.floor(r() * s.length)]; a.push([p[0] + (r() - .5) * 6, p[1] + (r() - .5) * 6]); }
    for (let k = 0; k < 400 && a.length < 100; k++) { const m = MAIN[Math.floor(r() * MAIN.length)].p, p = m[Math.floor(r() * m.length)]; if (!suit(p[0], p[1])) a.push([p[0] + (r() - .5) * 6, p[1] + (r() - .5) * 6]); } return a; })();

  /* ---------- 생태 — 랜덤포레스트 · SHAP · 크리깅 결과(eco_sdm.js, 입력 자료 가상) ---------- */
  const E = window.ECO_SDM || null;
  const kcol = v => { const S = [[255, 236, 140], [250, 170, 70], [232, 72, 64], [175, 40, 150]], x = clamp(v) * 3, i = Math.min(2, Math.floor(x)), f = x - i, A = S[i], B = S[i + 1];
    return [A[0] + (B[0] - A[0]) * f, A[1] + (B[1] - A[1]) * f, A[2] + (B[2] - A[2]) * f, v < .05 ? 0 : .28 + .6 * clamp(v * 1.5)]; };
  // 8단계 영향 면은 하천 구간에만 남긴다(2026-11-13 사용자 지시 — "기존안 영향범위가 주변 삼림 말이 안된다. 제거해"). 미호종개는 어류라 서식지가 하천이다 — 크리깅 면을 본류 · 소하천 둘레 띠로 오려 내 삼림 · 농경지 위의 면을 걷는다.
  // 오려 내는 것은 화면에 칠하는 면뿐이다. 크리깅 격자 값 · 감소율 · 영향 면적(eco_sdm.js)은 그대로다
  const KMASK = (() => { const c = off(MW, MH), x = c.getContext("2d"); x.filter = "blur(3px)"; x.strokeStyle = "#fff"; x.lineCap = "round"; x.lineJoin = "round";
    x.lineWidth = 20; MAIN.forEach(m => { x.beginPath(); m.p.forEach((p, i) => i ? x.lineTo(...p) : x.moveTo(...p)); x.stroke(); });
    x.lineWidth = 11; SMALL.forEach(s => { x.beginPath(); s.forEach((p, i) => i ? x.lineTo(...p) : x.moveTo(...p)); x.stroke(); }); return c; })();
  const KC = !E ? [] : E.alts.map(a => {          // 8배 쌍선형 확대 → 0.1 간격 등치 띠 + 경계선
    const b = atob(a.grid), GX = E.GX, GY = E.GY, U = 8, w = GX * U, h = GY * U, val = new Float32Array(w * h);
    const at = (i, j) => b.charCodeAt(clamp(j, 0, GY - 1) * GX + clamp(i, 0, GX - 1)) / 255;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { const fx = (x + .5) / U - .5, fy = (y + .5) / U - .5, i = Math.floor(fx), j = Math.floor(fy), u = fx - i, v = fy - j;
      val[y * w + x] = (at(i, j) * (1 - u) + at(i + 1, j) * u) * (1 - v) + (at(i, j + 1) * (1 - u) + at(i + 1, j + 1) * u) * v; }
    const c = off(w, h), x2 = c.getContext("2d"), im = x2.createImageData(w, h), band = v => Math.floor(v * 10);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { const k = y * w + x, v = val[k], bd = band(v), col = kcol((bd + .5) / 10);
      const edge = bd > 0 && ((x + 1 < w && band(val[k + 1]) !== bd) || (y + 1 < h && band(val[k + w]) !== bd));
      im.data[k * 4] = edge ? 40 : col[0]; im.data[k * 4 + 1] = edge ? 10 : col[1]; im.data[k * 4 + 2] = edge ? 30 : col[2]; im.data[k * 4 + 3] = (bd === 0 ? 0 : edge ? .7 : col[3]) * 255; }
    x2.putImageData(im, 0, 0);
    x2.globalCompositeOperation = "destination-in"; x2.drawImage(KMASK, 0, 0, w, h); x2.globalCompositeOperation = "source-over";      // 하천 밖(삼림 · 농경지)은 지운다
    return c; });

  const OZR4 = 7.5;                               // 4단계 — 오존 · 폭염을 보는 반경(km, 사업지구 중심에서)
  const KPER = 2.2;                               // 7단계 — 대안 하나를 보여 주는 시간(초). 2026-11-12 사용자 지시로 3.2 → 2.2
  /* ---------- 단계 상태 ---------- */
  let step = 0, stepT0 = 0;
  let HOLD8 = false;                              // 자동 재생 중 — 8단계 대안 넘기기가 한 바퀴 뒤 최적안에 머문다(끝의 자동 재생이 켜고 끈다)
  const STAGES = [
    ["구역 설정", "사업지구 경계 입력 · 하천 · 측정망 자동 연결"],
    ["측정망 · 위성 · API 연계", "AirKorea 실측 · GEMS · TROPOMI · 기상청 API · 1 km 추론"],
    ["대기질 · 건강영향", "배치 대안 자동 생성 · 서로게이트 농도장 · 위해도 즉시 산정"],     // 2026-11-13 사용자 지시 — 이름에서 '대안 탐색'을 뺐다
    ["오존 고농도 · 폭염", "1 km 오존 · 고온 격자 중첩 · 건물 · 녹지 지표면 온도 · 저감방안 수립지역"],
    ["수질 · 목표수질", "수리 · 수질 모델 AI 에뮬레이터 · 시나리오 예측 · 목표수질 판정"],
    ["소음 · 진동", "CUDA 기반 실시간 모델링 · 수음점 판정"],
    ["생태 · 종분포", "트리 기반 종분포모델(랜덤포레스트) · SHAP 해석"],
    ["생태 · 대안 영향", "크리깅 공간보간 · 대안별 미호종개 서식지 영향"],
    ["종합 · 최적안", "기준 충족 선별 · 가중합 순위 · 최적안 도출"],
  ];

  /* ---------- 그리기 도구(지금 그리는 판 g — 계기판 HUD 또는 지형 덮개 OX) ---------- */
  const T = (s, x, y, size, col, o = {}) => { g.font = `${o.w || 600} ${size}px ${o.f || FS}`; g.fillStyle = col; g.textAlign = o.a || "left"; g.textBaseline = o.b || "alphabetic"; g.fillText(s, x, y); };
  const rr = (x, y, w, h, r) => { g.beginPath(); g.roundRect ? g.roundRect(x, y, w, h, r) : g.rect(x, y, w, h); };
  const poly = (p, close) => { g.beginPath(); p.forEach((q, i) => i ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1])); if (close) g.closePath(); };
  const tag = (s, x, y, col = "rgba(6,14,32,.82)", fg = "#e6efff", size = 15, edge = "rgba(120,200,255,.55)") => {
    g.font = `700 ${size}px ${FS}`; const w = g.measureText(s).width + 18; rr(x, y - size - 5, w, size + 12, 4); g.fillStyle = col; g.fill();
    g.strokeStyle = edge; g.lineWidth = 1; g.stroke(); g.fillStyle = edge; g.fillRect(x, y - size - 5, 3, size + 12); T(s, x + 10, y + 1, size, fg, { w: 700 }); return w; };
  const RAMP = [[30, 80, 170], [60, 170, 220], [120, 220, 150], [250, 220, 90], [245, 120, 60], [210, 40, 60]];
  const ramp = (v, a) => { v = clamp(v); const x = v * 5, i = Math.min(4, Math.floor(x)), f = x - i, A = RAMP[i], B = RAMP[i + 1]; return [A[0] + (B[0] - A[0]) * f, A[1] + (B[1] - A[1]) * f, A[2] + (B[2] - A[2]) * f, a]; };

  /* ---------- 장(field) 계산 — 낮은 해상도로 계산해 늘려 덮는다 ---------- */
  const FW = 210, FH = 147, FC = off(FW, FH), FX = FC.getContext("2d"), FI = FX.createImageData(FW, FH);
  function field(view, fn) {           // view = [x0,y0,x1,y1] 지도 틀 좌표, fn(x,y,칸 번호) → [r,g,b,a]
    const d = FI.data, [x0, y0, x1, y1] = view;
    for (let j = 0; j < FH; j++) for (let i = 0; i < FW; i++) {
      const c = fn(x0 + (i + .5) / FW * (x1 - x0), y0 + (j + .5) / FH * (y1 - y0), j * FW + i), k = (j * FW + i) * 4;
      d[k] = c[0]; d[k + 1] = c[1]; d[k + 2] = c[2]; d[k + 3] = c[3] * 255;
    }
    FX.putImageData(FI, 0, 0); g.imageSmoothingEnabled = true; g.drawImage(FC, x0, y0, x1 - x0, y1 - y0);
  }
  let wind = -.35;
  const aqVal = (x, y, stacks) => {
    let c = 0; const ux = Math.cos(wind), uy = Math.sin(wind);
    for (const [sx, sy, q] of stacks) { const dx = x - sx, dy = y - sy, al = dx * ux + dy * uy, cr = -dx * uy + dy * ux;
      if (al > -6) { const a = Math.max(al, 0) + 6, sg = 3 + .16 * a; c += q * 26 / (a + 14) * Math.exp(-cr * cr / (2 * sg * sg)) * (1 - Math.exp(-a / 8)); } }
    return c;
  };
  const pxm = 1000 / K.pxkm;                     // 지도 틀 1px = m
  let NROAD = [];                                // 사업지구 둘레의 실제 고속도로 선분(지도 틀 좌표) — 자료를 받은 뒤 채운다
  const srcE = (x, y, srcs) => { let e = 0; for (const [sx, sy, lw] of srcs) { const r = Math.max(5, Math.hypot(x - sx, y - sy) * pxm); e += Math.pow(10, (lw - 20 * Math.log10(r) - 8) / 10); } return e; };   // 움직이는 장비
  const roadE = (x, y) => {                       // 고속도로 — 가장 가까운 선분까지의 거리로(도로는 움직이지 않는다)
    let dmin = 1e9; for (const [ax, ay, bx, by] of NROAD) { const vx = bx - ax, vy = by - ay,
      f = clamp(((x - ax) * vx + (y - ay) * vy) / (vx * vx + vy * vy || 1)), d = Math.hypot(x - ax - f * vx, y - ay - f * vy); if (d < dmin) dmin = d; }
    return dmin < 1e8 ? Math.pow(10, (71 - 10 * Math.log10(Math.max(8, dmin * pxm) / 10)) / 10) : 0;
  };
  // 6단계 하루 시계(2026-11-13 사용자 지시 — "교통량 피크타임에 소음도 올라가고 새벽에 내려가는 상황 … 해가 뜨고 지는 상황") — 04시에서 시작해 NDAY 초에 24시간을 돈다.
  // 교통량 곡선은 가상이다(출근 08시 · 퇴근 18시 두 봉우리, 03시 무렵 최저 — 실제 교통량 자료가 아니다). 도로 소음은 교통량 비의 10·log10 만큼 오르내리고(피크 = 종전 기준 71 dB + 2), 장비는 07–18시에만 돈다
  const NDAY = 16, trafQ = h => clamp(.06 + .62 * Math.exp(-Math.pow((h - 8) / 1.6, 2)) + .68 * Math.exp(-Math.pow((h - 18) / 1.9, 2)) + .36 * Math.exp(-Math.pow((h - 13) / 3.4, 2)), 0, 1);
  const sstep = (a, b, x) => { x = clamp((x - a) / (b - a)); return x * x * (3 - 2 * x); };
  const noiseClock = tau => { const h = (4 + tau * 24 / NDAY) % 24, q = trafQ(h), day = sstep(5.2, 7.6, h) * (1 - sstep(18.4, 20.6, h));
    return { h, q, kq: q * Math.pow(10, .2), eq: sstep(6.6, 7.4, h) * (1 - sstep(17.8, 18.6, h)), day, warm: .85 * (Math.exp(-Math.pow((h - 6.5) / .9, 2)) + Math.exp(-Math.pow((h - 19.3) / 1, 2))),
      nm: h < 5 ? "새벽" : h < 6.8 ? "이른 아침" : h < 9.4 ? "출근 피크" : h < 16.6 ? "주간" : h < 19.6 ? "퇴근 피크" : h < 22 ? "저녁" : "심야" }; };
  let NT = noiseClock(0);                         // 지금 시각의 상태 — drawOverlay 가 6단계에서 갱신한다
  const noiseVal = (x, y, srcs) => 10 * Math.log10(srcE(x, y, srcs) * NT.eq + roadE(x, y) * NT.kq + 1e-3);
  // 5단계 소음 장 — 도로 항은 칸마다 한 번만 계산해 둔다(2026-11-12 사용자 지시 "24장 가볍게" — 종전엔 프레임마다 30,870칸 × 선분 238개를 다시 쟀다). 프레임마다 더하는 것은 장비 둘뿐이다. 값은 같다
  let NRE = null;
  const roadGrid = () => { const [x0, y0, x1, y1] = NVIEW; NRE = new Float64Array(FW * FH);
    for (let j = 0; j < FH; j++) for (let i = 0; i < FW; i++) NRE[j * FW + i] = roadE(x0 + (i + .5) / FW * (x1 - x0), y0 + (j + .5) / FH * (y1 - y0)); };
  const NB = [[50, [60, 170, 90]], [55, [150, 205, 80]], [60, [240, 225, 80]], [65, [250, 165, 60]], [70, [235, 80, 60]], [75, [170, 30, 70]]];
  const noiseCol = L => { let c = null; for (const [th, col] of NB) if (L >= th) c = col; return c ? [...c, .62] : [0, 0, 0, 0]; };
  const NVIEW = [SC[0] - 175, SC[1] - 122, SC[0] + 175, SC[1] + 123];   // 소음 계산 창(사업지구 둘레 약 7.4 × 5.2 km)
  // 수질(가상) — 노드별 예측 = 배경 + 사업 기여분(하류로 갈수록 희석). 목표수질도 이 화면의 가상 설정값이다(실제 고시값이 아니다 — 실제 값을 받으면 WQT 만 바꾼다)
  const WQT = { bod: 3, toc: 4, ss: 25 };           // 목표수질(가상 설정, mg/L)
  function conc(i) {
    const k = Math.pow(.58, i), bod = 1.6 + 1.0 * k, toc = 2.6 + .85 * k, ss = 9 + 6 * k;
    return { bod, toc, ss, r: Math.max(bod / WQT.bod, toc / WQT.toc, ss / WQT.ss), tt: [0, 2.4, 7.9, 15.2, 26.8, 41.5][i] ?? 50 };
  }

  /* =====================================================================================================
     3차원 장면 — three.js. 자료를 다 받은 뒤 boot() 가 한 번 만든다
     ===================================================================================================== */
  let G3 = null;                                 // { render(t, tau), project(wx, wy, wz) → [sx, sy, 보임], hAt(wx, wz) }
  const D3 = { sta: [], roads: [], clock: "", fieldOn: 0 };
  const CAMS = [                                 // 단계별 카메라 — 보는 점(지도 틀 px) · 거리 km · 고도각° · 방위각°(0 = 남쪽에서 북쪽을 봄, + = 시계 방향으로 돎) · 화면 중심 치우침(px)
    { f: [630, 440], d: 47, el: 40, az: -16, ox: 290 },
    { f: SC, d: 15, el: 36, az: 22, ox: 290 },
    { f: [640, 430], d: 50, el: 52, az: 4, ox: 290 },
    { f: [560, 400], d: 40, el: 44, az: -26, ox: 290 },      // 3 대기질 — 2026-11-13 반경 10 km 평가대상범위가 다 들게 물러났다(종전 f [600, 380] · d 24 · el 40)
    { f: [SC[0] + 20, SC[1] + 10], d: 21, el: 50, az: -10, ox: 290 },      // 4 오존 고농도 · 폭염 — 시간표 TL4 · cam4 가 움직인다
    { f: [545, 620], d: 25, el: 46, az: 16, ox: 290 },
    { f: [SC[0] + 10, SC[1] + 4], d: 8.2, el: 50, az: -10, ox: 290 },
    { f: [630, 450], d: 42, el: 60, az: 8, ox: 290 },
    { f: [600, 520], d: 31, el: 60, az: -8, ox: 290 },
    { f: [630, 440], d: 58, el: 32, az: 30, ox: 0 },
  ];
  // 2단계 시간표(초, 단계에 들어선 뒤) — 2026-11-13 사용자 지시. graph 측정망 그래프 · cmaq 위 층 5 km 장 · zoom 종전 뷰로 확대 · g1 아래 층 1 km 격자 · drop 두 층이 지형으로 · fld 1 km 농도장 · near 사업지구 근접 · back 종전 뷰로
  const TL2 = { graph: .8, cmaq: 3.8, zoom: 7.2, g1: 9.8, drop: 12.4, fld: 13.9, near: 17.2, back: 21.6 };
  const TL2CAM = { wide: { f: [640, 430], d: 165, el: 50, az: 4, ox: 290 }, near: { f: [SC[0] + 26, SC[1] + 6], d: 15, el: 46, az: -8, ox: 290 } };
  const seg = (tau, a, d) => ease((tau - a) / d);
  // 1단계 시간표 — 사업지구 경계(0–1.8초) → n1 반경 1 km 선 → back 물러남 → a10 반경 10 km 선(2026-11-13 사용자 지시 — 평가대상범위 둘). 10 km 선이 화면에 다 들게 물러난다
  const TL1 = { n1: 2.3, back: 3.6, a10: 4.6 }, TL1CAM = { f: [SC[0] + 40, SC[1] + 10], d: 45, el: 50, az: 8, ox: 290 };
  const cam1 = tau => { const k = seg(tau, TL1.back, 2.8), A = CAMS[1], B = TL1CAM, o = {};
    for (const q of ["el", "az", "ox"]) o[q] = lerp(A[q], B[q], k);
    o.d = Math.exp(lerp(Math.log(A.d), Math.log(B.d), k)); o.f = [0, 1].map(i => lerp(A.f[i], B.f[i], k)); return o; };
  const cam2 = tau => { const k1 = seg(tau, TL2.zoom, 3), k2 = seg(tau, TL2.near, 3) - seg(tau, TL2.back, 3), A = TL2CAM.wide, B = CAMS[2], C = TL2CAM.near, o = {};
    for (const k of ["el", "az", "ox"]) o[k] = lerp(lerp(A[k], B[k], k1), C[k], k2);
    o.d = Math.exp(lerp(lerp(Math.log(A.d), Math.log(B.d), k1), Math.log(C.d), k2));          // 거리는 배율로 옮긴다
    o.f = [0, 1].map(i => lerp(lerp(A.f[i], B.f[i], k1), C.f[i], k2)); return o; };
  // 3단계 시간표 — 대안 1,000개를 돌리는 동안(settle 까지)은 가까이 · 낮게 보고, 최적안이 서면 물러나며 merge 부터 배경 농도장과 대안 기여분을 한 장으로 합친다(2026-11-13 사용자 지시)
  const S3 = { settle: 6.8, merge: 8.6 }, S3CAM = { f: [SC[0] + 78, SC[1] - 6], d: 11, el: 21, az: -6, ox: 290 };
  const ADDV = 1.5, ADDPPB = 36;                 // 대안 기여분(가상) — aqVal 값 ADDV 를 ADDPPB ppb 로 본다(화면용 환산, 근거 있는 값이 아니다)
  const cam3 = tau => { const k = seg(tau, S3.settle + .2, 2.8), A = S3CAM, B = CAMS[3], o = {};
    for (const q of ["el", "az", "ox"]) o[q] = lerp(A[q], B[q], k);
    o.d = Math.exp(lerp(Math.log(A.d), Math.log(B.d), k)); o.f = [0, 1].map(i => lerp(A.f[i], B.f[i], k)); return o; };
  // 4단계 시간표(오존 고농도 · 폭염, 2026-11-13 사용자 지시) — o3 1 km 오존 농도 · hotO 오존 핫스팟 · hotH 폭염 격자 · both 중첩 격자 · zoom 중첩 격자로 확대 · bld 가상 건물 · therm 표면온도 · back 물러남 · map 중첩 지도
  const TL4 = { o3: .5, hotO: 1.8, heat: 5.2, hotH: 6.4, both: 9.8, zoom: 13.4, bld: 15.8, near: 18.8, far: 26.6, therm: 28.4, hotz: 31.2 };      // o3 오존 격자 · heat 고온 격자 · both 중첩(위치만) · zoom 사업지구 안팎으로 확대 · bld 가상 건물 · therm 지표면 온도 · hotz 고온지역 · 저감방안 제안   // near – far 근접 장면(2026-11-17 사용자 지시 — 건물 · 거리 · 그림자를 가까이서 훑는다. 그만큼 therm · hotz 가 10.8초 늦어졌다)
  const MREG = [488, 376, 590, 444];             // 4단계 확대 구역(지도 틀 px, 서 · 북 · 동 · 남) — 사업지구 동쪽 안(산업단지)과 바깥(완충 녹지 · 주거지)을 함께 담는다. 약 2.2 × 1.5 km
  const cam4 = tau => { const k1 = seg(tau, TL4.zoom, 2.6), A = CAMS[4], B = { f: [(MREG[0] + MREG[2]) / 2 + 2, (MREG[1] + MREG[3]) / 2 + 5], d: 4.5, el: 41, az: 44, ox: 290 }, o = {};      // 남동쪽에서 본다 — 오후 그림자가 건물에 가리지 않게
    for (const q of ["el", "az", "ox"]) o[q] = lerp(A[q], B[q], k1);
    o.d = Math.exp(lerp(Math.log(A.d), Math.log(B.d), k1)); o.f = [0, 1].map(i => lerp(A.f[i], B.f[i], k1));
    const k2 = seg(tau, TL4.near, 2.6) - seg(tau, TL4.far, 2.4); if (k2 > 0) { const gl = ease((tau - TL4.near - 1) / (TL4.far - TL4.near - 1.4)), [P, Q] = CL4, C = { f: [0, 1].map(i => lerp(P.f[i], Q.f[i], gl)) };      // 근접 장면 — 야적장에서 간선을 따라 공동주택 단지까지 미끄러진다
      for (const q of ["d", "el", "az"]) C[q] = lerp(P[q], Q[q], gl); for (const q of ["el", "az"]) o[q] = lerp(o[q], C[q], k2); o.d = Math.exp(lerp(Math.log(o.d), Math.log(C.d), k2)); o.f = [0, 1].map(i => lerp(o.f[i], C.f[i], k2)); }
    return o; };
  const CL4 = [{ f: [513, 417], d: 1.15, el: 27, az: -42 }, { f: [571, 419], d: 1.0, el: 24, az: -22 }];      // 근접 장면의 처음 · 끝(지도 틀 px · km · °) — 남서쪽에서 본다(오후 볕이 드는 서쪽 면이 보이게)
  // 폭염 시간대의 태양(7월 20일 · 북위 36.9° · 적위 20.6° 근사 — 2026-11-16 오존 사례일에 맞췄다. 종전 8월 1일 · 18°) — KST 시각 → 고도각 · 방위각(남쪽에서 서쪽으로 +). 그림자 방향 · 길이에 쓴다
  const sunAt = kst => { const R = Math.PI / 180, ph = 36.9 * R, de = 20.6 * R, H = 15 * (kst - .6 - 12) * R;
    return { el: Math.asin(Math.sin(ph) * Math.sin(de) + Math.cos(ph) * Math.cos(de) * Math.cos(H)), az: Math.atan2(Math.sin(H), Math.cos(H) * Math.sin(ph) - Math.tan(de) * Math.cos(ph)) }; };
  const STV = { road: .97, pave: .9, res: .74, grass: .52, shade: .42, tree: .26 }, stT = v => 30 + 24 * v;      // 지표면 온도(가상) — 색 눈금 값 · °C 환산
  const camNow = { x: 0, z: 0, d: 47, el: 40, az: -16, ox: 290 };
  let camFrom = { ...camNow }, camT0 = -9;

  function boot() {
    const THREE = window.THREE, SAT = window.FUT_SAT, DEM = window.FUT_DEM, AIR = window.FUT_AIR, RD = window.FUT_ROADS;
    if (!THREE || !SAT || !DEM || !AIR) return false;
    const BB = SAT.bbox, EW = (BB[2] - BB[0]) * KX, NS = (BB[3] - BB[1]) * KZ;       // 지형 범위(km)
    const [TX0, TZ0] = ll2w(BB[0], BB[3]);                                             // 북서 모서리
    // 표고
    const db = atob(DEM.b64), dz = new Float32Array(DEM.nx * DEM.ny);
    for (let i = 0; i < dz.length; i++) dz[i] = (db.charCodeAt(i * 2) | (db.charCodeAt(i * 2 + 1) << 8)) / 10;
    const demAt = (lon, lat) => { const fx = clamp((lon - DEM.bbox[0]) / (DEM.bbox[2] - DEM.bbox[0]), 0, .9999) * (DEM.nx - 1), fy = clamp((DEM.bbox[3] - lat) / (DEM.bbox[3] - DEM.bbox[1]), 0, .9999) * (DEM.ny - 1),
      i = Math.floor(fx), j = Math.floor(fy), u = fx - i, v = fy - j, k = j * DEM.nx + i;
      return (dz[k] * (1 - u) + dz[k + 1] * u) * (1 - v) + (dz[k + DEM.nx] * (1 - u) + dz[k + DEM.nx + 1] * u) * v; };
    const hAt = (wx, wz) => (demAt(CLON + wx / KX, CLAT - wz / KZ) - HBASE) / 1000 * EXAG;
    const fh = (x, y, up = 0) => { const [wx, wz] = f2w(x, y); return new THREE.Vector3(wx, hAt(wx, wz) + up, wz); };

    const R = new THREE.WebGLRenderer({ canvas: glc, antialias: true, alpha: false, powerPreference: "high-performance", preserveDrawingBuffer: PRINT });
    R.setPixelRatio(1); R.setSize(W, H, false); R.setClearColor(0x03070f, 1);
    R.shadowMap.enabled = true; R.shadowMap.type = QS.has("cpcf") ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap; R.shadowMap.autoUpdate = false;      // 4단계 도시 모형의 태양 그림자 — 그 장면이 보일 때만 다시 굽는다(kh-future-city.js)
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(36, W / H, .2, 400);

    /* ── 지형 ── */
    const SEGX = 300, SEGY = 172, geo = new THREE.PlaneGeometry(EW, NS, SEGX, SEGY); geo.rotateX(-Math.PI / 2);
    { const p = geo.attributes.position, cx = TX0 + EW / 2, cz = TZ0 + NS / 2;
      for (let i = 0; i < p.count; i++) { const wx = p.getX(i) + cx, wz = p.getZ(i) + cz; p.setXYZ(i, wx, hAt(wx, wz), wz); }
      geo.computeVertexNormals(); }
    const img = new Image(), satTex = new THREE.Texture(img); img.onload = () => { satTex.needsUpdate = true; setTimeout(warm, 0); }; img.src = SAT.src;
    satTex.colorSpace = THREE.NoColorSpace; satTex.anisotropy = 8; satTex.generateMipmaps = true; satTex.minFilter = THREE.LinearMipmapLinearFilter;
    const ovTex = new THREE.CanvasTexture(OVC); ovTex.colorSpace = THREE.NoColorSpace; ovTex.generateMipmaps = false; ovTex.minFilter = THREE.LinearFilter; ovTex.anisotropy = 4;
    // 농도장 — 0.01° 칸, 프레임 사이를 섞어 한 장으로 올린다
    const FLD = AIR.field, fb = atob(FLD.sp.no2.b64), fmk = atob(FLD.mask), fN = FLD.nx * FLD.ny, fdat = new Uint8Array(fN * 4);
    const fldTex = new THREE.DataTexture(fdat, FLD.nx, FLD.ny, THREE.RGBAFormat); fldTex.magFilter = THREE.LinearFilter; fldTex.minFilter = THREE.LinearFilter; fldTex.needsUpdate = true;
    const setField = ff => { const a = Math.floor(ff) % FLD.nf, b = (a + 1) % FLD.nf, u = ff - Math.floor(ff);
      for (let k = 0; k < fN; k++) { fdat[k * 4] = fb.charCodeAt(a * fN + k) * (1 - u) + fb.charCodeAt(b * fN + k) * u; fdat[k * 4 + 3] = fmk.charCodeAt(k) ? 255 : 0; } fldTex.needsUpdate = true; };
    const imU = lon => (lon - BB[0]) / (BB[2] - BB[0]), imV = lat => (BB[3] - lat) / (BB[3] - BB[1]);   // 그림 좌표(왼쪽 위 원점)
    // 대안 기여분(가상) — 3단계 끝에 배경 농도장에 더할 값(지도 틀 FW × FH 칸, 0행 = 북쪽)
    const adat = new Uint8Array(FW * FH * 4), addTex = new THREE.DataTexture(adat, FW, FH, THREE.RGBAFormat); addTex.magFilter = THREE.LinearFilter; addTex.minFilter = THREE.LinearFilter; addTex.needsUpdate = true;
    const setAdd = stk => { for (let j = 0; j < FH; j++) for (let i = 0; i < FW; i++) { const k = (j * FW + i) * 4; adat[k] = clamp(aqVal((i + .5) / FW * MW, (j + .5) / FH * MH, stk) / ADDV) * 255; adat[k + 3] = 255; } addTex.needsUpdate = true; };
    const U = {
      tAdd: { value: addTex }, uMerge: { value: 0 }, uAdd: { value: ADDPPB },
      tSat: { value: satTex }, tOv: { value: ovTex }, tFld: { value: fldTex },
      uCore: { value: new THREE.Vector4(imU(LON0), imV(LAT1), imU(LON0 + DLON), imV(LAT1 - DLAT)) },
      uFbox: { value: new THREE.Vector4(imU(FLD.lon0 - FLD.dl / 2), imV(FLD.lat0 + FLD.dl / 2), imU(FLD.lon0 + (FLD.nx - .5) * FLD.dl), imV(FLD.lat0 - (FLD.ny - .5) * FLD.dl)) },
      uFn: { value: new THREE.Vector2(FLD.nx, FLD.ny) }, uFld: { value: 0 }, uFmax: { value: 24 }, uGrid: { value: .0 }, uScan: { value: -1 }, uSite: { value: new THREE.Vector2(SCW[0], SCW[1]) },
      uDim: { value: 1 }, uTime: { value: 0 }, uCont: { value: 50 / 1000 * EXAG }, uSatK: { value: 1 }, uCell: { value: .06 }, uBlock: { value: 0 }, uFk: { value: 0 }, uWarm: { value: 0 },   // uCell 1 km 칸 경계선 세기 · uBlock 1 = 칸마다 한 값(1 km 칸이 보이게)
    };
    const GLRAMP = `vec3 ramp(float v){ v = clamp(v, 0., 1.) * 5.;
          vec3 a = vec3(30., 80., 170.), b = vec3(60., 170., 220.), c = vec3(120., 220., 150.), d = vec3(250., 220., 90.), e = vec3(245., 120., 60.), f = vec3(210., 40., 60.);
          vec3 r = v < 1. ? mix(a, b, v) : v < 2. ? mix(b, c, v - 1.) : v < 3. ? mix(c, d, v - 2.) : v < 4. ? mix(d, e, v - 3.) : mix(e, f, v - 4.); return r / 255.; }`;
    const terrain = new THREE.Mesh(geo, new THREE.ShaderMaterial({ uniforms: U,
      vertexShader: "varying vec2 vUv; varying vec3 vW; varying vec3 vN; void main(){ vUv = uv; vW = position; vN = normal; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",
      fragmentShader: `
        precision highp float;
        uniform sampler2D tSat, tOv, tFld, tAdd; uniform vec4 uCore, uFbox; uniform vec2 uFn, uSite;
        uniform float uFld, uFmax, uGrid, uScan, uDim, uTime, uCont, uSatK, uCell, uBlock, uMerge, uAdd, uFk, uWarm;
        varying vec2 vUv; varying vec3 vW; varying vec3 vN;
        ${GLRAMP}
        void main(){
          vec2 im = vec2(vUv.x, 1. - vUv.y);
          vec3 s = texture2D(tSat, vUv).rgb; float l = dot(s, vec3(.299, .587, .114));
          vec3 c = mix(vec3(l), s, .66); c = pow(c, vec3(1.32)) * vec3(.56, .80, 1.10) * 1.42 * uSatK;            // 밤빛으로 가라앉힌 위성영상
          float sh = clamp(dot(normalize(vN), normalize(vec3(-.55, .72, -.42))), 0., 1.); c *= .34 + 1.0 * sh; c = min(c, vec3(.8));      // 지형 음영(북서쪽 빛) · 지형 자체는 빛 번짐 문턱 아래로 묶는다
          float hc = vW.y / uCont; float cl = abs(fract(hc - .5) - .5) / fwidth(hc); c += vec3(.25, .6, 1.) * (1. - smoothstep(0., 1.3, cl)) * .09;   // 50 m 등고선
          vec2 gk = abs(fract(vW.xz - .5) - .5) / fwidth(vW.xz); c += vec3(.35, .65, 1.) * (1. - smoothstep(0., 1.2, min(gk.x, gk.y))) * uGrid;        // 1 km 격자
          vec2 fu = (im - uFbox.xy) / (uFbox.zw - uFbox.xy);
          if (uFld > 0. && fu.x > 0. && fu.x < 1. && fu.y > 0. && fu.y < 1.) {
            vec2 cf = fu * uFn; vec4 f = mix(texture2D(tFld, fu), texture2D(tFld, (floor(cf) + .5) / uFn), uBlock); float cc = 80. * pow(f.r, 2.2);
            if (uMerge > 0.) { vec2 ci = uFbox.xy + mix(cf, floor(cf) + .5, uBlock) / uFn * (uFbox.zw - uFbox.xy), oc = (ci - uCore.xy) / (uCore.zw - uCore.xy);      // 배경 + 대안 기여분(가상)
              if (oc.x > 0. && oc.x < 1. && oc.y > 0. && oc.y < 1.) cc += texture2D(tAdd, oc).r * uAdd * uMerge; }
            float n = clamp(cc / uFmax, 0., 1.); n = pow(n, .8);
            vec2 ce = abs(fract(cf) - .5), cw = fwidth(cf); float edge = 1. - smoothstep(.3, 1.9, min((.5 - ce.x) / cw.x, (.5 - ce.y) / cw.y));
            float sn = smoothstep(.05, .6, n); c = mix(c, ramp(n) * mix(.55 + .7 * l, .76 + .3 * l, uFk) * .92, uFld * smoothstep(.45, .6, f.a) * mix(.5 + .38 * sn, .84 + .12 * sn, uFk));     // uFk 1 = 농도장을 짙게(2단계)
            c += vec3(.5, .8, 1.) * edge * uCell * uFld; }
          vec2 ou = (im - uCore.xy) / (uCore.zw - uCore.xy);
          if (ou.x > 0. && ou.x < 1. && ou.y > 0. && ou.y < 1.) { vec4 o = texture2D(tOv, vec2(ou.x, 1. - ou.y)); c = mix(c, o.rgb, o.a); }
          float d = distance(vW.xz, uSite); c += vec3(.3, .85, 1.) * (1. - smoothstep(0., .35, abs(d - uScan))) * step(0., uScan) * exp(-uScan * .07) * .55;   // 훑는 고리
          vec2 e = abs(vUv - .5) * 2.; c = mix(c, vec3(.012, .028, .06), smoothstep(.7, 1., max(e.x, e.y)));          // 가장자리는 어둠 속으로
          c *= mix(vec3(1.), vec3(1.32, .9, .62), uWarm);                                                               // 해 뜰 녘 · 질 녘(6단계)
          gl_FragColor = vec4(c * uDim, 1.);
        }` }));
    scene.add(terrain);

    /* ── 빛 조각(가산 혼합) ── */
    const spr = (() => { const c = off(64, 64), x = c.getContext("2d"), gr = x.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, "rgba(255,255,255,1)"); gr.addColorStop(.35, "rgba(255,255,255,.45)"); gr.addColorStop(1, "rgba(255,255,255,0)"); x.fillStyle = gr; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
    const points = (n, color, size, opacity = 1) => { const geo = new THREE.BufferGeometry(); geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(n * 3), 3));
      const m = new THREE.Points(geo, new THREE.PointsMaterial({ map: spr, color, size, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true })); m.frustumCulled = false; scene.add(m); return m; };
    const beamMat = (color) => new THREE.ShaderMaterial({ uniforms: { uC: { value: new THREE.Color(color) }, uA: { value: 1 }, uT: { value: 0 } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
      vertexShader: "varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",
      fragmentShader: "uniform vec3 uC; uniform float uA, uT; varying vec2 vUv; void main(){ float a = pow(1. - vUv.y, 1.6) * (.55 + .45 * step(.5, fract(vUv.y * 9. - uT * .6))); gl_FragColor = vec4(uC * a * uA, 1.); }" });

    // 측정소(실제 AirKorea) — 지형 범위 안은 빛기둥, 실측 시계열은 계기판이 쓴다
    const SL = AIR.sta, decS = (b64, k) => { const b = atob(b64), o = new Float32Array(b.length); for (let i = 0; i < b.length; i++) { const v = b.charCodeAt(i); o[i] = v ? SL.cmax[k] * Math.pow((v - 1) / 254, SL.gamma[k]) : NaN; } return o; };
    const beams = [];
    SL.list.forEach(s => { const [wx, wz] = ll2w(s.lon, s.lat), inside = s.lon > BB[0] + .02 && s.lon < BB[2] - .02 && s.lat > BB[1] + .02 && s.lat < BB[3] - .02;
      const o = { nm: s.nm, type: s.type, lon: s.lon, lat: s.lat, wx, wz, inside, no2: decS(s.no2, "no2"), dist: Math.hypot(wx - SCW[0], wz - SCW[1]), f: ll2f(s.lon, s.lat) };
      o.wy = inside ? hAt(wx, wz) : .15;                                              // 지형 밖 측정소는 바닥 높이에 둔다(지형은 넓히지 않는다)
      if (inside) { const m = new THREE.Mesh(new THREE.CylinderGeometry(.09, .09, 3.4, 8, 1, true), beamMat(0x66f0b0)); m.position.set(wx, o.wy + 1.7, wz); scene.add(m); o.beam = m;
        const ring = new THREE.Mesh(new THREE.RingGeometry(.82, 1, 40), new THREE.MeshBasicMaterial({ color: 0x66f0b0, transparent: true, opacity: .8, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
        ring.rotation.x = -Math.PI / 2; ring.position.set(wx, o.wy + .3, wz); ring.material.depthTest = false; ring.renderOrder = 5; scene.add(ring); o.ring = ring; beams.push(o); }
      D3.sta.push(o); });
    D3.sta.sort((a, b) => a.dist - b.dist);
    D3.staIn = beams;
    // 측정망 그래프(2단계, 2026-11-13 사용자 지시 — 종전 '측정소 → 사업지구' 호를 바꿨다) — 범위 안 모든 측정소를 가까운 이웃 셋과 잇고, 끊긴 덩어리는 가장 가까운 쌍으로 이어 한 그래프로 만든다.
    // 간선은 바닥에 누운 띠(굵기 = 카메라 거리에 비례)이고, 띠마다 양쪽으로 달리는 빛이 신호를 주고받는다. 이웃 고르기는 화면용이다 — 연구 모델의 간선 정의가 아니다
    const GN = D3.sta, edges = [], ekey = new Set(), [GCX, GCZ] = f2w(...TL2CAM.wide.f);
    const gd = (a, b) => Math.hypot(GN[a].wx - GN[b].wx, GN[a].wz - GN[b].wz);
    const addE = (a, b) => { const k = a < b ? a + "_" + b : b + "_" + a; if (a !== b && !ekey.has(k)) { ekey.add(k); edges.push([a, b]); } };
    GN.forEach((q, i) => { q.cdist = Math.hypot(q.wx - GCX, q.wz - GCZ); GN.map((_, j) => j).filter(j => j !== i).sort((a, b) => gd(i, a) - gd(i, b)).slice(0, 3).forEach(j => addE(i, j)); });
    for (let guard = 0; guard < GN.length; guard++) { const comp = GN.map(() => -1); let nc = 0;
      GN.forEach((_, i) => { if (comp[i] >= 0) return; const st = [i]; comp[i] = nc; while (st.length) { const a = st.pop(); edges.forEach(([p, q]) => { const o = p === a ? q : q === a ? p : -1; if (o >= 0 && comp[o] < 0) { comp[o] = nc; st.push(o); } }); } nc++; });
      if (nc < 2) break; let best = null;
      for (let i = 0; i < GN.length; i++) for (let j = 0; j < GN.length; j++) if (comp[i] === 0 && comp[j] !== 0) { const d = gd(i, j); if (!best || d < best[0]) best = [d, i, j]; }
      addE(best[1], best[2]); }
    D3.edges = edges.length;
    const graph = (() => { const pos = [], perp = [], side = [], uu = [], rev = [], ph = [], idx = [], r = rng(5150); let n = 0;
      edges.forEach(([ia, ib]) => { const a = GN[ia], b = GN[ib], dx = b.wx - a.wx, dz = b.wz - a.wz, L = Math.hypot(dx, dz) || 1, rv = TL2.graph + Math.min(a.cdist, b.cdist) / 45, p = r();
        [[a, 0], [b, 1]].forEach(([q, u]) => [-1, 1].forEach(sd => { pos.push(q.wx, q.wy + .22, q.wz); perp.push(-dz / L, dx / L); side.push(sd); uu.push(u); rev.push(rv); ph.push(p); }));
        idx.push(n, n + 1, n + 2, n + 1, n + 3, n + 2); n += 4; });
      const geo = new THREE.BufferGeometry(); geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute("aPerp", new THREE.Float32BufferAttribute(perp, 2));
      geo.setAttribute("aSide", new THREE.Float32BufferAttribute(side, 1)); geo.setAttribute("aU", new THREE.Float32BufferAttribute(uu, 1)); geo.setAttribute("aRev", new THREE.Float32BufferAttribute(rev, 1)); geo.setAttribute("aPh", new THREE.Float32BufferAttribute(ph, 1)); geo.setIndex(idx);
      const m = new THREE.Mesh(geo, new THREE.ShaderMaterial({ uniforms: { uW: { value: .2 }, uTau: { value: 0 }, uT: { value: 0 }, uA: { value: 0 } }, transparent: true, depthWrite: false, depthTest: false, side: THREE.DoubleSide,        // 2026-11-13 사용자 지시 — 가늘고 진하게 · 펄스는 약하게(가산 혼합을 걷어 빛이 번지지 않는다)
        vertexShader: "attribute vec2 aPerp; attribute float aSide, aU, aRev, aPh; uniform float uW, uTau; varying float vS, vU, vR, vP; void main(){ vS = aSide; vU = aU; vP = aPh; vR = smoothstep(aRev, aRev + .9, uTau); gl_Position = projectionMatrix * modelViewMatrix * vec4(position + vec3(aPerp.x, 0., aPerp.y) * aSide * uW, 1.); }",
        fragmentShader: "uniform float uA, uT; varying float vS, vU, vR, vP; void main(){ float prof = smoothstep(0., .5, 1. - abs(vS)); float a1 = fract(vU - uT * .3 + vP), a2 = fract(-vU - uT * .3 + vP * 1.618); float pu = smoothstep(.9, .97, a1) * (1. - smoothstep(.97, 1., a1)) + smoothstep(.9, .97, a2) * (1. - smoothstep(.97, 1., a2)); gl_FragColor = vec4(mix(vec3(.07, .72, .47), vec3(.62, .98, .84), pu * .6), prof * uA * vR * (.8 + .2 * pu)); }" }));
      m.frustumCulled = false; m.renderOrder = 6; m.visible = false; scene.add(m); return m; })();
    const spot = (() => { const c = off(64, 64), x = c.getContext("2d"); x.fillStyle = "rgba(3,18,14,.9)"; x.beginPath(); x.arc(32, 32, 17, 0, TAU); x.fill(); x.fillStyle = "#ffffff"; x.beginPath(); x.arc(32, 32, 12, 0, TAU); x.fill();
      x.strokeStyle = "rgba(255,255,255,.5)"; x.lineWidth = 2.5; x.beginPath(); x.arc(32, 32, 26, 0, TAU); x.stroke(); return new THREE.CanvasTexture(c); })();          // 또렷한 점 + 가는 테(스팟)
    const staPts = points(GN.length, 0x6ff2b4, 1, 0); staPts.material.depthTest = false; staPts.renderOrder = 6; staPts.material.map = spot; staPts.material.blending = THREE.NormalBlending; staPts.material.needsUpdate = true;
    { const p = staPts.geometry.attributes.position; GN.forEach((q, i) => p.setXYZ(i, q.wx, q.wy + .25, q.wz)); p.needsUpdate = true; }

    // 2단계 두 층 — 위 CMAQ-DA 5 km(실제 자료 · 칸은 EPSG:5179 평면의 5 km 정사각) · 아래 1 km 격자(Two-Stage 농도장 칸 0.01°). 떠 있다가 지형으로 내려앉는다
    const layGeo = cs => { const geo = new THREE.BufferGeometry(), p = []; cs.forEach(([lon, lat]) => { const [x, z] = ll2w(lon, lat); p.push(x, 0, z); });        // 모서리 = 북서 · 북동 · 남동 · 남서
      geo.setAttribute("position", new THREE.Float32BufferAttribute(p, 3)); geo.setAttribute("uv", new THREE.Float32BufferAttribute([0, 0, 1, 0, 1, 1, 0, 1], 2)); geo.setIndex([0, 3, 1, 1, 3, 2]); return geo; };
    const layMesh = (cs, uniforms, frag, order) => { const m = new THREE.Mesh(layGeo(cs), new THREE.ShaderMaterial({ uniforms, transparent: true, depthWrite: false, depthTest: false, side: THREE.DoubleSide,
      vertexShader: "varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }", fragmentShader: frag })); m.frustumCulled = false; m.renderOrder = order; m.visible = false; scene.add(m); return m; };
    const CQ = AIR.cmaq || null, cN = CQ ? CQ.nx * CQ.ny : 1, cb = CQ ? atob(CQ.b64) : "", cdat = new Uint8Array(cN * 4);
    const cqTex = new THREE.DataTexture(cdat, CQ ? CQ.nx : 1, CQ ? CQ.ny : 1, THREE.RGBAFormat); cqTex.magFilter = THREE.NearestFilter; cqTex.minFilter = THREE.NearestFilter; cqTex.needsUpdate = true;
    const setCmaq = ff => { const a = Math.floor(ff) % CQ.nf, b = (a + 1) % CQ.nf, u = ff - Math.floor(ff);
      for (let k = 0; k < cN; k++) { const va = cb.charCodeAt(a * cN + k), vb = cb.charCodeAt(b * cN + k); cdat[k * 4] = va * (1 - u) + vb * u; cdat[k * 4 + 3] = va && vb ? 255 : 0; } cqTex.needsUpdate = true; };
    const U5 = { tC: { value: cqTex }, uN: { value: new THREE.Vector2(CQ ? CQ.nx : 1, CQ ? CQ.ny : 1) }, uA: { value: 0 }, uRev: { value: 0 }, uFmax: { value: 24 }, uCmax: { value: CQ ? CQ.cmax : 50 }, uGam: { value: CQ ? CQ.gamma : 1.6 } };
    const lay5 = CQ ? layMesh(CQ.corners, U5, `
      precision highp float; uniform sampler2D tC; uniform vec2 uN; uniform float uA, uRev, uFmax, uCmax, uGam; varying vec2 vUv;
      ${GLRAMP}
      void main(){ vec2 cf = vUv * uN; vec4 f = texture2D(tC, (floor(cf) + .5) / uN);
        float n = pow(clamp(uCmax * pow(max(f.r * 255. - 1., 0.) / 254., uGam) / uFmax, 0., 1.), .8);
        vec2 ce = abs(fract(cf) - .5), cw = fwidth(cf); float line = 1. - smoothstep(0., 1.5, min((.5 - ce.x) / cw.x, (.5 - ce.y) / cw.y));
        float head = uRev * 1.15 - vUv.x, rv = smoothstep(0., .1, head), glow = (1. - smoothstep(0., .03, abs(head))) * step(uRev, .999);     // 서쪽에서 동쪽으로 펼친다
        vec3 col = ramp(n) * .9 + vec3(.55, .85, 1.) * (line * .5 + glow);
        gl_FragColor = vec4(col, (.5 + .32 * line + glow) * uA * rv * f.a); }`, 8) : null;
    const FB = [FLD.lon0 - FLD.dl / 2, FLD.lat0 + FLD.dl / 2, FLD.lon0 + (FLD.nx - .5) * FLD.dl, FLD.lat0 - (FLD.ny - .5) * FLD.dl];       // 1 km 농도장 범위(서 · 북 · 동 · 남)
    const FBW = [...ll2w(FB[0], FB[1]), ...ll2w(FB[2], FB[3])];                                                                              // 같은 범위의 장면 좌표(x 서 · z 북 · x 동 · z 남)
    const U1 = { uN: { value: new THREE.Vector2(FLD.nx, FLD.ny) }, uA: { value: 0 }, uRev: { value: 0 }, uCtr: { value: new THREE.Vector2((SCLL[0] - FB[0]) / (FB[2] - FB[0]), (FB[1] - SCLL[1]) / (FB[1] - FB[3])) } };
    const lay1 = layMesh([[FB[0], FB[1]], [FB[2], FB[1]], [FB[2], FB[3]], [FB[0], FB[3]]], U1, `
      precision highp float; uniform vec2 uN, uCtr; uniform float uA, uRev; varying vec2 vUv;
      void main(){ vec2 cf = vUv * uN; vec2 ce = abs(fract(cf) - .5), cw = fwidth(cf); float line = 1. - smoothstep(0., 1.3, min((.5 - ce.x) / cw.x, (.5 - ce.y) / cw.y));
        float head = uRev * 1.25 - distance(vUv, uCtr), rv = smoothstep(0., .08, head), glow = (1. - smoothstep(0., .025, abs(head))) * step(uRev, .999);                      // 사업지구에서 바깥으로 짜인다
        vec2 e = min(vUv, 1. - vUv); float edge = smoothstep(0., .02, min(e.x, e.y));
        gl_FragColor = vec4(vec3(.45, .82, 1.) * (.75 + glow), (line * .8 + .09 + glow * .5) * uA * rv * edge); }`, 7);
    // ERA5 10 m 바람장(실제 자료 fut_wind.js, 2026-11-13 사용자 지시) — CMAQ 5 km 층 위를 흐르는 띠. 0.25° 점 값을 쌍선형으로 읽어 흘린다(띠의 자리 · 길이 · 빠르기는 화면용)
    const WD = window.FUT_WIND || null, NWD = 460, WKM = 1.1;                           // WKM — 풍속 1 m/s 를 화면에서 초당 몇 km 로 흘릴지
    const WB = (() => { const q = (CQ ? CQ.corners : [[FB[0], FB[1]], [FB[2], FB[3]]]).map(c => ll2w(...c)); return [Math.min(...q.map(v => v[0])), Math.min(...q.map(v => v[1])), Math.max(...q.map(v => v[0])), Math.max(...q.map(v => v[1]))]; })();
    const windAt = (wx, wz, ff) => { const nx = WD.lon.length, ny = WD.lat.length, fx = clamp((CLON + wx / KX - WD.lon[0]) / (WD.lon[nx - 1] - WD.lon[0]), 0, .9999) * (nx - 1), fy = clamp((WD.lat[0] - (CLAT - wz / KZ)) / (WD.lat[0] - WD.lat[ny - 1]), 0, .9999) * (ny - 1);
      const i = Math.floor(fx), j = Math.floor(fy), a = fx - i, b = fy - j, f0 = Math.floor(ff) % WD.nf, f1 = (f0 + 1) % WD.nf, w = ff - Math.floor(ff);
      const at = (A, f) => (A[f][j][i] * (1 - a) + A[f][j][i + 1] * a) * (1 - b) + (A[f][j + 1][i] * (1 - a) + A[f][j + 1][i + 1] * a) * b;
      return [lerp(at(WD.u, f0), at(WD.u, f1), w), lerp(at(WD.v, f0), at(WD.v, f1), w)]; };
    const wr = rng(8128), wps = Array.from({ length: NWD }, () => ({ x: lerp(WB[0], WB[2], wr()), z: lerp(WB[1], WB[3], wr()), age: wr() * 4, life: 2.5 + wr() * 3 }));
    const windM = !WD ? null : (() => { const geo = new THREE.BufferGeometry(), uv = [], idx = [];
      for (let k = 0; k < NWD; k++) { uv.push(0, -1, 0, 1, 1, -1, 1, 1); idx.push(k * 4, k * 4 + 1, k * 4 + 2, k * 4 + 1, k * 4 + 3, k * 4 + 2); }
      geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(NWD * 12), 3)); geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2)); geo.setAttribute("aK", new THREE.BufferAttribute(new Float32Array(NWD * 4), 1)); geo.setIndex(idx);
      const m = new THREE.Mesh(geo, new THREE.ShaderMaterial({ uniforms: { uA: { value: 0 } }, transparent: true, depthWrite: false, depthTest: false, side: THREE.DoubleSide,
        vertexShader: "attribute float aK; varying vec2 vUv; varying float vK; void main(){ vUv = uv; vK = aK; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",
        fragmentShader: "uniform float uA; varying vec2 vUv; varying float vK; void main(){ gl_FragColor = vec4(vec3(.93, .98, 1.), pow(vUv.x, 1.6) * smoothstep(0., .6, 1. - abs(vUv.y)) * vK * uA); }" }));
      m.frustumCulled = false; m.renderOrder = 9; m.visible = false; scene.add(m); return m; })();
    let windT = 0;
    const stepWind = (t, ff, y, hw) => { const dt = clamp(t - windT, 0, .05); windT = t; const P = windM.geometry.attributes.position, A = windM.geometry.attributes.aK;
      for (let k = 0; k < NWD; k++) { const q = wps[k]; let [u, v] = windAt(q.x, q.z, ff); q.x += u * WKM * dt; q.z -= v * WKM * dt; q.age += dt;
        if (q.age > q.life || q.x < WB[0] || q.x > WB[2] || q.z < WB[1] || q.z > WB[3]) { q.x = lerp(WB[0], WB[2], wr()); q.z = lerp(WB[1], WB[3], wr()); q.age = 0; q.life = 2.5 + wr() * 3; [u, v] = windAt(q.x, q.z, ff); }
        const sp = Math.hypot(u, v) || 1e-3, dx = u / sp, dz = -v / sp, len = clamp(sp * WKM * .85, 1.6, 9), tx = q.x - dx * len, tz = q.z - dz * len, px = -dz * hw, pz = dx * hw, fade = clamp(q.age / .5) * clamp((q.life - q.age) / .6);
        P.setXYZ(k * 4, tx - px, y, tz - pz); P.setXYZ(k * 4 + 1, tx + px, y, tz + pz); P.setXYZ(k * 4 + 2, q.x - px, y, q.z - pz); P.setXYZ(k * 4 + 3, q.x + px, y, q.z + pz);
        for (let c = 0; c < 4; c++) A.array[k * 4 + c] = fade; }
      P.needsUpdate = true; A.needsUpdate = true; };
    // 층 이름표(계기판 왼쪽 위에 위 층부터 차례로 적는다)
    D3.lay = [{ nm: "ERA5 기상 또는 기상청 API 준실시간 자료 · 바람장", col: "rgba(235,246,255,.95)", a: 0 }, { nm: "CMAQ 에뮬레이터 산출물 · 5 km NO₂", col: "rgba(255,214,150,.95)", a: 0 }, { nm: "1 km 격자 · Two-Stage 추론", col: "rgba(127,208,255,.95)", a: 0 }];

    // 굴뚝(가상) 3기 + 연기 입자
    const stacks = [0, 1, 2].map(() => { const m = new THREE.Mesh(new THREE.CylinderGeometry(.035, .05, .5, 8), new THREE.MeshBasicMaterial({ color: 0xfff2d8 })); scene.add(m); return m; });
    const NPL = 3000, plume = points(NPL, 0xffb060, .4, 0), prs = (() => { const r = rng(20261208); return Array.from({ length: NPL }, () => [r(), r(), r(), r()]); })();
    // 하천 흐름 입자(실제 본류 선형 — 표고가 낮아지는 쪽으로 흐른다)
    const RIV = MAIN.map(m => { const v = m.p.map(p => fh(p[0], p[1], .06)); if (v[0].y < v[v.length - 1].y) v.reverse(); const cl = [0]; for (let i = 1; i < v.length; i++) cl.push(cl[i - 1] + v[i].distanceTo(v[i - 1])); return { v, cl, L: cl[cl.length - 1] }; });
    const RTOT = RIV.reduce((s, r) => s + r.L, 0), NRV = 520, rivP = points(NRV, 0x8fd8ff, .34, .9);
    const rvR = rng(7741), rvs = Array.from({ length: NRV }, () => { const r = rvR; let u = r() * RTOT, k = 0; while (k < RIV.length - 1 && u > RIV[k].L) { u -= RIV[k].L; k++; } return [k, r(), .35 + .5 * r()]; });
    const alongR = (rv, s) => { let i = 1; while (i < rv.cl.length - 1 && rv.cl[i] < s) i++; const f = (s - rv.cl[i - 1]) / Math.max(1e-6, rv.cl[i] - rv.cl[i - 1]); return rv.v[i - 1].clone().lerp(rv.v[i], f); };
    // 수질(4단계) — 하류로 내려가는 선두 표지
    const spill = points(2, 0xffc060, 1.5, 0);
    // 떠다니는 먼지(깊이감)
    const dust = points(260, 0x7fb8ff, .16, .5); { const p = dust.geometry.attributes.position, r = rng(404); for (let i = 0; i < 260; i++) p.setXYZ(i, TX0 + r() * EW, .6 + r() * 6, TZ0 + r() * NS); p.needsUpdate = true; }

    // 실제 도로 — 지형 덮개에 그릴 선(지도 틀 좌표) · 소음 계산에 쓸 고속도로 선분
    if (RD) { RD.roads.forEach(r => { const p = []; let inb = false; for (let i = 0; i < r.p.length; i += 2) { const f = ll2f(r.p[i], r.p[i + 1]); p.push(f); if (f[0] > -20 && f[0] < MW + 20 && f[1] > -20 && f[1] < MH + 20) inb = true; } if (inb) D3.roads.push({ k: r.k, nm: r.nm, ref: r.ref, p }); });
      const seg = []; D3.roads.filter(r => r.k === 0).forEach(r => { for (let i = 1; i < r.p.length; i++) { const [ax, ay] = r.p[i - 1], [bx, by] = r.p[i];
        if (Math.min(ax, bx) < NVIEW[2] + 60 && Math.max(ax, bx) > NVIEW[0] - 60 && Math.min(ay, by) < NVIEW[3] + 60 && Math.max(ay, by) > NVIEW[1] - 60) seg.push([ax, ay, bx, by]); } });
      NROAD = seg; roadGrid(); }

    /* ── 4단계 오존 고농도 · 폭염 ──
       오존 = Two-Stage 1 km 추론 O₃ 의 2023-07-20(7–8월 중 이 일대 AirKorea 실측 O₃ 가 가장 높았던 날) 칸별 일 최고값(fut_air.js field.o3max — 실제 자료, date · sta 에 날짜와 그날 측정소 실측 최고가 있다). 사업지구 둘레 7.5 km 안에서 높은 칸을 핫스팟으로 표시한다.
       폭염 격자 · 건물 · 수목 · 지표면 온도는 모두 가상이다(표고가 낮을수록 · 사업지구에 가까울수록 높게 준 화면용 값). 그림자 방향 · 길이만 7월 20일 태양 위치 근사식을 따른다(건물 높이는 과장하지 않는다 — 2026-11-17 3차원 도시 모형 kh-future-city.js 로 바꾸며 BEX 2.2 → 1) */
    const OZR = 7.5, BEX = 1;
    D3.oz = (() => { const o = FLD.o3max; if (!o) return null; const ob = atob(o.b64), cells = [];
      for (let j = 0; j < FLD.ny; j++) for (let i = 0; i < FLD.nx; i++) { if (!fmk.charCodeAt(j * FLD.nx + i)) continue;
        const lon = FLD.lon0 + i * FLD.dl, lat = FLD.lat0 - j * FLD.dl, [wx, wz] = ll2w(lon, lat), dist = Math.hypot(wx - SCW[0], wz - SCW[1]); if (dist > OZR) continue;
        const [x0, y0] = ll2f(lon - FLD.dl / 2, lat + FLD.dl / 2), [x1, y1] = ll2f(lon + FLD.dl / 2, lat - FLD.dl / 2);
        cells.push({ i, j, lon, lat, wx, wz, dist, x0, y0, x1, y1, o3: o.cmax * Math.pow(ob.charCodeAt(j * FLD.nx + i) / 255, o.gamma), elev: demAt(lon, lat), rn: rng(i * 7919 + j * 104729 + 17)() }); }
      if (cells.length < 12) return null;
      const emin = Math.min(...cells.map(c => c.elev)), emax = Math.max(...cells.map(c => c.elev));
      [...cells].sort((a, b) => b.o3 - a.o3).slice(0, 10).forEach(c => c.hotO = true);
      cells.forEach(c => { c.heat = 33.0 + 2.4 * (1 - (c.elev - emin) / (emax - emin || 1)) + 1.3 * c.rn + 1.0 * Math.exp(-Math.pow(c.dist / 2.6, 2)); });      // 일 최고기온(가상) — 표고가 낮을수록 · 사업지구에 가까울수록 높게
      [...cells].sort((a, b) => b.heat - a.heat).slice(0, 12).forEach(c => c.hotH = true);
      if (!cells.some(c => c.hotO && c.hotH)) cells.filter(c => c.hotO).sort((a, b) => b.heat - a.heat)[0].hotH = true;                                     // 겹치는 칸이 없으면 오존 핫스팟 가운데 가장 더운 칸을 폭염 격자로 본다(가상 값이라 가능)
      cells.forEach(c => c.both = !!(c.hotO && c.hotH));
      const target = cells.filter(c => c.both).sort((a, b) => a.dist - b.dist)[0], os = cells.map(c => c.o3), hs = cells.map(c => c.heat);
      return { cells, lo: Math.min(...os), hi: Math.max(...os), hlo: Math.min(...hs), hhi: Math.max(...hs), target, tf: [(target.x0 + target.x1) / 2, (target.y0 + target.y1) / 2], nO: cells.filter(c => c.hotO).length, nH: cells.filter(c => c.hotH).length, nB: cells.filter(c => c.both).length,
        hmin: Math.min(...cells.filter(c => c.hotH).map(c => c.heat)), tags: [], sun: null, kst: 14, date: o.date || "",
        obs: (o.sta || []).map(s => { const [fx, fy] = ll2f(s.lon, s.lat), [wx, wz] = ll2w(s.lon, s.lat); return { ...s, x0: fx, x1: fx, y0: fy, y1: fy, dist: Math.hypot(wx - SCW[0], wz - SCW[1]) }; }).filter(s => s.dist <= OZR + 1).sort((a, b) => a.dist - b.dist) }; })();      // obs — 보는 반경 안팎 측정소의 그날 실측 1시간 최고(실제)
    const MIC = !D3.oz ? null : (() => { const Z = D3.oz, grp = new THREE.Group(); grp.visible = false; scene.add(grp);
      const [ax, az] = f2w(MREG[0], MREG[1]), [bx, bz] = f2w(MREG[2], MREG[3]), Wk = bx - ax, Hk = bz - az, Wm = Wk * 1000, Hm = Hk * 1000;
      let Y = -9; for (let a = 0; a <= 10; a++) for (let b = 0; b <= 10; b++) Y = Math.max(Y, hAt(ax + Wk * a / 10, az + Hk * b / 10)); Y += .008;
      const m2f = (x, y) => [MREG[0] + x / Wm * (MREG[2] - MREG[0]), MREG[1] + y / Hm * (MREG[3] - MREG[1])], f2m = (x, y) => [(x - MREG[0]) / (MREG[2] - MREG[0]) * Wm, (y - MREG[1]) / (MREG[3] - MREG[1]) * Hm];
      const dEdge = (x, y) => { let d = 1e9; SITE.forEach((a, i) => { const b = SITE[(i + 1) % SITE.length], [ma, na] = f2m(...a), [mb, nb] = f2m(...b), vx = mb - ma, vy = nb - na, f = clamp(((x - ma) * vx + (y - na) * vy) / (vx * vx + vy * vy)); d = Math.min(d, Math.hypot(x - ma - f * vx, y - na - f * vy)); }); return d; };   // 사업지구 경계까지 m
      const BUF = 170, zone = (x, y) => inSite(...m2f(x, y)) ? "ind" : dEdge(x, y) < BUF ? "buf" : y < .5 * Hm ? "det" : "apt";       // 산업단지 · 완충 녹지 · 단독주택 · 공동주택
      const TS = 1024, TH = Math.round(TS * Hm / Wm), k = TS / Wm, mk = () => { const c = off(TS, TH); return [c, c.getContext("2d")]; }, [tc, tx] = mk(), [hc, hx] = mk();      // tc 덧그림(경계 · 저감 구역 표시, 투명 바탕) · hc 지표면 온도 바탕
      const tex = new THREE.CanvasTexture(tc); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;      // 기본 재질이 출력 때 sRGB 로 바꾸므로 그림도 sRGB 로 알려 색이 바래지 않게 한다
      const ground = new THREE.Mesh(new THREE.PlaneGeometry(Wk, Hk).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0, depthWrite: false })); ground.position.set(ax + Wk / 2, Y + .0009, az + Hk / 2); ground.renderOrder = 10; grp.add(ground);
      // 가상 배치(m — x 동 · y 남). RDH 동서 간선(산업단지 정문 → 완충 녹지 → 주거지) · 건물 [x, y, 폭, 깊이, 높이] · 수목 [x, y, 수관 반지름, 높이]
      const r = rng(20261113), RDH = .5 * Hm, B = [], TR = [], free = (x, y, w, d, pad = 10) => !B.some(b => x < b[0] + b[2] + pad && x + w > b[0] - pad && y < b[1] + b[3] + pad && y + d > b[1] - pad) && Math.abs(y + d / 2 - RDH) > d / 2 + 16;
      const YARD = [.20 * Wm, .57 * Hm, .22 * Wm, .22 * Hm], PLAZA = [.80 * Wm, .60 * Hm, .15 * Wm, .17 * Hm], WAY = [.42 * Wm, RDH - 34, .58 * Wm, 68];      // 고온 · 저감 대상 — 산업단지 포장 야적장 · 공동주택 광장(보행로) · 바람길 축
      const VX = .775 * Wm;                                                                                  // 남북 간선(2차로)의 x
      const inR = (R, x, y, w, d) => x < R[0] + R[2] && x + w > R[0] && y < R[1] + R[3] && y + d > R[1];
      for (let y = 30; y < Hm - 90; y += 118) for (let x = 24; x < Wm - 110; x += 150) { const w = 96 + r() * 34, d = 62 + r() * 24;                       // 산업단지 — 넓고 낮은 공장동
        if ([[x, y], [x + w, y], [x, y + d], [x + w, y + d]].every(q => zone(...q) === "ind" && dEdge(...q) > 46) && !inR(YARD, x, y, w, d) && free(x, y, w, d)) B.push([x, y, w, d, 11 + r() * 8, "ind"]); }
      for (let y = 18; y < .5 * Hm - 40; y += 35) for (let x = .55 * Wm; x < Wm - 22; x += 37) { if (zone(x + 6, y + 5) === "det" && dEdge(x + 6, y + 5) > BUF + 26 && r() > .16 && free(x, y, 13, 11, 4)) B.push([x + r() * 4, y + r() * 4, 13, 11, 6.5 + r() * 2.5, "det"]); }      // 단독주택 — 작은 집이 촘촘히
      for (let y = .5 * Hm + 50; y < Hm - 110; y += 132) for (let x = .55 * Wm; x < Wm - 30; x += 70) { if (zone(x + 9, y + 45) === "apt" && dEdge(x + 9, y + 45) > BUF + 30 && !inR(PLAZA, x, y, 18, 92) && free(x, y, 18, 92, 12)) B.push([x, y + r() * 12, 18, 92, 58 + r() * 26, "apt"]); }   // 공동주택 — 남북으로 긴 판상형
      for (let i = B.length - 1; i >= 0; i--) if (B[i][0] < VX + 12 && B[i][0] + B[i][2] > VX - 12) B.splice(i, 1);          // 남북 간선 자리의 건물은 뺀다
      for (let q = 0; q < 12000 && TR.length < 440; q++) { const x = r() * Wm, y = r() * Hm; if (zone(x, y) === "buf" && dEdge(x, y) > 14 && Math.abs(y - RDH) > 20 && Math.abs(x - VX) > 12) TR.push([x, y, 7 + r() * 5, 11 + r() * 7]); }        // 완충 녹지 수림대
      for (let x = .56 * Wm; x < Wm - 16; x += 44) { if (dEdge(x, RDH) > BUF) if (Math.abs(x - VX) > 14) TR.push([x, RDH - 10.2, 3, 8], [x + 18, RDH + 10.2, 3, 8]); }
      const col = (v, a = 1) => { const q = ramp(v, a); return `rgba(${q[0] | 0},${q[1] | 0},${q[2] | 0},${a})`; };
      const sitePath = c => { c.beginPath(); SITE.forEach((q, i) => { const [x, y] = f2m(...q); i ? c.lineTo(x, y) : c.moveTo(x, y); }); c.closePath(); };
      // 바뀌지 않는 바탕 둘 — 평면도(pc) · 지표면 온도(hc). 그림자 · 깜빡이는 표시는 프레임마다 그 위에 얹는다
      const base = (c, th) => { c.setTransform(k, 0, 0, k, 0, 0); c.fillStyle = th ? col(STV.res) : "#101b2e"; c.fillRect(0, 0, Wm, Hm);
        c.fillStyle = th ? col(STV.pave - .04) : "#131f33"; c.fillRect(.52 * Wm, .5 * Hm, .5 * Wm, .5 * Hm);                                            // 공동주택 단지 — 포장 주차장
        c.fillStyle = th ? col(STV.pave + .05) : "#172236"; c.fillRect(...PLAZA);
        c.lineJoin = "round"; sitePath(c); c.strokeStyle = th ? col(STV.grass) : "#143226"; c.lineWidth = BUF * 2; c.stroke();                             // 완충 녹지 띠(경계 바깥쪽만 남는다)
        sitePath(c); c.fillStyle = th ? col(STV.pave) : "#151d2c"; c.fill(); c.fillStyle = th ? col(STV.pave + .06) : "#1a2334"; c.fillRect(...YARD);       // 산업단지 — 포장면 · 야적장
        c.fillStyle = th ? col(STV.road) : "#27334a"; c.fillRect(0, RDH - 10, Wm, 20); c.fillRect(.775 * Wm - 7, 0, 14, Hm);
        if (th) TR.forEach(([x, y, rad]) => { const gr = c.createRadialGradient(x, y, rad * .5, x, y, rad * 2.6); gr.addColorStop(0, col(STV.tree)); gr.addColorStop(.45, col(STV.tree + .08, .85)); gr.addColorStop(1, col(STV.tree + .2, 0)); c.fillStyle = gr; c.beginPath(); c.arc(x, y, rad * 2.6, 0, TAU); c.fill(); });
        else { c.fillStyle = "rgba(60,200,140,.5)"; TR.forEach(([x, y, rad]) => { c.beginPath(); c.arc(x, y, rad, 0, TAU); c.fill(); }); } };
      base(hx, true);
      const hTex = new THREE.CanvasTexture(hc); hTex.colorSpace = THREE.SRGBColorSpace;
      // 3차원 도시 모형(kh-future-city.js) — 건물 · 거리 · 수목 · 태양 그림자. m 단위 모형을 1/1000 로 줄여 놓는다
      const city = window.KH_FUT_CITY({ THREE, R, scene, off, rng, Wm, Hm, B, TR, YARD, PLAZA, RDH, VX, BUF, zone, dEdge, site: SITE.map(q => f2m(...q)), STV, col, thermTex: hTex });
      city.root.scale.setScalar(.001); city.root.position.set(ax, Y, az); grp.add(city.root);
      const W3 = (x, y, up = .012) => [ax + x / 1000, Y + up, az + y / 1000], mid = R => [R[0] + R[2] / 2, R[1] + R[3] / 2];
      Z.zones = [{ nm: "산업단지", p: W3(.2 * Wm, .22 * Hm, .034) }, { nm: "완충 녹지", p: W3(...(() => { const q = TR[Math.floor(TR.length * .3)]; return [q[0], q[1]]; })(), .03) }, { nm: "단독주택", p: W3(.84 * Wm, .2 * Hm, .022) }, { nm: "공동주택", p: W3(.66 * Wm, .9 * Hm, .105) }];
      Z.fix = [{ nm: "그늘막 · 무더위 쉼터 필요 지역", p: W3(...mid(YARD)), col: "rgba(255,120,96,.98)" }, { nm: "쿨링포그 필요 지역", p: W3(...mid(PLAZA)), col: "rgba(120,220,255,.98)" }, { nm: "바람길 조성 필요 지역", p: W3(WAY[0] + WAY[2] * .3, RDH), col: "rgba(150,255,200,.98)" }];
      Z.tf = [(MREG[0] + MREG[2]) / 2, (MREG[1] + MREG[3]) / 2]; Z.nBld = B.length; Z.nTree = city.nTree; Z.Y = Y;
      // 덧그림 — 사업지구 경계 · 고온 구역 테두리 · 바람길 꺾쇠 · 구역 틀. 바닥 · 건물 · 그림자는 도시 모형이 그린다
      let still = false; const paint = (t, tau, kz) => { if (kz <= 0 && still) return; still = kz <= 0;       // 깜빡이는 표시가 없는 동안은 한 번만 그린다
        tx.setTransform(1, 0, 0, 1, 0, 0); tx.globalAlpha = 1; tx.clearRect(0, 0, TS, TH); tx.setTransform(k, 0, 0, k, 0, 0);
        sitePath(tx); tx.strokeStyle = "rgba(255,211,106,.95)"; tx.lineWidth = 5; tx.setLineDash([22, 12]); tx.stroke(); tx.setLineDash([]);                 // 사업지구 경계(가상)
        if (kz > 0) { const bk = .3 + .7 * Math.abs(Math.sin(t * 3.2));                                                                                         // 고온 · 저감 대상 구역 — 깜빡이는 테두리
          tx.lineWidth = 6; tx.setLineDash([16, 9]); tx.globalAlpha = kz * bk; tx.strokeStyle = "#ffffff"; tx.strokeRect(...YARD); tx.strokeRect(...PLAZA);
          tx.setLineDash([]); tx.globalAlpha = kz * .9; tx.strokeStyle = "rgba(170,255,215,.95)"; tx.lineWidth = 5; tx.lineJoin = "miter";
          for (let x = WAY[0] + ((t * 60) % 56); x < WAY[0] + WAY[2] - 20; x += 56) { tx.beginPath(); tx.moveTo(x + 16, RDH - 22); tx.lineTo(x, RDH); tx.lineTo(x + 16, RDH + 22); tx.stroke(); }        // 바람길 — 주거지에서 산업단지 쪽으로 흐르는 꺾쇠(방향은 연출)
          tx.globalAlpha = 1; }
        tx.strokeStyle = "rgba(255,255,255,.85)"; tx.lineWidth = 5; tx.strokeRect(2.5, 2.5, Wm - 5, Hm - 5); tex.needsUpdate = true; };
      return { update(t, tau, on) { const kg = on ? seg(tau, TL4.zoom + 1.0, 1.2) : 0; grp.visible = kg > .004; Z.kg = kg; if (!grp.visible) return;
          const kb = seg(tau, TL4.bld, 2.6), kt = seg(tau, TL4.therm, 1.5), kz = seg(tau, TL4.hotz, .8), ph = Math.max(0, tau - TL4.bld - 1.5) / 9, kst = 13 + 4.5 * (1 - Math.abs(1 - (ph % 2))), sun = sunAt(kst); Z.kst = kst; Z.sun = sun; Z.kt = kt; Z.kz = kz;      // 해는 건물이 선 뒤부터 13시 – 17시 30분을 오간다
          Z.kn = seg(tau, TL4.near, 2.6) - seg(tau, TL4.far, 2.4);                                                              // 근접 장면 — 카메라가 보는 높이를 모형 바닥으로 옮긴다
          ground.material.opacity = kg; paint(t, tau, kz);
          city.set(kg, ease(kb * 1.6), ease(kb * 1.6 - .3), ease(kb * 1.6 - .6), kt); city.sun(sun); } }; })();

    /* ── 후처리 — 빛 번짐 ── */
    let composer = null;
    if (THREE.EffectComposer && !QS.has("nobloom")) { composer = new THREE.EffectComposer(R); composer.setPixelRatio(1); composer.setSize(W, H);
      composer.addPass(new THREE.RenderPass(scene, cam)); composer.addPass(new THREE.UnrealBloomPass(new THREE.Vector2(W, H), .55, .55, .84)); }

    const v3 = new THREE.Vector3();
    const project = (wx, wy, wz) => { v3.set(wx, wy, wz).project(cam); return [(v3.x * .5 + .5) * W, (-v3.y * .5 + .5) * H, v3.z < 1 && v3.z > -1]; };
    const T0 = Date.parse(SL.t0);

    function render(t, tau, stk) {
      // 카메라 — 단계 사이를 부드럽게 옮기고, 선 자리에서 천천히 돈다
      const cf = ease((t - camT0) / 2.4), tg = step === 1 ? cam1(tau) : step === 2 ? cam2(tau) : step === 3 ? cam3(tau) : step === 4 ? cam4(tau) : CAMS[step], [tx, tz] = f2w(...tg.f);   // 2 · 3단계는 시간표를 따라 스스로 움직인다
      camNow.x = lerp(camFrom.x, tx, cf); camNow.z = lerp(camFrom.z, tz, cf); camNow.d = lerp(camFrom.d, tg.d, cf); camNow.el = lerp(camFrom.el, tg.el, cf); camNow.az = lerp(camFrom.az, tg.az, cf); camNow.ox = lerp(camFrom.ox, tg.ox, cf);
      const az = (camNow.az + (step === 9 ? t * 2.2 : 7 * Math.sin(t * .11))) * Math.PI / 180, el = (camNow.el + 1.5 * Math.sin(t * .17)) * Math.PI / 180, ty = lerp(hAt(camNow.x, camNow.z), step === 4 && D3.oz && D3.oz.Y != null ? D3.oz.Y : 0, step === 4 && D3.oz ? D3.oz.kn || 0 : 0);
      cam.position.set(camNow.x + camNow.d * Math.cos(el) * Math.sin(az), ty + camNow.d * Math.sin(el), camNow.z + camNow.d * Math.cos(el) * Math.cos(az));
      cam.lookAt(camNow.x, ty, camNow.z);
      cam.setViewOffset(W + 2 * camNow.ox, H, 2 * camNow.ox, 0, W, H);

      // 사례 구간 시계 — 1초에 3시간, 72시간을 24초에 되돌려 튼다(2026-11-12 사용자 지시 "2 측정망 NO₂ 농도변화 속도 더 빠르게" — 종전 1초에 1.5시간. 시계는 하나라 측정소 값 · 시계 칩 · 3단계 배경도 함께 빨라진다)
      const CLK = 3, hr = (t * CLK) % SL.nf, hi = Math.floor(hr), kst = new Date(T0 + hi * 3600e3 + 9 * 3600e3);
      D3.hr = hr; D3.clock = `${kst.getUTCFullYear()}-${String(kst.getUTCMonth() + 1).padStart(2, "0")}-${String(kst.getUTCDate()).padStart(2, "0")} ${String(kst.getUTCHours()).padStart(2, "0")}시`;
      setField(hr / FLD.dtHours);
      const s2 = step === 2, s3 = step === 3, mg = s3 ? seg(tau, S3.merge, 2.2) : 0;           // mg — 3단계 끝의 합치기(배경 + 대안 기여분)
      const fOn = s2 ? seg(tau, TL2.fld, 1.6) * .95 : s3 ? lerp(.28, .92, mg) : 0;              // 2단계 — 두 층이 내려앉을 때 농도장이 드러난다
      U.uFld.value = lerp(U.uFld.value, fOn, s2 ? .16 : .08); D3.fieldOn = U.uFld.value;
      U.uGrid.value = lerp(U.uGrid.value, s2 ? 0 : s3 ? .1 * (1 - mg) : step === 6 ? .1 : .035, .06);   // 농도장 칸(0.01°) 경계선을 보일 때는 km 격자를 끈다(두 격자가 겹쳐 보이지 않게)
      U.uFk.value = lerp(U.uFk.value, s2 ? 1 : 0, .08); U.uCell.value = lerp(U.uCell.value, s2 ? .3 : s3 ? lerp(.06, .42, mg) : .06, .06); U.uBlock.value = lerp(U.uBlock.value, s2 ? 1 : mg, .08);
      U.uMerge.value = s3 ? mg : lerp(U.uMerge.value, 0, .1); if (s3 && tau > S3.merge - .1) setAdd(OPT_ST);
      U.uScan.value = step === 1 ? tau * 7 : step === 0 ? (t * 5) % 40 : -1;
      U.uDim.value = lerp(U.uDim.value, step === 9 ? .42 : step === 7 || step === 8 ? .72 : step === 6 ? lerp(.3, 1.06, NT.day) : 1, step === 6 ? .18 : .06);      // 6단계 — 하루 시계를 따라 어두워지고 밝아진다
      U.uWarm.value = lerp(U.uWarm.value, step === 6 ? clamp(NT.warm) : 0, .15);
      U.uSatK.value = lerp(U.uSatK.value, step === 2 || step === 3 || step === 4 ? .78 : 1, .06);
      U.uTime.value = t;
      ovTex.needsUpdate = true;

      // 측정소 빛기둥 — 실측 NO₂ 가 높을수록 밝다
      beams.forEach((o, i) => { const v = o.no2[hi], k = isNaN(v) ? .25 : clamp(v / 30, .2, 1), on = step === 2 || step === 3 ? 1 : step === 0 ? .55 : step === 1 ? .25 : 0;   // 대기 측정망이라 수질 · 소음 · 생태 단계(4–7)와 8단계에서는 끈다(2026-11-12 사용자 지시)
        o.beam.material.uniforms.uA.value = lerp(o.beam.material.uniforms.uA.value, step === 3 ? 0 : on * (.5 + .7 * k) * (step === 2 ? .35 : 1), .08);      // 3단계는 기둥을 세우지 않는다(2026-11-17 사용자 지시 — 주인공은 굴뚝 연기다) o.beam.material.uniforms.uT.value = t + i;
        const pu = (t * .6 + i * .17) % 1; o.ring.scale.setScalar((step === 2 ? 1.05 : step === 3 ? .5 + .9 * pu : .5 + 2.2 * pu) * clamp(camNow.d / 47, .2, 1.2)); o.ring.material.opacity = step === 2 ? .42 * on : (1 - pu) * (step === 3 ? .13 : .6) * on; });      // 3단계 — 고리는 작고 아주 흐리게   // 2단계 — 퍼지는 고리 대신 고정 고리(스팟)
      // 측정망 그래프 · 측정소 점(2단계) — 띠 굵기는 멀리서 굵게, 가까이서 가늘게
      { const gu = graph.material.uniforms; gu.uA.value = lerp(gu.uA.value, s2 ? 1 : 0, .1); gu.uT.value = t; gu.uW.value = .00048 * Math.pow(camNow.d, 1.27); if (s2) gu.uTau.value = tau; graph.visible = gu.uA.value > .004;
        staPts.material.opacity = lerp(staPts.material.opacity, s2 ? .95 * ease(tau / 1.4) : 0, .12); staPts.material.size = camNow.d * .03; staPts.visible = staPts.material.opacity > .004; }
      // 두 층 — 위 CMAQ-DA 5 km · 아래 1 km 격자. drop 부터 지형으로 내려앉고, 농도장이 드러나면 사라진다
      { const up = 1 - seg(tau, TL2.drop, 2.6), y5 = .5 + (clamp(.16 * camNow.d, 8, 13) - .5) * up, y1 = .4 + 3.2 * up;      // 위 층은 넓은 뷰에서 높이, 확대하면 낮춰 화면을 덮지 않게
        const a5 = s2 ? seg(tau, TL2.cmaq, .6) * (1 - .45 * seg(tau, TL2.g1, 1.2)) * (1 - seg(tau, TL2.fld, 1.5)) : 0,                                     // (위 층 — 아래 층이 짜일 때 옅게)
              a1 = s2 ? seg(tau, TL2.g1, .5) * (1 - seg(tau, TL2.fld + .4, 1.4)) : 0;
        if (lay5) { if (s2) { lay5.position.y = y5; U5.uRev.value = clamp((tau - TL2.cmaq) / 2.2); setCmaq(hr / CQ.dtHours); } U5.uA.value = s2 ? a5 : lerp(U5.uA.value, 0, .15); lay5.visible = U5.uA.value > .004; }
        if (s2) { lay1.position.y = y1; U1.uRev.value = clamp((tau - TL2.g1) / 2); } U1.uA.value = s2 ? a1 : lerp(U1.uA.value, 0, .15); lay1.visible = U1.uA.value > .004;
        if (windM) { const wu = windM.material.uniforms.uA, aw = s2 ? seg(tau, TL2.cmaq + 1.4, .8) * (1 - .4 * seg(tau, TL2.g1, 1.2)) * (1 - seg(tau, TL2.fld - .3, 1.3)) : 0;      // 바람장 — CMAQ 층이 펼쳐진 뒤 그 위에
          wu.value = s2 ? aw * .9 : lerp(wu.value, 0, .15); windM.visible = wu.value > .004; if (windM.visible) stepWind(t, hr / WD.dtHours, y5 + 3.2 * up + .25, camNow.d * .0015); D3.lay[0].a = wu.value; }
        D3.lay[1].a = lay5 ? U5.uA.value : 0; D3.lay[2].a = U1.uA.value; }

      // 굴뚝 · 연기
      const sOn = step >= 3 && step < 9 && step !== 4 && stk;
      stacks.forEach((m, i) => { m.visible = !!sOn; if (sOn) { const v = fh(stk[i][0], stk[i][1]); m.position.set(v.x, v.y + .25, v.z); } });
      plume.material.opacity = lerp(plume.material.opacity, step === 3 ? .46 : 0, .08);      // 2026-11-17 연기를 또렷하게 — 입자 1,400 → 3,000 · 크기 .3 → .4 · 불투명도 .34 → .46
      if (plume.material.opacity > .01 && stk) { const p = plume.geometry.attributes.position, ux = Math.cos(wind), uz = Math.sin(wind);
        for (let i = 0; i < NPL; i++) { const [a, b, c, d] = prs[i], s = stk[i % 3], age = (t * (.1 + .08 * a) + b) % 1, v = fh(s[0], s[1]), dist = age * 15, sp = .15 + dist * .1;
          p.setXYZ(i, v.x + ux * dist + (c - .5) * sp * 2 * -uz, v.y + .5 + age * 1.1 + (d - .5) * sp * .8, v.z + uz * dist + (c - .5) * sp * 2 * ux); }
        p.needsUpdate = true; }

      // 하천 흐름
      { const p = rivP.geometry.attributes.position; for (let i = 0; i < NRV; i++) { const [k, ph, sp] = rvs[i], rv = RIV[k], v = alongR(rv, ((t * sp * .9 + ph * rv.L) % rv.L)); p.setXYZ(i, v.x, v.y, v.z); } p.needsUpdate = true;
        rivP.material.opacity = lerp(rivP.material.opacity, step === 2 || step === 3 || step === 4 || step === 6 ? 0 : step === 9 ? .3 : step === 5 || step === 7 ? 1 : .75, .08); rivP.visible = rivP.material.opacity > .01; }   // 2 · 3 · 5단계는 흐름 입자를 끈다
      // 수질 선두
      if (step === 5) { const head = PLEN * ease(tau / 6), hp = pathAt(head), v = fh(hp[0], hp[1], .12), sp = spill.geometry.attributes.position; sp.setXYZ(0, v.x, v.y, v.z);
        if (PATH2.length) { const h2 = head < PLEN2 ? path2At(head) : hp, w = fh(h2[0], h2[1], .12); sp.setXYZ(1, w.x, w.y, w.z); } else sp.setXYZ(1, v.x, v.y, v.z);       // 서쪽 선두 — 합류한 뒤에는 동쪽 선두와 겹친다
        sp.needsUpdate = true; }
      spill.material.opacity = lerp(spill.material.opacity, step === 5 && tau < 6.2 ? .9 + .1 * Math.sin(t * 9) : 0, .15);

      if (MIC) MIC.update(t, tau, step === 4);
      if (composer) composer.render(); else R.render(scene, cam);
    }
    G3 = { render, project, hAt, fh, T0 };
    return true;
  }

  /* =====================================================================================================
     지형 덮개 — 지도 틀 좌표로 그려 지형에 입힌다(하천 · 도로 · 경계 · 장)
     ===================================================================================================== */
  // 바뀌지 않는 실선(도로 · 하천)은 화면 밖 판에 한 번만 긋고 프레임마다 붙인다(2026-11-12 사용자 지시 "24장 가볍게" — 종전엔 프레임마다 stroke 약 2,300번).
  // 판은 층마다 한 장 — 열쇠(선 굵기 배율 · 생태 단계 여부)가 바뀔 때만 다시 긋는다. 붙이는 순서는 종전과 같다(도로 → 달리는 빛 → 하천 → 흐름 점선)
  const LAY = {};
  function layer(name, key, paint) {
    const L = LAY[name] || (LAY[name] = { c: off(OVC.width, OVC.height), key: null });
    if (L.key !== key) { const keep = g, x = L.c.getContext("2d"); g = x; x.setTransform(OS, 0, 0, OS, 0, 0); x.clearRect(0, 0, MW, MH); x.lineCap = "round"; x.lineJoin = "round"; paint(); g = keep; L.key = key; }
    g.drawImage(L.c, 0, 0, MW, MH);
  }
  function drawOverlay(t, tau, stacks) {
    g = OX; g.setTransform(OS, 0, 0, OS, 0, 0); g.clearRect(0, 0, MW, MH);
    g.lineCap = "round"; g.lineJoin = "round";
    const ls = step === 6 ? .42 : step === 4 ? .6 : step === 1 || step === 3 ? .75 : 1;          // 가까이 볼 때는 선을 가늘게

    // 바탕 장
    if (step === 3) {
      const a = ease(tau / .8) * .86 * (1 - seg(tau, S3.merge, 2.2));             // 합치기가 시작되면 이 덮개는 물러나고 지형의 농도장이 기여분을 더해 그린다
      if (a > .01) field([0, 0, MW, MH], (x, y) => { const v = aqVal(x, y, stacks || OPT_ST); return v < .04 ? [0, 0, 0, 0] : ramp(.34 + v * 1.15, a * clamp((v - .04) * 4)); });
    }
    if (step === 7) { const a = ease(tau / .9); g.globalAlpha = .8 * a; g.drawImage(SPC[0].un, 0, 0); g.globalAlpha = .92 * a; g.drawImage(SPC[0].hab, 0, 0); g.globalAlpha = 1; }   // 비적합지(예시)를 먼저, 적합지를 위에
    if (step === 8 && KC.length) {
      if (HOLD8) tau = Math.min(tau, KPER * KC.length - .001);             // 자동 재생 중에는 한 바퀴 돈 뒤 최적안에 머문다(나레이션이 최적안을 말하는 동안 기존안으로 돌아가지 않게)
      const per = KPER, ai = Math.floor(tau / per) % KC.length, f = ease((tau % per) / .45), pv = (ai + KC.length - 1) % KC.length;
      g.globalAlpha = .55 * ease(tau / .8); g.drawImage(SPC[0].hab, 0, 0);
      if (tau > per) { g.globalAlpha = (1 - f) * .94; g.drawImage(KC[pv], 0, 0, MW, MH); }
      g.globalAlpha = (tau > per ? f : ease(tau / .8)) * .94; g.drawImage(KC[ai], 0, 0, MW, MH); g.globalAlpha = 1;
      draw.kai = ai;
    }
    if (step === 6) {
      const ph = tau * 1.1, src = [[505 + 18 * Math.cos(ph), 410 + 12 * Math.sin(ph * 1.3), 114], [478 + 10 * Math.sin(ph * .8), 392 + 8 * Math.cos(ph), 111]];
      const rev = ease(tau / .6), [x0, y0, x1, y1] = NVIEW; NT = noiseClock(tau);
      g.save(); g.beginPath(); g.arc(SC[0], SC[1], 260 * rev, 0, TAU); g.clip();
      if (!NRE) roadGrid();
      field(NVIEW, (x, y, k) => { const c = noiseCol(10 * Math.log10(srcE(x, y, src) * NT.eq + NRE[k] * NT.kq + 1e-3)), e = Math.min(x - x0, x1 - x, y - y0, y1 - y) / 26; c[3] *= clamp(e); return c; }); g.restore();
      draw.noiseSrc = src;
    }

    // 4단계 — 오존(Two-Stage 1 km, 실제) 칸 · 오존 핫스팟 · 폭염 격자(가상) · 중첩. 끝에는 세 갈래 색의 중첩 지도로 바뀐다
    if (step === 4 && D3.oz) { const Z = D3.oz, aO = seg(tau, TL4.o3, 1.2) * (1 - seg(tau, TL4.heat - .6, 1)), aH = seg(tau, TL4.heat, 1) * (1 - seg(tau, TL4.both - .6, 1)), aC = seg(tau, TL4.both, 1), pu = .7 + .3 * Math.sin(t * 4);
      const kO = seg(tau, TL4.hotO, .8) * (1 - seg(tau, TL4.heat - .6, .8)) + aC, kH = seg(tau, TL4.hotH, .8), kB = seg(tau, TL4.both + .8, .8), cc = (q, a) => `rgba(${q[0] | 0},${q[1] | 0},${q[2] | 0},${a})`;
      Z.cells.forEach(c => { const w = c.x1 - c.x0, h = c.y1 - c.y0, fa = clamp((OZR4 - c.dist) / 1.4);
        if (aO > .01) { g.fillStyle = cc(ramp((c.o3 - Z.lo) / (Z.hi - Z.lo || 1), 1), .55 * aO * fa); g.fillRect(c.x0, c.y0, w, h); }                       // 1 오존(실제)
        if (aH > .01) { g.fillStyle = cc(ramp((c.heat - Z.hlo) / (Z.hhi - Z.hlo || 1), 1), .55 * aH * fa); g.fillRect(c.x0, c.y0, w, h); }                  // 2 고온(가상)
        if (aC > .01 && (c.hotO || c.hotH)) { g.fillStyle = c.both ? `rgba(255,56,72,${.82 * aC})` : c.hotO ? `rgba(168,112,255,${.62 * aC})` : `rgba(255,170,56,${.62 * aC})`; g.fillRect(c.x0, c.y0, w, h); }   // 3 중첩
        g.strokeStyle = `rgba(190,225,255,${.26 * fa * Math.max(aO, aH, aC)})`; g.lineWidth = .5; g.strokeRect(c.x0, c.y0, w, h); });
      Z.cells.forEach(c => { const w = c.x1 - c.x0, h = c.y1 - c.y0;
        if (c.hotO && kO > .01) { g.strokeStyle = `rgba(200,165,255,${clamp(kO) * (c.both ? 1 : pu)})`; g.lineWidth = 1.5; g.strokeRect(c.x0 + .9, c.y0 + .9, w - 1.8, h - 1.8); }
        if (c.hotH && kH > .01) { g.strokeStyle = `rgba(255,190,80,${kH})`; g.lineWidth = 1.3; g.setLineDash([3, 2]); g.strokeRect(c.x0 + 2.6, c.y0 + 2.6, w - 5.2, h - 5.2); g.setLineDash([]); }
        if (c.both && kB > .01) { g.strokeStyle = `rgba(255,255,255,${kB * pu})`; g.lineWidth = 2.6; g.strokeRect(c.x0 - 1, c.y0 - 1, w + 2, h + 2); } });
      if (Z.kg > .02) { g.strokeStyle = `rgba(255,255,255,${.8 * Z.kg})`; g.lineWidth = 1.2; g.strokeRect(MREG[0], MREG[1], MREG[2] - MREG[0], MREG[3] - MREG[1]); } }

    // 실제 도로(OpenStreetMap) — 어둠 띠 위에 따뜻한 선
    const RW = [3.2, 2.0, 1.3, .9], RA = [.95, .5, .3, .2];
    layer("road", ls, () => {
      D3.roads.forEach(r => { poly(r.p); g.strokeStyle = `rgba(4,8,16,${.5 * RA[r.k]})`; g.lineWidth = (RW[r.k] + 2.4) * ls; g.stroke(); });
      D3.roads.forEach(r => { poly(r.p); g.strokeStyle = r.k === 0 ? `rgba(255,196,120,${RA[0]})` : `rgba(226,214,190,${RA[r.k]})`; g.lineWidth = RW[r.k] * ls; g.stroke(); });
    });
    // 고속도로를 달리는 빛
    g.setLineDash([3 * ls, 46 * ls]); g.lineDashOffset = -t * 60 * ls; g.strokeStyle = "rgba(255,244,214,.95)"; g.lineWidth = 2.2 * ls;
    D3.roads.forEach(r => { if (r.k === 0) { poly(r.p); g.stroke(); } }); g.setLineDash([]);

    // 실제 하천(KRF) — 번짐 + 심선 + 흐름 점선
    const eco = step === 7 || step === 8;
    layer("river", ls + (eco ? "e" : ""), () => {
      g.strokeStyle = "rgba(70,160,255,.22)"; g.lineWidth = 9 * ls; MAIN.forEach(m => { poly(m.p); g.stroke(); });
      g.strokeStyle = `rgba(110,170,235,${eco ? .35 : .6})`; g.lineWidth = 1.2 * ls; SMALL.forEach(s => { poly(s); g.stroke(); });
      g.strokeStyle = "rgba(140,205,255,.95)"; g.lineWidth = 2.6 * ls; MAIN.forEach(m => { poly(m.p); g.stroke(); });
    });
    if (step !== 2 && step !== 3 && step !== 4 && step !== 6) {         // 2 · 3 · 5단계(대기 · 소음)에서는 하천 흐름을 움직이지 않는다(2026-11-13 사용자 지시)
      g.setLineDash([5 * ls, 20 * ls]); g.lineDashOffset = -t * 22 * ls; g.strokeStyle = "rgba(235,248,255,.75)"; g.lineWidth = 1.4 * ls;
      MAIN.forEach(m => { poly(m.p); g.stroke(); }); g.setLineDash([]); }

    // KRF 노드(실제 번호)
    if (step >= 5 || step === 1) {
      const a = step === 1 ? ease(tau / 1.2) * .7 : .9;
      g.fillStyle = `rgba(160,200,255,${a * .5})`; K.SN.forEach(([, x, y]) => { g.beginPath(); g.arc(x, y, 1.5 * ls, 0, TAU); g.fill(); });
      g.strokeStyle = `rgba(210,232,255,${a})`; g.lineWidth = 1.4 * ls; K.N.forEach(([, x, y]) => { g.beginPath(); g.arc(x, y, 3.8 * ls, 0, TAU); g.stroke(); });
    }

    // 측정소 자리(틀 안) — 바닥 표지
    if (step === 2 || step === 3) D3.sta.forEach(s => { const [x, y] = s.f; if (x < 0 || x > MW || y < 0 || y > MH) return; g.fillStyle = "rgba(102,240,176,.95)"; g.beginPath(); g.arc(x, y, 3.6 * ls, 0, TAU); g.fill(); g.strokeStyle = "rgba(4,20,14,.9)"; g.lineWidth = 1.2 * ls; g.stroke(); });

    // 가상 사업지구 — 바닥 경계 · 굴뚝 자리
    if (step >= 1) {
      const prog = step === 1 ? ease(tau / 1.8) : 1, per = []; let L = 0;
      SITE.forEach((p, i) => { const q = SITE[(i + 1) % SITE.length], d = Math.hypot(q[0] - p[0], q[1] - p[1]); per.push([p, q, L, d]); L += d; });
      const upto = L * prog;
      if (prog >= 1) { poly(SITE, true); g.fillStyle = `rgba(255,211,106,${eco ? .04 : .1})`; g.fill(); }
      g.beginPath(); g.moveTo(...SITE[0]);
      for (const [p, q, l0, d] of per) { if (l0 > upto) break; const f = clamp((upto - l0) / d); g.lineTo(lerp(p[0], q[0], f), lerp(p[1], q[1], f)); }
      g.strokeStyle = "#ffd36a"; g.lineWidth = 2.2 * ls; g.setLineDash([7 * ls, 4 * ls]); g.stroke(); g.setLineDash([]);
      SITE.forEach((p, i) => { if (per[i][2] <= upto) { g.fillStyle = "#ffd36a"; g.fillRect(p[0] - 2.6 * ls, p[1] - 2.6 * ls, 5.2 * ls, 5.2 * ls); } });
      if (stacks && step >= 3 && step !== 4) stacks.forEach(([x, y]) => { g.fillStyle = "#ffffff"; g.beginPath(); g.arc(x, y, 2.6 * ls, 0, TAU); g.fill(); g.strokeStyle = "#ff8a5c"; g.lineWidth = 1.4 * ls; g.stroke(); });
      if (step === 7) { g.save(); poly(SITE, true); g.clip(); g.strokeStyle = "rgba(255,100,100,.75)"; g.lineWidth = 1.2 * ls;
        for (let k = -200; k < 200; k += 5) { g.beginPath(); g.moveTo(SC[0] + k, SC[1] - 60); g.lineTo(SC[0] + k + 60, SC[1] + 60); g.stroke(); } g.restore(); }
    }

    // 수질 — 하류로 번지는 오염(가상 값, 실제 하천 경로)
    if (step === 5) {
      const head = PLEN * ease(tau / 6);
      // 두 경로(동 · 서 소하천) — 배출구 빨강에서 하류 맑은 물색으로. 서쪽 경로는 합류점에서 동쪽 경로와 같은 색이 되게 맞춘다
      const runs = [[PATH, PL, PLEN, 1 / PLEN, pathAt], [PATH2, PL2, PLEN2, PLEN2 ? SCONF / PLEN / PLEN2 : 0, path2At]];
      for (let pass = 0; pass < 2; pass++) runs.forEach(([P, L, LEN, ku, at]) => { if (P.length < 2) return; const hd = Math.min(head, LEN);
        g.lineCap = pass ? "round" : "butt";
        for (let i = 1; i < P.length && L[i - 1] < hd; i++) { const e = L[i] <= hd ? P[i] : at(hd), c = wqCol((L[i - 1] + Math.min(L[i], hd)) / 2 * ku);
          g.beginPath(); g.moveTo(...P[i - 1]); g.lineTo(...e); g.strokeStyle = pass ? `rgba(${c.join(",")},.98)` : `rgba(${c.join(",")},.36)`; g.lineWidth = (pass ? 3.4 : 15) * ls; g.stroke(); } });
      g.lineCap = "round";
      NODES2.forEach((n, i) => { if (n.s > head) return; g.fillStyle = "#ffd36a"; g.beginPath(); g.arc(n.x, n.y, 5.5 * ls, 0, TAU); g.fill(); g.strokeStyle = "#1a0f05"; g.lineWidth = 1.4 * ls; g.stroke(); });
      NODES.forEach((n, i) => { if (n.s > head) return; const c = conc(i);
        g.fillStyle = c.r >= 1 ? "#ff6b5a" : "#ffd36a"; g.beginPath(); g.arc(n.x, n.y, 5.5 * ls, 0, TAU); g.fill(); g.strokeStyle = "#1a0f05"; g.lineWidth = 1.4 * ls; g.stroke(); });
    }

    // 소음 — 음원 · 수음점 자리
    if (step === 6 && draw.noiseSrc) {
      if (NT.eq > .05) draw.noiseSrc.forEach(([x, y]) => { g.globalAlpha = NT.eq; g.fillStyle = "#fff"; g.beginPath(); g.arc(x, y, 2.6 * ls, 0, TAU); g.fill(); g.strokeStyle = "#ff5a5a"; g.lineWidth = 1.4 * ls; g.beginPath(); g.arc(x, y, 5.5 * ls, 0, TAU); g.stroke(); }); g.globalAlpha = 1;
      RCV.forEach(([x, y]) => { g.fillStyle = "#ffffff"; g.beginPath(); g.moveTo(x, y - 6 * ls); g.lineTo(x + 5 * ls, y + 4 * ls); g.lineTo(x - 5 * ls, y + 4 * ls); g.closePath(); g.fill(); g.strokeStyle = "#101828"; g.lineWidth = ls; g.stroke(); });
    }

    // 생태 — 출현 · 비출현(가상 조사자료)
    if (step === 7) {
      const k = ease(tau / 1.6), c = SPC[0].col;
      ABS.forEach((p, i) => { if (i / ABS.length > k) return; g.strokeStyle = "rgba(210,220,240,.75)"; g.lineWidth = 1.2; g.beginPath(); g.arc(p[0], p[1], 2.6, 0, TAU); g.stroke(); });
      OCC.forEach((p, i) => { if (i / OCC.length > k) return; g.fillStyle = `rgb(${c.join(",")})`; g.beginPath(); g.arc(p[0], p[1], 3.2, 0, TAU); g.fill(); g.strokeStyle = "rgba(0,0,0,.6)"; g.lineWidth = 1; g.stroke(); });
    }
    if (step === 8 && E) {
      const z = E.alts[draw.kai || 0].z, zm = E.vmax;
      E.pts.forEach(([x, y], i) => { const v = clamp(z[i] / zm); g.save(); g.translate(x, y); g.rotate(Math.PI / 4);
        g.fillStyle = `rgb(${kcol(v).slice(0, 3).map(Math.round).join(",")})`; g.fillRect(-3.4, -3.4, 6.8, 6.8); g.strokeStyle = "#0b1020"; g.lineWidth = 1.2; g.strokeRect(-3.4, -3.4, 6.8, 6.8); g.restore(); });
    }
    // 자료 범위 모서리 꺾쇠
    g.strokeStyle = "rgba(140,200,255,.5)"; g.lineWidth = 2; [[0, 0, 1, 1], [MW, 0, -1, 1], [0, MH, 1, -1], [MW, MH, -1, -1]].forEach(([x, y, sx, sy]) => { g.beginPath(); g.moveTo(x + sx * 34, y + sy * 2); g.lineTo(x + sx * 2, y + sy * 2); g.lineTo(x + sx * 2, y + sy * 34); g.stroke(); });
    g.setTransform(1, 0, 0, 1, 0, 0); g = HUD;
  }

  /* =====================================================================================================
     계기판(2D) — 위 띠 · 단계 띠 · 지도 위 이름표 · 오른쪽 판
     ===================================================================================================== */
  const glass = (x, y, w, h, a = .58) => { g.fillStyle = `rgba(6,14,32,${a})`; rr(x, y, w, h, 6); g.fill(); g.strokeStyle = "rgba(110,180,255,.32)"; g.lineWidth = 1; g.stroke();
    g.strokeStyle = "rgba(140,210,255,.9)"; g.lineWidth = 2; [[x, y, 1, 1], [x + w, y, -1, 1], [x, y + h, 1, -1], [x + w, y + h, -1, -1]].forEach(([cx, cy, sx, sy]) => { g.beginPath(); g.moveTo(cx + sx * 18, cy); g.lineTo(cx, cy); g.lineTo(cx, cy + sy * 18); g.stroke(); }); };
  const bar = (x, y, w, h, f, col, bg = "rgba(255,255,255,.08)") => { g.fillStyle = bg; rr(x, y, w, h, h / 2); g.fill(); g.fillStyle = col; rr(x, y, Math.max(h, w * clamp(f)), h, h / 2); g.fill(); };
  function star(x, y, r) { g.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, q = i % 2 ? r * .45 : r; g.lineTo(x + q * Math.cos(a), y + q * Math.sin(a)); } g.closePath(); g.fill(); }

  function topBar(t) {
    const gr = g.createLinearGradient(0, 0, 0, 190); gr.addColorStop(0, "rgba(3,7,16,.97)"); gr.addColorStop(.8, "rgba(3,7,16,.86)"); gr.addColorStop(1, "rgba(3,7,16,0)");
    g.fillStyle = gr; g.fillRect(0, 0, W, 190);
    g.fillStyle = "#0F243E"; g.fillRect(0, 0, 104, 104); g.fillStyle = "#76A9ED"; g.fillRect(0, 100, 104, 4); T("5", 52, 72, 56, "#fff", { a: "center", w: 800, f: FD });
    T("환경영향평가의 미래 · 디지털 트윈과 AI 기반 전수 시뮬레이션 의사결정", 130, 46, 32, "#ffffff", { w: 800, f: FD });   // 24쪽 머리와 같은 글(2026-11-13 사용자 지시 — 종전 "환경평가의 미래 · 통합 환경 평가")
    // 2026-11-16 사용자 지시 — 머리 제목 아래 부제("통합 환경 디지털 트윈 — 구역 하나로 … 동시 검토")를 걷었다
    const air = step <= 3, chips = air ? [["● 대기 측정망 연계 · 사례 재생", "#7fe0a8"], [D3.clock ? `${D3.clock} KST` : "자료 불러오는 중", "#dfe9ff"], ["GPU 서로게이트 가동", "#76A9ED"]] : [["● 통합 모델 가동", "#7fe0a8"], ["GPU 서로게이트 가동", "#76A9ED"]];   // 대기 측정망 · 사례 시계는 대기 단계(0–3)에만
    let x = W - 40; g.font = `700 17px ${FS}`;
    for (let i = chips.length - 1; i >= 0; i--) { const [s, c] = chips[i], w = g.measureText(s).width + 30; x -= w;
      g.globalAlpha = i === 0 ? .65 + .35 * Math.sin(t * 3) ** 2 : 1; rr(x, 30, w, 36, 4); g.fillStyle = "rgba(60,130,220,.14)"; g.fill(); g.strokeStyle = "rgba(118,169,237,.5)"; g.lineWidth = 1; g.stroke();
      T(s, x + 15, 55, 17, c, { w: 700, f: air && i === 1 ? FM : FS }); g.globalAlpha = 1; x -= 10; }
    // 단계 띠
    const y = 118, sw = (W - 80) / STAGES.length;
    STAGES.forEach(([nm], i) => { const on = i + 1 === step, done = i + 1 < step, x0 = 40 + i * sw;
      g.fillStyle = on ? "#7fd0ff" : done ? "rgba(150,190,235,.6)" : "rgba(120,150,190,.22)"; g.fillRect(x0, y, sw - 10, on ? 5 : 3);
      if (on) { g.shadowColor = "#4fc0ff"; g.shadowBlur = 14; g.fillRect(x0, y, sw - 10, 5); g.shadowBlur = 0; }
      const lab = `${String(i + 1).padStart(2, "0")}  ${nm}`; g.font = `${on ? 800 : 600} 18px ${FS}`; const fz = Math.min(18, 18 * (sw - 16) / g.measureText(lab).width);   // 긴 이름은 칸에 맞춰 줄인다
      T(lab, x0, y + 30, fz, on ? "#ffffff" : done ? "#b9c9e4" : "#6f84a8", { w: on ? 800 : 600 }); });
  }

  // 지도 위 이름표 — 장면 좌표를 화면으로 옮겨 또렷한 글씨로 얹는다
  const fproj = (x, y, up = 0) => { const [wx, wz] = f2w(x, y); return G3.project(wx, G3.hAt(wx, wz) + up, wz); };
  const leader = (sx, sy, tx, ty, col) => { g.strokeStyle = col; g.lineWidth = 1.2; g.beginPath(); g.moveTo(sx, sy); g.lineTo(tx, ty); g.stroke(); g.fillStyle = col; g.beginPath(); g.arc(sx, sy, 2.6, 0, TAU); g.fill(); };
  const inMap = (sx, sy) => sx > 30 && sx < PX - 30 && sy > 176 && sy < H - 70;
  // 평가대상범위 선 — 장면 좌표의 버퍼 선을 화면으로 옮겨 점선으로 긋고(지도 자리 안에서만), 화면에 보이는 가장 위 점에 이름표를 단다. a 불투명도 · prog 긋는 진행(0–1)
  function zoneRing(Z, a, prog = 1, low = false) {      // low — 이름표를 가장 아래 점 밑에 단다(위쪽이 다른 이름표와 겹칠 때)
    if (a < .02) return; if (!Z.p3) Z.p3 = Z.ring.map(([x, z]) => [x, G3.hAt(x, z) + .08, z]);
    const n = Z.p3.length, m = Math.round(n * clamp(prog)), sp = []; for (let i = 0; i <= m; i++) sp.push(G3.project(...Z.p3[i % n]));
    g.save(); g.beginPath(); g.rect(0, 152, PX - 12, H - 152 - 62); g.clip(); g.lineJoin = "round"; g.lineCap = "butt";
    for (const [lw, st, dash] of [[5.5, `rgba(4,10,24,${.5 * a})`, []], [2.6, `rgba(${Z.col},${.96 * a})`, [14, 9]]]) { g.beginPath(); let pen = false;
      sp.forEach(([sx, sy, ok]) => { if (!ok) { pen = false; return; } pen ? g.lineTo(sx, sy) : g.moveTo(sx, sy); pen = true; }); g.lineWidth = lw; g.strokeStyle = st; g.setLineDash(dash); g.stroke(); }
    g.setLineDash([]); g.restore(); g.lineCap = "round";
    if (prog < 1) return;
    let top = null; sp.forEach(q => { if (q[2] && inMap(q[0], q[1]) && q[0] > MX + 60 && q[0] < PX - 420 && q[1] > MY + 110 && q[1] < H - 130 && (!top || (low ? q[1] > top[1] : q[1] < top[1]))) top = q; });
    if (top) { g.globalAlpha = a; tag(Z.nm, clamp(top[0] - 150, MX, PX - 470), top[1] + (low ? 36 : -12), "rgba(6,12,28,.92)", "#ffffff", 19, `rgba(${Z.col},.95)`); g.globalAlpha = 1; }
  }
  function mapLabels(t, tau) {
    if (!G3) return;
    if (step === 1) { zoneRing(ZONE.noise, seg(tau, TL1.n1, .4), (tau - TL1.n1) / 1.2, true); zoneRing(ZONE.air, seg(tau, TL1.a10, .4), (tau - TL1.a10) / 2.2); }
    if (step === 3) zoneRing(ZONE.air, seg(tau, .5, .8));           // 대기질 예측 — 반경 10 km
    if (step === 6) zoneRing(ZONE.noise, seg(tau, .6, .8), 1, true);         // 소음 · 진동 예측 — 반경 1 km
    const hi = Math.floor(D3.hr || 0);
    if (step === 0 || step === 2) {                      // 실제 측정소 이름 · 실측 NO₂
      const k = step === 2 ? seg(tau, TL2.zoom + 1.8, 1) : .9;                  // 2단계 — 종전 뷰로 확대한 뒤에 이름표를 단다
      D3.staIn.forEach((s, i) => { const [sx, sy, ok] = G3.project(s.wx, s.wy + 3.4, s.wz); if (!ok || !inMap(sx, sy)) return; const v = s.no2[hi];
        g.globalAlpha = k; const txt = step === 2 ? `${s.nm}  NO₂ ${isNaN(v) ? "–" : v.toFixed(1)} ppb` : s.nm;
        tag(txt, sx + 10, sy + 4, "rgba(4,22,20,.84)", "#c8f5dc", 15, "rgba(102,240,176,.7)"); g.globalAlpha = 1; });
    }
    if (step === 2) {                                    // 넓은 뷰의 측정망 표지 · 두 층의 이름표
      const kw = seg(tau, TL2.graph + .6, .8) * (1 - seg(tau, TL2.zoom, 1.2));
      if (kw > .02) { g.globalAlpha = kw; tag(`AirKorea 측정망 ${D3.sta.length}곳 · 그래프 연결`, MX, MY + 50, "rgba(4,22,20,.9)", "#d6ffe8", 22, "rgba(102,240,176,.85)"); g.globalAlpha = 1; }
      (D3.lay || []).forEach((L, i) => { if (L.a < .05) return; g.globalAlpha = clamp(L.a * 2.2); tag(L.nm, MX, MY + 96 + i * 46, "rgba(4,10,24,.9)", "#ffffff", 22, L.col); g.globalAlpha = 1; });
    }
    if (step === 0) {                                    // 실제 지명 · 하천 · 도로
      const a = ease(tau / 1.5); g.globalAlpha = a;
      [[127.4414, 36.8551, "진천읍"], [127.539, 36.902, "덕산읍 · 충북혁신도시"], [127.585, 36.975, "대소면"], [127.415, 36.925, "이월면"], [127.50, 36.825, "미호강 본류"]].forEach(([lon, lat, nm]) => { const [x, y] = ll2f(lon, lat), [sx, sy, ok] = fproj(x, y, .5); if (!ok || !inMap(sx, sy)) return;
        g.shadowColor = "rgba(0,0,0,.9)"; g.shadowBlur = 8; T(nm, sx, sy, 19, "#eaf3ff", { w: 700, a: "center" }); g.shadowBlur = 0; });
      g.globalAlpha = 1;
    }
    if (step === 4 && D3.oz) { const Z = D3.oz, zin = Z.kg || 0, far = 1 - seg(tau, TL4.zoom, 1.2), bk = .45 + .55 * Math.abs(Math.sin(t * 3.2));
      if (far > .02) { const top = [...Z.cells].sort((a, b) => b.o3 - a.o3)[0], hh = [...Z.cells].sort((a, b) => b.heat - a.heat)[0], cen = c => fproj((c.x0 + c.x1) / 2, (c.y0 + c.y1) / 2, .15);
        const put = (c, txt, k, dx, dy, colr) => { if (!c || k < .02) return; const [sx, sy, ok] = cen(c); if (!ok || !inMap(sx, sy) || sy > H - 200) return; if (sx > PX - 360) dx = -Math.abs(dx); g.globalAlpha = clamp(k) * clamp(far); leader(sx, sy, sx + dx * .25, sy + dy * .6, colr); tag(txt, sx + (dx < 0 ? dx - 270 : dx), sy + dy, "rgba(6,12,28,.9)", "#ffffff", 19, colr); g.globalAlpha = 1; };
        const head = (txt, k, colr) => { if (k < .02) return; g.globalAlpha = clamp(k) * clamp(far); tag(txt, MX, MY + 50, "rgba(6,12,28,.92)", "#ffffff", 22, colr); g.globalAlpha = 1; };
        const kA = seg(tau, TL4.o3 + .4, .8) * (1 - seg(tau, TL4.heat - .6, .6)), kH = seg(tau, TL4.heat + .3, .8) * (1 - seg(tau, TL4.both - .6, .6)), kC = seg(tau, TL4.both + .3, .8);
        head(`1  오존 고농도 격자 · ${Z.date} · Two-Stage 1 km 추론`, kA, "rgba(200,165,255,.95)"); head("2  고온 격자 · 일 최고기온(가상)", kH, "rgba(255,190,80,.95)"); head("3  고농도 오존 + 폭염 중첩", kC, "rgba(255,80,92,.98)");
        put(top, `오존 핫스팟  ${top.o3.toFixed(0)} ppb`, seg(tau, TL4.hotO, .8) * (1 - seg(tau, TL4.heat - .6, .6)), -40, -44, "rgba(200,165,255,.95)");
        Z.obs.slice(0, 2).forEach((s, i) => put(s, `${s.nm} 측정소 실측  ${s.max.toFixed(0)} ppb`, seg(tau, TL4.hotO + .5 + i * .3, .8) * (1 - seg(tau, TL4.heat - .6, .6)), i ? -44 : 44, i ? 56 : 60, "rgba(102,240,176,.95)"));      // 그날 측정소 실측 1시간 최고(실제)
        put(hh, `고온 격자(가상)  ${hh.heat.toFixed(1)} °C`, seg(tau, TL4.hotH, .8) * (1 - seg(tau, TL4.both - .6, .6)), 44, 50, "rgba(255,190,80,.95)");
        put(Z.target, "고농도 오존 + 폭염 중첩 위치", seg(tau, TL4.both + .8, .8), 46, -40, "rgba(255,80,92,.98)"); }
      if (zin > .5) { const kb = seg(tau, TL4.bld + .8, .8), kz = Z.kz || 0;
        g.globalAlpha = kb * zin * (1 - .55 * kz); Z.zones.forEach(q => { const [sx, sy, ok] = G3.project(...q.p); if (ok && inMap(sx, sy)) { g.shadowColor = "rgba(0,0,0,.95)"; g.shadowBlur = 8; T(q.nm, sx, sy, 21, "#ffffff", { w: 800, a: "center" }); g.shadowBlur = 0; } });
        const hh = Math.floor(Z.kst), mm = Math.floor((Z.kst - hh) * 6) * 10; g.globalAlpha = clamp((Z.kt || 0) * 1.4) * zin;
        tag(`폭염 시간대  ${hh}:${String(mm).padStart(2, "0")} KST  ·  태양 고도 ${(Z.sun.el * 180 / Math.PI).toFixed(0)}°`, MX, MY + 50, "rgba(40,22,6,.9)", "#ffe6b8", 22, "rgba(255,196,96,.95)");
        if (kz > .02) { g.globalAlpha = kz * zin; tag("폭염 저감방안 수립지역 제안(가상)", MX, MY + 96, "rgba(6,12,28,.92)", "#ffffff", 22, "rgba(255,255,255,.9)");
          Z.fix.forEach((q, i) => { const [sx, sy, ok] = G3.project(...q.p); if (!ok || !inMap(sx, sy)) return; const [dx, dy] = [[-330, -150], [50, 120], [-470, 150]][i]; g.globalAlpha = kz * zin; leader(sx, sy, sx + (dx < 0 ? dx + 300 : dx), sy + dy - (dy < 0 ? -8 : 26), q.col);       // 이름표는 건물 밖 빈 자리로 뺀다
            g.globalAlpha = kz * zin * bk; tag(q.nm, sx + dx, sy + dy, "rgba(6,12,28,.94)", "#ffffff", 22, q.col); }); }       // 깜빡이는 글씨 — 저감방안 수립지역
        g.globalAlpha = 1; } }
    if (step === 1 && tau > 1.6) { const [sx, sy, ok] = fproj(SC[0], SC[1], .95); if (ok) { g.globalAlpha = ease((tau - 1.6) / .5); leader(sx, sy, sx + 46, sy - 34, "#ffd36a");
      tag(`가상 사업지구 · ${area.toFixed(2)} km²`, sx + 46, sy - 30, "rgba(40,28,6,.9)", "#ffe3a0", 18, "rgba(255,211,106,.9)");
      T(`${SCLL[1].toFixed(4)}°N  ${SCLL[0].toFixed(4)}°E`, sx + 50, sy - 4, 14, "#c9b98a", { w: 500, f: FM }); g.globalAlpha = 1; } }
    if (step === 3) { const [sx, sy, ok] = fproj(SC[0], SC[1], .7); if (ok) { leader(sx, sy, sx - 60, sy - 50, "#ffb070"); const w = 0; tag("가상 굴뚝 3기 · 배치 대안", sx - 60 - 210, sy - 46, "rgba(40,18,6,.88)", "#ffd9b8", 16, "rgba(255,150,90,.9)"); } }
    if (step === 5) { const head = PLEN * ease(tau / 6);
      NODES.forEach((n, i) => { if (n.s > head) return; const c = conc(i), [sx, sy, ok] = fproj(n.x, n.y, .1); if (!ok || !inMap(sx, sy)) return; const dx = i % 2 ? 26 : -236, dy = i % 2 ? 20 : -18;
        leader(sx, sy, sx + (i % 2 ? 26 : -26), sy + dy - 6, c.r >= 1 ? "#ff8a7a" : "#ffd36a");
        tag(`${n.kind} ${n.id} · BOD ${c.bod.toFixed(1)} mg/L`, sx + dx, sy + dy, "rgba(40,20,6,.88)", "#ffe1b0", 15, c.r >= 1 ? "rgba(255,110,90,.9)" : "rgba(255,211,106,.8)"); });
      NODES2.forEach((n, i) => { if (n.s > head) return; const c = conc(i), [sx, sy, ok] = fproj(n.x, n.y, .1); if (!ok || !inMap(sx, sy)) return;
        const up = i ? 0 : 34; leader(sx, sy, sx - 26, sy - 24 - up, "#ffd36a"); tag(`${n.kind} ${n.id} · BOD ${c.bod.toFixed(1)} mg/L`, sx - 262, sy - 18 - up, "rgba(40,20,6,.88)", "#ffe1b0", 15, "rgba(255,211,106,.8)"); }); }
    if (step === 6 && draw.noiseSrc) { RCV.forEach(([x, y, nm], i) => { const L = noiseVal(x, y, draw.noiseSrc), [sx, sy, ok] = fproj(x, y, .05); if (!ok) return; const dx = i % 2 ? -226 : 24;
      leader(sx, sy, sx + (i % 2 ? -24 : 24), sy - 22, "#ffffff"); tag(`수음점 ${nm}  ${L.toFixed(1)} dB(A)`, sx + dx, sy - 18, L >= 65 ? "rgba(90,10,20,.9)" : "rgba(6,14,32,.88)", "#fff", 17, L >= 65 ? "rgba(255,90,90,.95)" : "rgba(140,210,255,.8)"); });
      { const hh = Math.floor(NT.h), mm = Math.floor((NT.h - hh) * 6) * 10, pk = NT.q > .6;
        tag(`${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}  ${NT.nm}  ·  교통량 ${Math.round(NT.q * 100)} %(가상)`, MX, MY + 50, pk ? "rgba(60,14,10,.92)" : "rgba(6,12,28,.92)", "#ffffff", 22, pk ? "rgba(255,120,96,.98)" : NT.day > .5 ? "rgba(255,214,150,.95)" : "rgba(140,180,255,.95)"); }
      const r0 = D3.roads.find(r => r.k === 0 && r.nm); if (r0) { const [sx, sy, ok] = fproj(SC[0] + 2, SC[1] - 96, .05); if (ok && inMap(sx, sy)) tag("중부고속도로 · 실제 선형", sx + 14, sy, "rgba(40,26,8,.86)", "#ffe1b0", 15, "rgba(255,196,120,.9)"); } }
  }

  function mapLegend(tau) {
    const x = MX, y = H - 178; g.globalAlpha = step === 2 ? seg(tau, TL2.cmaq, .8) : ease(tau / .8);        // 2단계 — 위 층(CMAQ-DA)이 뜰 때 함께 뜬다
    if (step === 2 || step === 3) {
      glass(x, y, 400, 96);
      T(step === 2 ? (tau < TL2.fld + .8 ? "CMAQ-DA 5 km NO₂ · 2023-03 사례" : "Two-Stage 1 km 추론 NO₂ · 2023-03 사례") : tau < S3.merge + 1.1 ? "대안 농도장(가상) + 배경 1 km NO₂" : "예측 농도 · Two-Stage 배경 + 대안 기여(가상)", x + 18, y + 30, 16, "#dfe9ff", { w: 700 });
      for (let i = 0; i < 60; i++) { const c = ramp(i / 59, 1); g.fillStyle = `rgb(${c[0] | 0},${c[1] | 0},${c[2] | 0})`; g.fillRect(x + 18 + i * 5, y + 44, 5, 12); }
      T("0", x + 18, y + 78, 13, "#9fb3d6", { w: 600 }); T("24 ppb", x + 318, y + 78, 13, "#9fb3d6", { w: 600, a: "right" });
      g.fillStyle = "#66f0b0"; g.beginPath(); g.arc(x + 342, y + 50, 5, 0, TAU); g.fill(); T("측정소", x + 354, y + 56, 13, "#b9c6dc", { w: 600 });
    } else if (step === 4 && D3.oz) { const Z = D3.oz, zin = (Z.kg || 0) > .5, ph = zin ? 3 : tau > TL4.both + .3 ? 2 : tau > TL4.heat ? 1 : 0;
      glass(x, y, 470, 96);
      if (ph === 2) { T("고농도 오존 + 폭염 중첩 지도", x + 18, y + 30, 16, "#dfe9ff", { w: 700 }); T("폭염 가상", x + 452, y + 30, 13, "#7f93b8", { w: 600, a: "right" });
        [["rgba(168,112,255,.9)", "오존 핫스팟"], ["rgba(255,170,56,.9)", "고온 격자"], ["rgba(255,56,72,.95)", "중첩"]].forEach(([c, nm], i) => { g.fillStyle = c; g.fillRect(x + 18 + i * 150, y + 52, 26, 14); T(nm, x + 52 + i * 150, y + 65, 15, "#dfe9ff", { w: 600 }); }); }
      else { T(["Two-Stage 1 km 추론 O₃ · 일 최고값", "고온 격자 · 일 최고기온(가상)", "", "지표면 온도 · 폭염 시간대(가상)"][ph], x + 18, y + 30, 16, "#dfe9ff", { w: 700 }); if (ph === 0) T(Z.date, x + 452, y + 30, 13, "#7f93b8", { w: 600, a: "right", f: FM });
        for (let i = 0; i < 60; i++) { const c = ramp(i / 59, 1); g.fillStyle = `rgb(${c[0] | 0},${c[1] | 0},${c[2] | 0})`; g.fillRect(x + 18 + i * 7, y + 44, 7, 12); }
        T([`${Z.lo.toFixed(0)}`, `${Z.hlo.toFixed(1)}`, "", `${stT(0).toFixed(0)} °C`][ph], x + 18, y + 78, 13, "#9fb3d6", { w: 600 }); T([`${Z.hi.toFixed(0)} ppb`, `${Z.hhi.toFixed(1)} °C`, "", `${stT(1).toFixed(0)} °C`][ph], x + 438, y + 78, 13, "#9fb3d6", { w: 600, a: "right" }); }
    } else if (step === 7) {
      glass(x, y, 470, 96); T("미호종개 · 서식적합도 분포(예시)", x + 18, y + 30, 16, "#dfe9ff", { w: 700 }); T("조사자료 가상", x + 452, y + 30, 13, "#7f93b8", { w: 600, a: "right" });
      g.fillStyle = `rgb(${SPC[0].col.join(",")})`; g.beginPath(); g.arc(x + 26, y + 60, 5, 0, TAU); g.fill(); T("과거 출현", x + 38, y + 66, 15, "#b9c6dc", { w: 600 });
      g.strokeStyle = "rgba(200,210,230,.8)"; g.lineWidth = 1.4; g.beginPath(); g.arc(x + 128, y + 60, 4.5, 0, TAU); g.stroke(); T("비출현", x + 140, y + 66, 15, "#b9c6dc", { w: 600 });
      g.fillStyle = "rgba(120,230,190,.75)"; g.fillRect(x + 208, y + 54, 26, 12); T("적합지", x + 240, y + 66, 15, "#b9c6dc", { w: 600 });
      g.fillStyle = `rgba(${UNC.join(",")},.75)`; g.fillRect(x + 308, y + 54, 26, 12); T("비적합지", x + 340, y + 66, 15, "#b9c6dc", { w: 600 });
    } else if (step === 8) {
      glass(x, y, 400, 96); T("서식적합도 감소량 ΔHSI · 정규 크리깅", x + 18, y + 30, 16, "#dfe9ff", { w: 700 });
      for (let i = 1; i < 10; i++) { const c = kcol((i + .5) / 10); g.fillStyle = `rgb(${c.slice(0, 3).map(Math.round).join(",")})`; g.fillRect(x + 18 + (i - 1) * 24, y + 46, 24, 12); }
      T("작음", x + 18, y + 80, 13, "#9fb3d6", { w: 600 }); T("큼", x + 234, y + 80, 13, "#9fb3d6", { w: 600, a: "right" });
      g.save(); g.translate(x + 270, y + 52); g.rotate(Math.PI / 4); g.fillStyle = "#f0a050"; g.fillRect(-5, -5, 10, 10); g.restore(); T("조사지점(가상)", x + 284, y + 58, 13, "#b9c6dc", { w: 600 });
    } else if (step === 6) {
      glass(x, y, 400, 96); T("등음선 dB(A) · 실제 선형 + 가상 교통량 · 장비", x + 18, y + 30, 16, "#dfe9ff", { w: 700 });
      NB.forEach(([th, c], i) => { g.fillStyle = `rgb(${c.join(",")})`; g.fillRect(x + 18 + i * 60, y + 46, 56, 12); T(`${th}`, x + 18 + i * 60, y + 80, 13, "#9fb3d6", { w: 600 }); });
    }
    g.globalAlpha = 1;
  }

  function footer() {
    if (step === 9) { T("바탕 — 위성영상 국토교통부 VWorld · 표고 Terrain Tiles(AWS Open Data) · 도로 © OpenStreetMap contributors · 하천 KRF   |   대안 · 영향 수치는 가상(홍보용 개념 화면)", MX, H - 10, 12.5, "rgba(170,205,245,.7)", { w: 500 }); return; }
    const y = H - 30; g.fillStyle = "rgba(3,7,16,.74)"; g.fillRect(0, H - 56, PX - 10, 56);
    const real = "실제 자료  위성영상 국토교통부 VWorld · 표고 Terrain Tiles(AWS Open Data, 높이 과장) · 도로 © OpenStreetMap contributors · 하천 KRF · 측정망 AirKorea · 농도장 Two-Stage 1 km · CMAQ-DA 5 km · 바람 ERA5";
    T(real, MX, y - 6, 13.5, "rgba(170,205,245,.82)", { w: 500 });
    T("가상  사업지구 위치 · 대안 · 대기 · 수질 · 소음 · 생태 영향 수치 · 폭염 · 건물 · 지표면 온도 · 위성 · 기상청 API 수신 연출(홍보용 개념 화면)   사례 구간 2023-03-11 ~ 13 재생(오존 2023-07-20) — 실시간 아님", MX, y + 14, 13.5, "rgba(255,214,150,.78)", { w: 500 });
  }

  /* ---------- 오른쪽 판 ---------- */
  function panelHead(k, sub, tau) {
    const y = MY;
    glass(PX, y, PW, MH, .74);
    g.globalAlpha = ease(tau / .5);
    T(String(k).padStart(2, "0"), PX + 28, y + 64, 46, "#7fd0ff", { w: 800, f: FD });
    { const nm = k ? STAGES[k - 1][0] : "대상 지역"; g.font = `800 32px ${FD}`; T(nm, PX + 104, y + 46, Math.min(32, 32 * (PW - 132) / g.measureText(nm).width), "#ffffff", { w: 800, f: FD }); }
    { const sb = sub || STAGES[k - 1][1]; g.font = `500 17px ${FS}`; T(sb, PX + 104, y + 76, Math.min(17, 17 * (PW - 132) / g.measureText(sb).width), "#9fb3d6", { w: 500 }); }
    const gr = g.createLinearGradient(PX + 28, 0, PX + PW - 28, 0); gr.addColorStop(0, "rgba(127,208,255,.9)"); gr.addColorStop(1, "rgba(127,208,255,0)"); g.fillStyle = gr; g.fillRect(PX + 28, y + 100, PW - 56, 1.5);
    g.globalAlpha = 1;
  }
  const LOG = ["surrogate.aq  batch 256", "krf.route  node 3011…", "noise.cuda  grid 12k", "sdm.rf  treeshap", "airkorea.stream  +1", "alt.generate  seed", "wq.emu  batch 500", "risk.hi  receptor"];
  function consoleBox(t, kind) {
    const x = PX + 24, y = MY + MH - 150, w = PW - 48, h = 128;
    g.fillStyle = "rgba(2,6,14,.7)"; rr(x, y, w, h, 4); g.fill(); g.strokeStyle = "rgba(110,180,255,.18)"; g.lineWidth = 1; g.stroke();
    g.save(); rr(x, y, w, h, 4); g.clip();
    const n = Math.floor(t * 6), now = new Date();
    for (let i = 0; i < 6; i++) {
      const k = n - i, r = rng(k * 131 + kind)(), lab = LOG[(kind + k) % LOG.length], dt = (.004 + r * .03).toFixed(3);
      const tm = new Date(now.getTime() - i * 170).toTimeString().slice(0, 8);
      g.globalAlpha = 1 - i * .14;
      T(`[${tm}]  ${lab}  ✓ ${dt}s`, x + 14, y + h - 14 - i * 19, 14, i ? "#7f93b8" : "#9fe0b8", { w: 500, f: FM });
    }
    g.globalAlpha = 1; g.restore();
  }

  function panel(t, tau, alt, settled) {
    const x = PX + 28, w = PW - 56; let y = MY + 140;
    panelHead(step, step ? null : "미호강 상류 · 충북 진천 · 음성", step ? tau : 1);
    if (step === 0) {
      const nIn = D3.staIn ? D3.staIn.length : 0, D = window.FUT_DEM;
      const rows = [["대상 유역", "미호강 상류"], ["하천 KRF 본류", `${MAIN.length}개 구간`], ["소하천 KRF", `${SMALL.length}개 구간`], ["측정소 (화면 안)", nIn ? `${nIn}개소` : "–"], ["표고 범위", D ? `${Math.round(D.zmin)} – ${Math.round(D.zmax)} m` : "–"], ["간선도로", D3.roads.length ? `${D3.roads.length}개 선` : "–"]];
      rows.forEach(([a, b], i) => { const k = ease((tau - .2 - i * .14) / .5); g.globalAlpha = k;
        g.fillStyle = "rgba(118,169,237,.08)"; rr(x, y + i * 70, w, 58, 4); g.fill(); g.fillStyle = "rgba(127,208,255,.8)"; g.fillRect(x, y + i * 70, 3, 58);
        T(a, x + 20, y + i * 70 + 37, 18, "#9fb3d6", { w: 600 }); T(b, x + w - 18, y + i * 70 + 37, 22, "#ffffff", { w: 700, a: "right" }); });
      g.globalAlpha = 1; T("지형 · 하천 · 도로 · 측정망은 실제 자료", x, y + 6 * 70 + 26, 16, "#7fd0ff", { w: 600 });
      consoleBox(t, 0); return;
    }
    if (step === 1) {
      const near = D3.sta.filter(s => s.dist <= 25).length;
      const rows = [["사업 유형", "산업단지 조성(가상)"], ["면적", `${area.toFixed(2)} km²`], ["연결 하천", `소하천 ${NODES[0] ? NODES[0].id : "-"}${NODES2[0] ? " · " + NODES2[0].id : ""} → 본류`], ["주변 측정소", near ? `${near}개소 (반경 25 km)` : "–"], ["과거 조사자료", "평가서 · 사후조사 128건"], ["적용 모델", "대기 · 수질 · 소음진동 · 생태"]];
      rows.forEach(([a, b], i) => { const k = ease((tau - .3 - i * .18) / .5); g.globalAlpha = k;
        g.fillStyle = "rgba(118,169,237,.08)"; rr(x, y + i * 74, w, 62, 4); g.fill(); g.fillStyle = "rgba(255,211,106,.85)"; g.fillRect(x, y + i * 74, 3, 62);
        T(a, x + 20, y + i * 74 + 39, 18, "#9fb3d6", { w: 600 }); T(b, x + w - 18, y + i * 74 + 39, 22, "#ffffff", { w: 700, a: "right" }); });
      g.globalAlpha = 1; consoleBox(t, 1); return;
    }
    if (step === 2) {                                  // 수신 채널 넷 + 실제 측정소 실측 NO₂(2023-03 사례 72시간)
      T("수신 채널", x, y + 2, 19, "#dfe9ff", { w: 700 });
      const CH = [["AirKorea 측정망", `대기 측정소 ${D3.sta.filter(s => s.dist <= 25).length}곳 · 시간자료`, "#66f0b0", "실측 사례"], ["GEMS", "정지궤도 환경위성 · NO₂ 기둥", "#b79cff", "연출"],
                  ["TROPOMI", "저궤도 · 하루 한 번 13:30 무렵", "#5fe0d6", "연출"], ["기상청 API", "실시간 · 풍향 · 풍속 · 기온", "#9fd0ff", "연출"]];
      CH.forEach(([a, b, col, st], i) => { const yy = y + 18 + i * 62, k = ease((tau - .2 - i * .15) / .5); g.globalAlpha = k;
        g.fillStyle = "rgba(118,169,237,.08)"; rr(x, yy, w, 54, 4); g.fill(); g.fillStyle = col; g.fillRect(x, yy, 3, 54);
        const pu = .5 + .5 * Math.sin(t * 4 + i * 1.3); g.globalAlpha = k * (.45 + .55 * pu); g.beginPath(); g.arc(x + 22, yy + 27, 5.5, 0, TAU); g.fill(); g.globalAlpha = k;
        T(a, x + 40, yy + 24, 18, "#ffffff", { w: 800 }); T(b, x + 40, yy + 44, 13.5, "#9fb3d6", { w: 600 });
        for (let q = 0; q < 14; q++) { const hq = 4 + 18 * Math.abs(Math.sin(t * 2.2 + q * .9 + i * 2.1)) * (.4 + .6 * Math.abs(Math.sin(q * 1.7 + i))); g.fillStyle = col; g.globalAlpha = k * (.35 + .65 * (q / 13)); g.fillRect(x + w - 150 + q * 6, yy + 40 - hq, 3.6, hq); }   // 들어오는 자료 막대(장식)
        g.globalAlpha = k; T(st, x + w - 12, yy + 22, 12.5, st === "연출" ? "#ffd9a0" : "#66f0b0", { w: 700, a: "right" }); });
      g.globalAlpha = 1;
      const y2 = y + 18 + 4 * 62 + 22; T("측정소별 NO₂ 실측 · 사례 72시간", x, y2, 18, "#dfe9ff", { w: 700 }); T("AirKorea", x + w, y2, 13, "#66f0b0", { w: 700, a: "right", f: FM });
      const hr = D3.hr || 0, hi = Math.floor(hr), list = D3.sta.slice(0, 4);
      list.forEach((s, i) => { const yy = y2 + 12 + i * 58, k = ease((tau - .6 - i * .1) / .5); g.globalAlpha = k;
        T(s.nm, x, yy + 24, 18, "#ffffff", { w: 700 }); T(`${s.dist.toFixed(1)} km`, x, yy + 44, 13, "#7f93b8", { w: 600 });
        const gx = x + 130, gw = 270, gh = 36; g.fillStyle = "rgba(255,255,255,.035)"; g.fillRect(gx, yy + 8, gw, gh);
        g.strokeStyle = "#66f0b0"; g.lineWidth = 1.8; g.beginPath(); let pen = false;
        for (let q = 0; q < s.no2.length; q++) { const v = s.no2[q]; if (isNaN(v)) { pen = false; continue; } const px = gx + q / (s.no2.length - 1) * gw, py = yy + 8 + gh - clamp(v / 45) * gh; pen ? g.lineTo(px, py) : g.moveTo(px, py); pen = true; }
        g.stroke();
        const cx = gx + hr / (s.no2.length - 1) * gw; g.strokeStyle = "rgba(255,255,255,.75)"; g.lineWidth = 1; g.beginPath(); g.moveTo(cx, yy + 6); g.lineTo(cx, yy + 10 + gh); g.stroke();
        const v = s.no2[hi]; T(isNaN(v) ? "결측" : `${v.toFixed(1)} ppb`, x + w, yy + 34, 18, "#c8f5dc", { w: 700, a: "right" }); });
      g.globalAlpha = 1; T("측정망 값은 2023-03 실측 사례 · 위성 · 기상청 수신은 연계 구상의 연출", x, y2 + 12 + 4 * 58 + 14, 13.5, "#7f93b8", { w: 600 });
      consoleBox(t, 4); return;
    }
    if (step === 3) {
      T(fmt(alt), x, y + 62, 72, "#ffffff", { w: 800, f: FD });
      T("배치 대안 평가", x + 6 + g.measureText(fmt(alt)).width + 14, y + 60, 22, "#9fb3d6", { w: 600 });
      T(`1,000개 대안 · 서로게이트 · 기상 ${settled ? "확정" : "갱신 중"}`, x, y + 98, 17, "#7fd0ff", { w: 600 });
      const gx = x + 46, gy = y + 122, gw = w - 60, gh = 236;
      g.fillStyle = "rgba(255,255,255,.03)"; g.fillRect(gx, gy, gw, gh);
      g.strokeStyle = "rgba(160,190,230,.4)"; g.lineWidth = 1; g.beginPath(); g.moveTo(gx, gy); g.lineTo(gx, gy + gh); g.lineTo(gx + gw, gy + gh); g.stroke();
      T("사업비 →", gx + gw, gy + gh + 26, 15, "#9fb3d6", { a: "right", w: 600 });
      g.save(); g.translate(gx - 14, gy + gh / 2); g.rotate(-Math.PI / 2); T("최대 착지농도 →", 0, 0, 15, "#9fb3d6", { a: "center", w: 600 }); g.restore();
      for (let k = 0; k < alt; k++) { const [px, py] = SCAT[k]; g.fillStyle = k > alt - 40 ? "rgba(255,255,255,.95)" : "rgba(127,208,255,.4)"; g.fillRect(gx + px * gw - 1, gy + gh - py * gh - 1, 2.4, 2.4); }
      if (settled) { const k = ease((tau - 6.8) / .8);
        g.strokeStyle = `rgba(255,211,106,${k})`; g.lineWidth = 2.5; g.beginPath(); PARETO.forEach((p, i) => { const px = gx + p[0] * gw, py = gy + gh - p[1] * gh; i ? g.lineTo(px, py) : g.moveTo(px, py); }); g.stroke();
        const kx = gx + KNEE[0] * gw, ky = gy + gh - KNEE[1] * gh; g.globalAlpha = k;
        g.fillStyle = "#ffd36a"; star(kx, ky, 13); tag(`최적안 #${fmt(OPT)}`, kx + 16, ky - 10, "rgba(40,30,8,.92)", "#ffe3a0", 17, "rgba(255,211,106,.9)"); g.globalAlpha = 1;
        T("최대 착지농도  −38 %   ·   사업비  +4 %", x, gy + gh + 62, 21, "#ffffff", { w: 800 }); }
      { const yy = gy + gh + 96, k = ease((tau - 7.4) / .8); g.globalAlpha = settled ? k : 0;          // 건강영향 — 최적안 착지농도 기준 위해도(가상)
        T("건강영향 · 최적안 위해도", x, yy + 2, 16, "#dfe9ff", { w: 700 });
        [["비발암 위해도 HI", "0.21", "기준 1"], ["발암 위해도", "3.4 × 10⁻⁷", "기준 10⁻⁶"]].forEach(([a, b, c], i) => {
          g.fillStyle = "rgba(127,224,168,.1)"; rr(x + i * (w / 2 + 6), yy + 14, w / 2 - 6, 84, 4); g.fill(); g.fillStyle = "rgba(127,224,168,.85)"; g.fillRect(x + i * (w / 2 + 6), yy + 14, 3, 84);
          T(a, x + i * (w / 2 + 6) + 16, yy + 40, 15, "#9fb3d6", { w: 600 }); T(b, x + i * (w / 2 + 6) + 16, yy + 78, 27, "#c8f5dc", { w: 800 });
          T(c, x + i * (w / 2 + 6) + w / 2 - 22, yy + 78, 14, "#7f93b8", { w: 600, a: "right" }); });
        g.globalAlpha = 1; }
      consoleBox(t, 0); return;
    }
    if (step === 4) { const Z = D3.oz;
      if (!Z) { T("오존 자료를 불러오는 중", x, y + 4, 18, "#7f93b8", { w: 600 }); consoleBox(t, 0); return; }
      const rows = [["오존 고농도 격자", `${Z.nO}칸 · 최고 ${Z.hi.toFixed(0)} ppb`, "rgba(200,165,255,.9)", TL4.hotO], ["고온 격자(가상)", `${Z.nH}칸 · ${Z.hmin.toFixed(1)} °C 이상`, "rgba(255,190,80,.9)", TL4.hotH], ["고농도 오존 + 폭염 중첩", `${Z.nB}칸`, "rgba(255,70,84,.95)", TL4.both + .8]];
      rows.forEach(([a, b, c, t0], i) => { g.globalAlpha = seg(tau, t0, .6); g.fillStyle = "rgba(118,169,237,.08)"; rr(x, y + i * 64 - 14, w, 54, 4); g.fill(); g.fillStyle = c; g.fillRect(x, y + i * 64 - 14, 3, 54);
        T(a, x + 20, y + i * 64 + 21, 18, "#9fb3d6", { w: 600 }); T(b, x + w - 18, y + i * 64 + 21, 21, "#ffffff", { w: 700, a: "right" }); });
      const y2 = y + 3 * 64 + 14, kt = seg(tau, TL4.therm, 1); g.globalAlpha = kt;
      T("사업지구 안팎 지표면 온도 · 폭염 시간대(가상)", x, y2, 18, "#dfe9ff", { w: 700 });
      [["산업단지 포장면(양지)", STV.pave + .06], ["주거지 포장면", STV.res], ["건물 그림자", STV.shade], ["완충 녹지 수목 그늘", STV.tree]].forEach(([nm, v], i) => { const yy = y2 + 12 + i * 38, q = ramp(v, 1), k = seg(tau, TL4.therm + .2 + i * .15, .6); g.globalAlpha = kt * k;
        T(nm, x, yy + 22, 17, "#ffffff", { w: 600 }); g.fillStyle = "rgba(255,255,255,.06)"; g.fillRect(x + 210, yy + 8, 206, 18); g.fillStyle = `rgb(${q[0] | 0},${q[1] | 0},${q[2] | 0})`; g.fillRect(x + 210, yy + 8, 206 * (stT(v) - 28) / 27 * k, 18);
        T(`${stT(v).toFixed(0)} °C`, x + w, yy + 24, 19, "#ffffff", { w: 700, a: "right" }); });
      const y3 = y2 + 12 + 4 * 38 + 30, kz = seg(tau, TL4.hotz, .8), bk = .45 + .55 * Math.abs(Math.sin(t * 3.2)); g.globalAlpha = kz;
      T("폭염 저감방안 수립지역 제안(가상)", x, y3, 18, "#dfe9ff", { w: 700 });
      [["그늘막 · 무더위 쉼터", "산업단지 포장 야적장 · 작업 동선", "rgba(255,120,96,.98)"], ["쿨링포그", "공동주택 광장 · 보행로", "rgba(120,220,255,.98)"], ["바람길 조성", "주거지 – 완충 녹지 – 산업단지 축", "rgba(150,255,200,.98)"]].forEach(([a, b, c], i) => { const yy = y3 + 14 + i * 36; g.globalAlpha = kz * seg(tau, TL4.hotz + .3 + i * .25, .5);
        g.fillStyle = c; g.globalAlpha *= bk; g.beginPath(); g.arc(x + 8, yy + 15, 6, 0, TAU); g.fill(); g.globalAlpha = kz * seg(tau, TL4.hotz + .3 + i * .25, .5);
        T(a, x + 24, yy + 21, 18, "#ffffff", { w: 800 }); T(b, x + w, yy + 21, 15, "#9fb3d6", { w: 600, a: "right" }); });
      g.globalAlpha = seg(tau, TL4.o3 + .6, .8); T(`오존 — ${Z.date} 실제 고농도일 · Two-Stage 1 km 추론 일 최고값 · 측정소 실측`, x, y3 + 14 + 3 * 36 + 22, 14, "#7fd0ff", { w: 600 }); T("고온 격자 · 건물 · 녹지 · 지표면 온도 · 저감 구역은 가상", x, y3 + 14 + 3 * 36 + 42, 14, "#ffd9a0", { w: 600 });
      g.globalAlpha = 1; consoleBox(t, 0); return;
    }
    if (step === 5) {
      // 수리 · 수질 모델 AI 에뮬레이터(2026-11-15 사용자 지시) — 원 모델 계산 결과로 학습한 에뮬레이터가 조건을 바꾼 시나리오를 잇달아 돌린다(수 · 시간 · 초과 비율은 가상)
      const NS = 500, ns = Math.round(NS * ease(tau / 4)), nx = Math.round(ns * .034);
      g.fillStyle = "rgba(118,169,237,.09)"; rr(x, y - 14, w, 84, 4); g.fill(); g.fillStyle = "rgba(63,208,211,.9)"; g.fillRect(x, y - 14, 3, 84);
      T("수리 · 수질 모델 AI 에뮬레이터", x + 18, y + 12, 17, "#9fe8ea", { w: 700 }); T("유량 · 부하 · 수온 조건 변화", x + w - 16, y + 12, 14, "#9fb3d6", { w: 600, a: "right" });
      T(fmt(ns), x + 18, y + 54, 34, "#ffffff", { w: 800, f: FD }); g.font = `800 34px ${FD}`; const nw = g.measureText(fmt(ns)).width;
      T(`/ ${NS} 시나리오`, x + 28 + nw, y + 54, 17, "#9fb3d6", { w: 600 });
      T("GPU 고속 추론", x + w - 16, y + 54, 20, "#dfe9ff", { w: 700, a: "right" });   // 2026-11-16 사용자 지시 — 흐르던 초 표기(끝값 2.0 초)를 걷고 글로 바꿨다
      g.fillStyle = "rgba(255,255,255,.08)"; g.fillRect(x + 18, y + 62, w - 34, 3); g.fillStyle = "#3FD0D3"; g.fillRect(x + 18, y + 62, (w - 34) * ns / NS, 3);
      const Y = y + 96;
      T("하류 노드별 예측 · 시나리오 중앙값(가상)", x, Y + 4, 18, "#dfe9ff", { w: 700 }); T("mg/L", x + w, Y + 4, 14, "#7f93b8", { w: 600, a: "right", f: FM });
      const CX4 = [x + 262, x + 348, x + 434], KEY = ["bod", "toc", "ss"], NM4 = ["BOD", "TOC", "SS"];
      T("노드", x, Y + 40, 15, "#7f93b8", { w: 600 }); T("도달", x + 178, Y + 40, 15, "#7f93b8", { w: 600 }); NM4.forEach((s, q) => T(s, CX4[q] + 34, Y + 40, 15, "#7f93b8", { w: 700, a: "center" }));
      const head = PLEN * ease(tau / 6);
      const ROWS = NODES2.map((n, i) => [n, i]).concat(NODES.map((n, i) => [n, i])).sort((p, q) => p[0].s - q[0].s), RH = ROWS.length > 6 ? 40 : 44;      // 동 · 서 소하천 노드를 도달 거리 순으로(농도는 경로마다 배출구부터 센 가상 값)
      ROWS.forEach(([n, i], r) => { const yy = Y + 50 + r * RH, c = conc(i), on = n.s <= head; g.globalAlpha = on ? 1 : .25;
        T(n.id, x, yy + 24, 17, "#ffffff", { w: 700, f: FM }); T(n.kind, x + 118, yy + 24, 13, "#9fb3d6", { w: 600 });
        T(`${c.tt.toFixed(1)} h`, x + 178, yy + 24, 16, "#dfe9ff", { w: 600 });
        KEY.forEach((kq, q) => { const v = c[kq], f = v / WQT[kq], bad = f >= 1; g.fillStyle = bad ? "rgba(255,107,90,.2)" : "rgba(127,224,168,.1)"; rr(CX4[q], yy + 2, 70, 30, 4); g.fill();
          T(v.toFixed(kq === "ss" ? 0 : 1), CX4[q] + 35, yy + 23, 17, bad ? "#ff9a8a" : "#ffffff", { w: 700, a: "center" });
          g.fillStyle = "rgba(255,255,255,.1)"; g.fillRect(CX4[q] + 6, yy + 34, 58, 3); g.fillStyle = bad ? "#ff6b5a" : "#7fe0a8"; g.fillRect(CX4[q] + 6, yy + 34, 58 * clamp(f), 3); }); });
      g.globalAlpha = 1;
      const yy = Y + 50 + ROWS.length * RH + 16, k = ease((tau - 4.5) / .8), c0 = conc(0); g.globalAlpha = k;
      g.fillStyle = "rgba(118,169,237,.09)"; rr(x, yy, w, 58, 4); g.fill(); g.fillStyle = "rgba(127,208,255,.8)"; g.fillRect(x, yy, 3, 58);
      T("목표수질(가상 설정)", x + 18, yy + 24, 15, "#9fb3d6", { w: 600 }); T(`BOD ${WQT.bod} · TOC ${WQT.toc} · SS ${WQT.ss} mg/L 이하`, x + 18, yy + 47, 19, "#ffffff", { w: 700 });
      g.fillStyle = "rgba(127,224,168,.12)"; rr(x, yy + 66, w, 58, 4); g.fill(); g.fillStyle = "rgba(127,224,168,.9)"; g.fillRect(x, yy + 66, 3, 58);
      T("판정 · 중앙값 기준", x + 18, yy + 90, 15, "#9fb3d6", { w: 600 }); T("전 노드 목표수질 충족", x + 18, yy + 114, 21, "#c8f5dc", { w: 800 });
      T(`초과 시나리오 ${nx} / ${NS} (${(nx / NS * 100).toFixed(1)} %)`, x + w - 16, yy + 90, 15, "#ffb4a6", { w: 700, a: "right" });
      T(`최대 BOD ${c0.bod.toFixed(1)} mg/L · 목표 대비 ${Math.round(c0.bod / WQT.bod * 100)} %`, x + w - 16, yy + 114, 15, "#9fb3d6", { w: 600, a: "right" });
      g.globalAlpha = 1; consoleBox(t, 1); return;
    }
    if (step === 6) {
      T("0.14", x, y + 66, 76, "#ffffff", { w: 800, f: FD }); T("초 / 갱신", x + 170, y + 62, 22, "#9fb3d6", { w: 600 });
      T("격자 약 1.2만 점 · 교통량 · 장비 변화 시 즉시 재계산", x, y + 100, 17, "#7fd0ff", { w: 600 });
      const src = draw.noiseSrc || [];
      RCV.forEach(([rx, ry, nm], i) => { const L = noiseVal(rx, ry, src), V = 48 + (L - 45) * .9, yy = y + 122 + i * 66;
        T(`수음점 ${nm}`, x, yy + 22, 18, "#ffffff", { w: 700 });
        T("소음", x, yy + 50, 14, "#9fb3d6", { w: 600 }); bar(x + 46, yy + 38, 250, 14, (L - 40) / 35, L >= 65 ? "#eb5a4a" : "#f0c050");
        g.fillStyle = "rgba(255,255,255,.7)"; g.fillRect(x + 46 + 250 * 25 / 35, yy + 32, 2, 26);
        T(`${L.toFixed(1)} dB(A)`, x + w, yy + 50, 18, "#fff", { w: 700, a: "right" });
        T(`진동 ${V.toFixed(1)} dB(V)`, x + w, yy + 22, 15, "#9fb3d6", { w: 600, a: "right" }); });
      T("기준선: 주간 65 dB(A) · 진동 75 dB(V)   ·   도로 = 중부고속도로 실제 선형", x, y + 122 + 4 * 66 + 12, 14, "#7f93b8", { w: 600 });
      // 하루 교통량 곡선(가상)과 지금 시각
      { const cy = y + 122 + 4 * 66 + 44, ch = 104, cw = w; T("시간대별 교통량 · 도로 소음(가상)", x, cy, 17, "#dfe9ff", { w: 700 }); T(`${NT.nm} · 도로 ${(10 * Math.log10(NT.kq)).toFixed(1)} dB`, x + w, cy, 15, NT.q > .6 ? "#ff9a8a" : "#9fb3d6", { w: 700, a: "right" });
        const gy = cy + 14, X = h => x + h / 24 * cw, Yq = q => gy + ch - 18 - q * (ch - 26);
        g.fillStyle = "rgba(10,18,40,.75)"; g.fillRect(x, gy, cw, ch - 16); g.fillStyle = "rgba(255,214,150,.07)"; g.fillRect(X(6.4), gy, X(19.4) - X(6.4), ch - 16);                 // 낮 시간 띠
        g.beginPath(); g.moveTo(X(0), Yq(0)); for (let h = 0; h <= 24; h += .25) g.lineTo(X(h), Yq(trafQ(h))); g.lineTo(X(24), Yq(0)); g.closePath(); g.fillStyle = "rgba(240,192,80,.22)"; g.fill();
        g.beginPath(); for (let h = 0; h <= 24; h += .25) h ? g.lineTo(X(h), Yq(trafQ(h))) : g.moveTo(X(h), Yq(trafQ(h))); g.strokeStyle = "#f0c050"; g.lineWidth = 2; g.stroke();
        g.strokeStyle = "#ffffff"; g.lineWidth = 1.5; g.beginPath(); g.moveTo(X(NT.h), gy); g.lineTo(X(NT.h), gy + ch - 16); g.stroke(); g.fillStyle = "#ffffff"; g.beginPath(); g.arc(X(NT.h), Yq(NT.q), 5, 0, TAU); g.fill();
        [0, 6, 12, 18, 24].forEach(h => T(`${h}시`, X(h), gy + ch + 2, 13, "#7f93b8", { w: 600, a: h === 0 ? "left" : h === 24 ? "right" : "center" })); }
      consoleBox(t, 2); return;
    }
    if (step === 7) {
      const sp = SPC[0]; g.globalAlpha = ease(tau / .5);
      T(sp.nm, x, y + 34, 38, "#ffffff", { w: 800, f: FD }); T(sp.en, x + 14 + g.measureText(sp.nm).width, y + 32, 18, "#9fb3d6", { w: 500 });
      T(sp.gr + " · 미호강", x, y + 64, 16, `rgb(${sp.col.join(",")})`, { w: 700 });
      const chips = E ? [["모델", "랜덤포레스트 500그루"], ["학습 자료", `${E.n}지점 · ${E.nvar}변수`], ["교차검증 AUC", E.auc.toFixed(2)], ["TSS", E.tss.toFixed(2)]] : [];
      chips.forEach(([a, b], i) => { const cx = x + (i % 2) * (w / 2 + 4), cy = y + 84 + Math.floor(i / 2) * 50;
        g.fillStyle = "rgba(118,169,237,.09)"; rr(cx, cy, w / 2 - 4, 42, 4); g.fill();
        T(a, cx + 12, cy + 27, 14, "#9fb3d6", { w: 600 }); T(b, cx + w / 2 - 16, cy + 28, 17, "#ffffff", { w: 700, a: "right" }); });
      g.globalAlpha = 1;
      if (!E) return;
      const by = y + 208, lx = x + 128, pw = w - 140, rh = 29;
      T("SHAP 요약 · 출현 확률 기여도", x, by - 8, 18, "#dfe9ff", { w: 700 });
      let mn = 0, mx = 0; E.bee.forEach(f => f.s.forEach(v => { mn = Math.min(mn, v); mx = Math.max(mx, v); })); const sc = pw * .94 / (mx - mn), zx = lx + pw * .03 - mn * sc;
      g.strokeStyle = "rgba(200,215,240,.35)"; g.lineWidth = 1; g.beginPath(); g.moveTo(zx, by + 4); g.lineTo(zx, by + 8 + rh * E.bee.length); g.stroke();
      E.bee.forEach((f, r) => { const cy = by + 22 + r * rh, k = ease((tau - .4 - r * .12) / .7); if (k <= 0) return; g.globalAlpha = k;
        T(f.nm, lx - 12, cy + 5, 15, "#dfe9ff", { w: 600, a: "right" });
        const R = rng(100 + r), bins = {};
        f.s.forEach((v, i) => { const px = zx + v * sc * k, bk = Math.round(px / 2.2); bins[bk] = (bins[bk] || 0) + 1; const nb = bins[bk], o2 = (nb % 2 ? 1 : -1) * Math.min(12, Math.floor(nb / 2) * 1.6);
          const c = f.v[i]; g.fillStyle = `rgb(${Math.round(30 + 225 * c)},${Math.round(136 - 123 * c)},${Math.round(229 - 142 * c)})`; g.fillRect(px - 1.3, cy + o2 + (R() - .5) * 1.5 - 1.3, 2.6, 2.6); }); });
      g.globalAlpha = 1;
      const ly = by + 22 + rh * E.bee.length + 4;
      T("← 출현 낮춤", zx - 8, ly + 6, 13, "#7f93b8", { w: 600, a: "right" }); T("출현 높임 →", zx + 8, ly + 6, 13, "#7f93b8", { w: 600 });
      const gr = g.createLinearGradient(x + w - 110, 0, x + w - 40, 0); gr.addColorStop(0, "rgb(30,136,229)"); gr.addColorStop(1, "rgb(255,13,87)");
      g.fillStyle = gr; g.fillRect(x + w - 110, by - 16, 70, 8); T("변수값 낮음", x + w - 116, by - 8, 12, "#7f93b8", { w: 600, a: "right" }); T("높음", x + w - 34, by - 8, 12, "#7f93b8", { w: 600 });
      const dy = ly + 36, dh = 104, dx = x + 40, dw = w - 50, D = E.dep, k = ease((tau - 2) / .9); g.globalAlpha = k;
      T(`${D.nm} · 상호작용 제거 주효과  →  임계 약 32 %`, x, dy, 17, "#dfe9ff", { w: 700 });
      const yb = dy + 14, ym = Math.max(...D.full.map(Math.abs)), Y = v => yb + dh / 2 - v / ym * dh / 2 * .92, X = v => dx + v / 100 * dw;
      g.fillStyle = "rgba(255,255,255,.03)"; g.fillRect(dx, yb, dw, dh);
      g.strokeStyle = "rgba(200,215,240,.25)"; g.lineWidth = 1; g.beginPath(); g.moveTo(dx, Y(0)); g.lineTo(dx + dw, Y(0)); g.stroke();
      g.strokeStyle = "rgba(255,211,106,.85)"; g.setLineDash([5, 4]); g.beginPath(); g.moveTo(X(32), yb); g.lineTo(X(32), yb + dh); g.stroke(); g.setLineDash([]);
      D.x.forEach((v, i) => { g.fillStyle = "rgba(160,180,215,.28)"; g.fillRect(X(v) - 1.5, Y(D.full[i]) - 1.5, 3, 3); g.fillStyle = "#ffd36a"; g.fillRect(X(v) - 1.6, Y(D.main[i]) - 1.6, 3.2, 3.2); });
      T("0", dx, yb + dh + 16, 12, "#7f93b8", { w: 600 }); T("100 %", dx + dw, yb + dh + 16, 12, "#7f93b8", { w: 600, a: "right" });
      g.save(); g.translate(dx - 12, yb + dh / 2); g.rotate(-Math.PI / 2); T("SHAP", 0, 0, 12, "#7f93b8", { w: 600, a: "center" }); g.restore();
      g.fillStyle = "#ffd36a"; g.fillRect(x + 150, yb + dh + 8, 8, 8); T("주효과", x + 164, yb + dh + 16, 12, "#b9c6dc", { w: 600 });
      g.fillStyle = "rgba(160,180,215,.6)"; g.fillRect(x + 230, yb + dh + 8, 8, 8); T("상호작용 포함", x + 244, yb + dh + 16, 12, "#b9c6dc", { w: 600 });
      g.globalAlpha = 1;
      T("방법 참고: J. Environ. Manage. 291 (2021) 112719 · 국내 5대강 종분포모델 SHAP 해석", x, MY + MH - 20, 13, "#6f82a6", { w: 500 });
      return;
    }
    if (step === 8) {
      if (!E) return;
      if (HOLD8) tau = Math.min(tau, KPER * E.alts.length - .001);         // 지도와 같이 최적안에 머문다(자동 재생)
      const A = E.alts, ai = draw.kai || 0, cur = A[ai], opt = reno(+cur.no) === OPT, k0 = ease((tau % KPER) / .4);
      const nm = a => a.nm === "기존안" ? "기존안" : `${a.nm} #${fmt(reno(+a.no))}`;
      g.globalAlpha = k0;
      T(nm(cur), x, y + 40, 42, opt ? "#9fe0b8" : "#ffffff", { w: 800, f: FD });
      T(`${ai + 1} / ${A.length}`, x + w, y + 38, 18, "#7f93b8", { w: 700, a: "right", f: FM });
      T(`미호종개 서식적합지 감소 ${cur.loss.toFixed(2)} % · 영향 ${cur.ha.toFixed(1)} ha`, x, y + 74, 18, opt ? "#9fe0b8" : "#ffb08a", { w: 700 });
      g.globalAlpha = 1;
      const vy = y + 116, vh = 150, vx = x + 40, vw = w - 50, vg = cur.vg, hm = 420, gm = Math.max(...vg.g, vg.c0 + vg.c) * 1.15;
      T("경험 베리오그램 · 구형 모형 맞춤", x, vy - 6, 17, "#dfe9ff", { w: 700 });
      const VX = h => vx + h / hm * vw, VY = v => vy + 10 + vh - v / gm * vh;
      g.fillStyle = "rgba(255,255,255,.03)"; g.fillRect(vx, vy + 10, vw, vh);
      g.strokeStyle = "rgba(160,190,230,.4)"; g.lineWidth = 1; g.beginPath(); g.moveTo(vx, vy + 10); g.lineTo(vx, vy + 10 + vh); g.lineTo(vx + vw, vy + 10 + vh); g.stroke();
      g.strokeStyle = "#7fd0ff"; g.lineWidth = 2.4; g.beginPath();
      for (let h = 0; h <= hm; h += 4) { const v = h === 0 ? vg.c0 : h < vg.a ? vg.c0 + vg.c * (1.5 * h / vg.a - .5 * (h / vg.a) ** 3) : vg.c0 + vg.c; h ? g.lineTo(VX(h), VY(v)) : g.moveTo(VX(h), VY(v)); } g.stroke();
      vg.h.forEach((h, i) => { g.fillStyle = "#ffd36a"; g.beginPath(); g.arc(VX(h), VY(vg.g[i]), 4, 0, TAU); g.fill(); });
      g.strokeStyle = "rgba(255,255,255,.35)"; g.setLineDash([4, 4]); g.beginPath(); g.moveTo(VX(vg.a), vy + 10); g.lineTo(VX(vg.a), vy + 10 + vh); g.stroke(); g.setLineDash([]);
      T(`상관거리 ${(vg.a / K.pxkm).toFixed(1)} km`, VX(vg.a) + 6, vy + vh, 13, "#b9c6dc", { w: 600 });
      T("거리 →", vx + vw, vy + vh + 30, 13, "#7f93b8", { w: 600, a: "right" });
      g.save(); g.translate(vx - 12, vy + 10 + vh / 2); g.rotate(-Math.PI / 2); T("γ(h)", 0, 0, 13, "#7f93b8", { w: 600, a: "center" }); g.restore();
      const ly = vy + vh + 70; T("대안별 서식적합지 감소율", x, ly, 18, "#dfe9ff", { w: 700 });
      const lm = Math.max(...A.map(a => a.loss));
      A.forEach((a, i) => { const yy = ly + 18 + i * 48, on = i === ai, o = reno(+a.no) === OPT, col = o ? "#7fe0a8" : i === 0 ? "#eb6a5a" : "#f0a050";
        // 지금 지도에 뜬 대안의 줄 — 색 테두리 · 빛 · 왼쪽 막대 · 큰 글씨로 세우고, 나머지는 물린다(2026-11-12 사용자 지시 — "우측 텍스트 해당 부분에서 더 강조")
        if (on) { g.globalAlpha = k0; g.fillStyle = "rgba(118,169,237,.2)"; rr(x - 10, yy - 5, w + 20, 48, 5); g.fill(); g.shadowColor = col; g.shadowBlur = 16; g.strokeStyle = col; g.lineWidth = 2; g.stroke(); g.shadowBlur = 0;
          g.fillStyle = col; g.fillRect(x - 10, yy - 5, 5, 48); g.globalAlpha = 1; }
        g.globalAlpha = on ? 1 : .5;
        T(nm(a), x + (on ? 6 : 0), yy + 27, on ? 20 : 16, on ? "#ffffff" : "#9fb3d6", { w: on ? 800 : 600 });
        bar(x + 168, yy + (on ? 11 : 14), w - 268, on ? 18 : 12, a.loss / lm * ease((tau - i * .1) / .8), col);
        T(`${a.loss.toFixed(2)} %`, x + w, yy + 28, on ? 23 : 16, on ? col : "#b9c6dc", { w: 800, a: "right" }); g.globalAlpha = 1; });
      T(`조사지점 ${E.pts.length} · 격자 ${E.GX}×${E.GY} · 크리깅 표준편차 평균 ${cur.sd.toFixed(3)}`, x, MY + MH - 20, 14, "#7f93b8", { w: 600 });
      return;
    }
    if (step === 9) {
      T("안별 매체 성능", x, y + 4, 19, "#dfe9ff", { w: 700 });
      g.strokeStyle = "rgba(176,184,200,.7)"; g.lineWidth = 1.4; g.setLineDash([4, 4]); g.beginPath(); g.moveTo(x + w - 96, y - 2); g.lineTo(x + w - 70, y - 2); g.stroke(); g.setLineDash([]); T("기존안 기준", x + w - 64, y + 3, 13, "#9fb3d6", { w: 600 });
      const rc = radar(x + w / 2 + 44, y + 172, 112, tau), cc = CAND[rc.i], cs = score(cc[2]), ck = ease(rc.f * 1.4), ccol = CCOL[rc.i];
      g.globalAlpha = tau < RT0 ? ease(tau / .8) : ck;                                    // 지금 보이는 안 — 이름 · 점수 · 순위 · 기준 충족
      g.fillStyle = ccol; g.fillRect(x, y + 34, 5, 86);
      T(cname(cc), x + 16, y + 58, rc.i === 4 ? 23 : 22, ccol, { w: 800, f: FD });
      T(cs.toFixed(1), x + 16, y + 96, 34, "#ffffff", { w: 800, f: FD }); T("점", x + 20 + g.measureText(cs.toFixed(1)).width, y + 96, 16, "#9fb3d6", { w: 600 });
      T(`${CRANK[rc.i]}위 · ${okv(cc[2]) ? "기준 충족" : "기준 미충족"}`, x + 16, y + 118, 14.5, okv(cc[2]) ? "#7fe0a8" : "#ff8a7a", { w: 700 });
      g.globalAlpha = 1;
      CAND.forEach((_, i) => { g.fillStyle = i === rc.i ? CCOL[i] : "rgba(160,190,230,.3)"; g.beginPath(); g.arc(x + 8 + i * 18, y + 146, i === rc.i ? 5 : 3.5, 0, TAU); g.fill(); });
      const by = y + 336, k = ease((tau - 2) / .8); g.globalAlpha = k;
      T("선정 근거", x, by, 20, "#ffffff", { w: 800, f: FD });
      const d = CAND[4][2], b0 = CAND[0][2];
      [["전 매체 환경기준 충족", `수질 목표수질 대비 ${d[1].toFixed(2)} · 소음 ${d[2].toFixed(1)} dB(A)`],
       ["기준 충족 대안 중 종합점수 1위", `${OPTS.toFixed(1)}점 · 차순위 대비 +${(OPTS - RANK2).toFixed(1)}점`],
       ["기존안 대비 환경영향 저감", `착지농도 −${Math.round((1 - d[0] / b0[0]) * 100)} % · 서식지 감소 −${Math.round((1 - d[3] / b0[3]) * 100)} %`],
       ["사업비 증가 4 % 이내", "기준 충족 후보 중 비용 대비 저감 효과 최대"]].forEach(([a, b], i) => {
        const yy = by + 22 + i * 62, kk = ease((tau - 2.2 - i * .2) / .5); g.globalAlpha = kk;
        g.fillStyle = "#ffd36a"; g.beginPath(); g.arc(x + 8, yy + 14, 4, 0, TAU); g.fill();
        T(a, x + 22, yy + 20, 18, "#ffffff", { w: 800 }); T(b, x + 22, yy + 46, 15, "#9fb3d6", { w: 600 }); });
      const yy = MY + MH - 136, kb = ease((tau - 3.6) / .8); g.globalAlpha = kb;
      g.fillStyle = "rgba(0,32,96,.92)"; rr(x, yy, w, 112, 6); g.fill(); g.shadowColor = "#4fc0ff"; g.shadowBlur = 18; g.strokeStyle = "#7fd0ff"; g.lineWidth = 2; g.stroke(); g.shadowBlur = 0;
      g.fillStyle = "#ffd36a"; star(x + 46, yy + 56, 20);
      T(`최적안 #${fmt(OPT)} 선정`, x + 84, yy + 50, 32, "#ffffff", { w: 800, f: FD });
      T(`검토 대안 ${fmt(ALTN)}개 · 매체 4종 · 소요 4분 12초`, x + 86, yy + 84, 17, "#b8c8e8", { w: 600 });
      g.globalAlpha = 1;
    }
  }

  /* ---------- 8단계 결론 — 최적안 도출 근거(평행좌표 · 후보 비교표 · 레이더) · 수치 가상 ---------- */
  const AX = [
    { nm: "대기", sub: "최대 착지농도 μg/m³", lo: 25, hi: 60, d: 1 },
    { nm: "수질", sub: "최대 BOD ÷ 목표수질", lo: .6, hi: 2, d: 2, lim: 1 },
    { nm: "소음", sub: "최고 수음점 dB(A)", lo: 58, hi: 72, d: 1, lim: 65 },
    { nm: "생태", sub: "서식지 감소 %", lo: .6, hi: 5, d: 2 },
    { nm: "사업비", sub: "지수(기존안 100)", lo: 92, hi: 125, d: 0 },
  ];
  const WT = [.25, .25, .15, .2, .15];
  const nrm = (v, i) => clamp((v - AX[i].lo) / (AX[i].hi - AX[i].lo));
  const score = v => 100 * (1 - v.reduce((s, x, i) => s + WT[i] * nrm(x, i), 0));
  const okv = v => v[1] < AX[1].lim && v[2] <= AX[2].lim;
  const CAND = [["기존안", 0, [48.2, 1.58, 68.4, 4.10, 100]], ["대안", 412, [39.5, 1.21, 66.2, 3.16, 98]], ["대안", 277, [33.8, .97, 64.1, 2.49, 103]],
                ["대안", 881, [28.1, .92, 63.5, 1.82, 112]], ["최적안", OPT, [29.9, .87, 62.1, .97, 104]]];
  const CCOL = ["#b0b8c8", "#eb8a5a", "#e8c050", "#c08ae8", "#ffd36a"];
  const OPTS = score(CAND[4][2]), S2 = score(CAND[3][2]), NAMED = CAND.map(c => c[1]);
  const ALTV = SCAT.map(([cx, ay], k) => { const r = rng(k * 31 + 5), a = r(), b = r(), c = r(), d = r();
    return [25 + ay * 34 + a * 2, .6 + 1.4 * clamp(.3 * ay + .55 * b + .15 * (1 - cx)), 58 + 14 * clamp(.3 * ay + .5 * c + .2 * (1 - cx)),
            .6 + 4.4 * clamp(.25 * ay + .45 * d + .3 * (1 - cx) * a), 92 + cx * 33]; });
  CAND.forEach(([, no, v]) => { if (no) ALTV[no] = v; });
  const ALTS = ALTV.map((v, k) => { let s = score(v); if (!NAMED.includes(k) && s >= S2 - .3) s = S2 - 1.2 - rng(k)() * 6; return { v, s, ok: okv(v) }; });
  const NPASS = ALTS.filter(a => a.ok).length;
  const RANK2 = Math.max(...ALTS.filter((a, k) => a.ok && k !== OPT).map(a => a.s));
  const PCX = MX + 150, PCW = MW - 330, PCY = MY + 104, PCH = 250;
  const axX = i => PCX + i * PCW / 5;
  const axY = (i, v) => i < 5 ? PCY + nrm(v, i) * PCH : PCY + (1 - clamp((v - 20) / 75)) * PCH;
  const PCC = (() => {                         // 1,000개 선은 한 번만 그려 둔다(전체 · 기준 충족)
    const mk = (flt, col) => { const c = off(W, H), x = c.getContext("2d"); x.strokeStyle = col; x.lineWidth = 1; x.beginPath();
      ALTS.forEach(a => { if (!flt(a)) return; a.v.forEach((v, i) => i ? x.lineTo(axX(i), axY(i, v)) : x.moveTo(axX(i), axY(i, v))); x.lineTo(axX(5), axY(5, a.s)); });
      x.stroke(); return c; };
    return { fail: mk(a => !a.ok, "rgba(140,160,200,.13)"), pass: mk(a => a.ok, "rgba(110,210,240,.22)") };
  })();
  const candLine = (v, s, col, lw) => { g.strokeStyle = col; g.lineWidth = lw; g.beginPath(); v.forEach((x, i) => i ? g.lineTo(axX(i), axY(i, x)) : g.moveTo(axX(i), axY(i, x))); g.lineTo(axX(5), axY(5, s)); g.stroke(); };
  const cname = c => c[0] === "기존안" ? "기존안" : `${c[0]} #${fmt(c[1])}`;

  function conclusion(t, tau) {
    glass(MX, MY, MW, 430, .8);
    T("대안별 매체 성능 · 평행좌표", MX + 28, MY + 44, 24, "#ffffff", { w: 800, f: FD });
    const f1 = ease((tau - 1.4) / 1), nPass = Math.round(lerp(ALTN, NPASS, f1));
    const steps = [["검토 대안", fmt(ALTN)], ["기준 충족", fmt(nPass)], ["최적안", tau > 3.4 ? "1" : "–"]];
    let cx = MX + MW - 28; g.font = `800 22px ${FS}`;
    for (let i = steps.length - 1; i >= 0; i--) { const [a, b] = steps[i], wb = g.measureText(b).width; g.font = `600 15px ${FS}`; const wa = g.measureText(a).width; g.font = `800 22px ${FS}`;
      cx -= wb; T(b, cx, MY + 44, 22, i === 2 ? "#ffd36a" : "#ffffff", { w: 800 }); cx -= wa + 8; T(a, cx, MY + 44, 15, "#9fb3d6", { w: 600 });
      if (i) { cx -= 40; T("→", cx + 12, MY + 43, 18, "#5d6f8f", { w: 700 }); } }
    T("축 위쪽일수록 우수 · 붉은 눈금 = 환경기준", MX + 28, MY + 74, 15, "#7f93b8", { w: 600 });
    const a0 = ease(tau / 1);
    g.globalAlpha = a0 * lerp(1, .35, f1); g.drawImage(PCC.fail, 0, 0); g.globalAlpha = a0; g.drawImage(PCC.pass, 0, 0); g.globalAlpha = 1;
    [...AX, { nm: "종합점수", sub: "가중합(높을수록 우수)" }].forEach((ax, i) => { const x = axX(i);
      g.strokeStyle = "rgba(200,215,240,.55)"; g.lineWidth = 1.5; g.beginPath(); g.moveTo(x, PCY); g.lineTo(x, PCY + PCH); g.stroke();
      T(ax.nm, x, PCY + PCH + 28, 18, "#ffffff", { w: 800, a: "center" }); T(ax.sub, x, PCY + PCH + 47, 13, "#9fb3d6", { w: 600, a: "center" });
      if (i < 5) { T(String(ax.lo), x - 8, PCY + 5, 12, "#7f93b8", { w: 600, a: "right" }); T(String(ax.hi), x - 8, PCY + PCH + 4, 12, "#7f93b8", { w: 600, a: "right" }); }
      else { T("95", x + 8, PCY + 5, 12, "#7f93b8", { w: 600 }); T("20", x + 8, PCY + PCH + 4, 12, "#7f93b8", { w: 600 }); }
      if (ax.lim) { const y = axY(i, ax.lim); g.strokeStyle = "#ff6b5a"; g.lineWidth = 3; g.beginPath(); g.moveTo(x - 12, y); g.lineTo(x + 12, y); g.stroke(); T("기준", x + 16, y + 5, 13, "#ff9a8a", { w: 700 }); } });
    const f2 = ease((tau - 2.6) / .8);
    const now = curAlt(tau).i;                                                             // 오른쪽 오각형이 지금 보여 주는 안
    if (f2 > 0) { g.globalAlpha = f2; CAND.slice(0, 4).forEach((c, i) => { if (i === now) { g.shadowColor = CCOL[i]; g.shadowBlur = 12; } candLine(c[2], score(c[2]), CCOL[i], i === now ? 4 : 2.2); g.shadowBlur = 0; }); g.globalAlpha = 1; }
    const f3 = ease((tau - 3.4) / .8);
    if (f3 > 0) { const v = CAND[4][2]; g.globalAlpha = f3;
      g.shadowColor = "rgba(255,211,106,.8)"; g.shadowBlur = 14; candLine(v, OPTS, "#ffd36a", 4.5); g.shadowBlur = 0;
      g.fillStyle = "#ffd36a"; star(axX(5), axY(5, OPTS), 12); tag(`최적안 #${fmt(OPT)} · ${OPTS.toFixed(1)}점`, axX(5) + 18, axY(5, OPTS) + 6, "rgba(40,30,8,.92)", "#ffe3a0", 16, "rgba(255,211,106,.9)"); g.globalAlpha = 1; }
    if (f2 > 0) { g.globalAlpha = f2; const L = CAND.slice(0, 4).map((c, i) => ({ c, i, y: axY(5, score(c[2])) })).sort((a, b) => a.y - b.y);
      L.forEach((o, j) => { o.ly = Math.max(o.y, j ? L[j - 1].ly + 19 : axY(5, OPTS) + 30); });
      L.forEach(({ c, i, y, ly }) => { g.fillStyle = CCOL[i]; g.beginPath(); g.arc(axX(5), y, 4, 0, TAU); g.fill(); if (ly - y > 3) { g.strokeStyle = CCOL[i]; g.lineWidth = 1; g.beginPath(); g.moveTo(axX(5) + 5, y); g.lineTo(axX(5) + 16, ly); g.stroke(); } T(cname(c), axX(5) + 20, ly + 5, 14, CCOL[i], { w: 700 }); }); g.globalAlpha = 1; }

    const ty = MY + 446, th = MH - 446;
    glass(MX, ty, MW, th, .8);
    T("상위 후보 비교 · 기준 충족 여부 · 가중합 순위", MX + 28, ty + 40, 22, "#ffffff", { w: 800, f: FD });
    const cols = [[MX + 28, "구분", 170], [MX + 210, "대기", 120], [MX + 336, "수질", 120], [MX + 462, "소음", 120], [MX + 588, "생태", 120], [MX + 714, "사업비", 110], [MX + 836, "기준 충족", 130], [MX + 978, "종합점수", 254]];
    const hy = ty + 58; g.fillStyle = "rgba(118,169,237,.12)"; g.fillRect(MX + 16, hy, MW - 32, 36);
    cols.forEach(([x, s, w], i) => T(s, i ? x + w / 2 : x + 6, hy + 24, 15, "#cfe0ff", { w: 800, a: i ? "center" : "left" }));
    const rk = [...CAND].map(c => score(c[2])).map((s, i, a) => 1 + a.filter(q => q > s).length);
    CAND.forEach((c, r) => { const ry = hy + 44 + r * 56, k = ease((tau - 1 - r * .18) / .6), o = r === 4, v = c[2], sc = score(v); if (k <= 0) return; g.globalAlpha = k;
      if (o) { g.fillStyle = "rgba(255,211,106,.12)"; rr(MX + 16, ry - 2, MW - 32, 50, 4); g.fill(); g.strokeStyle = "rgba(255,211,106,.8)"; g.lineWidth = 2; g.stroke(); }
      if (r === now && tau > RT0) { g.fillStyle = hexA(CCOL[r], .13); rr(MX + 16, ry - 2, MW - 32, 50, 4); g.fill(); g.fillStyle = CCOL[r]; g.beginPath(); g.moveTo(MX + 6, ry + 14); g.lineTo(MX + 18, ry + 24); g.lineTo(MX + 6, ry + 34); g.closePath(); g.fill(); }
      g.fillStyle = CCOL[r]; g.fillRect(MX + 28, ry + 18, 10, 14);
      T(cname(c), MX + 46, ry + 31, 18, o ? "#ffe3a0" : "#ffffff", { w: 800 });
      v.forEach((x, i) => { const [cx0, , w] = cols[i + 1], n = nrm(x, i), bad = AX[i].lim != null && (i === 1 ? x >= AX[i].lim : x > AX[i].lim);
        const hc = ramp(.3 + n * .7); g.fillStyle = `rgba(${hc[0] | 0},${hc[1] | 0},${hc[2] | 0},.22)`; rr(cx0 + 6, ry + 4, w - 12, 38, 4); g.fill();
        T(x.toFixed(AX[i].d), cx0 + w / 2, ry + 31, 18, bad ? "#ff8a7a" : "#ffffff", { w: 700, a: "center" });
        if (bad) T("초과", cx0 + w - 10, ry + 16, 11, "#ff8a7a", { w: 800, a: "right" }); });
      const okc = okv(v); T(okc ? "충족" : "미충족", cols[6][0] + 65, ry + 31, 17, okc ? "#7fe0a8" : "#ff8a7a", { w: 800, a: "center" });
      bar(cols[7][0] + 6, ry + 18, 150, 14, (sc - 20) / 75 * k, o ? "#ffd36a" : "#7fd0ff");
      T(`${sc.toFixed(1)}`, cols[7][0] + 206, ry + 31, 18, o ? "#ffe3a0" : "#ffffff", { w: 800, a: "right" });
      T(`${rk[r]}위`, cols[7][0] + 248, ry + 31, 15, o ? "#ffe3a0" : "#9fb3d6", { w: 700, a: "right" }); });
    g.globalAlpha = 1;
    T(`가중치  대기 25 · 수질 25 · 생태 20 · 소음 15 · 사업비 15   ·   기준  수질 목표수질 이내(비 1 미만) · 수음점 ${AX[2].lim} dB(A) 이하   ·   수치는 가상 예시`, MX + 28, MY + MH - 18, 14, "#7f93b8", { w: 600 });
  }

  // 8단계 오른쪽 오각형 — 후보 다섯(기존안 → 대안 셋 → 최적안)을 차례로 돌려 보인다(2026-11-12 사용자 지시 — "5각형 분석을 안별로 동적으로"). 최적안은 두 배 오래 머문다
  const RSEQ = [1.9, 1.9, 1.9, 1.9, 3.8], RTOT = RSEQ.reduce((a, b) => a + b, 0), RT0 = 1.2;
  const curAlt = tau => { if (tau < RT0) return { i: 0, f: ease(tau / .8), p: 0 }; let u = (tau - RT0) % RTOT, i = 0; while (u > RSEQ[i]) { u -= RSEQ[i]; i++; } return { i, f: ease(u / .55), p: (i + 4) % 5, first: tau - RT0 < RSEQ[0] }; };
  const hexA = (h, a) => `rgba(${parseInt(h.slice(1, 3), 16)},${parseInt(h.slice(3, 5), 16)},${parseInt(h.slice(5, 7), 16)},${a})`;
  const CRANK = CAND.map(c => score(c[2])).map((s, i, a) => 1 + a.filter(q => q > s).length);
  function radar(cx, cy, R, tau) {
    const lab = ["대기", "수질", "소음", "생태", "경제성"], n = 5, P = (i, f) => [cx + R * f * Math.sin(i * TAU / n), cy - R * f * Math.cos(i * TAU / n)];
    for (let q = 1; q <= 4; q++) { g.strokeStyle = "rgba(160,190,230,.18)"; g.lineWidth = 1; g.beginPath(); for (let i = 0; i <= n; i++) { const [x, y] = P(i % n, q / 4); i ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke(); }
    for (let i = 0; i < n; i++) { const [x, y] = P(i, 1); g.beginPath(); g.moveTo(cx, cy); g.lineTo(x, y); g.stroke(); const [lx, ly] = P(i, 1.2); T(lab[i], lx, ly + 6, 16, "#dfe9ff", { w: 700, a: "center" }); }
    const rad = (v, i) => .08 + .92 * (1 - nrm(v[i], i));
    const shape = (rs, fill, line, lw, dash) => { g.beginPath(); rs.forEach((r, i) => { const [px, py] = P(i, r); i ? g.lineTo(px, py) : g.moveTo(px, py); }); g.closePath();
      if (fill) { g.fillStyle = fill; g.fill(); } g.strokeStyle = line; g.lineWidth = lw; if (dash) g.setLineDash(dash); g.stroke(); g.setLineDash([]); };
    const c = curAlt(tau), A = CAND[c.p][2], B = CAND[c.i][2], col = CCOL[c.i];
    shape(CAND[0][2].map((_, i) => rad(CAND[0][2], i) * ease(tau / .8)), "rgba(176,184,200,.10)", "rgba(176,184,200,.55)", 1.4, [4, 4]);      // 기준 — 기존안(점선)
    const rs = B.map((_, i) => tau < RT0 || c.first ? rad(B, i) * (tau < RT0 ? c.f : 1) : lerp(rad(A, i), rad(B, i), c.f));                          // 앞 안에서 지금 안으로 모양이 옮겨 간다
    g.shadowColor = col; g.shadowBlur = c.i === 4 ? 18 : 10; shape(rs, hexA(col, .24), col, c.i === 4 ? 3.2 : 2.6); g.shadowBlur = 0;
    rs.forEach((r, i) => { const [px, py] = P(i, r); g.fillStyle = col; g.beginPath(); g.arc(px, py, 4, 0, TAU); g.fill(); });
    return c;
  }

  /* ---------- 한 장면 ---------- */
  function draw(t) {
    const tau = t - stepT0;
    wind = -.35 + .22 * Math.sin(t * .35);
    const alt = step === 3 ? Math.min(ALTN, Math.floor(ALTN * ease(tau / 6.5))) : ALTN;
    const settled = step !== 3 || tau > 6.8;
    const stacks = step < 3 ? null : settled ? OPT_ST : altStacks(Math.floor(tau * 22));
    if (G3) { drawOverlay(t, tau, stacks); G3.render(t, tau, stacks); }
    g = HUD; g.clearRect(0, 0, W, H);
    if (!G3) { const bgr = g.createLinearGradient(0, 0, 0, H); bgr.addColorStop(0, "#050a16"); bgr.addColorStop(1, "#071226"); g.fillStyle = bgr; g.fillRect(0, 0, W, H);
      T("지형 · 위성 · 측정망 자료를 불러오는 중", (PX + MX) / 2, H / 2, 24, "#7f93b8", { w: 600, a: "center" }); }
    // 가장자리 어둠(비네트)
    { const v = g.createRadialGradient(W / 2, H / 2, H * .45, W / 2, H / 2, H * 1.05); v.addColorStop(0, "rgba(2,5,12,0)"); v.addColorStop(1, "rgba(2,5,12,.72)"); g.fillStyle = v; g.fillRect(0, 0, W, H); }
    if (step === 9) { conclusion(t, tau); panel(t, tau, ALTN, true); topBar(t); footer(); return; }
    mapLabels(t, tau);
    if (step >= 2 && step !== 5) mapLegend(tau);
    panel(t, tau, alt, settled);
    topBar(t); footer();
  }

  /* ---------- 미리 데우기 — 위성영상을 받은 뒤, 이 장에 들어서기 전에 한 프레임을 그려 둔다(2026-11-12 사용자 지시 "24장 가볍게").
     텍스처 올리기 · 셰이더 컴파일 · 실선 층 긋기가 여기서 끝나, 들어설 때의 멈칫(약 0.75초)이 앞 장으로 옮겨 간다. 이 장이 이미 켜져 있으면 하지 않는다 ---------- */
  function warm() { if (PRINT || !G3 || slide.classList.contains("is-active")) return;
    try { drawOverlay(0, 0, null); G3.render(0, 0, null); } catch (e) { console.error("kh-future 데우기", e); } }

  /* ---------- 자료 · three.js 받기 — 이 장 두 쪽 앞에 닿으면 차례로 ---------- */
  const SL = [...document.querySelectorAll(".slide")], ME = SL.indexOf(slide);
  const NEED = [["graph/vendor/three-r170.iife.js", () => !!window.THREE], ["graph/fut/fut_dem.js", () => !!window.FUT_DEM], ["graph/fut/fut_roads.js", () => !!window.FUT_ROADS], ["graph/fut/fut_air.js?v=20261116", () => !!window.FUT_AIR], ["graph/fut/fut_wind.js", () => !!window.FUT_WIND], ["graph/fut/fut_sat.js", () => !!window.FUT_SAT], ["graph/fut/kh-future-city.js?v=20261117", () => !!window.KH_FUT_CITY]];
  let loading = false;
  function load() { if (loading || G3) return; loading = true;
    const next = i => { if (i >= NEED.length) { try { boot(); } catch (e) { console.error("kh-future 3D", e); } return; }
      if (NEED[i][1]()) return next(i + 1);
      const s = document.createElement("script"); s.src = NEED[i][0]; s.onload = () => next(i + 1); s.onerror = () => { console.error("kh-future: 받지 못함 " + NEED[i][0]); next(i + 1); }; document.head.appendChild(s); };
    next(0); }
  const near = () => { const now = SL.findIndex(x => x.classList.contains("is-active")); if (now >= ME - 2 && now <= ME + 1) load(); };
  const mo = new MutationObserver(near); SL.forEach(x => mo.observe(x, { attributes: true, attributeFilter: ["class"] })); near();

  /* ---------- 돌리기 ---------- */
  const readStep = () => Number(slide.dataset.stepNow || 0);
  const t0 = performance.now();
  if (PRINT) { load(); const go = () => { if (!G3 && loading && window.THREE && window.FUT_SAT === undefined) return setTimeout(go, 200); step = 9; stepT0 = -20; camT0 = -20; Object.assign(camNow, { d: 58, el: 32, az: 30, ox: 0 }); camFrom = { ...camNow }; draw(0); };
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => setTimeout(go, 1500)); return; }
  let last = 0, seekOff = 0;                        // seekOff — 자동 재생 진행 막대로 다른 씬의 중간에 옮길 때, 그 씬에 들어선 시각을 이만큼 앞당긴다(초)
  (function loop(now) {
    const t = (now - t0) / 1000;
    if (slide.classList.contains("is-active")) {
      const s = readStep();
      if (s !== step) { camFrom = { ...camNow }; camT0 = t - seekOff; step = s; stepT0 = t - seekOff; seekOff = 0; }
      if (!last) { camT0 = t - 9; stepT0 = t; Object.assign(camNow, { d: 70, el: 62, az: -40, ox: 290 }); camFrom = { ...camNow }; camT0 = t; }   // 들어설 때 — 높은 곳에서 내려앉는다
      last = t; draw(t);
    } else last = 0;
    requestAnimationFrame(loop);
  })(t0);

  /* ---------- 자동 재생(나레이션) — 2026-11-15 사용자 지시("플레이 버튼을 만들어서 플레이하면 00~09씬까지 차례대로 속도감 있게 화면과 나레이션이 한 번에 … 누르지 않으면 현재 방식대로")
     오른쪽 위 단추(.fut-play)를 누르면 0단계로 돌아가 들어설 때처럼 내려앉고, 씬마다 나레이션 클립(트윈나레이션/narr.js · build.py)을 튼다.
     클립이 끝나고 그 씬의 화면이 뜻 있는 끝(SCENE_END)에 닿으면 GAP 뒤 다음 단계로 넘긴다(KHDeck.next — 발표자 화면도 따라온다). 9단계가 끝나면 자동 재생을 마치고 9단계에 머문다.
     돌리는 동안 — 단추 · Esc = 멈춤(소리를 물리고 그 단계에서 손으로 넘기는 방식으로 돌아간다) · 다음 · 이전 키 = 그 단계로 건너뛰고 그 씬의 나레이션을 튼다 · 장을 떠나면 멈춘다.
     배경음악 — 첫 곡(01_1편배경음악)으로 시작한다. 첫 곡이 끝나면(끝 F_OUT 초는 줄여 가며) 음악을 멈추고, BGM_SWITCH 단계(5 수질)에 들어설 때 둘째 곡(배경음악03, 반복)을 처음부터 튼다(2026-11-16 사용자 지시 — 종전에는 첫 곡이 4초 남으면 둘째 곡으로 교차했다). 그때 첫 곡이 아직 울리고 있으면(건너뛰어 온 경우) 교차한다. 음량은 bgm_gain(약 −31 LUFS — 나레이션보다 약 13–15 dB 아래).
     소리는 audio 요소의 volume 으로만 다룬다 — file:// 에서는 Web Audio 로 미디어 요소를 거치면 소리가 끊긴다. 단추를 누르지 않으면 위 흐름은 아무것도 하지 않는다. */
  const NARR = window.FUT_NARR, btn = slide.querySelector(".fut-play");
  if (!btn) return;
  if (!NARR || NARR.clips.length !== STAGES.length + 1) { btn.hidden = true; console.error("kh-future: 나레이션 목록(트윈나레이션/narr.js)이 없거나 씬 수가 다르다"); return; }
  // 씬마다 화면이 뜻 있는 끝에 닿는 시각(초, 단계에 들어선 뒤) — 0 둘러보기 · 1 경계 · 10 km 선 · 2 종전 뷰 복귀 · 3 예측 농도장 합치기 · 4 저감방안 제안 · 5 하류 도달 · 6 하루 시계 한 바퀴 · 7 주효과 · 8 최적안 면 · 9 최적안 오각형
  const SCENE_END = [3, TL1.a10 + 2.2, TL2.back + 3, S3.merge + 2.2, TL4.hotz + 1.6, 6.2, NDAY, 2.9, KPER * 4 + .5, RT0 + RTOT - RSEQ[4] + .8];
  const GAP = .45, F_IN = 1.2, F_X = 2.6, F_OUT = 2.4, F_STOP = .8;
  const vo = new Audio(); vo.preload = "auto";
  const bg = NARR.bgm.map((b, i) => { const a = new Audio(b.src); a.preload = "none"; a.loop = i === NARR.bgm.length - 1; return a; });   // 2026-11-15 — 덱을 열 때 두 곡(약 8.6 MB)을 받지 않는다. 재생 단추를 누를 때 읽는다(로컬 파일이라 곧 울린다)
  const fails = (what, e) => console.error(`kh-future 자동 재생: ${what}`, e);
  const ramps = new Map();
  const fade = (a, to, sec, then) => { clearInterval(ramps.get(a)); const v0 = a.volume, s0 = performance.now();
    ramps.set(a, setInterval(() => { const f = Math.min(1, (performance.now() - s0) / 1000 / sec); a.volume = clamp(v0 + (to - v0) * f);
      if (f >= 1) { clearInterval(ramps.get(a)); ramps.delete(a); if (then) then(); } }, 40)); };
  let auto = null;                                  // { s 지금 씬, done 클립 끝, bi 지금 곡, next 넘김 예약, tick }
  const ui = () => { const on = !!auto; btn.classList.toggle("on", on); btn.setAttribute("aria-pressed", on);
    btn.querySelector(".lb").textContent = on ? "정지 · Esc" : "나레이션 재생"; btn.title = on ? "자동 재생 멈춤(Esc)" : "0–9단계를 나레이션과 함께 자동으로 넘긴다"; };
  function scene(i) {
    clearTimeout(auto.next); auto.next = 0; auto.s = i; auto.done = false;
    clearInterval(ramps.get(vo)); ramps.delete(vo);                                 // 앞서 멈춤이 걸어 둔 줄이기를 거둔다
    const o = auto.off || 0; auto.off = 0;                                          // 진행 막대로 옮겨 왔으면 그 씬 안의 위치(초)부터
    vo.pause(); vo.volume = 1;
    if (o >= NARR.clips[i].dur - .05) { vo.removeAttribute("src"); vo.load(); auto.done = true; }   // 나레이션이 이미 끝난 자리 — 화면만 이어 간다
    else { vo.src = NARR.clips[i].src + (o > 0 ? `#t=${o.toFixed(2)}` : "");
      vo.play().catch(e => { fails(`${i}단계 나레이션을 틀지 못함`, e); if (auto && auto.s === i) auto.done = true; }); }
    if (auto.bi === 0 && i >= NARR.bgm_switch_step) cross();
  }
  vo.addEventListener("ended", () => { if (auto && vo.src.split("#")[0].endsWith(NARR.clips[auto.s].src.split("/").pop())) auto.done = true; });
  vo.addEventListener("error", () => { if (!auto) return; fails(`나레이션 파일 오류 ${vo.src}`, vo.error); auto.done = true; });
  const bgResume = () => { const a = bg[auto.bi]; if (!auto.bi && (a.ended || auto.mute || auto.tail)) return; a.volume = NARR.bgm_gain; a.play().catch(e => fails("배경음악을 이어 틀지 못함", e)); };   // 첫 곡이 끝난 뒤에는 다시 틀지 않는다
  function cross() { if (!auto || auto.bi || bg.length < 2) return; auto.bi = 1; const a = bg[0], b = bg[1];
    b.currentTime = 0; b.volume = 0; b.play().catch(e => fails("둘째 배경음악을 틀지 못함", e)); fade(b, NARR.bgm_gain, F_X); fade(a, 0, F_X, () => a.pause()); }
  function tick() {
    if (!auto) return;
    if (!slide.classList.contains("is-active")) return stop();                     // 장을 떠났다
    const s = readStep();
    if (auto.paused) { if (s !== auto.s) { pauseSet(false, true); bgResume(); return scene(s); } return; }   // 일시정지 중 — 키로 장면을 옮기면 풀고 그 씬으로
    if (s !== auto.s) return scene(s);                                              // 다음 · 이전 키 · 발표자 화면에서 넘겼다 — 그 씬의 나레이션으로 맞춘다
    if (auto.bi === 0 && !auto.tail && bg[0].duration && bg[0].currentTime > bg[0].duration - F_OUT) { auto.tail = true; fade(bg[0], 0, F_OUT); }   // 첫 곡이 끝나 간다 — 줄여 가며 끝내고 5단계까지 음악 없이 간다(곡 끝에 물러나는 부분이 없다)
    if (auto.next || !auto.done || step !== s || (performance.now() - t0) / 1000 - stepT0 < SCENE_END[s]) return;
    auto.next = setTimeout(() => { if (!auto || readStep() !== s) return; auto.next = 0;
      if (s < STAGES.length) window.KHDeck.next(); else finish(); }, GAP * 1000);
  }
  function end() { if (!auto) return; clearTimeout(auto.next); clearInterval(auto.tick); clearInterval(auto.fz); auto = null; HOLD8 = false; ui(); seekBar(false); }
  function finish() { const a = bg[auto.bi]; fade(a, 0, F_OUT, () => a.pause()); end(); }          // 9단계 끝 — 그 자리에 머문다
  function stop() { if (!auto) return; fade(vo, 0, F_STOP, () => vo.pause()); bg.forEach(a => fade(a, 0, F_STOP * 1.5, () => a.pause())); end(); }
  function start() {
    if (!slide.classList.contains("is-active") || !window.KHDeck) return;
    stop();
    window.KHDeck.go(window.KHDeck.slides.indexOf(slide));                         // 0단계로(발표자 화면에도 알린다)
    last = 0;                                                                       // 다음 프레임에 들어설 때처럼 높은 곳에서 내려앉는다(0단계 시간도 처음부터)
    bg.forEach(a => { a.pause(); a.currentTime = 0; a.volume = 0; });
    auto = { s: -1, done: false, bi: 0, next: 0, tick: setInterval(tick, 100), paused: false, fz: 0 };
    bg[0].play().catch(e => fails("첫 배경음악을 틀지 못함", e)); fade(bg[0], NARR.bgm_gain, F_IN);
    HOLD8 = true; scene(0); ui(); seekBar(true);
  }

  /* ---------- 진행 막대(2026-11-15 사용자 지시 — "플레이 버튼 누르면 플레이 상황 bar 표시해서 플레이 위치 선택 가능하게 · 마우스 움직임 없으면 bar 숨겨") ----------
     자동 재생 동안만 지도 아래쪽에 뜬다. 씬 길이 = max(클립, SCENE_END) + GAP 으로 잡은 시간표 위에서 지금 위치를 그린다(실제 넘김은 클립 · 화면 끝을 기다리므로 시간표와 조금 다를 수 있다).
     누르거나 끌어 놓으면 그 씬 · 그 자리로 옮긴다 — 단계는 KHDeck.next · prev 로(발표자 화면도 따라온다), 씬 안의 시각은 stepT0 를 앞당기고, 나레이션은 #t= 로, 배경음악은 같은 시간표의 위치로.
     마우스가 IDLE 동안 움직이지 않으면 물러난다(막대 위에 있거나 끄는 동안은 남는다). */
  const LEN = NARR.clips.map((c, i) => Math.max(c.dur, SCENE_END[i]) + GAP), ST = [0];
  LEN.forEach((l, i) => ST.push(ST[i] + l));
  const TOT = ST[LEN.length] - GAP, SW = ST[NARR.bgm_switch_step], IDLE = 2500;
  const NAME = i => i ? STAGES[i - 1][0] : "대상 지역", mmss = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
  const sk = document.createElement("div"); sk.className = "fut-seek"; sk.hidden = true;
  sk.innerHTML = `<div class="tr"><div class="rail"></div><div class="fill"></div>${ST.slice(1, -1).map(v => `<i class="tk" style="left:${v / TOT * 100}%"></i>`).join("")}`
    + `${ST.slice(0, -1).map((v, i) => `<b class="tn" style="left:${v / TOT * 100}%">${String(i).padStart(2, "0")}</b>`).join("")}<div class="knob"></div><div class="tip" hidden></div></div>`
    + `<button type="button" class="pp" aria-label="일시정지" title="일시정지 / 재생"><i></i></button><span class="nm"></span><span class="tm"></span>`;   // 2026-11-15 일시정지 · 재생 단추
  slide.appendChild(sk);
  const tr = sk.querySelector(".tr"), fill = sk.querySelector(".fill"), knob = sk.querySelector(".knob"), tip = sk.querySelector(".tip"), TN = [...sk.querySelectorAll(".tn")];
  let drag = -1, idleT = 0, raf = 0;
  const posNow = () => { if (!auto || auto.s < 0) return 0; const s = auto.s, el = step === s ? (performance.now() - t0) / 1000 - stepT0 : 0; return Math.min(TOT, ST[s] + clamp(el, 0, LEN[s])); };
  const sceneAt = T => { let i = 0; while (i < LEN.length - 1 && ST[i + 1] <= T) i++; return i; };
  const paint = T => { const f = clamp(T / TOT) * 100, i = sceneAt(T); fill.style.width = f + "%"; knob.style.left = f + "%";
    TN.forEach((n, k) => n.classList.toggle("on", k === i)); sk.querySelector(".nm").textContent = `${String(i).padStart(2, "0")} ${NAME(i)}`; sk.querySelector(".tm").textContent = `${mmss(T)} / ${mmss(TOT)}`; };
  const frame = () => { raf = 0; if (!auto) return; paint(drag >= 0 ? drag : posNow()); raf = requestAnimationFrame(frame); };
  const wake = () => { if (sk.hidden) return; sk.classList.remove("idle"); clearTimeout(idleT);
    idleT = setTimeout(() => { if (drag < 0 && !sk.matches(":hover")) sk.classList.add("idle"); else wake(); }, IDLE); };
  function seekBar(on) { sk.hidden = !on; clearTimeout(idleT); tip.hidden = true; drag = -1; cancelAnimationFrame(raf); raf = 0; if (on) { wake(); frame(); } }
  /* (2026-11-15 사용자 지시 "플레이 bar 에 일시중지, 재생 버튼" — KSEIA 축약본 30쪽에서 먼저 넣고 옮겼다) — 멈추면 나레이션 · 배경음악을 세우고, 장면 시각(stepT0 · camT0)을 흐른 만큼 늦춰 화면도 그 자리에 선다.
     다시 누르면 이어 간다. 일시정지 중에 막대로 옮기거나 키로 장면을 넘기면 풀린다 */
  const ppb = sk.querySelector(".pp");
  function pauseSet(on, quiet) {
    if (!auto || on === auto.paused) return;
    auto.paused = on; ppb.classList.toggle("paused", on); ppb.setAttribute("aria-label", on ? "재생" : "일시정지");
    clearInterval(auto.fz); auto.fz = 0;
    if (on) { clearTimeout(auto.next); auto.next = 0; vo.pause(); bg.forEach(a => { clearInterval(ramps.get(a)); ramps.delete(a); a.pause(); });
      let last = performance.now(); auto.fz = setInterval(() => { const n = performance.now(), d = (n - last) / 1000; last = n; stepT0 += d; camT0 += d; }, 16); }
    else if (!quiet) { if (!auto.done && vo.getAttribute("src")) vo.play().catch(e => fails("나레이션을 이어 틀지 못함", e)); bgResume(); }
  }
  ppb.addEventListener("click", e => { e.stopPropagation(); ppb.blur(); pauseSet(!auto.paused); wake(); });
  function seekTo(T) {
    if (!auto) return;
    pauseSet(false, true);                            // 일시정지 중에 옮기면 풀고 그 자리부터 튼다
    T = clamp(T, 0, TOT - .2); const i = sceneAt(T), off = T - ST[i], cur = readStep();
    clearTimeout(auto.next); auto.next = 0;
    // 배경음악 — 시간표의 같은 자리로(SW 앞은 첫 곡, 뒤는 둘째 곡 반복)
    bg.forEach(a => { clearInterval(ramps.get(a)); ramps.delete(a); });
    const k = T < SW || bg.length < 2 ? 0 : 1, a = bg[k], at = k ? (T - SW) % (NARR.bgm[1].dur || 1) : T;
    bg.forEach((b, j) => { if (j !== k) { b.pause(); b.volume = 0; } });
    auto.bi = k; auto.tail = false; auto.mute = !k && at > NARR.bgm[0].dur - F_OUT;      // 첫 곡이 끝난 뒤 5단계 앞 — 음악 없는 자리
    if (auto.mute) { a.pause(); a.volume = 0; } else { a.currentTime = at; a.volume = NARR.bgm_gain; a.play().catch(e => fails("배경음악 위치를 옮기지 못함", e)); }
    if (i === cur) {                                  // 같은 씬 안 — 화면 시각과 나레이션만 옮긴다
      const now = (performance.now() - t0) / 1000; stepT0 = now - off; camT0 = now - off; auto.off = off; scene(i);
    } else {                                          // 다른 씬 — 단계를 옮기면 tick 이 그 씬의 나레이션을 off 부터 튼다
      seekOff = off; auto.off = off;
      for (let d = i - cur; d; d -= Math.sign(d)) d > 0 ? window.KHDeck.next() : window.KHDeck.prev();
    }
  }
  const xT = e => { const r = tr.getBoundingClientRect(); return clamp((e.clientX - r.left) / r.width) * TOT; };
  const showTip = (e, T) => { const r = tr.getBoundingClientRect(), i = sceneAt(T); tip.hidden = false; tip.style.left = clamp((e.clientX - r.left) / r.width) * 100 + "%";
    tip.textContent = `${mmss(T)} · ${String(i).padStart(2, "0")} ${NAME(i)}`; };
  ["click", "mousedown", "mouseup", "pointerup", "wheel"].forEach(ev => sk.addEventListener(ev, e => e.stopPropagation()));   // 덱의 클릭 넘김 등으로 새지 않게
  tr.addEventListener("pointerdown", e => { e.stopPropagation(); e.preventDefault(); tr.setPointerCapture(e.pointerId); drag = xT(e); showTip(e, drag); wake(); });
  tr.addEventListener("pointermove", e => { const T = xT(e); if (drag >= 0) drag = T; showTip(e, T); wake(); });
  tr.addEventListener("pointerup", e => { if (drag < 0) return; const T = xT(e); drag = -1; tip.hidden = true; seekTo(T); wake(); });
  tr.addEventListener("pointerleave", () => { if (drag < 0) tip.hidden = true; });
  addEventListener("mousemove", () => { if (auto) wake(); }, { passive: true });
  btn.addEventListener("click", e => { e.stopPropagation(); btn.blur(); auto ? stop() : start(); });   // 포커스를 남기지 않는다 — Space · Enter 가 단추를 다시 누르지 않게
  addEventListener("keydown", e => { if (auto && e.key === "Escape") { e.preventDefault(); e.stopImmediatePropagation(); stop(); } }, true);
  /* (KSEIA 사본만 — 2026-11-17 사용자 지시 "29페이지 엔터 누르면 재생") — 이 장에서 Enter = 나레이션 자동 재생 시작, 재생 중이면 일시정지 · 이어 재생 */
  addEventListener("keydown", e => { if (e.key !== "Enter" || e.repeat || !slide.classList.contains("is-active")) return;
    e.preventDefault(); e.stopImmediatePropagation(); auto ? pauseSet(!auto.paused) : start(); }, true);
  window.KHFutureAuto = { get on() { return !!auto; }, get scene() { return auto ? auto.s : -1; }, get music() { return auto ? auto.bi : -1; }, vo, bg };   // 점검용(덱은 쓰지 않는다)
  ui();
})();
