/* Jom Belajar – enjin permainan. Kandungan berada dalam folder data/.
   Bahasa Inggeris sentiasa ada dalam halaman (kelas "en") tetapi tersembunyi;
   butang 🇬🇧 di atas hanya menunjukkan atau menyembunyikannya. */
(function () {
  "use strict";
  var app = document.getElementById("app");
  /* ---------- simpanan: satu senarai murid, dan kemajuan berasingan bagi setiap murid ---------- */
  var OLD = "jom-belajar-v1", PKEY = "jom-belajar-profiles", SKEY = "jom-belajar-p:";
  var AV = ["🦉", "🐱", "🐼", "🦊", "🐯", "🐰", "🦄", "🐸", "🐵", "🐧", "🦁", "🐨"];
  var YEAR = 2; // tahun persekolahan disimpan pada setiap murid, sedia untuk Tahun 1–6 kelak
  function fresh() { return { stars: {}, box: {}, streak: 0, last: 0, eng: false, sound: true }; }
  function get(k) { try { return JSON.parse(localStorage.getItem(k) || "null"); } catch (e) { return null; } }
  function put(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  var P = { cur: null, list: [] }; // murid: { id, name, av, year }
  var ME = null, S = fresh();
  function saveP() { put(PKEY, P); }
  function save() { if (ME) put(SKEY + ME.id, S); }
  function addProfile(name, av, state) {
    var id = "p" + Date.now().toString(36) + Math.floor(Math.random() * 1296).toString(36);
    name = String(name || "").trim().slice(0, 20) || "Murid " + (P.list.length + 1);
    P.list.push({ id: id, name: name, av: AV.indexOf(av) < 0 ? AV[0] : av, year: YEAR });
    put(SKEY + id, Object.assign(fresh(), state || {}));
    saveP();
    return id;
  }
  function use(id) {
    ME = P.list.filter(function (p) { return p.id === id; })[0] || null;
    P.cur = ME ? ME.id : null; saveP();
    S = Object.assign(fresh(), (ME && get(SKEY + ME.id)) || {});
    applyEng();
  }
  function removeProfile(id) {
    P.list = P.list.filter(function (p) { return p.id !== id; });
    try { localStorage.removeItem(SKEY + id); } catch (e) {}
    use(null);
  }
  (function () {
    var p = get(PKEY);
    if (p && Array.isArray(p.list)) { P = p; return; }
    // versi lama menyimpan seorang murid sahaja – jadikan dia murid pertama, kemajuan dikekalkan
    var old = get(OLD);
    if (old && old.asked) {
      var st = fresh();
      ["stars", "box", "streak", "last", "eng", "sound"].forEach(function (k) { if (k in old) st[k] = old[k]; });
      addProfile(old.name, AV[0], st);
    }
  })();

  var SUBJECTS = window.SUBJECTS || [];
  var EN = window.EN || {};
  var AR = /[؀-ۿݐ-ݿ]/;
  var INTERVALS = [0, 1, 2, 4, 7, 14]; // hari sebelum soalan muncul semula (kotak Leitner)

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function txt(s) { return AR.test(s) ? '<span class="ar" dir="auto">' + esc(s) + "</span>" : esc(s); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function arr(x) { return x ? (Array.isArray(x) ? x : [x]) : []; }
  function uniq(a) { return a.filter(function (x, i) { return a.indexOf(x) === i; }); }
  function today() { var d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 864e5); }
  function $(s) { return app.querySelector(s); }
  function on(sel, fn) { Array.prototype.forEach.call(app.querySelectorAll(sel), function (el) { el.addEventListener("click", function (e) { fn(el, e); }); }); }
  function render(html) { app.innerHTML = html; window.scrollTo(0, 0); }

  /* ---------- Bahasa Inggeris ---------- */
  // Cari terjemahan tulisan tangan dalam data/en.js. Tiada terjemahan = tiada apa-apa dipaparkan.
  function tr(s) {
    var core = String(s).replace(/^[^A-Za-z0-9']+/, ""), e = EN[core.toLowerCase()];
    if (!e) return "";
    var c = core.charAt(0);
    return c !== c.toLowerCase() ? e.charAt(0).toUpperCase() + e.slice(1) : e;
  }
  function en(e) { return e ? '<span class="en">' + esc(e) + "</span>" : ""; }
  function bi(s, skip) { return txt(s) + (skip ? "" : en(tr(s))); } // Melayu dahulu, Inggeris di bawah
  function applyEng() {
    document.body.classList.toggle("eng", !!S.eng);
    var b = document.getElementById("eng");
    b.setAttribute("aria-pressed", S.eng ? "true" : "false");
  }
  (function () {
    var b = document.createElement("button");
    b.id = "eng"; b.textContent = "🇬🇧"; b.setAttribute("aria-label", "Tunjuk Bahasa Inggeris / Show English");
    b.addEventListener("click", function () { S.eng = !S.eng; save(); applyEng(); sfx.tap(); });
    document.body.appendChild(b);
  })();

  /* ---------- bunyi & suara ---------- */
  var ac;
  function tone(f, t, d, type) {
    if (!S.sound) return;
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      var o = ac.createOscillator(), g = ac.createGain();
      o.type = type || "sine"; o.frequency.value = f; o.connect(g); g.connect(ac.destination);
      var s = ac.currentTime + t;
      g.gain.setValueAtTime(0.15, s); g.gain.exponentialRampToValueAtTime(0.001, s + d);
      o.start(s); o.stop(s + d);
    } catch (e) {}
  }
  var sfx = {
    ok: function () { tone(660, 0, 0.12); tone(880, 0.1, 0.2); },
    bad: function () { tone(190, 0, 0.28, "triangle"); },
    tap: function () { tone(520, 0, 0.05); },
    win: function () { [523, 659, 784, 1047].forEach(function (f, i) { tone(f, i * 0.12, 0.22); }); }
  };
  var canSpeak = "speechSynthesis" in window;
  if (canSpeak) { try { speechSynthesis.getVoices(); } catch (e) {} }
  function speak(t, arabic) {
    if (!canSpeak) return;
    try {
      t = t.replace(/_+/g, " ... ");
      if (arabic) t = t.replace(/\(.*?\)/g, "").replace(/[A-Za-z]/g, "");
      var u = new SpeechSynthesisUtterance(t), vs = speechSynthesis.getVoices(), want = arabic ? ["ar"] : ["ms", "id"], v;
      for (var i = 0; i < want.length && !v; i++) v = vs.filter(function (x) { return x.lang.toLowerCase().indexOf(want[i]) === 0; })[0];
      if (v) { u.voice = v; u.lang = v.lang; } else u.lang = arabic ? "ar-SA" : "ms-MY";
      u.rate = 0.85; speechSynthesis.cancel(); speechSynthesis.speak(u);
    } catch (e) {}
  }

  /* ---------- kemajuan ---------- */
  function totalStars() { var n = 0; for (var k in S.stars) n += S.stars[k]; return n; }
  function setStars(key, n) { if (key && n > (S.stars[key] || 0)) S.stars[key] = n; }
  function mark(key, ok) {
    if (!key) return;
    var b = S.box[key] ? S.box[key].b : 0;
    b = ok ? Math.min(b + 1, 5) : 0;
    S.box[key] = { b: b, d: today() + INTERVALS[b] };
    save();
  }
  function bumpStreak() {
    var t = today();
    if (S.last !== t) { S.streak = S.last === t - 1 ? S.streak + 1 : 1; S.last = t; }
    save();
  }
  function starStr(n) { return "⭐".repeat(n) + '<span class="dim">' + "⭐".repeat(3 - n) + "</span>"; }

  /* ---------- bank soalan ---------- */
  function gamesOf(top) {
    var g = ["kuiz"];
    if (arr(top.pairs).length) g.push("padan");
    if (arr(top.sort).length) g.push("kelas");
    if ((top.order || []).length) g.push("susun");
    return g;
  }
  function tkey(sub, top) { return sub.id + "." + top.id; }
  // Bahasa Melayu: pilihan jawapan tidak diterjemah, supaya butang 🇬🇧 tidak membocorkan jawapan.
  function hideAns(sub) { return sub.id === "bm"; }
  function pool(sub, top, only) {
    var out = [], base = tkey(sub, top), skip = hideAns(sub);
    if (!only || only === "q") (top.q || []).forEach(function (x, i) {
      out.push({ key: base + "|q" + i, q: x[0], en: x[1], opts: x[2].slice(), ans: x[2][0], why: x[3] || "", sub: sub, top: top, skip: skip });
    });
    if (!only || only === "p") arr(top.pairs).forEach(function (P, pi) {
      P.items.forEach(function (x, i) {
        var others = shuffle(uniq(P.items.map(function (y) { return y[1]; }).filter(function (y) { return y !== x[1]; }))).slice(0, 3);
        if (!others.length) return;
        out.push({ key: base + "|p" + pi + "_" + i, q: P.ask, en: P.en, big: x[0], opts: [x[1]].concat(others), ans: x[1], why: "", sub: sub, top: top, speakAr: P.speakAr, skip: skip });
      });
    });
    if (!only || only === "s") arr(top.sort).forEach(function (T, ti) {
      T.items.forEach(function (x, i) {
        out.push({ key: base + "|s" + ti + "_" + i, q: T.ask, en: T.en, big: x[0], opts: T.cats.slice(), ans: T.cats[x[1]], why: "", fixed: true, sub: sub, top: top, skip: skip });
      });
    });
    return out;
  }
  function allPool() {
    var out = [];
    SUBJECTS.forEach(function (s) { s.topics.forEach(function (t) { out = out.concat(pool(s, t)); }); });
    return out;
  }
  function dueCount() { var t = today(), n = 0; for (var k in S.box) if (S.box[k].d <= t && S.box[k].b < 5) n++; return n; }
  function masteredCount() { var n = 0; for (var k in S.box) if (S.box[k].b >= 3) n++; return n; }
  function reviewSet() {
    var t = today(), all = allPool();
    var due = all.filter(function (x) { return S.box[x.key] && S.box[x.key].d <= t && S.box[x.key].b < 5; });
    due = shuffle(due).sort(function (a, b) { return S.box[a.key].b - S.box[b.key].b; }).slice(0, 10);
    if (due.length < 10) {
      // tambah soalan baharu daripada topik yang sudah dimulakan, kemudian apa-apa topik
      var started = {}; for (var k in S.box) started[k.split("|")[0]] = 1;
      var fresh = shuffle(all.filter(function (x) { return !S.box[x.key]; }));
      fresh.sort(function (a, b) { return (started[b.key.split("|")[0]] || 0) - (started[a.key.split("|")[0]] || 0); });
      due = due.concat(fresh.slice(0, 10 - due.length));
    }
    return shuffle(due);
  }

  /* ---------- paparan ---------- */
  function bar(title, right) {
    return '<header class="bar"><button class="back" id="back" aria-label="Kembali">←</button><h1>' + title + '</h1>' + (right === " " ? "<span></span>" : '<div class="right">' + (right || "⭐ " + totalStars()) + "</div>") + "</header>";
  }
  function color(c) { document.documentElement.style.setProperty("--c", c || "#7C5CFF"); }

  function avs(sel) {
    return '<div class="avs">' + AV.map(function (a) { return '<button class="av' + (a === sel ? " sel" : "") + '" data-av="' + a + '">' + a + "</button>"; }).join("") + "</div>";
  }
  function avPick() {
    on("[data-av]", function (el) {
      Array.prototype.forEach.call(app.querySelectorAll(".av"), function (b) { b.classList.toggle("sel", b === el); });
      sfx.tap();
    });
  }
  function avSel() { var el = $(".av.sel"); return el ? el.dataset.av : AV[0]; }

  // murid baharu (juga skrin pertama apabila belum ada sesiapa)
  function welcome() {
    color();
    var first = !P.list.length, free = AV.filter(function (a) { return !P.list.some(function (p) { return p.av === a; }); })[0] || AV[0];
    render((first ? "" : bar("➕ Murid baharu", " ")) + '<div class="welcome' + (first ? "" : " sub") + '">' +
      (first ? '<div class="mascot">🦉</div><h1>Selamat datang!' + en("Welcome!") + "</h1>" : "") + "<p>Siapa nama awak?" + en("What is your name?") + "</p>" +
      '<div class="panel" style="margin-top:20px"><input type="text" id="nm" placeholder="Nama saya..." maxlength="20" autocomplete="off"></div>' +
      "<p>Pilih gambar awak" + en("Choose your picture") + "</p>" + avs(free) +
      '<button class="btn" id="go">Jom mula! 🚀' + en("Let's start!") + "</button>" +
      '<button class="btn alt" id="rest">📥 Ada kod sandaran?' + en("Have a backup code?") + "</button></div>");
    avPick();
    on("#back", who);
    on("#go", function () { var eng = S.eng; use(addProfile($("#nm").value, avSel())); S.eng = eng; save(); applyEng(); home(); });
    on("#rest", function () { restore(first ? welcome : who); });
  }

  // pilih murid – dipaparkan semasa mula apabila ada lebih daripada seorang
  function who() {
    if (!P.list.length) return welcome();
    color();
    var h = '<div class="welcome sub"><div class="mascot">🦉</div><h1>Siapa yang bermain?' + en("Who is playing?") + '</h1><div class="grid" style="margin-top:18px">';
    P.list.forEach(function (p) {
      var st = get(SKEY + p.id) || {}, n = 0;
      for (var k in st.stars || {}) n += st.stars[k];
      h += '<button class="card" data-p="' + p.id + '"><span class="ic">' + p.av + "</span><span><b>" + esc(p.name) + '</b><span class="st">⭐ ' + n + "</span></span></button>";
    });
    render(h + '</div><button class="btn alt" id="add">➕ Tambah murid' + en("Add a child") + "</button>" +
      '<button class="btn alt" id="rest">📥 Ada kod sandaran?' + en("Have a backup code?") + "</button></div>");
    on("[data-p]", function (el) { use(el.dataset.p); sfx.tap(); home(); });
    on("#add", welcome);
    on("#rest", function () { restore(who); });
  }

  function home() {
    if (!ME) return who();
    color();
    var due = dueCount();
    var h = '<div class="hello"><button class="mascot" id="who" aria-label="Tukar murid">' + ME.av + '</button><div class="grow"><h1>Hai, ' + esc(ME.name) + "! 👋</h1><p>Jom belajar sambil bermain." + en("Let's learn while we play.") + '</p></div><button class="round" id="set" aria-label="Tetapan">⚙️</button></div>' +
      '<div class="stats"><div>⭐ <b>' + totalStars() + "</b><small>bintang" + en("stars") + "</small></div><div>🔥 <b>" + (S.last >= today() - 1 ? S.streak : 0) + "</b><small>hari berturut-turut" + en("days in a row") + "</small></div><div>🧠 <b>" + masteredCount() + "</b><small>sudah ingat" + en("remembered") + "</small></div></div>" +
      '<button class="review" id="rev">🔁 Ulang Kaji Hari Ini<small>' + (due ? due + " soalan perlu diulang" : "10 soalan campuran") + "</small>" + en("Today's revision – " + (due ? due + " questions to go over again" : "10 mixed questions")) + "</button>" +
      '<div class="grid">';
    SUBJECTS.forEach(function (s, i) {
      var got = 0, max = 0;
      s.topics.forEach(function (t) { gamesOf(t).forEach(function (g) { max += 3; got += S.stars[tkey(s, t) + ":" + g] || 0; }); });
      h += '<button class="card big" data-s="' + i + '" style="--c:' + s.color + '"><span class="ic">' + s.icon + "</span><span><b>" + esc(s.name) + "</b>" + en(s.en) + '<span class="st">⭐ ' + got + " / " + max + "</span></span></button>";
    });
    render(h + "</div>");
    on("[data-s]", function (el) { sfx.tap(); subject(SUBJECTS[+el.dataset.s]); });
    on("#set", settings);
    on("#who", function () { sfx.tap(); who(); });
    on("#rev", function () { sfx.tap(); color("#FF6B6B"); runQuiz(reviewSet(), { title: "🔁 Ulang Kaji", back: home, again: function () { runQuiz(reviewSet(), this); } }); });
  }

  function subject(sub) {
    color(sub.color);
    var h = bar(sub.icon + " " + esc(sub.name)) + '<div class="grid">';
    sub.topics.forEach(function (t, i) {
      var g = gamesOf(t), got = 0;
      g.forEach(function (x) { got += S.stars[tkey(sub, t) + ":" + x] || 0; });
      h += '<button class="card" data-t="' + i + '"><span class="ic">' + t.icon + "</span><span><b>" + esc(t.t) + "</b>" + en(t.en) + '<span class="st">⭐ ' + got + " / " + g.length * 3 + "</span></span></button>";
    });
    render(h + "</div>");
    on("#back", home);
    on("[data-t]", function (el) { sfx.tap(); topic(sub, sub.topics[+el.dataset.t]); });
  }

  var GAME = {
    kuiz: ["❓", "Kuiz", "Quiz – choose the answer"],
    padan: ["🧩", "Padankan", "Match the pairs"],
    kelas: ["🗂️", "Kelaskan", "Sort into groups"],
    susun: ["🔢", "Susun", "Put in order"]
  };
  function topic(sub, top) {
    color(sub.color);
    var base = tkey(sub, top), back = function () { topic(sub, top); };
    var h = bar(sub.icon + " " + esc(sub.name)) + '<div class="thead"><div class="ic">' + top.icon + "</div><h2>" + esc(top.t) + "</h2>" + en(top.en) + '</div><div class="games">' +
      '<button class="game learn" data-g="belajar"><span class="ic">📖</span><span><b>Belajar dulu</b>' + en("Read the notes first") + "</span></button>";
    gamesOf(top).forEach(function (g) {
      h += '<button class="game" data-g="' + g + '"><span class="ic">' + GAME[g][0] + "</span><span><b>" + GAME[g][1] + "</b>" + en(GAME[g][2]) + '</span><span class="st">' + starStr(S.stars[base + ":" + g] || 0) + "</span></button>";
    });
    render(h + "</div>");
    on("#back", function () { subject(sub); });
    on("[data-g]", function (el) {
      sfx.tap();
      var g = el.dataset.g;
      if (g === "belajar") return learn(sub, top);
      if (g === "kuiz") return (function go() { runQuiz(shuffle(pool(sub, top)).slice(0, 8), { title: "❓ " + esc(top.t), back: back, star: base + ":kuiz", again: go }); })();
      if (g === "kelas") return (function go() {
        var sets = arr(top.sort), ti = Math.floor(Math.random() * sets.length);
        var items = pool(sub, top, "s").filter(function (x) { return x.key.indexOf("|s" + ti + "_") > 0; });
        runQuiz(shuffle(items).slice(0, 10), { title: "🗂️ " + esc(top.t), back: back, star: base + ":kelas", again: go });
      })();
      if (g === "padan") return runMatch(sub, top, back);
      if (g === "susun") return runOrder(sub, top, back);
    });
  }

  function learn(sub, top) {
    var skip = hideAns(sub), h = bar("📖 " + esc(top.t));
    function head(P) { var t = P.title || P.ask; return '<h2 class="sect">' + esc(t) + en(tr(t) || P.en) + "</h2>"; }
    (top.notes || []).forEach(function (n, i) {
      h += '<div class="note"><div class="em">' + (n[2] || "💡") + '</div><div class="tx"><div>' + txt(n[0]) + "</div>" + en(n[1]) + "</div>" +
        (canSpeak && !AR.test(n[0]) ? '<button class="icon" data-say="' + i + '" aria-label="Dengar">🔊</button>' : "") + "</div>";
    });
    arr(top.pairs).forEach(function (P) {
      h += head(P) + '<table class="tb">' + P.items.map(function (x) { return "<tr><td>" + bi(x[0], skip) + "</td><td>" + bi(x[1], skip) + "</td></tr>"; }).join("") + "</table>";
    });
    arr(top.sort).forEach(function (T) {
      h += head(T) + '<table class="tb">' + T.cats.map(function (c, ci) {
        var its = T.items.filter(function (x) { return x[1] === ci; }).map(function (x) { return x[0]; });
        return "<tr><td>" + bi(c, skip) + "</td><td>" + its.map(txt).join(", ") + (skip ? "" : en(its.map(tr).filter(Boolean).join(", "))) + "</td></tr>";
      }).join("") + "</table>";
    });
    (top.order || []).forEach(function (o) {
      if (o[3] === "ayat") return;
      h += '<h2 class="sect">' + esc(o[0]) + en(o[1]) + '</h2><table class="tb">' + o[2].map(function (x, i) { return "<tr><td style='width:60px'>" + (i + 1) + "</td><td>" + bi(x, skip) + "</td></tr>"; }).join("") + "</table>";
    });
    render(h + '<button class="btn" id="play">Saya sudah sedia! ▶' + en("I'm ready!") + "</button>");
    on("#back", function () { topic(sub, top); });
    on("#play", function () { topic(sub, top); });
    on("[data-say]", function (el) { speak(top.notes[+el.dataset.say][0]); });
  }

  /* ---------- kuiz (juga digunakan untuk Kelaskan & Ulang Kaji) ---------- */
  var PRAISE = [["Betul! 🎉", "Correct!"], ["Hebat! 🌟", "Great!"], ["Pandai! 👏", "Clever!"], ["Syabas! 💪", "Well done!"]];
  function runQuiz(items, o) {
    var i = 0, score = 0;
    if (!items.length) return o.back();
    function show() {
      var it = items[i], opts = it.fixed ? it.opts : shuffle(it.opts);
      var long = opts.some(function (x) { return x.length > 26; });
      color(it.sub.color);
      render(bar(o.title, (i + 1) + " / " + items.length) + '<div class="prog"><i style="width:' + (i / items.length * 100) + '%"></i></div>' +
        '<div class="qcard"><div class="qtop"><span class="tag">' + it.sub.icon + " " + esc(it.top.t) + "</span>" + (canSpeak ? '<button class="icon" id="spk" aria-label="Dengar">🔊</button>' : "<span></span>") + "</div>" +
        '<p class="q">' + txt(it.q) + "</p>" + en(it.en) + (it.big ? '<div class="bigw">' + txt(it.big) + "</div>" + (it.skip ? "" : en(tr(it.big))) : "") + "</div>" +
        '<div class="opts' + (long ? " long" : "") + '">' + opts.map(function (x, k) { return '<button class="opt" data-k="' + k + '">' + bi(x, it.skip) + "</button>"; }).join("") + "</div>" +
        '<div class="fb" id="fb"></div>');
      on("#back", o.back);
      on("#spk", function () {
        if (it.big && AR.test(it.big)) { if (it.speakAr) speak(it.big, true); else speak(it.q); }
        else speak(it.q + (it.big ? " " + it.big : ""));
      });
      on(".opt", function (el) {
        var pick = opts[+el.dataset.k], ok = pick === it.ans;
        Array.prototype.forEach.call(app.querySelectorAll(".opt"), function (b) { b.disabled = true; if (opts[+b.dataset.k] === it.ans) b.classList.add("ok"); });
        if (!ok) el.classList.add("bad");
        if (ok) { score++; sfx.ok(); } else sfx.bad();
        mark(it.key, ok);
        var fb = $("#fb"), last = i === items.length - 1, p = PRAISE[Math.floor(Math.random() * PRAISE.length)];
        fb.className = "fb show " + (ok ? "ok" : "bad");
        fb.innerHTML = "<b>" + (ok ? p[0] + en(p[1]) : "Belum betul 🙂" + en("Not quite")) + "</b>" +
          (ok ? "" : "<div>Jawapan: <b class='inl'>" + txt(it.ans) + "</b>" + en("Answer" + (it.skip || !tr(it.ans) ? "" : ": " + tr(it.ans))) + "</div>") +
          (it.why ? "<div>" + esc(it.why) + en(tr(it.why)) + "</div>" : "") +
          '<button class="btn" id="next">' + (last ? "Tamat 🏁" + en("Finish") : "Seterusnya →" + en("Next")) + "</button>";
        fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
        on("#next", function () { i++; if (i < items.length) show(); else result(score / items.length, score + " / " + items.length + " betul", score + " / " + items.length + " correct", o); });
      });
    }
    show();
  }

  /* ---------- padankan ---------- */
  function runMatch(sub, top, back) {
    var base = tkey(sub, top), sets = arr(top.pairs), pi = Math.floor(Math.random() * sets.length), P = sets[pi], skip = hideAns(sub);
    var picked = [], seenL = {}, seenR = {};
    shuffle(P.items.map(function (x, i) { return { l: x[0], r: x[1], i: i }; })).forEach(function (x) {
      if (picked.length < 5 && !seenL[x.l] && !seenR[x.r]) { picked.push(x); seenL[x.l] = seenR[x.r] = 1; }
    });
    var L = shuffle(picked), R = shuffle(picked), sel = null, done = 0, miss = 0, missed = {};
    render(bar("🧩 " + esc(top.t)) + '<p class="tip">Tekan satu di kiri, kemudian padanannya di kanan.' + en("Tap one on the left, then its match on the right.") + "</p>" +
      '<div class="cols"><div class="col">' + L.map(function (x) { return '<button class="tile" data-side="l" data-i="' + x.i + '">' + bi(x.l, skip) + "</button>"; }).join("") +
      '</div><div class="col">' + R.map(function (x) { return '<button class="tile" data-side="r" data-i="' + x.i + '">' + bi(x.r, skip) + "</button>"; }).join("") + "</div></div>");
    on("#back", back);
    on(".tile", function (el) {
      if (el.classList.contains("done")) return;
      if (!sel || sel.dataset.side === el.dataset.side) {
        if (sel) sel.classList.remove("sel");
        sel = el; el.classList.add("sel"); sfx.tap();
        if (el.dataset.side === "l" && P.speakAr) speak(P.items[+el.dataset.i][0], true);
        return;
      }
      var a = sel; sel = null; a.classList.remove("sel");
      if (a.dataset.i === el.dataset.i) {
        a.classList.add("done"); el.classList.add("done"); sfx.ok(); done++;
        mark(base + "|p" + pi + "_" + a.dataset.i, !missed[a.dataset.i]);
        if (done === picked.length) setTimeout(function () {
          result(miss === 0 ? 1 : miss <= 2 ? 0.7 : 0.3, miss ? miss + " kali tersilap" : "Tiada kesilapan!", miss ? miss + " mistake" + (miss > 1 ? "s" : "") : "No mistakes!", { back: back, star: base + ":padan", again: function () { runMatch(sub, top, back); } });
        }, 500);
      } else {
        miss++; missed[a.dataset.i] = missed[el.dataset.i] = 1; sfx.bad();
        a.classList.add("bad"); el.classList.add("bad");
        setTimeout(function () { a.classList.remove("bad"); el.classList.remove("bad"); }, 450);
      }
    });
  }

  /* ---------- susun ---------- */
  function runOrder(sub, top, back) {
    var base = tkey(sub, top), list = shuffle(top.order).slice(0, 5), n = 0, perfect = 0, skip = hideAns(sub);
    function show() {
      var o = list[n], ans = o[2], isAyat = o[3] === "ayat";
      var v = !isAyat && ans.some(function (x) { return x.length > 12; });
      var bank = shuffle(ans.map(function (x, i) { return i; })), placed = [], tries = 0;
      if (bank.every(function (x, i) { return ans[x] === ans[i]; })) bank.reverse();
      function draw(state) {
        var good = state === "good";
        render(bar("🔢 " + esc(top.t), (n + 1) + " / " + list.length) + '<div class="prog"><i style="width:' + (n / list.length * 100) + '%"></i></div>' +
          '<div class="qcard"><p class="q">' + esc(o[0]) + "</p>" + en(o[1]) + "</div>" +
          '<div class="slots' + (v ? " v" : "") + (good ? " good" : "") + '">' + placed.map(function (bi2, k) {
            return '<button class="chip' + (state === "bad" && ans[bi2] !== ans[k] ? " wrong" : "") + '" data-p="' + k + '">' + (v ? '<span class="num">' + (k + 1) + "</span>" : "") + bi(ans[bi2], skip || isAyat) + "</button>";
          }).join("") + "</div>" +
          '<div class="bank' + (v ? " v" : "") + '">' + bank.filter(function (b) { return placed.indexOf(b) < 0; }).map(function (b) { return '<button class="chip" data-b="' + b + '">' + bi(ans[b], skip || isAyat) + "</button>"; }).join("") + "</div>" +
          (good ? '<div class="fb show ok"><b>Betul! 🎉' + en("Correct!") + '</b><button class="btn" id="next">' + (n === list.length - 1 ? "Tamat 🏁" + en("Finish") : "Seterusnya →" + en("Next")) + "</button></div>" :
            placed.length === ans.length ? '<button class="btn" id="chk">Semak ✔' + en("Check") + "</button>" : "") +
          (!good && tries >= 2 ? '<button class="btn alt" id="showans">Tunjuk jawapan 👀' + en("Show the answer") + "</button>" : ""));
        on("#back", back);
        if (good) { on("#next", function () { n++; if (n < list.length) show(); else result(perfect / list.length, perfect + " / " + list.length + " betul kali pertama", perfect + " / " + list.length + " correct on the first try", { back: back, star: base + ":susun", again: function () { runOrder(sub, top, back); } }); }); return; }
        on("[data-b]", function (el) { sfx.tap(); placed.push(+el.dataset.b); draw(); });
        on("[data-p]", function (el) { placed.splice(+el.dataset.p, 1); draw(); });
        on("#chk", function () {
          var ok = placed.every(function (b, k) { return ans[b] === ans[k]; });
          if (ok) { if (tries === 0) perfect++; sfx.ok(); if (isAyat) speak(ans.join(" ")); draw("good"); }
          else { tries++; sfx.bad(); draw("bad"); }
        });
        on("#showans", function () { placed = ans.map(function (x, i) { return i; }); draw("good"); });
      }
      draw();
    }
    show();
  }

  /* ---------- keputusan ---------- */
  var RESULT = [["Cuba lagi ya! 💪", "Try again!"], ["Boleh baiki lagi! 🙂", "You can do even better!"], ["Bagus! 👍", "Good!"], ["Hebat sekali! 🏆", "Excellent!"]];
  function result(pct, line, lineEn, o) {
    var stars = pct >= 0.9 ? 3 : pct >= 0.6 ? 2 : pct > 0 ? 1 : 0;
    setStars(o.star, stars); bumpStreak();
    render('<div class="result"><div class="stars">' + [0, 1, 2].map(function (k) { return '<span class="' + (k < stars ? "" : "dim") + '">⭐</span>'; }).join("") + "</div><h2>" + RESULT[stars][0] + en(RESULT[stars][1]) + "</h2><p>" + esc(line) + en(lineEn) + "</p>" +
      '<button class="btn" id="again">Main lagi 🔄' + en("Play again") + '</button><button class="btn alt" id="done">Kembali' + en("Back") + "</button></div>");
    if (stars >= 2) { sfx.win(); confetti(); } else sfx.tap();
    on("#again", function () { o.again.call(o); });
    on("#done", o.back);
  }
  function confetti() {
    var em = ["🎉", "⭐", "🌟", "🎈", "✨", "🥳"];
    for (var i = 0; i < 22; i++) {
      var s = document.createElement("span");
      s.className = "conf"; s.textContent = em[i % em.length];
      s.style.left = Math.random() * 100 + "vw"; s.style.animationDuration = 1.6 + Math.random() * 1.6 + "s"; s.style.animationDelay = Math.random() * 0.5 + "s";
      document.body.appendChild(s);
      setTimeout(function (el) { el.remove(); }, 4000, s);
    }
  }

  /* ---------- tetapan (untuk ibu bapa) ---------- */
  function settings() {
    color();
    var nq = allPool().length, nt = 0; SUBJECTS.forEach(function (s) { nt += s.topics.length; });
    render(bar("⚙️ Tetapan") +
      '<div class="panel"><label for="nm">Nama murid' + en("Pupil's name") + '</label><input type="text" id="nm" maxlength="20" value="' + esc(ME.name) + '">' + avs(ME.av) +
      '<button class="btn alt" id="swap">👥 Tukar atau tambah murid' + en("Switch or add a child") + "</button></div>" +
      '<div class="panel"><b>Kod sandaran</b>' + en("Backup code") + "<small>Simpan kemajuan " + esc(ME.name) + " sebagai kod, untuk dipindahkan ke tablet lain atau disimpan sebagai salinan.</small>" +
      en("Save this child's progress as a code, to move it to another tablet or keep as a copy.") +
      '<button class="btn" id="bak">📤 Buat kod sandaran' + en("Make a backup code") + '</button><button class="btn alt" id="rest">📥 Pulihkan daripada kod' + en("Restore from a code") + "</button></div>" +
      '<div class="panel row"><div><b>Bunyi</b>' + en("Sound effects") + '</div><button class="tog' + (S.sound ? " on" : "") + '" id="snd" aria-label="Bunyi"></button></div>' +
      '<div class="panel"><b>Bahasa Inggeris</b><small>Tekan butang 🇬🇧 di bahagian atas mana-mana halaman untuk menunjukkan atau menyembunyikan Bahasa Inggeris.</small>' + en("Tap the 🇬🇧 button at the top of any page to show or hide the English.") + "</div>" +
      '<div class="panel"><b>Kemajuan</b>' + en("Progress") + "<small>" + nt + " topik · " + nq + " soalan · " + Object.keys(S.box).length + " sudah dicuba · " + masteredCount() + " sudah diingat</small>" +
      en(nt + " topics · " + nq + " questions · " + Object.keys(S.box).length + " tried · " + masteredCount() + " remembered") +
      '<button class="btn warn" id="reset">Padam semua kemajuan' + en("Erase all progress") + '</button><button class="btn warn" id="del">Padam murid ini' + en("Delete this child") + "</button></div>" +
      '<div class="panel"><small>Kandungan berdasarkan KSSR (Semakan 2017) Tahun 2 – Sains dan Bahasa Melayu SK – serta asas KAFA (Akidah, Ibadah, Sirah, Adab, Jawi, Bahasa Arab, Tilawah al-Quran). Soalan boleh ditambah dalam folder <b>data/</b>.</small></div>');
    function keep() { ME.name = $("#nm").value.trim().slice(0, 20) || ME.name; ME.av = avSel(); saveP(); }
    avPick();
    on("#back", function () { keep(); home(); });
    on("#swap", function () { keep(); who(); });
    on("#bak", function () { keep(); backup(); });
    on("#rest", function () { keep(); restore(settings); });
    on("#snd", function (el) { S.sound = !S.sound; el.classList.toggle("on", S.sound); save(); sfx.ok(); });
    on("#reset", function () {
      if (confirm("Padam semua bintang dan kemajuan " + ME.name + "? Tindakan ini tidak boleh dibatalkan.\n\nErase all stars and progress for this child? This cannot be undone.")) { S.stars = {}; S.box = {}; S.streak = 0; S.last = 0; save(); home(); }
    });
    on("#del", function () {
      if (confirm("Padam " + ME.name + " dan semua kemajuannya dari peranti ini? Tindakan ini tidak boleh dibatalkan.\n\nDelete this child and all their progress from this device? This cannot be undone.")) { removeProfile(ME.id); who(); }
    });
  }

  /* ---------- kod sandaran: kemajuan seorang murid sebagai teks, tanpa pelayan ---------- */
  function b64(u) {
    var s = "";
    for (var i = 0; i < u.length; i += 8192) s += String.fromCharCode.apply(null, u.subarray(i, i + 8192));
    return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  function unb64(s) {
    s = s.replace(/-/g, "+").replace(/_/g, "/"); while (s.length % 4) s += "=";
    var b = atob(s), u = new Uint8Array(b.length);
    for (var i = 0; i < b.length; i++) u[i] = b.charCodeAt(i);
    return u;
  }
  function pipe(u, T) { // mampat / nyahmampat dengan ciri terbina dalam pelayar
    return Promise.resolve().then(function () {
      return new Response(new Blob([u]).stream().pipeThrough(new T("deflate-raw"))).arrayBuffer();
    }).then(function (b) { return new Uint8Array(b); });
  }
  function makeCode() {
    var box = {}; for (var k in S.box) box[k] = [S.box[k].b, S.box[k].d];
    var raw = new TextEncoder().encode(JSON.stringify({ v: 1, n: ME.name, a: ME.av, y: ME.year || YEAR, s: S.stars, b: box, k: S.streak, l: S.last }));
    var plain = function () { return "JB0." + b64(raw); };
    if (!window.CompressionStream) return Promise.resolve(plain());
    return pipe(raw, window.CompressionStream).then(function (z) { return "JB1." + b64(z); }, plain);
  }
  function int(x, lo, hi) { x = Math.floor(+x); return x >= lo && x <= hi ? x : null; }
  function readCode(code) {
    return Promise.resolve().then(function () {
      var m = /^JB([01])\.([A-Za-z0-9_-]+)$/.exec(String(code).replace(/\s+/g, ""));
      if (!m) throw new Error("bad");
      var u = unb64(m[2]);
      if (m[1] === "0") return u;
      if (!window.DecompressionStream) throw new Error("old");
      return pipe(u, window.DecompressionStream);
    }).then(function (u) {
      var d = JSON.parse(new TextDecoder().decode(u)), st = fresh(), k, v;
      if (!d || d.v !== 1 || typeof d.s !== "object" || typeof d.b !== "object") throw new Error("bad");
      for (k in d.s) { v = int(d.s[k], 0, 3); if (v !== null) st.stars[k] = v; }
      for (k in d.b) {
        var b = int((d.b[k] || [])[0], 0, 5), day = int((d.b[k] || [])[1], 0, 1e6);
        if (b !== null && day !== null) st.box[k] = { b: b, d: day };
      }
      st.streak = int(d.k, 0, 1e5) || 0; st.last = int(d.l, 0, 1e6) || 0;
      return { name: d.n, av: d.a, state: st };
    });
  }

  function backup() {
    color();
    render(bar("📤 Kod sandaran", " ") + '<div class="panel"><b>Kod untuk ' + esc(ME.name) + "</b>" + en("Code for this child") +
      "<small>Salin kod ini dan simpan di tempat selamat, contohnya hantar kepada diri sendiri melalui WhatsApp atau e-mel. Pada tablet lain, buka Jom Belajar, tekan “Ada kod sandaran?” dan tampal kod ini.</small>" +
      en("Copy this code and keep it somewhere safe, for example send it to yourself by WhatsApp or email. On another tablet, open Jom Belajar, tap “Ada kod sandaran?” and paste the code.") +
      '<textarea class="code" id="code" readonly rows="6">Sedang menyediakan…</textarea>' +
      '<button class="btn" id="copy">📋 Salin kod' + en("Copy the code") + "</button>" +
      (navigator.share ? '<button class="btn alt" id="share">Kongsi…' + en("Share…") + "</button>" : "") +
      '<p class="msg" id="msg"></p></div>' +
      '<div class="panel"><small>Kod ini ialah salinan kemajuan pada saat ini sahaja. Buat kod baharu jika mahu salinan yang terkini.</small>' + en("The code is a copy of the progress at this moment only. Make a new code when you want an up-to-date copy.") + "</div>");
    var ta = $("#code"), code = "";
    makeCode().then(function (c) { code = c; if (ta.isConnected) ta.value = c; });
    function say(bm, e) { $("#msg").innerHTML = esc(bm) + en(e); }
    on("#back", settings);
    on("#copy", function () {
      if (!code) return;
      var done = function () { say("Sudah disalin ✔", "Copied"); sfx.ok(); };
      var manual = function () { ta.focus(); ta.select(); try { if (document.execCommand("copy")) return done(); } catch (e) {} say("Tekan lama pada kod untuk menyalin.", "Press and hold the code to copy it."); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(code).then(done, manual); else manual();
    });
    on("#share", function () { if (code) navigator.share({ title: "Jom Belajar – " + ME.name, text: code }).catch(function () {}); });
  }

  function restore(back) {
    color();
    render(bar("📥 Pulihkan", " ") + '<div class="panel"><label for="code">Tampal kod sandaran di sini' + en("Paste the backup code here") + "</label>" +
      '<textarea class="code" id="code" rows="6" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="JB1...."></textarea>' +
      "<small>Murid dalam kod ini akan ditambah sebagai murid baharu. Tiada apa-apa yang sedia ada akan dipadam.</small>" +
      en("The child in this code is added as a new child. Nothing already on this device is erased.") +
      '<button class="btn" id="go">Pulihkan' + en("Restore") + '</button><p class="msg" id="msg"></p></div>');
    on("#back", back);
    on("#go", function () {
      var eng = S.eng;
      readCode($("#code").value).then(function (r) {
        use(addProfile(r.name, r.av, r.state)); S.eng = eng; save(); applyEng(); sfx.win(); home();
      }, function (e) {
        var old = e && e.message === "old";
        $("#msg").innerHTML = (old ? "Pelayar ini terlalu lama untuk membaca kod ini. Sila kemas kini tablet." : "Kod ini tidak sah. Pastikan seluruh kod disalin.") +
          en(old ? "This browser is too old to read this code. Please update the tablet." : "This code is not valid. Make sure the whole code was copied.");
        sfx.bad();
      });
    });
  }

  applyEng();
  if (P.list.length === 1) use(P.list[0].id);
  home();
})();
