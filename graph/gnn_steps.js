/* KSEIA 축약본 사본(2026-11-15) — 원본 ../../ppt-건화ai-tft-20261208/발표덱/assets/js/kh-gnn.js(건화 덱 18쪽 기초 개념 · 그래프 신경망 #gnnslide).
   축약본 13쪽(원본 10장 #gnnslide)을 그 장으로 갈아 끼웠다. 장 조각은 ../parts/s-gnn.html, 끼우기는 ../scripts/build_short_deck.py 의 REPLACE.
   원본에서 바꾼 것은 덱 연결뿐이다 — 그림 · 시각 · 글은 원본 그대로다. 원본을 고치면 다시 복사하고 아래 넷을 다시 바꾼다.
     1 전역 이름 — window.conceptIntro · window.GNN_INTRO → window.KH_conceptIntro · window.KH_GNN_INTRO(이 덱 본문에 같은 이름의 EIA 판이 있다)
     2 장 — #gnnslide → #s-gnn, 지금 장 .is-active → .slide.on, 장 목록 main.deck > .slide → .slide(숨긴 .cut 은 빠진다)
     3 키 — 원본은 kh-deck.js 앞(capture)에서 키를 가로챘다. 이 덱은 단계 장치 window.conceptSteppers[장 index] = { step, enter } 에 건다
       (덱의 advance() 가 다음 · 이전 키와 아래 삼각 단추를 먼저 여기로 보낸다 — step 이 true 면 단계만 넘긴 것)
     4 오일러 그림 — 서론영상/player/img/ai-euler.jpg → image/ai-euler.jpg(같은 그림 사본)
   ── 아래는 원본 머리 주석 그대로 ── */
/* 10쪽 기초 개념 · 그래프 신경망(#gnnslide) — ppt-eia-ai전환-20260930발표 덱 17장의 첫 씬(0단계 '그래프가 쓰이는 곳')만 옮겼다(2026-11-10 사용자 지시).
   원본 17장은 네 씬(0 쓰임 소개 · 1 그래프 · 2 이종 그래프 · 3 메시지 패싱)이다 — 1–3 씬은 이 덱에서 뺐다.
   window.KH_conceptIntro · window.KH_GNN_INTRO 는 원본 덱 HTML 의 같은 이름 스크립트를 그대로 뽑았다. 바꾼 것은 글꼴(Pretendard)과 색
   (녹색 강조 #90C31F → 템플릿 하늘 #76A9ED, 바탕 · 카드 남색)뿐이다. 카드 그림은 모두 모식도(값 · 배치 가상)이고,
   카드 아래 서지는 assets/js/design_cases_refs.js(원본 덱 scripts/build_design_cases_refs.py 의 Crossref 기계 생성 산출 사본)에서 채운다.
   시간 축 — 원본은 내레이션(graph/audio/concept/gnn0.mp3, 64초) 문장 시각에 카드를 켠다. 이 덱은 내레이션 없이 다음 키 세 번으로 넘긴다(아래 '건화 덱 연결').
   들어옴 = 제목만 · 다음 = 여섯 분야 카드가 차례로 · 다음 = 대기환경 · 고해상도 농도장 · 다음 = 11쪽. 이전 키는 거꾸로, Enter 는 지금 단계 다시. */
  window.KH_conceptIntro = function(cfg){
    const F = "'Pretendard','Malgun Gothic',sans-serif";
    const ease = u => u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u);
    const refTxt = ks => { const R = (window.DESIGN_REFS && window.DESIGN_REFS.refs) || {};
      return ks.map(k => { const r = R[k]; if (!r) return ''; const j = r.journal_short || r.journal || ''; return `${r.first}${r.n_authors > 1 ? ' 외' : ''} ${r.year}${j && j.length <= 24 ? ' · ' + j : ''}`; }).filter(Boolean).join('  /  '); };
    return function(ctx, nt, I){
      const txt = (s, x, y, size, color, align, wt) => { ctx.font = `${wt || 600} ${size}px ${F}`; ctx.fillStyle = color; ctx.textAlign = align || 'left'; ctx.fillText(s, x, y); };
      const cue = c => { const n = Math.floor(c), f = c - n, a = I.cues[n] != null ? I.cues[n] : I.dur, b = I.cues[n + 1] != null ? I.cues[n + 1] : I.dur; return a + (b - a) * f; };
      const fin = cue(cfg.finalCue), fa = ease((nt - fin) / .8);
      txt(cfg.head, 24, 40, 22, '#E6EDF3', 'left', 700);
      const CW = 300, CH = 228;
      cfg.cards.forEach((c, n) => { const x = 25 + (n % 3) * 325, y = 64 + Math.floor(n / 3) * 248, t = nt - cue(c.c), a = ease(t / .6);
        ctx.globalAlpha = 1 - .72 * fa;
        ctx.fillStyle = '#16294a'; ctx.fillRect(x, y, CW, CH); ctx.strokeStyle = a > 0 && t < 3 ? `rgba(118,169,237,${.9 * (1 - t / 3)})` : '#24365a'; ctx.lineWidth = 2; ctx.strokeRect(x + 1, y + 1, CW - 2, CH - 2);
        if (a > 0) { ctx.globalAlpha *= a; txt(c.t, x + 14, y + 28, 18, '#E6EDF3', 'left', 700); txt(c.s, x + 14, y + 50, 15, '#9FB0BC', 'left', 500);
          ctx.save(); ctx.beginPath(); ctx.rect(x, y + 58, CW, CH - 84); ctx.clip(); c.draw(ctx, x, y + 58, CW, CH - 84, Math.max(0, t), nt); ctx.restore();
          const rt = refTxt(c.ref); let fs = 12.5; ctx.font = `500 ${fs}px ${F}`; while (fs > 9 && ctx.measureText(rt).width > CW - 28) { fs -= .5; ctx.font = `500 ${fs}px ${F}`; }
          txt(rt, x + 14, y + CH - 10, fs, '#7F92A1', 'left', 500); }
        ctx.globalAlpha = 1; });
      if (fa > 0) { const s = .9 + .1 * fa, w = 760 * s, h = 470 * s, x = (1000 - w) / 2, y = 70 + (470 - h) / 2;
        ctx.globalAlpha = fa; ctx.fillStyle = '#0b1830'; ctx.fillRect(x, y, w, h); ctx.strokeStyle = '#76A9ED'; ctx.lineWidth = 2.5; ctx.strokeRect(x, y, w, h);
        txt(cfg.final.t, x + 22, y + 36, 22, '#76A9ED', 'left', 700); txt(cfg.final.s, x + 22, y + 62, 16, '#9FB0BC', 'left', 500);
        ctx.save(); ctx.beginPath(); ctx.rect(x, y + 74, w, h - 84); ctx.clip(); cfg.final.draw(ctx, x, y + 74, w, h - 84, nt - fin); ctx.restore(); ctx.globalAlpha = 1; }
      // 아래 자막 — 지금 문장의 요지
      let cap = ''; cfg.caps.forEach(([c, s]) => { if (nt >= cue(c)) cap = s; });
      if (cap) { ctx.fillStyle = 'rgba(11,24,48,.88)'; ctx.fillRect(0, 568, 1000, 57); txt(cap, 500, 604, 19, '#E6EDF3', 'center', 600); }
    };
  };

  window.KH_GNN_INTRO = (function(){
    const TAU = Math.PI * 2, F = "'Pretendard','Malgun Gothic',sans-serif";
    const ease = u => u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u);
    const dot = (g, x, y, r, fill, stroke, lw) => { g.beginPath(); g.arc(x, y, r, 0, TAU); g.fillStyle = fill; g.fill(); if (stroke) { g.strokeStyle = stroke; g.lineWidth = lw || 2; g.stroke(); } };
    const ln = (g, a, b, col, w, u) => { u = u == null ? 1 : u; if (u <= 0) return; g.strokeStyle = col; g.lineWidth = w; g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u); g.stroke(); };
    const lab = (g, s, x, y, size, col, al, wt) => { g.font = `${wt || 700} ${size}px ${F}`; g.fillStyle = col; g.textAlign = al || 'center'; g.fillText(s, x, y); };
    const grow = (t, n, k, per) => ease((t - k * (per || .12)) / .3);
    // 1 분자 — 육각 고리 + 곁가지(C 회색 · O 빨강 · N 파랑)
    function mol(g, x, y, w, h, t){
      const cx = x + w * .42, cy = y + h * .42, r = 30, A = [];
      for (let k = 0; k < 6; k++) A.push([cx + r * Math.cos(k * TAU / 6 - Math.PI / 2), cy + r * Math.sin(k * TAU / 6 - Math.PI / 2), 'C']);
      A.push([A[1][0] + 40, A[1][1] - 18, 'O'], [A[3][0] - 34, A[3][1] + 22, 'N'], [A[5][0] - 42, A[5][1] - 16, 'C']); A.push([A[7][0] - 38, A[7][1] - 4, 'C'], [A[2][0] + 44, A[2][1] + 14, 'O']);
      const B = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [1, 6], [3, 7], [5, 8], [7, 9], [2, 10]];
      B.forEach(([a, b], n) => ln(g, A[a], A[b], '#C9D3DA', 3, grow(t, n, n, .1)));
      const col = { C: '#9CA3AF', O: '#EF4444', N: '#3B82F6' };
      A.forEach((p, n) => { const u = grow(t, n, n, .1); if (u <= 0) return; dot(g, p[0], p[1], 11 * u, col[p[2]], '#0b1830', 2); lab(g, p[2], p[0], p[1] + 5, 12 * u, '#0b1830'); });
      if (t > 1.6) { lab(g, '원자 = 노드', x + w - 14, y + 40, 14, '#C9D3DA', 'right', 600); lab(g, '결합 = 간선', x + w - 14, y + 60, 14, '#C9D3DA', 'right', 600); }
    }
    // 2 의학 — 약 둘 · 단백질 넷, 약–약 붉은 점선(부작용?)
    function med(g, x, y, w, h, t){
      const D = [[x + 50, y + 40], [x + 50, y + h - 30]], P = [[x + 150, y + 30], [x + 190, y + 80], [x + 150, y + h - 20], [x + 240, y + 50]];
      [[0, 0], [0, 1], [1, 1], [1, 2]].forEach(([a, b], n) => ln(g, D[a], P[b], '#9FB0BC', 2, grow(t, n, n)));
      [[0, 1], [1, 2], [1, 3], [0, 3]].forEach(([a, b], n) => ln(g, P[a], P[b], '#5A6B78', 2, grow(t, n, n + 4)));
      P.forEach((p, n) => { const u = grow(t, n, n); if (u > 0) dot(g, p[0], p[1], 9 * u, '#6B7B88', '#0b1830'); });
      D.forEach((p, n) => { const u = grow(t, n, n); if (u <= 0) return; g.fillStyle = n ? '#60A5FA' : '#F472B6'; const s = 14 * u; g.beginPath(); g.roundRect(p[0] - s * 1.4, p[1] - s * .7, s * 2.8, s * 1.4, s * .7); g.fill(); lab(g, n ? '약 B' : '약 A', p[0], p[1] + 5, 12, '#0b1830'); });
      if (t > 1.2) { g.setLineDash([5, 5]); g.lineDashOffset = -t * 20; ln(g, [D[0][0], D[0][1] + 12], [D[1][0], D[1][1] - 12], '#EF4444', 2.5); g.setLineDash([]); g.lineDashOffset = 0;
        lab(g, '부작용?', D[0][0] + 10, (D[0][1] + D[1][1]) / 2 + 5, 14, '#F87171', 'left'); }
      if (t > .6) lab(g, '단백질', x + 240, y + 80, 13, '#9FB0BC', 'center', 600);
    }
    // 3 사회관계망 — 두 무리 사람, 친구의 친구에게 추천선
    function sns(g, x, y, w, h, t){
      const Pp = [[60, 40], [40, 95], [95, 70], [120, 120], [175, 60], [215, 105], [245, 40], [255, 125], [150, 25]].map(([a, b]) => [x + a, y + b + 6]);
      const E = [[0, 1], [0, 2], [1, 2], [2, 3], [2, 4], [4, 5], [4, 6], [5, 7], [6, 7], [4, 8], [8, 0]];
      E.forEach(([a, b], n) => ln(g, Pp[a], Pp[b], '#5A6B78', 2, grow(t, n, n, .08)));
      Pp.forEach((p, n) => { const u = grow(t, n, n, .08); if (u <= 0) return; const me = n === 1; dot(g, p[0], p[1] - 4, 6 * u, me ? '#76A9ED' : '#C9D3DA'); g.beginPath(); g.arc(p[0], p[1] + 9, 9 * u, Math.PI, TAU); g.fillStyle = me ? '#76A9ED' : '#C9D3DA'; g.fill(); });
      if (t > 1.4) { const pu = .5 + .5 * Math.sin(t * 5); g.setLineDash([6, 5]); ln(g, Pp[1], Pp[4], `rgba(118,169,237,${.5 + .5 * pu})`, 3); g.setLineDash([]); lab(g, '추천', (Pp[1][0] + Pp[4][0]) / 2, (Pp[1][1] + Pp[4][1]) / 2 + 22, 14, '#76A9ED'); lab(g, '나', Pp[1][0] - 18, Pp[1][1] + 18, 13, '#76A9ED'); }
    }
    // 4 거래망 — 계좌 무리, 혼자 다르게 움직이는 계좌(붉은 고리)
    function fin(g, x, y, w, h, t){
      const R = (() => { let s = 31; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
      const Pp = Array.from({ length: 13 }, () => [x + 30 + R() * (w - 60), y + 20 + R() * (h - 40)]), bad = 5;
      for (let a = 0; a < 13; a++) for (let b = a + 1; b < 13; b++) if (Math.hypot(Pp[a][0] - Pp[b][0], Pp[a][1] - Pp[b][1]) < 70) ln(g, Pp[a], Pp[b], '#3A4A57', 1.6, grow(t, a, a, .06));
      Pp.forEach((p, n) => { if (n === bad) return; ln(g, Pp[bad], p, 'rgba(239,68,68,.35)', 1.2, ease((t - 1.2 - n * .05) / .4)); });
      Pp.forEach((p, n) => { const u = grow(t, n, n, .06); if (u > 0) dot(g, p[0], p[1], 7 * u, n === bad && t > 1.2 ? '#EF4444' : '#9CA3AF'); });
      if (t > 1.2) { const k = (t * .8) % 1; g.strokeStyle = `rgba(239,68,68,${1 - k})`; g.lineWidth = 2; g.beginPath(); g.arc(Pp[bad][0], Pp[bad][1], 10 + 26 * k, 0, TAU); g.stroke(); lab(g, '이상', Pp[bad][0], Pp[bad][1] - 16, 14, '#F87171'); }
    }
    // 5 도로망 — 교차로 노드 · 도로 간선, 차가 지나간다
    function road(g, x, y, w, h, t){
      const N = []; for (let r = 0; r < 3; r++) for (let c = 0; c < 5; c++) N.push([x + 30 + c * 60 + (r % 2) * 14, y + 22 + r * 48]);
      const E = []; N.forEach((p, n) => { if (n % 5 < 4) E.push([n, n + 1]); if (n < 10) E.push([n, n + 5]); });
      E.forEach(([a, b], n) => ln(g, N[a], N[b], '#4B5B68', 5, grow(t, n, n, .04)));
      N.forEach((p, n) => { const u = grow(t, n, n, .04); if (u > 0) dot(g, p[0], p[1], 5 * u, '#C9D3DA'); });
      const path = [0, 1, 6, 7, 8, 13, 14].map(n => N[n]);
      if (t > 1) { const u = ((t - 1) * .35) % 1, L = path.length - 1, s = u * L, j = Math.min(L - 1, Math.floor(s)), f = s - j, P = [path[j][0] + (path[j + 1][0] - path[j][0]) * f, path[j][1] + (path[j + 1][1] - path[j][1]) * f];
        g.strokeStyle = '#76A9ED'; g.lineWidth = 3; g.beginPath(); g.moveTo(path[0][0], path[0][1]); for (let q = 1; q <= j; q++) g.lineTo(path[q][0], path[q][1]); g.lineTo(P[0], P[1]); g.stroke();
        dot(g, P[0], P[1], 7, '#76A9ED', '#0b1830'); const d = path[L]; dot(g, d[0], d[1] - 12, 7, '#EF4444'); lab(g, '도착 시간?', d[0] - 6, d[1] + 22, 13, '#F87171', 'right'); }
    }
    // 6 날씨 — 지구를 덮은 그물망(돌아간다)
    function wx(g, x, y, w, h, t){
      const cx = x + w / 2, cy = y + h / 2 + 4, r = Math.min(w, h) * .44, a = ease(t / .8);
      g.globalAlpha *= a; dot(g, cx, cy, r, '#14324A', '#3FA4DA', 1.5);
      const pts = []; for (let la = -60; la <= 60; la += 30) for (let lo = 0; lo < 360; lo += 30) { const L = (lo + t * 18) * Math.PI / 180, B = la * Math.PI / 180, z = Math.cos(B) * Math.cos(L);
        pts.push([cx + r * Math.cos(B) * Math.sin(L), cy - r * Math.sin(B), z, la, lo]); }
      pts.forEach(p => { if (p[2] <= 0) return; pts.forEach(q => { if (q[2] <= 0) return; const dl = Math.abs(p[3] - q[3]), dn = Math.min(Math.abs(p[4] - q[4]), 360 - Math.abs(p[4] - q[4]));
        if ((dl === 0 && dn === 30) || (dl === 30 && dn <= 15) || (dl === 30 && dn === 30 && p[4] < q[4])) ln(g, p, q, 'rgba(118,169,237,.55)', 1.2); }); });
      pts.forEach(p => { if (p[2] > 0) dot(g, p[0], p[1], 2.6, '#76A9ED'); });
    }
    /* 대기환경 — 수도권 실제 자료(2026-11-11 사용자 지시, 이전 판은 가상 배치 모식도)
       농도 = assets/js/res_layers.js 의 c1(AMR-HGN E2E test70 1 km 추론 NO₂, 수도권 km 평면 x 125–275 · y 535–685, KST 2023-03-11 ~ 13 2시간 36프레임).
              3장 간지(kh-dividers.js)와 같은 파일 · 같은 색 범위(0–vmax ppb, 감마는 파일에 구워져 있다)다. 1 km 칸을 칸 그대로(보간 없이) 칠한다.
       측정소 = assets/js/kr_grid_stations.js(EIA 덱 graph/ 사본, AirKorea 664곳, 0.1 km) 중 이 영역 안의 측정소 — 같은 km 평면이다(서울시청 측정소가 res_layers.seoul 과 0.3 km 안에서 겹침).
       간선 = 측정소마다 가까운 4곳 + 최소 신장 트리(모두 한 그물로 이어지게). 화면 표시용이다 — AMR-HGN 의 실제 간선 규칙이 아니다.
       오른쪽 확대 = 서울 도심 24 × 24 km 를 1 km 칸 경계와 함께 크게. */
    const AIR = (() => {
      const D = window.RES_LAYERS, G = window.KR_GRID; if (!D || !G) return null;
      const N = D.n, NF = D.nf, X0 = D.meta.region_km[0], Y0 = D.meta.region_km[1];
      const ST = [[0, [30, 64, 175]], [.2, [6, 182, 212]], [.4, [52, 211, 153]], [.6, [250, 204, 21]], [.8, [251, 146, 60]], [1, [239, 68, 68]]];   // kh-dividers.js 와 같은 색
      const LUT = new Uint8ClampedArray(256 * 4);
      for (let q = 1; q < 256; q++) { const v = (q - 1) / 254; let c = ST[ST.length - 1][1];
        for (let s = 1; s < ST.length; s++) if (v <= ST[s][0]) { const [a, A] = ST[s - 1], [b, B] = ST[s], u = (v - a) / (b - a); c = A.map((z, k) => z + (B[k] - z) * u); break; }
        LUT.set([c[0], c[1], c[2], 255], q * 4); }
      const cv = document.createElement('canvas'); cv.width = cv.height = N; const cx = cv.getContext('2d'), im = cx.createImageData(N, N);
      const A = { D, N, NF, ST, cv, raw: null, RW: 0, last: -1 };
      const img = new Image(); img.onload = () => { const c = document.createElement('canvas'); c.width = img.width; c.height = img.height; const x = c.getContext('2d'); x.drawImage(img, 0, 0);
        A.raw = x.getImageData(0, 0, img.width, img.height).data; A.RW = img.width; }; img.src = D.conc.c1;
      A.paint = f => {   // 프레임 사이는 선형으로 섞는다(3장 간지와 같다)
        if (!A.raw) return false; const fq = Math.round(f * 8) / 8; if (fq === A.last) return true; A.last = fq;
        const f0 = Math.floor(fq) % NF, f1 = (f0 + 1) % NF, u = fq - Math.floor(fq), R = A.raw, W2 = A.RW, d = im.data;
        for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) { const a = R[(j * W2 + f0 * N + i) * 4], b = R[(j * W2 + f1 * N + i) * 4], o = (j * N + i) * 4;
          if (!a && !b) { d[o + 3] = 0; continue; } const q = Math.round((a || b) * (1 - u) + (b || a) * u) * 4; d[o] = LUT[q]; d[o + 1] = LUT[q + 1]; d[o + 2] = LUT[q + 2]; d[o + 3] = 255; }
        cx.putImageData(im, 0, 0); return true;
      };
      // 측정소 — km 평면 → 영역 칸 좌표(열 = 동쪽으로, 행 = 북쪽에서 남쪽으로)
      const P = []; for (let k = 0; k < G.sta.length; k += 2) { const c = G.x0 + G.sta[k] / 10 - X0, r = Y0 + N - (G.y1 - G.sta[k + 1] / 10); if (c >= 0 && c < N && r >= 0 && r < N) P.push([c, r]); }
      const n = P.length, d2 = (a, b) => (P[a][0] - P[b][0]) ** 2 + (P[a][1] - P[b][1]) ** 2, seen = new Set(), E = [];
      const add = (a, b) => { const k = Math.min(a, b) * n + Math.max(a, b); if (!seen.has(k)) { seen.add(k); E.push([a, b]); } };
      for (let a = 0; a < n; a++) { const o = []; for (let b = 0; b < n; b++) if (b !== a) o.push([d2(a, b), b]); o.sort((p, q) => p[0] - q[0]); for (let k = 0; k < Math.min(4, o.length); k++) add(a, o[k][1]); }
      const inT = new Uint8Array(n), best = new Float64Array(n).fill(Infinity), par = new Int32Array(n).fill(-1); if (n) best[0] = 0;   // Prim — 끊긴 무리가 없게
      for (let it = 0; it < n; it++) { let u = -1; for (let v = 0; v < n; v++) if (!inT[v] && (u < 0 || best[v] < best[u])) u = v; inT[u] = 1; if (par[u] >= 0) add(par[u], u);
        for (let v = 0; v < n; v++) if (!inT[v]) { const dd = d2(u, v); if (dd < best[v]) { best[v] = dd; par[v] = u; } } }
      const S = D.seoul, dist = P.map(p => Math.hypot(p[0] - S[0], p[1] - S[1])), dmax = Math.max(1, ...dist);
      Object.assign(A, { P, E, ord: dist.map(v => v / dmax), ph: P.map((_, i) => (i * 2.39996) % TAU), win: [Math.round(S[0] - 12), Math.round(S[1] - 12), 24] });
      return A;
    })();
    const REDUCE_AIR = matchMedia('(prefers-reduced-motion: reduce)').matches;
    function air(g, x, y, w, h, t){
      if (!AIR) { lab(g, '자료(res_layers.js · kr_grid_stations.js)를 읽지 못했다', x + w / 2, y + h / 2, 16, '#F87171'); return; }
      if (REDUCE_AIR) t = 99;
      const { D, N, NF, ST, cv, P, E, ord, ph, win } = AIR, base = g.globalAlpha;
      const f = (t * 1000 / 520) % NF, ok = AIR.paint(f);
      const S = Math.min(h - 30, w * .5), mx = x + 18, my = y + 6, k = S / N;            // 왼쪽 — 수도권 150 km
      const ix = mx + S + 34, I = Math.min(w - (ix - x) - 18, S - 50), iy = my, kz = I / win[2];   // 오른쪽 — 서울 도심 확대
      const gu = ease(t / .9), su = i => ease((t - .5 - ord[i] * 1.1) / .35), eu = (a, b) => ease((t - 1.2 - Math.max(ord[a], ord[b]) * 1.2) / .6);
      const tw = i => .55 + .45 * Math.sin(t * 3.1 + ph[i]) * Math.sin(t * 1.7 + ph[i] * 1.6);   // 반짝임
      // 그물 한 판(지도 · 확대가 같이 쓴다) — toXY 는 칸 좌표 → 화면, r 은 점 반지름, lw 는 선 굵기
      const net = (toXY, r, lw) => {
        g.lineCap = 'round';
        E.forEach(([a, b]) => { const u = eu(a, b); if (u <= 0) return; g.globalAlpha = base * .5; ln(g, toXY(P[a]), toXY(P[b]), 'rgba(235,242,250,1)', lw, u); });
        E.forEach(([a, b], e) => { if (eu(a, b) < 1) return; const q = (t * .32 + e * .6180339) % 1; if (q > .07) return;   // 간선을 따라 흐르는 빛
          const A = toXY(P[a]), B = toXY(P[b]), s = q / .07, px = A[0] + (B[0] - A[0]) * s, py = A[1] + (B[1] - A[1]) * s;
          g.globalAlpha = base * (1 - Math.abs(2 * s - 1)) * .9; dot(g, px, py, lw * 1.8, '#FFE8A3'); });
        P.forEach((p, i) => { const u = su(i); if (u <= 0) return; const [px, py] = toXY(p), v = tw(i);
          g.globalAlpha = base * u * (.18 + .3 * v); dot(g, px, py, r * (2.2 + 1.6 * v), '#FFD08A');      // 번지는 빛
          g.globalAlpha = base * u; dot(g, px, py, r * u, '#FFFFFF', '#FD9D24', Math.max(1, r * .45)); });
        g.globalAlpha = base;
      };
      // 왼쪽 지도 — 1 km 농도 칸 + 측정소 그물
      g.globalAlpha = base; g.fillStyle = '#12243c'; g.fillRect(mx, my, S, S);
      if (ok) { g.globalAlpha = base * gu; g.imageSmoothingEnabled = false; g.drawImage(cv, mx, my, S, S); g.imageSmoothingEnabled = true; g.globalAlpha = base; }
      g.save(); g.beginPath(); g.rect(mx, my, S, S); g.clip(); net(p => [mx + p[0] * k, my + p[1] * k], 2.4, 1); g.restore();
      g.strokeStyle = 'rgba(220,232,242,.55)'; g.lineWidth = 1; g.strokeRect(mx, my, S, S);
      // 확대 창 표시와 잇는 선
      const [c0, r0, nz] = win, bx = mx + c0 * k, by = my + r0 * k, bw = nz * k, zu = ease((t - 2.2) / .6);
      if (zu > 0) { g.globalAlpha = base * zu; g.strokeStyle = '#FFFFFF'; g.lineWidth = 1.6; g.strokeRect(bx, by, bw, bw);
        g.strokeStyle = 'rgba(255,255,255,.35)'; g.lineWidth = 1; ln(g, [bx + bw, by], [ix, iy], g.strokeStyle, 1); ln(g, [bx + bw, by + bw], [ix, iy + I], g.strokeStyle, 1);
        // 오른쪽 확대 — 1 km 칸 경계까지
        g.fillStyle = '#12243c'; g.fillRect(ix, iy, I, I);
        if (ok) { g.imageSmoothingEnabled = false; g.drawImage(cv, c0, r0, nz, nz, ix, iy, I, I); g.imageSmoothingEnabled = true; }
        g.strokeStyle = 'rgba(11,24,48,.55)'; g.lineWidth = 1; g.beginPath();
        for (let q = 1; q < nz; q++) { g.moveTo(ix + q * kz, iy); g.lineTo(ix + q * kz, iy + I); g.moveTo(ix, iy + q * kz); g.lineTo(ix + I, iy + q * kz); } g.stroke();
        g.save(); g.beginPath(); g.rect(ix, iy, I, I); g.clip(); net(p => [ix + (p[0] - c0) * kz, iy + (p[1] - r0) * kz], 5, 2); g.restore();
        g.globalAlpha = base * zu; g.strokeStyle = '#FFFFFF'; g.lineWidth = 1.6; g.strokeRect(ix, iy, I, I);
        lab(g, '서울 도심 24 × 24 km — 칸 하나 = 1 km 격자 노드', ix, iy + I + 20, 14, '#3FA4DA', 'left', 700); g.globalAlpha = base; }
      // 글 — 지도 아래 · 색막대 · 시각
      lab(g, `측정소 ${P.length}곳 = 노드`, mx, my + S + 20, 15, '#FD9D24', 'left', 700);
      lab(g, '수도권 150 × 150 km · 1 km 격자', mx + S, my + S + 20, 14, '#9FB0BC', 'right', 600);
      const ly = iy + I + 34, lw2 = Math.min(200, I * .62), lg = g.createLinearGradient(ix, 0, ix + lw2, 0); ST.forEach(([s, c]) => lg.addColorStop(s, `rgb(${c.join(',')})`));
      g.fillStyle = lg; g.fillRect(ix, ly, lw2, 8);
      lab(g, '0', ix, ly + 22, 12, '#9FB0BC', 'left', 500); lab(g, `${D.vmax} ppb NO₂`, ix + lw2, ly + 22, 12, '#9FB0BC', 'right', 500);
      const [md, hh] = D.frames_kst[Math.floor(f) % NF].split(' '), [mo, dd] = md.split('-');
      lab(g, `${+mo}월 ${+dd}일 ${hh}`, ix + I, ly + 9, 14, '#E6EDF3', 'right', 700);
    }
    return window.KH_conceptIntro({
      head: '그래프 — 관계가 있는 곳이라면 어디든',
      finalCue: 10,
      cards: [
        { c: 2, t: '분자생물학 · 화학', s: '분자의 성질 예측', ref: ['chemprop'], draw: mol },
        { c: 4, t: '의학', s: '항생제 후보 발견 · 약물 부작용', ref: ['halicin', 'decagon'], draw: med },
        { c: 5, t: '사회관계망(SNS)', s: '친구 추천', ref: ['friendrank'], draw: sns },
        { c: 7, t: '금융 · 보안', s: '이상 거래 탐지', ref: ['gad'], draw: fin },
        { c: 8, t: '교통', s: '도착 시간 예측', ref: ['gmaps_eta'], draw: road },
        { c: 8.5, t: '기상', s: '전지구 날씨 예보', ref: ['graphcast'], draw: wx },
      ],
      final: { t: '대기환경 · 고해상도 농도장', s: '측정소와 격자를 노드로 두면 — 그래프 신경망을 응용할 수 있다', draw: air },
      caps: [[1, '그래프 = 점(노드) + 선(간선) — 관계를 나타낸 구조'], [2, '원자가 점, 화학 결합이 선'], [4, '분자 그래프로 항생제 후보 · 약의 부작용 예측'],
        [5, '사람이 점, 친구 관계가 선 — 친구의 친구를 추천'], [7, '주변과 다르게 움직이는 점 — 이상 거래'], [8, '도로망 · 지구 그물망 위의 예측'],
        [9, '관계가 있으면 그래프가 된다'], [10, '측정소 · 격자를 노드로 — 고해상도 농도장에 응용']],
    });
  })();

/* ── 건화 덱 연결 — 클릭(다음 키) 세 번(2026-11-10 사용자 지시) ──
   0 들어옴: 제목만 · 1 다음: 여섯 분야 카드가 차례로(약 0.6초 간격) · 2 다음: '대기환경 · 고해상도 농도장' 마무리 · 3 다음: 11쪽.
   그림(conceptIntro)은 문장 시각표 I.cues 로 카드 · 자막을 켠다 — 원본 내레이션 시각(64초) 대신 카드가 이어 나오도록 줄인 시각표를 쓰고,
   마무리(문장 10 · 11)는 2단계에 들어설 때 그 시각을 채워 켠다. 카드 ↔ 문장 — 분자 2 · 의학 4 · SNS 5 · 금융 7 · 교통 8 · 기상 8.5 · 마무리 10. */
(function(){
  const sec = document.getElementById('s-gnn'); if (!sec) return;
  const panel = sec.querySelector('.vzp'), cv = panel.querySelector('canvas'), ctx = cv.getContext('2d'), W = 1000, H = 625;
  const CARDS = [0, .2, .6, .9, 1.2, 1.8, 2.1, 2.4, 3.0, 4.2];   // 문장 0–9 시각(초) — 카드 0.6 · 1.2 · 1.8 · 2.4 · 3.0 · 3.6
  const I = { dur: 1e9, cues: [] };
  const setFinal = at => { I.cues = CARDS.concat([at, at + 2.5]); };   // at = Infinity 면 마무리를 켜지 않는다
  const draw = window.KH_GNN_INTRO, REDUCE = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let raf = 0, t0 = 0, nt = 0, step = 0;

  /* 0단계 — 그래프 이론의 시초 · 쾨니히스베르크 다리 문제(2026-11-15 사용자 지시 "처음에는 오일러 사진과 쾨니히스베르크 다리 문제를 시각화").
     왼쪽 오일러 그림(서론영상/player/img/ai-euler.jpg — AI 생성 이미지, 서론 영상과 같은 그림. 실제 초상이 아니다), 오른쪽 강 · 땅 4곳 · 다리 7개 모식도.
     시각(초) — 다리 0.6–2.2 · 접힘 3.2–4.8(땅 = 노드, 다리 = 간선) · 한 번씩 건너 보기 5.4–8.4 · 막힘 8.4–9.4 · 닿는 간선 수(5 · 3 · 3 · 3) 9.8–10.6 · 끝 EUL_END.
     지도는 위상만 맞춘 모식도다(실제 강 모양 · 축척이 아니다). 근거는 ../sources.md '18쪽 0단계 쾨니히스베르크'.
     file:// 로 열므로 그림은 drawImage 만 한다(픽셀을 읽지 않는다). */
  const EUL_END = 11;   // 다 그려진 시각 — 뒤로 돌아오거나 움직임 줄이기면 이 시각부터 그린다
  const EULER = new Image(); EULER.src = 'image/ai-euler.jpg'; EULER.onload = () => { if (step === 0 && sec.classList.contains('on') && !raf) render(); };
  const ez = u => u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u);
  function euler(g, t){
    const F = "'Pretendard','Malgun Gothic',sans-serif", PI = Math.PI, TAU = PI * 2;
    const txt = (s, x, y, size, col, al, wt) => { g.font = `${wt || 600} ${size}px ${F}`; g.fillStyle = col; g.textAlign = al || 'left'; g.fillText(s, x, y); };
    const lerp = (a, b, u) => a + (b - a) * u, cl = u => u < 0 ? 0 : u > 1 ? 1 : u;
    const mix = (a, b, u) => `rgb(${a.map((v, i) => Math.round(lerp(v, b[i], u))).join(',')})`;
    const rr = (x, y, w, h, r) => { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); };
    const glow = (x, y, r, rgb, a) => { if (a <= 0 || r <= 0) return; const gr = g.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0, `rgba(${rgb},${a})`); gr.addColorStop(1, `rgba(${rgb},0)`); g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill(); };
    txt('그래프 이론의 시초 — 쾨니히스베르크 다리 문제', 24, 40, 22, '#E6EDF3', 'left', 700);

    // ── 왼쪽 — 오일러 그림(2:3, 비율을 지켜 잘라 맞춘다)
    const px = 25, py = 64, pw = 262, ph = 393;
    g.save(); rr(px, py, pw, ph, 10); g.clip(); g.fillStyle = '#16294a'; g.fillRect(px, py, pw, ph);
    if (EULER.complete && EULER.naturalWidth) { const s = Math.max(pw / EULER.naturalWidth, ph / EULER.naturalHeight), sw = pw / s, sh = ph / s;
      g.drawImage(EULER, (EULER.naturalWidth - sw) / 2, (EULER.naturalHeight - sh) * .2, sw, sh, px, py, pw, ph); }
    const pg = g.createLinearGradient(0, py + ph - 110, 0, py + ph); pg.addColorStop(0, 'rgba(11,24,48,0)'); pg.addColorStop(1, 'rgba(11,24,48,.6)');
    g.fillStyle = pg; g.fillRect(px, py + ph - 110, pw, 110); g.restore();
    rr(px + 1, py + 1, pw - 2, ph - 2, 9); g.strokeStyle = '#2c4470'; g.lineWidth = 2; g.stroke();
    txt('레온하르트 오일러', px, py + ph + 32, 22, '#E6EDF3', 'left', 700);
    txt('1707–1783 · 스위스 수학자', px, py + ph + 58, 16, '#9FB0BC', 'left', 500);
    txt('이미지 — AI 생성(서론 영상)', px, py + ph + 81, 13, '#7F92A1', 'left', 500);

    // ── 오른쪽 — 지도 판 → 그래프
    const X = 320, Y = 64, MW = 655, MH = 470;
    const mapIn = ez(t / .5), fold = ez((t - 3.2) / 1.6), fa = 1 - fold;          // 3.2 초부터 지도가 그래프로 접힌다
    g.save(); rr(X, Y, MW, MH, 10); g.clip();
    const bg = g.createLinearGradient(0, Y, 0, Y + MH); bg.addColorStop(0, '#0f2040'); bg.addColorStop(1, '#0a172d'); g.fillStyle = bg; g.fillRect(X, Y, MW, MH);
    if (fold > 0) { g.globalAlpha = .7 * fold; g.fillStyle = '#22375c';      // 접힌 뒤 바탕 — 점 모눈
      for (let x = X + 20; x < X + MW; x += 32) for (let y = Y + 19; y < Y + MH; y += 32) g.fillRect(x, y, 2, 2); g.globalAlpha = 1; }
    // 섬(가운데) 둘레의 고리 물길 · 서쪽 줄기 · 동쪽 두 갈래 — 땅 넷의 노드 자리(섬 A · 북쪽 B · 남쪽 C · 동쪽 D)
    const cx = X + 250, cy = Y + 240, rx = 118, ry = 80, RW = 36;
    const N = { A: [cx, cy], B: [cx + 30, Y + 66], C: [cx + 30, Y + 414], D: [X + 555, cy] }, RL = { A: 96, B: 230, C: 230, D: 165 };
    if (fa > 0) { const lg = g.createLinearGradient(X, Y, X + MW, Y + MH); lg.addColorStop(0, '#24406a'); lg.addColorStop(1, '#1a3054');
      g.globalAlpha = fa * mapIn; g.fillStyle = lg; g.fillRect(X, Y, MW, MH); g.globalAlpha = 1; }
    // 땅마다 은은한 빛 — 접힐 때 노드 자리로 오므라든다
    Object.keys(N).forEach(n => glow(N[n][0], N[n][1], lerp(RL[n], 58, fold), '118,169,237', mapIn * lerp(.3, .3 + .06 * Math.sin(t * 1.6), fold)));
    // 강 — 한 경로로 묶어 겹친 곳이 덧칠되지 않게 한다(흐름 무늬가 동 → 서로 가도록 동쪽에서 그린다)
    const ne = [cx + rx * Math.cos(.7), cy - ry * Math.sin(.7)], se = [ne[0], 2 * cy - ne[1]];
    const NC = [X + 450, cy - 112], NE = [X + MW + 30, cy - 158], SC = [NC[0], cy + 112], SE = [NE[0], cy + 158];
    const river = () => { g.beginPath(); g.moveTo(NE[0], NE[1]); g.quadraticCurveTo(NC[0], NC[1], ne[0], ne[1]); g.moveTo(SE[0], SE[1]); g.quadraticCurveTo(SC[0], SC[1], se[0], se[1]);
      g.moveTo(cx + rx, cy); g.ellipse(cx, cy, rx, ry, 0, 0, PI, true); g.moveTo(cx + rx, cy); g.ellipse(cx, cy, rx, ry, 0, 0, PI, false); g.moveTo(cx - rx, cy); g.lineTo(X - 30, cy); };
    if (fa > .01) { g.lineCap = 'round'; g.lineJoin = 'round'; g.globalAlpha = fa * mapIn;
      river(); g.strokeStyle = '#0c1a33'; g.lineWidth = RW + 12; g.stroke();                       // 강둑 그늘
      river(); g.strokeStyle = '#3d5f8f'; g.lineWidth = RW + 5; g.stroke();                        // 강둑
      const wg = g.createLinearGradient(X, Y, X + MW, Y + MH); wg.addColorStop(0, '#3FA4DA'); wg.addColorStop(.55, '#3587d0'); wg.addColorStop(1, '#2c6fbd');
      river(); g.strokeStyle = wg; g.lineWidth = RW; g.stroke();                                   // 물
      river(); g.strokeStyle = 'rgba(190,228,255,.16)'; g.lineWidth = RW * .45; g.stroke();        // 물 가운데 밝은 띠
      river(); g.strokeStyle = 'rgba(255,255,255,.42)'; g.lineWidth = 1.6; g.setLineDash([12, 30]); g.lineDashOffset = -t * 22; g.stroke(); g.setLineDash([]);   // 흐름
      txt('프레겔 강', X + 22, cy - 32, 16, '#bfe0fb', 'left', 600); g.globalAlpha = 1; }
    // 다리 일곱 — [땅, 땅, 다리 자리, 다리 방향(강을 가로지르는 각), 접힌 뒤 굽음]
    const armA = Math.atan2(ne[1] - NE[1], ne[0] - NE[0]), bN = [(ne[0] + NE[0]) / 4 + NC[0] / 2, (ne[1] + NE[1]) / 4 + NC[1] / 2], bS = [bN[0], 2 * cy - bN[1]];
    const BR = [['A', 'B', [cx - 42, cy - ry], PI / 2, -40], ['A', 'B', [cx + 42, cy - ry], PI / 2, 40], ['A', 'C', [cx - 42, cy + ry], PI / 2, 40], ['A', 'C', [cx + 42, cy + ry], PI / 2, -40],
      ['A', 'D', [cx + rx, cy], 0, 0], ['B', 'D', bN, armA + PI / 2, -22], ['C', 'D', bS, -armA + PI / 2, 22]];
    const show = i => ez((t - .6 - i * .21) / .35), cm = ez((fold - .2) / .8);
    // 다리 → 간선 — 노드 둘을 잇는 곡선이 다리 자리(곡선의 가운데)에서 양쪽 노드로 늘어나고, 가운데가 접힌 뒤 자리로 옮겨 간다
    const E = BR.map(([a, b, p, , bend]) => { const A = N[a], B = N[b], mx = (A[0] + B[0]) / 2, my = (A[1] + B[1]) / 2, dx = B[0] - A[0], dy = B[1] - A[1], L = Math.hypot(dx, dy),
      q = [mx - dy / L * bend, my + dx / L * bend], c = [lerp(p[0], q[0], cm), lerp(p[1], q[1], cm)];
      return { A, B, c, K: [2 * c[0] - mx, 2 * c[1] - my] }; });   // 조절점 K = 2c − (A+B)/2 — 곡선의 가운데가 c 를 지난다
    const pt = (e, s) => { const v = 1 - s; return [v * v * e.A[0] + 2 * v * s * e.K[0] + s * s * e.B[0], v * v * e.A[1] + 2 * v * s * e.K[1] + s * s * e.B[1]]; };
    const seg = (e, s0, s1) => { g.beginPath(); for (let i = 0; i <= 24; i++) { const p = pt(e, s0 + (s1 - s0) * i / 24); if (i) g.lineTo(p[0], p[1]); else g.moveTo(p[0], p[1]); } };
    if (fold > 0) { const h = .07 + .43 * fold, w = lerp(11, 3.6, fold), col = mix([255, 208, 138], [156, 196, 245], cl(fold * 1.4)); g.lineCap = 'round';
      E.forEach(e => { g.globalAlpha = cl(fold * 4) * .2; seg(e, .5 - h, .5 + h); g.strokeStyle = '#76A9ED'; g.lineWidth = w + 9; g.stroke();
        g.globalAlpha = cl(fold * 4); seg(e, .5 - h, .5 + h); g.strokeStyle = col; g.lineWidth = w; g.stroke(); }); g.globalAlpha = 1; }
    // 다리 판 — 그늘 · 상판 · 난간(접히면 사라진다)
    const ba = cl(1 - fold * 2.5);
    if (ba > 0) BR.forEach(([, , p, ang], i) => { const u = show(i); if (u <= 0) return; const k = .55 + .45 * u, bl = RW + 20, bw = 16;
      g.save(); g.globalAlpha = ba * u; g.translate(p[0], p[1]); g.rotate(ang); g.scale(k, k);
      g.fillStyle = 'rgba(3,9,20,.5)'; rr(-bl / 2 + 2, -bw / 2 + 4, bl, bw, 3); g.fill();
      const dg = g.createLinearGradient(0, -bw / 2, 0, bw / 2); dg.addColorStop(0, '#FFE0AE'); dg.addColorStop(.5, '#FFD08A'); dg.addColorStop(1, '#c9975a');
      g.fillStyle = dg; rr(-bl / 2, -bw / 2, bl, bw, 3); g.fill();
      g.strokeStyle = 'rgba(107,79,42,.55)'; g.lineWidth = 1; g.beginPath(); for (let x = -bl / 2 + 7; x < bl / 2 - 3; x += 7) { g.moveTo(x, -bw / 2 + 2); g.lineTo(x, bw / 2 - 2); } g.stroke();
      g.strokeStyle = '#6b4f2a'; g.lineWidth = 1.6; rr(-bl / 2, -bw / 2, bl, bw, 3); g.stroke(); g.restore(); });
    // 한 번씩 건너 보기 — B 에서 떠나 여섯 다리를 건너면 D 에서 막히고 다리 하나(3)가 남는다. [간선, 거꾸로]
    const WALK = [[0, 1], [2, 0], [6, 0], [4, 1], [1, 0], [5, 0]], LEFT = 3, W0 = 5.4, SEG = .5, wt = (t - W0) / SEG;
    const tf = 1 - ez((t - 9.4) / .6), stuck = ez((t - (W0 + SEG * WALK.length)) / .3);      // tf — 발자취가 걷히는 정도
    if (wt > 0 && tf > 0) { g.lineCap = 'round';
      WALK.forEach(([i, rev], k) => { const u = cl(wt - k); if (u <= 0) return; const e = E[i], s0 = rev ? 1 : 0, s1 = rev ? 1 - u : u;
        g.globalAlpha = tf * .28; seg(e, s0, s1); g.strokeStyle = '#FD9D24'; g.lineWidth = 13; g.stroke();
        g.globalAlpha = tf; seg(e, s0, s1); g.strokeStyle = '#FFB652'; g.lineWidth = 4.6; g.stroke(); });
      WALK.forEach(([i], k) => { const u = ez((wt - k - .5) / .3); if (u <= 0) return; const c = E[i].c;      // 건넌 순서
        g.globalAlpha = tf * u; g.beginPath(); g.arc(c[0], c[1], 12, 0, TAU); g.fillStyle = '#0b1830'; g.fill(); g.strokeStyle = '#FD9D24'; g.lineWidth = 2; g.stroke();
        txt(String(k + 1), c[0], c[1] + 5, 14, '#FFD08A', 'center', 800); });
      if (stuck > 0) { const e = E[LEFT], c = e.c, bl = .55 + .45 * Math.sin(t * 7);      // 남은 다리 — 점선으로 깜박인다
        g.globalAlpha = tf * stuck * bl; seg(e, 0, 1); g.strokeStyle = '#FFD08A'; g.lineWidth = 4.6; g.setLineDash([9, 9]); g.stroke(); g.setLineDash([]);
        g.globalAlpha = tf * stuck; txt('남은 다리', c[0] + 14, c[1] + 5, 15, '#FFD08A', 'left', 700);
        const D = N.D; for (let j = 0; j < 2; j++) { const ph2 = (t * .9 + j * .5) % 1; g.globalAlpha = tf * stuck * (1 - ph2); g.beginPath(); g.arc(D[0], D[1], 26 + ph2 * 24, 0, TAU); g.strokeStyle = '#FD9D24'; g.lineWidth = 2.5; g.stroke(); }
        g.globalAlpha = tf * stuck; txt('길 막힘', D[0] + 36, D[1] + 5, 15, '#FFD08A', 'left', 700); }
      g.globalAlpha = 1; }
    // 노드 — 지도에서는 땅 표지, 접힌 뒤에는 빛나는 점. 홀수 점(넷 다)에 따뜻한 테
    const deg = { A: 5, B: 3, C: 3, D: 3 }, BD = { A: [-44, 0], B: [-44, -8], C: [-44, 8], D: [44, 0] };
    Object.keys(N).forEach((n, i) => { const p = N[n], r = lerp(15, 23, fold), du = ez((t - 9.8 - i * .12) / .4);
      g.globalAlpha = mapIn; g.beginPath(); g.arc(p[0], p[1], r, 0, TAU);
      const ng = g.createRadialGradient(p[0] - r * .35, p[1] - r * .4, 1, p[0], p[1], r); ng.addColorStop(0, mix([20, 36, 66], [196, 220, 252], fold)); ng.addColorStop(1, mix([11, 24, 48], [84, 142, 226], fold));
      g.fillStyle = ng; g.fill(); g.strokeStyle = mix([190, 208, 226], [222, 236, 255], fold); g.lineWidth = 2; g.stroke();
      txt(n, p[0], p[1] + lerp(5.5, 7.5, fold), lerp(16, 21, fold), mix([230, 237, 243], [11, 24, 48], cl(fold * 1.6)), 'center', 800);
      if (du > 0) { g.globalAlpha = du; g.beginPath(); g.arc(p[0], p[1], r + 6, 0, TAU); g.strokeStyle = '#FFD08A'; g.lineWidth = 2.5; g.stroke();
        const bx = p[0] + BD[n][0], by = p[1] + BD[n][1], br = 16 * (.6 + .4 * du);
        g.beginPath(); g.arc(bx, by, br, 0, TAU); g.fillStyle = '#FD9D24'; g.fill(); g.strokeStyle = '#0b1830'; g.lineWidth = 2; g.stroke();
        txt(String(deg[n]), bx, by + 6.5, 18, '#0b1830', 'center', 800); }
      g.globalAlpha = 1; });
    // 걷는 점
    if (wt > 0 && wt < WALK.length) { const k = Math.floor(wt), [i, rev] = WALK[k], u = ez(wt - k), p = pt(E[i], rev ? 1 - u : u);
      glow(p[0], p[1], 22, '255,208,138', .7); g.beginPath(); g.arc(p[0], p[1], 6.5, 0, TAU); g.fillStyle = '#FFF3DC'; g.fill(); }
    // 판 위 표지 — 세는 말이 '땅 · 다리'에서 '노드 · 간선'으로 바뀐다. 끝에는 숫자 풀이
    const chip = (s, a) => { if (a <= 0) return; g.globalAlpha = a * mapIn; g.font = `700 15px ${F}`; const w = g.measureText(s).width + 28, x = X + MW - 14 - w, y = Y + 14;
      rr(x, y, w, 30, 15); g.fillStyle = 'rgba(11,24,48,.74)'; g.fill(); g.strokeStyle = '#2c4470'; g.lineWidth = 1.5; g.stroke(); txt(s, x + w / 2, y + 20.5, 15, '#E6EDF3', 'center', 700); g.globalAlpha = 1; };
    chip('땅 4곳 · 다리 7개', 1 - fold * 2); chip('노드 4 · 간선 7', fold * 2 - 1);
    const lu = ez((t - 10.2) / .5);
    if (lu > 0) { g.globalAlpha = lu; g.beginPath(); g.arc(X + 26, Y + MH - 23, 7, 0, TAU); g.fillStyle = '#FD9D24'; g.fill();
      txt('숫자 — 노드에 닿는 간선 수', X + 40, Y + MH - 18, 14, '#9FB0BC', 'left', 500); g.globalAlpha = 1; }
    g.restore();
    rr(X + 1, Y + 1, MW - 2, MH - 2, 9); g.strokeStyle = '#2c4470'; g.lineWidth = 2; g.stroke();

    // ── 아래 자막 — 바뀔 때 잠깐 떠오른다
    const CAPS = [[0, '강으로 나뉜 땅 4곳 · 다리 7개 — 모든 다리를 한 번씩만 건너는 산책길이 있을까?'], [3.2, '땅은 점(노드), 다리는 선(간선) — 모양 · 거리를 지우고 연결만 남긴다'],
      [5.4, '모든 다리를 한 번씩만 — 직접 건너 본다'], [8.4, '다리 하나를 남기고 길이 막힌다'], [9.6, '닿는 다리 수가 홀수인 땅이 넷 — 홀수 점이 0개 또는 2개여야 하므로 그런 길은 없다']];
    let ci = 0; while (ci < CAPS.length - 1 && t >= CAPS[ci + 1][0]) ci++;
    g.fillStyle = 'rgba(11,24,48,.92)'; g.fillRect(0, 568, 1000, 57); g.fillStyle = '#24365a'; g.fillRect(0, 568, 1000, 1);
    let fs = 20; g.font = `600 ${fs}px ${F}`; while (g.measureText(CAPS[ci][1]).width > 950 && fs > 14) { fs--; g.font = `600 ${fs}px ${F}`; }
    g.globalAlpha = ez((t - CAPS[ci][0]) / .35 + (ci ? 0 : 1)); txt(CAPS[ci][1], 500, 604, fs, '#E6EDF3', 'center', 600); g.globalAlpha = 1;
  }

  function render(){
    const dpr = Math.min(2, devicePixelRatio || 1), cw = Math.round(panel.clientWidth * dpr), ch = Math.round(panel.clientHeight * dpr);
    if (!cw || !ch) return;
    if (cv.width !== cw || cv.height !== ch) { cv.width = cw; cv.height = ch; }
    ctx.setTransform(cw / W, 0, 0, ch / H, 0, 0); ctx.fillStyle = '#0b1830'; ctx.fillRect(0, 0, W, H);
    if (step === 0) euler(ctx, nt); else draw(ctx, nt, I);
  }
  const stop = () => { cancelAnimationFrame(raf); raf = 0; };
  function run(from){   // from 초부터 흐른다 — 카드 속 작은 움직임이 이어진다(장을 떠나면 멈춘다)
    stop(); nt = from; t0 = performance.now() - from * 1000;
    if (REDUCE) { render(); return; }
    const tick = now => { nt = (now - t0) / 1000; render(); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
  }
  const ALL = 6;   // 여섯 카드가 다 나온 시각(초) 언저리
  function go(k, instant){
    step = k;
    if (k === 0) { setFinal(Infinity); run(instant || REDUCE ? EUL_END : 0); return; }   // 쾨니히스베르크 — 들어오면 처음부터, 뒤로 오면 접힌 그래프
    if (k === 1) { setFinal(Infinity); run(instant || REDUCE ? ALL : 0); return; }
    const at = instant || REDUCE ? Math.max(nt, ALL) - 1 : Math.max(nt, ALL); setFinal(at); run(Math.max(nt, ALL));   // 2 — 마무리
  }
  // 이 덱 연결 — 단계 장치(덱 스크립트의 advance() 가 다음 · 이전을 먼저 보낸다). enter(지금, 직전) 은 장을 옮길 때마다 불린다
  const S = [...document.querySelectorAll('.slide')], idx = S.indexOf(sec);
  if (idx < 0) return;
  window.conceptSteppers = window.conceptSteppers || {};
  window.conceptSteppers[idx] = {
    step(d) { const k = step + d; if (k < 0 || k > 2) return false; go(k, d < 0); return true; },
    enter(now, was) { if (now === idx) go(was > now ? 2 : 0, was > now); else stop(); },
  };
  if (sec.classList.contains('on')) go(0, false);
  addEventListener('resize', () => { if (!raf && sec.classList.contains('on')) render(); });
  window.KHGnn = { get step(){ return step; }, get t(){ return nt; } };   // 점검 창구
})();
