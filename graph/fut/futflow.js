/* KSEIA 축약본 사본(2026-11-15) — 원본 ../../../ppt-건화ai-tft-20261208/발표덱/assets/js/kh-futflow.js(건화 덱 25쪽 .fut-flow). 바꾼 것 없음 —
   지금 장 표시(.is-active)는 deck_link.js 가 이 덱의 .on 에서 옮겨 단다. 원본을 고치면 그대로 다시 복사한다. */
/* 4장 향후 목표 개요(16쪽, .slide.fut-flow) — 입력 셋 → 가운데 딥러닝 네트워크와 그 둘레의 매체 넷(대기 · 수질 · 소음 · 생태) → 대안별 점수 산출 → 최적안.
   카드 · 글은 덱 HTML(DOM)이고, 이 파일은 그 뒤 캔버스(canvas.ffcv)에 바탕 · 배선 · 가운데 네트워크 · 매체별 기술 그림말을 그린다.
   2026-11-12 사용자 지시 — "중앙에 딥러닝 네트워크 중심으로 대기~생태 4개 아이템을 배치하여 각 아이템별 AI 기술을 형상화 … 1000 대안은 대기질·건강영향에만 … 대안별 점수를 산출하는 단계 … 다음에 최적안".
   그림말 — 대기: 서로게이트가 내는 농도장 격자 · 수질: 하천 노드 그래프 · 소음: 퍼지는 등음선 · 생태: 결정 나무(랜덤포레스트). 모두 장식(개념도)이다 — 자료 값이 아니다.
   담백하게 — 가는 선 · 평평한 면 · 배선 위를 지나가는 점 하나씩(같은 날 앞선 지시). 자리 값(카드 위치)은 덱 CSS 와 같아야 한다. */
(function () {
  "use strict";
  const slide = document.querySelector(".slide.fut-flow"); if (!slide) return;
  const cv = slide.querySelector("canvas.ffcv"), g = cv.getContext("2d");
  const W = 1920, H = 1080, TAU = Math.PI * 2;
  const PRINT = new URLSearchParams(location.search).has("print");
  const CX = 850, CY = 530, CR = 118;                                    // 가운데 네트워크
  const IN = [316, 530, 744];                                            // 입력 카드 가운데 y
  const MED = [                                                          // 매체 카드 — [왼쪽, 위, 색, 그림말] (너비 330 · 높이 150)
    [404, 204, "#7fd0ff", "air", 366, 196], [930, 220, "#3fd0d3", "water", 330, 150], [440, 690, "#f0b050", "noise", 330, 150], [930, 690, "#7fe0a8", "eco", 330, 150]];   // 끝 둘 = 너비 · 높이. 대기 · 건강영향 카드는 키웠다(2026-11-12 사용자 지시)
  const GS = 84;                                                         // 그림말 한 변
  const LINE = "rgba(127,190,255,.34)", DOT = "#bfe4ff";
  const WIRES = [];                                                      // 3차 베지어 [x0,y0, x1,y1, x2,y2, x3,y3]
  IN.forEach(y => WIRES.push([360, y, 400, y, 400, CY + (y - CY) * .22, 420, CY + (y - CY) * .22]));
  WIRES.push([420, CY, 520, CY, 640, CY, CX - CR - 12, CY]);             // 입력 묶음 → 네트워크
  WIRES.push([CX + CR + 12, CY, 1080, CY, 1240, CY, 1350, CY]);          // 네트워크 → 점수 산출
  WIRES.push([1650, CY, 1680, CY, 1690, CY, 1720, CY]);                  // 점수 → 최적안
  const SP = MED.map(([x, y, , , w, h], i) => { const cx = i === 0 ? x + w - 110 : x + w / 2, cy = y + (i < 2 ? h : 0), a = Math.atan2(cy - CY, cx - CX); return [CX + (CR + 12) * Math.cos(a), CY + (CR + 12) * Math.sin(a), cx, cy]; });   // 네트워크 ↔ 매체 카드
  const bz = (w, u) => { const v = 1 - u; return [v * v * v * w[0] + 3 * v * v * u * w[2] + 3 * v * u * u * w[4] + u * u * u * w[6], v * v * v * w[1] + 3 * v * v * u * w[3] + 3 * v * u * u * w[5] + u * u * u * w[7]]; };
  // 네트워크 — 층 넷(3 · 5 · 5 · 3)
  const LAY = [3, 5, 5, 3], NODE = []; LAY.forEach((n, L) => { for (let k = 0; k < n; k++) NODE.push([CX - 66 + L * 44, CY + (k - (n - 1) / 2) * (n === 5 ? 32 : 46), L]); });
  const EDGE = []; NODE.forEach((a, i) => NODE.forEach((b, j) => { if (b[2] === a[2] + 1) EDGE.push([i, j]); }));

  const bg = document.createElement("canvas"); bg.width = W; bg.height = H;
  { const x = bg.getContext("2d"), gr = x.createRadialGradient(CX, CY, 80, CX, CY, 1250); gr.addColorStop(0, "#0a1830"); gr.addColorStop(.6, "#060d1c"); gr.addColorStop(1, "#03060e"); x.fillStyle = gr; x.fillRect(0, 0, W, H); }

  function glyph(kind, x, y, col, t) {                                    // 카드 안 왼쪽 84 × 84 그림말
    g.save(); g.translate(x, y); g.strokeStyle = col; g.fillStyle = col; g.lineWidth = 1.6; g.lineCap = "round"; g.lineJoin = "round";
    if (kind === "air") {                                                // 농도장 격자 — 왼쪽 아래 배출원에서 번지는 값
      const n = 6, c = GS / n; for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) { const d = Math.hypot(i - .5 - 1.2 * Math.sin(t * .5), (n - 1 - j) - .5 - (i * .55)), v = Math.max(0, 1 - d / 3.4) * (.75 + .25 * Math.sin(t * 1.4 + i));
        g.globalAlpha = .1 + .8 * v; g.fillRect(i * c + 1.5, j * c + 1.5, c - 3, c - 3); } g.globalAlpha = 1;
    } else if (kind === "water") {                                       // 하천 노드 그래프 — 지류가 본류로 모여 하류로
      const P = [[10, 12], [30, 30], [14, 50], [30, 30], [50, 46], [72, 38], [50, 46], [62, 72]], N = [[10, 12], [14, 50], [30, 30], [50, 46], [72, 38], [62, 72]];
      g.globalAlpha = .7; g.beginPath(); g.moveTo(10, 12); g.lineTo(30, 30); g.lineTo(50, 46); g.lineTo(62, 72); g.moveTo(14, 50); g.lineTo(30, 30); g.moveTo(72, 38); g.lineTo(50, 46); g.stroke(); g.globalAlpha = 1;
      const hit = Math.floor(t * 1.2) % 4, seq = [[0], [2], [3], [5]];
      N.forEach((p, i) => { g.globalAlpha = seq[hit].includes(i) ? 1 : .45; g.beginPath(); g.arc(p[0], p[1], seq[hit].includes(i) ? 6 : 4.2, 0, TAU); g.fill(); }); g.globalAlpha = 1;
    } else if (kind === "noise") {                                       // 퍼지는 등음선
      for (let k = 0; k < 4; k++) { const r = ((t * .22 + k / 4) % 1) * 46 + 4; g.globalAlpha = (1 - r / 50) * .95; g.beginPath(); g.arc(GS / 2, GS / 2, r, 0, TAU); g.stroke(); }
      g.globalAlpha = 1; g.beginPath(); g.arc(GS / 2, GS / 2, 4, 0, TAU); g.fill();
    } else {                                                             // 결정 나무(랜덤포레스트)
      const T = [[42, 10], [22, 38], [62, 38], [10, 68], [32, 68], [52, 68], [74, 68]], E2 = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]];
      g.globalAlpha = .7; E2.forEach(([a, b]) => { g.beginPath(); g.moveTo(T[a][0], T[a][1]); g.lineTo(T[b][0], T[b][1]); g.stroke(); }); g.globalAlpha = 1;
      const leaf = 3 + Math.floor(t * 1.1) % 4, path = leaf < 5 ? [0, 1, leaf] : [0, 2, leaf];
      T.forEach((p, i) => { const on = path.includes(i); g.globalAlpha = on ? 1 : .45; g.beginPath(); g.arc(p[0], p[1], on ? 6 : 4.2, 0, TAU); g.fill(); }); g.globalAlpha = 1;
    }
    g.restore();
  }

  function draw(t) {
    g.drawImage(bg, 0, 0);
    g.lineCap = "round"; g.strokeStyle = LINE; g.lineWidth = 1.4;
    WIRES.forEach(w => { g.beginPath(); g.moveTo(w[0], w[1]); g.bezierCurveTo(w[2], w[3], w[4], w[5], w[6], w[7]); g.stroke(); });
    SP.forEach(([x0, y0, x1, y1], i) => { g.strokeStyle = MED[i][2]; g.globalAlpha = .5; g.beginPath(); g.moveTo(x0, y0); g.lineTo(x1, y1); g.stroke(); g.globalAlpha = 1;
      const u = (t * .3 + i * .25) % 1, f = .5 - .5 * Math.cos(u * TAU), x = x0 + (x1 - x0) * f, y = y0 + (y1 - y0) * f; g.fillStyle = MED[i][2]; g.beginPath(); g.arc(x, y, 3, 0, TAU); g.fill(); });   // 네트워크와 매체 사이를 오가는 점
    g.strokeStyle = LINE;
    WIRES.forEach((w, i) => { const u = (t * .24 + i * .31) % 1.3; if (u > 1) return; const [x, y] = bz(w, u), a = Math.sin(u * Math.PI);
      g.globalAlpha = a * .35; g.fillStyle = DOT; g.beginPath(); g.arc(x, y, 7, 0, TAU); g.fill(); g.globalAlpha = a; g.beginPath(); g.arc(x, y, 2.6, 0, TAU); g.fill(); });
    g.globalAlpha = 1;
    // 가운데 딥러닝 네트워크
    const halo = g.createRadialGradient(CX, CY, CR * .7, CX, CY, CR * 1.8); halo.addColorStop(0, "rgba(70,140,255,.2)"); halo.addColorStop(1, "rgba(70,140,255,0)"); g.fillStyle = halo; g.beginPath(); g.arc(CX, CY, CR * 1.8, 0, TAU); g.fill();
    const core = g.createRadialGradient(CX, CY - 30, 10, CX, CY, CR); core.addColorStop(0, "#12346f"); core.addColorStop(1, "#06173f"); g.fillStyle = core; g.beginPath(); g.arc(CX, CY, CR, 0, TAU); g.fill();
    g.strokeStyle = "rgba(150,210,255,.9)"; g.lineWidth = 1.6; g.beginPath(); g.arc(CX, CY, CR, 0, TAU); g.stroke();
    const a0 = t * .35; g.strokeStyle = "rgba(127,190,255,.22)"; g.lineWidth = 1; g.beginPath(); g.arc(CX, CY, CR + 18, 0, TAU); g.stroke();
    g.strokeStyle = "rgba(160,220,255,.95)"; g.lineWidth = 2; g.beginPath(); g.arc(CX, CY, CR + 18, a0, a0 + 1.0); g.stroke();
    g.lineWidth = 1; g.strokeStyle = "rgba(150,205,255,.2)"; EDGE.forEach(([i, j]) => { g.beginPath(); g.moveTo(NODE[i][0], NODE[i][1]); g.lineTo(NODE[j][0], NODE[j][1]); g.stroke(); });
    for (let k = 0; k < 7; k++) { const e = EDGE[(Math.floor(t * 1.6 + k * 7.3) * 13 + k * 5) % EDGE.length], u = (t * 1.6 + k * 7.3) % 1, A = NODE[e[0]], B = NODE[e[1]];   // 층 사이를 건너가는 신호
      g.strokeStyle = "rgba(190,230,255,.85)"; g.lineWidth = 1.6; g.beginPath(); g.moveTo(A[0], A[1]); g.lineTo(A[0] + (B[0] - A[0]) * u, A[1] + (B[1] - A[1]) * u); g.stroke(); }
    NODE.forEach(([x, y, L], i) => { const on = .55 + .45 * Math.sin(t * 2 + i * 1.7); g.fillStyle = `rgba(190,230,255,${.55 + .45 * on})`; g.beginPath(); g.arc(x, y, 4.6, 0, TAU); g.fill(); });
    // 매체별 기술 그림말
    MED.forEach(([x, y, col, kind, w, h]) => { const k = kind === "air" ? 1.22 : 1; g.save(); g.translate(x + 22, y + (h - GS * k) / 2); g.scale(k, k); glyph(kind, 0, 0, col, t); g.restore(); });
  }
  if (PRINT) { draw(3); return; }
  const t0 = performance.now();
  (function loop(now) { if (slide.classList.contains("is-active")) draw((now - t0) / 1000); requestAnimationFrame(loop); })(t0);
})();
