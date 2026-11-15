/* BAHASA MELAYU TAHUN 3 (SK) – tatabahasa, kosa kata dan pemahaman.
   Tajuk unit buku teks Tahun 3 tidak ada dalam dokumen perancangan (Claude.pdf),
   jadi topik disusun mengikut aspek tatabahasa. BELUM disemak dengan DSKP/buku teks.
   Pilihan jawapan sengaja TIDAK diterjemah; hanya soalan dan penjelasan ada bahasa Inggeris.
   Format: jawapan betul sentiasa yang PERTAMA. "Melayu // English" dipisahkan oleh data/lib.js. */
window.addSubject({
  id: "bm3", year: 3, name: "Bahasa Melayu", en: "Malay Language", icon: "📚", color: "#2F7BEA",
  topics: [
    {
      id: "knama", t: "Kata Nama Am & Khas", en: "Common & proper nouns", icon: "🏷️",
      notes: [
        ["Kata nama am ialah nama umum bagi orang, haiwan, benda dan tempat. Contoh: guru, kucing, meja, sekolah.", "A common noun is a general name for a person, animal, thing or place. Examples: teacher, cat, table, school.", "🐈"],
        ["Kata nama khas ialah nama khusus. Huruf pertamanya mesti huruf besar. Contoh: Cikgu Aminah, Si Comel, Melaka.", "A proper noun is a specific name. It must start with a capital letter. Examples: Cikgu Aminah, Si Comel, Melaka.", "🔠"],
        ["Kata nama am hidup: manusia dan haiwan. Kata nama am tak hidup: benda, tempat dan perkara.", "Living common nouns: people and animals. Non-living common nouns: things, places and ideas.", "🌳"],
        ["Nama hari, bulan, negeri, negara, jenama dan gelaran ialah kata nama khas.", "Names of days, months, states, countries, brands and titles are proper nouns.", "📅"]
      ],
      q: [
        ["Yang manakah kata nama khas?", "Which one is a proper noun?", ["Kuala Lumpur", "bandar", "sungai", "negeri"]],
        ["Yang manakah kata nama am?", "Which one is a common noun?", ["doktor", "Doktor Lim", "Hospital Selayang", "Selasa"]],
        ["Yang manakah kata nama am hidup?", "Which one is a living common noun?", ["nelayan", "perahu", "jala", "pantai"]],
        ["Yang manakah kata nama am tak hidup?", "Which one is a non-living common noun?", ["almari", "arnab", "petani", "burung"]],
        ["Pilih ayat yang ditulis dengan betul.", "Choose the sentence that is written correctly.", ["Kami melawat Zoo Negara pada hari Sabtu.", "Kami melawat zoo negara pada hari sabtu.", "kami melawat Zoo Negara pada hari Sabtu.", "Kami melawat Zoo negara pada Hari sabtu."], "Kata nama khas seperti Zoo Negara dan Sabtu bermula dengan huruf besar. // Proper nouns such as Zoo Negara and Sabtu start with capital letters."],
        ["“Ayah membeli kereta Proton.” Yang manakah kata nama khas?", "“Ayah membeli kereta Proton.” Which word is the proper noun?", ["Proton", "kereta", "ayah", "membeli"], "Proton ialah jenama, iaitu nama khusus. // Proton is a brand, which is a specific name."],
        ["Kata nama khas bagi “negeri” ialah ...", "A proper noun for “negeri” (state) is ...", ["Johor", "kampung", "pekan", "daerah"]],
        ["Kata nama am bagi “Sungai Pahang” ialah ...", "The common noun for “Sungai Pahang” is ...", ["sungai", "Pahang", "air", "Malaysia"]],
        ["“Si Tompok sedang tidur di atas sofa.” Si Tompok ialah nama khas bagi ...", "“Si Tompok sedang tidur di atas sofa.” Si Tompok is a proper noun for ...", ["haiwan", "tempat", "benda", "hari"]],
        ["Yang manakah SEMUANYA kata nama khas?", "In which group are ALL the words proper nouns?", ["Ahmad, Isnin, Perak", "murid, hari, negeri", "Ali, kucing, Melaka", "guru, Sabtu, kedai"]]
      ],
      sort: [
        {
          title: "Kata nama am atau khas?", ask: "Kata nama am atau kata nama khas?", en: "Common noun or proper noun?",
          cats: ["Kata nama am", "Kata nama khas"],
          items: [["pelajar", 0], ["pulau", 0], ["bulan", 0], ["kereta", 0], ["bangunan", 0], ["pensel", 0], ["Pulau Langkawi", 1], ["Januari", 1], ["Encik Ravi", 1], ["Menara Kuala Lumpur", 1], ["Jumaat", 1], ["Sabah", 1]]
        },
        {
          title: "Hidup atau tak hidup?", ask: "Kata nama am hidup atau tak hidup?", en: "Living or non-living common noun?",
          cats: ["Hidup", "Tak hidup"],
          items: [["polis", 0], ["lembu", 0], ["bayi", 0], ["semut", 0], ["tukang masak", 0], ["kerusi", 1], ["gunung", 1], ["pasar", 1], ["payung", 1], ["komputer", 1]]
        }
      ]
    },
    {
      id: "kganti", t: "Kata Ganti Nama", en: "Pronouns", icon: "🧑‍🤝‍🧑",
      notes: [
        ["Kata ganti nama diri pertama: saya, aku, kami, kita.", "First-person pronouns: saya, aku (I), kami, kita (we).", "🙋"],
        ["“Kami” tidak termasuk orang yang diajak bercakap. “Kita” termasuk orang yang diajak bercakap.", "“Kami” leaves out the person you are talking to. “Kita” includes the person you are talking to.", "👥"],
        ["Kata ganti nama diri kedua: awak, kamu, anda, engkau.", "Second-person pronouns: awak, kamu, anda, engkau (you).", "👉"],
        ["Kata ganti nama diri ketiga: dia, mereka, beliau, baginda.", "Third-person pronouns: dia (he/she), mereka (they), beliau, baginda.", "👤"],
        ["“Beliau” untuk orang yang dihormati. “Baginda” untuk raja dan nabi.", "“Beliau” is for a respected person. “Baginda” is for royalty and prophets.", "👑"],
        ["Kata ganti nama tunjuk: “ini” untuk yang dekat, “itu” untuk yang jauh.", "Pointing words: “ini” for something near, “itu” for something far.", "☝️"]
      ],
      q: [
        ["Cikgu Hasnah guru kelas kami. ___ sangat penyayang.", "Cikgu Hasnah is our class teacher. ___ is very caring.", ["Beliau", "Baginda", "Kamu", "Mereka"], "“Beliau” digunakan untuk orang yang dihormati. // “Beliau” is used for a respected person."],
        ["Sultan Selangor berangkat ke majlis itu. ___ disambut meriah.", "The Sultan of Selangor arrived at the ceremony. ___ was welcomed warmly.", ["Baginda", "Beliau", "Dia", "Kamu"], "“Baginda” digunakan untuk raja. // “Baginda” is used for royalty."],
        ["Ali dan Abu kawan baik. ___ selalu belajar bersama-sama.", "Ali and Abu are good friends. ___ always study together.", ["Mereka", "Dia", "Beliau", "Kita"]],
        ["“Emak, ___ hendak ke kedai. Emak tunggu di rumah ya,” kata Aina dan adiknya.", "“Mum, ___ are going to the shop. Please wait at home,” said Aina and her sister.", ["kami", "kita", "mereka", "kamu"], "Emak tidak ikut, jadi gunakan “kami”. // Mum is not coming along, so use “kami”."],
        ["“Mari ___ pergi ke perpustakaan bersama-sama,” kata Mei Ling kepada Siti.", "“Let ___ go to the library together,” said Mei Ling to Siti.", ["kita", "kami", "mereka", "dia"], "Siti ikut sekali, jadi gunakan “kita”. // Siti is included, so use “kita”."],
        ["“Siapakah nama ___?” tanya guru kepada murid baharu itu.", "“What is ___ name?” the teacher asked the new pupil.", ["kamu", "saya", "dia", "mereka"]],
        ["Adik sedang menangis. ___ terjatuh dari basikal.", "My little brother is crying. ___ fell off the bicycle.", ["Dia", "Mereka", "Beliau", "Kami"]],
        ["___ buku saya. (sambil memegang buku)", "___ is my book. (while holding the book)", ["Ini", "Itu", "Sana", "Situ"], "“Ini” untuk benda yang dekat. // “Ini” is for something near."],
        ["Bangunan yang tinggi di sana ___ hotel.", "The tall building over there, ___ is a hotel.", ["itu", "ini", "sini", "kami"]],
        ["Yang manakah kata ganti nama diri pertama?", "Which is a first-person pronoun?", ["saya", "awak", "dia", "mereka"]],
        ["Yang manakah kata ganti nama diri ketiga?", "Which is a third-person pronoun?", ["mereka", "kamu", "kita", "aku"]]
      ],
      sort: {
        title: "Diri pertama, kedua atau ketiga?", ask: "Kata ganti nama diri yang mana?", en: "Which person is this pronoun?",
        cats: ["Pertama", "Kedua", "Ketiga"],
        items: [["saya", 0], ["aku", 0], ["kami", 0], ["kita", 0], ["awak", 1], ["kamu", 1], ["anda", 1], ["engkau", 1], ["dia", 2], ["mereka", 2], ["beliau", 2], ["baginda", 2]]
      }
    },
    {
      id: "penjodoh", t: "Penjodoh Bilangan", en: "Counting words (classifiers)", icon: "🔢",
      notes: [
        ["Penjodoh bilangan digunakan bersama-sama bilangan untuk mengira benda.", "A classifier is used together with a number when counting things.", "1️⃣"],
        ["sebilah – benda tajam (pisau, pedang). sebentuk – cincin, mata kail. seutas – tali, rantai.", "sebilah – sharp things (knife, sword). sebentuk – ring, fish hook. seutas – rope, chain.", "🔪"],
        ["sepucuk – surat, senapang. sekaki – payung. sepasang – kasut, stoking.", "sepucuk – letter, rifle. sekaki – umbrella. sepasang – shoes, socks.", "✉️"],
        ["sekuntum – bunga. sejambak – bunga yang diikat. sekawan – kumpulan haiwan.", "sekuntum – a flower. sejambak – a bouquet. sekawan – a group of animals.", "🌸"],
        ["sesikat – pisang. segugus – anggur. seulas – limau, durian. seketul – batu, daging.", "sesikat – a hand of bananas. segugus – a bunch of grapes. seulas – a segment of orange or durian. seketul – a lump of stone or meat.", "🍌"]
      ],
      q: [
        ["Ibu memotong sayur dengan se___ pisau.", "Mum cuts vegetables with a ___ knife.", ["bilah", "batang", "buah", "helai"]],
        ["Kakak memakai se___ cincin emas.", "My sister wears a ___ gold ring.", ["bentuk", "biji", "utas", "keping"]],
        ["Ayah mengikat kotak itu dengan se___ tali.", "Dad ties the box with a ___ rope.", ["utas", "bilah", "helai", "buah"]],
        ["Posmen menghantar tiga ___ surat ke rumah saya.", "The postman delivers three ___ letters to my house.", ["pucuk", "kaki", "bilah", "ekor"]],
        ["Saya membawa se___ payung kerana hari hendak hujan.", "I bring an ___ umbrella because it is going to rain.", ["kaki", "pucuk", "ekor", "bentuk"]],
        ["Abang membeli se___ kasut sekolah.", "My brother buys a ___ of school shoes.", ["pasang", "helai", "bentuk", "kuntum"]],
        ["Siti memetik se___ bunga mawar.", "Siti picks a ___ rose.", ["kuntum", "ketul", "ekor", "bilah"]],
        ["Se___ burung terbang di langit.", "A ___ of birds flies in the sky.", ["kawan", "kuntum", "utas", "keping"], "“Sekawan” untuk kumpulan haiwan. // “Sekawan” is for a group of animals."],
        ["Emak membeli se___ pisang di pasar.", "Mum buys a ___ of bananas at the market.", ["sikat", "utas", "pucuk", "kaki"]],
        ["Adik makan dua ___ durian.", "My little brother eats two ___ of durian.", ["ulas", "helai", "kaki", "bilah"]],
        ["Budak itu membaling se___ batu ke dalam sungai.", "The boy throws a ___ stone into the river.", ["ketul", "kuntum", "pucuk", "pasang"]],
        ["Ibu menerima se___ bunga pada Hari Ibu.", "Mum receives a ___ of flowers on Mother's Day.", ["jambak", "sikat", "bilah", "ulas"]]
      ],
      pairs: {
        title: "Penjodoh bilangan dan bendanya", ask: "Padankan penjodoh bilangan dengan bendanya.", en: "Match the classifier to the thing it counts.",
        items: [["sebilah", "pedang"], ["sebentuk", "cincin"], ["seutas", "rantai"], ["sepucuk", "surat"], ["sekaki", "payung"], ["sepasang", "stoking"], ["sekuntum", "bunga"], ["sekawan", "lembu"], ["segugus", "anggur"], ["sesikat", "pisang"], ["seketul", "daging"], ["sehelai", "kertas"], ["sebatang", "pensel"], ["sekeping", "gambar"]]
      }
    },
    {
      id: "kkerja", t: "Kata Kerja Aktif & Pasif", en: "Active & passive verbs", icon: "🏃",
      notes: [
        ["Kata kerja ialah perkataan yang menunjukkan perbuatan. Contoh: makan, menulis, berlari.", "A verb is a word that shows an action. Examples: eat, write, run.", "✍️"],
        ["Kata kerja aktif transitif memerlukan objek. Contoh: Ali menendang BOLA.", "A transitive active verb needs an object. Example: Ali kicks the BALL.", "⚽"],
        ["Kata kerja aktif tak transitif tidak memerlukan objek. Contoh: Adik menangis. Burung terbang.", "An intransitive active verb needs no object. Examples: The baby cries. The bird flies.", "🐦"],
        ["Dalam ayat aktif, pelaku berada di hadapan: Kucing mengejar tikus.", "In an active sentence, the doer comes first: The cat chases the mouse.", "🐱"],
        ["Dalam ayat pasif, benda yang dikenakan perbuatan berada di hadapan: Tikus dikejar oleh kucing.", "In a passive sentence, the thing the action is done to comes first: The mouse is chased by the cat.", "🐭"]
      ],
      q: [
        ["Yang manakah kata kerja?", "Which one is a verb?", ["melompat", "cantik", "meja", "sangat"]],
        ["Emak sedang ___ baju di ampaian.", "Mum is ___ clothes on the line.", ["menyidai", "memakan", "membaca", "menyanyi"]],
        ["Yang manakah ayat dengan kata kerja transitif (ada objek)?", "Which sentence has a transitive verb (it has an object)?", ["Ayah membaca surat khabar.", "Bayi itu menangis.", "Burung itu terbang.", "Kami berlari."], "“Surat khabar” ialah objek bagi “membaca”. // “Surat khabar” is the object of “membaca”."],
        ["Yang manakah ayat dengan kata kerja tak transitif (tiada objek)?", "Which sentence has an intransitive verb (no object)?", ["Adik tidur.", "Kakak menyapu sampah.", "Ali menendang bola.", "Ibu memasak nasi."]],
        ["Ayat pasif bagi “Kucing mengejar tikus.” ialah ...", "The passive form of “Kucing mengejar tikus.” is ...", ["Tikus dikejar oleh kucing.", "Kucing dikejar oleh tikus.", "Tikus mengejar kucing.", "Kucing kejar tikus."]],
        ["Ayat aktif bagi “Kek itu dimakan oleh adik.” ialah ...", "The active form of “Kek itu dimakan oleh adik.” is ...", ["Adik memakan kek itu.", "Kek itu memakan adik.", "Adik dimakan oleh kek itu.", "Kek memakan adik itu."]],
        ["Surat itu ___ oleh posmen.", "The letter is ___ by the postman.", ["dihantar", "menghantar", "berhantar", "penghantar"], "Ayat pasif menggunakan imbuhan di-. // A passive sentence uses the prefix di-."],
        ["Pak Mat ___ pokok durian di kebunnya.", "Pak Mat ___ durian trees in his orchard.", ["menanam", "ditanam", "tanaman", "penanam"]],
        ["Yang manakah ayat pasif?", "Which one is a passive sentence?", ["Pintu itu dibuka oleh abang.", "Abang membuka pintu itu.", "Abang berdiri di pintu.", "Pintu itu besar."]],
        ["Murid-murid ___ lagu Negaraku dengan penuh semangat.", "The pupils ___ the song Negaraku with great spirit.", ["menyanyikan", "dinyanyikan", "penyanyi", "nyanyian"]]
      ],
      sort: {
        title: "Ayat aktif atau pasif?", ask: "Ayat aktif atau ayat pasif?", en: "Active or passive sentence?",
        cats: ["Ayat aktif", "Ayat pasif"],
        items: [["Ibu menggoreng ikan.", 0], ["Ikan digoreng oleh ibu.", 1], ["Guru menulis nota.", 0], ["Nota ditulis oleh guru.", 1], ["Ayah membasuh kereta.", 0], ["Kereta dibasuh oleh ayah.", 1], ["Siti menyiram bunga.", 0], ["Bunga disiram oleh Siti.", 1]]
      }
    },
    {
      id: "imbuhan", t: "Imbuhan", en: "Prefixes & suffixes", icon: "🧩",
      notes: [
        ["Imbuhan ditambah pada kata dasar untuk membentuk perkataan baharu.", "An affix is added to a root word to make a new word.", "➕"],
        ["Awalan meN- berubah mengikut huruf pertama kata dasar: me-, mem-, men-, meng-, meny-, menge-.", "The prefix meN- changes with the first letter of the root: me-, mem-, men-, meng-, meny-, menge-.", "🔤"],
        ["Contoh: lukis → melukis, baca → membaca, tulis → menulis, ambil → mengambil, sapu → menyapu, cat → mengecat.", "Examples: lukis → melukis, baca → membaca, tulis → menulis, ambil → mengambil, sapu → menyapu, cat → mengecat.", "📝"],
        ["Awalan peN- menunjukkan orang yang melakukan atau alat. Contoh: penulis, pelukis, penyapu, pemadam.", "The prefix peN- shows the person who does something, or a tool. Examples: writer, painter, broom, eraser.", "🧑‍🎨"],
        ["Akhiran -an membentuk kata nama. Contoh: makan → makanan, minum → minuman, tulis → tulisan.", "The suffix -an makes a noun. Examples: makan → makanan (food), minum → minuman (drink), tulis → tulisan (writing).", "🍛"]
      ],
      q: [
        ["sapu → ___", "sapu → ___ (add the meN- prefix)", ["menyapu", "mensapu", "mesapu", "mengsapu"], "Huruf s gugur dan diganti dengan meny-. // The letter s drops and is replaced by meny-."],
        ["tulis → ___", "tulis → ___ (add the meN- prefix)", ["menulis", "mentulis", "metulis", "menyulis"], "Huruf t gugur dan diganti dengan men-. // The letter t drops and is replaced by men-."],
        ["pukul → ___", "pukul → ___ (add the meN- prefix)", ["memukul", "mempukul", "mepukul", "menpukul"], "Huruf p gugur dan diganti dengan mem-. // The letter p drops and is replaced by mem-."],
        ["kira → ___", "kira → ___ (add the meN- prefix)", ["mengira", "mengkira", "mekira", "menkira"], "Huruf k gugur dan diganti dengan meng-. // The letter k drops and is replaced by meng-."],
        ["cat → ___", "cat → ___ (add the meN- prefix)", ["mengecat", "mencat", "mecat", "menyecat"], "Kata dasar satu suku kata menggunakan menge-. // A one-syllable root takes menge-."],
        ["basuh → ___", "basuh → ___ (add the meN- prefix)", ["membasuh", "menbasuh", "mebasuh", "mengbasuh"]],
        ["Orang yang menulis buku ialah ___.", "A person who writes books is a ___.", ["penulis", "tulisan", "menulis", "ditulis"]],
        ["Alat untuk memadam tulisan pensel ialah ___.", "The tool for rubbing out pencil writing is a ___.", ["pemadam", "memadam", "padaman", "dipadam"]],
        ["Ibu menyediakan ___ yang lazat untuk kami.", "Mum prepares delicious ___ for us.", ["makanan", "memakan", "pemakan", "dimakan"]],
        ["Kakak ___ basikal ke sekolah setiap hari.", "My sister ___ a bicycle to school every day.", ["berbasikal", "membasikal", "terbasikal", "basikalan"], "Awalan ber- bermaksud menggunakan atau menaiki. // The prefix ber- can mean using or riding."],
        ["Adik ___ di atas lantai yang licin itu.", "My little brother ___ on the slippery floor.", ["terjatuh", "menjatuh", "berjatuh", "jatuhan"], "Awalan ter- menunjukkan perbuatan yang tidak sengaja. // The prefix ter- shows something done by accident."],
        ["Apakah kata dasar bagi “permainan”?", "What is the root word of “permainan”?", ["main", "permain", "mainan", "per"]]
      ],
      pairs: [
        {
          title: "Kata dasar dan awalan meN-", ask: "Padankan kata dasar dengan kata berimbuhan.", en: "Match the root word to the word with its prefix.",
          items: [["sapu", "menyapu"], ["tulis", "menulis"], ["baca", "membaca"], ["ambil", "mengambil"], ["lukis", "melukis"], ["cuci", "mencuci"], ["gosok", "menggosok"], ["pakai", "memakai"], ["tolong", "menolong"], ["kayuh", "mengayuh"], ["jahit", "menjahit"], ["dengar", "mendengar"]]
        },
        {
          title: "Perbuatan dan pelakunya", ask: "Padankan perbuatan dengan orang yang melakukannya.", en: "Match the action to the person who does it.",
          items: [["menulis", "penulis"], ["melukis", "pelukis"], ["menyanyi", "penyanyi"], ["menjual", "penjual"], ["membeli", "pembeli"], ["berlari", "pelari"], ["berenang", "perenang"], ["membaca", "pembaca"]]
        }
      ]
    },
    {
      id: "kadj", t: "Kata Adjektif", en: "Adjectives", icon: "🎨",
      notes: [
        ["Kata adjektif menerangkan sifat atau keadaan sesuatu kata nama.", "An adjective describes what a noun is like.", "✨"],
        ["Sifat: baik, rajin, sombong. Warna: merah, biru, hijau. Ukuran: besar, panjang, tinggi.", "Character: kind, hard-working, proud. Colour: red, blue, green. Size: big, long, tall.", "📏"],
        ["Bentuk: bulat, bujur, leper. Jarak: jauh, dekat. Waktu: awal, lewat, lama.", "Shape: round, oval, flat. Distance: far, near. Time: early, late, long (time).", "⭕"],
        ["Perasaan: gembira, sedih, marah, takut. Cara: cepat, perlahan, laju.", "Feelings: happy, sad, angry, afraid. Manner: quick, slow, fast.", "😊"],
        ["Pancaindera: manis, masam (rasa); wangi, busuk (bau); bising, merdu (dengar); licin, kasar (sentuh).", "Senses: sweet, sour (taste); fragrant, smelly (smell); noisy, melodious (hearing); smooth, rough (touch).", "👃"]
      ],
      q: [
        ["Yang manakah kata adjektif?", "Which one is an adjective?", ["rajin", "menulis", "buku", "dan"]],
        ["Bola itu berbentuk ___.", "The ball is ___ in shape.", ["bulat", "manis", "sedih", "jauh"]],
        ["Rumah nenek sangat ___ dari bandar. Kami bertolak awal pagi.", "Grandma's house is very ___ from town. We set off early in the morning.", ["jauh", "bulat", "manis", "merah"]],
        ["Suara penyanyi itu sungguh ___.", "The singer's voice is truly ___.", ["merdu", "wangi", "masam", "tebal"]],
        ["Bunga melur itu berbau ___.", "The jasmine flower smells ___.", ["wangi", "bising", "kasar", "laju"]],
        ["Aiman berasa ___ kerana mendapat hadiah.", "Aiman feels ___ because he got a present.", ["gembira", "marah", "takut", "lapar"]],
        ["Kura-kura berjalan dengan ___.", "A tortoise walks ___.", ["perlahan", "laju", "pantas", "deras"]],
        ["Zirafah mempunyai leher yang ___.", "A giraffe has a ___ neck.", ["panjang", "pendek", "bulat", "manis"]],
        ["“Merdu” ialah kata adjektif jenis apa?", "What kind of adjective is “merdu”?", ["Pancaindera", "Warna", "Bentuk", "Jarak"], "Merdu ialah bunyi yang sedap didengar. // Merdu describes a sound that is pleasant to hear."],
        ["“Lewat” ialah kata adjektif jenis apa?", "What kind of adjective is “lewat”?", ["Waktu", "Warna", "Ukuran", "Perasaan"]],
        ["Jeruk mangga itu rasanya ___.", "The pickled mango tastes ___.", ["masam", "wangi", "bising", "licin"]],
        ["Lantai yang basah itu sangat ___.", "The wet floor is very ___.", ["licin", "merdu", "manis", "tinggi"]]
      ],
      sort: {
        title: "Jenis kata adjektif", ask: "Kata adjektif ini jenis apa?", en: "What kind of adjective is this?",
        cats: ["Sifat", "Warna", "Ukuran", "Perasaan"],
        items: [["baik", 0], ["sombong", 0], ["jujur", 0], ["malas", 0], ["ungu", 1], ["jingga", 1], ["kelabu", 1], ["hitam", 1], ["tinggi", 2], ["pendek", 2], ["tebal", 2], ["kecil", 2], ["gembira", 3], ["sedih", 3], ["takut", 3], ["marah", 3]]
      }
    },
    {
      id: "khubung", t: "Kata Hubung", en: "Conjunctions", icon: "🔗",
      notes: [
        ["Kata hubung menyambungkan dua ayat atau perkataan.", "A conjunction joins two sentences or words.", "🔗"],
        ["dan – menambah. atau – pilihan. tetapi – bertentangan.", "dan – adds (and). atau – a choice (or). tetapi – a contrast (but).", "➕"],
        ["kerana – memberi sebab. supaya / agar – tujuan. jika / kalau – syarat.", "kerana – gives a reason (because). supaya / agar – purpose (so that). jika / kalau – a condition (if).", "❓"],
        ["sambil – dua perbuatan serentak. lalu – perbuatan yang berturutan. ketika / semasa – waktu.", "sambil – two actions at the same time (while). lalu – one action after another (then). ketika / semasa – time (when).", "⏱️"],
        ["walaupun / meskipun – bertentangan dengan jangkaan. hingga / sehingga – sampai ke had.", "walaupun / meskipun – against what is expected (although). hingga / sehingga – up to a limit (until).", "🌧️"]
      ],
      q: [
        ["Ali rajin ___ adiknya malas.", "Ali is hard-working ___ his brother is lazy.", ["tetapi", "dan", "atau", "kerana"]],
        ["Kamu hendak minum teh ___ kopi?", "Do you want to drink tea ___ coffee?", ["atau", "tetapi", "kerana", "lalu"]],
        ["Siti tidak hadir ke sekolah ___ dia demam.", "Siti is absent from school ___ she has a fever.", ["kerana", "supaya", "atau", "sambil"]],
        ["Kita mesti belajar bersungguh-sungguh ___ lulus peperiksaan.", "We must study hard ___ we pass the exam.", ["supaya", "tetapi", "atau", "walaupun"]],
        ["Ayah minum kopi ___ membaca surat khabar.", "Dad drinks coffee ___ reading the newspaper.", ["sambil", "atau", "kerana", "jika"], "“Sambil” untuk dua perbuatan yang dibuat serentak. // “Sambil” is for two actions done at the same time."],
        ["Dia mengambil beg ___ keluar dari bilik.", "He took his bag ___ left the room.", ["lalu", "atau", "kerana", "tetapi"], "“Lalu” untuk perbuatan yang berturutan. // “Lalu” is for one action after another."],
        ["___ hujan lebat, mereka tetap pergi ke sekolah.", "___ it was raining heavily, they still went to school.", ["Walaupun", "Kerana", "Supaya", "Atau"]],
        ["___ kamu rajin berusaha, kamu pasti berjaya.", "___ you work hard, you will surely succeed.", ["Jika", "Tetapi", "Lalu", "Atau"]],
        ["Emak membeli ikan ___ sayur di pasar.", "Mum buys fish ___ vegetables at the market.", ["dan", "tetapi", "kerana", "supaya"]],
        ["Adik menangis ___ matanya bengkak.", "My little sister cried ___ her eyes were swollen.", ["sehingga", "atau", "supaya", "walaupun"]],
        ["Saya sedang mandi ___ telefon berdering.", "I was having a bath ___ the phone rang.", ["ketika", "supaya", "atau", "jika"]],
        ["Yang manakah kata hubung?", "Which one is a conjunction?", ["kerana", "cantik", "berlari", "sekolah"]]
      ],
      pairs: {
        title: "Kata hubung dan gunanya", ask: "Padankan kata hubung dengan gunanya.", en: "Match the conjunction to what it does.",
        items: [["dan", "menambah"], ["atau", "pilihan"], ["tetapi", "bertentangan"], ["kerana", "sebab"], ["supaya", "tujuan"], ["jika", "syarat"], ["sambil", "serentak"], ["lalu", "berturutan"]]
      }
    },
    {
      id: "ksendi", t: "Kata Sendi Nama", en: "Prepositions", icon: "📍",
      notes: [
        ["di – menunjukkan tempat. ke – menunjukkan arah atau tempat yang dituju.", "di – shows a place (at/in). ke – shows a direction or where you are going (to).", "📍"],
        ["dari – untuk tempat, arah dan masa. Contoh: dari Ipoh, dari pagi.", "dari – for place, direction and time. Examples: from Ipoh, since morning.", "🚌"],
        ["daripada – untuk orang, sumber, bahan asal dan perbandingan. Contoh: daripada ibu, daripada kayu, lebih tinggi daripada saya.", "daripada – for people, sources, materials and comparisons. Examples: from Mum, made of wood, taller than me.", "🎁"],
        ["kepada – untuk orang yang menerima. pada – untuk masa dan tempat sesuatu berada.", "kepada – for the person who receives (to). pada – for time, and for where something is (on/at).", "🕒"],
        ["untuk – kegunaan atau bahagian. dengan – bersama-sama atau alat. oleh – pelaku dalam ayat pasif.", "untuk – purpose or share (for). dengan – together with, or using a tool (with). oleh – the doer in a passive sentence (by).", "🤝"]
      ],
      q: [
        ["Kami bercuti ___ Pulau Pangkor.", "We are on holiday ___ Pangkor Island.", ["di", "ke", "dari", "kepada"]],
        ["Ayah pergi ___ pejabat setiap pagi.", "Dad goes ___ the office every morning.", ["ke", "di", "pada", "daripada"]],
        ["Bas itu datang ___ Melaka.", "The bus comes ___ Melaka.", ["dari", "daripada", "kepada", "oleh"], "“Dari” untuk tempat. // “Dari” is used for places."],
        ["Saya menerima hadiah ___ nenek.", "I received a present ___ Grandma.", ["daripada", "dari", "ke", "di"], "“Daripada” untuk orang. // “Daripada” is used for people."],
        ["Meja itu diperbuat ___ kayu jati.", "The table is made ___ teak wood.", ["daripada", "dari", "kepada", "pada"], "“Daripada” untuk bahan asal. // “Daripada” is used for what something is made of."],
        ["Abang lebih tinggi ___ saya.", "My brother is taller ___ me.", ["daripada", "dari", "pada", "dengan"], "“Daripada” untuk perbandingan. // “Daripada” is used for comparisons."],
        ["Cikgu memberikan buku itu ___ Aiman.", "The teacher gives the book ___ Aiman.", ["kepada", "pada", "ke", "di"], "“Kepada” untuk orang yang menerima. // “Kepada” is for the person who receives."],
        ["Mesyuarat itu diadakan ___ hari Isnin.", "The meeting is held ___ Monday.", ["pada", "kepada", "ke", "oleh"], "“Pada” untuk masa. // “Pada” is used for time."],
        ["Kek ini ___ adik.", "This cake is ___ my little brother.", ["untuk", "oleh", "dari", "ke"]],
        ["Saya pergi ke sekolah ___ menaiki bas.", "I go to school ___ taking the bus.", ["dengan", "oleh", "kepada", "pada"]],
        ["Buku cerita itu ditulis ___ seorang guru.", "The storybook was written ___ a teacher.", ["oleh", "untuk", "kepada", "dari"]],
        ["Dia belajar ___ pagi hingga petang.", "He studies ___ morning until evening.", ["dari", "daripada", "kepada", "di"], "“Dari” untuk masa. // “Dari” is used for time."]
      ],
      sort: {
        title: "Dari atau daripada?", ask: "Lengkapkan dengan “dari” atau “daripada”.", en: "Complete with “dari” or “daripada”.",
        cats: ["dari", "daripada"],
        items: [["Kereta itu datang ___ Johor.", 0], ["Surat ini ___ kawan saya.", 1], ["Dia menunggu ___ pukul lapan.", 0], ["Kasut ini dibuat ___ kulit.", 1], ["Angin bertiup ___ arah laut.", 0], ["Lori lebih besar ___ kereta.", 1], ["Mereka baru pulang ___ sekolah.", 0], ["Saya meminjam buku ___ Mei Ling.", 1]]
      }
    },
    {
      id: "kbantu", t: "Kata Bantu & Kata Penguat", en: "Helping words & intensifiers", icon: "💪",
      notes: [
        ["Kata bantu menerangkan bila sesuatu perbuatan berlaku.", "Helping words tell us when an action happens.", "⏰"],
        ["sudah / telah – perbuatan selesai. sedang / masih – perbuatan berlaku sekarang.", "sudah / telah – the action is finished. sedang / masih – the action is happening now.", "✅"],
        ["akan – perbuatan belum berlaku tetapi pasti berlaku. belum – perbuatan tidak lagi berlaku setakat ini.", "akan – the action has not happened but will. belum – the action has not happened so far.", "🔜"],
        ["Kata penguat menguatkan maksud kata adjektif: sangat, amat, sungguh, terlalu, paling, sekali.", "Intensifiers strengthen an adjective: sangat, amat, sungguh (very), terlalu (too), paling (most), sekali (very).", "🔥"],
        ["sangat, amat, terlalu, paling berada DI HADAPAN kata adjektif. “sekali” berada DI BELAKANG: cantik sekali.", "sangat, amat, terlalu, paling go BEFORE the adjective. “sekali” goes AFTER it: cantik sekali.", "↔️"]
      ],
      q: [
        ["Ibu ___ memasak di dapur sekarang.", "Mum ___ cooking in the kitchen right now.", ["sedang", "sudah", "akan", "belum"]],
        ["Saya ___ makan tadi. Saya kenyang.", "I ___ eaten just now. I am full.", ["sudah", "akan", "sedang", "belum"]],
        ["Kami ___ melawat nenek pada minggu hadapan.", "We ___ visit Grandma next week.", ["akan", "sudah", "telah", "sedang"]],
        ["Adik ___ mandi. Badannya masih kotor.", "My little brother ___ had a bath. He is still dirty.", ["belum", "sudah", "telah", "sedang"]],
        ["Hujan ___ turun walaupun sudah dua jam.", "The rain is ___ falling even after two hours.", ["masih", "akan", "belum", "telah"]],
        ["Bangunan itu ___ tinggi di Malaysia.", "That building is the ___ tall in Malaysia.", ["paling", "sekali", "sedang", "akan"]],
        ["Pemandangan di pantai itu indah ___.", "The view at the beach is beautiful ___.", ["sekali", "paling", "sangat", "amat"], "“Sekali” berada di belakang kata adjektif. // “Sekali” goes after the adjective."],
        ["Baju itu ___ besar untuk adik. Adik tidak boleh memakainya.", "The shirt is ___ big for my little brother. He cannot wear it.", ["terlalu", "sekali", "sudah", "sedang"]],
        ["Pilih ayat yang betul.", "Choose the correct sentence.", ["Kucing itu sangat comel.", "Kucing itu comel sangat sekali.", "Kucing itu paling comel sekali.", "Kucing itu sekali comel."], "Gunakan satu kata penguat sahaja. // Use only one intensifier."],
        ["Yang manakah kata bantu?", "Which one is a helping word?", ["sedang", "sangat", "cantik", "dan"]],
        ["Yang manakah kata penguat?", "Which one is an intensifier?", ["amat", "akan", "belum", "atau"]]
      ],
      sort: {
        title: "Kata bantu atau kata penguat?", ask: "Kata bantu atau kata penguat?", en: "Helping word or intensifier?",
        cats: ["Kata bantu", "Kata penguat"],
        items: [["sudah", 0], ["telah", 0], ["sedang", 0], ["masih", 0], ["akan", 0], ["belum", 0], ["sangat", 1], ["amat", 1], ["sungguh", 1], ["terlalu", 1], ["paling", 1], ["sekali", 1]]
      }
    },
    {
      id: "kganda", t: "Kata Ganda & Kata Majmuk", en: "Reduplicated & compound words", icon: "👯",
      notes: [
        ["Kata ganda penuh: seluruh perkataan diulang. Contoh: buku-buku, murid-murid, cantik-cantik.", "Full reduplication: the whole word is repeated. Examples: buku-buku, murid-murid, cantik-cantik.", "📚"],
        ["Kata ganda separa: hanya suku kata pertama diulang. Contoh: lelaki, tetamu, jejari, dedaun, pepohon.", "Partial reduplication: only the first syllable is repeated. Examples: lelaki, tetamu, jejari, dedaun, pepohon.", "🍃"],
        ["Kata ganda berentak: bunyi perkataan berubah. Contoh: kuih-muih, sayur-mayur, gunung-ganang, warna-warni.", "Rhythmic reduplication: the sound changes. Examples: kuih-muih, sayur-mayur, gunung-ganang, warna-warni.", "🎵"],
        ["Kata majmuk: dua perkataan digabungkan untuk membawa satu maksud. Contoh: kapal terbang, jalan raya, guru besar.", "A compound word: two words joined to give one meaning. Examples: kapal terbang (aeroplane), jalan raya (road), guru besar (headteacher).", "✈️"],
        ["Ada kata majmuk yang ditulis rapat: matahari, setiausaha, tandatangan, warganegara, kakitangan.", "Some compound words are written as one word: matahari, setiausaha, tandatangan, warganegara, kakitangan.", "☀️"]
      ],
      q: [
        ["Yang manakah kata ganda penuh?", "Which one is a full reduplication?", ["pokok-pokok", "kuih-muih", "dedaun", "kapal terbang"]],
        ["Yang manakah kata ganda separa?", "Which one is a partial reduplication?", ["tetamu", "bukit-bukau", "meja-meja", "jalan raya"]],
        ["Yang manakah kata ganda berentak?", "Which one is a rhythmic reduplication?", ["sayur-mayur", "sayur-sayur", "jejari", "air mata"]],
        ["Yang manakah kata majmuk?", "Which one is a compound word?", ["kereta api", "kereta-kereta", "lauk-pauk", "lelaki"]],
        ["Emak menghidangkan pelbagai ___ pada hari raya.", "Mum serves all kinds of ___ on festival day.", ["kuih-muih", "kuih-kuah", "kueh-mueh", "kuih-kuih muih"]],
        ["Kata ganda separa bagi “daun-daun” ialah ...", "The partial reduplication of “daun-daun” is ...", ["dedaun", "daunan", "dadaun", "daun-daunan"]],
        ["Kata ganda separa bagi “jari-jari” ialah ...", "The partial reduplication of “jari-jari” is ...", ["jejari", "jajari", "jarian", "jari-jemari"]],
        ["Belon yang ___ itu menghiasi dewan sekolah.", "The ___ balloons decorate the school hall.", ["berwarna-warni", "warna-warna", "warni-warna", "berwarna-warna"]],
        ["Pilih ejaan kata majmuk yang betul.", "Choose the correct spelling of the compound word.", ["tandatangan", "tanda tangan", "tanda-tangan", "tandaTangan"]],
        ["Ayah menaiki ___ ke Sabah.", "Dad takes a ___ to Sabah.", ["kapal terbang", "kapal-terbang", "kapalterbang", "kapal-kapal"]],
        ["Murid-murid berkumpul di ___ pada setiap pagi Isnin.", "The pupils gather at the ___ every Monday morning.", ["tapak perhimpunan", "tapak-tapak", "tapakperhimpunan", "tapak-perhimpunan"]],
        ["Malaysia mempunyai banyak ___ yang tinggi.", "Malaysia has many tall ___.", ["gunung-ganang", "gunung-gunang", "ganang-gunung", "gegunung-ganang"]]
      ],
      pairs: {
        title: "Kata ganda berentak", ask: "Padankan untuk melengkapkan kata ganda berentak.", en: "Match to complete the rhythmic reduplication.",
        items: [["kuih-", "muih"], ["sayur-", "mayur"], ["gunung-", "ganang"], ["bukit-", "bukau"], ["lauk-", "pauk"], ["warna-", "warni"], ["saudara-", "mara"], ["batu-", "batan"], ["kayu-", "kayan"], ["mundar-", "mandir"], ["bolak-", "balik"], ["gotong-", "royong"]]
      },
      sort: {
        title: "Jenis kata ganda dan kata majmuk", ask: "Perkataan ini jenis apa?", en: "What kind of word is this?",
        cats: ["Ganda penuh", "Ganda separa", "Ganda berentak", "Kata majmuk"],
        items: [["rumah-rumah", 0], ["kanak-kanak", 0], ["besar-besar", 0], ["lelaki", 1], ["pepohon", 1], ["dedaun", 1], ["lauk-pauk", 2], ["bukit-bukau", 2], ["saudara-mara", 2], ["guru besar", 3], ["jalan raya", 3], ["matahari", 3]]
      }
    },
    {
      id: "sinonim", t: "Sinonim & Antonim", en: "Synonyms & antonyms", icon: "🔁",
      notes: [
        ["Sinonim ialah perkataan yang sama atau hampir sama maksudnya. Contoh: cantik – indah.", "A synonym is a word with the same or nearly the same meaning. Example: cantik – indah (beautiful).", "🟰"],
        ["Antonim ialah perkataan yang berlawanan maksudnya. Contoh: tinggi – rendah.", "An antonym is a word with the opposite meaning. Example: tinggi – rendah (tall – short/low).", "↕️"],
        ["Mengetahui sinonim dan antonim membantu kita memahami bacaan dan menulis dengan lebih baik.", "Knowing synonyms and antonyms helps us understand what we read and write better.", "📖"]
      ],
      q: [
        ["Sinonim bagi “cantik” ialah ...", "A synonym of “cantik” is ...", ["indah", "hodoh", "besar", "jauh"]],
        ["Sinonim bagi “pandai” ialah ...", "A synonym of “pandai” is ...", ["bijak", "malas", "bodoh", "lambat"]],
        ["Sinonim bagi “gembira” ialah ...", "A synonym of “gembira” is ...", ["riang", "sedih", "marah", "takut"]],
        ["Sinonim bagi “kawan” ialah ...", "A synonym of “kawan” is ...", ["sahabat", "musuh", "jiran", "guru"]],
        ["Sinonim bagi “wangi” ialah ...", "A synonym of “wangi” is ...", ["harum", "busuk", "masam", "pahit"]],
        ["Sinonim bagi “pulang” ialah ...", "A synonym of “pulang” is ...", ["balik", "pergi", "datang", "tiba"]],
        ["Antonim bagi “rajin” ialah ...", "The antonym of “rajin” is ...", ["malas", "tekun", "pandai", "baik"]],
        ["Antonim bagi “tebal” ialah ...", "The antonym of “tebal” is ...", ["nipis", "besar", "berat", "luas"]],
        ["Antonim bagi “dalam” (air sungai) ialah ...", "The antonym of “dalam” (river water) is ...", ["cetek", "luar", "tinggi", "jauh"]],
        ["Antonim bagi “tajam” ialah ...", "The antonym of “tajam” is ...", ["tumpul", "runcing", "keras", "halus"]],
        ["Antonim bagi “menang” ialah ...", "The antonym of “menang” is ...", ["kalah", "juara", "berjaya", "lawan"]],
        ["Antonim bagi “ingat” ialah ...", "The antonym of “ingat” is ...", ["lupa", "tahu", "fikir", "hafal"]]
      ],
      pairs: [
        {
          title: "Sinonim (kata seerti)", ask: "Padankan perkataan dengan sinonimnya.", en: "Match the word to its synonym.",
          items: [["cantik", "indah"], ["pandai", "bijak"], ["gembira", "riang"], ["cepat", "pantas"], ["kawan", "sahabat"], ["wangi", "harum"], ["pulang", "balik"], ["takut", "gentar"], ["marah", "berang"], ["suka", "gemar"], ["bising", "riuh"], ["senyap", "sunyi"], ["lihat", "pandang"], ["murid", "pelajar"], ["hadiah", "ganjaran"], ["kotor", "cemar"]]
        },
        {
          title: "Antonim (kata berlawan)", ask: "Padankan perkataan dengan antonimnya.", en: "Match the word to its opposite.",
          items: [["rajin", "malas"], ["tebal", "nipis"], ["luas", "sempit"], ["dalam", "cetek"], ["tajam", "tumpul"], ["mahal", "murah"], ["kasar", "halus"], ["lembut", "keras"], ["menang", "kalah"], ["ingat", "lupa"], ["penuh", "kosong"], ["awal", "lewat"], ["kaya", "miskin"], ["berat", "ringan"], ["timbul", "tenggelam"], ["jual", "beli"]]
        }
      ]
    },
    {
      id: "simpulan", t: "Simpulan Bahasa", en: "Idioms", icon: "💬",
      notes: [
        ["Simpulan bahasa ialah gabungan dua perkataan atau lebih yang membawa maksud yang berbeza daripada maksud asal.", "An idiom is two or more words that together mean something different from their plain meaning.", "💡"],
        ["Contoh: “ringan tulang” bukan bermaksud tulang yang ringan, tetapi rajin.", "Example: “ringan tulang” does not mean light bones; it means hard-working.", "🦴"],
        ["Contoh: “ulat buku” bermaksud orang yang suka membaca.", "Example: “ulat buku” (bookworm) means a person who loves reading.", "🐛"]
      ],
      q: [
        ["“Ringan tulang” bermaksud ...", "“Ringan tulang” means ...", ["rajin", "malas", "kurus", "lemah"]],
        ["“Berat tulang” bermaksud ...", "“Berat tulang” means ...", ["malas", "rajin", "gemuk", "kuat"]],
        ["“Ulat buku” bermaksud ...", "“Ulat buku” means ...", ["suka membaca", "ulat di dalam buku", "buku yang rosak", "suka menulis"]],
        ["“Buah tangan” bermaksud ...", "“Buah tangan” means ...", ["hadiah atau ole-ole", "buah yang dipetik", "tangan yang besar", "kerja tangan"]],
        ["“Anak emas” bermaksud ...", "“Anak emas” means ...", ["anak yang paling disayangi", "anak yang kaya", "patung emas", "anak yang degil"]],
        ["“Cakar ayam” bermaksud ...", "“Cakar ayam” means ...", ["tulisan yang buruk", "kaki ayam", "tulisan yang cantik", "lukisan ayam"]],
        ["“Kaki bangku” bermaksud ...", "“Kaki bangku” means ...", ["tidak pandai bermain bola", "kaki kerusi", "pandai bermain bola", "suka duduk"]],
        ["“Panjang tangan” bermaksud ...", "“Panjang tangan” means ...", ["suka mencuri", "suka menolong", "tangan yang panjang", "pandai melukis"]],
        ["“Mulut murai” bermaksud ...", "“Mulut murai” means ...", ["banyak bercakap", "pandai menyanyi", "pendiam", "suka makan"]],
        ["“Hati batu” bermaksud ...", "“Hati batu” means ...", ["degil", "penyayang", "penakut", "pemurah"]],
        ["“Murah hati” bermaksud ...", "“Murah hati” means ...", ["suka memberi", "kedekut", "barang murah", "mudah marah"]],
        ["“Makan angin” bermaksud ...", "“Makan angin” means ...", ["bersiar-siar", "lapar", "makan di luar", "sakit perut"]],
        ["Aina suka menolong ibunya di dapur. Aina seorang yang ___.", "Aina likes helping her mother in the kitchen. Aina is ___.", ["ringan tulang", "berat tulang", "panjang tangan", "kaki bangku"]],
        ["Amir membaca buku setiap hari di perpustakaan. Amir seorang ___.", "Amir reads books in the library every day. Amir is a ___.", ["ulat buku", "mulut murai", "anak emas", "kaki bangku"]]
      ],
      pairs: {
        title: "Simpulan bahasa dan maksudnya", ask: "Padankan simpulan bahasa dengan maksudnya.", en: "Match the idiom to its meaning.",
        items: [["ringan tulang", "rajin"], ["berat tulang", "malas"], ["ulat buku", "suka membaca"], ["buah tangan", "hadiah"], ["anak emas", "anak kesayangan"], ["cakar ayam", "tulisan buruk"], ["kaki bangku", "tidak pandai bermain bola"], ["panjang tangan", "suka mencuri"], ["mulut murai", "banyak bercakap"], ["hati batu", "degil"], ["murah hati", "suka memberi"], ["makan angin", "bersiar-siar"], ["naik angin", "marah"], ["kaki ayam", "tidak berkasut"], ["besar kepala", "sombong"], ["telinga kuali", "tidak mendengar nasihat"]]
      }
    },
    {
      id: "ayat", t: "Jenis Ayat & Tanda Baca", en: "Sentence types & punctuation", icon: "✏️",
      notes: [
        ["Ayat penyata menyatakan sesuatu dan diakhiri dengan tanda noktah (.).", "A statement tells us something and ends with a full stop (.).", "🟢"],
        ["Ayat tanya digunakan untuk bertanya dan diakhiri dengan tanda soal (?).", "A question asks something and ends with a question mark (?).", "❓"],
        ["Ayat perintah menyuruh, melarang atau meminta. Contoh: Sila duduk. Jangan bising.", "A command tells, forbids or asks. Examples: Please sit down. Do not make noise.", "☝️"],
        ["Ayat seruan menunjukkan perasaan dan diakhiri dengan tanda seru (!). Contoh: Wah, cantiknya!", "An exclamation shows feeling and ends with an exclamation mark (!). Example: Wow, how pretty!", "❗"],
        ["Tanda koma (,) memisahkan senarai. Tanda petik (“ ”) untuk kata-kata yang diucapkan.", "A comma (,) separates items in a list. Quotation marks (“ ”) are for spoken words.", "💬"]
      ],
      q: [
        ["“Siapakah nama kamu?” ialah ayat ...", "“Siapakah nama kamu?” is a ...", ["tanya", "penyata", "perintah", "seruan"]],
        ["“Jangan buang sampah di sini.” ialah ayat ...", "“Jangan buang sampah di sini.” is a ...", ["perintah", "tanya", "penyata", "seruan"]],
        ["“Wah, besarnya ikan itu!” ialah ayat ...", "“Wah, besarnya ikan itu!” is an ...", ["seruan", "tanya", "perintah", "penyata"]],
        ["“Ayah saya seorang guru.” ialah ayat ...", "“Ayah saya seorang guru.” is a ...", ["penyata", "tanya", "perintah", "seruan"]],
        ["Tanda baca manakah di hujung ayat tanya?", "Which punctuation mark ends a question?", ["tanda soal (?)", "tanda noktah (.)", "tanda seru (!)", "tanda koma (,)"]],
        ["Pilih ayat yang betul tanda bacanya.", "Choose the sentence with correct punctuation.", ["Ibu membeli ikan, sayur dan buah.", "Ibu membeli ikan sayur dan buah?", "ibu membeli ikan, sayur dan buah", "Ibu membeli, ikan, sayur, dan, buah."]],
        ["Pilih ayat yang betul tanda bacanya.", "Choose the sentence with correct punctuation.", ["“Di manakah kamu tinggal?” tanya Ali.", "Di manakah kamu tinggal. tanya Ali?", "“Di manakah kamu tinggal” tanya Ali.", "Di manakah kamu tinggal, tanya Ali!"]],
        ["Kata perintah manakah digunakan untuk melarang?", "Which command word is used to forbid?", ["jangan", "sila", "tolong", "jemput"]],
        ["___ ambilkan saya segelas air.", "___ get me a glass of water.", ["Tolong", "Jangan", "Wah", "Aduh"]],
        ["___, sakitnya kaki saya!", "___, my leg hurts so much!", ["Aduh", "Sila", "Tolong", "Jangan"]],
        ["Huruf besar digunakan pada ...", "A capital letter is used at ...", ["permulaan ayat dan kata nama khas", "hujung ayat sahaja", "semua perkataan", "kata kerja sahaja"]]
      ],
      sort: {
        title: "Jenis ayat", ask: "Ini ayat jenis apa?", en: "What kind of sentence is this?",
        cats: ["Penyata", "Tanya", "Perintah", "Seruan"],
        items: [["Kucing itu tidur di bawah meja.", 0], ["Kami tinggal di Shah Alam.", 0], ["Hari ini hari Rabu.", 0], ["Bilakah kamu sampai?", 1], ["Mengapakah dia menangis?", 1], ["Berapakah harga buku ini?", 1], ["Sila beratur di sini.", 2], ["Jangan petik bunga itu.", 2], ["Tolong tutup pintu.", 2], ["Amboi, cantiknya baju kamu!", 3], ["Aduh, sakitnya gigi saya!", 3], ["Wah, tingginya bangunan itu!", 3]]
      },
      order: [
        ["Susun perkataan supaya menjadi ayat yang betul.", "Put the words in order to make a correct sentence.", ["Adik", "sedang", "bermain", "bola", "di", "padang."], "ayat"],
        ["Susun perkataan supaya menjadi ayat yang betul.", "Put the words in order to make a correct sentence.", ["Ibu", "memasak", "nasi", "lemak", "untuk", "kami."], "ayat"],
        ["Susun perkataan supaya menjadi ayat yang betul.", "Put the words in order to make a correct sentence.", ["Kami", "pergi", "ke", "perpustakaan", "pada", "hari", "Sabtu."], "ayat"],
        ["Susun perkataan supaya menjadi ayat yang betul.", "Put the words in order to make a correct sentence.", ["Ayah", "membaca", "surat", "khabar", "sambil", "minum", "kopi."], "ayat"],
        ["Susun perkataan supaya menjadi ayat yang betul.", "Put the words in order to make a correct sentence.", ["Siti", "tidak", "hadir", "kerana", "dia", "demam."], "ayat"],
        ["Susun perkataan supaya menjadi ayat yang betul.", "Put the words in order to make a correct sentence.", ["Buku", "itu", "ditulis", "oleh", "seorang", "guru."], "ayat"],
        ["Susun perkataan supaya menjadi ayat tanya yang betul.", "Put the words in order to make a correct question.", ["Di", "manakah", "kamu", "tinggal?"], "ayat"],
        ["Susun perkataan supaya menjadi ayat yang betul.", "Put the words in order to make a correct sentence.", ["Abang", "lebih", "tinggi", "daripada", "saya."], "ayat"],
        ["Susun perkataan supaya menjadi ayat yang betul.", "Put the words in order to make a correct sentence.", ["Murid-murid", "beratur", "sebelum", "masuk", "ke", "kelas."], "ayat"],
        ["Susun perkataan supaya menjadi ayat perintah yang betul.", "Put the words in order to make a correct command.", ["Jangan", "buang", "sampah", "ke", "dalam", "sungai."], "ayat"]
      ]
    },
    {
      id: "faham", t: "Pemahaman", en: "Reading comprehension", icon: "📖",
      notes: [
        ["Baca petikan dengan teliti sebelum menjawab soalan.", "Read the passage carefully before answering.", "👀"],
        ["Cari kata tanya dalam soalan: siapa (orang), di mana (tempat), bila (masa), apa (benda), mengapa (sebab), bagaimana (cara).", "Look for the question word: siapa (who), di mana (where), bila (when), apa (what), mengapa (why), bagaimana (how).", "❓"],
        ["Jawapan biasanya ada di dalam petikan. Baca semula ayat yang berkaitan.", "The answer is usually in the passage. Read the sentence it comes from again.", "🔍"]
      ],
      q: [
        ["Pada hari Ahad, Aiman dan keluarganya pergi ke Pantai Morib. Mereka bertolak pada pukul tujuh pagi dengan menaiki kereta. Di sana, Aiman membina istana pasir bersama adiknya. — Ke manakah Aiman dan keluarganya pergi?", "On Sunday, Aiman and his family went to Morib Beach. They set off at seven in the morning by car. There, Aiman built a sandcastle with his little brother. — Where did Aiman and his family go?", ["Pantai Morib", "Zoo Negara", "pasar malam", "rumah nenek"]],
        ["Pada hari Ahad, Aiman dan keluarganya pergi ke Pantai Morib. Mereka bertolak pada pukul tujuh pagi dengan menaiki kereta. Di sana, Aiman membina istana pasir bersama adiknya. — Bilakah mereka bertolak?", "On Sunday, Aiman and his family went to Morib Beach. They set off at seven in the morning by car. There, Aiman built a sandcastle with his little brother. — When did they set off?", ["pukul tujuh pagi", "pukul tujuh malam", "pukul sembilan pagi", "waktu tengah hari"]],
        ["Pada hari Ahad, Aiman dan keluarganya pergi ke Pantai Morib. Mereka bertolak pada pukul tujuh pagi dengan menaiki kereta. Di sana, Aiman membina istana pasir bersama adiknya. — Bagaimanakah mereka pergi ke sana?", "On Sunday, Aiman and his family went to Morib Beach. They set off at seven in the morning by car. There, Aiman built a sandcastle with his little brother. — How did they get there?", ["menaiki kereta", "menaiki bas", "berjalan kaki", "menaiki bot"]],
        ["Pada hari Ahad, Aiman dan keluarganya pergi ke Pantai Morib. Mereka bertolak pada pukul tujuh pagi dengan menaiki kereta. Di sana, Aiman membina istana pasir bersama adiknya. — Apakah yang dibuat oleh Aiman di pantai?", "On Sunday, Aiman and his family went to Morib Beach. They set off at seven in the morning by car. There, Aiman built a sandcastle with his little brother. — What did Aiman do at the beach?", ["membina istana pasir", "memancing ikan", "bermain layang-layang", "mengutip sampah"]],
        ["Mei Ling memelihara seekor arnab bernama Si Putih. Setiap petang, dia memberi Si Putih makan lobak merah dan sayur. Dia juga membersihkan sangkar arnab itu supaya Si Putih sentiasa sihat. — Apakah haiwan peliharaan Mei Ling?", "Mei Ling keeps a rabbit called Si Putih. Every evening, she feeds Si Putih carrots and vegetables. She also cleans the rabbit's cage so that Si Putih always stays healthy. — What is Mei Ling's pet?", ["arnab", "kucing", "burung", "ikan"]],
        ["Mei Ling memelihara seekor arnab bernama Si Putih. Setiap petang, dia memberi Si Putih makan lobak merah dan sayur. Dia juga membersihkan sangkar arnab itu supaya Si Putih sentiasa sihat. — Apakah makanan Si Putih?", "Mei Ling keeps a rabbit called Si Putih. Every evening, she feeds Si Putih carrots and vegetables. She also cleans the rabbit's cage so that Si Putih always stays healthy. — What does Si Putih eat?", ["lobak merah dan sayur", "ikan dan nasi", "roti dan susu", "biji jagung"]],
        ["Mei Ling memelihara seekor arnab bernama Si Putih. Setiap petang, dia memberi Si Putih makan lobak merah dan sayur. Dia juga membersihkan sangkar arnab itu supaya Si Putih sentiasa sihat. — Mengapakah Mei Ling membersihkan sangkar?", "Mei Ling keeps a rabbit called Si Putih. Every evening, she feeds Si Putih carrots and vegetables. She also cleans the rabbit's cage so that Si Putih always stays healthy. — Why does Mei Ling clean the cage?", ["supaya Si Putih sentiasa sihat", "supaya Si Putih lari", "kerana disuruh oleh guru", "kerana sangkar itu baharu"]],
        ["Mei Ling memelihara seekor arnab bernama Si Putih. Setiap petang, dia memberi Si Putih makan lobak merah dan sayur. Dia juga membersihkan sangkar arnab itu supaya Si Putih sentiasa sihat. — Mei Ling seorang yang ...", "Mei Ling keeps a rabbit called Si Putih. Every evening, she feeds Si Putih carrots and vegetables. She also cleans the rabbit's cage so that Si Putih always stays healthy. — Mei Ling is a ... person.", ["bertanggungjawab", "pemalas", "penakut", "sombong"], "Dia menjaga haiwan peliharaannya dengan baik setiap hari. // She looks after her pet well every day."],
        ["Semalam hujan turun dengan lebat. Raju terlupa membawa payung ke sekolah. Kawannya, Hafiz, berkongsi payung dengannya. Raju mengucapkan terima kasih kepada Hafiz. — Mengapakah Raju tidak mempunyai payung?", "Yesterday it rained heavily. Raju forgot to bring an umbrella to school. His friend Hafiz shared his umbrella with him. Raju thanked Hafiz. — Why did Raju not have an umbrella?", ["dia terlupa membawanya", "payungnya rosak", "payungnya dicuri", "dia tidak suka payung"]],
        ["Semalam hujan turun dengan lebat. Raju terlupa membawa payung ke sekolah. Kawannya, Hafiz, berkongsi payung dengannya. Raju mengucapkan terima kasih kepada Hafiz. — Siapakah yang menolong Raju?", "Yesterday it rained heavily. Raju forgot to bring an umbrella to school. His friend Hafiz shared his umbrella with him. Raju thanked Hafiz. — Who helped Raju?", ["Hafiz", "guru kelas", "ayah Raju", "pengawal sekolah"]],
        ["Semalam hujan turun dengan lebat. Raju terlupa membawa payung ke sekolah. Kawannya, Hafiz, berkongsi payung dengannya. Raju mengucapkan terima kasih kepada Hafiz. — Apakah nilai murni yang ditunjukkan oleh Hafiz?", "Yesterday it rained heavily. Raju forgot to bring an umbrella to school. His friend Hafiz shared his umbrella with him. Raju thanked Hafiz. — What good value did Hafiz show?", ["tolong-menolong", "berjimat cermat", "menepati masa", "berani"]],
        ["Semalam hujan turun dengan lebat. Raju terlupa membawa payung ke sekolah. Kawannya, Hafiz, berkongsi payung dengannya. Raju mengucapkan terima kasih kepada Hafiz. — Bagaimanakah keadaan cuaca semalam?", "Yesterday it rained heavily. Raju forgot to bring an umbrella to school. His friend Hafiz shared his umbrella with him. Raju thanked Hafiz. — What was the weather like yesterday?", ["hujan lebat", "panas terik", "berangin", "mendung sahaja"]]
      ]
    }
  ]
});
