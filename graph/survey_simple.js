/* 축약본 표본조사 평가 vs 시공간 정합형 평가(#s-survey, 장 조각 ../parts/s-survey.html) — 2026-11-16 사용자 지시로 full 덱 21장(#survey)을 단순화한 판.
   내레이션 · 단계가 없다 — 들어서면 모두 한 번에 보이고 다음 키는 바로 다음 장이다(단계 장치를 달지 않는다).
   24시간 예측농도 하나만 견준다 — 좌: 조사 12일 가운데 최대 현황 + 다른 날의 기여 99퍼센타일 / 우: 날마다 현황 + 기여를 더한 뒤 그 합의 99퍼센타일.
   수치 · 날짜는 모두 window.SURVEY(graph/survey_limits_2023.js, scripts/build_survey_limits.py 산출)에서 읽는다 — 손으로 적은 값이 없다.
     series.pm25(현황 일평균) · series.contrib_hypo(기여농도 — 가상 · 설명용, 고정 시드) · example(조사 12일) · compare(survey_24h · contrib_p99 · match_24h …) */
(function(){
  const sec = document.getElementById('s-survey'), D = window.SURVEY;
  if (!sec || !D) return;
  const days = D.days, v = D.series.pm25, c = D.series.contrib_hypo, C = D.compare, H = C.survey_24h;
  const ex = new Set(Object.values(D.example).flatMap(k => [k, k + 1, k + 2]));
  const fmtDay = k => { const [m, d] = days[k].split('-'); return `${+m}월 ${+d}일`; };
  const NS = 'http://www.w3.org/2000/svg';
  const el = (par, tag, at, txt) => { const e = document.createElementNS(NS, tag); for (const k in at) e.setAttribute(k, at[k]); if (txt != null) e.textContent = txt; par.appendChild(e); return e; };
  const Wd = 700, Ht = 310, L = 34, R = 20, T = 20, B = 24, pw = Wd - L - R, ph = Ht - T - B;
  const ymax = Math.ceil(Math.max(...v.map((y, k) => y == null ? 0 : y + c[k]), H.pred) * 1.06 / 10) * 10;   // 두 그래프 같은 세로 축
  const X = k => L + (k + .5) * pw / 365, Y = y => T + ph * (1 - y / ymax), bw = pw / 365 * .8;
  function frame(svg){
    svg.setAttribute('viewBox', `0 0 ${Wd} ${Ht}`);
    [0, 50, 100].filter(y => y <= ymax).forEach(y => el(svg, 'text', { class: 'tk', x: L - 6, y: Y(y) + 5, 'text-anchor': 'end' }, y));
    [1, 4, 7, 10].forEach(m => { const d = days.findIndex(s => +s.slice(0, 2) === m); el(svg, 'text', { class: 'tk', x: X(d), y: Ht - 4 }, m + '월'); });
    el(svg, 'line', { x1: L, x2: L + pw, y1: Y(0), y2: Y(0), stroke: '#11151a', 'stroke-width': 1 });
  }
  // 글자가 그림 밖으로 나가지 않게 — 오른쪽에 자리가 없으면 왼쪽으로 붙인다
  const side = (x, w) => x + 12 + w > L + pw ? { x: x - 12, a: 'end' } : { x: x + 12, a: 'start' };

  // 좌 — 표본조사 평가: 조사 12일 · 가장 높은 날의 현황 위에 다른 날의 기여(99퍼센타일)를 옮겨 더한다
  { const svg = sec.querySelector('.pn.old svg'); frame(svg);
    v.forEach((y, k) => { if (y != null) el(svg, 'rect', { class: ex.has(k) ? 'bar s' : 'bar', x: X(k) - bw / 2, y: Y(y), width: bw, height: Y(0) - Y(y) }); });
    const kc = C.contrib_p99_day, kb = H.bg_day, xc = X(kc), xb = X(kb), yc = Y(c[kc]), yTop = Y(H.pred), yArc = yTop - 34;
    const defs = el(svg, 'defs', {}), mk = el(defs, 'marker', { id: 'ssv-arr', viewBox: '0 0 10 10', refX: 8, refY: 5, markerWidth: 7, markerHeight: 7, orient: 'auto-start-reverse' });
    el(mk, 'path', { d: 'M0,0 L10,5 L0,10 z', style: 'fill:var(--blue)' });
    el(svg, 'rect', { x: xb - 3.5, y: yTop, width: 7, height: Y(H.bg) - yTop, style: 'fill:var(--blue)' });                       // 최대 현황 위에 쌓인 기여
    el(svg, 'rect', { x: xb - 3.5, y: Y(H.bg), width: 7, height: Y(0) - Y(H.bg), style: 'fill:var(--brand)' });
    const from = kc < kb ? -1 : 1;                                                                                                // 기여가 나온 날이 어느 쪽인가
    el(svg, 'path', { class: 'arc', d: `M${xc},${yc - 10} C${xc},${yArc} ${xb + from * 30},${yArc} ${xb + from * 5},${yTop - 3}`, 'stroke-dasharray': '5 4', 'marker-end': 'url(#ssv-arr)' });
    el(svg, 'circle', { cx: xc, cy: yc, r: 7, style: 'fill:none;stroke:var(--blue);stroke-width:2.5' });
    const a = side(xc, 150); el(svg, 'text', { class: 'lb c', x: a.x, y: yc - 14, 'text-anchor': a.a }, `${fmtDay(kc)} 기여 ${C.contrib_p99}`);
    el(svg, 'text', { class: 'lb m', x: (xc + xb) / 2, y: yArc - 2, 'text-anchor': 'middle' }, '다른 날의 값을 옮겨 더한다');
    el(svg, 'circle', { class: 'mx', cx: xb, cy: Y(H.bg), r: 8 });
    const b = side(xb, 150); el(svg, 'text', { class: 'lb h', x: b.x, y: Y(H.bg) + 20, 'text-anchor': b.a }, `${fmtDay(kb)} 현황 ${H.bg}`);
    el(svg, 'line', { class: 'hot', x1: xb + 8, x2: L + pw, y1: yTop, y2: yTop, 'stroke-dasharray': '7 5' });
    el(svg, 'text', { class: 'hott', x: L + pw, y: yTop + 22, 'text-anchor': 'end', style: 'paint-order:stroke;stroke:var(--paper);stroke-width:5px' }, `24시간 예측 ${H.pred}`);
    sec.querySelector('[data-v="old"]').innerHTML =
      `<i class="dt">${fmtDay(kb)}</i>현황 <b>${H.bg}</b> + <i class="dt">${fmtDay(kc)}</i><span class="c">기여 ${C.contrib_p99}</span> = <span class="r">${H.pred}</span>`;
  }
  // 우 — 시공간 정합형 평가: 날마다 현황 + 기여
  { const svg = sec.querySelector('.pn.new svg'); frame(svg);
    v.forEach((y, k) => { if (y == null) return;
      el(svg, 'rect', { class: 'bar', x: X(k) - bw / 2, y: Y(y), width: bw, height: Y(0) - Y(y) });
      el(svg, 'rect', { class: 'cb', x: X(k) - bw / 2, y: Y(y + c[k]), width: bw, height: Y(y) - Y(y + c[k]) }); });
    const km = C.match_24h_day, xm = X(km), ym = Y(C.match_24h);
    el(svg, 'circle', { class: 'mx', cx: xm, cy: ym, r: 8 });
    const a = side(xm, 250); el(svg, 'text', { class: 'hott', x: a.x, y: ym - 6, 'text-anchor': a.a, style: 'paint-order:stroke;stroke:var(--paper);stroke-width:5px' }, `24시간 예측 ${C.match_24h} — ${fmtDay(km)}`);
    sec.querySelector('[data-v="new"]').innerHTML =
      `<i class="dt">${fmtDay(km)}</i>현황 <b>${C.match_24h_bg}</b> + <i class="dt">${fmtDay(km)}</i><span class="c">기여 ${C.match_24h_c}</span> = <span class="r">${C.match_24h}</span>`;
  }
})();
