/* KSEIA 축약본 사본(2026-11-15) — 원본 ../../ppt-건화ai-tft-20261208/발표덱/assets/js/kh-intro8.js(건화 덱 15쪽 연구 배경 #s-intro).
   축약본 5쪽 '전지구 모델이 구별하지 못하는 것'(종전 도입 영상 큐)을 그 장으로 갈아 끼웠다. 장 조각은 ../parts/s-intro.html, 끼우기는 ../scripts/build_short_deck.py.
   원본에서 바꾼 것은 덱 연결뿐이다 — 단계 · 큐 · 제목 글 · 시각 · 와이프 값은 원본 그대로다. 원본을 고치면 다시 복사하고 아래 셋을 다시 바꾼다.
     1 무대 — 건화 1920 × 1080 → 이 덱 1600 × 900(#stage). 판 좌표(FULL · slotRect)를 무대 폭 1600 기준으로 셈한다.
     2 지금 장 — 건화 .is-active → 이 덱 .slide.on. 모듈 iframe 은 ../module/globe-sdgs-day.html(건화 도입영상/module 사본, ?lite=1 지원).
     3 키 — 건화는 kh-deck.js 앞(capture)에서 키를 가로챘다. 이 덱은 덱 스크립트의 단계 장치(window.conceptSteppers[장 index] = { step, enter })에 건다 —
       advance() 가 다음 · 이전 키와 아래 삼각 단추를 먼저 여기로 보내고(step 이 true 면 단계만 넘긴 것), swap() 이 장을 옮길 때마다 enter(지금, 직전) 를 부른다.
   ── 아래는 원본 머리 주석 그대로 ──
   8쪽 연구 배경(#s-intro) — 도입 영상 대신 장 안에서 넘기는 네 단계 그림(2026-11-11 사용자 지시).
   그림은 도입 영상이 얹는 지구 모듈 globe-sdgs-day.html 을 패널 모드(?panel=1)로 그대로 얹고, 단계마다 그 모듈의 연출 큐({ cue })를 보낸다.
   모듈의 큐는 영상(globe-intro-film.html 축약본)이 쓰는 것과 같다 — 단계(stage) · 칸 그대로(blocks) · 1 km 와이프(km1Wipe) · 측정망(stations) · 시각(seek · speed).
   지구 · 정밀 배경 타일 · 위성 GEMS · TROPOMI · 농도장 · 측정망 그리기는 모두 모듈 것이다. 이 파일은 단계와 큐 · 제목 글만 맡는다.
     0 오른쪽 판 — 전지구, 봄 수송 사례 NO₂, 위성 둘
     1 무대 가득 — 동아시아, 광역 0.5° 칸 그대로(blocks)
     2 무대 가득 — 한반도, 칸 그대로
     3 무대 가득 — 수도권, 광역 0.5° 칸 그대로
     4 무대 가득 — 서울 배율로 더 다가선 뒤 서울에서 원이 번지며(km1Wipe) AMR-HGN 1 km + 칸 경계(km1Grid), 이어 측정망(stations)
     5 0단계 그림으로 돌아온다(다음 키 → 다음 장)
   자료 시각은 1단계마다 영상 축약본과 같은 0.8814(03-13 10 KST)에서 시작해 1배(3시간/초)로 흐른다.
   1 km · 측정망 층은 모듈 안에서 광역 시계를 따르므로 두 해상도는 늘 같은 시각이다. */
(function(){
  const sec = document.getElementById('s-intro');
  if (!sec) return;
  // 5 — 마지막(4단계)에서 다음 키를 누르면 다음 장이 아니라 이 장의 처음 그림(오른쪽 지구)으로 돌아온다. 한 번 더 누르면 다음 장
  const N = 6, VIEW = k => k === 5 ? 0 : k;   // 보이는 그림 번호 — 5단계는 0단계 그림
  const box = sec.querySelector('.gstage'), fr = box.querySelector('iframe');
  const tEl = box.querySelector('.gtitle b'), sEl = box.querySelector('.gtitle span');
  const S = [...document.querySelectorAll('.slide')], me = S.indexOf(sec);   // 덱 스크립트와 같은 셈(.slide 만 장이다 — 축약본의 숨긴 장 .cut 은 빠진다)
  if (me < 0) return;
  let step = 0, later = 0;

  const TXT = [
    ['전지구 · 동아시아 NO₂', '화학수송모델과 환경위성이 그리는 광역 농도장'],
    ['동아시아 · 광역 0.5° 격자', '격자 한 칸이 값 하나다'],
    ['한반도 · 칸 하나 약 50 km', '서울 도심과 경기 외곽의 전원 지역이 같은 값 하나로 덮인다'],
    ['수도권 · 광역 0.5° 칸', '우리가 숨 쉬는 자리의 차이가 지워진다'],   // 영상 축약본 자막(씬 3)
    ['AMR-HGN · 서울 1 km 격자와 측정망', '측정소가 알려 주는 건 그 지점의 값뿐 — 그 빈자리를 1 km 격자로 추론한다'],   // 영상 축약본 자막(씬 3 · 4)
  ];
  // 범례 · 자료 시각 · 출처는 모듈이 오른쪽 위에 직접 적는다(패널 모드)
  const SEEK = 0.8814;                                   // 영상 축약본 씬 1 — 03-13 10 KST(광역 · 1 km 같은 시각)
  // 단계 큐 — 각 단계는 그 자체로 상태를 다 세운다(앞 · 뒤 어느 쪽에서 와도 같은 그림)
  const CUE = [
    { case: 'spring', sp: 'no2', stage: 'globe', camRate: 4, blocks: 0, km1Grid: 0, stations: false, speed: 1 },
    { case: 'spring', sp: 'no2', stage: 'ea', camRate: 4, blocks: 1, km1Grid: 0, stations: false, seek: SEEK, speed: 1 },
    { case: 'spring', sp: 'no2', stage: 'kr', camRate: 4, blocks: 1, km1Grid: 0, stations: false, seek: SEEK, speed: 1 },
    { case: 'spring', sp: 'no2', stage: 'kr', region: 'sudo', camRate: 6, blocks: 1, km1Grid: 0, stations: false, seek: SEEK, speed: 1 },
    // 4 — 서울 배율(z≈520)로 더 다가선다(아직 광역 칸). 닿으면 아래 WIPE 로 원이 번지며 1 km 와 칸 경계, 이어 측정망이 켜진다
    { case: 'spring', sp: 'no2', stage: 'seoul', camRate: 4, blocks: 1, km1Grid: 0, stations: false, seek: SEEK, speed: 2 },   // 최종 확대 화면은 2배(6시간/초)
  ];
  // 4단계 — 서울 배율에 닿은 뒤 서울시청에서 원이 번진다(영상 축약본 씬 4 와 같은 와이프 · 서울 배율 반경)
  const WIPE = { km1Wipe: { lon: 126.985, lat: 37.565, r: 0.45, feather: 0.03, sec: 1.6 }, km1Grid: 1 };

  const post = m => { try { fr.contentWindow && fr.contentWindow.postMessage(m, '*'); } catch (e) {} };
  /* 무대 축소 배율을 모듈에 알린다(원본 2026-11-12 — 노트북 버벅임). 덱은 1600 × 900 무대를 창에 맞춰 줄이는데(--K)
     모듈은 그것을 모르고 판 크기 × 기기 화소 배율로 캔버스를 잡는다. 배율(1 이하)을 주면 모듈(?lite=1)이 캔버스를 실제 화면 화소 수로 잡는다.
     무대가 커진 화면(배율 > 1)에서는 종전 그대로 둔다 */
  const pxr = () => { const k = fr.getBoundingClientRect().width / (fr.offsetWidth || 1); if (k > 0) post({ pxr: Math.min(1, Math.max(0.25, Math.round(k * 200) / 200)) }); };
  let pxrT = 0; addEventListener('resize', () => { clearTimeout(pxrT); pxrT = setTimeout(pxr, 120); });   // 덱이 무대를 다시 맞춘 뒤
  /* 판 크기 — 0단계는 오른쪽 자리(.gslot), 1–4단계는 무대 가득. 0 ↔ 1 은 판이 제자리에서 자라고 줄어든다.
     판이 자라는 동안 모듈은 창 크기에 맞춰 지구를 다시 그리므로 같은 지구가 오른쪽에서 가운데로 커진다. 좌표는 무대(1600 × 900) 기준이다 */
  const slot = sec.querySelector('.gslot'), GROW = 800, W0 = 1600, H0 = 900;
  let tm = [];
  const after = (ms, f) => tm.push(setTimeout(f, ms));
  const place = r => { box.style.left = r[0] + 'px'; box.style.top = r[1] + 'px'; box.style.width = r[2] + 'px'; box.style.height = r[3] + 'px'; };
  const slotRect = () => { const a = sec.getBoundingClientRect(), b = slot.getBoundingClientRect(), K = a.width / W0 || 1;
    return [(b.left - a.left) / K, (b.top - a.top) / K, b.width / K, b.height / K]; };
  const FULL = [0, 0, W0, H0];
  function frame(full, animate){
    box.classList.remove('anim');
    if (!animate){ box.classList.toggle('fs', full); box.classList.toggle('full', full); if (full) place(FULL); else box.removeAttribute('style'); return; }
    if (full){ place(slotRect()); box.classList.add('fs'); void box.offsetWidth; box.classList.add('anim'); place(FULL); }
    else { box.classList.remove('full'); box.classList.add('anim'); place(slotRect()); after(GROW + 30, () => { if (VIEW(step) === 0){ box.classList.remove('fs', 'anim'); box.removeAttribute('style'); } }); }
  }
  function setStep(k, instant){
    const from = step;
    step = k; sec.dataset.st = k;
    const v = VIEW(k), fv = VIEW(from);
    tEl.textContent = TXT[v][0]; sEl.textContent = TXT[v][1];
    clearTimeout(later); tm.forEach(clearTimeout); tm = [];
    const now0 = instant || from === 5;          // 뒤(5단계)에서 돌아오면 원을 다시 돌리지 않는다
    const wipe = () => { if (step !== 4) return; post({ cue: now0 ? { ...WIPE, km1Wipe: { ...WIPE.km1Wipe, sec: 0 } } : WIPE });
      later = setTimeout(() => { if (step === 4) post({ cue: { stations: true } }); }, now0 ? 0 : 1400); };   // 측정망은 원이 다 번진 뒤
    const cueAt = () => { post({ cue: CUE[v] }); if (k === 4) later = setTimeout(wipe, now0 ? 300 : 1500); };
    if (instant){ frame(v > 0, false); cueAt(); return; }
    if (v > 0 && fv === 0){                   // 판이 먼저 자라고, 다 자라면 동아시아로 다가선다
      frame(true, true);
      after(GROW, () => { if (step !== k) return; box.classList.remove('anim'); cueAt(); after(900, () => box.classList.add('full')); });
      return;
    }
    if (v === 0){ post({ cue: CUE[0] }); after(1500, () => { if (VIEW(step) === 0) frame(false, true); }); return; }   // 지구로 물러난 뒤(카메라 접근 camRate 4 가 전지구에 거의 닿는 1.5초 뒤) 판이 오른쪽 자리로 줄어든다
    if (!box.classList.contains('full')){ frame(true, false); }   // 자라는 중에 키를 또 눌러도 무대 가득으로 맞춘다
    cueAt();
  }
  const stepBy = d => { const k = step + d; if (k < 0 || k >= N) return false; setStep(k, false); return true; };

  // 모듈 읽기 — 앞뒤 장에 닿으면 받고, 멀어지면 비운다(숨은 WebGL 이 덱 전환을 버벅이게 하지 않게 — 영상 프레임과 같은 규약)
  function load(){ if (fr.dataset.on) return; fr.dataset.on = '1'; fr.src = fr.dataset.src; }
  function unload(){ if (!fr.dataset.on) return; delete fr.dataset.on; fr.src = 'about:blank'; }
  fr.addEventListener('load', () => { if (!fr.dataset.on) return;
    pxr();
    post({ cue: { warm: ['spring'], warmMap: ['sudo', 'seoul'] } });   // 봄 사례 1 km · 수도권 · 서울 도시 상세지도를 미리 읽는다(원본과 같은 warm)
    post({ on: sec.classList.contains('on') });
    setStep(step, true); });

  /* ── 이 덱 연결 — 단계 장치(window.conceptSteppers) ── */
  let was = -1;
  function enter(now, prev){
    if (now === was) return;
    const w = prev === undefined || prev < 0 ? (was < 0 ? now - 1 : was) : prev; was = now;
    if (now >= me - 1 && now <= me + 1) load(); else unload();
    post({ on: now === me });
    if (now === me) setStep(w > now ? N - 1 : 0, true);   // 다음 장에서 돌아오면 5단계(0단계 그림) — 이전 키 한 번이면 4단계
    else clearTimeout(later);
  }
  window.conceptSteppers = window.conceptSteppers || {};
  window.conceptSteppers[me] = { step: stepBy, enter };
  setStep(0, true);
  enter(S.findIndex(x => x.classList.contains('on')), -1);   // 이 파일은 덱 스크립트 뒤에 읽힌다 — 첫 swap(0) 은 이미 지나갔다
  window.KSIntro = { get step() { return step; }, get ready() { return !!fr.dataset.on; }, go: k => setStep(k, false) };   // 점검 창구
})();
