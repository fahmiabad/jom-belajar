/* Jom Belajar – enjin permainan. Kandungan berada dalam folder data/. */
(function () {
  "use strict";
  var app = document.getElementById("app");
  var KEY = "jom-belajar-v1";
  var DEF = { name: "", asked: false, stars: {}, box: {}, streak: 0, last: 0, en: true, sound: true };
  var S;
  try { S = Object.assign({}, DEF, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { S = Object.assign({}, DEF); }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  var SUBJECTS = window.SUBJECTS || [];
  var AR = /[؀-ۿݐ-ݿ]/;
  var INTERVALS = [0, 1, 2, 4, 7, 14]; // hari sebelum soalan muncul semula (kotak Leitner)

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function txt(s) { return AR.test(s) ? '<span class="ar" dir="auto">' + esc(s) + "</span>" : esc(s); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function arr(x) { return x ? (Array.isArray(x) && !(x.length && typeof x[0] === "string") ? x : [x]) : []; }
  function uniq(a) { return a.filter(function (x, i) { return a.indexOf(x) === i; }); }
  function today() { var d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 864e5); }
  function $(s) { return app.querySelector(s); }
  function on(sel, fn) { Array.prototype.forEach.call(app.querySelectorAll(sel), function (el) { el.addEventListener("click", function (e) { fn(el, e); }); }); }
  function render(html) { app.innerHTML = html; window.scrollTo(0, 0); }

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
  function pool(sub, top, only) {
    var out = [], base = tkey(sub, top);
    if (!only || only === "q") (top.q || []).forEach(function (x, i) {
      out.push({ key: base + "|q" + i, q: x[0], en: x[1], opts: x[2].slice(), ans: x[2][0], why: x[3] || "", sub: sub, top: top });
    });
    if (!only || only === "p") arr(top.pairs).forEach(function (P, pi) {
      P.items.forEach(function (x, i) {
        var others = shuffle(uniq(P.items.map(function (y) { return y[1]; }).filter(function (y) { return y !== x[1]; }))).slice(0, 3);
        if (!others.length) return;
        out.push({ key: base + "|p" + pi + "_" + i, q: P.ask, en: P.en, big: x[0], opts: [x[1]].concat(others), ans: x[1], why: "", sub: sub, top: top, speakAr: P.speakAr });
      });
    });
    if (!only || only === "s") arr(top.sort).forEach(function (T, ti) {
      T.items.forEach(function (x, i) {
        out.push({ key: base + "|s" + ti + "_" + i, q: T.ask, en: T.en, big: x[0], opts: T.cats.slice(), ans: T.cats[x[1]], why: "", fixed: true, sub: sub, top: top });
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
    return '<header class="bar"><button class="back" id="back" aria-label="Kembali">←</button><h1>' + title + '</h1><div class="right">' + (right || "⭐ " + totalStars()) + "</div></header>";
  }
  function color(c) { document.documentElement.style.setProperty("--c", c || "#7C5CFF"); }

  function welcome() {
    color();
    render('<div class="welcome"><div class="mascot">🦉</div><h1>Selamat datang!</h1><p>Siapa nama awak?</p>' +
      '<div class="panel" style="margin-top:20px"><input type="text" id="nm" placeholder="Nama saya..." maxlength="20" autocomplete="off"></div>' +
      '<button class="btn" id="go">Jom mula! 🚀</button></div>');
    on("#go", function () { S.name = $("#nm").value.trim(); S.asked = true; save(); home(); });
  }

  function home() {
    if (!S.asked) return welcome();
    color();
    var due = dueCount();
    var h = '<div class="hello"><div class="mascot">🦉</div><div class="grow"><h1>Hai, ' + esc(S.name || "kawan") + '! 👋</h1><p>Jom belajar sambil bermain.</p></div><button class="round" id="set" aria-label="Tetapan">⚙️</button></div>' +
      '<div class="stats"><div>⭐ <b>' + totalStars() + '</b><small>bintang</small></div><div>🔥 <b>' + (S.last >= today() - 1 ? S.streak : 0) + '</b><small>hari berturut-turut</small></div><div>🧠 <b>' + masteredCount() + '</b><small>sudah ingat</small></div></div>' +
      '<button class="review" id="rev">🔁 Ulang Kaji Hari Ini<small>' + (due ? due + " soalan perlu diulang" : "10 soalan campuran") + (S.en ? " · Today's revision" : "") + "</small></button>" +
      '<div class="grid">';
    SUBJECTS.forEach(function (s, i) {
      var got = 0, max = 0;
      s.topics.forEach(function (t) { gamesOf(t).forEach(function (g) { max += 3; got += S.stars[tkey(s, t) + ":" + g] || 0; }); });
      h += '<button class="card big" data-s="' + i + '" style="--c:' + s.color + '"><span class="ic">' + s.icon + "</span><span><b>" + esc(s.name) + "</b>" + (S.en ? "<small>" + esc(s.en) + "</small>" : "") + '<span class="st">⭐ ' + got + " / " + max + "</span></span></button>";
    });
    render(h + "</div>");
    on("[data-s]", function (el) { sfx.tap(); subject(SUBJECTS[+el.dataset.s]); });
    on("#set", settings);
    on("#rev", function () { sfx.tap(); color("#FF6B6B"); runQuiz(reviewSet(), { title: "🔁 Ulang Kaji", back: home, again: function () { runQuiz(reviewSet(), this); } }); });
  }

  function subject(sub) {
    color(sub.color);
    var h = bar(sub.icon + " " + esc(sub.name)) + '<div class="grid">';
    sub.topics.forEach(function (t, i) {
      var g = gamesOf(t), got = 0;
      g.forEach(function (x) { got += S.stars[tkey(sub, t) + ":" + x] || 0; });
      h += '<button class="card" data-t="' + i + '"><span class="ic">' + t.icon + "</span><span><b>" + esc(t.t) + "</b>" + (S.en ? "<small>" + esc(t.en) + "</small>" : "") + '<span class="st">⭐ ' + got + " / " + g.length * 3 + "</span></span></button>";
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
    var h = bar(sub.icon + " " + esc(sub.name)) + '<div class="thead"><div class="ic">' + top.icon + "</div><h2>" + esc(top.t) + "</h2>" + (S.en ? "<p>" + esc(top.en) + "</p>" : "") + '</div><div class="games">' +
      '<button class="game learn" data-g="belajar"><span class="ic">📖</span><span><b>Belajar dulu</b>' + (S.en ? "<small>Read the notes first</small>" : "") + "</span></button>";
    gamesOf(top).forEach(function (g) {
      h += '<button class="game" data-g="' + g + '"><span class="ic">' + GAME[g][0] + "</span><span><b>" + GAME[g][1] + "</b>" + (S.en ? "<small>" + GAME[g][2] + "</small>" : "") + '</span><span class="st">' + starStr(S.stars[base + ":" + g] || 0) + "</span></button>";
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
    var h = bar("📖 " + esc(top.t));
    (top.notes || []).forEach(function (n, i) {
      h += '<div class="note"><div class="em">' + (n[2] || "💡") + '</div><div class="tx"><div>' + txt(n[0]) + "</div>" + (S.en && n[1] ? '<div class="en">' + esc(n[1]) + "</div>" : "") + "</div>" +
        (canSpeak && !AR.test(n[0]) ? '<button class="icon" data-say="' + i + '" aria-label="Dengar">🔊</button>' : "") + "</div>";
    });
    arr(top.pairs).forEach(function (P) {
      h += '<h2 class="sect">' + esc(P.title || P.ask) + '</h2><table class="tb">' + P.items.map(function (x) { return "<tr><td>" + txt(x[0]) + "</td><td>" + txt(x[1]) + "</td></tr>"; }).join("") + "</table>";
    });
    arr(top.sort).forEach(function (T) {
      h += '<h2 class="sect">' + esc(T.title || T.ask) + '</h2><table class="tb">' + T.cats.map(function (c, ci) {
        return "<tr><td>" + esc(c) + "</td><td>" + T.items.filter(function (x) { return x[1] === ci; }).map(function (x) { return txt(x[0]); }).join(", ") + "</td></tr>";
      }).join("") + "</table>";
    });
    (top.order || []).forEach(function (o) {
      if (o[3] === "ayat") return;
      h += '<h2 class="sect">' + esc(o[0]) + '</h2><table class="tb">' + o[2].map(function (x, i) { return "<tr><td style='width:60px'>" + (i + 1) + "</td><td>" + txt(x) + "</td></tr>"; }).join("") + "</table>";
    });
    render(h + '<button class="btn" id="play">Saya sudah sedia! ▶</button>');
    on("#back", function () { topic(sub, top); });
    on("#play", function () { topic(sub, top); });
    on("[data-say]", function (el) { speak(top.notes[+el.dataset.say][0]); });
  }

  /* ---------- kuiz (juga digunakan untuk Kelaskan & Ulang Kaji) ---------- */
  function runQuiz(items, o) {
    var i = 0, score = 0;
    if (!items.length) return o.back();
    function show() {
      var it = items[i], opts = it.fixed ? it.opts : shuffle(it.opts);
      var long = opts.some(function (x) { return x.length > 26; });
      color(it.sub.color);
      render(bar(o.title, (i + 1) + " / " + items.length) + '<div class="prog"><i style="width:' + (i / items.length * 100) + '%"></i></div>' +
        '<div class="qcard"><div class="qtop"><span class="tag">' + it.sub.icon + " " + esc(it.top.t) + "</span>" + (canSpeak ? '<button class="icon" id="spk" aria-label="Dengar">🔊</button>' : "<span></span>") + "</div>" +
        '<p class="q">' + txt(it.q) + "</p>" + (it.big ? '<div class="bigw">' + txt(it.big) + "</div>" : "") +
        (S.en && it.en ? '<button class="hint" id="hint">💡 English</button><p class="en" id="en" hidden>' + esc(it.en) + "</p>" : "") + "</div>" +
        '<div class="opts' + (long ? " long" : "") + '">' + opts.map(function (x, k) { return '<button class="opt" data-k="' + k + '">' + txt(x) + "</button>"; }).join("") + "</div>" +
        '<div class="fb" id="fb"></div>');
      on("#back", o.back);
      on("#hint", function (el) { el.hidden = true; $("#en").hidden = false; });
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
        var fb = $("#fb"), last = i === items.length - 1;
        fb.className = "fb show " + (ok ? "ok" : "bad");
        fb.innerHTML = "<b>" + (ok ? ["Betul! 🎉", "Hebat! 🌟", "Pandai! 👏", "Syabas! 💪"][Math.floor(Math.random() * 4)] : "Belum betul 🙂") + "</b>" +
          (ok ? "" : "<div>Jawapan: <b style='display:inline;font-size:1em'>" + txt(it.ans) + "</b></div>") + (it.why ? "<div>" + esc(it.why) + "</div>" : "") +
          '<button class="btn" id="next">' + (last ? "Tamat 🏁" : "Seterusnya →") + "</button>";
        fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
        on("#next", function () { i++; if (i < items.length) show(); else result(score / items.length, score + " / " + items.length + " betul", o); });
      });
    }
    show();
  }

  /* ---------- padankan ---------- */
  function runMatch(sub, top, back) {
    var base = tkey(sub, top), sets = arr(top.pairs), pi = Math.floor(Math.random() * sets.length), P = sets[pi];
    var picked = [], seenL = {}, seenR = {};
    shuffle(P.items.map(function (x, i) { return { l: x[0], r: x[1], i: i }; })).forEach(function (x) {
      if (picked.length < 5 && !seenL[x.l] && !seenR[x.r]) { picked.push(x); seenL[x.l] = seenR[x.r] = 1; }
    });
    var L = shuffle(picked), R = shuffle(picked), sel = null, done = 0, miss = 0, missed = {};
    render(bar("🧩 " + esc(top.t)) + '<p class="tip">Tekan satu di kiri, kemudian padanannya di kanan.' + (S.en ? "<br><span class='en'>Tap one on the left, then its match on the right.</span>" : "") + "</p>" +
      '<div class="cols"><div class="col">' + L.map(function (x) { return '<button class="tile" data-side="l" data-i="' + x.i + '">' + txt(x.l) + "</button>"; }).join("") +
      '</div><div class="col">' + R.map(function (x) { return '<button class="tile" data-side="r" data-i="' + x.i + '">' + txt(x.r) + "</button>"; }).join("") + "</div></div>");
    on("#back", back);
    on(".tile", function (el) {
      if (el.classList.contains("done")) return;
      if (!sel || sel.dataset.side === el.dataset.side) {
        if (sel) sel.classList.remove("sel");
        sel = el; el.classList.add("sel"); sfx.tap();
        if (el.dataset.side === "l" && P.speakAr) speak(el.textContent, true);
        return;
      }
      var a = sel; sel = null; a.classList.remove("sel");
      if (a.dataset.i === el.dataset.i) {
        a.classList.add("done"); el.classList.add("done"); sfx.ok(); done++;
        mark(base + "|p" + pi + "_" + a.dataset.i, !missed[a.dataset.i]);
        if (done === picked.length) setTimeout(function () {
          result(miss === 0 ? 1 : miss <= 2 ? 0.7 : 0.3, miss ? miss + " kali tersilap" : "Tiada kesilapan!", { back: back, star: base + ":padan", again: function () { runMatch(sub, top, back); } });
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
    var base = tkey(sub, top), list = shuffle(top.order).slice(0, 5), n = 0, perfect = 0;
    function show() {
      var o = list[n], ans = o[2], isAyat = o[3] === "ayat";
      var v = !isAyat && ans.some(function (x) { return x.length > 12; });
      var bank = shuffle(ans.map(function (x, i) { return i; })), placed = [], tries = 0;
      if (bank.every(function (x, i) { return ans[x] === ans[i]; })) bank.reverse();
      function draw(state) {
        var good = state === "good";
        render(bar("🔢 " + esc(top.t), (n + 1) + " / " + list.length) + '<div class="prog"><i style="width:' + (n / list.length * 100) + '%"></i></div>' +
          '<div class="qcard"><p class="q">' + esc(o[0]) + "</p>" + (S.en && o[1] ? '<p class="en">' + esc(o[1]) + "</p>" : "") + "</div>" +
          '<div class="slots' + (v ? " v" : "") + (good ? " good" : "") + '">' + placed.map(function (bi, k) {
            return '<button class="chip' + (state === "bad" && ans[bi] !== ans[k] ? " wrong" : "") + '" data-p="' + k + '">' + (v ? '<span class="num">' + (k + 1) + "</span>" : "") + txt(ans[bi]) + "</button>";
          }).join("") + "</div>" +
          '<div class="bank' + (v ? " v" : "") + '">' + bank.filter(function (bi) { return placed.indexOf(bi) < 0; }).map(function (bi) { return '<button class="chip" data-b="' + bi + '">' + txt(ans[bi]) + "</button>"; }).join("") + "</div>" +
          (good ? '<div class="fb show ok"><b>Betul! 🎉</b><button class="btn" id="next">' + (n === list.length - 1 ? "Tamat 🏁" : "Seterusnya →") + "</button></div>" :
            placed.length === ans.length ? '<button class="btn" id="chk">Semak ✔</button>' : "") +
          (!good && tries >= 2 ? '<button class="btn alt" id="showans">Tunjuk jawapan 👀</button>' : ""));
        on("#back", back);
        if (good) { on("#next", function () { n++; if (n < list.length) show(); else result(perfect / list.length, perfect + " / " + list.length + " betul kali pertama", { back: back, star: base + ":susun", again: function () { runOrder(sub, top, back); } }); }); return; }
        on("[data-b]", function (el) { sfx.tap(); placed.push(+el.dataset.b); draw(); });
        on("[data-p]", function (el) { placed.splice(+el.dataset.p, 1); draw(); });
        on("#chk", function () {
          var ok = placed.every(function (bi, k) { return ans[bi] === ans[k]; });
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
  function result(pct, line, o) {
    var stars = pct >= 0.9 ? 3 : pct >= 0.6 ? 2 : pct > 0 ? 1 : 0;
    setStars(o.star, stars); bumpStreak();
    var msg = ["Cuba lagi ya! 💪", "Boleh baiki lagi! 🙂", "Bagus! 👍", "Hebat sekali! 🏆"][stars];
    render('<div class="result"><div class="stars">' + [0, 1, 2].map(function (k) { return '<span class="' + (k < stars ? "" : "dim") + '">⭐</span>'; }).join("") + "</div><h2>" + msg + "</h2><p>" + esc(line) + "</p>" +
      '<button class="btn" id="again">Main lagi 🔄</button><button class="btn alt" id="done">Kembali</button></div>');
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
      '<div class="panel"><label for="nm">Nama murid</label><input type="text" id="nm" maxlength="20" value="' + esc(S.name) + '"></div>' +
      '<div class="panel row"><div><b>Bantuan Bahasa Inggeris</b><br><small>Show English hints and translations</small></div><button class="tog' + (S.en ? " on" : "") + '" id="en" aria-label="English"></button></div>' +
      '<div class="panel row"><div><b>Bunyi</b><br><small>Sound effects</small></div><button class="tog' + (S.sound ? " on" : "") + '" id="snd" aria-label="Bunyi"></button></div>' +
      '<div class="panel"><b>Kemajuan</b><br><small>' + nt + " topik · " + nq + " soalan · " + Object.keys(S.box).length + " sudah dicuba · " + masteredCount() + " sudah diingat (betul 3 kali berturut-turut pada hari berlainan)</small>" +
      '<button class="btn warn" id="reset">Padam semua kemajuan</button></div>' +
      '<div class="panel"><small>Kandungan berdasarkan KSSR (Semakan 2017) Tahun 2 – Sains dan Bahasa Melayu SK – serta asas KAFA (Akidah, Ibadah, Sirah, Adab, Jawi, Bahasa Arab, Tilawah al-Quran). Soalan boleh ditambah dalam folder <b>data/</b>.</small></div>');
    on("#back", function () { S.name = $("#nm").value.trim(); save(); home(); });
    on("#en", function (el) { S.en = !S.en; el.classList.toggle("on", S.en); save(); });
    on("#snd", function (el) { S.sound = !S.sound; el.classList.toggle("on", S.sound); save(); sfx.ok(); });
    on("#reset", function () {
      if (confirm("Padam semua bintang dan kemajuan? Tindakan ini tidak boleh dibatalkan.")) { S.stars = {}; S.box = {}; S.streak = 0; S.last = 0; save(); home(); }
    });
  }

  home();
})();
