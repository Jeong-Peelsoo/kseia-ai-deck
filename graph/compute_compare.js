/* KSEIA 축약본 사본(2026-11-12) — 원본 ../../ppt-건화ai-tft-20261208/발표덱/assets/js/kh-compute.js. 바꾼 것은 색 상수 C 하나뿐이다(이 덱의 녹색 규칙).
   원본을 고치면 다시 복사하고 C 를 다시 바꾼다. 장 조각은 ../parts/s-compute.html, 끼우기는 ../scripts/build_short_deck.py. */
/* 9쪽 연산자원 비교(#s-compute, 2026-11-12 사용자 지시) — 그래프 둘을 SVG 로 그린다.
   1 해상도 9 → 3 → 1 km 에서 늘어나는 양(로그 축 꺾은선) + 3 km · 1 km 에서 두 선의 차이 배수 · 2 한반도 1 km · 1년 농도장 계산시간(로그 축 점 그림) + 같은 구축비 1억 원 비교.
   자료 — ../material/AMR_HGN_글로벌_기상AI_연산경제성_비교보고서_20261112.md
     · SCALE: 2.1절 표(이론 = CFL 조건의 이상화 (Δx)⁻³ · WRF–CMAQ 실무 가정 [S] · AMR-HGN 노드 수 가정 [S])
     · TIME : 3.1절(WRF–CMAQ 인프라, 일) · 3.2절(AMR-HGN GPU 인프라, 분) 의 1 km 열 [S]
   ⚠ [S] 는 보고서의 '사용자 시나리오 가정'이다 — 실측이 아니다. 화면 아래 줄에 밝힌다.
   ⚠ 구축비 둘은 보고서 값이 아니라 사용자가 정했다(2026-11-12 지시) — GPU 워크스테이션(보고서 '단일 프로 GPU') 0.35억 → 1억 원, 보급형 GPU 0.1억 → 0.2억 원. 이름표에 '1대'는 쓰지 않는다(같은 날 지시). 계산시간(18분 · 35분)은 보고서 그대로다.
   ⚠ 배수는 여기서 나눗셈만 한다 — 3 km 22 ÷ 3.5, 1 km 500 ÷ 12(WRF–CMAQ 연산량 ÷ AMR-HGN 노드 수 — 같은 물리량의 비가 아니다, 보고서 2.2절), 같은 1억 원 2,000일 ÷ 18분(화면에는 '수만 배 이상'으로만 적는다).
   색 — 덱 의미 규칙: 기존 = 회색(--gray), AI = 하늘색(--sky). 이론선은 옅은 회색 점선(참고선). 강조 배수는 남색 알약. 글자는 글자색만 쓴다. */
(function () {
  const sec = document.getElementById('s-compute'); if (!sec) return;
  const NS = 'http://www.w3.org/2000/svg';
  const C = { old: '#727482', ai: '#00A040', ref: '#a9adb8', navy: '#004D26', grid: '#e3e7ee', band: '#e7f4ec' };   // KSEIA 색 — AI = 브랜드 녹색 · 강조 = deep(종전 건화 하늘 · 남색)
  const el = (tag, at, txt) => { const e = document.createElementNS(NS, tag); for (const k in at) e.setAttribute(k, at[k]); if (txt != null) e.textContent = txt; return e; };
  const tip = (e, t) => { e.appendChild(el('title', {}, t)); return e; };
  const times = r => r >= 100 ? '약 ' + Math.round(r / 1e4) + '만 배' : r >= 10 ? '약 ' + Math.round(r) + '배' : '약 ' + r.toFixed(1) + '배';
  // 남색 알약 — 가운데 (cx, cy)
  const tw = (txt, fs) => [...txt].reduce((a, c) => a + (c === ' ' ? .3 : /[0-9.]/.test(c) ? .62 : 1), 0) * fs + 30;   // 알약 너비 어림
  const pill = (svg, cx, cy, txt, fs) => { const w = tw(txt, fs), h = fs + 18, g = el('g', { class: 'pill' });
    g.appendChild(el('rect', { x: cx - w / 2, y: cy - h / 2, width: w, height: h, rx: h / 2, fill: C.navy }));
    g.appendChild(el('text', { x: cx, y: cy + fs * .36, 'text-anchor': 'middle', class: 'pt-t', 'font-size': fs }, txt)); svg.appendChild(g); return w; };

  /* ── 1 해상도별 증가(9 km = 1배) ── */
  const SCALE = { x: ['9 km', '3 km', '1 km'],
    theory: [1, 27, 729],     // 이론 연산량 — 수평 격자 81배 × 적분 스텝 9배
    ctm:    [1, 22, 500],     // WRF–CMAQ 실무 연산량 가정 [S]
    ai:     [1, 3.5, 12] };   // AMR-HGN 적응형 노드 수 가정 [S]
  (function () {
    const svg = sec.querySelector('.cg1 svg'); if (!svg) return;
    const W = 540, H = 596, L = 64, R = 176, T = 34, B = 54;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const X = i => L + (W - L - R) * i / 2, Y = v => T + (H - T - B) * (1 - Math.log10(v) / 3);
    [1, 10, 100, 1000].forEach(v => { svg.appendChild(el('line', { x1: L, x2: W - R + 14, y1: Y(v), y2: Y(v), stroke: C.grid, 'stroke-width': 1.5 }));
      svg.appendChild(el('text', { x: L - 12, y: Y(v) + 7, 'text-anchor': 'end', class: 'ax' }, v.toLocaleString() + '×')); });
    SCALE.x.forEach((s, i) => svg.appendChild(el('text', { x: X(i), y: H - 16, 'text-anchor': 'middle', class: 'ax b' }, s)));
    const path = a => a.map((v, i) => (i ? 'L' : 'M') + X(i) + ' ' + Y(v)).join(' ');
    const series = [
      { k: 'theory', col: C.ref, w: 3, dash: '7 7', name: '이론 (Δx)⁻³', dy: -14 },
      { k: 'ctm', col: C.old, w: 5, name: 'WRF–CMAQ 연산량', dy: 30 },
      { k: 'ai', col: C.ai, w: 6, name: 'AMR-HGN 노드 수', dy: 7 } ];
    series.forEach(s => { const a = SCALE[s.k];
      const p = el('path', { d: path(a), fill: 'none', stroke: s.col, 'stroke-width': s.w, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', class: 'ln' });
      if (s.dash) p.setAttribute('stroke-dasharray', s.dash); else p.setAttribute('pathLength', 1);
      svg.appendChild(p); });
    // 3 km · 1 km 에서 두 선의 차이 — 세로 양끝 화살 + 남색 알약
    [1, 2].forEach(i => { const y0 = Y(SCALE.ctm[i]) + 16, y1 = Y(SCALE.ai[i]) - 16, x = X(i), g = el('g', { class: 'gap' });
      g.appendChild(el('line', { x1: x, x2: x, y1: y0, y2: y1, stroke: C.navy, 'stroke-width': 3 }));
      g.appendChild(el('path', { d: `M${x - 7} ${y0 + 10}L${x} ${y0}L${x + 7} ${y0 + 10}M${x - 7} ${y1 - 10}L${x} ${y1}L${x + 7} ${y1 - 10}`, fill: 'none', stroke: C.navy, 'stroke-width': 3, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }));
      svg.appendChild(g);
      const txt = times(SCALE.ctm[i] / SCALE.ai[i]), fs = i === 2 ? 34 : 27;
      if (i === 1) pill(svg, x + 44, Y(SCALE.ai[i]) + 50, txt, fs);   // 3 km — 두 선 사이가 좁아 화살 바로 아래에 둔다
      else pill(svg, x, (y0 + y1) / 2, txt, fs); });
    series.forEach(s => { const a = SCALE[s.k];
      a.forEach((v, i) => { if (!s.dash) svg.appendChild(tip(el('circle', { cx: X(i), cy: Y(v), r: 8, fill: s.col, stroke: '#fff', 'stroke-width': 2.5, class: 'pt' }), `${s.name} · ${SCALE.x[i]} — ${v}×`)); });
      const g = el('g', { class: 'lab' }), y = Y(a[2]) + s.dy;
      g.appendChild(el('text', { x: W - R + 26, y, class: 'val' + (s.k === 'ai' ? ' hot' : s.k === 'theory' ? ' dim' : '') }, a[2].toLocaleString() + '×'));
      g.appendChild(el('text', { x: W - R + 26, y: y + 22, class: 'nm' }, s.name));
      svg.appendChild(g); });
  })();

  /* ── 2 한반도 1 km · 1년(8,760 h) 농도장 계산시간 — 분 단위 로그 축. 같은 구축비 1억 원 두 줄(.same)을 맞붙여 강조한다 ── */
  const D = 1440;   // 1일 = 1,440분
  const TIME = [
    { g: 'ctm', hw: '약 61만 코어', cost: '600억 원', min: 1.19 * D, lab: '1.19일' },
    { g: 'ctm', hw: '약 3,000코어', cost: '50억 원', min: 114 * D, lab: '114일' },
    { g: 'ctm', hw: '512코어', cost: '10억 원', min: 568 * D, lab: '568일' },
    { g: 'ctm', hw: '128코어', cost: '1억 원', min: 2000 * D, lab: '2,000일', same: 1 },
    { g: 'ai', hw: 'GPU 워크스테이션', cost: '1억 원', min: 18, lab: '18분', same: 1 },      // 구축비 — 사용자 지정(보고서 0.35억)
    { g: 'ai', hw: '보급형 GPU', cost: '0.2억 원', min: 35, lab: '35분' },           // 구축비 — 사용자 지정(보고서 0.1억)
    { g: 'ai', hw: 'AI 서버', cost: '3억 원', min: 3.5, lab: '3.5분' } ];
  (function () {
    const svg = sec.querySelector('.cg2 svg'); if (!svg) return;
    const W = 660, H = 596, L = 226, R = 160, T = 14, B = 54, HEAD = 42, GAP = 46;   // HEAD 36 → 42 · GAP 52 → 46 — 묶음 이름 글씨를 키웠다(2026-11-15)
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const X = m => L + (W - L - R) * (Math.log10(m) / 7);   // 1분 – 10⁷분(약 19년)
    const ticks = [[1, '1분'], [60, '1시간'], [D, '1일'], [30 * D, '1달'], [365 * D, '1년'], [3650 * D, '10년']];
    const rowH = (H - T - B - HEAD * 2 - GAP) / TIME.length; let y = T, prev = ''; const pos = [];
    const back = el('g', {}), front = el('g', {}); svg.appendChild(back);
    ticks.forEach(([m, s]) => { svg.appendChild(el('line', { x1: X(m), x2: X(m), y1: T, y2: H - B + 6, stroke: C.grid, 'stroke-width': 1.5 }));
      svg.appendChild(el('text', { x: X(m), y: H - 16, 'text-anchor': 'middle', class: 'ax' }, s)); });
    svg.appendChild(front);
    TIME.forEach(r => {
      if (r.g !== prev) { if (prev) y += GAP; const hy = prev ? y : y;
        front.appendChild(el('rect', { x: 0, y: hy + 6, width: 6, height: HEAD - 12, rx: 3, fill: r.g === 'ai' ? C.ai : C.old }));
        front.appendChild(el('text', { x: 16, y: hy + 30, class: 'grp' }, r.g === 'ai' ? 'AI 추론 · AMR-HGN (GPU)' : '물리방정식 · WRF–CMAQ (CPU)')); y += HEAD; prev = r.g; }
      const cy = y + rowH / 2, col = r.g === 'ai' ? C.ai : C.old;
      if (r.same) back.appendChild(el('rect', { x: 0, y: y + 2, width: W, height: rowH - 4, rx: 8, fill: C.band, class: 'band' }));
      front.appendChild(el('text', { x: L - 18, y: cy - (r.same ? 4 : 1), 'text-anchor': 'end', class: 'hw' + (r.same ? ' same' : '') }, r.hw));
      front.appendChild(el('text', { x: L - 18, y: cy + (r.same ? 22 : 19), 'text-anchor': 'end', class: 'cost' + (r.same ? ' same' : '') }, '구축비 ' + r.cost));
      front.appendChild(el('line', { x1: L, x2: X(r.min), y1: cy, y2: cy, stroke: col, 'stroke-width': 3, 'stroke-linecap': 'round', opacity: .38, class: 'stem' }));
      front.appendChild(tip(el('circle', { cx: X(r.min), cy, r: r.same ? 12 : 10, fill: col, stroke: '#fff', 'stroke-width': 2.5, class: 'pt' }), `${r.hw} · 구축비 ${r.cost} — ${r.lab}`));
      front.appendChild(el('text', { x: X(r.min) + 20, y: cy + 9, class: 'val' + (r.g === 'ai' ? ' hot' : '') + (r.same ? ' big' : '') }, r.lab));
      if (r.same) pos.push({ x: X(r.min), cy, min: r.min });
      y += rowH; });
    // 같은 구축비 1억 원 — 2,000일 점에서 아래 18분 줄로 꺾어 내려오는 화살 + 큰 배수 알약
    if (pos.length === 2) { const [a, b] = pos, x0 = a.x, xe = b.x + 118, g = el('g', { class: 'gap' });
      g.appendChild(el('path', { d: `M${x0} ${a.cy + 18}L${x0} ${b.cy}L${xe} ${b.cy}`, fill: 'none', stroke: C.navy, 'stroke-width': 3.5, 'stroke-linejoin': 'round' }));
      g.appendChild(el('path', { d: `M${xe + 11} ${b.cy - 8}L${xe} ${b.cy}L${xe + 11} ${b.cy + 8}`, fill: 'none', stroke: C.navy, 'stroke-width': 3.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }));
      front.appendChild(g);
      const my = (a.cy + b.cy) / 2 + 4;
      pill(front, x0, my, '수만 배 이상', 36); }   // 2,000일 ÷ 18분 = 160,000 — 가정끼리의 비라 자릿수로만 적는다(2026-11-12 사용자 지시, 종전 '약 16만 배')
  })();
})();
