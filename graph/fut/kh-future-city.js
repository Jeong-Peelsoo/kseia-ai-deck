/* KSEIA 덱 사본(2026-11-17, 건화 26쪽 최종판) — 원본 ../../../ppt-건화ai-tft-20261208/발표덱/assets/js/kh-future-city.js. 바꾼 것 없음. future.js 가 graph/fut/kh-future-city.js 로 받는다. 원본을 고치면 다시 복사한다. ── 아래는 원본 그대로 ── */
/* 26쪽 4단계(오존 고농도 · 폭염) 확대 장면의 3차원 도시 모형 — 건물 · 거리 · 그림자 (2026-11-17 사용자 지시 "훨씬 더 정교하고 리얼한 건물과 거리를 3d 모델링")
   kh-future.js 의 4단계(MIC)가 부른다. window.KH_FUT_CITY(c) → { root, set(kg, kInd, kDet, kApt, kt), sun({ el, az }), warm() }
   모두 가상 배치다(실제 장소 · 건물이 아니다). 배치(건물 자리 · 수목 · 야적장 · 광장 · 간선 둘)는 kh-future.js 가 정해 넘기고, 여기서는 그 위에 모형을 세운다.
     좌표 — root 안은 m 단위(x 동 · y 위 · z 남). kh-future.js 가 root 를 1/1000 로 줄여 지형(km) 위에 놓는다. 건물 높이는 과장하지 않는다.
     건물 — 공장동(골강판 벽 · 박공 금속 지붕 · 용마루 환기구 · 채광창 · 셔터 · 굴뚝 · 사일로), 공동주택(판상형 · 층별 창과 발코니 슬래브 · 측벽 색 띠 · 옥탑 · 현관 캐노피),
            단독주택(박공지붕 또는 옥상 방수 지붕). 면을 직접 쌓아 재질별로 한 덩어리(메시)로 묶는다.
     거리 — 간선 둘(4차로 · 2차로, 차선 · 횡단보도), 산업단지 · 주택가 · 단지 안 이면도로, 보도 · 가로등, 주차장(구획선 · 주차 차량), 가로수 · 수림대(인스턴스).
     그림자 — 태양(방향 조명) 그림자 맵. 지표면 온도 모드(uKt)에서는 그림자 진 곳이 그늘 색, 볕 든 곳이 재질별 지표면 온도 색으로 바뀐다.
   질감은 모두 이 파일이 캔버스로 그린다(외부 그림 없음). */
(function () {
  "use strict";
  window.KH_FUT_CITY = function (c) {
    const THREE = c.THREE, { Wm, Hm, B, TR, YARD, PLAZA, RDH, VX, BUF, zone, dEdge, site } = c;
    const TAU = Math.PI * 2, r = c.rng(20261117), pick = a => a[Math.floor(r() * a.length) % a.length];
    const root = new THREE.Group(), G = {};
    ["prop", "ind", "det", "apt", "tree"].forEach(k => { G[k] = new THREE.Group(); root.add(G[k]); });
    const inR = (R, x, z, pad = 0) => x > R[0] - pad && x < R[0] + R[2] + pad && z > R[1] - pad && z < R[1] + R[3] + pad;
    const inB = (x, z, pad = 3) => B.some(b => x > b[0] - pad && x < b[0] + b[2] + pad && z > b[1] - pad && z < b[1] + b[3] + pad);

    /* ---------- 질감(캔버스) ---------- */
    const cvs = (w, h, f) => { const k = c.off(w, h), g = k.getContext("2d"); f(g, w, h); const t = new THREE.CanvasTexture(k); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; return t; };
    const speck = (g, w, h, n, a) => { for (let i = 0; i < n; i++) { g.fillStyle = `rgba(${r() < .5 ? "0,0,0" : "255,255,255"},${a * r()})`; g.fillRect(r() * w, r() * h, 1 + r() * 2, 1 + r() * 2); } };
    const TEX = {
      // 공동주택 앞면 — 2칸 × 2층(칸 3.6 m · 층 2.9 m). 왼 칸 거실(넓은 발코니 창 · 유리 난간), 오른 칸 침실(벽 + 작은 창), 층 슬래브 선
      aptF: cvs(512, 512, (g, w, h) => { g.fillStyle = "#f3f1ea"; g.fillRect(0, 0, w, h);
        for (let j = 0; j < 2; j++) { const y = j * 256;
          const gr = g.createLinearGradient(0, y + 30, 0, y + 190); gr.addColorStop(0, "#5f7890"); gr.addColorStop(.55, "#2c3a4b"); gr.addColorStop(1, "#1f2a38"); g.fillStyle = gr; g.fillRect(14, y + 30, 228, 160);   // 거실 창
          if (j) { g.fillStyle = "rgba(240,232,214,.6)"; g.fillRect(14, y + 30, 84, 160); }                                             // 커튼
          g.fillStyle = "#fbfaf6"; [14, 128, 242].forEach(q => g.fillRect(q - 3, y + 30, 6, 160)); g.fillRect(14, y + 26, 228, 6);          // 창틀
          g.fillStyle = "rgba(170,200,220,.55)"; g.fillRect(8, y + 190, 240, 44); g.fillStyle = "#e9e9e6"; g.fillRect(8, y + 188, 240, 5);   // 유리 난간
          g.fillStyle = "#26323f"; g.fillRect(310, y + 58, 120, 108); g.fillStyle = "#fbfaf6"; g.fillRect(306, y + 54, 128, 5); g.fillRect(368, y + 58, 4, 108); g.fillStyle = "#cfcdc6"; g.fillRect(304, y + 166, 132, 7);   // 침실 창
          if (!j) { g.fillStyle = "#dcdedf"; g.fillRect(446, y + 184, 48, 34); g.fillStyle = "#7f868c"; g.fillRect(451, y + 189, 38, 24); }  // 실외기
          g.fillStyle = "#c9c6bd"; g.fillRect(0, y + 240, w, 16); g.fillStyle = "rgba(0,0,0,.14)"; g.fillRect(254, y, 4, 240); g.fillRect(0, y, 3, 240); } }),
      // 공동주택 측벽 — 폭 전체 × 2층. 가운데 작은 창 둘, 줄눈
      aptG: cvs(256, 256, (g, w, h) => { g.fillStyle = "#e9e7e1"; g.fillRect(0, 0, w, h); g.fillStyle = "rgba(0,0,0,.07)"; [0, 128].forEach(y => g.fillRect(0, y + 122, w, 6));
        [0, 128].forEach(y => { g.fillStyle = "#3d4d60"; g.fillRect(112, y + 34, 32, 52); g.fillStyle = "#f4f3ef"; g.fillRect(110, y + 32, 36, 3); g.fillRect(127, y + 34, 2, 52); }); speck(g, w, h, 500, .04); }),
      // 공장 벽 — 골강판 6 × 6 m
      fac: cvs(128, 128, (g, w, h) => { g.fillStyle = "#eceae4"; g.fillRect(0, 0, w, h); for (let x = 0; x < w; x += 8) { g.fillStyle = "rgba(0,0,0,.10)"; g.fillRect(x, 0, 2, h); g.fillStyle = "rgba(255,255,255,.35)"; g.fillRect(x + 4, 0, 2, h); }
        g.fillStyle = "rgba(0,0,0,.12)"; g.fillRect(0, 62, w, 2); }),
      // 금속 지붕 — 골 4 × 4 m(골은 물매 방향)
      roofM: cvs(128, 128, (g, w, h) => { g.fillStyle = "#f0f0f0"; g.fillRect(0, 0, w, h); for (let x = 0; x < w; x += 16) { g.fillStyle = "rgba(0,0,0,.20)"; g.fillRect(x, 0, 3, h); g.fillStyle = "rgba(255,255,255,.4)"; g.fillRect(x + 8, 0, 2, h); } speck(g, w, h, 300, .06); }),
      // 주택 벽 — 6.5 m × 1층 3.2 m. 창 둘
      house: cvs(256, 128, (g, w, h) => { g.fillStyle = "#efede8"; g.fillRect(0, 0, w, h); speck(g, w, h, 600, .05);
        [[34, 60], [150, 72]].forEach(([x, ww]) => { g.fillStyle = "#3a4859"; g.fillRect(x, 36, ww, 52); g.fillStyle = "#f6f5f1"; g.fillRect(x - 3, 33, ww + 6, 4); g.fillRect(x + ww / 2 - 1, 36, 3, 52); g.fillStyle = "#b9b5ac"; g.fillRect(x - 4, 88, ww + 8, 5); });
        g.fillStyle = "rgba(0,0,0,.10)"; g.fillRect(0, 122, w, 6); }),
      // 기와 · 슁글 지붕 2 × 2 m
      roofT: cvs(64, 64, (g, w, h) => { g.fillStyle = "#f2f2f2"; g.fillRect(0, 0, w, h); for (let y = 0; y < h; y += 8) { g.fillStyle = "rgba(0,0,0,.24)"; g.fillRect(0, y, w, 2); } for (let i = 0; i < 40; i++) { g.fillStyle = `rgba(0,0,0,${.10 * r()})`; g.fillRect((i % 8) * 8 + (Math.floor(i / 8) % 2) * 4, Math.floor(i / 8) * 8, 1, 8); } }),
      // 옥상 · 평지붕(방수 도막)
      roofA: cvs(64, 64, (g, w, h) => { g.fillStyle = "#f0f0f0"; g.fillRect(0, 0, w, h); speck(g, w, h, 500, .09); g.fillStyle = "rgba(0,0,0,.08)"; g.fillRect(0, 0, w, 1); g.fillRect(0, 0, 1, h); }),
      shut: cvs(64, 64, (g, w, h) => { g.fillStyle = "#6f757c"; g.fillRect(0, 0, w, h); for (let y = 0; y < h; y += 6) { g.fillStyle = "rgba(0,0,0,.28)"; g.fillRect(0, y, w, 2); } }),
      // 4차로 간선 — 길이 16 m × 폭 16 m. 중앙 겹 황색선 · 차선 점선 · 가장자리 실선
      rd4: cvs(256, 256, (g, w, h) => { g.fillStyle = "#3f4248"; g.fillRect(0, 0, w, h); speck(g, w, h, 5000, .07);
        g.fillStyle = "#e9e9e4"; g.fillRect(0, 5, w, 3); g.fillRect(0, h - 8, w, 3); g.fillRect(0, 66, 128, 3); g.fillRect(0, h - 69, 128, 3);
        g.fillStyle = "#e2b93a"; g.fillRect(0, 123, w, 3); g.fillRect(0, 130, w, 3); }),
      // 2차로 — 길이 16 m × 폭 8 m
      rd2: cvs(256, 128, (g, w, h) => { g.fillStyle = "#42454b"; g.fillRect(0, 0, w, h); speck(g, w, h, 2500, .07); g.fillStyle = "#e9e9e4"; g.fillRect(0, 4, w, 3); g.fillRect(0, h - 7, w, 3); g.fillStyle = "#e2b93a"; g.fillRect(0, 62, w, 3); }),
      rd0: cvs(128, 128, (g, w, h) => { g.fillStyle = "#4a4d52"; g.fillRect(0, 0, w, h); speck(g, w, h, 2200, .08); }),
      // 주차장 — 구획 폭 2.5 m × 모듈 17 m(주차 5 · 통로 7 · 주차 5)
      park: cvs(40, 272, (g, w, h) => { g.fillStyle = "#45484d"; g.fillRect(0, 0, w, h); speck(g, w, h, 900, .08); g.fillStyle = "#e6e6e0"; g.fillRect(0, 0, 2, 80); g.fillRect(0, 192, 2, 80); g.fillRect(0, 0, w, 2); g.fillRect(0, h - 2, w, 2); }),
      cross: cvs(32, 8, (g, w, h) => { g.fillStyle = "#3f4248"; g.fillRect(0, 0, w, h); g.fillStyle = "#ecece6"; g.fillRect(2, 0, 16, h); }),
      // 보도 블록 2 × 2 m
      side: cvs(64, 64, (g, w, h) => { g.fillStyle = "#b9b4aa"; g.fillRect(0, 0, w, h); for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) { g.fillStyle = `rgba(${(x + y) % 2 ? "120,96,84" : "0,0,0"},${.05 + .08 * r()})`; g.fillRect(x * 8, y * 8, 7, 7); } }),
    };

    /* ---------- 지표면 온도 모드 — 재질마다 볕 든 곳의 온도 색을 주고, 그림자 진 곳은 그늘 색으로 ---------- */
    const KT = { value: 0 }, lin = v => { const q = new THREE.Color(); q.setStyle(typeof v === "string" ? v : c.col(v)); return q; }, SHC = { value: lin(c.STV.shade) };
    const therm = (m, mode, v) => { m.onBeforeCompile = sh => { sh.uniforms.uKt = KT; sh.uniforms.uShC = SHC; sh.uniforms.uThC = { value: lin(mode === "val" ? v : .5) }; if (mode === "tex") sh.uniforms.tTh = { value: v };
        const mix = mode === "wall" ? "outgoingLight = mix(outgoingLight, outgoingLight * .42 + vec3(.004, .008, .02), uKt * .8);"
          : `outgoingLight = mix(outgoingLight, mix(uShC, ${mode === "tex" ? "texture2D(tTh, vMapUv).rgb" : "uThC"}, getShadowMask()) * (.86 + .14 * dot(outgoingLight, vec3(.9))), uKt);`;
        sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nuniform float uKt; uniform vec3 uShC, uThC;" + (mode === "tex" ? " uniform sampler2D tTh;" : ""))
          .replace("#include <shadowmap_pars_fragment>", "#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>")
          .replace("#include <opaque_fragment>", mix + "\n#include <opaque_fragment>"); };
      m.customProgramCacheKey = () => "khcity-" + mode; return m; };
    const S = c.STV, MATS = {}, M = (k, o, mode, v) => MATS[k] = therm(new THREE.MeshLambertMaterial(Object.assign({ vertexColors: true }, o)), mode, v);
    M("wall", {}, "wall"); M("glass", { color: 0x9fb4c8 }, "wall"); M("aptF", { map: TEX.aptF }, "wall"); M("aptG", { map: TEX.aptG }, "wall"); M("fac", { map: TEX.fac }, "wall"); M("house", { map: TEX.house }, "wall"); M("shut", { map: TEX.shut }, "wall");
    M("roofM", { map: TEX.roofM }, "val", S.pave + .07); M("roofA", { map: TEX.roofA }, "val", S.pave - .06); M("roofT", { map: TEX.roofT }, "val", S.res + .06);
    M("rd4", { map: TEX.rd4 }, "val", S.road); M("rd2", { map: TEX.rd2 }, "val", S.road); M("rd0", { map: TEX.rd0 }, "val", S.road - .02); M("park", { map: TEX.park }, "val", S.road - .01); M("cross", { map: TEX.cross }, "val", S.road - .03);
    M("side", { map: TEX.side }, "val", S.pave - .02);

    /* ---------- 면 쌓기 — 재질별로 모아 한 메시로 ---------- */
    const BT = {}, bt = k => BT[k] || (BT[k] = { p: [], n: [], u: [], c: [] }), _c = new THREE.Color(), CC = {}, col = hex => CC[hex] || (CC[hex] = (_c.set(hex), [_c.r, _c.g, _c.b]));
    const tri = (k, a, b, d, ua, ub, ud, cl) => { const o = bt(k), ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = d[0] - a[0], vy = d[1] - a[1], vz = d[2] - a[2];
      let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx; const l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
      o.p.push(a[0], a[1], a[2], b[0], b[1], b[2], d[0], d[1], d[2]); o.n.push(nx, ny, nz, nx, ny, nz, nx, ny, nz); o.u.push(ua[0], ua[1], ub[0], ub[1], ud[0], ud[1]); o.c.push(cl[0], cl[1], cl[2], cl[0], cl[1], cl[2], cl[0], cl[1], cl[2]); };
    const quad = (k, p0, p1, p2, p3, u0, v0, u1, v1, cl) => { tri(k, p0, p1, p2, [u0, v0], [u1, v0], [u1, v1], cl); tri(k, p0, p2, p3, [u0, v0], [u1, v1], [u0, v1], cl); };
    // 벽 — (x0, z0) → (x1, z1) 로 갈 때 오른쪽이 바깥. 질감 좌표는 길이 / su · 높이 / sv
    const wall = (k, x0, z0, x1, z1, y0, y1, cl, su = 1, sv = 1, vb = y0) => { const L = Math.hypot(x1 - x0, z1 - z0); quad(k, [x0, y0, z0], [x1, y0, z1], [x1, y1, z1], [x0, y1, z0], 0, (y0 - vb) / sv, L / su, (y1 - vb) / sv, cl); };
    const top = (k, x, z, w, d, y, cl, su = 1, sv = 1) => quad(k, [x, y, z + d], [x + w, y, z + d], [x + w, y, z], [x, y, z], x / su, 0, (x + w) / su, d / sv, cl);
    const box = (k, x, z, w, d, y0, y1, cl, kt = k, clT = cl, su = 1, sv = 1) => { wall(k, x, z + d, x + w, z + d, y0, y1, cl, su, sv); wall(k, x + w, z + d, x + w, z, y0, y1, cl, su, sv); wall(k, x + w, z, x, z, y0, y1, cl, su, sv); wall(k, x, z, x, z + d, y0, y1, cl, su, sv); top(kt, x, z, w, d, y1, clT, 2, 2); };
    const cyl = (k, cx, cz, r0, r1, y0, y1, n, cl, cap = true) => { for (let i = 0; i < n; i++) { const a0 = i / n * TAU, a1 = (i + 1) / n * TAU, c0 = Math.cos(a0), s0 = Math.sin(a0), c1 = Math.cos(a1), s1 = Math.sin(a1);
        quad(k, [cx + c1 * r0, y0, cz + s1 * r0], [cx + c0 * r0, y0, cz + s0 * r0], [cx + c0 * r1, y1, cz + s0 * r1], [cx + c1 * r1, y1, cz + s1 * r1], 0, 0, 1, 1, cl);
        if (cap && r1 > .01) tri(k, [cx, y1, cz], [cx + c1 * r1, y1, cz + s1 * r1], [cx + c0 * r1, y1, cz + s0 * r1], [0, 0], [1, 0], [1, 1], cl); } };
    // 박공지붕 — ax "x" 는 용마루가 동서, "z" 는 남북. o 처마 내밀기
    const gable = (kR, kW, x, z, w, d, h, rise, ax, clR, clW, o = .6, su = 4, sv = 4, suW = 1, svW = 1) => {
      if (ax === "x") { const zm = z + d / 2, sl = Math.hypot(d / 2 + o, rise);
        quad(kR, [x - o, h, z + d + o], [x + w + o, h, z + d + o], [x + w + o, h + rise, zm], [x - o, h + rise, zm], 0, 0, (w + 2 * o) / su, sl / sv, clR);
        quad(kR, [x + w + o, h, z - o], [x - o, h, z - o], [x - o, h + rise, zm], [x + w + o, h + rise, zm], 0, 0, (w + 2 * o) / su, sl / sv, clR);
        tri(kW, [x + w, h, z + d], [x + w, h, z], [x + w, h + rise, zm], [0, h / svW], [d / suW, h / svW], [d / 2 / suW, (h + rise) / svW], clW);
        tri(kW, [x, h, z], [x, h, z + d], [x, h + rise, zm], [0, h / svW], [d / suW, h / svW], [d / 2 / suW, (h + rise) / svW], clW);
      } else { const xm = x + w / 2, sl = Math.hypot(w / 2 + o, rise);
        quad(kR, [x + w + o, h, z + d + o], [x + w + o, h, z - o], [xm, h + rise, z - o], [xm, h + rise, z + d + o], 0, 0, (d + 2 * o) / su, sl / sv, clR);
        quad(kR, [x - o, h, z - o], [x - o, h, z + d + o], [xm, h + rise, z + d + o], [xm, h + rise, z - o], 0, 0, (d + 2 * o) / su, sl / sv, clR);
        tri(kW, [x, h, z + d], [x + w, h, z + d], [xm, h + rise, z + d], [0, h / svW], [w / suW, h / svW], [w / 2 / suW, (h + rise) / svW], clW);
        tri(kW, [x + w, h, z], [x, h, z], [xm, h + rise, z], [0, h / svW], [w / suW, h / svW], [w / 2 / suW, (h + rise) / svW], clW); } };
    // 바닥에 누운 띠 — 길 · 주차장 · 횡단보도. 질감 u 는 길이 방향(/ tl), v 는 폭 방향(0 – vr)
    const strip = (k, ax, fx, a, b, wd, y, tl, vr = 1, cl = col(0xffffff)) => { if (ax === "x") quad(k, [a, y, fx + wd / 2], [b, y, fx + wd / 2], [b, y, fx - wd / 2], [a, y, fx - wd / 2], a / tl, 0, b / tl, vr, cl);
      else quad(k, [fx + wd / 2, y, b], [fx + wd / 2, y, a], [fx - wd / 2, y, a], [fx - wd / 2, y, b], b / tl, 0, a / tl, vr, cl); };

    /* ---------- 거리 배치 ---------- */
    // 한 줄을 6 m 마다 짚어 조건이 이어지는 구간만 길로 낸다
    const runs = (ax, fx, from, to, ok, min = 36) => { const out = []; let s = null; for (let q = from; q <= to + 6; q += 6) { const good = q <= to && (ax === "x" ? ok(q, fx) : ok(fx, q)); if (good && s == null) s = q; if (!good && s != null) { if (q - 6 - s >= min) out.push([s, q - 6]); s = null; } } return out; };
    const LOC = [];                                                                                               // 이면도로 [축, 고정 좌표, 시작, 끝, 폭]
    const okInd = (x, z) => zone(x, z) === "ind" && dEdge(x, z) > 18 && !inR(YARD, x, z, 4) && !inB(x, z, 4) && Math.abs(z - RDH) > 10;
    const okDet = (x, z) => zone(x, z) === "det" && dEdge(x, z) > BUF + 8 && !inB(x, z, 2) && Math.abs(x - VX) > 6;
    const okApt = (x, z) => zone(x, z) === "apt" && dEdge(x, z) > BUF + 16 && !inR(PLAZA, x, z, 2) && !inB(x, z, 3) && Math.abs(x - VX) > 6 && z > RDH + 14;
    for (let y0 = 30; y0 < Hm - 90; y0 += 118) runs("x", y0 + 103, 0, Wm, okInd).forEach(([a, b]) => LOC.push(["x", y0 + 103, a, b, 8]));
    for (let x0 = 24; x0 < Wm - 110; x0 += 150) runs("z", x0 + 140, 0, Hm, okInd).forEach(([a, b]) => LOC.push(["z", x0 + 140, a, b, 8]));
    for (let y0 = 18; y0 < .5 * Hm - 40; y0 += 35) runs("x", y0 + 26, .5 * Wm, Wm, okDet).forEach(([a, b]) => LOC.push(["x", y0 + 26, a, b, 6]));
    for (let i = 1, x0 = .55 * Wm; x0 < Wm - 22; x0 += 37, i++) if (i % 3 === 0) runs("z", x0 + 28, 0, RDH - 14, okDet).forEach(([a, b]) => LOC.push(["z", x0 + 28, a, b, 5]));
    for (let y0 = .5 * Hm + 50; y0 < Hm - 110; y0 += 132) runs("x", y0 + 120, .5 * Wm, Wm, okApt).forEach(([a, b]) => LOC.push(["x", y0 + 120, a, b, 7]));
    // 공동주택 동 사이 — 번갈아 주차장 · 조경
    const LOTS = [], GARD = [];
    B.filter(b => b[5] === "apt").forEach((b, i) => { const R = [b[0] + b[2] + 6, b[1] + 4, 34, b[3] - 8], cx = R[0] + 17, cz = R[1] + R[3] / 2;
      if (zone(cx, cz) !== "apt" || dEdge(cx, cz) < BUF + 24 || inR(PLAZA, cx, cz, 20) || Math.abs(cx - VX) < 26 || R[0] + R[2] > Wm - 6 || inB(cx, cz, 16)) return; (i % 2 ? GARD : LOTS).push(R); });

    /* ---------- 바닥 그림(평면) — 지목별 바탕. 길 · 주차장은 그 위에 면으로 한 번 더 얹는다 ---------- */
    const TW = 3072, TH = Math.round(TW * Hm / Wm), gcv = c.off(TW, TH), gx = gcv.getContext("2d"), K = TW / Wm;
    { const g = gx; g.setTransform(K, 0, 0, K, 0, 0); g.fillStyle = "#a6a298"; g.fillRect(0, 0, Wm, Hm);                                    // 주택가 바탕 — 밝은 콘크리트 골목
      g.fillStyle = "#9f9d97"; g.fillRect(.52 * Wm, .5 * Hm, .5 * Wm, .5 * Hm);                                                               // 공동주택 단지 — 포장
      GARD.forEach(R => { g.fillStyle = "#648f4c"; g.fillRect(...R); g.fillStyle = "#b8ad98"; g.fillRect(R[0] + R[2] / 2 - 1.5, R[1], 3, R[3]); });
      B.filter(b => b[5] === "apt").forEach(b => { g.fillStyle = "#6c9654"; g.fillRect(b[0] - 5, b[1] - 6, b[2] + 10, b[3] + 12); g.fillStyle = "#b9b0a0"; g.fillRect(b[0] + b[2] + 3.4, b[1] - 6, 2.2, b[3] + 12); });   // 동 둘레 잔디 · 현관 앞 보행로
      LOTS.forEach(R => { g.fillStyle = "#45484d"; g.fillRect(...R); });
      g.fillStyle = "#c4baa9"; g.fillRect(...PLAZA); g.strokeStyle = "rgba(90,70,50,.22)"; g.lineWidth = .35;                                 // 광장 — 판석 줄눈
      for (let x = PLAZA[0]; x <= PLAZA[0] + PLAZA[2]; x += 4) { g.beginPath(); g.moveTo(x, PLAZA[1]); g.lineTo(x, PLAZA[1] + PLAZA[3]); g.stroke(); }
      for (let y = PLAZA[1]; y <= PLAZA[1] + PLAZA[3]; y += 4) { g.beginPath(); g.moveTo(PLAZA[0], y); g.lineTo(PLAZA[0] + PLAZA[2], y); g.stroke(); }
      B.filter(b => b[5] === "det").forEach(b => { g.fillStyle = pick(["#6f9455", "#7c9a5e", "#a0937e", "#b1aa9c", "#8f9a70"]); g.fillRect(b[0] - 5, b[1] - 5, b[2] + 10, b[3] + 10); });   // 주택 필지
      const path = () => { g.beginPath(); site.forEach((q, i) => i ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1])); g.closePath(); };
      g.lineJoin = "round"; path(); g.strokeStyle = "#5c8a47"; g.lineWidth = BUF * 2; g.stroke();                                              // 완충 녹지 띠
      for (let i = 0; i < 5200; i++) { const x = r() * Wm, y = r() * Hm; if (zone(x, y) !== "buf") continue; g.fillStyle = `rgba(${r() < .5 ? "40,84,36" : "132,168,92"},${.10 + .16 * r()})`; g.beginPath(); g.arc(x, y, 3 + r() * 9, 0, TAU); g.fill(); }
      path(); g.fillStyle = "#909297"; g.fill();                                                                                               // 산업단지 — 콘크리트 포장
      g.fillStyle = "#83858a"; g.fillRect(...YARD); g.strokeStyle = "rgba(255,255,255,.16)"; g.lineWidth = .3;                                // 야적장 — 슬래브 줄눈
      for (let x = YARD[0]; x <= YARD[0] + YARD[2]; x += 12) { g.beginPath(); g.moveTo(x, YARD[1]); g.lineTo(x, YARD[1] + YARD[3]); g.stroke(); }
      for (let y = YARD[1]; y <= YARD[1] + YARD[3]; y += 12) { g.beginPath(); g.moveTo(YARD[0], y); g.lineTo(YARD[0] + YARD[2], y); g.stroke(); }
      g.fillStyle = "#44474c"; g.fillRect(0, RDH - 12, Wm, 24); g.fillRect(VX - 7, 0, 14, Hm); LOC.forEach(([ax, fx, a, b, wd]) => ax === "x" ? g.fillRect(a, fx - wd / 2, b - a, wd) : g.fillRect(fx - wd / 2, a, wd, b - a));
      g.setTransform(1, 0, 0, 1, 0, 0); for (let i = 0; i < 90000; i++) { g.fillStyle = `rgba(${r() < .5 ? "0,0,0" : "255,255,255"},${.07 * r()})`; g.fillRect(r() * TW, r() * TH, 2, 2); } }
    const gtex = new THREE.CanvasTexture(gcv); gtex.colorSpace = THREE.SRGBColorSpace; gtex.anisotropy = 8;
    const gmat = therm(new THREE.MeshLambertMaterial({ map: gtex, transparent: true, opacity: 0 }), "tex", c.thermTex);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(Wm, Hm).rotateX(-Math.PI / 2), gmat); ground.position.set(Wm / 2, 0, Hm / 2); ground.receiveShadow = true; ground.renderOrder = 10; root.add(ground);

    /* ---------- 거리 — 길 · 보도 · 횡단보도 · 가로등 ---------- */
    const WH = col(0xffffff), P = "prop:";
    LOC.forEach(([ax, fx, a, b, wd]) => strip(P + "rd0", ax, fx, a, b, wd, .04, 8));
    strip(P + "rd4", "x", RDH, 0, Wm, 16, .07, 16); strip(P + "rd2", "z", VX, 0, RDH - 8, 8, .07, 16); strip(P + "rd2", "z", VX, RDH + 8, Hm, 8, .07, 16);
    strip(P + "rd0", "x", RDH, VX - 4, VX + 4, 16, .09, 8);                                                                                   // 교차로 한가운데
    [[VX - 10, VX - 5], [VX + 5, VX + 10]].forEach(([a, b]) => strip(P + "cross", "z", (a + b) / 2, RDH - 7.5, RDH + 7.5, b - a, .1, 1));    // 횡단보도 — 간선
    [[RDH - 14, RDH - 9], [RDH + 9, RDH + 14]].forEach(([a, b]) => strip(P + "cross", "x", (a + b) / 2, VX - 3.7, VX + 3.7, b - a, .1, 1));
    for (let x = 240; x < Wm - 120; x += 330) if (Math.abs(x - VX) > 60) strip(P + "cross", "z", x, RDH - 7.5, RDH + 7.5, 5, .1, 1);
    const SWC = col(0xd8d4cc), CURB = col(0x9c9a96);
    [[0, VX - 7], [VX + 7, Wm]].forEach(([a, b]) => [RDH - 12, RDH + 8].forEach(z => box(P + "wall", a, z, b - a, 4, 0, .18, CURB, P + "side", SWC)));
    [[0, RDH - 12], [RDH + 12, Hm]].forEach(([a, b]) => [VX - 7, VX + 4].forEach(x => box(P + "wall", x, a, 3, b - a, 0, .18, CURB, P + "side", SWC)));
    const POLE = col(0x50565e), LAMP = col(0xe8e6da);
    const lamp = (x, z, dx, dz) => { box(P + "wall", x - .12, z - .12, .24, .24, 0, 9, POLE); box(P + "wall", Math.min(x, x + dx * 2.2) - (dz ? .1 : 0), Math.min(z, z + dz * 2.2) - (dx ? .1 : 0), dx ? 2.2 : .2, dz ? 2.2 : .2, 8.8, 9, POLE);
      box(P + "wall", x + dx * 2.2 - .3, z + dz * 2.2 - .3, .6, .6, 8.6, 8.85, LAMP); };
    for (let x = 20, i = 0; x < Wm - 10; x += 44, i++) if (Math.abs(x - VX) > 16) lamp(x, i % 2 ? RDH + 8.7 : RDH - 8.7, 0, i % 2 ? -1 : 1);
    for (let z = 24, i = 0; z < Hm - 10; z += 52, i++) if (Math.abs(z - RDH) > 20) lamp(i % 2 ? VX + 4.7 : VX - 4.7, z, i % 2 ? -1 : 1, 0);
    LOTS.forEach(R => strip(P + "park", "z", R[0] + R[2] / 2, R[1], R[1] + R[3], R[2], .05, 2.5, 2));

    /* ---------- 공장동 ---------- */
    const FW = [0xe9e6de, 0xd9dde2, 0xcfdbe6, 0xe4dccb, 0xd6d6d2], FR = [0x2f6fb4, 0x2f6fb4, 0x7f8790, 0x3f8a6c, 0xa55a3c, 0x356aa8], FT = [0x1f5fbf, 0xc8372d, 0x1e9632, 0xe08a1e, 0x222e6b];
    const GLS = col(0x6f8fae), SKY = col(0xbfd6e6), VENT = col(0xb9bec4), DARK = col(0x3a3f46);
    B.filter(b => b[5] === "ind").forEach(([x, z, w, d, h]) => { const I = "ind:", cw = col(pick(FW)), cr = col(pick(FR)), ctm = col(pick(FT)), rise = d * .09;
      wall(I + "fac", x, z + d, x + w, z + d, 0, h, cw, 6, 6); wall(I + "fac", x + w, z + d, x + w, z, 0, h, cw, 6, 6); wall(I + "fac", x + w, z, x, z, 0, h, cw, 6, 6); wall(I + "fac", x, z, x, z + d, 0, h, cw, 6, 6);
      gable(I + "roofM", I + "fac", x, z, w, d, h, rise, "x", cr, cw, 1, 4, 4, 6, 6);
      const e = .06; [[x - e, z + d + e, x + w + e, z + d + e], [x + w + e, z + d + e, x + w + e, z - e], [x + w + e, z - e, x - e, z - e], [x - e, z - e, x - e, z + d + e]].forEach(q => wall(I + "wall", ...q, h - 1.5, h - .2, ctm));   // 처마 아래 색 띠
      for (let q = x + 6; q < x + w - 14; q += 16) { wall(I + "glass", q, z + d + e, q + 10, z + d + e, h * .52, h * .52 + 1.6, GLS); wall(I + "glass", q + 10, z - e, q, z - e, h * .52, h * .52 + 1.6, GLS); }   // 고창 띠
      const nS = 2 + Math.floor(r() * 2), south = z + d / 2 < RDH; for (let q = 0; q < nS; q++) { const sx = x + w * (.18 + q * .28), zz = south ? z + d + .1 : z - .1;                 // 셔터 — 간선 쪽 벽
        south ? wall(I + "shut", sx, zz, sx + 7, zz, 0, 5.4, WH, 2, 2) : wall(I + "shut", sx + 7, zz, sx, zz, 0, 5.4, WH, 2, 2); box(I + "wall", sx - .6, south ? z + d : z - 2.2, 8.2, 2.2, 5.7, 6, VENT); }
      for (let q = x + 8; q < x + w - 8; q += 13) box(I + "wall", q, z + d / 2 - .9, 4, 1.8, h + rise - .3, h + rise + 1.1, VENT);                                                       // 용마루 환기구
      for (let q = x + 12; q < x + w - 12; q += 22) [1, -1].forEach(sd => { const z0 = z + d / 2 + sd * d * .14, z1 = z + d / 2 + sd * d * .36, y0 = h + rise * (1 - .28) + .08, y1 = h + rise * (1 - .72) + .08;   // 채광창
        sd > 0 ? quad(I + "glass", [q, y1, z1], [q + 2.4, y1, z1], [q + 2.4, y0, z0], [q, y0, z0], 0, 0, 1, 1, SKY) : quad(I + "glass", [q + 2.4, y1, z1], [q, y1, z1], [q, y0, z0], [q + 2.4, y0, z0], 0, 0, 1, 1, SKY); });
      const t = r();
      if (t < .3) { const sx = x + w + 5, sz = z + d * .3; cyl(I + "wall", sx, sz, 1.5, 1.1, 0, h + 16, 12, col(0xd2d2ce)); cyl(I + "wall", sx, sz, 1.14, 1.1, h + 13, h + 15, 12, col(0xc8372d), false); cyl(I + "wall", sx, sz, 1.22, 1.18, h + 9, h + 11, 12, col(0xc8372d), false); }   // 굴뚝
      else if (t < .58) for (let q = 0; q < 2 + Math.floor(r() * 2); q++) { const sx = x + w + 5.5, sz = z + 8 + q * 9; cyl(I + "wall", sx, sz, 3.4, 3.4, 0, 13, 14, col(0xc9ced3), false); cyl(I + "wall", sx, sz, 3.4, .3, 13, 15.2, 14, col(0xb4bac0)); }   // 사일로
      else if (t < .8) for (let q = 0; q < 3; q++) box(I + "wall", x + w * (.2 + q * .25), z + d * .2, 5, 3, h + rise * .4, h + rise * .4 + 2.2, VENT);                                // 옥상 설비
      box(I + "wall", x + w * .5 - 4, (south ? z + d : z - 1.2), 8, 1.2, 0, 3.2, DARK); });                                                                                                 // 출입구 캐노피 아래 어두운 문

    /* ---------- 공동주택 ---------- */
    const AW = [0xf2efe8, 0xe9e6dd, 0xece8e0, 0xe2e4e6], AC = [0x3b6fb0, 0x2f8a7a, 0xb8643c, 0x596a86, 0x8a6a3a], SLAB = col(0xcfccc4), ROOFC = col(0xb9b6ae), PLINTH = col(0x8d8a84);
    B.filter(b => b[5] === "apt").forEach(([x, z, w, d, h]) => { const I = "apt:", n = Math.max(8, Math.round(h / 2.9)), H2 = n * 2.9, cw = col(pick(AW)), acc = col(pick(AC)), bay = Math.round(d / 3.6), su = d / bay * 2, sv = 5.8;
      wall(I + "aptF", x + w, z + d, x + w, z, 0, H2, cw, su, sv); wall(I + "aptF", x, z, x, z + d, 0, H2, cw, su, sv);                                                                // 동 · 서 앞면
      wall(I + "aptG", x, z + d, x + w, z + d, 0, H2, cw, w, sv); wall(I + "aptG", x + w, z, x, z, 0, H2, cw, w, sv);                                                                  // 남 · 북 측벽
      wall(I + "wall", x + 1.2, z + d + .05, x + 4.2, z + d + .05, 0, H2, acc); wall(I + "wall", x + w - 1.2, z - .05, x + w - 4.2, z - .05, 0, H2, acc);                              // 측벽 색 띠
      [[x - .04, z + d + .04, x + w + .04, z + d + .04], [x + w + .04, z + d + .04, x + w + .04, z - .04], [x + w + .04, z - .04, x - .04, z - .04], [x - .04, z - .04, x - .04, z + d + .04]].forEach(q => wall(I + "wall", ...q, 0, 1.3, PLINTH));
      for (let f = 1; f <= n; f++) box(I + "wall", x + w, z + .8, .9, d - 1.6, f * 2.9 - .22, f * 2.9, SLAB);                                                                          // 층별 발코니 슬래브(동쪽)
      top(I + "roofA", x, z, w, d, H2, ROOFC, 2, 2);
      [[x, z, w, .3], [x, z + d - .3, w, .3], [x, z, .3, d], [x + w - .3, z, .3, d]].forEach(q => box(I + "wall", ...q, H2, H2 + 1.1, cw));                                             // 파라펫
      const nb = Math.max(2, Math.round(d / 30)); for (let q = 0; q < nb; q++) { const zz = z + d * (q + .5) / nb - 3.5; box(I + "wall", x + 5, zz, 8, 7, H2, H2 + 4.2, cw, I + "roofA", ROOFC); box(I + "wall", x + 6.2, zz + 1.4, 3, 3, H2 + 4.2, H2 + 5.6, VENT);   // 옥탑 · 물탱크
        box(I + "wall", x + w, zz + .8, 3.2, 5.4, 3.3, 3.7, acc); box(I + "wall", x + w + 2.9, zz + 1, .25, .25, 0, 3.3, PLINTH); box(I + "wall", x + w + 2.9, zz + 5.7, .25, .25, 0, 3.3, PLINTH); } });   // 현관 캐노피

    /* ---------- 단독주택 ---------- */
    const HW = [0xf1eee7, 0xe8e0cf, 0xd9c4a6, 0xb5694a, 0xcfd3d6, 0xe6e2da, 0xa8563c], HR = [0xb5533a, 0x8c3f2e, 0x4a4f57, 0x34527e, 0x3c6b55, 0x6a6f76], HF = [0x4f9a72, 0x5aa67e, 0x8f959b, 0x4f9a72];
    B.filter(b => b[5] === "det").forEach(([x, z, w, d, h]) => { const I = "det:", fl = h > 7.4 ? 2 : 1, hh = fl * 3.2, cw = col(pick(HW));
      wall(I + "house", x, z + d, x + w, z + d, 0, hh, cw, 6.5, 3.2); wall(I + "house", x + w, z + d, x + w, z, 0, hh, cw, 5.5, 3.2); wall(I + "house", x + w, z, x, z, 0, hh, cw, 6.5, 3.2); wall(I + "house", x, z, x, z + d, 0, hh, cw, 5.5, 3.2);
      if (r() < .42) { const cf = col(pick(HF)); top(I + "roofA", x, z, w, d, hh, cf, 2, 2); [[x, z, w, .25], [x, z + d - .25, w, .25], [x, z, .25, d], [x + w - .25, z, .25, d]].forEach(q => box(I + "wall", ...q, hh, hh + .9, cw));   // 옥상 방수 지붕
        box(I + "wall", x + 1, z + 1, 3, 3.4, hh, hh + 2.5, cw, I + "roofA", cf); if (r() < .5) cyl(I + "wall", x + w - 2.4, z + 2.4, 1, 1, hh, hh + 1.5, 8, col(0xd9b23a)); }                                  // 옥탑 · 노란 물탱크
      else gable(I + "roofT", I + "wall", x, z, w, d, hh, 2.2 + r() * 1.2, w > d ? "x" : "z", col(pick(HR)), cw, .55, 2, 2); });

    /* ---------- 메시로 묶기 ---------- */
    Object.keys(BT).forEach(key => { const [g, k] = key.split(":"), o = BT[key], geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.Float32BufferAttribute(o.p, 3)); geo.setAttribute("normal", new THREE.Float32BufferAttribute(o.n, 3)); geo.setAttribute("uv", new THREE.Float32BufferAttribute(o.u, 2)); geo.setAttribute("color", new THREE.Float32BufferAttribute(o.c, 3));
      const m = new THREE.Mesh(geo, MATS[k]); m.castShadow = g !== "prop" || k === "wall"; m.receiveShadow = true; m.frustumCulled = false; G[g].add(m); });

    /* ---------- 수목(인스턴스) — 줄기 + 수관 덩이 둘 ---------- */
    const trees = TR.map(([x, z, rad, h]) => [x, z, rad, h]);
    GARD.forEach(R => { for (let i = 0; i < 9; i++) trees.push([R[0] + 4 + r() * (R[2] - 8), R[1] + 5 + r() * (R[3] - 10), 3.2 + r() * 2, 7 + r() * 4]); });
    B.filter(b => b[5] === "det").forEach(b => { if (r() < .35) trees.push([b[0] - 2.5, b[1] + b[3] + 2.5, 2 + r(), 5 + r() * 2]); });
    for (let z = 30; z < Hm - 20; z += 26) if (Math.abs(z - RDH) > 22) { trees.push([VX - 5.6, z, 2.6, 7.5]); trees.push([VX + 5.6, z + 13, 2.6, 7.5]); }
    { const I4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), s = new THREE.Vector3(), cc = new THREE.Color();
      const mk = (geo, mat, n) => { const m = new THREE.InstancedMesh(geo, mat, n); m.castShadow = m.receiveShadow = true; m.frustumCulled = false; G.tree.add(m); return m; };
      const crown = mk(new THREE.IcosahedronGeometry(1, 1), therm(new THREE.MeshLambertMaterial({ flatShading: true }), "val", S.tree), trees.length * 2);
      const trunk = mk(new THREE.CylinderGeometry(.5, .7, 1, 6), therm(new THREE.MeshLambertMaterial({ color: 0x6a5240 }), "val", S.tree + .1), trees.length);
      const GC = [0x3f7a3a, 0x4c8a40, 0x356b34, 0x5a9648, 0x2f6030, 0x487f52];
      trees.forEach(([x, z, rad, h], i) => { const th = h * .42; I4.compose(p.set(x, th / 2, z), q.identity(), s.set(rad * .16, th, rad * .16)); trunk.setMatrixAt(i, I4);
        [0, 1].forEach(j => { const rr = rad * (j ? .72 : 1), hh = h * (j ? .46 : .6); e.set(0, r() * TAU, 0); q.setFromEuler(e);
          I4.compose(p.set(x + (j ? (r() - .5) * rad * .7 : 0), j ? h * .78 : th + hh * .45, z + (j ? (r() - .5) * rad * .7 : 0)), q, s.set(rr, hh * .5, rr)); crown.setMatrixAt(i * 2 + j, I4);
          cc.set(pick(GC)).multiplyScalar(.85 + .3 * r()); crown.setColorAt(i * 2 + j, cc); }); });
      crown.instanceMatrix.needsUpdate = true; crown.instanceColor.needsUpdate = true; trunk.instanceMatrix.needsUpdate = true; }

    /* ---------- 차량(인스턴스) — 주차장 · 길 위. 서 있는 차다 ---------- */
    { const cars = [], CAR = [0xf2f2f0, 0xf2f2f0, 0xd9dadc, 0x2b2e33, 0x2b2e33, 0x8a9096, 0x1f4f9a, 0xb0352c, 0xc9c2b2, 0x4a6a58];
      LOTS.forEach(R => [2.5, 14.5, 19.5, 31.5].forEach(ox => { for (let z = R[1] + 1.25; z < R[1] + R[3] - 1; z += 2.5) if (r() < .62) cars.push([R[0] + ox, z, 0, 1]); }));
      for (let i = 0; i < 46; i++) { const ln = Math.floor(r() * 4), x = 30 + r() * (Wm - 60); if (Math.abs(x - VX) > 14) cars.push([x, RDH + [-5.6, -2, 2, 5.6][ln], ln < 2 ? Math.PI : 0, r() < .12 ? 2 : 1]); }
      for (let i = 0; i < 16; i++) { const z = 20 + r() * (Hm - 40); if (Math.abs(z - RDH) > 16) cars.push([VX + (r() < .5 ? -1.9 : 1.9), z, Math.PI / 2, 1]); }
      LOC.forEach(([ax, fx, a, b, wd]) => { for (let q = a + 8; q < b - 8; q += 9 + r() * 30) if (r() < .5) cars.push(ax === "x" ? [q, fx + wd / 2 - 1.1, 0, 1] : [fx + wd / 2 - 1.1, q, Math.PI / 2, 1]); });
      for (let q = 0; q < 7; q++) cars.push([YARD[0] + 10 + q * 7, YARD[1] + 7, Math.PI / 2, 2.1]);                                              // 야적장 북쪽 가장자리의 화물차
      const cb = "tmp:car", BODY = col(0xffffff), GL = col(0x20262e), TY = col(0x16181b);                                                         // 차 한 대(길이 4.4 · 폭 1.8 · 높이 1.45, 앞이 +x)
      box(cb, -2.2, -.9, 4.4, 1.8, .28, .86, BODY); box(cb, -1.15, -.8, 2.3, 1.6, .86, 1.42, GL, cb, BODY); [[-1.6, -.95], [1.0, -.95], [-1.6, .73], [1.0, .73]].forEach(([x, z]) => box(cb, x, z, .62, .22, 0, .6, TY));
      const o = BT[cb], geo = new THREE.BufferGeometry(); geo.setAttribute("position", new THREE.Float32BufferAttribute(o.p, 3)); geo.setAttribute("normal", new THREE.Float32BufferAttribute(o.n, 3)); geo.setAttribute("color", new THREE.Float32BufferAttribute(o.c, 3));
      const m = new THREE.InstancedMesh(geo, therm(new THREE.MeshLambertMaterial({ vertexColors: true }), "wall"), cars.length); m.castShadow = m.receiveShadow = true; m.frustumCulled = false;
      const I4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), s = new THREE.Vector3(), cc = new THREE.Color();
      cars.forEach(([x, z, a, k], i) => { e.set(0, -a, 0); q.setFromEuler(e); I4.compose(p.set(x, .06, z), q, s.set(k, k > 1.5 ? k * 1.25 : k, k > 1.5 ? 1.35 : 1)); m.setMatrixAt(i, I4); cc.set(k > 1.5 ? pick([0xf2f2f0, 0x2f5fa8, 0xd9dadc]) : pick(CAR)); m.setColorAt(i, cc); });
      m.instanceMatrix.needsUpdate = true; m.instanceColor.needsUpdate = true; G.prop.add(m); }

    /* ---------- 빛 — 태양(그림자) + 하늘빛 ---------- */
    const SM = Number(new URLSearchParams(location.search).get("csm")) || 4096;      // ?csm=2048 — 그림자 맵 크기(검수 · 느린 장비용)
    const sunL = new THREE.DirectionalLight(0xfff0da, 3), hemi = new THREE.HemisphereLight(0xbcd6ff, 0x94897a, .72);
    sunL.castShadow = true; sunL.shadow.mapSize.set(SM, SM); const SC = sunL.shadow.camera, HX = Math.hypot(Wm, Hm) / 2000 * 1.02;
    SC.left = -HX; SC.right = HX; SC.top = HX; SC.bottom = -HX; SC.near = 1.2; SC.far = 4.8; SC.updateProjectionMatrix(); sunL.shadow.bias = -.00006; sunL.shadow.normalBias = .0004;
    c.scene.add(sunL, sunL.target, hemi);
    const ctr = new THREE.Vector3(); let fr = 0;

    return window.KH_FUT_CITY.last = {
      root, nTree: trees.length, dbg: { G, sunL, hemi, ground, R: c.R },      // dbg — 검수용 손잡이
      // kg 바닥이 드러남 · kInd / kDet / kApt 건물이 솟음 · kt 지표면 온도 모드
      set(kg, kInd, kDet, kApt, kt) { gmat.opacity = kg; G.prop.visible = kg > .5; G.ind.scale.y = Math.max(.001, kInd); G.det.scale.y = Math.max(.001, kDet); G.apt.scale.y = Math.max(.001, kApt); G.tree.scale.y = Math.max(.001, kDet);
        G.ind.visible = kInd > .002; G.det.visible = G.tree.visible = kDet > .002; G.apt.visible = kApt > .002; KT.value = kt; if (kApt < 1 || !(fr++ % 3)) c.R.shadowMap.needsUpdate = true; },      // 그림자 맵 — 건물이 솟는 동안은 매 장면, 그 뒤에는 세 장면에 한 번 다시 굽는다(해가 천천히 움직인다)
      // 태양 — el 고도각 · az 방위각(남쪽에서 서쪽으로 +). 낮을수록 빛이 누그러지고 붉어진다
      sun(sn) { root.updateWorldMatrix(true, false); ctr.set(Wm / 2, 0, Hm / 2).applyMatrix4(root.matrixWorld); sunL.target.position.copy(ctr);
        sunL.position.set(ctr.x - Math.sin(sn.az) * Math.cos(sn.el) * 3, ctr.y + Math.sin(sn.el) * 3, ctr.z + Math.cos(sn.az) * Math.cos(sn.el) * 3);
        const k = Math.min(1, Math.max(0, Math.sin(sn.el) * 1.5)); sunL.intensity = 2 + 1.7 * k; sunL.color.setRGB(1, .86 + .1 * k, .68 + .2 * k); },
    };
  };
})();
