/* 30쪽 자동 재생 배경음악 음량 — 2026-11-15 사용자 지시("30페이지 배경음악 너무 작다 조금 키워라").
   ../../트윈나레이션/narr.js 는 건화 덱 build.py 산출 사본이라 손대지 않고, 이 덱에서만 bgm_gain 을 덮어쓴다(narr.js 뒤 · future.js 앞에 읽는다).
   0.2(약 −31 LUFS, 나레이션보다 13–15 dB 아래) → 0.3(약 +3.5 dB). */
if (window.FUT_NARR) window.FUT_NARR.bgm_gain = 0.3;
