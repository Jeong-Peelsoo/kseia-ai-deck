/* KSEIA 축약본 사본(2026-11-15) — 원본 ../../ppt-건화ai-tft-20261208/발표덱/assets/js/kh-bridge.js(건화 덱 17쪽 문제 정의 브리지 #bridge, 단계 0–5).
   축약본 7쪽(종전 EIA 판 브리지 — 단계 0–7 · 로봇 진행자 · 내레이션)을 그 장으로 갈아 끼웠다. 장 조각은 ../parts/s-bridge.html, 끼우기는 ../scripts/build_short_deck.py.
   원본에서 바꾼 것은 덱 연결과 색뿐이다 — 단계 표 · 단계 묶음(MAP) · 비행 경로 · 연출 시각은 원본 그대로다. 원본을 고치면 다시 복사하고 아래 넷을 다시 바꾼다.
     1 장 — 건화 #bridge → 이 덱 #s-bridge. 원본 45장 덱의 스크립트가 #bridge 를 찾아 옛 단계 0–7 · 로봇 진행자를 걸므로 id 를 달리했다(그 스크립트는 #bridge 가 없으면 그냥 지나간다).
     2 무대 · 지금 장 — 건화 1920 × 1080 · .is-active → 이 덱 1600 × 900(#stage) · .slide.on.
     3 키 — 건화는 kh-deck.js 앞(capture)에서 키를 가로챘다. 이 덱은 덱 스크립트의 단계 장치(window.conceptSteppers[장 index] = { step, enter })에 건다(graph/intro_stages.js 와 같은 방식) —
       advance() 가 다음 · 이전 키와 아래 삼각 단추를 먼저 여기로 보내고(step 이 true 면 단계만 넘긴 것), swap() 이 장을 옮길 때마다 enter(지금, 직전) 를 부른다.
     4 색 — 건화 남색 · 하늘(0x222e6b · 0x678bc6 · 0x76a9ed)을 이 덱 녹색(0x00753a · 0x00a040 · 0x1fd06a, 종전 7쪽 브리지 스크립트의 값)으로 되돌렸다.
   자산 — three.js 는 graph/vendor/three-r170.iife.js(이 덱 것, 같은 0.170.0), 층 자료는 graph/bridge_layers.js(건화 assets/js/bridge_layers.js 와 바이트 단위로 같다).
   ── 아래는 원본 머리 주석 그대로 ──
   3장 문제 정의 브리지(9쪽, #bridge) — '측정하지 않은 공간의 농도는 어떻게 알 수 있을까?' 3차원 여섯 층 지도와 단계 0–7
   ppt-eia-ai전환-20260930발표 덱 15장의 '브리지' 스크립트를 옮겼다(2026-11-10 사용자 지시). 그 장의 인공지능 로봇 · 내레이션은 옮기지 않았다.
   건화 덱에 맞춘 것 — 1 장 엔진 연결(맨 아래 '건화 덱 연결' — kh-deck.js 는 고치지 않는다) · 2 강조색(녹색 → 템플릿 남색 · 하늘) · 3 하루 띠 클래스 .bar → .dbar.
   층 자료 assets/js/bridge_layers.js(EIA 덱 scripts/build_bridge_layers.py 산출 — 같은 한 시각의 실제 자료, 색은 상대값). 화면에 수치를 쓰지 않는다.
   ⚠ GEMS 는 지상 농도의 정답이 아니다(기둥 관측) · ERA5 는 농도장이 아니다(바람) · GEOS-CF 는 native 해상도 숫자를 쓰지 않는다.
   ⚠ 아래 주석의 '내레이션에 맞춰 늦췄다' 시각은 원본 덱의 것이다 — 연출 박자로 그대로 뒀다.

   그리기는 전환(tween)이 도는 동안만 requestAnimationFrame 으로 하고, 멎으면 루프가 끝난다.
   단계 표(STEPS)가 층 높이 · 불투명도 · 카메라 · 덧그림 비중을 정하고, 단계를 바꾸면 지금 값에서 그 값으로 옮겨 간다.
   좌표 — 자료는 영역 왼쪽 아래 0 의 km(x 동 · y 북). 3D 는 x 동 · y 위 · z 남(지도 한가운데가 원점). */
(function(){
    const sec = document.getElementById('s-bridge');
    if (!sec) return;
    const N = 6, G = 28;                              // 단계 수 · 층 사이 높이(km 단위 3D)
    // 2026-11-11 사용자 지시(발표 시간 줄이기) — 원본 3 · 4 · 5단계(광역 맥락 · 위성 기둥 · 각각의 한계)를 한 단계로 합쳤다.
    // 보이는 단계 k 는 아래 단계 표(STEPS, 원본 0–7) 의 MAP[k] 그림을 쓴다. 합친 단계는 원본 5단계 그림(층 여섯)이고, 위성 하루 연출(약 15초)은 돌지 않는다.
    // 같은 날 사용자 지시('9장 위성 기둥 수직선 삭제해') — 원본 4단계의 위성 화소 발자국 막대(foot)가 서는 그림 대신 막대 없는 5단계 그림을 쓴다.
    const MAP = [0, 1, 2, 5, 6, 7], IN = k => MAP[k];
    const panels = [...sec.querySelectorAll('.bstep')], dots = [...sec.querySelectorAll('.bdots i')];
    const box = sec.querySelector('.bmap'), canvas = box.querySelector('canvas'), cap = box.querySelector('.bcap');
    let step = 0, gl = null, loading = false, subTimer = 0;
    const S = [...document.querySelectorAll('.slide')];   // 덱 스크립트와 같은 셈(.slide 만 장이다 — 축약본의 숨긴 장 .cut 은 빠진다)
    const bridge = { slide: S.indexOf(sec), step: () => false, enter: () => {} };

    function show(k){
      panels.forEach(p => p.classList.toggle('on', +p.dataset.s === k));
      dots.forEach((d, n) => { d.classList.toggle('on', n === k); d.classList.toggle('done', n < k); });
    }
    function setStep(k, instant){
      const from = step;
      step = k; show(k);
      clearTimeout(subTimer);
      if (gl) gl.go(IN(k), instant, IN(from));
    }
    bridge.step = d => { const k = step + d; if (k < 0 || k >= N) return false; setStep(k, false); return true; };
    bridge.enter = (now, was) => {
      if (now >= bridge.slide - 1) load();
      if (now === bridge.slide) setStep(was > now ? N - 1 : 0, true);
      else { clearTimeout(subTimer); if (gl) gl.stop(); }   // Home·End 로 장을 떠나면 2단계 비행을 끊는다. 단계 예약(2단계 비행 · 4단계 연출)도 지운다 — 남으면 숨은 장에서 돈다(2026-10-19 점검)
    };
    bridge.flying = () => false;                      // 점검 창구(scripts/probe_bridge.js) — 아래 init 이 채운다
    show(0);

    function load(){
      if (loading) return; loading = true;
      const add = src => new Promise((ok, no) => { const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = no; document.head.appendChild(s); });
      // 두 경로는 장의 data-*-src 에 둔다 — scripts/verify_offline.py 의 정적 검사(src= 속성)가 결손을 잡게
      (window.THREE ? Promise.resolve() : add(sec.dataset.threeSrc))
        .then(() => add(sec.dataset.layersSrc))
        .then(() => setTimeout(init, 400))            // 장 전환 페이드가 끝난 뒤
        .catch(() => fallback());
    }
    function fallback(){                             // WebGL 이나 자산이 없으면 여섯 층을 평면 그림으로 늘어놓는다
      const B = window.BRIDGE; if (!B) return;
      box.classList.add('nogl'); canvas.remove();
      Object.values(B.tex).forEach(u => { const im = new Image(); im.src = u; im.alt = ''; box.appendChild(im); });
    }

    function init(){
      const B = window.BRIDGE, T = window.THREE;
      let renderer;
      try { renderer = new T.WebGLRenderer({ canvas, antialias: true, alpha: true }); } catch (e) { fallback(); return; }
      renderer.setClearColor(0xffffff, 0);
      const W = B.region.w, H = B.region.h;
      const X = x => x - W / 2, Z = y => H / 2 - y;
      const q = [B.query[0] + .5, B.query[1] + .5];
      const scene = new T.Scene(), cam = new T.PerspectiveCamera(30, 1, 1, 4000);
      const aniso = renderer.capabilities.getMaxAnisotropy();
      const texOf = (key, nearest) => {
        const t = new T.TextureLoader().load(B.tex[key], () => draw());
        t.colorSpace = T.SRGBColorSpace; t.anisotropy = Math.min(8, aniso);
        if (nearest) t.magFilter = T.NearestFilter;
        return t;
      };
      // 여섯 층 — 아래에서 위로. [텍스처 키, 최대 불투명도, 가까이서 화소가 보이게(nearest), 이름표]
      const LAYERS = [
        ['ground', 1, false, '측정망 · 1 km 목표 격자', 'AirKorea'],
        ['surface', .95, true, '토지피복 · 지형', 'MODIS · DEM'],
        ['emission', .92, true, '배출량', 'CAPSS'],
        ['regional', .8, true, '광역 대기질', 'GEOS-CF'],
        ['wind', .95, false, '기상 · 바람', 'ERA5'],
        ['satellite', .78, false, '위성 기둥 관측', 'GEMS'],
      ];
      const planes = LAYERS.map(([key, , nearest], k) => {
        const m = new T.Mesh(new T.PlaneGeometry(W, H),
          new T.MeshBasicMaterial({ map: texOf(key, nearest), transparent: true, opacity: 0, depthWrite: false, side: T.DoubleSide }));
        m.rotation.x = -Math.PI / 2; m.renderOrder = k * 10;
        const edge = new T.LineLoop(new T.BufferGeometry().setFromPoints([[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([a, b]) => new T.Vector3(a * W / 2, 0, b * H / 2))),
          new T.LineBasicMaterial({ color: 0x6f7a84, transparent: true, opacity: 0, depthWrite: false }));
        edge.renderOrder = k * 10 + 1;
        scene.add(m, edge);
        return { m, edge };
      });
      const lineMat = color => new T.LineBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false });
      const V = (x, y, h) => new T.Vector3(X(x), h, Z(y));
      /* 2단계 드론 비행(2026-09-26 지시) — 토지피복·배출 두 층을 1 km 격자(정점 = 셀 모서리)로 바꾸고 DEM 으로 솟게 한다.
         영역이 192 km 라 실제 높이(최고 약 1.6 km)로는 평평해 보여 EXAG 배 과장한다(비행 중 화면 표기). terr 0 이면 평면이다 */
      const EXAG = 4, DEMK = B.dem_max_m / 1000 / 255 * EXAG;
      const dem = Uint8Array.from(atob(B.dem), ch => ch.charCodeAt(0));
      const terrPlanes = [planes[1].m, planes[2].m];
      terrPlanes.forEach(m => { m.geometry.dispose(); m.geometry = new T.PlaneGeometry(W, H, W, H); });
      let terrNow = 0;
      function terrain(f){
        if (Math.abs(f - terrNow) < 1e-4) return;
        terrNow = f;
        terrPlanes.forEach(m => {
          const pa = m.geometry.attributes.position;   // 정점 순서 = 북쪽 행부터(평면 +y 가 회전 뒤 북쪽) — DEM 0행과 같다
          for (let n = 0; n < pa.count; n++) pa.setZ(n, f * DEMK * dem[Math.min(Math.floor(n / (W + 1)), H - 1) * W + Math.min(n % (W + 1), W - 1)]);
          pa.needsUpdate = true;
        });
      }
      /* 비행 경로(km, 영역 좌표 · 고도) — 서쪽에서 서울 도심 · 한강을 따라 동쪽 산지로 → 북쪽으로 돌아 → 북한산(질의 셀) 쪽에서 서울을 보고 → 제자리.
         WP 는 카메라, LK 는 그때 바라보는 땅 위 점. 앞뒤에 2단계 카메라 자세를 붙여 벌린 그림에서 내려갔다가 그 그림으로 돌아온다 */
      const FLY_MS = 7500;                       // 2026-11-10 건화 덱 — 10.5 → 7.5초
      const WP = [[20, 55, 34], [45, 64, 21], [70, 68, 19], [100, 70, 24], [122, 84, 34], [100, 106, 46], [70, 100, 36], [48, 88, 30]];   // 첫 판은 산지 위에서 너무 낮아 1 km 칸이 화면을 덮었다
      const LK = [[60, 66], [80, 68], [100, 70], [125, 80], [95, 90], [60, 84], [58, 72], [58, 70]];   // 북쪽 구간은 남쪽(서울)을 본다 — 북쪽을 보면 영역 끝과 빈 하늘이 보였다
      let flight = null;
      bridge.flying = () => !!(flight || show || seq);        // 4단계 기둥 연출도 '도는 중'이다(점검 도구가 기다린다)
      /* 땅 위 굵은 띠 — WebGL 선은 1 px 라 투사에서 사라진다(첫 판의 거리선이 그랬다). 점 사이를 폭 wd(km)의 사각형으로 잇고,
         dash 면 한 칸씩 건너뛴다. 세로선은 가는 원기둥(rod)으로 긋는다 */
      const ribbon = (pts, wd, color, order, dash) => {
        const pos = [];
        for (let n = 0; n + 1 < pts.length; n++) {
          if (dash && n % 2) continue;
          const a = pts[n], b = pts[n + 1], L = Math.hypot(b.x - a.x, b.z - a.z) || 1, nx = -(b.z - a.z) / L * wd / 2, nz = (b.x - a.x) / L * wd / 2;
          pos.push(a.x + nx, a.y, a.z + nz, b.x + nx, b.y, b.z + nz, b.x - nx, b.y, b.z - nz, a.x + nx, a.y, a.z + nz, b.x - nx, b.y, b.z - nz, a.x - nx, a.y, a.z - nz);
        }
        const g = new T.BufferGeometry(); g.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
        const m = new T.Mesh(g, new T.MeshBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false, side: T.DoubleSide }));
        m.renderOrder = order; scene.add(m); return m;
      };
      const seg = (a, b, len) => { const n = Math.max(2, Math.round(a.distanceTo(b) / len)); return Array.from({ length: n + 1 }, (_, k) => a.clone().lerp(b, k / n)); };
      const rod = (x, y, h0, h1, r, color, order) => {
        const m = new T.Mesh(new T.CylinderGeometry(r, r, h1 - h0, 8, 1, true), new T.MeshBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false }));
        m.position.copy(V(x, y, (h0 + h1) / 2)); m.renderOrder = order; scene.add(m); return m;
      };

      // 측정소 점 — 원 스프라이트 하나를 모든 점이 쓴다
      const dotTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d');
        g.fillStyle = '#fff'; g.beginPath(); g.arc(32, 32, 26, 0, 7); g.fill(); return new T.CanvasTexture(c); })();
      const stMat = new T.PointsMaterial({ size: 8, sizeAttenuation: false, map: dotTex, color: 0x4b555e, transparent: true, alphaTest: .4, depthWrite: false });
      const stPts = new T.Points(new T.BufferGeometry().setFromPoints(B.stations.map(([x, y]) => V(x, y, .4))), stMat);
      stPts.renderOrder = 3; scene.add(stPts);
      // 질의 셀(1 km) 테두리 · 채움
      const qEdge = new T.LineLoop(new T.BufferGeometry().setFromPoints([[0, 0], [1, 0], [1, 1], [0, 1]].map(([a, b]) => V(B.query[0] + a, B.query[1] + b, .3))), lineMat(0x11151a));
      qEdge.renderOrder = 4; scene.add(qEdge);
      const qFill = new T.Mesh(new T.PlaneGeometry(1.6, 1.6), new T.MeshBasicMaterial({ color: 0x00753a, transparent: true, opacity: 0, depthWrite: false }));
      qFill.rotation.x = -Math.PI / 2; qFill.position.copy(V(q[0], q[1], .35)); qFill.renderOrder = 5; scene.add(qFill);
      // 1단계 — 가까운 측정소 넷까지 거리선
      const nearLines = B.near.map(k => ribbon(seg(V(q[0], q[1], .3), V(B.stations[k][0], B.stations[k][1], .3), .7), .45, 0x00753a, 4, true));
      const nearPts = new T.Points(new T.BufferGeometry().setFromPoints(B.near.map(k => V(B.stations[k][0], B.stations[k][1], .5))),
        new T.PointsMaterial({ size: 15, sizeAttenuation: false, map: dotTex, color: 0x00753a, transparent: true, alphaTest: .4, depthWrite: false, opacity: 0 }));
      nearPts.renderOrder = 5; scene.add(nearPts);
      // 2단계 — 도심 A(서울 한복판) · 산지 B(강원 산림). 땅에서 배출 층까지 기둥.
      //  2026-10-06 사용자 지시 — 두 곳을 서울 한복판 · 강원 산림으로 옮기며(scripts/build_bridge_layers.py) 같은 거리 원은 긋지 않는다.
      const P = B.pair;
      //  2026-10-06 — 기둥 끝(배출 층과 만나는 자리)이 꼬리표에 가려 그 아래 선이 남쪽 배출 면 위로 읽혔다(사용자 지적).
      //  기둥을 배출 층 위로 PIN_UP 만큼 더 올려 꼬리표를 띄우고, 배출 층과 만나는 자리에 점(pinDots)을 찍는다.
      const PIN_UP = 13;
      const pins = [P.A, P.B].map(([x, y]) => rod(x + .5, y + .5, 0, 2 * G + PIN_UP, .4, 0x11151a, 100));
      const pinDots = new T.Points(new T.BufferGeometry().setFromPoints([P.A, P.B].map(([x, y]) => V(x + .5, y + .5, 2 * G + .4))),
        new T.PointsMaterial({ size: 16, sizeAttenuation: false, map: dotTex, color: 0x11151a, transparent: true, alphaTest: .4, depthWrite: false, depthTest: false, opacity: 0 }));
      pinDots.renderOrder = 101; scene.add(pinDots);
      // 4단계 — 위성 기둥 발자국(질의 셀을 둘러싼 상자). 지면을 직접 재는 것처럼 보이지 않게 옅은 점선
      const FP = 3.5, fp = [];
      for (const [a, b] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) fp.push(rod(q[0] + a * FP, q[1] + b * FP, .5, 5 * G, .3, 0x5b3fa0, 100));
      // 6단계 — 여러 층에서 질의 셀로 모이는 빛줄기(층마다 셋 · 측정소는 가까운 여섯). 그리기 범위로 자라난다
      /* 2026-09-26 개정 — 층의 빛줄기는 가까운 측정소 여섯으로 내려오고(정보 → 측정망), 측정소 빛줄기가 질의 셀로 모인다(측정망 → 추론).
         rayK = 그 빛줄기의 층 번호(측정소 빛줄기는 0) · rayCurve = 알갱이가 흐르는 길 */
      const rays = [], rayK = [], rayCurve = [], RAYN = 40;
      const byDist = B.stations.map((s, k) => [Math.hypot(s[0] - q[0], s[1] - q[1]), k]).sort((a, b) => a[0] - b[0]).slice(0, 6);
      const curve = (x, y, h, ex = q[0], ey = q[1]) => { const pts = [];
        for (let n = 0; n <= RAYN; n++) { const u = n / RAYN, e = 1 - (1 - u) * (1 - u);
          pts.push(V(x + (ex - x) * e, y + (ey - y) * e, h * (1 - u) + .4)); } return pts; };
      // 관 하나 = 마디 RAYN 개 × 둘레 6 — 그리기 범위(인덱스 수)를 마디 단위로 늘려 자라게 한다
      const tube = (pts, color, k) => { const cv = new T.CatmullRomCurve3(pts), m = new T.Mesh(new T.TubeGeometry(cv, RAYN, .3, 6, false),
        new T.MeshBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false })); m.renderOrder = 110; scene.add(m);
        rays.push(m); rayK.push(k); rayCurve.push(cv); };
      [1, 2, 3, 4, 5].forEach(k => [0, 2.1, 4.2].forEach((a, n) => {
        const r = 14 + 6 * n, ang = a + k * .9, [, si] = byDist[(k + 2 * n) % byDist.length];
        tube(curve(q[0] + r * Math.cos(ang), q[1] + r * Math.sin(ang), k * G, B.stations[si][0], B.stations[si][1]), 0x00a040, k);
      }));
      byDist.forEach(([, k]) => tube(curve(B.stations[k][0], B.stations[k][1], 0), 0x00a040, 0));
      // 흐르는 알갱이 — 빛줄기마다 하나
      const partGeo = new T.SphereGeometry(1.1, 12, 8);
      const parts = rays.map(() => { const m = new T.Mesh(partGeo, new T.MeshBasicMaterial({ color: 0x1fd06a, transparent: true, opacity: 0, depthWrite: false }));
        m.renderOrder = 116; m.visible = false; scene.add(m); return m; });
      /* 7단계 추론 농도장 — AMR-HGN 일평균 NO₂(bridge_layers.js tex.inference)를 1 km 셀로 칠하되, 가까운 측정소에서 먼 곳 순서로 드러낸다(순서는 연출).
         rank = 셀의 최근접 측정소 거리 백분위(0–1). reveal(f) 가 rank ≤ f 인 셀만 칠하고, 막 드러난 띠는 밝게 */
      const SC = 5;                                          // 셀 하나 = 5×5 화소, 마지막 줄·칸은 어둡게 — 확대하면 1 km 칸 경계가 보인다
      const infCv = document.createElement('canvas'); infCv.width = W * SC; infCv.height = H * SC;
      const infCtx = infCv.getContext('2d'), infOut = infCtx.createImageData(W * SC, H * SC);
      const infTex = new T.CanvasTexture(infCv); infTex.colorSpace = T.SRGBColorSpace; infTex.magFilter = T.NearestFilter; infTex.minFilter = T.NearestFilter;
      const infMesh = new T.Mesh(new T.PlaneGeometry(W, H), new T.MeshBasicMaterial({ map: infTex, transparent: true, depthWrite: false }));
      infMesh.rotation.x = -Math.PI / 2; infMesh.position.y = .15; infMesh.renderOrder = 2; infMesh.visible = false; scene.add(infMesh);
      let infSrc = null, infRank = null, infNow = -1;
      (() => { const im = new Image(); im.onload = () => {
        const c2 = document.createElement('canvas'); c2.width = W; c2.height = H; const x2 = c2.getContext('2d'); x2.drawImage(im, 0, 0);
        infSrc = x2.getImageData(0, 0, W, H).data;
        const d = new Float32Array(W * H);
        for (let j = 0; j < H; j++) for (let i2 = 0; i2 < W; i2++) { let m = 1e9; const cx = i2 + .5, cy = H - j - .5;
          for (const [sx, sy] of B.stations) { const e = (sx - cx) ** 2 + (sy - cy) ** 2; if (e < m) m = e; } d[j * W + i2] = m; }
        const ord = [...d.keys()].sort((a, b) => d[a] - d[b]); infRank = new Float32Array(W * H); ord.forEach((c, n) => infRank[c] = n / ord.length);
        infNow = -1; draw(); }; im.src = B.tex.inference; })();
      function reveal(f){
        if (!infSrc || Math.abs(f - infNow) < 1e-3) return;
        infNow = f; const o = infOut.data;
        for (let n = 0; n < W * H; n++) {
          const r = infRank[n], on = r <= f, edge = on && r > f - .05 && f < 1, a = on ? infSrc[4 * n + 3] : 0;
          const rgb = [0, 1, 2].map(ch => edge ? 255 - (255 - infSrc[4 * n + ch]) * .45 : infSrc[4 * n + ch]);
          const cx = n % W, cy = (n / W) | 0;
          for (let dy = 0; dy < SC; dy++) for (let dx = 0; dx < SC; dx++) {
            const px = 4 * ((cy * SC + dy) * W * SC + cx * SC + dx), g = dx === SC - 1 || dy === SC - 1 ? .8 : 1;
            o[px] = rgb[0] * g; o[px + 1] = rgb[1] * g; o[px + 2] = rgb[2] * g; o[px + 3] = a;
          }
        }
        infCtx.putImageData(infOut, 0, 0); infTex.needsUpdate = true;
      }
      // 6·7단계 — 질의 셀로 내려오는 변환 화살표(기둥 + 촉)
      const beam = new T.Mesh(new T.CylinderGeometry(.9, .9, 5 * G, 16, 1, true), new T.MeshBasicMaterial({ color: 0x00753a, transparent: true, opacity: 0, depthWrite: false }));
      beam.position.copy(V(q[0], q[1], 2.5 * G + 6)); beam.renderOrder = 120; scene.add(beam);
      const tip = new T.Mesh(new T.ConeGeometry(3, 6, 20), new T.MeshBasicMaterial({ color: 0x00753a, transparent: true, opacity: 0, depthWrite: false }));
      tip.rotation.x = Math.PI; tip.position.copy(V(q[0], q[1], 3.4)); tip.renderOrder = 121; scene.add(tip);
      /* 4단계 측면 기둥(개념도) — 질의 셀 위 위성 화소 하나의 연직 기둥. 측면 뷰에서 위성 층을 HS 높이로 내리고, 그 사이를 조각 NSL 개로 쌓는다.
         GEMS 파일의 vcd = vcd_total − vcd_strat(대류권 기둥, 2026-09-26 자료로 확인) — 적분은 지표부터 대류권 상단(TROP)까지, 그 위(성층권)는 뺀 몫으로 옅게.
         연직 분포(아래가 짙다)와 높이·폭은 개념이다 — 화면에 "개념도 · 높이 축척 아님" */
      const HS = 64, TROP = HS * .7, CW = 10, NSL = 24;
      const colSl = [...Array(NSL)].map((_, n) => {
        const z0 = HS * n / NSL, strat = z0 >= TROP;
        const m = new T.Mesh(new T.BoxGeometry(CW, HS / NSL * .9, CW), new T.MeshBasicMaterial({ color: strat ? 0x9aa3ab : 0x6d4fc2, transparent: true, opacity: 0, depthWrite: false }));
        m.position.copy(V(q[0], q[1], z0 + HS / NSL / 2)); m.renderOrder = 130; scene.add(m);
        return { m, z0, strat, w: strat ? .2 : .12 + .7 * Math.exp(-z0 / (TROP * .22)) };
      });
      const sumBar = new T.Mesh(new T.BoxGeometry(1.4, 1, 1.4), new T.MeshBasicMaterial({ color: 0x00753a, transparent: true, opacity: 0, depthWrite: false }));
      sumBar.renderOrder = 131; scene.add(sumBar);
      const pix = new T.Mesh(new T.BoxGeometry(CW + 2, 2.4, CW + 2), new T.MeshBasicMaterial({ color: 0x5b3fa0, transparent: true, opacity: 0, depthWrite: false }));
      pix.position.copy(V(q[0], q[1], HS + 1.2)); pix.renderOrder = 132; scene.add(pix);
      let show = null;

      // HTML 덧그림 — 층 이름표 · 지명 · 질의 셀 고리 · ✕ · 두 지점 표
      const ov = (cls, html) => { const d = document.createElement('div'); d.className = 'ov ' + cls; d.innerHTML = html; box.appendChild(d); return d; };
      const labs = LAYERS.map(([, , , a, b]) => ov('blab', `${a} <small>${b}</small>`));
      const places = B.labels.filter(l => l.name !== '경기').map(l => ({ l, d: ov('bplace', l.name) }));
      const qring = ov('bring', ''), qx = ov('bx', '✕');
      const flyNote = ov('bfly', `드론 시점 · 지형 높이 ${EXAG}배 과장`);
      const infNote = ov('bfly', `AMR-HGN 추론(0.015° 재표본 자산) · ${new Date(Date.parse(B.meta.hour_utc.replace(' ', 'T') + 'Z') + 9 * 3600e3).toISOString().slice(0, 10)} KST 일평균 NO₂ · 색은 상대값 · 채우는 순서는 연출`);
      const sky = box.querySelector('.bsky'), sat = box.querySelector('.bsat'), sun = box.querySelector('.bsun'), tro = box.querySelector('.btro'), swath = box.querySelector('.bswath');
      const TRO = 13.5;                                  // TROPOMI 통과 시각(KST) — DISS :945 'TROPOMI 13:30' · 04_gems.md §11.3 '저궤도 · 1회/일'
      const SCANS = B.meta.gems_scans_kst.map(s => { const [hh, mm] = s.kst.split(':'); return +hh + mm / 60; });
      const day = ov('bday', `<div class="clk"></div><div class="st"></div><div class="dbar">${SCANS.map(h => `<i style="left:${(h / 24 * 100).toFixed(2)}%"></i>`).join('')}<i class="tro" style="left:${(TRO / 24 * 100).toFixed(2)}%"></i><b></b></div>`
        + `<div class="tk">${[0, 6, 12, 18, 24].map(h => `<span style="left:${h / 24 * 100}%">${h}시</span>`).join('')}</div>`);
      const dayClk = day.querySelector('.clk'), daySt = day.querySelector('.st'), dayCur = day.querySelector('.dbar b'), dayMarks = [...day.querySelectorAll('.dbar i:not(.tro)')], troMark = day.querySelector('.dbar i.tro');
      const clTop = ov('bcl l', '위성 화소 <small>GEMS 한 칸</small>'), clTrop = ov('bcl', '대류권 상단'), clStrat = ov('bcl', '성층권 <small>대류권 기둥에서 뺀다</small>'),
            clGround = ov('bcl', '지표 <small>측정소가 재는 곳</small>');
      const sumNote = ov('bsum', '화소 값 = <b>지표부터 대류권 상단까지</b> NO₂ 분자를 모두 더한 값(연직 적분)'
        + '<small>그래서 위성 값은 지상 1 km 농도와 다른 물리량이다 · 개념도 — 높이 축척 아님</small>');
      sec.querySelector('.bstep[data-s="3"]').appendChild(sumNote);   // 적분 설명은 오른쪽 글 칸 4단계 아래에 선다

      const tagA = ov('btag', '도심 · 배출 밀집'), tagB = ov('btag b', '산지 · 저배출');
      // 시각 자료(광역·바람 = 정시, 위성 = 그 정시 15분 전 관측)는 KST 정시로 적는다. 배출·토지피복은 정적 자료다
      const kst = new Date(Date.parse(B.meta.hour_utc.replace(' ', 'T') + 'Z') + 9 * 3600e3).toISOString();
      cap.textContent = `광역 NO₂ · 바람 · 위성 NO₂ 기둥 ${kst.slice(0, 10)} ${+kst.slice(11, 13)}시 무렵(KST) · 배출 CAPSS 2021 · 색은 층마다 상대값`;

      /* 단계 표 — h 층 높이 · o 층 불투명(0–1, 최대치에 곱한다) · 카메라(tx·ty·tz 목표 · d 거리 · el 올려본각 · az 방위 · ox·oy 화면 밀기) · 덧그림 비중.
         0·1단계는 질의 셀에 다가선 고정 틀이고, fit 단계는 frame() 이 보이는 층의 네 모서리를 캔버스(이름표 자리를 뺀 칸)에 꼭 맞춘다 */
      const qx0 = X(q[0]), qz0 = Z(q[1]), UP = [0, G, 2 * G, 3 * G, 4 * G, 5 * G], ALL = [1, 1, 1, 1, 1, 1];
      const base = { near: 0, cross: 0, pair: 0, foot: 0, rays: 0, beam: 0, glow: 0, qfill: 0, dim: 0, ox: 0, oy: 0, terr: 0, fov: 30, col: 0, integ: 0, sat: 1, inf: 0 };
      const STEPS = [
        { h: [0, 0, 0, 0, 0, 0], o: [1, 0, 0, 0, 0, 0], tx: qx0, ty: 0, tz: qz0, d: 95, el: 52, az: -14 },
        { h: [0, 0, 0, 0, 0, 0], o: [1, 0, 0, 0, 0, 0], tx: qx0, ty: 0, tz: qz0, d: 112, el: 52, az: -14, near: 1 },
        { h: [0, G, 2 * G, 2 * G, 2 * G, 2 * G], o: [1, 1, 1, 0, 0, 0], el: 36, az: -16, fit: 1, pair: 1 },
        { h: [0, G, 2 * G, 3 * G, 4 * G, 4 * G], o: [1, 1, 1, 1, 1, 0], el: 27, az: -18, fit: 1 },
        { h: UP, o: ALL, el: 24, az: -18, fit: 1, foot: 1 },
        { h: UP, o: ALL, el: 24, az: -18, fit: 1 },
        { h: UP, o: ALL, el: 24, az: -18, fit: 1, rays: 1, beam: .45, glow: 1 },
        { h: UP, o: [1, 0, 0, 0, 0, 0], tx: qx0, ty: 0, tz: qz0, d: 78, el: 55, az: -14, glow: 1, qfill: 1, inf: 1 },   // 2026-09-26 — 층을 걷고 1 km 격자가 보이게 확대, 추론장
      ].map(s => ({ ...base, ...s }));
      const PAD = { l: 220, r: 60, t: 8, b: 6 };      // 왼쪽 = 층 이름표 자리(px, 넘치는 이름표는 fitLab 이 줄을 바꾼다), 오른쪽 60 = 지도를 왼쪽으로(높이가 먼저 차서 크기는 그대로). 로봇 진행자는 지도 위에 겹쳐 선다(2026-10-17 사용자 지시 — 로봇 도입 전처럼 크게). 캡션 줄은 캔버스 밖이다
      const probe = new T.PerspectiveCamera(30, 1, 1, 4000);
      const aim = (c, s) => { const el = s.el * Math.PI / 180, az = s.az * Math.PI / 180;
        c.position.set(s.tx + s.d * Math.cos(el) * Math.sin(az), s.ty + s.d * Math.sin(el), s.tz + s.d * Math.cos(el) * Math.cos(az));
        c.lookAt(s.tx, s.ty, s.tz); c.updateMatrixWorld(); };
      function frame(s){
        const w = canvas.clientWidth, hh = canvas.clientHeight, rw = w - PAD.l - PAD.r, rh = hh - PAD.t - PAD.b;
        const hs = s.h.filter((v, k) => s.o[k] > 0), pts = [];
        hs.forEach(h => [[-1, -1], [1, -1], [1, 1], [-1, 1]].forEach(([a, b]) => pts.push(new T.Vector3(a * W / 2, h, b * H / 2))));
        s.tx = 0; s.ty = Math.max(...hs) / 2; s.tz = 0;
        probe.aspect = w / hh; probe.updateProjectionMatrix();
        const bbox = () => { aim(probe, s); const b = [1e9, -1e9, 1e9, -1e9];
          pts.forEach(p => { const v = p.clone().project(probe), x = (v.x + 1) / 2 * w, y = (1 - v.y) / 2 * hh;
            b[0] = Math.min(b[0], x); b[1] = Math.max(b[1], x); b[2] = Math.min(b[2], y); b[3] = Math.max(b[3], y); }); return b; };
        let lo = 40, hi = 4000;
        for (let n = 0; n < 32; n++) { s.d = (lo + hi) / 2; const b = bbox(); (b[1] - b[0] <= rw && b[3] - b[2] <= rh) ? hi = s.d : lo = s.d; }
        s.d = hi; const b = bbox();
        s.ox = (b[0] + b[1]) / 2 - (PAD.l + rw / 2); s.oy = (b[2] + b[3]) / 2 - (PAD.t + rh / 2);
      }
      const flat = s => { const o = { ...s }; s.h.forEach((v, k) => o['h' + k] = v); s.o.forEach((v, k) => o['o' + k] = v); delete o.h; delete o.o; return o; };
      const cur = flat(STEPS[0]);
      let tweens = [], raf = 0;
      const ease = u => u < .5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;
      function to(target, dur){
        const now = performance.now();
        for (const k in target) { tweens = tweens.filter(w => w.k !== k); if (cur[k] !== target[k]) tweens.push({ k, a: cur[k], b: target[k], t0: now, dur }); }
        if (!raf) raf = requestAnimationFrame(tick);
      }
      /* 4단계 위성 기둥 연출 — 약 15초, 한 번 돈다. 시각(ms)은 연출 시작 기준.
         0 위성 등장 → 1000–7000 하루(24시간을 6초에, 250 ms = 1시간) — 밤 가림막 · 관측 시각(SCANS, 자료)마다 스캔 번쩍임
         → 7000 측면 뷰로(1.6 s) → 8600–11100 적분 막대가 지표에서 대류권 상단까지 차오른다 → 13300 제자리로(1.6 s) → 15000 끝 */
      function startShow(){
        show = { t0: performance.now(), stage: 0, lastScan: -1 };
        sat.classList.add('on');
        if (!raf) raf = requestAnimationFrame(tick);
      }
      function endShow(){
        show = null;
        sky.style.opacity = 0; sun.style.opacity = 0; swath.style.opacity = 0; tro.classList.remove('on'); sat.classList.remove('on', 'flash');
        [day, clTop, clTrop, clStrat, clGround, sumNote].forEach(el => el.classList.remove('on'));
      }
      /* 측면 — 망원(화각 12°)으로 멀리서 거의 수평(3°)으로 본다. 두 층이 선에 가깝게 보이는 90° 측면. 첫 판(30° · 5°)은 위성 층 밑면이 화면 위를 덮었다.
         기둥은 캔버스 왼쪽 35 % 자리로 민다(ox) — 오른쪽 아래에 적분 설명이 선다 */
      const SIDE = () => ({ o1: 0, o2: 0, o3: 0, o4: 0, h5: HS, foot: 0, col: 1, sat: 1, tx: X(q[0]), ty: HS * .52, tz: Z(q[1]), d: HS * 1.45 / (2 * Math.tan(6 * Math.PI / 180)), el: 3, az: 0, fov: 12, ox: canvas.clientWidth * .15, oy: 0 });
      /* 하루 시계 — 250 ms = 1시간인데 TROPOMI 통과 앞뒤 한 시간(13.0–14.0시)만 1000 ms = 1시간으로 늦춘다(250 ms 로는 훑는 모습이 안 보인다).
         그만큼(750 ms) 뒤 순서가 모두 밀린다 — DAY_END 이후 시각은 LAG 를 더한 값이다 */
      //  2026-10-06 사용자 지시 — 1초 통과는 너무 빨라 위성이 보이지 않았다. 12:30–14:30 두 시간을 시간당 2초로 늘려
      //    4초 동안 천천히 지나가게 한다(13:30 '무렵' 이면 된다). 뒤 순서는 LAG 로 함께 밀린다.
      const W0 = 12.5, W1 = 14.5, SLOW = 2000, LAG = (W1 - W0) * (SLOW - 250), DAY_END = 7000 + LAG;
      const hourAt = t => { const ms = Math.max(0, t - 1000), a = W0 * 250, b = a + (W1 - W0) * SLOW;
        return ms < a ? ms / 250 : ms < b ? W0 + (ms - a) / SLOW : W1 + (ms - b) / 250; };
      // 2026-11-10 건화 덱 — 내레이션이 없어 연출 시계를 SHOW_SP 배 빠르게 돌린다(약 18.5초 → 10.3초). 아래 시각표는 원본 초 그대로다
      const SHOW_SP = 1.8;
      function runShow(now){
        const t = (now - show.t0) * SHOW_SP, c = cur;
        if (t < DAY_END) {
          const hr = hourAt(t), dayness = Math.min(1, Math.max(0, .5 + 1.4 * Math.cos(2 * Math.PI * (hr - 12.5) / 24)));
          sky.style.opacity = (t < 1000 ? t / 1000 : 1) * .55 * (1 - dayness);
          const n = SCANS.filter(h => h <= hr).length;
          if (n > show.lastScan && show.lastScan >= 0 && n > 0) { sat.classList.add('flash'); setTimeout(() => sat.classList.remove('flash'), 350); show.flashAt = now; }
          show.lastScan = n;
          const fl = show.flashAt ? Math.max(0, 1 - (now - show.flashAt) / 500) : 0;
          c.sat = n ? .25 + .75 * dayness + .6 * fl : .12;          // 관측 전 · 밤에는 흐리게, 관측 순간 번쩍
          const hh = Math.min(24, hr), H0 = Math.floor(hh) % 24, M0 = Math.floor((hh % 1) * 60);
          dayClk.textContent = `${String(H0).padStart(2, '0')}:${String(M0).padStart(2, '0')} KST · 관측 ${n}회`;
          daySt.textContent = dayness > .5 ? '낮 — 햇빛(자외선·가시광)을 되받아 한 시간마다 관측' : '밤 — 햇빛이 없어 관측하지 못한다';
          dayCur.style.left = (hh / 24 * 100).toFixed(2) + '%';
          dayMarks.forEach((m, k) => m.classList.toggle('hit', SCANS[k] <= hr));
          day.classList.toggle('on', t > 700);
          // 해 — 동쪽(오른쪽)에서 떠 남쪽 하늘 위를 지나 서쪽(왼쪽)으로. 떠 있는 동안(밤낮 곡선의 cos ≥ 0)만 보인다
          const su = (hr - 6.5) / 12;
          sun.style.opacity = su > 0 && su < 1 ? Math.min(1, Math.min(su, 1 - su) * 8) : 0;
          if (su > 0 && su < 1) { sun.style.left = (93 - 86 * su).toFixed(2) + '%'; sun.style.top = (46 - 38 * Math.sin(Math.PI * su)).toFixed(2) + '%'; }
          // TROPOMI — 통과 한 시간 동안 남(아래)에서 북(위)으로 한 번
          const tu = (hr - W0) / (W1 - W0), onTro = tu > 0 && tu < 1;
          tro.classList.toggle('on', onTro);
          swath.style.opacity = onTro ? Math.min(1, Math.min(tu, 1 - tu) * 6) : 0;
          if (onTro) { tro.style.left = (40 + 12 * tu) + '%'; tro.style.top = (104 - 112 * tu) + '%'; swath.style.top = (100 - 100 * tu) + '%'; }
          troMark.classList.toggle('hit', hr >= TRO);
          if (onTro) daySt.textContent = 'TROPOMI 통과 — 저궤도 위성은 하루 한 번(13:30 무렵) 지나간다';
        } else if (show.stage === 0) {
          show.stage = 1; sky.style.opacity = 0; sun.style.opacity = 0; swath.style.opacity = 0; tro.classList.remove('on'); day.classList.remove('on'); sat.classList.remove('on');
          to(SIDE(), 1600 / SHOW_SP);
        }
        if (t > 8600 + LAG && show.stage === 1) { show.stage = 2; to({ integ: 1 }, 2500 / SHOW_SP); }
        if (t > 13300 + LAG && show.stage === 2) { show.stage = 3; const b = flat(STEPS[4]); to({ ...Object.fromEntries(Object.keys(SIDE()).map(k => [k, b[k]])), col: 0, integ: 0, sat: 1 }, 1600 / SHOW_SP); }
        const side = c.col > .5;
        [clTop, clTrop, clStrat, clGround].forEach(el => el.classList.toggle('on', side && show.stage >= 1 && show.stage < 3));
        sumNote.classList.toggle('on', show.stage === 2 && t > 9200 + LAG);
        if (t > 15000 + LAG) endShow();
      }
      function fly(){
        const s = STEPS[2];
        aim(probe, s);
        const p0 = probe.position.clone(), l0 = new T.Vector3(s.tx, s.ty, s.tz);
        flight = { t0: performance.now(), back: false,
          pos: new T.CatmullRomCurve3([p0, ...WP.map(([x, y, a]) => V(x, y, a)), p0.clone()]),
          look: new T.CatmullRomCurve3([l0, ...LK.map(([x, y]) => V(x, y, 0)), l0.clone()]) };
        // 내려가며 — 지면 층을 걷고, 토지피복을 땅으로 내려 솟게 하고, 배출을 그 위에 덮는다
        to({ terr: 1, o0: 0, h1: 0, h2: .5, pair: 0, ox: 0, oy: 0, fov: 44 }, 1500);
      }
      /* 6·7단계 시간표(ms, 단계에 들어선 때부터). 앞 단계에서 넘어올 때만 돈다.
         6 — 층 k(5 위성 → 1 토지피복)가 차례로 번쩍이고(T6) 그 층의 빛줄기가 측정소로 자라며 알갱이가 흐른다 → TS6 측정망이 켜지고 질의 셀로 → TE6 끝
         7 — 0–1100 측정망 번쩍(두 번) → 1100 층을 걷고 확대(1.9 s) → 3000 추론장이 채워진다(3.4 s) → 6600 끝 */
      let seq = null;
      const T6 = k => 450 + (5 - k) * 550, TS6 = 3200, TE6 = 5200, GROW = 600, LOOP = 900;   // 2026-11-10 건화 덱 — 약 0.65배로 당겼다(EIA 원본 700 + 850k · 4950 · 7800 · 800 · 1100)
      const clamp01 = v => Math.max(0, Math.min(1, v));
      function runSeq(now){
        const t = now - seq.t0;
        if (seq.k === 6) {
          if (t > TE6) { seq = null; return null; }
          const start = n => rayK[n] ? T6(rayK[n]) : TS6;
          return {
            flash: [0, 1, 2, 3, 4, 5].map(k => k && t > T6(k) && t < T6(k) + 700 ? Math.sin(Math.PI * (t - T6(k)) / 700) : 0),
            prog: n => clamp01((t - start(n)) / GROW),
            part: n => { const a = t - start(n); return a < 0 ? -1 : a < GROW ? a / GROW : ((a - GROW) / LOOP) % 1; },
            partOp: Math.min(1, (TE6 - t) / 600),
            glow: clamp01((t - TS6) / 400), stFlash: t > TS6 && t < TS6 + 600 ? Math.sin(Math.PI * (t - TS6) / 600) : 0,
            beam: .45 * clamp01((t - TS6 - 400) / 600),
          };
        }
        // 2026-11-10 건화 덱 — 내레이션이 없어 당겼다: 번쩍 0–600 → 600 확대(1.3 s) → 1900 채움(2.2 s). EIA 원본은 1100 · 1.9 s · 5600 · 4.2 s
        if (!seq.zoom && t > 600) { seq.zoom = true; const { inf, ...rest } = flat(STEPS[7]); to(rest, 1300); }
        if (!seq.fill && t > 1900) { seq.fill = true; to({ inf: 1 }, 2200); }   // 2026-10-16 — 내레이션 '그 관계로 … 빈 격자의 농도까지 추론해 채웁니다'에 맞춰 늦췄다(종전 3.0초 · 3.4초)
        if (t > 2000) { seq = null; return null; }
        return { stFlash: t < 600 ? Math.sin(Math.PI * (t % 300) / 300) : 0 };
      }
      function tick(now){
        raf = -1;                                   // 그리는 도중 to()·연출이 루프를 또 걸지 않게(첫 판은 루프가 겹쳐 180 fps 로 셌다)
        tweens = tweens.filter(w => { const u = Math.min(1, (now - w.t0) / w.dur); cur[w.k] = w.a + (w.b - w.a) * ease(u); return u < 1; });
        draw();
        raf = (tweens.length || flight || show || seq) ? requestAnimationFrame(tick) : 0;   // 옮길 값이 남았거나 비행·연출 중일 때만 다음 프레임
      }

      const v3 = new T.Vector3();
      function place(el, x, y, h, on){
        v3.copy(V(x, y, h)).project(cam);
        const w = canvas.clientWidth, hh = canvas.clientHeight;
        const px = (v3.x + 1) / 2 * w, py = (1 - v3.y) / 2 * hh;
        el.style.left = px.toFixed(1) + 'px'; el.style.top = py.toFixed(1) + 'px';
        el.classList.toggle('on', !!on && px > 0 && px < w && py > 0 && py < hh);   // 캔버스 밖(캡션 줄 등)으로 나간 표는 감춘다
      }
      // 층 이름표는 기준점 왼쪽으로 뻗는다(translate -100%) — 지도 칸 왼쪽 끝을 넘으면 출처를 아랫줄로, 그래도 넘으면 글씨를 줄인다.
      // 폭은 처음 보일 때 한 번만 잰다(on 이 된 뒤 = 글꼴이 들어온 뒤).
      function fitLab(el){
        if (!el.classList.contains('on')) return;
        const x = parseFloat(el.style.left), m = 6;
        if (!el._w) { el.classList.remove('wrap', 'sm'); const a = el.offsetWidth; el.classList.add('wrap'); const b = el.offsetWidth; el.classList.add('sm'); el._w = [a, b, el.offsetWidth]; }
        el.classList.toggle('wrap', x < el._w[0] + m);
        el.classList.toggle('sm', x < el._w[1] + m);
      }
      function draw(){
        const c = cur, act = sec.classList.contains('on');
        const sq = seq ? runSeq(performance.now()) : null;
        planes.forEach(({ m, edge }, k) => {
          const op = Math.min(1, LAYERS[k][1] * c['o' + k] * (k ? 1 - .5 * c.dim : 1) * (k === 2 ? 1 - .3 * c.terr : 1) * (k === 5 ? c.sat : 1));   // 비행 중 배출은 옅게 — 아래 토지피복·지형이 비치게
          m.position.y = c['h' + k]; edge.position.y = c['h' + k];
          const fl = sq && sq.flash ? sq.flash[k] : 0;          // 6단계 — 그 층이 번쩍인다(면 · 테두리 · 이름표)
          m.material.opacity = Math.min(1, op * (1 + .7 * fl)); edge.material.opacity = k ? Math.min(1, .55 * c['o' + k] + fl) : 0;
          edge.material.color.setHex(fl > .05 ? 0x00a040 : 0x6f7a84); labs[k].classList.toggle('hot', fl > .2);
          m.visible = edge.visible = c['o' + k] > .004;
        });
        terrain(c.terr);
        stPts.visible = qEdge.visible = c.o0 > .3;
        flyNote.classList.toggle('on', act && c.terr > .3);
        if (show) runShow(performance.now());
        colSl.forEach(({ m, z0, strat, w }) => { const lit = !strat && z0 < c.integ * TROP; m.material.opacity = c.col * (lit ? Math.min(.95, w + .25) : w); m.visible = c.col > .01;
          m.material.color.setHex(lit ? 0x5b3fa0 : strat ? 0x9aa3ab : 0x8f78d8); });
        sumBar.visible = c.col > .01 && c.integ > .01; sumBar.material.opacity = .9 * c.col;
        sumBar.scale.y = Math.max(.01, c.integ * TROP); sumBar.position.copy(V(q[0] + CW / 2 + 2.5, q[1], c.integ * TROP / 2));
        pix.visible = c.col > .01; pix.material.opacity = c.col * (.45 + .5 * c.integ);
        const glow = sq && sq.glow != null ? sq.glow : c.glow, stf = sq ? sq.stFlash || 0 : 0;
        stMat.size = 8 + 3 * glow + 9 * stf; stMat.color.setRGB(.294 * (1 - glow), .333 + (.627 - .333) * glow + .3 * stf, .369 + (.251 - .369) * glow + .15 * stf);
        reveal(c.inf); infMesh.visible = c.inf > .003; infNote.classList.toggle('on', act && c.inf > .05);
        qEdge.material.opacity = 1 - c.qfill; qFill.material.opacity = .95 * c.qfill;
        nearLines.forEach(l => { l.material.opacity = .9 * c.near; l.visible = c.near > .01; });
        nearPts.material.opacity = Math.min(1, c.near * 2); nearPts.visible = c.near > .01;

        pins.forEach(l => { l.material.opacity = .8 * c.pair; l.visible = c.pair > .01; });
        pinDots.material.opacity = c.pair; pinDots.visible = c.pair > .01;
        fp.forEach(l => { l.material.opacity = .6 * c.foot; l.visible = c.foot > .01; });   // 발자국 막대 — 측면 뷰에서는 기둥이 대신한다
        rays.forEach((l, n) => { const pr = sq && sq.prog ? sq.prog(n) : c.rays;
          l.geometry.setDrawRange(0, Math.round(pr * RAYN) * 36); l.material.opacity = .8 * Math.min(1, pr * 3) * (1 - .6 * c.dim); l.visible = pr > .01; });
        parts.forEach((m, n) => { const u = sq && sq.part ? sq.part(n) : -1; m.visible = u >= 0;
          if (u >= 0) { m.position.copy(rayCurve[n].getPoint(u)); m.material.opacity = sq.partOp; } });
        const bm = sq && sq.beam != null ? sq.beam : c.beam;
        beam.material.opacity = .5 * bm; tip.material.opacity = .95 * bm * bm; beam.visible = tip.visible = bm > .01;
        beam.scale.set(.6 + .9 * bm, 1, .6 + .9 * bm);
        // 카메라
        if (flight) {
          const u = Math.min(1, (performance.now() - flight.t0) / FLY_MS), e = .5 - .5 * Math.cos(Math.PI * u);
          if (u > .86 && !flight.back) {             // 돌아오며 — 층을 다시 벌린다(끝나는 순간 2단계 그림과 맞물린다)
            flight.back = true;
            const b = flat(STEPS[2]);
            to({ terr: 0, o0: b.o0, h1: b.h1, h2: b.h2, pair: b.pair, ox: b.ox, oy: b.oy, fov: 30 }, 1400);
          }
          cam.position.copy(flight.pos.getPoint(e)); cam.lookAt(flight.look.getPoint(e)); cam.updateMatrixWorld();
          if (u >= 1) flight = null;
        } else aim(cam, c);
        cam.fov = c.fov;
        cam.setViewOffset(canvas.clientWidth, canvas.clientHeight, c.ox, c.oy, canvas.clientWidth, canvas.clientHeight);
        renderer.render(scene, cam);
        // 덧그림
        // 지면 이름표는 층이 벌어진 뒤에만(0·1단계는 질의 셀 가까이 붙어 서쪽 변이 화면 밖이다)
        LAYERS.forEach((L, k) => place(labs[k], 0, H * .32, c['h' + k], act && !flight && !show && c.terr < .05 && c.col < .05 && c['o' + k] > .5 && (k > 0 || c.o1 > .5)));
        labs.forEach(fitLab);
        if (c.col > .01) {
          const on = el => el.classList.contains('on');
          place(clTop, q[0] - CW / 2, q[1], HS + 1.2, act && on(clTop)); place(clTrop, q[0] + CW / 2, q[1], TROP, act && on(clTrop));
          place(clStrat, q[0] + CW / 2, q[1], (TROP + HS) / 2, act && on(clStrat)); place(clGround, q[0] + CW / 2, q[1], 1, act && on(clGround));
        }
        places.forEach(({ l, d }) => place(d, l.x, l.y, 0, act && c.o1 < .3));
        place(qring, q[0], q[1], 0, act && (IN(step) <= 1 || IN(step) >= 6));
        qring.classList.toggle('pulse', step <= 1);
        place(qx, q[0], q[1], 0, act && c.cross > .5);
        place(tagA, P.A[0] + .5, P.A[1] + .5, 2 * G + PIN_UP, act && c.pair > .6);
        place(tagB, P.B[0] + .5, P.B[1] + .5, 2 * G + PIN_UP, act && c.pair > .6);
        // 두 지점 표 — 화면에서 왼쪽 것은 왼쪽으로, 오른쪽 것은 오른쪽으로 뻗는다(첫 판은 둘이 겹쳤다)
        const aL = parseFloat(tagA.style.left) < parseFloat(tagB.style.left);
        tagA.classList.toggle('lft', aL); tagA.classList.toggle('rgt', !aL); tagB.classList.toggle('lft', !aL); tagB.classList.toggle('rgt', aL);
      }
      function size(){
        const K = sec.getBoundingClientRect().width / 1600 || 1;   // 이 덱은 1600×900 무대를 통째로 늘린다 — 그 배율만큼 또렷하게
        renderer.setPixelRatio(Math.min(2, K * (window.devicePixelRatio || 1)));
        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
        cam.aspect = canvas.clientWidth / canvas.clientHeight; cam.updateProjectionMatrix();
        STEPS.forEach(s => s.fit && frame(s));
        if (gl) gl.go(IN(step), true); else draw();
      }
      addEventListener('resize', size);
      gl = {
        go(k, instant, from){
          const fwd = from === 1, fwd4 = from === 3;  // 앞 단계에서 넘어올 때만 2·4·6·7단계 연출이 돈다
          flight = null;                              // 비행 중 키 — 비행을 건너뛰고 그 단계로 간다
          if (show) endShow();                        // 4단계 연출 중 키도 같다
          seq = null;                                 // 6·7단계 시간표도 같다
          const target = flat(STEPS[k]);
          if (instant) { tweens = []; Object.assign(cur, target); draw(); }
          else if (k === 7 && from === 6) {           // 7단계 — 측정망이 먼저 번쩍이고 확대는 시간표가 건다
            seq = { k: 7, t0: performance.now() };
            to({ rays: 0, beam: 0 }, 600);
          }
          else {
            const { rays: r, ...rest } = target;
            to(rest, 700);                              // 2026-11-10 건화 덱 — 단계 전환 850 → 700 ms
            to({ rays: r }, r > cur.rays ? 1200 : 400);   // 6단계 빛줄기는 천천히 자란다
          }
          // 1단계 — 거리선을 보인 뒤 ✕ 로 접는다("측정소까지의 거리가 같다고 농도가 같은 것은 아니다")
          if (k === 1) subTimer = setTimeout(() => { if (step === 1) to({ cross: 1, near: .45 }, 500); }, instant ? 0 : 900);
          // 2단계 — 1단계에서 넘어올 때만 층이 벌어진 1.3초 뒤 한 바퀴 난다(3단계에서 되돌아올 때 · 장에 바로 들어올 때는 날지 않는다)
          if (k === 2 && !instant && fwd) subTimer = setTimeout(() => { if (step === 2) fly(); }, 700);
          // 4단계 — 3단계에서 넘어올 때만 위성 층이 선 0.9초 뒤 기둥 연출을 한 번 돈다
          if (k === 4 && !instant && fwd4) subTimer = setTimeout(() => { if (IN(step) === 4) startShow(); }, 500);   // 2026-11-10 건화 덱 — 내레이션이 없어 0.5초로 당겼다(EIA 원본 2.9초)
          // (EIA 원본 주석) 2026-10-16 — 내레이션(0.5초 시작) 둘째 문장 '트로포미 … 오후 한 시 반'에 위성 통과가, 셋째 문장에 기둥 그림이 오게 늦췄다(종전 0.9초)
          // 6단계 — 5단계에서 넘어올 때 층이 차례로 번쩍이며 측정망으로 흐른다
          if (k === 6 && !instant && (from === 5 || from === 4)) seq = { k: 6, t0: performance.now() };
          if (seq && !raf) raf = requestAnimationFrame(tick);
        },
        stop(){ flight = null; seq = null; if (show) endShow(); tweens = []; Object.assign(cur, flat(STEPS[IN(step)])); },
      };
      size();
      gl.go(IN(step), true);
    }

    /* ── 이 덱 연결 — 단계 장치(window.conceptSteppers) ─────────────────
       다음 · 이전 키와 아래 삼각 단추는 덱의 advance() 가 먼저 step 으로 보낸다 — 단계 0–5 를 넘기고, 끝(5단계에서 다음 · 0단계에서 이전)에서는 false 를 돌려 장이 넘어간다.
       장에 들어서는 것은 swap() 이 부르는 enter(지금, 직전) 로 안다 — 앞에서 오면 0단계, 뒤에서 오면 5단계. 자산은 앞 장(6쪽)에 닿으면 받는다.
       Enter 는 넘기지 않는다(원본과 같다). */
    if (bridge.slide < 0) return;
    let was = -1;
    function enter(now, prev){
      if (now === was) return;
      const w = prev === undefined || prev < 0 ? (was < 0 ? now - 1 : was) : prev; was = now;
      bridge.enter(now, w);
    }
    window.conceptSteppers = window.conceptSteppers || {};
    window.conceptSteppers[bridge.slide] = { step: d => bridge.step(d), enter };
    enter(S.findIndex(x => x.classList.contains('on')), -1);   // 이 파일은 덱 스크립트 뒤에 읽힌다 — 첫 swap(0) 은 이미 지나갔다
    window.KSBridge = { get step() { return step; }, get ready() { return !!gl; }, flying: () => bridge.flying() };   // 점검 창구
})();
