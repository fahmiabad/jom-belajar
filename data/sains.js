/* SAINS TAHUN 2 – KSSR (Semakan 2017), mengikut Dokumen Penjajaran Edisi 3.
   Format:
   notes: [ayat BM, terjemahan Inggeris, emoji]
   q:     [soalan, terjemahan, [JAWAPAN BETUL DAHULU, pilihan lain...], penjelasan]
   pairs: { ask, en, items: [[kiri, kanan], ...] }            -> permainan Padankan
   sort:  { ask, en, cats: [...], items: [[benda, nomborKumpulan], ...] } -> Kelaskan
   order: [arahan, terjemahan, [urutan yang betul]]            -> Susun            */
window.SUBJECTS.push({
  id: "sains", name: "Sains", en: "Science", icon: "🔬", color: "#17A673",
  topics: [
    {
      id: "kemahiran", t: "Kemahiran Saintifik", en: "Science skills & science room rules", icon: "🔍",
      notes: [
        ["Kita memerhati dengan menggunakan lima deria.", "We observe using our five senses.", "👀"],
        ["Mengelas bermaksud mengasingkan benda mengikut ciri yang sama.", "Classifying means sorting things by the same features.", "🗂️"],
        ["Kita mengukur dengan pembaris, penimbang dan jam.", "We measure with a ruler, a scale and a clock.", "📏"],
        ["Berkomunikasi bermaksud memberitahu apa yang kita dapati – dengan bercakap, menulis atau melukis.", "Communicating means telling what we found – by speaking, writing or drawing.", "🗣️"],
        ["Di bilik sains: jangan berlari, jangan makan dan minum, ikut arahan guru.", "In the science room: do not run, do not eat or drink, follow the teacher's instructions.", "🧪"]
      ],
      pairs: { title: "Deria kita", ask: "Organ ini digunakan untuk apa?", en: "What is this organ used for?", items: [
        ["👁️ Mata", "Melihat"], ["👂 Telinga", "Mendengar"], ["👃 Hidung", "Menghidu"], ["👅 Lidah", "Merasa"], ["✋ Kulit", "Menyentuh"]
      ] },
      sort: { title: "Peraturan bilik sains", ask: "Boleh atau tidak boleh di bilik sains?", en: "Allowed or not allowed in the science room?", cats: ["✅ Boleh", "❌ Tidak boleh"], items: [
        ["Ikut arahan guru", 0], ["Basuh tangan selepas eksperimen", 0], ["Simpan alat selepas guna", 0], ["Beritahu guru jika alat pecah", 0], ["Beratur semasa masuk", 0],
        ["Berlari-lari", 1], ["Makan dan minum", 1], ["Rasa bahan tanpa kebenaran", 1], ["Bermain dengan alat", 1], ["Masuk tanpa kebenaran guru", 1]
      ] },
      q: [
        ["Alat manakah digunakan untuk mengukur panjang?", "Which tool is used to measure length?", ["Pembaris", "Jam", "Penimbang", "Kanta pembesar"]],
        ["Alat manakah digunakan untuk menimbang berat?", "Which tool is used to measure weight?", ["Penimbang", "Pembaris", "Jam", "Termometer"]],
        ["Kanta pembesar digunakan untuk...", "A magnifying glass is used to...", ["melihat benda kecil supaya nampak besar", "mengukur masa", "menimbang berat", "mendengar bunyi"]],
        ["Ali mengasingkan butang mengikut warna. Ali sedang...", "Ali separates buttons by colour. Ali is...", ["mengelas", "mengukur", "meneka", "melukis"]],
        ["Apakah yang perlu dibuat jika alat radas pecah?", "What should you do if apparatus breaks?", ["Beritahu guru", "Sembunyikan", "Kutip dengan tangan", "Lari keluar"]],
        ["Selepas eksperimen, kita mesti...", "After an experiment, we must...", ["membasuh tangan", "terus makan", "berlari keluar", "membuang alat"]]
      ]
    },
    {
      id: "manusia", t: "Manusia", en: "Humans – reproduction and growth", icon: "🧒",
      notes: [
        ["Manusia membiak dengan melahirkan anak.", "Humans reproduce by giving birth.", "👶"],
        ["Semasa membesar, saiz, tinggi dan berat badan kita bertambah.", "As we grow, our size, height and weight increase.", "📈"],
        ["Tumbesaran setiap orang berbeza. Kawan sama umur boleh berbeza tinggi.", "Everyone grows differently. Friends of the same age can have different heights.", "🧍"],
        ["Anak mewarisi ciri daripada ibu, bapa atau keturunan: warna kulit, warna mata dan jenis rambut.", "Children inherit features from their mother, father or family: skin colour, eye colour and hair type.", "👨‍👩‍👧"]
      ],
      order: [["Susun peringkat tumbesaran manusia.", "Arrange the stages of human growth.", ["Bayi", "Kanak-kanak", "Remaja", "Dewasa", "Warga tua"]]],
      sort: { title: "Ciri yang diwarisi", ask: "Adakah ciri ini diwarisi daripada ibu bapa?", en: "Is this feature inherited from parents?", cats: ["Diwarisi", "Tidak diwarisi"], items: [
        ["Warna kulit", 0], ["Warna mata", 0], ["Rambut kerinting", 0], ["Rambut lurus", 0],
        ["Parut di lutut", 1], ["Rambut dipotong pendek", 1], ["Pandai berbasikal", 1], ["Gigi rongak kerana jatuh", 1]
      ] },
      q: [
        ["Bagaimanakah manusia membiak?", "How do humans reproduce?", ["Melahirkan anak", "Bertelur", "Bercambah", "Membelah diri"]],
        ["Apakah yang bertambah apabila kita membesar?", "What increases when we grow?", ["Saiz, tinggi dan berat", "Bilangan mata", "Bilangan tangan", "Warna kulit"]],
        ["Aina dan Mei berumur 8 tahun tetapi tinggi mereka tidak sama. Mengapa?", "Aina and Mei are both 8 but not the same height. Why?", ["Tumbesaran setiap orang berbeza", "Seorang daripadanya sakit", "Mereka makan nasi", "Mereka bukan kawan"]],
        ["Yang manakah ciri yang diwarisi?", "Which one is an inherited feature?", ["Jenis rambut", "Parut luka", "Baju kegemaran", "Kuku panjang"]],
        ["Selepas peringkat bayi ialah peringkat...", "After the baby stage comes the stage of...", ["kanak-kanak", "dewasa", "remaja", "warga tua"]],
        ["Kasut tahun lepas sudah ketat. Ini menunjukkan...", "Last year's shoes are tight now. This shows...", ["saiz kaki bertambah", "kasut mengecut", "kaki sakit", "kasut basah"]],
        ["Alat manakah mengukur berat badan?", "Which tool measures body weight?", ["Penimbang", "Pita ukur", "Jam", "Pembaris"]],
        ["Mata Adam berwarna coklat seperti mata bapanya. Ini kerana...", "Adam's eyes are brown like his father's. This is because...", ["Adam mewarisi ciri bapanya", "Adam suka warna coklat", "Adam makan coklat", "Adam memakai cermin mata"]]
      ]
    },
    {
      id: "haiwan", t: "Haiwan", en: "Animals – reproduction and growth", icon: "🐣",
      notes: [
        ["Haiwan membiak dengan dua cara: bertelur atau melahirkan anak.", "Animals reproduce in two ways: laying eggs or giving birth.", "🥚"],
        ["Ada haiwan bertelur banyak (penyu, ikan, katak) dan ada yang bertelur sedikit (burung, ayam).", "Some animals lay many eggs (turtle, fish, frog) and some lay few (bird, chicken).", "🐢"],
        ["Ada haiwan melahirkan anak yang banyak (kucing, arnab) dan ada yang sedikit (lembu, gajah).", "Some animals have many babies (cat, rabbit) and some have few (cow, elephant).", "🐈"],
        ["Kitar hidup menunjukkan perubahan haiwan semasa membesar.", "A life cycle shows how an animal changes as it grows.", "🔄"],
        ["Ada anak haiwan menyerupai induknya (kucing, ayam). Ada yang tidak menyerupai induknya (rama-rama, katak).", "Some young look like their parents (cat, chicken). Some do not (butterfly, frog).", "🦋"]
      ],
      sort: [
        { title: "Cara haiwan membiak", ask: "Bagaimanakah haiwan ini membiak?", en: "How does this animal reproduce?", cats: ["🥚 Bertelur", "🍼 Melahirkan anak"], items: [
          ["Ayam", 0], ["Itik", 0], ["Penyu", 0], ["Ular", 0], ["Katak", 0], ["Ikan emas", 0], ["Rama-rama", 0], ["Burung", 0],
          ["Kucing", 1], ["Lembu", 1], ["Gajah", 1], ["Ikan paus", 1], ["Kelawar", 1], ["Arnab", 1], ["Kambing", 1]
        ] },
        { title: "Anak dan induk", ask: "Adakah anaknya menyerupai induknya?", en: "Does the young look like its parent?", cats: ["Menyerupai induk", "Tidak menyerupai induk"], items: [
          ["Kucing", 0], ["Ayam", 0], ["Lembu", 0], ["Kambing", 0], ["Gajah", 0],
          ["Rama-rama", 1], ["Katak", 1], ["Nyamuk", 1], ["Lalat", 1]
        ] }
      ],
      order: [
        ["Susun kitar hidup rama-rama.", "Arrange the butterfly life cycle.", ["Telur", "Ulat beluncas", "Kepompong (pupa)", "Rama-rama"]],
        ["Susun kitar hidup katak.", "Arrange the frog life cycle.", ["Telur", "Berudu", "Anak katak", "Katak dewasa"]],
        ["Susun kitar hidup ayam.", "Arrange the chicken life cycle.", ["Telur", "Anak ayam", "Ayam dewasa"]]
      ],
      q: [
        ["Anak katak yang baru menetas dipanggil...", "A newly hatched frog is called a...", ["berudu", "ulat", "jentik-jentik", "pupa"]],
        ["Anak rama-rama yang menetas daripada telur ialah...", "The young butterfly that hatches from an egg is a...", ["ulat beluncas", "berudu", "anak burung", "kepompong"]],
        ["Haiwan manakah bertelur banyak?", "Which animal lays many eggs?", ["Penyu", "Ayam", "Burung merpati", "Itik"]],
        ["Haiwan manakah melahirkan anak yang sedikit?", "Which animal gives birth to few young?", ["Gajah", "Kucing", "Arnab", "Tikus"]],
        ["Haiwan manakah melahirkan anak?", "Which animal gives birth?", ["Kelawar", "Burung", "Penyu", "Buaya"]],
        ["Berudu bernafas dan hidup di...", "Tadpoles live in...", ["dalam air", "atas pokok", "dalam tanah", "atas batu"]],
        ["Yang manakah TIDAK menyerupai induknya semasa kecil?", "Which one does NOT look like its parent when young?", ["Katak", "Kucing", "Lembu", "Ayam"]],
        ["Selepas peringkat kepompong, ia menjadi...", "After the pupa stage, it becomes a...", ["rama-rama", "ulat", "telur", "berudu"]]
      ]
    },
    {
      id: "tumbuhan", t: "Tumbuh-tumbuhan", en: "Plants – how plants grow", icon: "🌱",
      notes: [
        ["Biji benih memerlukan air, udara dan suhu yang sesuai untuk bercambah.", "Seeds need water, air and a suitable temperature to germinate.", "🫘"],
        ["Tumbuhan memerlukan air, udara dan cahaya matahari untuk membesar.", "Plants need water, air and sunlight to grow.", "☀️"],
        ["Apabila tumbuhan membesar, bilangan daun bertambah, batang menjadi tinggi dan besar.", "When a plant grows, it has more leaves and the stem gets taller and bigger.", "🌿"],
        ["Tumbuhan yang tidak mendapat air akan layu dan mati.", "A plant without water will wilt and die.", "🥀"]
      ],
      order: [
        ["Susun peringkat tumbesaran pokok kacang.", "Arrange how a bean plant grows.", ["Biji benih", "Akar keluar", "Pucuk keluar", "Daun bertambah", "Pokok berbunga dan berbuah"]]
      ],
      sort: { title: "Keperluan tumbuhan", ask: "Adakah tumbuhan perlukan ini untuk membesar?", en: "Does a plant need this to grow?", cats: ["✅ Perlu", "❌ Tidak perlu"], items: [
        ["Air", 0], ["Udara", 0], ["Cahaya matahari", 0],
        ["Gula-gula", 1], ["Baju", 1], ["Mainan", 1], ["Susu coklat", 1]
      ] },
      q: [
        ["Apakah yang diperlukan oleh biji benih untuk bercambah?", "What does a seed need to germinate?", ["Air, udara dan suhu yang sesuai", "Gula dan garam", "Tanah liat sahaja", "Cahaya lampu sahaja"]],
        ["Bahagian manakah keluar dahulu daripada biji benih?", "Which part comes out of the seed first?", ["Akar", "Bunga", "Buah", "Dahan"]],
        ["Pokok yang disimpan dalam almari gelap akan...", "A plant kept in a dark cupboard will...", ["layu dan pucat", "tumbuh lebih subur", "berbuah lebat", "berbunga banyak"], "Tumbuhan perlukan cahaya matahari."],
        ["Pokok yang tidak disiram akan...", "A plant that is not watered will...", ["layu", "subur", "tinggi", "berbunga"]],
        ["Apakah perubahan apabila pokok membesar?", "What changes when a plant grows?", ["Bilangan daun bertambah", "Bilangan daun berkurang", "Batang menjadi pendek", "Akar hilang"]],
        ["Biji benih di atas kapas kering tidak bercambah kerana tiada...", "Seeds on dry cotton do not germinate because there is no...", ["air", "tanah", "baja", "pasu"]],
        ["Apakah alat untuk mengukur tinggi anak pokok?", "Which tool measures the height of a seedling?", ["Pembaris", "Penimbang", "Jam", "Sudu"]]
      ]
    },
    {
      id: "cahaya", t: "Terang dan Gelap", en: "Light and dark – light sources and shadows", icon: "🔦",
      notes: [
        ["Sumber cahaya ialah benda yang mengeluarkan cahaya sendiri, seperti Matahari, lampu, lilin dan api.", "A light source is something that gives out its own light, like the Sun, a lamp, a candle and fire.", "☀️"],
        ["Kita boleh melihat dengan jelas dalam keadaan terang. Dalam gelap, kita sukar melihat.", "We can see clearly when it is bright. In the dark, it is hard to see.", "💡"],
        ["Bayang-bayang terbentuk apabila cahaya dihalang oleh objek.", "A shadow forms when light is blocked by an object.", "👤"],
        ["Objek legap seperti buku dan kayu menghasilkan bayang-bayang yang jelas.", "Opaque objects like books and wood make clear shadows.", "📕"],
        ["Objek lut sinar seperti kaca jernih membenarkan cahaya melaluinya – bayang-bayangnya tidak jelas.", "Transparent objects like clear glass let light through – the shadow is not clear.", "🪟"]
      ],
      sort: { title: "Sumber cahaya", ask: "Adakah ini sumber cahaya?", en: "Is this a light source?", cats: ["💡 Sumber cahaya", "🚫 Bukan sumber cahaya"], items: [
        ["Matahari", 0], ["Lilin yang menyala", 0], ["Lampu suluh yang menyala", 0], ["Mentol yang menyala", 0], ["Unggun api", 0], ["Kelip-kelip", 0],
        ["Cermin", 1], ["Buku", 1], ["Bulan", 1], ["Meja", 1], ["Batu", 1]
      ] },
      q: [
        ["Bagaimanakah bayang-bayang terbentuk?", "How is a shadow formed?", ["Cahaya dihalang oleh objek", "Cahaya melalui objek", "Objek mengeluarkan cahaya", "Objek dibasahkan"]],
        ["Yang manakah sumber cahaya semula jadi?", "Which is a natural light source?", ["Matahari", "Lampu suluh", "Lilin", "Mentol"]],
        ["Objek manakah menghasilkan bayang-bayang paling jelas?", "Which object makes the clearest shadow?", ["Buku", "Kaca jernih", "Plastik jernih", "Air"]],
        ["Mengapakah kita memasang lampu pada waktu malam?", "Why do we switch on the light at night?", ["Supaya dapat melihat", "Supaya panas", "Supaya senyap", "Supaya basah"]],
        ["Jika tiada cahaya, bayang-bayang...", "If there is no light, a shadow...", ["tidak terbentuk", "menjadi besar", "menjadi berwarna", "menjadi dua"]],
        ["Bulan bukan sumber cahaya kerana...", "The Moon is not a light source because...", ["Bulan tidak mengeluarkan cahaya sendiri", "Bulan terlalu jauh", "Bulan kecil", "Bulan sejuk"], "Bulan memantulkan cahaya Matahari."],
        ["Apakah yang diperlukan untuk bermain wayang kulit?", "What is needed to play shadow puppets?", ["Cahaya, patung dan skrin", "Air dan sabun", "Magnet dan paku", "Angin dan kipas"]]
      ]
    },
    {
      id: "elektrik", t: "Elektrik", en: "Electricity – electric circuits", icon: "💡",
      notes: [
        ["Litar elektrik lengkap ada sel kering, mentol, suis dan wayar penyambung.", "A complete electric circuit has a dry cell, a bulb, a switch and connecting wires.", "🔋"],
        ["Mentol menyala apabila litar lengkap dan suis ditutup (dihidupkan).", "The bulb lights up when the circuit is complete and the switch is on.", "💡"],
        ["Konduktor ialah objek yang boleh menyalakan mentol dalam litar, contohnya paku besi.", "A conductor is an object that lets the bulb light up in a circuit, for example an iron nail.", "🔩"],
        ["Penebat ialah objek yang tidak menyalakan mentol, contohnya pemadam getah.", "An insulator is an object that does not let the bulb light up, for example a rubber eraser.", "🧽"],
        ["Jangan sentuh suis dengan tangan basah. Bahaya!", "Never touch a switch with wet hands. Danger!", "⚠️"]
      ],
      pairs: { title: "Komponen litar dan fungsinya", ask: "Apakah fungsi komponen ini?", en: "What does this component do?", items: [
        ["🔋 Sel kering", "Membekalkan tenaga elektrik"], ["💡 Mentol", "Menyala dan mengeluarkan cahaya"],
        ["🔘 Suis", "Menyambung dan memutuskan litar"], ["〰️ Wayar penyambung", "Menyambungkan semua komponen"]
      ] },
      sort: { title: "Konduktor dan penebat", ask: "Konduktor atau penebat?", en: "Conductor or insulator?", cats: ["⚡ Konduktor", "🚫 Penebat"], items: [
        ["Paku besi", 0], ["Duit syiling", 0], ["Klip kertas", 0], ["Kunci", 0], ["Sudu besi", 0], ["Kerajang aluminium", 0],
        ["Pemadam getah", 1], ["Pembaris plastik", 1], ["Pensel kayu", 1], ["Kertas", 1], ["Kain", 1], ["Straw", 1]
      ] },
      q: [
        ["Komponen manakah membekalkan tenaga elektrik?", "Which component supplies electrical energy?", ["Sel kering", "Mentol", "Suis", "Wayar"]],
        ["Mentol tidak menyala. Apakah sebab yang mungkin?", "The bulb does not light up. What could be the reason?", ["Wayar tidak bersambung", "Litar lengkap", "Suis dihidupkan", "Sel kering baharu"]],
        ["Apakah yang berlaku apabila suis dimatikan?", "What happens when the switch is turned off?", ["Litar terputus dan mentol padam", "Mentol lebih terang", "Sel kering bertambah", "Wayar menjadi panjang"]],
        ["Sel kering sudah habis tenaga. Mentol akan...", "The dry cell has run out. The bulb will...", ["tidak menyala", "menyala terang", "berkelip laju", "bertukar warna"]],
        ["Objek yang boleh menyalakan mentol dalam litar dipanggil...", "An object that lets the bulb light up in a circuit is called a...", ["konduktor", "penebat", "suis", "magnet"]],
        ["Mengapakah wayar dibalut dengan plastik?", "Why are wires covered in plastic?", ["Plastik ialah penebat, supaya selamat disentuh", "Supaya cantik", "Supaya mentol lebih terang", "Supaya berat"]],
        ["Yang manakah langkah keselamatan elektrik?", "Which is an electrical safety rule?", ["Jangan sentuh suis dengan tangan basah", "Masukkan jari ke dalam soket", "Tarik wayar kuat-kuat", "Main air dekat plag"]],
        ["Berapakah komponen dalam litar: sel kering, mentol, suis dan wayar?", "How many components: dry cell, bulb, switch and wire?", ["4", "2", "3", "5"]]
      ]
    },
    {
      id: "campuran", t: "Campuran", en: "Mixtures – separating and dissolving", icon: "🧂",
      notes: [
        ["Campuran ialah beberapa bahan atau objek yang dicampurkan bersama.", "A mixture is several materials or objects mixed together.", "🥣"],
        ["Kita boleh mengasingkan campuran dengan mengutip, mengayak atau menapis, dan menggunakan magnet.", "We can separate mixtures by picking by hand, sieving or filtering, and using a magnet.", "🧲"],
        ["Magnet menarik objek besi seperti klip kertas dan paku.", "A magnet attracts iron objects like paper clips and nails.", "📎"],
        ["Gula dan garam larut di dalam air. Pasir dan batu tidak larut.", "Sugar and salt dissolve in water. Sand and stones do not.", "💧"],
        ["Bahan larut lebih cepat jika dikacau, guna air panas, atau dihancurkan menjadi kecil.", "Things dissolve faster if stirred, in hot water, or crushed into small pieces.", "🥄"]
      ],
      pairs: { title: "Cara mengasingkan campuran", ask: "Apakah cara terbaik untuk mengasingkan campuran ini?", en: "What is the best way to separate this mixture?", items: [
        ["Pasir + klip kertas", "Guna magnet"], ["Pasir + batu kecil", "Guna pengayak"], ["Guli + bola ping-pong", "Kutip dengan tangan"], ["Air + daun teh", "Guna penapis"]
      ] },
      sort: { title: "Larut atau tidak larut", ask: "Adakah bahan ini larut di dalam air?", en: "Does this dissolve in water?", cats: ["💧 Larut", "🪨 Tidak larut"], items: [
        ["Gula", 0], ["Garam", 0], ["Gula-gula", 0], ["Serbuk kopi segera", 0], ["Serbuk minuman oren", 0],
        ["Pasir", 1], ["Batu kecil", 1], ["Guli", 1], ["Habuk kayu", 1], ["Manik", 1], ["Beras", 1]
      ] },
      q: [
        ["Bagaimanakah mengasingkan paku besi daripada pasir?", "How do you separate iron nails from sand?", ["Guna magnet", "Guna air", "Tiup", "Goncang"], "Paku besi ditarik oleh magnet."],
        ["Mengapakah magnet boleh mengasingkan klip kertas daripada pasir?", "Why can a magnet separate paper clips from sand?", ["Klip kertas ditarik oleh magnet", "Pasir ditarik oleh magnet", "Klip kertas larut", "Pasir ringan"]],
        ["Bahan manakah larut di dalam air?", "Which material dissolves in water?", ["Garam", "Pasir", "Guli", "Batu"]],
        ["Bagaimanakah melarutkan gula dengan lebih cepat?", "How do you dissolve sugar faster?", ["Kacau dengan sudu", "Biarkan sahaja", "Tambah ais", "Tutup gelas"]],
        ["Gula larut lebih cepat di dalam...", "Sugar dissolves faster in...", ["air panas", "air sejuk", "air berais", "minyak"]],
        ["Gula manakah larut paling cepat?", "Which sugar dissolves fastest?", ["Gula halus", "Gula ketul besar", "Gula batu", "Gula-gula keras"], "Saiz yang kecil larut lebih cepat."],
        ["Alat manakah digunakan untuk mengasingkan tepung daripada kacang?", "Which tool separates flour from beans?", ["Pengayak", "Magnet", "Sudu", "Pembaris"]],
        ["Pasir dimasukkan ke dalam air dan dikacau. Apakah yang berlaku?", "Sand is put in water and stirred. What happens?", ["Pasir tidak larut dan mendap", "Pasir larut", "Pasir hilang", "Air menjadi manis"]]
      ]
    },
    {
      id: "air", t: "Bumi: Air", en: "Earth – water", icon: "💧",
      notes: [
        ["Sumber air semula jadi ialah hujan, sungai, tasik, laut dan mata air.", "Natural sources of water are rain, rivers, lakes, the sea and springs.", "🌧️"],
        ["Air mengalir dari tempat tinggi ke tempat rendah.", "Water flows from a high place to a low place.", "🏞️"],
        ["Air sungai mengalir dari gunung atau bukit ke laut.", "River water flows from mountains or hills to the sea.", "🌊"],
        ["Kitar air: air dipanaskan Matahari, menjadi wap air, membentuk awan, lalu turun sebagai hujan.", "Water cycle: the Sun heats water, it becomes water vapour, forms clouds, then falls as rain.", "☁️"]
      ],
      order: [
        ["Susun kitar air semula jadi.", "Arrange the natural water cycle.", ["Matahari memanaskan air laut", "Air menjadi wap air dan naik ke udara", "Wap air membentuk awan", "Hujan turun", "Air mengalir ke sungai dan laut"]],
        ["Susun aliran air dari tinggi ke rendah.", "Arrange the flow of water from high to low.", ["Gunung", "Air terjun", "Sungai", "Laut"]]
      ],
      sort: { title: "Sumber air semula jadi", ask: "Adakah ini sumber air semula jadi?", en: "Is this a natural source of water?", cats: ["🌿 Semula jadi", "🏭 Bukan semula jadi"], items: [
        ["Hujan", 0], ["Sungai", 0], ["Tasik", 0], ["Laut", 0], ["Mata air", 0],
        ["Air paip", 1], ["Air botol", 1], ["Kolam renang", 1], ["Akuarium", 1]
      ] },
      q: [
        ["Air mengalir dari...", "Water flows from...", ["tempat tinggi ke tempat rendah", "tempat rendah ke tempat tinggi", "laut ke gunung", "kiri ke kanan sahaja"]],
        ["Di manakah air sungai berakhir?", "Where does river water end up?", ["Laut", "Gunung", "Awan", "Bukit"]],
        ["Apakah yang memanaskan air di laut dan sungai?", "What heats the water in the sea and rivers?", ["Matahari", "Bulan", "Angin", "Awan"]],
        ["Wap air yang naik ke udara akan membentuk...", "Water vapour that rises will form...", ["awan", "batu", "angin", "pelangi"]],
        ["Air terjun mengalir ke arah...", "A waterfall flows...", ["bawah", "atas", "tepi sahaja", "langit"]],
        ["Yang manakah sumber air semula jadi?", "Which is a natural source of water?", ["Mata air", "Air paip", "Air botol", "Air tin"]],
        ["Apabila awan menjadi berat, apakah yang berlaku?", "When clouds get heavy, what happens?", ["Hujan turun", "Matahari terbit", "Angin berhenti", "Sungai kering"]]
      ]
    },
    {
      id: "udara", t: "Bumi: Udara", en: "Earth – air and wind", icon: "🌬️",
      notes: [
        ["Udara berada di sekeliling kita. Kita tidak nampak udara tetapi boleh merasanya.", "Air is all around us. We cannot see air but we can feel it.", "🎈"],
        ["Udara yang bergerak ialah angin.", "Moving air is wind.", "🍃"],
        ["Angin membantu kita: mengeringkan pakaian, menerbangkan layang-layang, memusingkan kincir angin.", "Wind helps us: dries clothes, flies kites, turns windmills.", "🪁"],
        ["Angin yang terlalu kuat boleh merosakkan: pokok tumbang, bumbung tercabut.", "Wind that is too strong can cause damage: fallen trees, roofs torn off.", "🌪️"],
        ["Udara terdiri daripada beberapa gas seperti oksigen dan karbon dioksida.", "Air is made of several gases such as oxygen and carbon dioxide.", "🫁"]
      ],
      sort: { title: "Kesan udara yang bergerak", ask: "Kesan angin ini baik atau buruk?", en: "Is this effect of wind good or bad?", cats: ["😊 Kesan baik", "😟 Kesan buruk"], items: [
        ["Pakaian cepat kering", 0], ["Layang-layang terbang", 0], ["Kapal layar bergerak", 0], ["Kincir angin berpusing", 0], ["Badan terasa sejuk dan nyaman", 0],
        ["Pokok tumbang", 1], ["Bumbung rumah tercabut", 1], ["Debu masuk ke mata", 1], ["Ribut merosakkan rumah", 1]
      ] },
      q: [
        ["Udara yang bergerak dipanggil...", "Moving air is called...", ["angin", "awan", "hujan", "wap"]],
        ["Di manakah udara berada?", "Where is air?", ["Di sekeliling kita", "Di dalam air sahaja", "Di langit sahaja", "Di dalam belon sahaja"]],
        ["Belon menjadi besar apabila ditiup kerana...", "A balloon gets bigger when blown because...", ["udara memenuhi belon", "belon dipanaskan", "belon basah", "belon berat"]],
        ["Gas manakah kita perlukan untuk bernafas?", "Which gas do we need to breathe?", ["Oksigen", "Karbon dioksida", "Asap", "Wap air"]],
        ["Alat manakah menggunakan udara yang bergerak?", "Which thing uses moving air?", ["Layang-layang", "Lampu suluh", "Pembaris", "Magnet"]],
        ["Bagaimanakah kita tahu ada angin?", "How do we know there is wind?", ["Daun dan bendera bergerak", "Langit berwarna biru", "Air menjadi panas", "Batu menjadi berat"]],
        ["Kipas membuatkan kita rasa sejuk kerana...", "A fan makes us feel cool because...", ["kipas menggerakkan udara", "kipas mengeluarkan air", "kipas mengeluarkan ais", "kipas menyerap cahaya"]]
      ]
    },
    {
      id: "teknologi", t: "Teknologi: Set Binaan", en: "Technology – construction sets", icon: "🧱",
      notes: [
        ["Pilih binaan yang hendak dibina daripada set binaan.", "Choose what you want to build from the construction set.", "🚗"],
        ["Kenal pasti komponen dengan melihat manual bergambar.", "Identify the parts by looking at the picture manual.", "📘"],
        ["Pasang komponen mengikut urutan dalam manual.", "Assemble the parts in the order shown in the manual.", "🔧"],
        ["Selepas bermain, buka binaan mengikut urutan dan simpan komponen dalam bekas.", "After playing, take the model apart in order and keep the parts in the container.", "📦"]
      ],
      order: [["Susun langkah membina model.", "Arrange the steps to build a model.", ["Pilih binaan", "Kenal pasti komponen", "Pasang ikut manual", "Buka binaan", "Simpan komponen dalam bekas"]]],
      q: [
        ["Apakah yang kita rujuk semasa memasang set binaan?", "What do we refer to when assembling a construction set?", ["Manual bergambar", "Buku cerita", "Jam", "Kalendar"]],
        ["Selepas selesai bermain, komponen mesti...", "After playing, the parts must be...", ["disimpan di dalam bekas", "dibiarkan di lantai", "dibuang", "disorok bawah meja"]],
        ["Mengapakah komponen perlu disimpan dengan kemas?", "Why must the parts be kept neatly?", ["Supaya tidak hilang", "Supaya berat", "Supaya basah", "Supaya rosak"]],
        ["Komponen dipasang mengikut...", "The parts are assembled following...", ["urutan dalam manual", "suka hati", "warna kegemaran", "saiz kasut"]]
      ]
    }
  ]
});
