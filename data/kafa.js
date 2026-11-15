/* KAFA – asas fardu ain peringkat Tahun 1–2 (TANPA hafazan):
   Akidah, Ibadah, Sirah, Adab, Tilawah al-Quran (kenal huruf & baris), Jawi, Bahasa Arab.
   Format sama seperti data/sains.js. Jawapan betul sentiasa yang PERTAMA dalam pilihan. */
window.SUBJECTS.push({
  id: "kafa", name: "KAFA", en: "Islamic studies (fardu ain)", icon: "🕌", color: "#8A52D9",
  topics: [
    {
      id: "rukun", t: "Akidah: Rukun Islam & Rukun Iman", en: "The pillars of Islam & pillars of faith", icon: "🕋",
      notes: [
        ["Rukun Islam ada lima perkara. Rukun Iman ada enam perkara.", "There are five pillars of Islam and six pillars of faith.", "🖐️"],
        ["Rukun Islam ialah perkara yang kita BUAT: syahadah, solat, puasa, zakat, haji.", "The pillars of Islam are things we DO: shahadah, prayer, fasting, zakat, hajj.", "🤲"],
        ["Rukun Iman ialah perkara yang kita PERCAYA di dalam hati.", "The pillars of faith are things we BELIEVE in our hearts.", "❤️"],
        ["Dua kalimah syahadah: Tiada Tuhan melainkan Allah, Nabi Muhammad pesuruh Allah.", "The shahadah: There is no god but Allah, and Prophet Muhammad is the Messenger of Allah.", "☝️"]
      ],
      order: [
        ["Susun Rukun Islam mengikut urutan.", "Arrange the five pillars of Islam in order.", ["Mengucap dua kalimah syahadah", "Solat lima waktu", "Berpuasa pada bulan Ramadan", "Menunaikan zakat", "Menunaikan haji bagi yang mampu"]],
        ["Susun Rukun Iman mengikut urutan.", "Arrange the six pillars of faith in order.", ["Beriman kepada Allah", "Beriman kepada malaikat", "Beriman kepada kitab", "Beriman kepada rasul", "Beriman kepada hari akhirat", "Beriman kepada qada' dan qadar"]]
      ],
      sort: { title: "Rukun Islam atau Rukun Iman", ask: "Rukun Islam atau Rukun Iman?", en: "Pillar of Islam or pillar of faith?", cats: ["Rukun Islam", "Rukun Iman"], items: [
        ["Mengucap dua kalimah syahadah", 0], ["Solat lima waktu", 0], ["Berpuasa pada bulan Ramadan", 0], ["Menunaikan zakat", 0], ["Menunaikan haji", 0],
        ["Beriman kepada Allah", 1], ["Beriman kepada malaikat", 1], ["Beriman kepada kitab", 1], ["Beriman kepada rasul", 1], ["Beriman kepada hari akhirat", 1], ["Beriman kepada qada' dan qadar", 1]
      ] },
      q: [
        ["Berapakah Rukun Islam?", "How many pillars of Islam are there?", ["5", "6", "4", "3"]],
        ["Berapakah Rukun Iman?", "How many pillars of faith are there?", ["6", "5", "4", "7"]],
        ["Rukun Islam yang pertama ialah...", "The first pillar of Islam is...", ["mengucap dua kalimah syahadah", "solat", "puasa", "haji"]],
        ["Rukun Iman yang pertama ialah...", "The first pillar of faith is...", ["beriman kepada Allah", "beriman kepada rasul", "beriman kepada kitab", "beriman kepada malaikat"]],
        ["Umat Islam berpuasa pada bulan...", "Muslims fast in the month of...", ["Ramadan", "Syawal", "Muharam", "Zulhijah"]],
        ["Umat Islam menunaikan haji di...", "Muslims perform hajj in...", ["Makkah", "Madinah", "Baitulmaqdis", "Kuala Lumpur"]],
        ["Siapakah Tuhan kita?", "Who is our God?", ["Allah", "Malaikat", "Nabi", "Rasul"]],
        ["Rukun Iman yang terakhir ialah beriman kepada...", "The last pillar of faith is belief in...", ["qada' dan qadar", "hari akhirat", "kitab", "rasul"]]
      ]
    },
    {
      id: "allah", t: "Akidah: Mengenal Allah", en: "Knowing Allah & His beautiful names", icon: "✨",
      notes: [
        ["Allah itu Esa. Allah hanya satu, tiada yang sama dengan-Nya.", "Allah is One. There is only one Allah and nothing is like Him.", "☝️"],
        ["Allah mencipta semua makhluk: manusia, haiwan, tumbuhan, langit dan bumi.", "Allah created everything: humans, animals, plants, the sky and the earth.", "🌍"],
        ["Allah Maha Melihat dan Maha Mendengar. Allah tahu semua yang kita buat.", "Allah sees and hears everything. Allah knows all that we do.", "👀"],
        ["Kita bersyukur kepada Allah dengan mengucap Alhamdulillah.", "We thank Allah by saying Alhamdulillah.", "🤲"]
      ],
      pairs: [
        { title: "Asmaul Husna (nama-nama Allah)", ask: "Apakah maksud nama Allah ini?", en: "What does this name of Allah mean?", items: [
          ["Ar-Rahman", "Maha Pemurah"], ["Ar-Rahim", "Maha Penyayang"], ["Al-Malik", "Maha Merajai"], ["Al-Khaliq", "Maha Pencipta"],
          ["Al-'Alim", "Maha Mengetahui"], ["As-Sami'", "Maha Mendengar"], ["Al-Basir", "Maha Melihat"], ["Ar-Razzaq", "Maha Pemberi Rezeki"]
        ] },
        { title: "Ucapan yang baik (kalimah tayyibah)", ask: "Bilakah kita menyebut ucapan ini?", en: "When do we say this phrase?", items: [
          ["Bismillah", "Sebelum memulakan sesuatu"], ["Alhamdulillah", "Selepas mendapat nikmat"], ["Subhanallah", "Apabila melihat sesuatu yang menakjubkan"],
          ["Astaghfirullah", "Apabila membuat kesalahan"], ["Insya-Allah", "Apabila berjanji"], ["Innalillah", "Apabila mendengar berita sedih"]
        ] }
      ],
      q: [
        ["Siapakah yang mencipta langit dan bumi?", "Who created the sky and the earth?", ["Allah", "Manusia", "Malaikat", "Nabi"]],
        ["Allah itu Esa. Esa bermaksud...", "Allah is 'Esa'. Esa means...", ["satu", "dua", "banyak", "besar"]],
        ["Allah Maha Melihat. Jadi kita mesti...", "Allah sees everything. So we must...", ["sentiasa berbuat baik", "berbuat jahat secara sembunyi", "menipu", "malas"]],
        ["Apakah yang kita ucapkan selepas makan?", "What do we say after eating?", ["Alhamdulillah", "Bismillah", "Astaghfirullah", "Innalillah"]],
        ["Apakah yang kita ucapkan sebelum makan?", "What do we say before eating?", ["Bismillah", "Alhamdulillah", "Subhanallah", "Innalillah"]],
        ["Siapakah yang memberi kita rezeki?", "Who gives us our provision?", ["Allah", "Kedai", "Jiran", "Kawan"]],
        ["Bagaimanakah cara kita bersyukur kepada Allah?", "How do we show thanks to Allah?", ["Solat dan berbuat baik", "Membazir makanan", "Bergaduh", "Tidur sepanjang hari"]]
      ]
    },
    {
      id: "malaikat", t: "Akidah: Malaikat", en: "The angels and their duties", icon: "🪽",
      notes: [
        ["Malaikat ialah makhluk Allah yang dicipta daripada cahaya (nur).", "Angels are Allah's creation, made from light.", "💫"],
        ["Malaikat sentiasa taat kepada Allah. Malaikat tidak makan, tidak minum dan tidak tidur.", "Angels always obey Allah. They do not eat, drink or sleep.", "🌟"],
        ["Ada 10 malaikat yang wajib kita ketahui.", "There are 10 angels we must know.", "🔟"]
      ],
      pairs: { title: "Malaikat dan tugasnya", ask: "Apakah tugas malaikat ini?", en: "What is this angel's duty?", items: [
        ["Jibril", "Menyampaikan wahyu"], ["Mikail", "Menurunkan rezeki"], ["Israfil", "Meniup sangkakala"], ["Izrail", "Mencabut nyawa"],
        ["Munkar dan Nakir", "Menyoal di dalam kubur"], ["Raqib", "Mencatat amalan baik"], ["Atid", "Mencatat amalan jahat"], ["Malik", "Menjaga neraka"], ["Ridwan", "Menjaga syurga"]
      ] },
      q: [
        ["Malaikat dicipta daripada...", "Angels are created from...", ["cahaya", "tanah", "api", "air"]],
        ["Berapakah malaikat yang wajib diketahui?", "How many angels must we know?", ["10", "5", "25", "6"]],
        ["Malaikat manakah menyampaikan wahyu kepada rasul?", "Which angel delivers revelation to the messengers?", ["Jibril", "Mikail", "Israfil", "Malik"]],
        ["Malaikat manakah mencatat amalan baik kita?", "Which angel records our good deeds?", ["Raqib", "Atid", "Ridwan", "Izrail"]],
        ["Malaikat manakah menjaga syurga?", "Which angel guards paradise?", ["Ridwan", "Malik", "Jibril", "Atid"]],
        ["Yang manakah sifat malaikat?", "Which is a quality of angels?", ["Sentiasa taat kepada Allah", "Suka makan", "Suka tidur", "Suka ingkar"]],
        ["Beriman kepada malaikat ialah Rukun Iman yang ke-...", "Belief in angels is pillar of faith number...", ["2", "1", "3", "4"]]
      ]
    },
    {
      id: "rasul", t: "Akidah: Rasul & Kitab", en: "The messengers and the holy books", icon: "📖",
      notes: [
        ["Rasul ialah manusia pilihan Allah yang menerima wahyu dan wajib menyampaikannya.", "A messenger is a person chosen by Allah who receives revelation and must deliver it.", "🌙"],
        ["Ada 25 orang rasul yang wajib kita ketahui. Yang pertama Nabi Adam, yang terakhir Nabi Muhammad.", "There are 25 messengers we must know. The first is Prophet Adam, the last is Prophet Muhammad.", "🔢"],
        ["Rasul Ulul Azmi ada lima: Nabi Nuh, Nabi Ibrahim, Nabi Musa, Nabi Isa dan Nabi Muhammad.", "The five Ulul Azmi messengers: Nuh, Ibrahim, Musa, Isa and Muhammad.", "⭐"],
        ["Al-Quran ialah kitab suci umat Islam.", "The Quran is the holy book of Muslims.", "📗"]
      ],
      pairs: [
        { title: "Kitab dan rasul", ask: "Kitab ini diturunkan kepada siapa?", en: "Who was this book revealed to?", items: [
          ["Taurat", "Nabi Musa"], ["Zabur", "Nabi Daud"], ["Injil", "Nabi Isa"], ["Al-Quran", "Nabi Muhammad"]
        ] },
        { title: "Sifat wajib bagi rasul", ask: "Apakah maksud sifat rasul ini?", en: "What does this quality of the messengers mean?", items: [
          ["Siddiq", "Benar"], ["Amanah", "Dipercayai"], ["Tabligh", "Menyampaikan"], ["Fatanah", "Bijaksana"]
        ] }
      ],
      q: [
        ["Berapakah rasul yang wajib diketahui?", "How many messengers must we know?", ["25", "10", "5", "99"]],
        ["Siapakah nabi yang pertama?", "Who was the first prophet?", ["Nabi Adam", "Nabi Nuh", "Nabi Ibrahim", "Nabi Muhammad"]],
        ["Siapakah nabi dan rasul yang terakhir?", "Who is the last prophet and messenger?", ["Nabi Muhammad", "Nabi Isa", "Nabi Musa", "Nabi Adam"]],
        ["Kitab suci umat Islam ialah...", "The holy book of Muslims is...", ["al-Quran", "Taurat", "Zabur", "Injil"]],
        ["Berapakah bilangan rasul Ulul Azmi?", "How many Ulul Azmi messengers are there?", ["5", "4", "10", "25"]],
        ["Yang manakah rasul Ulul Azmi?", "Which one is an Ulul Azmi messenger?", ["Nabi Nuh", "Nabi Adam", "Nabi Daud", "Nabi Yusuf"]],
        ["Nabi manakah membina bahtera (kapal besar)?", "Which prophet built the ark?", ["Nabi Nuh", "Nabi Musa", "Nabi Isa", "Nabi Yunus"]],
        ["Al-Quran diturunkan dalam bahasa...", "The Quran was revealed in the ___ language.", ["Arab", "Melayu", "Inggeris", "Parsi"]]
      ]
    },
    {
      id: "wuduk", t: "Ibadah: Bersuci & Wuduk", en: "Cleanliness & ablution", icon: "🚿",
      notes: [
        ["Kita mesti berwuduk sebelum solat dan sebelum memegang al-Quran.", "We must take wudu before praying and before holding the Quran.", "💧"],
        ["Rukun wuduk ada enam perkara. Jika tertinggal satu, wuduk tidak sah.", "There are six obligatory parts of wudu. If one is missed, the wudu is not valid.", "6️⃣"],
        ["Perkara sunat wuduk: membaca Bismillah, membasuh tangan, berkumur, membasuh hidung, menyapu telinga, mendahulukan anggota kanan.", "Recommended acts: saying Bismillah, washing hands, rinsing the mouth and nose, wiping the ears, starting with the right side.", "👍"],
        ["Istinjak ialah membersihkan diri selepas buang air kecil atau besar.", "Istinja' is cleaning yourself after using the toilet.", "🧼"],
        ["Kita berwuduk dan bersuci dengan air mutlak seperti air paip, air hujan, air sungai dan air telaga.", "We use pure water such as tap water, rain water, river water and well water.", "🌧️"]
      ],
      order: [
        ["Susun rukun wuduk mengikut urutan.", "Arrange the obligatory steps of wudu in order.", ["Niat", "Membasuh muka", "Membasuh dua tangan hingga siku", "Menyapu sebahagian kepala", "Membasuh dua kaki hingga buku lali", "Tertib (ikut urutan)"]]
      ],
      sort: { title: "Perkara yang membatalkan wuduk", ask: "Adakah perkara ini membatalkan wuduk?", en: "Does this break your wudu?", cats: ["❌ Batal wuduk", "✅ Tidak batal"], items: [
        ["Kentut", 0], ["Buang air kecil", 0], ["Buang air besar", 0], ["Tidur nyenyak sambil berbaring", 0], ["Pengsan", 0], ["Menyentuh kemaluan dengan tapak tangan", 0],
        ["Makan", 1], ["Minum", 1], ["Bercakap", 1], ["Berjalan", 1], ["Membaca buku", 1]
      ] },
      q: [
        ["Berapakah rukun wuduk?", "How many obligatory parts of wudu are there?", ["6", "5", "4", "13"]],
        ["Rukun wuduk yang pertama ialah...", "The first obligatory part of wudu is...", ["niat", "membasuh muka", "berkumur", "membasuh kaki"]],
        ["Kita membasuh tangan hingga ke...", "We wash our arms up to the...", ["siku", "bahu", "pergelangan tangan", "jari"]],
        ["Kita membasuh kaki hingga ke...", "We wash our feet up to the...", ["buku lali", "lutut", "paha", "jari kaki"]],
        ["Yang manakah perkara SUNAT wuduk?", "Which is a RECOMMENDED (sunat) act of wudu?", ["Berkumur", "Membasuh muka", "Niat", "Membasuh kaki"]],
        ["“Tertib” dalam wuduk bermaksud...", "'Tertib' in wudu means...", ["mengikut urutan", "cepat-cepat", "tiga kali", "guna air banyak"]],
        ["Membersihkan diri selepas buang air dipanggil...", "Cleaning yourself after using the toilet is called...", ["istinjak", "tayamum", "wuduk", "azan"]],
        ["Air manakah boleh digunakan untuk berwuduk?", "Which water can be used for wudu?", ["Air paip", "Air teh", "Air sirap", "Air kelapa"]],
        ["Sebelum solat, kita mesti...", "Before praying, we must...", ["berwuduk", "makan", "tidur", "bermain"]]
      ]
    },
    {
      id: "solat", t: "Ibadah: Solat", en: "The five daily prayers", icon: "🧎",
      notes: [
        ["Solat fardu ada lima waktu sehari semalam: Subuh, Zohor, Asar, Maghrib dan Isyak.", "There are five obligatory prayers each day: Subuh, Zohor, Asar, Maghrib and Isyak.", "🕌"],
        ["Bilangan rakaat: Subuh 2, Zohor 4, Asar 4, Maghrib 3, Isyak 4. Jumlah 17 rakaat.", "Rak'ahs: Subuh 2, Zohor 4, Asar 4, Maghrib 3, Isyak 4. Total 17.", "🔢"],
        ["Semasa solat kita menghadap kiblat iaitu Kaabah di Makkah.", "When praying we face the qiblah, the Kaabah in Makkah.", "🕋"],
        ["Sebelum solat: badan, pakaian dan tempat mesti bersih, dan aurat mesti ditutup.", "Before prayer: body, clothes and place must be clean, and the aurat must be covered.", "👕"],
        ["Azan ialah seruan yang menandakan masuk waktu solat.", "The azan is the call that tells us it is time to pray.", "📢"]
      ],
      order: [
        ["Susun solat lima waktu bermula dari pagi.", "Arrange the five prayers starting from the morning.", ["Subuh", "Zohor", "Asar", "Maghrib", "Isyak"]],
        ["Susun perbuatan dalam solat.", "Arrange the actions in prayer.", ["Berdiri dan niat", "Takbiratul ihram", "Membaca al-Fatihah", "Rukuk", "Iktidal", "Sujud", "Duduk antara dua sujud", "Tahiyat akhir", "Salam"]]
      ],
      pairs: { title: "Waktu solat", ask: "Bilakah waktu solat ini?", en: "When is this prayer?", items: [
        ["Subuh", "Awal pagi sebelum matahari terbit"], ["Zohor", "Tengah hari"], ["Asar", "Petang"], ["Maghrib", "Selepas matahari terbenam"], ["Isyak", "Malam"]
      ] },
      sort: { title: "Bilangan rakaat", ask: "Berapakah rakaat solat ini?", en: "How many rak'ahs does this prayer have?", cats: ["2 rakaat", "3 rakaat", "4 rakaat"], items: [
        ["Subuh", 0], ["Maghrib", 1], ["Zohor", 2], ["Asar", 2], ["Isyak", 2]
      ] },
      q: [
        ["Berapa kalikah kita solat fardu dalam sehari?", "How many times do we pray the obligatory prayers each day?", ["5", "3", "4", "7"]],
        ["Semasa solat, kita menghadap ke arah...", "When praying, we face...", ["kiblat", "pintu", "matahari", "tingkap"]],
        ["Kiblat umat Islam ialah...", "The qiblah of Muslims is the...", ["Kaabah", "Masjid Negara", "Gua Hira'", "Bukit Uhud"]],
        ["Solat dimulakan dengan...", "Prayer begins with...", ["takbiratul ihram", "salam", "sujud", "rukuk"]],
        ["Solat diakhiri dengan...", "Prayer ends with...", ["salam", "takbir", "rukuk", "azan"]],
        ["Apakah yang dibaca semasa takbiratul ihram?", "What is said at the opening takbir?", ["Allahu Akbar", "Alhamdulillah", "Subhanallah", "Bismillah"]],
        ["Surah yang wajib dibaca dalam setiap rakaat ialah...", "The surah that must be read in every rak'ah is...", ["al-Fatihah", "al-Ikhlas", "an-Nas", "al-Falaq"]],
        ["Apakah yang menandakan masuk waktu solat?", "What tells us that it is time to pray?", ["Azan", "Loceng", "Wisel", "Lagu"]],
        ["Solat manakah mempunyai tiga rakaat?", "Which prayer has three rak'ahs?", ["Maghrib", "Subuh", "Zohor", "Isyak"]],
        ["Solat manakah mempunyai dua rakaat?", "Which prayer has two rak'ahs?", ["Subuh", "Asar", "Maghrib", "Isyak"]]
      ]
    },
    {
      id: "sirah", t: "Sirah: Nabi Muhammad SAW", en: "The life of Prophet Muhammad (peace be upon him)", icon: "🌙",
      notes: [
        ["Nabi Muhammad SAW lahir di Makkah pada hari Isnin, 12 Rabiulawal, Tahun Gajah.", "Prophet Muhammad was born in Makkah on Monday, 12 Rabiulawal, in the Year of the Elephant.", "🐘"],
        ["Bapa baginda, Abdullah, meninggal dunia sebelum baginda lahir. Ibu baginda, Aminah, meninggal ketika baginda berumur 6 tahun.", "His father Abdullah died before he was born. His mother Aminah died when he was 6.", "🤍"],
        ["Baginda dipelihara oleh datuknya, Abdul Muttalib, kemudian oleh bapa saudaranya, Abu Talib.", "He was cared for by his grandfather Abdul Muttalib, then by his uncle Abu Talib.", "👴"],
        ["Semasa kecil baginda menggembala kambing. Apabila dewasa baginda berniaga.", "As a boy he herded goats. As an adult he was a trader.", "🐐"],
        ["Baginda digelar al-Amin kerana sangat jujur dan amanah.", "He was called al-Amin because he was very honest and trustworthy.", "🤝"],
        ["Baginda menerima wahyu pertama di Gua Hira' ketika berumur 40 tahun.", "He received the first revelation in the Cave of Hira' at age 40.", "⛰️"]
      ],
      pairs: { title: "Keluarga Nabi Muhammad SAW", ask: "Siapakah nama ahli keluarga Nabi ini?", en: "What is the name of this family member of the Prophet?", items: [
        ["Bapa", "Abdullah"], ["Ibu", "Aminah"], ["Datuk", "Abdul Muttalib"], ["Bapa saudara", "Abu Talib"], ["Ibu susuan", "Halimatus Sa'diah"], ["Isteri pertama", "Khadijah"]
      ] },
      order: [
        ["Susun peristiwa hidup Nabi Muhammad SAW.", "Arrange the events in the Prophet's life.", ["Lahir di Makkah", "Disusukan oleh Halimatus Sa'diah", "Ibu baginda meninggal dunia", "Dipelihara oleh datuk", "Dipelihara oleh Abu Talib", "Menerima wahyu pertama"]]
      ],
      q: [
        ["Di manakah Nabi Muhammad SAW dilahirkan?", "Where was Prophet Muhammad born?", ["Makkah", "Madinah", "Taif", "Syam"]],
        ["Nabi Muhammad SAW lahir pada tahun...", "Prophet Muhammad was born in the Year of the...", ["Gajah", "Unta", "Kuda", "Singa"]],
        ["Nabi Muhammad SAW lahir pada hari...", "Prophet Muhammad was born on a...", ["Isnin", "Jumaat", "Ahad", "Khamis"]],
        ["Nabi Muhammad SAW lahir pada bulan...", "Prophet Muhammad was born in the month of...", ["Rabiulawal", "Ramadan", "Syawal", "Muharam"]],
        ["Apakah gelaran Nabi Muhammad SAW?", "What was Prophet Muhammad's title?", ["Al-Amin", "Al-Faruq", "As-Siddiq", "Al-Malik"], "Al-Amin bermaksud orang yang dipercayai."],
        ["Apakah pekerjaan Nabi semasa kecil?", "What work did the Prophet do as a boy?", ["Menggembala kambing", "Menangkap ikan", "Menanam padi", "Bertukang kayu"]],
        ["Di manakah Nabi menerima wahyu pertama?", "Where did the Prophet receive the first revelation?", ["Gua Hira'", "Gua Thur", "Kaabah", "Masjid Nabawi"]],
        ["Berapakah umur Nabi ketika menerima wahyu pertama?", "How old was the Prophet when he received the first revelation?", ["40 tahun", "25 tahun", "6 tahun", "63 tahun"]],
        ["Berapakah umur Nabi ketika ibunya meninggal dunia?", "How old was the Prophet when his mother died?", ["6 tahun", "2 tahun", "8 tahun", "12 tahun"]],
        ["Apabila menyebut nama Nabi Muhammad, kita mengucapkan...", "When we say Prophet Muhammad's name, we say...", ["selawat", "azan", "iqamah", "takbir"]]
      ]
    },
    {
      id: "adab", t: "Adab & Akhlak", en: "Good manners", icon: "🤝",
      notes: [
        ["Adab makan: basuh tangan, baca Bismillah, guna tangan kanan, duduk, jangan membazir, baca Alhamdulillah selepas makan.", "Eating manners: wash hands, say Bismillah, use the right hand, sit down, do not waste, say Alhamdulillah after.", "🍚"],
        ["Adab ke tandas: masuk dengan kaki kiri, keluar dengan kaki kanan, baca doa, jangan bercakap.", "Toilet manners: enter with the left foot, leave with the right foot, read the doa, do not talk.", "🚽"],
        ["Adab tidur: gosok gigi, berwuduk, baca doa, tidur mengiring ke kanan.", "Sleeping manners: brush teeth, take wudu, read the doa, sleep on your right side.", "🛏️"],
        ["Adab dengan ibu bapa: taat, bercakap lembut, menolong, mendoakan mereka.", "With parents: obey, speak gently, help, pray for them.", "👨‍👩‍👧"],
        ["Adab dengan guru: memberi salam, mendengar, hormat, mengucapkan terima kasih.", "With teachers: give salam, listen, respect, say thank you.", "🧑‍🏫"],
        ["Masuk masjid dengan kaki kanan. Masuk rumah dengan memberi salam.", "Enter the mosque with the right foot. Enter the house by giving salam.", "🕌"]
      ],
      sort: { title: "Adab yang baik", ask: "Adakah ini adab yang baik?", en: "Is this good manners?", cats: ["👍 Adab baik", "👎 Bukan adab baik"], items: [
        ["Memberi salam kepada guru", 0], ["Makan dengan tangan kanan", 0], ["Membaca Bismillah sebelum makan", 0], ["Menolong ibu", 0], ["Bercakap lembut dengan bapa", 0], ["Meminta izin sebelum meminjam", 0], ["Mengucapkan terima kasih", 0],
        ["Makan sambil berjalan", 1], ["Menjerit kepada ibu", 1], ["Membazir makanan", 1], ["Bercakap semasa guru mengajar", 1], ["Mengambil barang kawan tanpa izin", 1], ["Mengejek kawan", 1]
      ] },
      q: [
        ["Kita makan dengan tangan...", "We eat with our ___ hand.", ["kanan", "kiri", "kedua-dua", "mana-mana"]],
        ["Apakah yang dibaca sebelum makan?", "What do we say before eating?", ["Bismillah", "Alhamdulillah", "Subhanallah", "Allahu Akbar"]],
        ["Kita masuk ke tandas dengan kaki...", "We enter the toilet with our ___ foot.", ["kiri", "kanan", "kedua-dua", "melompat"]],
        ["Kita keluar dari tandas dengan kaki...", "We leave the toilet with our ___ foot.", ["kanan", "kiri", "kedua-dua", "melompat"]],
        ["Kita masuk ke masjid dengan kaki...", "We enter the mosque with our ___ foot.", ["kanan", "kiri", "kedua-dua", "berlari"]],
        ["Sebelum tidur, kita digalakkan...", "Before sleeping, we are encouraged to...", ["berwuduk dan membaca doa", "makan banyak", "menonton televisyen", "bermain telefon"]],
        ["Apabila berjumpa guru, kita...", "When we meet a teacher, we...", ["memberi salam", "lari", "buat tidak nampak", "menjerit"]],
        ["Apabila ibu memanggil, kita mesti...", "When mother calls, we must...", ["segera menyahut", "buat tidak dengar", "marah", "menangis"]],
        ["Jawapan bagi salam ialah...", "The reply to salam is...", ["Waalaikumussalam", "Assalamualaikum", "Alhamdulillah", "Insya-Allah"]],
        ["Apabila bersin, kita mengucapkan...", "When we sneeze, we say...", ["Alhamdulillah", "Bismillah", "Innalillah", "Masya-Allah"]],
        ["Apabila membuat salah kepada kawan, kita mesti...", "When we wrong a friend, we must...", ["meminta maaf", "ketawa", "lari", "menyalahkan orang lain"]]
      ]
    },
    {
      id: "quran", t: "Al-Quran: Huruf & Baris", en: "Quran reading: letters & vowel marks", icon: "📗",
      notes: [
        ["Huruf hijaiyah ialah huruf-huruf al-Quran. Kita membaca dari kanan ke kiri.", "The hijaiyah letters are the letters of the Quran. We read from right to left.", "➡️"],
        ["Baris di atas (fathah) berbunyi “a”. Contoh: بَ = ba.", "A mark on top (fathah) makes the 'a' sound.", "🅰️"],
        ["Baris di bawah (kasrah) berbunyi “i”. Contoh: بِ = bi.", "A mark below (kasrah) makes the 'i' sound.", "ℹ️"],
        ["Baris di depan (dhammah) berbunyi “u”. Contoh: بُ = bu.", "The dhammah mark makes the 'u' sound.", "🆙"],
        ["Tanda mati (sukun) – huruf dibaca mati. Tanda sabdu (syaddah) – huruf dibaca dua kali.", "Sukun – the letter has no vowel. Shaddah – the letter is doubled.", "⭕"],
        ["Adab membaca al-Quran: berwuduk, menghadap kiblat, mula dengan A'uzubillah dan Bismillah.", "Manners of reading the Quran: take wudu, face the qiblah, begin with A'uzubillah and Bismillah.", "🤲"]
      ],
      pairs: [
        { title: "Huruf hijaiyah", ask: "Apakah nama huruf ini?", en: "What is the name of this letter?", items: [
          ["ا", "alif"], ["ب", "ba"], ["ت", "ta"], ["ث", "tsa"], ["ج", "jim"], ["ح", "ha (kecil)"], ["خ", "kha"], ["د", "dal"], ["ذ", "dzal"], ["ر", "ra"], ["ز", "zai"],
          ["س", "sin"], ["ش", "syin"], ["ص", "sad"], ["ض", "dhad"], ["ط", "tho"], ["ظ", "zha"], ["ع", "ain"], ["غ", "ghain"], ["ف", "fa"], ["ق", "qaf"],
          ["ك", "kaf"], ["ل", "lam"], ["م", "mim"], ["ن", "nun"], ["و", "wau"], ["ه", "ha (besar)"], ["ي", "ya"]
        ] },
        { title: "Bunyi huruf berbaris", ask: "Bagaimanakah bunyinya?", en: "How does it sound?", items: [
          ["بَ", "ba"], ["بِ", "bi"], ["بُ", "bu"], ["تَ", "ta"], ["تِ", "ti"], ["تُ", "tu"], ["سَ", "sa"], ["سِ", "si"], ["سُ", "su"],
          ["مَ", "ma"], ["مِ", "mi"], ["مُ", "mu"], ["نَ", "na"], ["نِ", "ni"], ["نُ", "nu"], ["لَ", "la"], ["لِ", "li"], ["لُ", "lu"]
        ] },
        { title: "Nama tanda baris", ask: "Apakah bunyi tanda ini?", en: "What sound does this mark make?", items: [
          ["Fathah (baris atas)", "a"], ["Kasrah (baris bawah)", "i"], ["Dhammah (baris depan)", "u"]
        ] }
      ],
      q: [
        ["Al-Quran dibaca dari...", "The Quran is read from...", ["kanan ke kiri", "kiri ke kanan", "atas ke bawah", "bawah ke atas"]],
        ["Baris atas dipanggil...", "The mark on top is called...", ["fathah", "kasrah", "dhammah", "sukun"]],
        ["Baris bawah dipanggil...", "The mark below is called...", ["kasrah", "fathah", "dhammah", "syaddah"]],
        ["Tanda mati dipanggil...", "The 'no vowel' mark is called...", ["sukun", "syaddah", "fathah", "tanwin"]],
        ["Sebelum membaca al-Quran, kita mesti...", "Before reading the Quran, we must...", ["berwuduk", "makan", "berlari", "tidur"]],
        ["Kita memulakan bacaan al-Quran dengan...", "We begin reading the Quran with...", ["A'uzubillah dan Bismillah", "Alhamdulillah", "salam", "azan"]],
        ["Surah pertama dalam al-Quran ialah...", "The first surah in the Quran is...", ["al-Fatihah", "an-Nas", "al-Ikhlas", "al-Baqarah"]],
        ["Berapakah bilangan ayat dalam Surah al-Fatihah?", "How many verses are in Surah al-Fatihah?", ["7", "5", "4", "6"]]
      ]
    },
    {
      id: "jawi", t: "Jawi", en: "Jawi script", icon: "🖋️",
      notes: [
        ["Tulisan Jawi ditulis dan dibaca dari kanan ke kiri.", "Jawi is written and read from right to left.", "⬅️"],
        ["Huruf Jawi berasal daripada huruf Arab, ditambah enam huruf: ca, nga, pa, ga, nya dan va.", "Jawi letters come from Arabic letters, plus six more: ca, nga, pa, ga, nya and va.", "➕"],
        ["Huruf vokal Jawi: alif (ا) untuk a, wau (و) untuk o dan u, ya (ي) untuk i dan e.", "Jawi vowel letters: alif for a, wau for o and u, ya for i and e.", "🔤"]
      ],
      pairs: [
        { title: "Huruf Jawi tambahan", ask: "Apakah bunyi huruf Jawi ini?", en: "What sound does this Jawi letter make?", items: [
          ["چ", "ca"], ["ڠ", "nga"], ["ڤ", "pa"], ["ݢ", "ga"], ["ڽ", "nya"], ["ۏ", "va"]
        ] },
        { title: "Huruf Jawi", ask: "Apakah huruf Rumi bagi huruf Jawi ini?", en: "Which Roman letter matches this Jawi letter?", items: [
          ["ب", "b"], ["ت", "t"], ["ج", "j"], ["د", "d"], ["ر", "r"], ["س", "s"], ["ک", "k"], ["ل", "l"], ["م", "m"], ["ن", "n"], ["ه", "h"], ["ز", "z"], ["ف", "f"]
        ] },
        { title: "Perkataan Jawi", ask: "Apakah perkataan Jawi ini dalam Rumi?", en: "What is this Jawi word in Roman letters?", items: [
          ["بوکو", "buku"], ["باجو", "baju"], ["ماتا", "mata"], ["کاکي", "kaki"], ["سوسو", "susu"], ["روتي", "roti"], ["بولا", "bola"], ["ميجا", "meja"],
          ["ݢورو", "guru"], ["ايبو", "ibu"], ["ناسي", "nasi"], ["باتو", "batu"], ["ݢيݢي", "gigi"], ["توڤي", "topi"], ["لوري", "lori"], ["دادو", "dadu"]
        ] }
      ],
      q: [
        ["Tulisan Jawi dibaca dari...", "Jawi is read from...", ["kanan ke kiri", "kiri ke kanan", "atas ke bawah", "tengah"]],
        ["Huruf Jawi manakah berbunyi “ng”?", "Which Jawi letter makes the 'ng' sound?", ["ڠ", "ݢ", "ڽ", "چ"]],
        ["Huruf Jawi manakah berbunyi “p”?", "Which Jawi letter makes the 'p' sound?", ["ڤ", "ف", "ب", "ۏ"]],
        ["Huruf Jawi manakah berbunyi “c”?", "Which Jawi letter makes the 'c' sound?", ["چ", "ج", "ح", "خ"]],
        ["Huruf Jawi manakah berbunyi “g”?", "Which Jawi letter makes the 'g' sound?", ["ݢ", "ک", "ڠ", "غ"]],
        ["Huruf Jawi manakah berbunyi “ny”?", "Which Jawi letter makes the 'ny' sound?", ["ڽ", "ن", "ي", "ث"]],
        ["Pilih ejaan Jawi bagi “buku”.", "Choose the Jawi spelling of 'buku'.", ["بوکو", "باکو", "بيکو", "بوکا"]],
        ["Pilih ejaan Jawi bagi “mata”.", "Choose the Jawi spelling of 'mata'.", ["ماتا", "موتو", "ميتي", "ماتو"]],
        ["Pilih ejaan Jawi bagi “roti”.", "Choose the Jawi spelling of 'roti'.", ["روتي", "راتا", "روتو", "ريتي"]],
        ["Huruf vokal Jawi untuk bunyi “a” ialah...", "The Jawi vowel letter for the 'a' sound is...", ["ا (alif)", "و (wau)", "ي (ya)", "ن (nun)"]]
      ]
    },
    {
      id: "arab", t: "Bahasa Arab", en: "Arabic language", icon: "🗣️",
      notes: [
        ["Bahasa Arab ialah bahasa al-Quran.", "Arabic is the language of the Quran.", "📗"],
        ["Ucapan: Assalamualaikum (salam sejahtera), Syukran (terima kasih), 'Afwan (sama-sama).", "Greetings: Assalamualaikum (peace be upon you), Syukran (thank you), 'Afwan (you're welcome).", "👋"],
        ["Sabahul khair = selamat pagi. Masa'ul khair = selamat petang.", "Sabahul khair = good morning. Masa'ul khair = good evening.", "🌅"],
        ["Tekan 🔊 untuk mendengar sebutan (jika tablet ada suara Arab).", "Tap 🔊 to hear the pronunciation (if the tablet has an Arabic voice).", "🔊"]
      ],
      pairs: [
        { title: "Nombor 1–10", ask: "Nombor berapakah ini?", en: "Which number is this?", speakAr: true, items: [
          ["وَاحِد (wahid)", "1 – satu"], ["اِثْنَان (ithnan)", "2 – dua"], ["ثَلَاثَة (thalathah)", "3 – tiga"], ["أَرْبَعَة (arba'ah)", "4 – empat"], ["خَمْسَة (khamsah)", "5 – lima"],
          ["سِتَّة (sittah)", "6 – enam"], ["سَبْعَة (sab'ah)", "7 – tujuh"], ["ثَمَانِيَة (thamaniyah)", "8 – lapan"], ["تِسْعَة (tis'ah)", "9 – sembilan"], ["عَشَرَة ('asyarah)", "10 – sepuluh"]
        ] },
        { title: "Keluarga", ask: "Apakah maksud perkataan Arab ini?", en: "What does this Arabic word mean?", speakAr: true, items: [
          ["أَب (ab)", "bapa"], ["أُمّ (umm)", "ibu"], ["أَخ (akh)", "adik-beradik lelaki"], ["أُخْت (ukht)", "adik-beradik perempuan"], ["جَدّ (jadd)", "datuk"], ["جَدَّة (jaddah)", "nenek"]
        ] },
        { title: "Di sekolah", ask: "Apakah maksud perkataan Arab ini?", en: "What does this Arabic word mean?", speakAr: true, items: [
          ["كِتَاب (kitab)", "buku"], ["قَلَم (qalam)", "pen"], ["مَدْرَسَة (madrasah)", "sekolah"], ["مُعَلِّم (mu'allim)", "guru lelaki"], ["كُرْسِيّ (kursi)", "kerusi"],
          ["مَكْتَب (maktab)", "meja tulis"], ["بَاب (bab)", "pintu"], ["حَقِيبَة (haqibah)", "beg"], ["فَصْل (fasl)", "kelas"], ["تِلْمِيذ (tilmiz)", "murid lelaki"]
        ] },
        { title: "Warna", ask: "Apakah warna ini?", en: "What colour is this?", speakAr: true, items: [
          ["أَحْمَر (ahmar)", "merah"], ["أَزْرَق (azraq)", "biru"], ["أَخْضَر (akhdar)", "hijau"], ["أَصْفَر (asfar)", "kuning"], ["أَبْيَض (abyad)", "putih"], ["أَسْوَد (aswad)", "hitam"]
        ] },
        { title: "Anggota badan", ask: "Apakah maksud perkataan Arab ini?", en: "What does this Arabic word mean?", speakAr: true, items: [
          ["رَأْس (ra's)", "kepala"], ["عَيْن ('ain)", "mata"], ["أُذُن (uzun)", "telinga"], ["أَنْف (anf)", "hidung"], ["فَم (fam)", "mulut"], ["يَد (yad)", "tangan"], ["رِجْل (rijl)", "kaki"]
        ] }
      ],
      q: [
        ["“Syukran” bermaksud...", "'Syukran' means...", ["terima kasih", "selamat pagi", "apa khabar", "selamat tinggal"]],
        ["“Sabahul khair” bermaksud...", "'Sabahul khair' means...", ["selamat pagi", "selamat malam", "terima kasih", "sama-sama"]],
        ["Apakah jawapan bagi “Syukran”?", "What is the reply to 'Syukran'?", ["'Afwan", "Syukran", "Na'am", "La"]],
        ["“Na'am” bermaksud...", "'Na'am' means...", ["ya", "tidak", "terima kasih", "maaf"]],
        ["“La” bermaksud...", "'La' means...", ["tidak", "ya", "ini", "itu"]],
        ["“Hadha kitab” bermaksud...", "'Hadha kitab' means...", ["Ini buku", "Itu pen", "Ini meja", "Itu pintu"]],
        ["“Ma ismuka?” bermaksud...", "'Ma ismuka?' means...", ["Siapakah nama kamu?", "Apa khabar?", "Di mana rumah kamu?", "Berapa umur kamu?"]],
        ["Selepas “wahid” (1) ialah...", "After 'wahid' (1) comes...", ["ithnan", "thalathah", "khamsah", "'asyarah"]]
      ]
    }
  ]
});
