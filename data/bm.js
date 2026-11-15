/* BAHASA MELAYU TAHUN 2 (SK) – KSSR (Semakan 2017): kosa kata, tatabahasa (golongan kata,
   pembentukan kata, ayat) dan seni bahasa. Format sama seperti data/sains.js.
   Jawapan betul sentiasa yang PERTAMA dalam senarai pilihan. */
window.SUBJECTS.push({
  id: "bm", name: "Bahasa Melayu", en: "Malay Language", icon: "📚", color: "#2F7BEA",
  topics: [
    {
      id: "kosa1", t: "Kosa Kata: Keluarga & Badan", en: "Vocabulary: family & body", icon: "👨‍👩‍👧",
      notes: [
        ["Topik ini membantu kamu faham perkataan Bahasa Melayu yang selalu digunakan.", "This topic helps you understand Malay words that are used often.", "🗝️"],
        ["Abang dan kakak lebih tua daripada kita. Adik lebih muda.", "Abang (older brother) and kakak (older sister) are older than us. Adik is younger.", "👧"]
      ],
      pairs: [
        { title: "Keluarga", ask: "Apakah maksud perkataan ini?", en: "What does this word mean?", items: [
          ["ibu / emak", "mother"], ["bapa / ayah", "father"], ["abang", "older brother"], ["kakak", "older sister"], ["adik", "younger brother or sister"],
          ["datuk", "grandfather"], ["nenek", "grandmother"], ["bapa saudara", "uncle"], ["ibu saudara", "aunt"], ["sepupu", "cousin"], ["jiran", "neighbour"], ["kawan", "friend"]
        ] },
        { title: "Anggota badan", ask: "Apakah maksud perkataan ini?", en: "What does this word mean?", items: [
          ["kepala", "head"], ["rambut", "hair"], ["mata", "eye"], ["telinga", "ear"], ["hidung", "nose"], ["mulut", "mouth"], ["gigi", "teeth"],
          ["tangan", "hand"], ["jari", "finger"], ["kaki", "leg / foot"], ["perut", "stomach"], ["bahu", "shoulder"], ["lutut", "knee"], ["leher", "neck"]
        ] }
      ],
      q: [
        ["Anak lelaki kepada bapa saudara ialah ___ saya.", "The son of my uncle is my ___.", ["sepupu", "adik", "datuk", "jiran"]],
        ["Ibu kepada ibu saya ialah ___ saya.", "My mother's mother is my ___.", ["nenek", "kakak", "ibu saudara", "sepupu"]],
        ["Kita mendengar dengan ___.", "We hear with our ___.", ["telinga", "hidung", "lutut", "bahu"]],
        ["Kita menggosok ___ setiap pagi dan malam.", "We brush our ___ every morning and night.", ["gigi", "lutut", "bahu", "leher"]],
        ["Orang yang tinggal di sebelah rumah kita ialah ___.", "The person who lives next door is our ___.", ["jiran", "sepupu", "nenek", "adik"]]
      ]
    },
    {
      id: "kosa2", t: "Kosa Kata: Sekolah & Rumah", en: "Vocabulary: school & home", icon: "🏫",
      notes: [
        ["Perkataan ini selalu digunakan oleh guru di dalam kelas.", "These words are often used by teachers in class.", "🧑‍🏫"],
        ["Kalau tidak faham, tanya: “Cikgu, apakah maksud perkataan ini?”", "If you don't understand, ask: 'Teacher, what does this word mean?'", "🙋"]
      ],
      pairs: [
        { title: "Di sekolah", ask: "Apakah maksud perkataan ini?", en: "What does this word mean?", items: [
          ["guru / cikgu", "teacher"], ["murid", "pupil"], ["bilik darjah", "classroom"], ["papan putih", "whiteboard"], ["buku latihan", "exercise book"], ["pemadam", "eraser"],
          ["pembaris", "ruler"], ["kantin", "canteen"], ["perpustakaan", "library"], ["padang", "field"], ["tandas", "toilet"], ["kerja rumah", "homework"], ["perhimpunan", "assembly"], ["waktu rehat", "recess"]
        ] },
        { title: "Arahan guru", ask: "Apakah maksud arahan ini?", en: "What does this instruction mean?", items: [
          ["Sila duduk.", "Please sit down."], ["Sila berdiri.", "Please stand up."], ["Buka buku.", "Open your book."], ["Tutup buku.", "Close your book."], ["Dengar baik-baik.", "Listen carefully."],
          ["Salin ayat ini.", "Copy this sentence."], ["Angkat tangan.", "Raise your hand."], ["Hantar buku.", "Hand in your book."], ["Beratur.", "Line up."], ["Baca kuat-kuat.", "Read aloud."], ["Gariskan jawapan.", "Underline the answer."], ["Bulatkan jawapan.", "Circle the answer."]
        ] },
        { title: "Di rumah", ask: "Apakah maksud perkataan ini?", en: "What does this word mean?", items: [
          ["dapur", "kitchen"], ["bilik tidur", "bedroom"], ["bilik air", "bathroom"], ["ruang tamu", "living room"], ["pintu", "door"], ["tingkap", "window"],
          ["bantal", "pillow"], ["selimut", "blanket"], ["pinggan", "plate"], ["cawan", "cup"], ["sudu", "spoon"], ["peti sejuk", "fridge"], ["kipas", "fan"], ["tangga", "stairs"]
        ] }
      ],
      q: [
        ["Kita meminjam buku cerita di ___.", "We borrow storybooks at the ___.", ["perpustakaan", "kantin", "tandas", "padang"]],
        ["Kita membeli makanan di ___ pada waktu rehat.", "We buy food at the ___ during recess.", ["kantin", "perpustakaan", "pejabat", "padang"]],
        ["Guru berkata, “Salin ayat ini.” Apakah yang perlu dibuat?", "The teacher says 'Salin ayat ini.' What should you do?", ["Tulis semula ayat itu", "Baca ayat itu", "Padam ayat itu", "Lukis gambar"]],
        ["Ibu memasak di ___.", "Mother cooks in the ___.", ["dapur", "bilik tidur", "ruang tamu", "tangga"]],
        ["Kita memadam tulisan pensel dengan ___.", "We rub out pencil writing with an ___.", ["pemadam", "pembaris", "sudu", "bantal"]]
      ]
    },
    {
      id: "kosa3", t: "Kosa Kata: Masa & Harian", en: "Vocabulary: time, days & everyday words", icon: "🗓️",
      notes: [
        ["Dalam seminggu ada tujuh hari.", "There are seven days in a week.", "📅"],
        ["Semalam = hari sebelum hari ini. Esok = hari selepas hari ini.", "Semalam = yesterday. Esok = tomorrow.", "⏰"]
      ],
      order: [
        ["Susun hari dalam seminggu, bermula hari Isnin.", "Arrange the days of the week, starting with Monday.", ["Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu", "Ahad"]],
        ["Susun waktu dalam sehari.", "Arrange the times of the day.", ["Pagi", "Tengah hari", "Petang", "Malam"]]
      ],
      pairs: [
        { title: "Masa", ask: "Apakah maksud perkataan ini?", en: "What does this word mean?", items: [
          ["hari ini", "today"], ["semalam", "yesterday"], ["esok", "tomorrow"], ["pagi", "morning"], ["petang", "afternoon / evening"], ["malam", "night"],
          ["minggu", "week"], ["bulan", "month"], ["tahun", "year"], ["sekarang", "now"], ["selalu", "always"], ["kadang-kadang", "sometimes"]
        ] },
        { title: "Kata harian", ask: "Apakah maksud perkataan ini?", en: "What does this word mean?", items: [
          ["sebelum", "before"], ["selepas", "after"], ["kerana", "because"], ["tetapi", "but"], ["sangat", "very"], ["banyak", "many / a lot"], ["sedikit", "a little"],
          ["semua", "all"], ["cuaca", "weather"], ["hujan", "rain"], ["lapar", "hungry"], ["dahaga", "thirsty"], ["penat", "tired"], ["sakit", "sick / pain"]
        ] }
      ],
      q: [
        ["Hari ini hari Selasa. Esok hari ___.", "Today is Tuesday. Tomorrow is ___.", ["Rabu", "Isnin", "Khamis", "Ahad"]],
        ["Hari ini hari Jumaat. Semalam hari ___.", "Today is Friday. Yesterday was ___.", ["Khamis", "Sabtu", "Rabu", "Ahad"]],
        ["Saya belum makan. Saya berasa ___.", "I have not eaten. I feel ___.", ["lapar", "dahaga", "kenyang", "sejuk"]],
        ["Adik berlari jauh. Sekarang adik ___.", "Little brother ran far. Now he is ___.", ["penat", "lapar", "basah", "tinggi"]],
        ["Kita bersarapan pada waktu ___.", "We eat breakfast in the ___.", ["pagi", "petang", "malam", "tengah malam"]]
      ]
    },
    {
      id: "knama", t: "Kata Nama Am & Khas", en: "Common nouns & proper nouns", icon: "🏷️",
      notes: [
        ["Kata nama am ialah nama umum bagi orang, haiwan, benda dan tempat. Contoh: guru, kucing, buku, sekolah.", "A common noun is a general name for people, animals, things and places.", "📦"],
        ["Kata nama khas ialah nama khusus. Huruf pertamanya mesti huruf besar. Contoh: Cikgu Aminah, Si Comel, Kuala Lumpur.", "A proper noun is a specific name. Its first letter must be a capital letter.", "🔠"]
      ],
      sort: { title: "Kata nama am dan khas", ask: "Kata nama am atau kata nama khas?", en: "Common noun or proper noun?", cats: ["Kata nama am", "Kata nama khas"], items: [
        ["guru", 0], ["kucing", 0], ["sekolah", 0], ["negeri", 0], ["sungai", 0], ["kereta", 0], ["doktor", 0], ["bandar", 0],
        ["Cikgu Aminah", 1], ["Si Comel", 1], ["Kuala Lumpur", 1], ["Sungai Pahang", 1], ["Proton Saga", 1], ["Malaysia", 1], ["Encik Tan", 1], ["Gunung Kinabalu", 1]
      ] },
      q: [
        ["Yang manakah kata nama khas?", "Which one is a proper noun?", ["Melaka", "bandar", "negeri", "kampung"]],
        ["Yang manakah kata nama am?", "Which one is a common noun?", ["pensel", "Ali", "Johor", "Sang Kancil"]],
        ["Kata nama khas mesti bermula dengan...", "A proper noun must begin with...", ["huruf besar", "huruf kecil", "nombor", "tanda soal"]],
        ["Ejaan manakah yang betul?", "Which spelling is correct?", ["Saya tinggal di Ipoh.", "Saya tinggal di ipoh.", "saya tinggal di ipoh.", "Saya Tinggal Di Ipoh."]],
        ["“Kucing saya bernama Tompok.” Kata nama khas ialah...", "'My cat is named Tompok.' The proper noun is...", ["Tompok", "kucing", "saya", "bernama"]],
        ["Yang manakah nama tempat?", "Which one is a name of a place?", ["pasar", "nelayan", "arnab", "kerusi"]],
        ["Yang manakah nama haiwan?", "Which one is an animal?", ["rusa", "petani", "almari", "pejabat"]]
      ]
    },
    {
      id: "kganti", t: "Kata Ganti Nama", en: "Pronouns", icon: "🫵",
      notes: [
        ["Saya / aku – untuk diri sendiri.", "Saya / aku – for yourself (I).", "🙋"],
        ["Awak / kamu – untuk orang yang kita bercakap dengannya.", "Awak / kamu – for the person you are talking to (you).", "👉"],
        ["Dia – untuk seorang yang lain. Mereka – untuk ramai orang.", "Dia – he or she. Mereka – they.", "👥"],
        ["Kami – saya dan kawan saya (tidak termasuk kamu). Kita – saya dan kamu semua.", "Kami – we (not including you). Kita – we (including you).", "🤝"],
        ["Beliau – untuk orang yang dihormati seperti guru besar.", "Beliau – for a respected person such as the headmaster.", "🎓"]
      ],
      pairs: { title: "Kata ganti nama", ask: "Apakah maksud kata ganti nama ini?", en: "What does this pronoun mean?", items: [
        ["saya", "I (sopan)"], ["awak", "you"], ["dia", "he / she"], ["mereka", "they"], ["kami", "we (bukan kamu)"], ["kita", "we (semua)"], ["beliau", "he / she (dihormati)"]
      ] },
      q: [
        ["Nama ___ ialah Imran. Saya berumur lapan tahun.", "___ name is Imran. (talking about yourself)", ["saya", "dia", "mereka", "beliau"]],
        ["Itu Siti. ___ kawan baik saya.", "That is Siti. ___ is my best friend. (one other person)", ["Dia", "Kami", "Mereka", "Kita"]],
        ["Ali dan Abu bermain bola. ___ sangat gembira.", "Ali and Abu play football. ___ are very happy. (more than one person)", ["Mereka", "Dia", "Saya", "Beliau"]],
        ["“Mari ___ pergi ke kantin bersama-sama,” kata Mei kepada Ana.", "'Let ___ go to the canteen together,' said Mei to Ana. (Ana is included)", ["kita", "kami", "mereka", "dia"], "Kita = saya dan kamu."],
        ["“Cikgu, bolehkah ___ pergi ke tandas?” tanya Ali dan Raju.", "'Teacher, may ___ go to the toilet?' asked Ali and Raju. (the teacher is not included)", ["kami", "kita", "mereka", "beliau"], "Kami = tidak termasuk cikgu."],
        ["Guru Besar sedang berucap. ___ menasihati murid-murid.", "The headmaster is speaking. ___ advises the pupils. (a respected person)", ["Beliau", "Dia orang", "Kami", "Awak"]],
        ["“Siapakah nama ___?” tanya saya kepada murid baharu itu.", "'What is ___ name?' I asked the new pupil. (the person you are talking to)", ["awak", "saya", "mereka", "kami"]]
      ]
    },
    {
      id: "penjodoh", t: "Penjodoh Bilangan", en: "Classifiers (counting words)", icon: "🔢",
      notes: [
        ["Penjodoh bilangan digunakan apabila mengira. Contoh: seekor kucing, dua orang murid.", "Classifiers are used when counting. Example: seekor kucing (a cat).", "🐈"],
        ["Orang – manusia. Ekor – haiwan.", "Orang – people. Ekor – animals.", "🧑"],
        ["Buah – benda besar: rumah, kereta, meja, buku.", "Buah – big things: house, car, table, book.", "🏠"],
        ["Batang – benda panjang: pensel, pokok, sungai. Helai – benda nipis: kertas, baju.", "Batang – long things. Helai – thin things: paper, shirt.", "✏️"],
        ["Biji – benda kecil dan bulat: telur, guli, bola. Keping – benda leper: roti, biskut, gambar.", "Biji – small round things. Keping – flat things: bread, biscuit, photo.", "🥚"]
      ],
      sort: [
        { title: "Orang, ekor, buah, batang", ask: "Pilih penjodoh bilangan yang betul.", en: "Choose the correct classifier.", cats: ["orang", "ekor", "buah", "batang"], items: [
          ["guru", 0], ["murid", 0], ["doktor", 0], ["polis", 0], ["kucing", 1], ["ayam", 1], ["ikan", 1], ["semut", 1],
          ["rumah", 2], ["kereta", 2], ["meja", 2], ["buku", 2], ["pensel", 3], ["pokok", 3], ["sungai", 3], ["pembaris", 3]
        ] },
        { title: "Helai, biji, keping, kuntum", ask: "Pilih penjodoh bilangan yang betul.", en: "Choose the correct classifier.", cats: ["helai", "biji", "keping", "kuntum"], items: [
          ["kertas", 0], ["baju", 0], ["daun", 0], ["tuala", 0], ["telur", 1], ["guli", 1], ["bola", 1], ["epal", 1],
          ["roti", 2], ["biskut", 2], ["gambar", 2], ["papan", 2], ["bunga", 3]
        ] }
      ],
      q: [
        ["Ibu membeli se___ ikan di pasar.", "Mother bought a fish at the market. (counting an animal)", ["ekor", "orang", "buah", "helai"]],
        ["Tiga ___ murid sedang membaca.", "Three pupils are reading. (counting people)", ["orang", "ekor", "batang", "biji"]],
        ["Ayah membeli se___ kereta baharu.", "Father bought a new car.", ["buah", "ekor", "helai", "kuntum"]],
        ["Saya ada dua ___ pensel.", "I have two pencils.", ["batang", "biji", "keping", "orang"]],
        ["Kakak memakai se___ baju kurung.", "Sister wears a baju kurung.", ["helai", "buah", "batang", "ekor"]],
        ["Adik makan dua ___ roti.", "Little brother ate two slices of bread.", ["keping", "ekor", "batang", "orang"]],
        ["Ibu memetik se___ bunga ros.", "Mother picked a rose.", ["kuntum", "ekor", "buah", "orang"]],
        ["Saya membeli se___ kasut.", "I bought a pair of shoes.", ["pasang", "ekor", "helai", "batang"], "Pasang – untuk benda yang berdua: kasut, stoking."]
      ]
    },
    {
      id: "kkerja", t: "Kata Kerja", en: "Verbs (action words)", icon: "🏃",
      notes: [
        ["Kata kerja ialah perkataan yang menunjukkan perbuatan. Contoh: makan, berlari, menulis.", "A verb is a word that shows an action. Example: eat, run, write.", "✍️"],
        ["Contoh ayat: Adik minum susu. Kata kerja = minum.", "Example: Little brother drinks milk. The verb = minum.", "🥛"]
      ],
      pairs: [
        { title: "Perbuatan", ask: "Apakah perbuatan ini?", en: "What action is this?", items: [
          ["🏃", "berlari"], ["📖", "membaca"], ["✍️", "menulis"], ["🍽️", "makan"], ["🥤", "minum"], ["😴", "tidur"], ["🏊", "berenang"], ["🧹", "menyapu"],
          ["🎤", "menyanyi"], ["🚶", "berjalan"], ["🚿", "mandi"], ["🎨", "melukis"], ["🍳", "memasak"], ["🚴", "berbasikal"]
        ] },
        { title: "Maksud kata kerja", ask: "Apakah maksud kata kerja ini?", en: "What does this verb mean?", items: [
          ["membeli", "to buy"], ["menjual", "to sell"], ["membawa", "to bring / carry"], ["mengambil", "to take"], ["memberi", "to give"], ["menolong", "to help"],
          ["mencari", "to look for"], ["menunggu", "to wait"], ["bermain", "to play"], ["belajar", "to learn / study"], ["bercakap", "to talk"], ["mendengar", "to listen"], ["melihat", "to see"], ["membasuh", "to wash"]
        ] }
      ],
      q: [
        ["“Kakak menyiram pokok bunga.” Kata kerja ialah...", "'Sister waters the flower plant.' The verb is...", ["menyiram", "kakak", "pokok", "bunga"]],
        ["“Ayah membaca surat khabar.” Kata kerja ialah...", "'Father reads the newspaper.' The verb is...", ["membaca", "ayah", "surat", "khabar"]],
        ["Yang manakah kata kerja?", "Which one is a verb?", ["melompat", "cantik", "meja", "merah"]],
        ["Ibu ___ nasi goreng di dapur.", "Mother ___ fried rice in the kitchen.", ["memasak", "membaca", "menyapu", "menyanyi"]],
        ["Adik ___ sampah ke dalam tong sampah.", "Little brother ___ rubbish into the bin.", ["membuang", "meminum", "menulis", "menjahit"]],
        ["Murid-murid ___ buku di perpustakaan.", "The pupils ___ books in the library.", ["membaca", "memandu", "memasak", "menendang"]],
        ["Abang ___ bola ke dalam gol.", "Brother ___ the ball into the goal.", ["menendang", "menggosok", "menyikat", "menjemur"]]
      ]
    },
    {
      id: "kadj", t: "Kata Adjektif & Antonim", en: "Adjectives & opposites", icon: "🎨",
      notes: [
        ["Kata adjektif menerangkan sifat sesuatu. Contoh: bunga itu cantik, gajah itu besar.", "An adjective describes something. Example: the flower is pretty, the elephant is big.", "🌸"],
        ["Ada adjektif warna (merah), ukuran (panjang), bentuk (bulat), perasaan (gembira) dan sifat (rajin).", "There are adjectives of colour, size, shape, feeling and character.", "🌈"],
        ["Antonim ialah kata berlawan. Contoh: besar ↔ kecil.", "An antonym is an opposite word. Example: big ↔ small.", "↔️"]
      ],
      pairs: [
        { title: "Antonim (kata berlawan)", ask: "Apakah kata berlawan bagi perkataan ini?", en: "What is the opposite of this word?", items: [
          ["besar", "kecil"], ["tinggi", "rendah"], ["panjang", "pendek"], ["panas", "sejuk"], ["cepat", "lambat"], ["bersih", "kotor"], ["rajin", "malas"],
          ["gembira", "sedih"], ["berat", "ringan"], ["tebal", "nipis"], ["terang", "gelap"], ["kaya", "miskin"], ["tua", "muda"], ["basah", "kering"], ["penuh", "kosong"], ["jauh", "dekat"]
        ] },
        { title: "Maksud kata adjektif", ask: "Apakah maksud perkataan ini?", en: "What does this word mean?", items: [
          ["cantik", "beautiful"], ["rajin", "hardworking"], ["malas", "lazy"], ["pandai", "clever"], ["berani", "brave"], ["takut", "afraid"], ["marah", "angry"],
          ["sedap", "delicious"], ["manis", "sweet"], ["masam", "sour"], ["pahit", "bitter"], ["masin", "salty"], ["bulat", "round"], ["lembut", "soft"], ["keras", "hard"]
        ] }
      ],
      sort: { title: "Jenis kata adjektif", ask: "Apakah jenis kata adjektif ini?", en: "What type of adjective is this?", cats: ["Warna", "Ukuran / bentuk", "Perasaan"], items: [
        ["merah", 0], ["biru", 0], ["hijau", 0], ["kuning", 0], ["panjang", 1], ["pendek", 1], ["bulat", 1], ["besar", 1], ["gembira", 2], ["sedih", 2], ["marah", 2], ["takut", 2]
      ] },
      q: [
        ["“Baju Aina sangat cantik.” Kata adjektif ialah...", "'Aina's dress is very pretty.' The adjective is...", ["cantik", "baju", "Aina", "sangat"]],
        ["Gajah ialah haiwan yang ___.", "An elephant is a ___ animal.", ["besar", "kecil", "nipis", "masam"]],
        ["Limau itu rasanya ___.", "That lime tastes ___.", ["masam", "tinggi", "bulat", "rajin"]],
        ["Ais itu sangat ___.", "The ice is very ___.", ["sejuk", "panas", "pahit", "kering"]],
        ["Ali ___ kerana mendapat hadiah.", "Ali is ___ because he got a present.", ["gembira", "sedih", "marah", "takut"]],
        ["Murid yang ___ selalu membuat kerja rumah.", "A ___ pupil always does homework.", ["rajin", "malas", "nakal", "lambat"]]
      ]
    },
    {
      id: "sinonim", t: "Sinonim", en: "Synonyms (same meaning)", icon: "🟰",
      notes: [
        ["Sinonim ialah perkataan yang sama maksud. Contoh: cantik = indah.", "A synonym is a word with the same meaning. Example: cantik = indah.", "🟰"]
      ],
      pairs: { title: "Sinonim (kata seerti)", ask: "Apakah kata seerti bagi perkataan ini?", en: "Which word has the same meaning?", items: [
        ["cantik", "indah"], ["pandai", "bijak"], ["gembira", "riang"], ["sedih", "pilu"], ["cepat", "pantas"], ["kawan", "sahabat"], ["rumah", "kediaman"],
        ["bapa", "ayah"], ["ibu", "emak"], ["suka", "gemar"], ["guru", "cikgu"], ["sejuk", "dingin"],["bising", "riuh"], ["letih", "penat"], ["hadiah", "ganjaran"]
      ] },
      q: [
        ["Kata seerti bagi “sahabat” ialah...", "The synonym of 'sahabat' is...", ["kawan", "musuh", "jiran", "adik"]],
        ["“Pemandangan di pantai itu sangat indah.” Indah bermaksud...", "'The view at the beach is very indah.' Indah means...", ["cantik", "kotor", "jauh", "panas"]],
        ["Kata seerti bagi “pantas” ialah...", "The synonym of 'pantas' is...", ["cepat", "lambat", "tinggi", "kuat"]],
        ["“Saya gemar makan buah.” Gemar bermaksud...", "'I gemar eating fruit.' Gemar means...", ["suka", "benci", "takut", "lupa"]],
        ["Kata seerti bagi “letih” ialah...", "The synonym of 'letih' is...", ["penat", "segar", "lapar", "rajin"]]
      ]
    },
    {
      id: "khubung", t: "Kata Hubung & Kata Sendi Nama", en: "Conjunctions & prepositions", icon: "🔗",
      notes: [
        ["Kata hubung menyambungkan dua ayat atau perkataan: dan, atau, tetapi, kerana, lalu, sambil.", "Conjunctions join two sentences or words: and, or, but, because, then, while.", "🔗"],
        ["Di – untuk tempat (di sekolah). Ke – untuk arah tempat (ke sekolah).", "Di – at a place. Ke – to a place.", "📍"],
        ["Dari – untuk tempat dan masa (dari Ipoh, dari pagi). Daripada – untuk orang dan sumber (daripada ibu).", "Dari – from a place or time. Daripada – from a person or source.", "📨"],
        ["Kepada – untuk orang (kepada guru). Pada – untuk masa (pada hari Isnin).", "Kepada – to a person. Pada – on/at a time.", "🕒"]
      ],
      pairs: { title: "Maksud kata hubung", ask: "Apakah maksud kata ini?", en: "What does this word mean?", items: [
        ["dan", "and"], ["atau", "or"], ["tetapi", "but"], ["kerana", "because"], ["lalu", "then"], ["sambil", "while (doing)"], ["dengan", "with"], ["untuk", "for"]
      ] },
      q: [
        ["Ali ___ Abu pergi ke sekolah.", "Ali ___ Abu go to school.", ["dan", "tetapi", "kerana", "lalu"]],
        ["Kamu mahu teh ___ kopi?", "Do you want tea ___ coffee?", ["atau", "dan", "kerana", "sambil"]],
        ["Adik menangis ___ terjatuh.", "Little sister cries ___ she fell.", ["kerana", "atau", "tetapi", "dan"]],
        ["Rumah itu kecil ___ cantik.", "The house is small ___ pretty.", ["tetapi", "kerana", "atau", "lalu"]],
        ["Ayah minum kopi ___ membaca surat khabar.", "Father drinks coffee ___ reading the newspaper.", ["sambil", "atau", "tetapi", "kerana"]],
        ["Ibu pergi ___ pasar.", "Mother goes ___ the market.", ["ke", "di", "dari", "pada"], "Ke – menunjukkan arah tempat."],
        ["Saya belajar ___ sekolah.", "I study ___ school.", ["di", "ke", "kepada", "daripada"], "Di – menunjukkan tempat."],
        ["Surat itu ___ nenek.", "The letter is ___ grandmother.", ["daripada", "dari", "di", "ke"], "Daripada – untuk orang."],
        ["Bas itu datang ___ Melaka.", "The bus comes ___ Melaka.", ["dari", "daripada", "kepada", "pada"], "Dari – untuk tempat."],
        ["Saya memberi hadiah ___ ibu.", "I give a present ___ mother.", ["kepada", "ke", "di", "dari"], "Kepada – untuk orang."],
        ["Kami bercuti ___ hari Sabtu.", "We go on holiday ___ Saturday.", ["pada", "di", "ke", "kepada"], "Pada – untuk masa."]
      ]
    },
    {
      id: "ktanya", t: "Kata Tanya, Seru & Perintah", en: "Question words, exclamations & commands", icon: "❓",
      notes: [
        ["Kata tanya digunakan untuk bertanya. Ayat tanya berakhir dengan tanda soal (?).", "Question words are used to ask. A question ends with a question mark (?).", "❓"],
        ["Kata seru menunjukkan perasaan. Ayat seruan berakhir dengan tanda seru (!). Contoh: Wah, cantiknya!", "Exclamations show feelings and end with (!). Example: Wow, how pretty!", "❗"],
        ["Kata perintah: sila (mempersilakan), tolong (minta bantuan), jangan (melarang), jemput (menjemput).", "Command words: sila (please), tolong (help me), jangan (don't), jemput (invite).", "☝️"]
      ],
      pairs: [
        { title: "Kata tanya", ask: "Kata tanya ini bertanya tentang apa?", en: "What does this question word ask about?", items: [
          ["Siapa", "Orang"], ["Apa", "Benda atau haiwan"], ["Bila", "Masa"], ["Di mana", "Tempat"], ["Berapa", "Bilangan"], ["Mengapa", "Sebab"], ["Bagaimana", "Cara atau keadaan"]
        ] },
        { title: "Kata seru", ask: "Kata seru ini menunjukkan perasaan apa?", en: "What feeling does this exclamation show?", items: [
          ["Wah", "Kagum"], ["Aduh", "Sakit"], ["Eh", "Hairan / terkejut"], ["Cis", "Marah / benci"], ["Syabas", "Memuji"], ["Amboi", "Hairan / menyindir"]
        ] }
      ],
      q: [
        ["___ nama kamu?", "___ is your name?", ["Siapakah", "Bilakah", "Berapakah", "Di manakah"]],
        ["___ kamu tinggal?", "___ do you live?", ["Di manakah", "Siapakah", "Berapakah", "Apakah"]],
        ["___ harga buku ini?", "___ is the price of this book?", ["Berapakah", "Siapakah", "Bilakah", "Mengapakah"]],
        ["___ kamu lewat ke sekolah?", "___ are you late to school?", ["Mengapakah", "Siapakah", "Berapakah", "Apakah"]],
        ["___ kamu akan pulang ke kampung?", "___ will you go back to the village?", ["Bilakah", "Siapakah", "Apakah", "Berapakah"]],
        ["“___, sakitnya kaki saya!”", "'___, my leg hurts!'", ["Aduh", "Wah", "Syabas", "Amboi"]],
        ["“___, cantiknya lukisan kamu!”", "'___, how pretty your drawing is!'", ["Wah", "Aduh", "Cis", "Eh"]],
        ["“___ buang sampah di sini.” (melarang)", "'___ throw rubbish here.' (forbidding)", ["Jangan", "Sila", "Jemput", "Tolong"]],
        ["“___ angkat kotak ini, Ali.” (minta bantuan)", "'___ lift this box, Ali.' (asking for help)", ["Tolong", "Jangan", "Usah", "Wah"]],
        ["“___ masuk, cikgu.” (mempersilakan)", "'___ come in, teacher.' (inviting politely)", ["Sila", "Jangan", "Aduh", "Usah"]],
        ["Ayat tanya berakhir dengan tanda...", "A question ends with a...", ["soal (?)", "noktah (.)", "seru (!)", "koma (,)"]]
      ]
    },
    {
      id: "imbuhan", t: "Imbuhan", en: "Prefixes & suffixes", icon: "🧩",
      notes: [
        ["Imbuhan ditambah pada kata dasar untuk membentuk perkataan baharu.", "An affix is added to a root word to form a new word.", "➕"],
        ["Imbuhan awalan di depan: ber- (berlari), me- (melukis), mem- (membaca), men- (menulis), meng- (mengambil), ter- (terjatuh), di- (dimakan).", "Prefixes go in front: ber-, me-, mem-, men-, meng-, ter-, di-.", "⬅️"],
        ["Imbuhan akhiran di belakang: -an (makanan), -kan (ambilkan), -i (sayangi).", "Suffixes go at the back: -an, -kan, -i.", "➡️"],
        ["Ter- selalunya bermaksud tidak sengaja. Contoh: terjatuh.", "Ter- usually means by accident. Example: terjatuh (fell by accident).", "🤕"]
      ],
      pairs: { title: "Kata dasar dan kata berimbuhan", ask: "Pilih kata berimbuhan yang betul bagi kata dasar ini.", en: "Choose the correct affixed word for this root word.", items: [
        ["baca", "membaca"], ["tulis", "menulis"], ["sapu", "menyapu"], ["lari", "berlari"], ["jatuh", "terjatuh"], ["masak", "memasak"], ["cuci", "mencuci"],
        ["gosok", "menggosok"], ["ambil", "mengambil"], ["lukis", "melukis"], ["main", "bermain"], ["jalan", "berjalan"], ["beli", "membeli"], ["tolong", "menolong"]
      ] },
      sort: { title: "Awalan atau akhiran", ask: "Perkataan ini ada imbuhan awalan atau akhiran?", en: "Does this word have a prefix or a suffix?", cats: ["Awalan (di depan)", "Akhiran (di belakang)"], items: [
        ["berlari", 0], ["membaca", 0], ["terjatuh", 0], ["dimakan", 0], ["menulis", 0], ["bermain", 0],
        ["makanan", 1], ["minuman", 1], ["pakaian", 1], ["mainan", 1], ["lukisan", 1], ["tulisan", 1]
      ] },
      q: [
        ["Adik ___ bola di padang. (main)", "Little brother plays ball in the field.", ["bermain", "memain", "termain", "mainan"]],
        ["Kakak sedang ___ surat. (tulis)", "Sister is writing a letter.", ["menulis", "bertulis", "tulisan", "menuliskan"]],
        ["Ibu membeli ___ di pasar. (makan)", "Mother buys food at the market.", ["makanan", "memakan", "termakan", "dimakan"]],
        ["Ali ___ ketika berlari. (jatuh)", "Ali fell while running.", ["terjatuh", "menjatuh", "berjatuh", "jatuhan"]],
        ["Kuih itu ___ oleh adik. (makan)", "The cake was eaten by little brother.", ["dimakan", "memakan", "makanan", "bermakan"]],
        ["Ayah ___ kereta setiap hari Ahad. (cuci)", "Father washes the car every Sunday.", ["mencuci", "bercuci", "cucian", "tercuci"]],
        ["Air sirap ialah sejenis ___. (minum)", "Syrup is a kind of drink.", ["minuman", "meminum", "terminum", "diminum"]],
        ["Kata dasar bagi “membaca” ialah...", "The root word of 'membaca' is...", ["baca", "mem", "bacaan", "embaca"]]
      ]
    },
    {
      id: "kganda", t: "Kata Ganda & Kata Majmuk", en: "Reduplicated words & compound words", icon: "👯",
      notes: [
        ["Kata ganda ialah perkataan yang diulang dan ditulis dengan tanda sempang (-). Contoh: buku-buku, kanak-kanak.", "A reduplicated word is repeated and written with a hyphen. Example: buku-buku (books).", "📚"],
        ["Kata ganda selalunya bermaksud banyak. Contoh: murid-murid = ramai murid.", "It usually means many. Example: murid-murid = many pupils.", "👧👦"],
        ["Kata majmuk ialah dua perkataan yang digabung dan membawa satu maksud. Contoh: kapal terbang, guru besar.", "A compound word is two words joined to give one meaning. Example: kapal terbang (aeroplane).", "✈️"]
      ],
      sort: { title: "Kata ganda dan kata majmuk", ask: "Kata ganda atau kata majmuk?", en: "Reduplicated word or compound word?", cats: ["Kata ganda", "Kata majmuk"], items: [
        ["buku-buku", 0], ["rama-rama", 0], ["kanak-kanak", 0], ["kura-kura", 0], ["murid-murid", 0], ["sayur-sayuran", 0], ["buah-buahan", 0],
        ["kapal terbang", 1], ["guru besar", 1], ["air mata", 1], ["jalan raya", 1], ["meja makan", 1], ["kereta api", 1], ["bola sepak", 1], ["sapu tangan", 1]
      ] },
      pairs: { title: "Maksud kata majmuk", ask: "Apakah maksud kata majmuk ini?", en: "What does this compound word mean?", items: [
        ["kapal terbang", "aeroplane"], ["guru besar", "headmaster"], ["air mata", "tears"], ["jalan raya", "road"], ["kereta api", "train"], ["bola sepak", "football"],
        ["sapu tangan", "handkerchief"], ["rumah sakit", "hospital"], ["mata air", "spring (water)"], ["kerja rumah", "homework"], ["tengah hari", "noon"], ["hari jadi", "birthday"]
      ] },
      q: [
        ["Ramai ___ sedang bermain di taman.", "Many children are playing in the park.", ["kanak-kanak", "kanak kanak", "kanakkanak", "kanak"]],
        ["Ejaan kata ganda yang betul ialah...", "The correct spelling of the reduplicated word is...", ["pokok-pokok", "pokok pokok", "pokok2", "pokokpokok"]],
        ["Kami menaiki ___ ke Sabah.", "We took an ___ to Sabah.", ["kapal terbang", "kapal-kapal", "terbang kapal", "kapalterbang"]],
        ["“Murid-murid” bermaksud...", "'Murid-murid' means...", ["ramai murid", "seorang murid", "tiada murid", "murid kecil"]],
        ["Ibu membeli ___ seperti betik, pisang dan mangga.", "Mother buys ___ such as papaya, banana and mango.", ["buah-buahan", "sayur-sayuran", "kuih-muih", "bunga-bungaan"]],
        ["Yang manakah kata majmuk?", "Which one is a compound word?", ["jalan raya", "jalan-jalan", "berjalan", "jalanan"]]
      ]
    },
    {
      id: "simpulan", t: "Simpulan Bahasa", en: "Idioms", icon: "💬",
      notes: [
        ["Simpulan bahasa ialah ungkapan pendek yang membawa maksud lain daripada perkataannya.", "An idiom is a short phrase whose meaning is different from its words.", "💭"],
        ["Contoh: “ringan tulang” bukan tulang yang ringan, tetapi bermaksud rajin.", "Example: 'ringan tulang' (light bones) actually means hardworking.", "💪"]
      ],
      pairs: { title: "Simpulan bahasa dan maksudnya", ask: "Apakah maksud simpulan bahasa ini?", en: "What does this idiom mean?", items: [
        ["ringan tulang", "rajin"], ["berat tulang", "malas"], ["panjang tangan", "suka mencuri"], ["anak emas", "anak yang paling disayangi"], ["buah tangan", "hadiah untuk dibawa"],
        ["besar kepala", "degil / sombong"], ["kaki bangku", "tidak pandai bermain bola"], ["mulut murai", "suka bercakap banyak"], ["cakar ayam", "tulisan yang buruk"],
        ["hati emas", "sangat baik hati"], ["otak udang", "bodoh"], ["ulat buku", "suka membaca"], ["bulan madu", "bercuti selepas berkahwin"], ["kaki ayam", "tidak memakai kasut"]
      ] },
      q: [
        ["Aminah selalu menolong ibunya. Dia seorang yang ___.", "Aminah always helps her mother. She is ___.", ["ringan tulang", "berat tulang", "panjang tangan", "besar kepala"]],
        ["Tulisan Abu sukar dibaca seperti ___.", "Abu's handwriting is hard to read, like ___.", ["cakar ayam", "kaki bangku", "anak emas", "buah tangan"]],
        ["Kami membawa ___ semasa melawat nenek.", "We brought ___ when visiting grandmother.", ["buah tangan", "kaki ayam", "mulut murai", "otak udang"]],
        ["Siti suka membaca. Dia digelar ___.", "Siti loves reading. She is called a ___.", ["ulat buku", "kaki bangku", "cakar ayam", "besar kepala"]],
        ["Adik berjalan ___ di atas pasir.", "Little brother walks ___ on the sand.", ["berkaki ayam", "berkaki bangku", "bermulut murai", "berhati emas"]],
        ["Budak yang ___ tidak mahu mendengar nasihat.", "A ___ child does not listen to advice.", ["besar kepala", "ringan tulang", "hati emas", "ulat buku"]]
      ]
    },
    {
      id: "ayat", t: "Bina Ayat & Tanda Baca", en: "Building sentences & punctuation", icon: "✏️",
      notes: [
        ["Ayat bermula dengan huruf besar dan berakhir dengan noktah (.).", "A sentence starts with a capital letter and ends with a full stop.", "🔠"],
        ["Ayat mudah: Siapa + buat apa + apa/di mana. Contoh: Adik + minum + susu.", "Simple sentence: Who + does what + what/where. Example: Adik minum susu.", "🧱"],
        ["Ayat penyata memberitahu sesuatu (.). Ayat tanya bertanya (?). Ayat seruan menunjukkan perasaan (!). Ayat perintah menyuruh atau melarang.", "Statements tell (.). Questions ask (?). Exclamations show feeling (!). Commands tell someone to do something.", "📝"],
        ["Tanda koma (,) digunakan untuk mengasingkan senarai. Contoh: Saya suka epal, oren dan pisang.", "A comma separates items in a list.", "✒️"]
      ],
      order: [
        ["Susun perkataan menjadi ayat.", "Little brother drinks milk.", ["Adik", "minum", "susu."], "ayat"],
        ["Susun perkataan menjadi ayat.", "Mother cooks rice in the kitchen.", ["Ibu", "memasak", "nasi", "di", "dapur."], "ayat"],
        ["Susun perkataan menjadi ayat.", "I go to school by bus.", ["Saya", "pergi", "ke", "sekolah", "dengan", "bas."], "ayat"],
        ["Susun perkataan menjadi ayat.", "Father reads the newspaper in the living room.", ["Ayah", "membaca", "surat khabar", "di", "ruang tamu."], "ayat"],
        ["Susun perkataan menjadi ayat.", "My cat is white.", ["Kucing", "saya", "berwarna", "putih."], "ayat"],
        ["Susun perkataan menjadi ayat.", "We play football in the field.", ["Kami", "bermain", "bola sepak", "di", "padang."], "ayat"],
        ["Susun perkataan menjadi ayat.", "Sister waters the flowers every morning.", ["Kakak", "menyiram", "pokok bunga", "setiap", "pagi."], "ayat"],
        ["Susun perkataan menjadi ayat.", "What is your name?", ["Siapakah", "nama", "kamu?"], "ayat"],
        ["Susun perkataan menjadi ayat.", "Ali is clever because he studies hard.", ["Ali", "pandai", "kerana", "rajin", "belajar."], "ayat"],
        ["Susun perkataan menjadi ayat.", "The teacher teaches us in the classroom.", ["Guru", "mengajar", "kami", "di", "bilik darjah."], "ayat"]
      ],
      sort: { title: "Jenis ayat", ask: "Apakah jenis ayat ini?", en: "What type of sentence is this?", cats: ["Ayat penyata", "Ayat tanya", "Ayat seruan", "Ayat perintah"], items: [
        ["Saya suka makan nasi lemak.", 0], ["Ayah bekerja di hospital.", 0], ["Hari ini hari Isnin.", 0],
        ["Siapakah nama kamu?", 1], ["Di manakah buku saya?", 1], ["Berapakah umur kamu?", 1],
        ["Wah, besarnya rumah itu!", 2], ["Aduh, sakitnya gigi saya!", 2], ["Syabas, kamu menang!", 2],
        ["Sila duduk.", 3], ["Jangan bising.", 3], ["Tolong tutup pintu itu.", 3]
      ] },
      q: [
        ["Ayat manakah yang betul?", "Which sentence is correct?", ["Saya suka makan roti.", "saya suka makan roti", "Saya suka makan roti", "saya Suka makan roti."]],
        ["Tanda baca manakah di hujung ayat ini? “Di manakah kamu tinggal”", "Which punctuation goes at the end? 'Where do you live'", ["?", ".", "!", ","]],
        ["Tanda baca manakah di hujung ayat ini? “Wah, cantiknya bunga itu”", "Which punctuation goes at the end? 'Wow, how pretty the flower is'", ["!", "?", ",", "."]],
        ["Tanda baca manakah di hujung ayat ini? “Ibu pergi ke pasar”", "Which punctuation goes at the end? 'Mother goes to the market'", [".", "?", "!", ","]],
        ["Ayat manakah yang betul susunannya?", "Which sentence has the right word order?", ["Abang menendang bola.", "Bola abang menendang.", "Menendang abang bola.", "Abang bola menendang."]],
        ["Ayat manakah yang betul susunannya?", "Which sentence has the right word order?", ["Baju itu cantik.", "Itu baju cantik sangat yang.", "Cantik itu baju.", "Baju cantik itu yang."]],
        ["Gabungkan: “Ali rajin. Ali pandai.”", "Join: 'Ali is hardworking. Ali is clever.'", ["Ali rajin dan pandai.", "Ali rajin atau pandai.", "Ali rajin tetapi pandai.", "Ali rajin kerana Ali."]],
        ["Pilih tanda baca: “Saya suka epal___ oren dan pisang.”", "Choose the punctuation: 'I like apples___ oranges and bananas.'", [",", ".", "?", "!"]]
      ]
    }
  ]
});
