/* 29 · 30쪽 통합 환경 평가(건화 덱 25 · 26쪽 사본) — 이 덱 연결(2026-11-15).
   두 장의 스크립트(futflow.js · future.js)는 건화 덱 장치(kh-deck.js)에 맞춰 짜여 있다 — 이 파일이 그 몫을 이 덱에서 대신한다.
     1 지금 장 — 이 덱은 지금 장에 .on 을 단다. 두 장(.kfut)에 .is-active 를 같이 달고, 들어설 때 [data-anim] 을 다시 띄운다(.is-in).
     2 그림말 · 순차 등장 — [data-icon] 에 KH_ICONS(graph/fut/kh-icons.js) 그림을 넣고, [data-stagger] 의 자식에 등장 지연(--d)을 단다(kh-deck.js 와 같은 규칙).
     3 단계 — 26쪽 장(.fut-stage)은 data-step-now 0–9 로 장면을 고른다. 덱의 단계 장치 window.conceptSteppers[장 index] = { step, enter } 에 건다
       (다음 · 이전 키와 아래 삼각 단추가 먼저 여기로 온다. 앞에서 들어오면 0단계, 뒤에서 오면 9단계).
     4 KHDeck — future.js 의 자동 재생 · 진행 막대가 부르는 next · prev · go · slides 를 이 덱 키 입력(→ · ←)으로 이어 준다. */
(function(){
  const S = [...document.querySelectorAll('.slide')], K = S.filter(s => s.classList.contains('kfut'));
  if (!K.length) return;
  const lib = window.KH_ICONS || {};
  K.forEach(s => {
    s.querySelectorAll('[data-icon]').forEach(i => { const svg = lib[i.dataset.icon]; if (!svg) { console.warn('deck_link: 없는 그림말', i.dataset.icon); return; }
      i.classList.add('ico'); i.innerHTML = `<svg viewBox="0 0 256 256" aria-hidden="true">${svg}</svg>`; });
    s.querySelectorAll('[data-stagger]').forEach(box => { const gap = +(box.dataset.stagger || 90), base = +(box.dataset.staggerStart || 0), anim = box.dataset.staggerAnim || 'fade-up';
      [...box.children].forEach((c, k) => { if (!c.dataset.anim) c.dataset.anim = anim; c.style.setProperty('--d', (base + k * gap) + 'ms'); }); });
  });
  // 1 지금 장 — .on 을 .is-active 로 옮겨 단다
  const sync = s => { const on = s.classList.contains('on'); if (on === s.classList.contains('is-active')) return;
    s.classList.toggle('is-active', on); const A = s.querySelectorAll('[data-anim]');
    if (on) { A.forEach(e => e.classList.remove('is-in')); requestAnimationFrame(() => requestAnimationFrame(() => A.forEach(e => e.classList.add('is-in')))); }
    else A.forEach(e => e.classList.remove('is-in')); };
  const mo = new MutationObserver(ms => ms.forEach(m => sync(m.target)));
  K.forEach(s => { mo.observe(s, { attributes: true, attributeFilter: ['class'] }); sync(s); });
  // 3 단계 — 26쪽 장
  const st = K.find(s => s.classList.contains('fut-stage')), idx = S.indexOf(st), N = 9;
  const set = k => { st.dataset.stepNow = k; };
  if (st) {
    set(0);
    window.conceptSteppers = window.conceptSteppers || {};
    window.conceptSteppers[idx] = {
      step(d) { const k = +(st.dataset.stepNow || 0) + d; if (k < 0 || k > N) return false; set(k); return true; },
      enter(now, was) { if (now === idx) set(was > now ? N : 0); },
    };
  }
  // 4 KHDeck — 덱 키 입력으로 넘긴다(덱의 advance 가 위 단계 장치를 먼저 부른다)
  const press = (key, code) => document.dispatchEvent(new KeyboardEvent('keydown', { key, code, keyCode: code === 'ArrowRight' ? 39 : 37, bubbles: true }));
  window.KHDeck = window.KHDeck || {
    next() { press('ArrowRight', 'ArrowRight'); },
    prev() { press('ArrowLeft', 'ArrowLeft'); },
    go(n) { if (S[n] === st) set(0); },               // future.js 자동 재생 시작 — 이미 이 장이므로 0단계로만
    get index() { return S.findIndex(s => s.classList.contains('on')); },
    get slides() { return S; },
  };
})();
