/* 축약본 18쪽 표본조사의 한계(#s-rsm, 장 조각 ../parts/s-rsm.html) — 2026-11-15 사용자 지시로 단순화한 판. 내레이션 없이 발표자가 말로 설명한다.
   들어서면 한 줄씩 저절로 켠다(2026-11-15 — 종전엔 다음 키로 한 줄씩) — 0 현황조사 12일 + 위 그래프(2023 종로구 PM₂.₅ 일평균 · 연평균선 · 조사 12일 강조)
                         → 1 오차 분포(1만 번 재추출 히스토그램 · 90 % 범위) → 2 실제 표준편차 = 공식 표본오차 × 배율 → 3 1 km 농도장의 보완 → 다음 장.
   앞 장에서 들어오면 0단계, 뒤 장에서 돌아오면 3단계. 단계 장치는 덱 스크립트의 window.conceptSteppers[장 index] = { step, enter }.
   수치는 모두 window.SURVEY(graph/survey_limits_2023.js, scripts/build_survey_limits.py 산출)에서 셈한다 — 손으로 적은 값이 없다.
     오차 범위 = stats.pm25.rel_err_p05 · rel_err_p95(1만 번 재추출 5 · 95 퍼센타일), 배율 = sd_mean12 / se_iid, 조사 12일 = example(계절별 연속 3일 시작일) */
(function(){
  const sec = document.getElementById('s-rsm'), svg = document.getElementById('s-rsm-svg'), D = window.SURVEY;
  if (!sec || !svg || !D) return;
  const S = [...document.querySelectorAll('.slide')], idx = S.indexOf(sec);
  if (idx < 0) return;
  const P = D.stats.pm25, X = D.series.pm25, R = D.resample.pm25, N = 4;
  const sgn = v => (v < 0 ? '−' : '+') + Math.abs(Math.round(v));
  const ratio = (P.sd_mean12 / P.se_iid).toFixed(2);
  sec.querySelector('[data-v="range"]').textContent = `${sgn(P.rel_err_p05)} ~ ${sgn(P.rel_err_p95)} %`;
  sec.querySelector('[data-v="ratio"]').textContent = `× ${ratio}`;
  // 2026-11-16 사용자 지시 — 오차 범위를 농도로도 적는다. 연평균 × (1 + 5 · 95 퍼센타일 오차) — 최소 · 최대가 아니라 90 % 범위의 두 끝이다
  const cLo = (P.annual_mean * (1 + P.rel_err_p05 / 100)).toFixed(1), cHi = (P.annual_mean * (1 + P.rel_err_p95 / 100)).toFixed(1);
  sec.querySelector('[data-v="mean"]').textContent = P.annual_mean;
  sec.querySelector('[data-v="conc"]').textContent = `${cLo} ~ ${cHi}`;
  sec.querySelector('[data-v="range2"]').textContent = `${sgn(P.rel_err_p05)} ~ ${sgn(P.rel_err_p95)} %`;
  const NOTE = sec.querySelector('.rsn');

  const NS = 'http://www.w3.org/2000/svg', ACC = '#00753A', HOT = '#E8590C', INK = '#11151a', MUT = '#6f7a84', GRID = '#d5d6d5';
  const el = (tag, at, par, txt) => { const e = document.createElementNS(NS, tag); for (const k in at) e.setAttribute(k, at[k]); if (txt != null) e.textContent = txt; (par || svg).appendChild(e); return e; };
  const txt = (par, x, y, s, size, col, anchor, wt) => el('text', { x, y, 'font-size': size, fill: col, 'text-anchor': anchor || 'start', 'font-weight': wt || 600 }, par, s);
  const G = [0, 1, 2].map(() => el('g', { class: 'g' }));

  // 0 위 — 일평균 막대 · 연평균선 · 조사 12일
  { const g = G[0], x0 = 52, x1 = 740, y0 = 46, y1 = 226, ym = 105, n = X.length, bw = (x1 - x0) / n, Y = v => y1 - (v / ym) * (y1 - y0);
    const pick = new Set(); Object.values(D.example).forEach(s => { for (let k = 0; k < 3; k++) pick.add(s + k); });
    txt(g, 0, 20, '2023 서울 종로구 PM₂.₅ 일평균', 20, INK, 'start', 800); txt(g, 740, 20, 'µg/m³', 15, MUT, 'end', 600);
    [0, 50, 100].forEach(v => { el('line', { x1: x0, x2: x1, y1: Y(v), y2: Y(v), stroke: GRID, 'stroke-width': 1 }, g); txt(g, x0 - 8, Y(v) + 5, String(v), 14, MUT, 'end', 500); });
    X.forEach((v, i) => { if (v == null) return; el('rect', { x: x0 + i * bw, y: Y(v), width: Math.max(1, bw - .4), height: y1 - Y(v), fill: pick.has(i) ? HOT : '#b9c2c9' }, g); });
    el('line', { x1: x0, x2: x1, y1: Y(P.annual_mean), y2: Y(P.annual_mean), stroke: INK, 'stroke-width': 1.6, 'stroke-dasharray': '6 5' }, g);
    txt(g, x1, Y(P.annual_mean) - 8, `연평균 ${P.annual_mean}`, 16, INK, 'end', 700);
    ['1월', '4월', '7월', '10월'].forEach((m, k) => txt(g, x0 + (k * 91) * bw, y1 + 22, m, 14, MUT, 'start', 500));
    el('rect', { x: 0, y: 262, width: 14, height: 14, fill: HOT }, g); txt(g, 22, 275, `조사 12일(계절별 연속 3일) — 이 표본의 평균 ${P.example_mean12}`, 16, INK, 'start', 600);
  }
  // 1 아래 — 1만 번 재추출 오차 분포 · 90 % 범위
  { const g = G[1], x0 = 52, x1 = 740, y0 = 344, y1 = 540, lo = -70, hi = 125, XS = v => x0 + (v - lo) / (hi - lo) * (x1 - x0), hm = Math.max(...R.hist);
    txt(g, 0, 318, `12일 평균의 연평균 대비 오차 — ${D.n_draw.toLocaleString('en-US')}번 재추출`, 20, INK, 'start', 800);
    el('rect', { x: XS(P.rel_err_p05), y: y0, width: XS(P.rel_err_p95) - XS(P.rel_err_p05), height: y1 - y0, fill: 'rgba(0,117,58,.10)' }, g);
    R.hist.forEach((c, k) => { const a = R.hist_lo + k * R.hist_w; if (a < lo || a + R.hist_w > hi) return; const h = c / hm * (y1 - y0 - 36);
      el('rect', { class: 'hb', x: XS(a) + 1, y: y1 - h, width: XS(a + R.hist_w) - XS(a) - 2, height: h, fill: a >= P.rel_err_p05 - R.hist_w && a < P.rel_err_p95 ? ACC : '#9fb7a8', style: `transition-delay:${k * 12}ms` }, g); });
    el('line', { x1: XS(0), x2: XS(0), y1: y0 + 30, y2: y1, stroke: INK, 'stroke-width': 1.4, 'stroke-dasharray': '5 4' }, g);
    el('line', { x1: x0, x2: x1, y1: y1, y2: y1, stroke: INK, 'stroke-width': 1 }, g);
    [-60, -30, 0, 30, 60, 90, 120].forEach(v => txt(g, XS(v), y1 + 22, (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v) + ' %', 14, MUT, 'middle', 500));
    txt(g, XS(P.rel_err_p05) - 6, y0 + 20, sgn(P.rel_err_p05) + ' %', 18, ACC, 'end', 800); txt(g, XS(P.rel_err_p95) + 6, y0 + 20, sgn(P.rel_err_p95) + ' %', 18, ACC, 'start', 800);
    txt(g, (XS(P.rel_err_p05) + XS(P.rel_err_p95)) / 2, y0 + 20, '90 % 범위', 16, ACC, 'middle', 800);   // 띠 안 위쪽(막대 위 여백)
    txt(g, XS(P.rel_err_p05) - 6, y0 + 42, `${cLo} µg/m³`, 17, INK, 'end', 800); txt(g, XS(P.rel_err_p95) + 6, y0 + 42, `${cHi} µg/m³`, 17, INK, 'start', 800);   // 범위 두 끝의 농도(2026-11-16)
    txt(g, XS(0), y1 + 44, `0 = 연평균 ${P.annual_mean} µg/m³`, 14, INK, 'middle', 600);
  }
  // 2 — 실제 표준편차와 공식 표본오차
  { const g = G[2];
    el('rect', { x: 470, y: 400, width: 270, height: 92, rx: 6, fill: '#fff', stroke: HOT, 'stroke-width': 2 }, g);
    txt(g, 486, 428, '12일 평균의 표준편차', 15, MUT, 'start', 600);
    txt(g, 486, 458, `실제 ${P.sd_mean12} µg/m³`, 20, HOT, 'start', 800);
    txt(g, 486, 482, `공식 s/√n ${P.se_iid} µg/m³ × ${ratio}`, 15, INK, 'start', 600);
  }

  const LI = [...sec.querySelectorAll('.rsl li')];
  let step = -1, timers = [];
  const GAP = 1100;   // 단계 사이(ms)
  function auto(on) { timers.forEach(clearTimeout); timers = []; if (!on) return; show(0); for (let k = 1; k < N; k++) timers.push(setTimeout(() => show(k), k * GAP)); }
  function show(k) { step = k; LI.forEach((li, i) => li.classList.toggle('on', i <= k)); G[0].classList.toggle('on', k >= 0); G[1].classList.toggle('on', k >= 1); G[2].classList.toggle('on', k >= 2); NOTE.classList.toggle('on', k >= 1); }
  window.conceptSteppers = window.conceptSteppers || {};
  window.conceptSteppers[idx] = {
    // 2026-11-15 사용자 지시("페이지 열면 순서대로 한번에 표시") — 들어서면 네 단계를 GAP 간격으로 저절로 켠다. 켜지는 도중의 다음 키는 남은 단계를 한꺼번에 켜고,
    //   다 켜진 뒤의 다음 · 이전 키는 장을 넘긴다. 뒤 장에서 돌아오면 다 켠 채로 선다
    step(d) { if (d > 0 && step < N - 1) { auto(false); show(N - 1); return true; } return false; },
    enter(now, was) { if (now !== idx) { auto(false); return; } if (was > now) { auto(false); show(N - 1); } else auto(true); },
  };
  show(0);
})();
