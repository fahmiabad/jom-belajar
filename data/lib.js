/* Pembantu untuk fail data Tahun 3 dan seterusnya.
   Dalam fail data, pilihan jawapan / penjelasan / item boleh ditulis sebagai
   "teks Melayu // English text". addSubject() memisahkannya: teks Melayu kekal
   dalam soalan, dan terjemahan Inggeris (ditulis tangan) dimasukkan ke dalam window.EN. */
window.addSubject = function (s) {
  var EN = window.EN = window.EN || {};
  function t(x) {
    if (typeof x !== "string") return x;
    var i = x.indexOf(" // ");
    if (i < 0) return x;
    var m = x.slice(0, i);
    EN[m.replace(/^[^A-Za-z0-9']+/, "").toLowerCase()] = x.slice(i + 4);
    return m;
  }
  function arr(x) { return x ? (Array.isArray(x) ? x : [x]) : []; }
  s.topics.forEach(function (T) {
    (T.q || []).forEach(function (q) { q[2] = q[2].map(t); if (q[3]) q[3] = t(q[3]); });
    arr(T.pairs).forEach(function (P) { P.title = t(P.title); P.items = P.items.map(function (x) { return [t(x[0]), t(x[1])]; }); });
    arr(T.sort).forEach(function (S) { S.title = t(S.title); S.cats = S.cats.map(t); S.items = S.items.map(function (x) { return [t(x[0]), x[1]]; }); });
    (T.order || []).forEach(function (o) { o[2] = o[2].map(t); });
  });
  window.SUBJECTS.push(s);
};
