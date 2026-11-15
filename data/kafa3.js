/* KAFA TAHUN 3 – fardu ain (TANPA hafazan): Akidah, Ibadah, Sirah, Adab,
   Tilawah al-Quran (asas tajwid), Jawi, Bahasa Arab.
   Dokumen perancangan (Claude.pdf) tidak menyenaraikan topik KAFA, jadi kandungan ini
   ditulis berdasarkan pengetahuan am dan BELUM disemak dengan sukatan KAFA rasmi.
   Sila minta ustaz/ustazah menyemaknya.
   Perkataan Arab/Jawi yang diuji tidak diterjemah. Jawapan betul sentiasa yang PERTAMA.
   "Melayu // English" dipisahkan oleh data/lib.js. */
window.addSubject({
  id: "kafa3", year: 3, name: "KAFA", en: "Islamic studies (fardu ain)", icon: "🕌", color: "#8A52D9",
  topics: [
    {
      id: "sifat", t: "Akidah: Sifat-sifat Allah", en: "Faith: the attributes of Allah", icon: "☝️",
      notes: [
        ["Allah mempunyai sifat-sifat yang sempurna. Kita wajib mengetahui dan mempercayainya.", "Allah has perfect attributes. We must know them and believe in them.", "✨"],
        ["Wujud bermaksud ada. Qidam bermaksud sedia ada (tiada permulaan). Baqa' bermaksud kekal.", "Wujud means existing. Qidam means without a beginning. Baqa' means everlasting.", "♾️"],
        ["Mukhalafatuhu lilhawadith bermaksud Allah tidak sama dengan makhluk.", "Mukhalafatuhu lilhawadith means Allah is not like any created thing.", "🌌"],
        ["Qiyamuhu binafsih bermaksud Allah berdiri dengan sendiri, tidak memerlukan sesiapa. Wahdaniyyah bermaksud Esa.", "Qiyamuhu binafsih means Allah needs no one. Wahdaniyyah means One.", "1️⃣"],
        ["Qudrah – berkuasa. Iradah – berkehendak. Ilmu – mengetahui. Hayat – hidup.", "Qudrah – all-powerful. Iradah – having will. Ilmu – all-knowing. Hayat – living.", "💪"],
        ["Sama' – mendengar. Basar – melihat. Kalam – berkata-kata.", "Sama' – hearing. Basar – seeing. Kalam – speaking.", "👂"]
      ],
      q: [
        ["Apakah maksud Wujud?", "What does Wujud mean?", ["Ada // existing", "Kekal // everlasting", "Esa // One", "Hidup // living"]],
        ["Apakah maksud Baqa'?", "What does Baqa' mean?", ["Kekal // everlasting", "Ada // existing", "Melihat // seeing", "Berkuasa // all-powerful"]],
        ["Apakah maksud Wahdaniyyah?", "What does Wahdaniyyah mean?", ["Esa // One", "Kekal // everlasting", "Mendengar // hearing", "Hidup // living"]],
        ["Sifat Allah yang bermaksud “berkuasa” ialah ...", "The attribute of Allah that means “all-powerful” is ...", ["Qudrah", "Iradah", "Ilmu", "Hayat"]],
        ["Sifat Allah yang bermaksud “mengetahui” ialah ...", "The attribute of Allah that means “all-knowing” is ...", ["Ilmu", "Sama'", "Basar", "Kalam"]],
        ["Sifat Allah yang bermaksud “mendengar” ialah ...", "The attribute of Allah that means “hearing” is ...", ["Sama'", "Basar", "Kalam", "Hayat"]],
        ["Sifat Allah yang bermaksud “melihat” ialah ...", "The attribute of Allah that means “seeing” is ...", ["Basar", "Sama'", "Qidam", "Wujud"]],
        ["Allah tidak sama dengan makhluk. Apakah sifat ini?", "Allah is not like any created thing. Which attribute is this?", ["Mukhalafatuhu lilhawadith", "Wahdaniyyah", "Qudrah", "Hayat"]],
        ["Allah tidak memerlukan sesiapa. Apakah sifat ini?", "Allah needs no one. Which attribute is this?", ["Qiyamuhu binafsih", "Kalam", "Basar", "Wujud"]],
        ["Allah mengetahui apa yang kita buat walaupun bersendirian. Oleh itu, kita mesti ...", "Allah knows what we do even when we are alone. So we must ...", ["Sentiasa berbuat baik // always do good", "Berbuat jahat secara sembunyi // do wrong in secret", "Berasa sombong // be proud", "Takut kepada kegelapan // be afraid of the dark"]],
        ["Alam ini teratur dan indah. Ini membuktikan bahawa ...", "The universe is orderly and beautiful. This shows that ...", ["Allah wujud dan berkuasa // Allah exists and is all-powerful", "Alam terjadi dengan sendiri // the universe made itself", "Manusia yang mencipta alam // humans created the universe", "Alam tiada pencipta // the universe has no creator"]],
        ["Apakah maksud Qidam?", "What does Qidam mean?", ["Sedia ada, tiada permulaan // without a beginning", "Ada penghujung // having an end", "Berkata-kata // speaking", "Berkehendak // having will"]]
      ],
      pairs: {
        title: "Sifat Allah dan maksudnya // The attributes of Allah and their meanings", ask: "Padankan sifat Allah dengan maksudnya.", en: "Match the attribute to its meaning.",
        items: [["Wujud", "Ada // existing"], ["Qidam", "Sedia ada // without a beginning"], ["Baqa'", "Kekal // everlasting"], ["Wahdaniyyah", "Esa // One"], ["Qudrah", "Berkuasa // all-powerful"], ["Iradah", "Berkehendak // having will"], ["Ilmu", "Mengetahui // all-knowing"], ["Hayat", "Hidup // living"], ["Sama'", "Mendengar // hearing"], ["Basar", "Melihat // seeing"], ["Kalam", "Berkata-kata // speaking"]]
      }
    },
    {
      id: "rasul", t: "Akidah: Para Rasul & Mukjizat", en: "Faith: the messengers & their miracles", icon: "📜",
      notes: [
        ["Rasul ialah lelaki pilihan Allah yang menerima wahyu dan wajib menyampaikannya kepada umatnya.", "A messenger (rasul) is a man chosen by Allah who receives revelation and must pass it on to his people.", "📣"],
        ["Terdapat 25 orang rasul yang wajib diketahui. Yang pertama ialah Nabi Adam AS dan yang terakhir ialah Nabi Muhammad SAW.", "There are 25 messengers we must know. The first is Prophet Adam and the last is Prophet Muhammad.", "🔢"],
        ["Rasul Ulul Azmi ialah lima rasul yang paling tabah: Nabi Nuh, Nabi Ibrahim, Nabi Musa, Nabi Isa dan Nabi Muhammad SAW.", "The Ulul Azmi are the five most steadfast messengers: Nuh, Ibrahim, Musa, Isa and Muhammad.", "🖐️"],
        ["Mukjizat ialah perkara luar biasa yang Allah kurniakan kepada rasul sebagai bukti kerasulan.", "A miracle (mukjizat) is something extraordinary that Allah gives a messenger as proof that he is a messenger.", "🌟"],
        ["Mukjizat terbesar Nabi Muhammad SAW ialah al-Quran.", "The greatest miracle of Prophet Muhammad is the Quran.", "📖"]
      ],
      q: [
        ["Berapakah bilangan rasul yang wajib diketahui?", "How many messengers must we know?", ["25", "5", "10", "99"]],
        ["Siapakah nabi yang pertama?", "Who was the first prophet?", ["Nabi Adam AS", "Nabi Nuh AS", "Nabi Ibrahim AS", "Nabi Muhammad SAW"]],
        ["Siapakah rasul yang terakhir?", "Who was the last messenger?", ["Nabi Muhammad SAW", "Nabi Isa AS", "Nabi Musa AS", "Nabi Adam AS"]],
        ["Berapakah bilangan Rasul Ulul Azmi?", "How many Ulul Azmi messengers are there?", ["5", "25", "4", "10"]],
        ["Siapakah yang BUKAN Rasul Ulul Azmi?", "Who is NOT one of the Ulul Azmi messengers?", ["Nabi Yusuf AS", "Nabi Nuh AS", "Nabi Musa AS", "Nabi Isa AS"]],
        ["Apakah maksud mukjizat?", "What is a miracle (mukjizat)?", ["Perkara luar biasa yang dikurniakan kepada rasul // something extraordinary given to a messenger", "Silap mata // a magic trick", "Cerita dongeng // a fairy tale", "Mimpi // a dream"]],
        ["Tongkat nabi manakah yang bertukar menjadi ular?", "Which prophet's staff turned into a snake?", ["Nabi Musa AS", "Nabi Isa AS", "Nabi Nuh AS", "Nabi Ibrahim AS"]],
        ["Nabi manakah yang tidak terbakar apabila dicampakkan ke dalam api?", "Which prophet was not burnt when he was thrown into a fire?", ["Nabi Ibrahim AS", "Nabi Musa AS", "Nabi Yunus AS", "Nabi Daud AS"]],
        ["Nabi manakah yang membina bahtera yang besar?", "Which prophet built a great ark?", ["Nabi Nuh AS", "Nabi Sulaiman AS", "Nabi Isa AS", "Nabi Yusuf AS"]],
        ["Nabi manakah yang selamat di dalam perut ikan?", "Which prophet was kept safe inside a fish?", ["Nabi Yunus AS", "Nabi Nuh AS", "Nabi Musa AS", "Nabi Ibrahim AS"]],
        ["Nabi manakah yang boleh memahami bahasa haiwan?", "Which prophet could understand the speech of animals?", ["Nabi Sulaiman AS", "Nabi Adam AS", "Nabi Isa AS", "Nabi Yunus AS"]],
        ["Apakah mukjizat terbesar Nabi Muhammad SAW?", "What is the greatest miracle of Prophet Muhammad?", ["Al-Quran // the Quran", "Bahtera // an ark", "Tongkat // a staff", "Cincin // a ring"]],
        ["Apakah tugas utama para rasul?", "What is the main task of the messengers?", ["Menyampaikan ajaran Allah // to pass on Allah's teachings", "Mengumpul harta // to gather wealth", "Menjadi raja // to become kings", "Berperang // to go to war"]]
      ],
      pairs: {
        title: "Rasul dan mukjizatnya // Messengers and their miracles", ask: "Padankan rasul dengan mukjizatnya.", en: "Match the messenger to his miracle.",
        items: [["Nabi Musa AS", "Tongkat menjadi ular // a staff that became a snake"], ["Nabi Ibrahim AS", "Tidak terbakar oleh api // not burnt by fire"], ["Nabi Nuh AS", "Bahtera yang besar // a great ark"], ["Nabi Yunus AS", "Selamat di dalam perut ikan // safe inside a fish"], ["Nabi Sulaiman AS", "Memahami bahasa haiwan // understanding animals"], ["Nabi Isa AS", "Menyembuhkan orang sakit dengan izin Allah // healing the sick by Allah's leave"], ["Nabi Muhammad SAW", "Al-Quran // the Quran"]]
      },
      sort: {
        title: "Rasul Ulul Azmi atau bukan? // Ulul Azmi or not?", ask: "Adakah rasul ini termasuk dalam Rasul Ulul Azmi?", en: "Is this messenger one of the Ulul Azmi?",
        cats: ["Ulul Azmi", "Bukan Ulul Azmi // not Ulul Azmi"],
        items: [["Nabi Nuh AS", 0], ["Nabi Ibrahim AS", 0], ["Nabi Musa AS", 0], ["Nabi Isa AS", 0], ["Nabi Muhammad SAW", 0], ["Nabi Adam AS", 1], ["Nabi Yusuf AS", 1], ["Nabi Yunus AS", 1], ["Nabi Daud AS", 1], ["Nabi Sulaiman AS", 1]]
      }
    },
    {
      id: "akhirat", t: "Akidah: Hari Akhirat", en: "Faith: the Hereafter", icon: "🌅",
      notes: [
        ["Beriman kepada Hari Akhirat ialah Rukun Iman yang kelima.", "Belief in the Last Day is the fifth pillar of faith.", "5️⃣"],
        ["Selepas mati, manusia berada di alam barzakh (alam kubur) sehingga hari kiamat.", "After death, people are in the barzakh (the life of the grave) until the Day of Resurrection.", "🕊️"],
        ["Malaikat Israfil meniup sangkakala. Semua manusia dibangkitkan dan dihimpunkan di Padang Mahsyar.", "The angel Israfil blows the trumpet. Everyone is raised and gathered on the Plain of Mahsyar.", "📯"],
        ["Hisab ialah pengiraan amalan. Mizan ialah timbangan amalan baik dan buruk.", "Hisab is the reckoning of deeds. Mizan is the scale that weighs good and bad deeds.", "⚖️"],
        ["Sirat ialah titian yang merentangi neraka. Orang beriman akan melaluinya ke syurga.", "The Sirat is the bridge over Hell. Believers cross it to Paradise.", "🌉"],
        ["Syurga ialah balasan bagi orang yang beriman dan beramal soleh. Neraka ialah balasan bagi orang yang ingkar.", "Paradise is the reward for those who believe and do good. Hell is the outcome for those who disobey.", "🌴"]
      ],
      q: [
        ["Beriman kepada Hari Akhirat ialah Rukun Iman yang keberapa?", "Which pillar of faith is belief in the Last Day?", ["Kelima // the fifth", "Pertama // the first", "Ketiga // the third", "Keenam // the sixth"]],
        ["Apakah nama alam selepas mati sebelum hari kiamat?", "What is the stage after death and before the Day of Resurrection called?", ["Alam barzakh", "Padang Mahsyar", "Syurga", "Sirat"]],
        ["Malaikat manakah yang meniup sangkakala?", "Which angel blows the trumpet?", ["Israfil", "Jibril", "Mikail", "Ridhwan"]],
        ["Di manakah semua manusia dihimpunkan selepas dibangkitkan?", "Where is everyone gathered after being raised?", ["Padang Mahsyar", "Alam barzakh", "Masjidil Haram", "Gua Hira'"]],
        ["Apakah maksud hisab?", "What does hisab mean?", ["Pengiraan amalan // the reckoning of deeds", "Timbangan amalan // the scale for deeds", "Titian // a bridge", "Tiupan sangkakala // the trumpet blast"]],
        ["Apakah maksud mizan?", "What does mizan mean?", ["Timbangan amalan // the scale for deeds", "Pengiraan amalan // the reckoning of deeds", "Alam kubur // the life of the grave", "Pintu syurga // the gate of Paradise"]],
        ["Apakah sirat?", "What is the Sirat?", ["Titian yang merentangi neraka // the bridge over Hell", "Sungai di syurga // a river in Paradise", "Buku catatan amalan // the book of deeds", "Nama malaikat // the name of an angel"]],
        ["Siapakah yang akan masuk syurga?", "Who will enter Paradise?", ["Orang yang beriman dan beramal soleh // those who believe and do good", "Orang yang kaya // those who are rich", "Orang yang kuat // those who are strong", "Orang yang terkenal // those who are famous"]],
        ["Malaikat manakah yang menyoal manusia di dalam kubur?", "Which angels question people in the grave?", ["Munkar dan Nakir", "Raqib dan Atid", "Jibril dan Mikail", "Ridhwan dan Malik"]],
        ["Malaikat manakah yang menjaga syurga?", "Which angel guards Paradise?", ["Ridhwan", "Malik", "Izrail", "Israfil"]],
        ["Malaikat manakah yang menjaga neraka?", "Which angel guards Hell?", ["Malik", "Ridhwan", "Jibril", "Mikail"]],
        ["Kita percaya adanya Hari Akhirat. Oleh itu, kita mesti ...", "We believe in the Last Day. So we must ...", ["Banyak berbuat amal baik // do many good deeds", "Berbuat sesuka hati // do whatever we like", "Tidak perlu solat // not bother to pray", "Berasa sedih selalu // always feel sad"]]
      ],
      pairs: {
        title: "Istilah Hari Akhirat // Words about the Hereafter", ask: "Padankan istilah dengan maksudnya.", en: "Match the word to its meaning.",
        items: [["Alam barzakh", "Alam kubur // the life of the grave"], ["Padang Mahsyar", "Tempat manusia dihimpunkan // where people are gathered"], ["Hisab", "Pengiraan amalan // the reckoning of deeds"], ["Mizan", "Timbangan amalan // the scale for deeds"], ["Sirat", "Titian merentangi neraka // the bridge over Hell"], ["Syurga", "Balasan orang beriman // the reward of believers"]]
      },
      order: [
        ["Susun peristiwa Hari Akhirat mengikut urutan.", "Put the events of the Hereafter in order.", ["Alam barzakh // the life of the grave", "Tiupan sangkakala // the trumpet is blown", "Berhimpun di Padang Mahsyar // gathering on the Plain of Mahsyar", "Hisab dan mizan // the reckoning and the scale", "Melalui sirat // crossing the Sirat", "Syurga atau neraka // Paradise or Hell"]]
      ]
    },
    {
      id: "bersuci", t: "Ibadah: Najis, Hadas & Tayammum", en: "Worship: impurities & purification", icon: "💧",
      notes: [
        ["Najis ialah benda kotor yang menghalang sahnya solat. Najis ada tiga jenis.", "Najis is impurity that stops a prayer from being valid. There are three kinds.", "🚿"],
        ["Najis mukhaffafah (ringan): air kencing bayi lelaki bawah dua tahun yang hanya minum susu ibu. Cara menyucikan: renjis air.", "Light najis (mukhaffafah): the urine of a baby boy under two who has only had his mother's milk. To clean: sprinkle water on it.", "👶"],
        ["Najis mutawassitah (pertengahan): darah, nanah, muntah, tahi dan air kencing. Cara menyucikan: basuh hingga hilang warna, bau dan rasa.", "Medium najis (mutawassitah): blood, pus, vomit, faeces and urine. To clean: wash until the colour, smell and taste are gone.", "🧼"],
        ["Najis mughallazah (berat): anjing dan babi. Cara menyucikan: basuh tujuh kali, satu daripadanya dengan air bercampur tanah.", "Heavy najis (mughallazah): dogs and pigs. To clean: wash seven times, one of them with water mixed with earth.", "7️⃣"],
        ["Hadas kecil diangkat dengan wuduk. Hadas besar diangkat dengan mandi wajib.", "Minor hadas is removed by wuduk. Major hadas is removed by the obligatory bath.", "🛁"],
        ["Tayammum menggantikan wuduk apabila tiada air atau sakit. Sapu muka dan dua tangan hingga siku dengan debu tanah yang suci.", "Tayammum replaces wuduk when there is no water or when ill. Wipe the face and both arms to the elbows with clean dust.", "🏜️"]
      ],
      q: [
        ["Berapakah jenis najis?", "How many kinds of najis are there?", ["Tiga // three", "Dua // two", "Empat // four", "Lima // five"]],
        ["Najis ringan dipanggil najis ...", "Light najis is called najis ...", ["Mukhaffafah", "Mutawassitah", "Mughallazah", "Hadas"]],
        ["Najis pertengahan dipanggil najis ...", "Medium najis is called najis ...", ["Mutawassitah", "Mukhaffafah", "Mughallazah", "Tayammum"]],
        ["Najis berat dipanggil najis ...", "Heavy najis is called najis ...", ["Mughallazah", "Mukhaffafah", "Mutawassitah", "Istinjak"]],
        ["Darah dan muntah ialah najis jenis apa?", "What kind of najis are blood and vomit?", ["Mutawassitah", "Mukhaffafah", "Mughallazah", "Bukan najis // not najis"]],
        ["Bagaimanakah cara menyucikan najis mukhaffafah?", "How is light najis cleaned?", ["Renjis air padanya // sprinkle water on it", "Basuh tujuh kali // wash seven times", "Sapu dengan kain kering // wipe with a dry cloth", "Jemur di bawah matahari // dry it in the sun"]],
        ["Berapa kali basuhan untuk menyucikan najis mughallazah?", "How many washes are needed to clean heavy najis?", ["Tujuh kali // seven times", "Sekali // once", "Tiga kali // three times", "Lima kali // five times"], "Satu daripada tujuh basuhan itu dengan air bercampur tanah. // One of the seven washes is with water mixed with earth."],
        ["Bagaimanakah cara menyucikan najis mutawassitah?", "How is medium najis cleaned?", ["Basuh hingga hilang warna, bau dan rasa // wash until the colour, smell and taste are gone", "Renjis air sahaja // just sprinkle water", "Basuh tujuh kali dengan air tanah // wash seven times with earth and water", "Biarkan kering // leave it to dry"]],
        ["Hadas kecil diangkat dengan ...", "Minor hadas is removed by ...", ["Wuduk", "Mandi wajib // the obligatory bath", "Berpuasa // fasting", "Tidur // sleeping"]],
        ["Bilakah kita boleh bertayammum?", "When may we perform tayammum?", ["Apabila tiada air atau sakit // when there is no water or we are ill", "Apabila malas mengambil wuduk // when we are too lazy to take wuduk", "Pada waktu malam sahaja // only at night", "Setiap kali hendak solat // every time we pray"]],
        ["Apakah yang digunakan untuk bertayammum?", "What is used for tayammum?", ["Debu tanah yang suci // clean dust", "Air laut // sea water", "Daun kering // dry leaves", "Kain basah // a wet cloth"]],
        ["Anggota manakah yang disapu semasa tayammum?", "Which parts are wiped in tayammum?", ["Muka dan dua tangan hingga siku // the face and both arms to the elbows", "Kepala dan kaki // the head and feet", "Muka sahaja // the face only", "Seluruh badan // the whole body"]]
      ],
      pairs: {
        title: "Jenis najis // Kinds of najis", ask: "Padankan jenis najis dengan keterangannya.", en: "Match the kind of najis to its description.",
        items: [["Mukhaffafah", "Najis ringan // light najis"], ["Mutawassitah", "Najis pertengahan // medium najis"], ["Mughallazah", "Najis berat // heavy najis"]]
      },
      sort: {
        title: "Mutawassitah atau mughallazah? // Medium or heavy najis?", ask: "Ini najis jenis apa?", en: "What kind of najis is this?",
        cats: ["Mutawassitah", "Mughallazah"],
        items: [["Darah // blood", 0], ["Nanah // pus", 0], ["Muntah // vomit", 0], ["Air kencing // urine", 0], ["Tahi // faeces", 0], ["Anjing // dog", 1], ["Babi // pig", 1]]
      }
    },
    {
      id: "solat", t: "Ibadah: Rukun Solat", en: "Worship: the pillars of prayer", icon: "🧎",
      notes: [
        ["Rukun solat ialah perkara yang WAJIB dibuat di dalam solat. Jika tertinggal satu, solat tidak sah. Rukun solat ada 13.", "The pillars of prayer are the things that MUST be done in the prayer. If one is left out, the prayer is not valid. There are 13.", "🔢"],
        ["Rukun solat: niat, berdiri tegak, takbiratul ihram, membaca al-Fatihah, rukuk, iktidal, sujud, duduk antara dua sujud, duduk tahiyat akhir, membaca tahiyat akhir, selawat, salam, tertib.", "The pillars: intention, standing, the opening takbir, reciting al-Fatihah, bowing, standing up again, prostrating, sitting between the two prostrations, the final sitting, the final tashahhud, blessings on the Prophet, the salam, and doing them in order.", "📿"],
        ["Bilangan rakaat: Subuh 2, Zuhur 4, Asar 4, Maghrib 3, Isyak 4. Jumlahnya 17 rakaat sehari.", "Number of rak'ahs: Subuh 2, Zuhur 4, Asar 4, Maghrib 3, Isyak 4. That is 17 rak'ahs a day.", "🕌"],
        ["Perkara yang membatalkan solat: bercakap dengan sengaja, makan atau minum, ketawa, banyak bergerak, berhadas dan berpaling daripada kiblat.", "Things that break the prayer: speaking on purpose, eating or drinking, laughing, moving a lot, losing wuduk and turning away from the qiblah.", "⛔"],
        ["Azan menandakan masuknya waktu solat. Iqamah dilaungkan sebelum solat berjemaah dimulakan.", "The azan announces that the prayer time has begun. The iqamah is called just before a congregational prayer starts.", "📢"]
      ],
      q: [
        ["Berapakah bilangan rukun solat?", "How many pillars of prayer are there?", ["13", "5", "6", "17"]],
        ["Apakah rukun solat yang pertama?", "What is the first pillar of prayer?", ["Niat // intention", "Salam // the salam", "Rukuk // bowing", "Sujud // prostrating"]],
        ["Apakah rukun solat yang terakhir?", "What is the last pillar of prayer?", ["Tertib // doing them in order", "Niat // intention", "Salam // the salam", "Takbiratul ihram // the opening takbir"]],
        ["Apakah yang diucapkan semasa takbiratul ihram?", "What is said in the opening takbir?", ["Allahu Akbar", "Alhamdulillah", "Subhanallah", "Assalamualaikum"]],
        ["Surah manakah yang wajib dibaca dalam setiap rakaat?", "Which surah must be recited in every rak'ah?", ["Al-Fatihah", "Al-Ikhlas", "An-Nas", "Al-Falaq"]],
        ["Berapakah rakaat solat Subuh?", "How many rak'ahs are in the Subuh prayer?", ["2", "3", "4", "1"]],
        ["Berapakah rakaat solat Maghrib?", "How many rak'ahs are in the Maghrib prayer?", ["3", "2", "4", "5"]],
        ["Solat manakah mempunyai 4 rakaat?", "Which prayers have 4 rak'ahs?", ["Zuhur, Asar dan Isyak", "Subuh dan Maghrib", "Subuh sahaja // Subuh only", "Maghrib sahaja // Maghrib only"]],
        ["Berapakah jumlah rakaat solat fardu sehari semalam?", "How many rak'ahs of obligatory prayer are there in a day and night?", ["17", "13", "5", "20"]],
        ["Yang manakah membatalkan solat?", "Which of these breaks the prayer?", ["Bercakap dengan sengaja // speaking on purpose", "Membaca al-Fatihah // reciting al-Fatihah", "Rukuk // bowing", "Memberi salam di akhir solat // giving the salam at the end"]],
        ["Ali ketawa semasa solat. Apakah hukum solatnya?", "Ali laughs during his prayer. What happens to his prayer?", ["Batal // it is broken", "Sah // it is valid", "Sunat // it is recommended", "Lebih baik // it is better"]],
        ["Apakah yang dilaungkan untuk menandakan masuknya waktu solat?", "What is called out to announce that a prayer time has begun?", ["Azan", "Iqamah", "Takbir raya // the Eid takbir", "Selawat // blessings on the Prophet"]],
        ["Apakah maksud tertib?", "What does tertib mean?", ["Mengikut urutan // following the right order", "Membaca dengan kuat // reciting loudly", "Bergerak dengan cepat // moving quickly", "Menutup mata // closing the eyes"]]
      ],
      pairs: {
        title: "Solat dan bilangan rakaat // Prayers and their rak'ahs", ask: "Padankan solat dengan bilangan rakaatnya.", en: "Match the prayer to its number of rak'ahs.",
        items: [["Subuh", "2 rakaat // 2 rak'ahs"], ["Maghrib", "3 rakaat // 3 rak'ahs"], ["Zuhur", "4 rakaat // 4 rak'ahs"]]
      },
      sort: {
        title: "Batal atau tidak? // Does it break the prayer?", ask: "Adakah perkara ini membatalkan solat?", en: "Does this break the prayer?",
        cats: ["Membatalkan solat // breaks the prayer", "Tidak membatalkan solat // does not break the prayer"],
        items: [["Bercakap dengan sengaja // speaking on purpose", 0], ["Makan dan minum // eating and drinking", 0], ["Ketawa // laughing", 0], ["Berpaling daripada kiblat // turning away from the qiblah", 0], ["Terkentut // passing wind", 0], ["Membaca al-Fatihah // reciting al-Fatihah", 1], ["Rukuk // bowing", 1], ["Sujud // prostrating", 1], ["Membaca tahiyat // reciting the tashahhud", 1], ["Memberi salam // giving the salam", 1]]
      },
      order: [
        ["Susun perbuatan dalam satu rakaat.", "Put the actions of one rak'ah in order.", ["Niat dan takbiratul ihram // intention and the opening takbir", "Membaca al-Fatihah // reciting al-Fatihah", "Rukuk // bowing", "Iktidal // standing up again", "Sujud // prostrating", "Duduk antara dua sujud // sitting between the two prostrations", "Sujud kali kedua // the second prostration"]],
        ["Susun solat fardu mengikut waktu, bermula dengan Subuh.", "Put the obligatory prayers in order of time, starting with Subuh.", ["Subuh", "Zuhur", "Asar", "Maghrib", "Isyak"]]
      ]
    },
    {
      id: "puasa", t: "Ibadah: Puasa", en: "Worship: fasting", icon: "🌙",
      notes: [
        ["Puasa ialah menahan diri daripada makan, minum dan perkara yang membatalkannya dari terbit fajar hingga terbenam matahari.", "Fasting is holding back from eating, drinking and anything that breaks the fast, from dawn until sunset.", "🌅"],
        ["Puasa pada bulan Ramadan ialah Rukun Islam yang ketiga.", "Fasting in the month of Ramadan is the third pillar of Islam.", "3️⃣"],
        ["Rukun puasa ada dua: niat dan menahan diri daripada perkara yang membatalkan puasa.", "Fasting has two pillars: the intention, and holding back from the things that break the fast.", "✌️"],
        ["Perkara yang membatalkan puasa: makan dan minum dengan sengaja, dan muntah dengan sengaja.", "Things that break the fast: eating and drinking on purpose, and making yourself vomit.", "⛔"],
        ["Makan atau minum kerana terlupa TIDAK membatalkan puasa.", "Eating or drinking by forgetting does NOT break the fast.", "🙂"],
        ["Amalan sunat: bersahur, melewatkan sahur, menyegerakan berbuka, berbuka dengan kurma dan berdoa.", "Recommended practices: eating sahur, having it late, breaking the fast promptly, breaking it with dates, and making a prayer.", "🌴"]
      ],
      q: [
        ["Puasa pada bulan Ramadan ialah Rukun Islam yang keberapa?", "Which pillar of Islam is fasting in Ramadan?", ["Ketiga // the third", "Pertama // the first", "Kedua // the second", "Kelima // the fifth"]],
        ["Pada bulan apakah umat Islam wajib berpuasa?", "In which month must Muslims fast?", ["Ramadan", "Syawal", "Muharam", "Zulhijah"]],
        ["Bilakah waktu puasa bermula?", "When does the fast begin?", ["Terbit fajar // dawn", "Terbenam matahari // sunset", "Tengah hari // midday", "Tengah malam // midnight"]],
        ["Bilakah waktu berbuka puasa?", "When is the fast broken?", ["Terbenam matahari (waktu Maghrib) // sunset (Maghrib time)", "Terbit fajar // dawn", "Waktu Zuhur // Zuhur time", "Waktu Asar // Asar time"]],
        ["Berapakah rukun puasa?", "How many pillars does fasting have?", ["Dua // two", "Tiga // three", "Lima // five", "Enam // six"]],
        ["Yang manakah membatalkan puasa?", "Which of these breaks the fast?", ["Makan dengan sengaja // eating on purpose", "Tidur siang // sleeping in the daytime", "Mandi // having a bath", "Membaca al-Quran // reading the Quran"]],
        ["Aiman terlupa lalu minum air semasa berpuasa. Apakah hukum puasanya?", "Aiman forgot and drank water while fasting. What happens to his fast?", ["Tidak batal // it is not broken", "Batal // it is broken", "Mesti berhenti berpuasa // he must stop fasting", "Mesti berpuasa dua hari // he must fast two days"], "Makan atau minum kerana terlupa tidak membatalkan puasa. // Eating or drinking by forgetting does not break the fast."],
        ["Apakah nama makan sebelum terbit fajar?", "What is the meal before dawn called?", ["Sahur", "Berbuka // breaking the fast", "Kenduri // a feast", "Jamuan // a party"]],
        ["Apakah makanan yang sunat dimakan ketika berbuka puasa?", "Which food is recommended for breaking the fast?", ["Kurma // dates", "Gula-gula // sweets", "Keropok // crackers", "Aiskrim // ice cream"]],
        ["Apakah solat sunat yang dilakukan pada malam bulan Ramadan?", "Which recommended prayer is performed on the nights of Ramadan?", ["Solat Tarawih", "Solat Jumaat", "Solat Subuh", "Solat Jenazah"]],
        ["Hari raya apakah yang disambut selepas bulan Ramadan?", "Which festival is celebrated after Ramadan?", ["Hari Raya Aidilfitri", "Hari Raya Aidiladha", "Maulidur Rasul", "Awal Muharam"]],
        ["Apakah hikmah berpuasa?", "What is one wisdom of fasting?", ["Merasai kesusahan orang miskin // feeling the hardship of the poor", "Supaya badan lemah // to make the body weak", "Supaya boleh tidur lama // to be able to sleep a long time", "Supaya tidak perlu belajar // to avoid studying"]]
      ],
      sort: {
        title: "Batal puasa atau tidak? // Does it break the fast?", ask: "Adakah perkara ini membatalkan puasa?", en: "Does this break the fast?",
        cats: ["Membatalkan puasa // breaks the fast", "Tidak membatalkan puasa // does not break the fast"],
        items: [["Makan dengan sengaja // eating on purpose", 0], ["Minum dengan sengaja // drinking on purpose", 0], ["Muntah dengan sengaja // making yourself vomit", 0], ["Makan kerana terlupa // eating by forgetting", 1], ["Mandi // having a bath", 1], ["Tidur // sleeping", 1], ["Membaca al-Quran // reading the Quran", 1]]
      },
      order: [
        ["Susun kegiatan pada hari berpuasa.", "Put the events of a fasting day in order.", ["Bersahur // eating sahur", "Terbit fajar dan solat Subuh // dawn and the Subuh prayer", "Menahan diri sepanjang siang // fasting through the day", "Terbenam matahari // sunset", "Berbuka puasa // breaking the fast", "Solat Tarawih // the Tarawih prayer"]]
      ]
    },
    {
      id: "sirah", t: "Sirah: Wahyu, Dakwah & Hijrah", en: "The Prophet's life: revelation, the call & the Hijrah", icon: "🕋",
      notes: [
        ["Nabi Muhammad SAW digelar al-Amin, bermaksud orang yang dipercayai.", "Prophet Muhammad was called al-Amin, meaning the trustworthy one.", "🤝"],
        ["Baginda menerima wahyu pertama di Gua Hira' ketika berumur 40 tahun. Wahyu itu dibawa oleh Malaikat Jibril.", "He received the first revelation in the Cave of Hira' at the age of 40. It was brought by the angel Jibril.", "⛰️"],
        ["Wahyu pertama ialah Surah al-'Alaq ayat 1 hingga 5, bermula dengan “Iqra'” yang bermaksud “Bacalah”.", "The first revelation was Surah al-'Alaq verses 1 to 5, beginning with “Iqra'”, which means “Read”.", "📖"],
        ["Pada mulanya baginda berdakwah secara rahsia selama tiga tahun. Kemudian baginda berdakwah secara terbuka.", "At first he called people to Islam in secret for three years. After that he called them openly.", "🗣️"],
        ["Orang yang awal memeluk Islam: Khadijah (isteri baginda), Abu Bakar as-Siddiq, Ali bin Abi Talib dan Zaid bin Harithah.", "The earliest Muslims: Khadijah (his wife), Abu Bakar as-Siddiq, Ali bin Abi Talib and Zaid bin Harithah.", "🌟"],
        ["Hijrah ialah perpindahan Nabi dari Makkah ke Madinah. Baginda ditemani oleh Abu Bakar as-Siddiq.", "The Hijrah was the Prophet's move from Makkah to Madinah. Abu Bakar as-Siddiq went with him.", "🐪"],
        ["Muhajirin ialah orang Islam Makkah yang berhijrah. Ansar ialah orang Islam Madinah yang menolong mereka.", "The Muhajirin were the Muslims of Makkah who emigrated. The Ansar were the Muslims of Madinah who helped them.", "🤲"]
      ],
      q: [
        ["Apakah maksud gelaran al-Amin?", "What does the title al-Amin mean?", ["Orang yang dipercayai // the trustworthy one", "Orang yang kaya // the rich one", "Orang yang kuat // the strong one", "Orang yang berani // the brave one"]],
        ["Di manakah Nabi Muhammad SAW menerima wahyu pertama?", "Where did Prophet Muhammad receive the first revelation?", ["Gua Hira'", "Gua Thur", "Masjid Nabawi", "Bukit Safa"]],
        ["Berapakah umur baginda ketika menerima wahyu pertama?", "How old was he when he received the first revelation?", ["40 tahun // 40 years", "25 tahun // 25 years", "63 tahun // 63 years", "12 tahun // 12 years"]],
        ["Siapakah malaikat yang membawa wahyu?", "Which angel brought the revelation?", ["Jibril", "Mikail", "Israfil", "Izrail"]],
        ["Apakah maksud “Iqra'”?", "What does “Iqra'” mean?", ["Bacalah // Read", "Tulislah // Write", "Dengarlah // Listen", "Pergilah // Go"]],
        ["Wahyu pertama ialah ayat 1 hingga 5 daripada surah apa?", "The first revelation was verses 1 to 5 of which surah?", ["Al-'Alaq", "Al-Fatihah", "Al-Ikhlas", "An-Nas"]],
        ["Berapa lamakah dakwah secara rahsia?", "How long did the secret call to Islam last?", ["Tiga tahun // three years", "Satu tahun // one year", "Sepuluh tahun // ten years", "Tiga belas tahun // thirteen years"]],
        ["Siapakah wanita pertama yang memeluk Islam?", "Who was the first woman to embrace Islam?", ["Khadijah binti Khuwailid", "Aminah binti Wahab", "Fatimah az-Zahra", "Halimatus Saadiah"]],
        ["Siapakah kanak-kanak pertama yang memeluk Islam?", "Who was the first child to embrace Islam?", ["Ali bin Abi Talib", "Abu Bakar as-Siddiq", "Zaid bin Harithah", "Bilal bin Rabah"]],
        ["Apakah maksud hijrah Nabi Muhammad SAW?", "What was the Hijrah of Prophet Muhammad?", ["Perpindahan dari Makkah ke Madinah // the move from Makkah to Madinah", "Perjalanan ke langit // a journey to the heavens", "Peperangan di Badar // the battle at Badar", "Lawatan ke Syam // a visit to Syam"]],
        ["Siapakah yang menemani Nabi semasa hijrah?", "Who went with the Prophet on the Hijrah?", ["Abu Bakar as-Siddiq", "Ali bin Abi Talib", "Umar al-Khattab", "Bilal bin Rabah"]],
        ["Di gua manakah Nabi dan Abu Bakar bersembunyi semasa hijrah?", "In which cave did the Prophet and Abu Bakar hide during the Hijrah?", ["Gua Thur", "Gua Hira'", "Gua Kahfi", "Gua Uhud"]],
        ["Siapakah kaum Ansar?", "Who were the Ansar?", ["Orang Islam Madinah yang menolong // the Muslims of Madinah who helped", "Orang Islam Makkah yang berhijrah // the Muslims of Makkah who emigrated", "Kaum Quraisy // the Quraisy", "Tentera Rom // the Roman army"]],
        ["Apakah masjid pertama yang dibina oleh Nabi Muhammad SAW?", "What was the first mosque built by Prophet Muhammad?", ["Masjid Quba'", "Masjidil Haram", "Masjidil Aqsa", "Masjid Negara"]]
      ],
      pairs: {
        title: "Tokoh dan peristiwa // People and events", ask: "Padankan nama dengan keterangannya.", en: "Match the name to its description.",
        items: [["Gua Hira'", "Tempat menerima wahyu pertama // where the first revelation came"], ["Gua Thur", "Tempat bersembunyi semasa hijrah // the hiding place during the Hijrah"], ["Khadijah", "Wanita pertama memeluk Islam // the first woman to embrace Islam"], ["Ali bin Abi Talib", "Kanak-kanak pertama memeluk Islam // the first child to embrace Islam"], ["Abu Bakar as-Siddiq", "Menemani Nabi semasa hijrah // went with the Prophet on the Hijrah"], ["Muhajirin", "Orang Makkah yang berhijrah // the people of Makkah who emigrated"], ["Ansar", "Orang Madinah yang menolong // the people of Madinah who helped"], ["Masjid Quba'", "Masjid pertama yang dibina // the first mosque built"]]
      },
      order: [
        ["Susun peristiwa dalam hidup Nabi Muhammad SAW.", "Put these events in the Prophet's life in order.", ["Digelar al-Amin // called al-Amin", "Menerima wahyu pertama di Gua Hira' // received the first revelation in the Cave of Hira'", "Berdakwah secara rahsia // called people to Islam in secret", "Berdakwah secara terbuka // called people to Islam openly", "Berhijrah ke Madinah // emigrated to Madinah"]]
      ]
    },
    {
      id: "adab", t: "Adab & Akhlak", en: "Manners & good character", icon: "🤲",
      notes: [
        ["Adab terhadap ibu bapa: taat, bercakap dengan lemah lembut, menolong dan mendoakan mereka.", "Manners towards parents: obey them, speak gently, help them and pray for them.", "👨‍👩‍👧"],
        ["Adab terhadap guru: menghormati, mendengar ajaran dan mengucapkan terima kasih.", "Manners towards teachers: respect them, listen to their teaching and thank them.", "👩‍🏫"],
        ["Beri salam: “Assalamualaikum”. Menjawab salam hukumnya wajib: “Waalaikumussalam”.", "Give the greeting: “Assalamualaikum”. Answering it is obligatory: “Waalaikumussalam”.", "👋"],
        ["Apabila bersin, ucapkan “Alhamdulillah”. Orang yang mendengar menjawab “Yarhamukallah”.", "When you sneeze, say “Alhamdulillah”. Whoever hears it replies “Yarhamukallah”.", "🤧"],
        ["Masuk tandas dengan kaki kiri dan keluar dengan kaki kanan. Masuk masjid dengan kaki kanan.", "Enter the toilet with the left foot and leave with the right. Enter the mosque with the right foot.", "🦶"],
        ["Adab membaca al-Quran: berwuduk, menghadap kiblat, membaca A'uzubillah dan Bismillah, dan membaca dengan tartil.", "Manners of reading the Quran: have wuduk, face the qiblah, say A'uzubillah and Bismillah, and read carefully and clearly.", "📖"]
      ],
      q: [
        ["Apakah hukum menjawab salam?", "What is the ruling on answering the greeting of salam?", ["Wajib // obligatory", "Sunat // recommended", "Makruh // disliked", "Haram // forbidden"]],
        ["Apakah yang diucapkan selepas bersin?", "What do we say after sneezing?", ["Alhamdulillah", "Astaghfirullah", "Subhanallah", "Insya-Allah"]],
        ["Apakah jawapan kepada orang yang bersin dan mengucapkan Alhamdulillah?", "What do we reply to someone who sneezes and says Alhamdulillah?", ["Yarhamukallah", "Waalaikumussalam", "Bismillah", "Amin"]],
        ["Kaki manakah yang didahulukan ketika masuk ke tandas?", "Which foot goes first when entering the toilet?", ["Kaki kiri // the left foot", "Kaki kanan // the right foot", "Kedua-dua kaki // both feet", "Mana-mana kaki // either foot"]],
        ["Kaki manakah yang didahulukan ketika masuk ke masjid?", "Which foot goes first when entering the mosque?", ["Kaki kanan // the right foot", "Kaki kiri // the left foot", "Kedua-dua kaki // both feet", "Mana-mana kaki // either foot"]],
        ["Ibu memanggil kamu semasa kamu bermain. Apakah yang patut kamu buat?", "Your mother calls you while you are playing. What should you do?", ["Segera menyahut dan pergi kepadanya // answer at once and go to her", "Pura-pura tidak dengar // pretend not to hear", "Menjerit “Nanti!” // shout “Later!”", "Terus bermain // carry on playing"]],
        ["Bagaimanakah cara bercakap dengan ibu bapa?", "How should we speak to our parents?", ["Dengan lemah lembut // gently", "Dengan suara yang tinggi // in a raised voice", "Dengan kasar // rudely", "Sambil membelakangi mereka // with our back to them"]],
        ["Apakah yang dibaca sebelum mula membaca al-Quran?", "What do we say before starting to read the Quran?", ["A'uzubillah dan Bismillah", "Alhamdulillah sahaja // Alhamdulillah only", "Allahu Akbar", "Amin"]],
        ["Guru sedang mengajar. Apakah adab yang betul?", "The teacher is teaching. What is the right manner?", ["Mendengar dengan teliti // listening carefully", "Berbual dengan kawan // chatting with a friend", "Tidur // sleeping", "Bermain di belakang kelas // playing at the back of the class"]],
        ["Apakah yang dibaca sebelum makan?", "What do we say before eating?", ["Bismillah", "Alhamdulillah", "Astaghfirullah", "Subhanallah"]],
        ["Jiran kamu sakit. Apakah yang patut kamu buat?", "Your neighbour is ill. What should you do?", ["Menziarahinya dan mendoakannya // visit them and pray for them", "Membuat bising di depan rumahnya // make noise outside their house", "Tidak ambil peduli // take no notice", "Mentertawakannya // laugh at them"]],
        ["Tangan manakah yang digunakan untuk makan dan minum?", "Which hand do we eat and drink with?", ["Tangan kanan // the right hand", "Tangan kiri // the left hand", "Kedua-dua tangan // both hands", "Mana-mana tangan // either hand"]]
      ],
      pairs: {
        title: "Ucapan yang baik // Good words to say", ask: "Padankan keadaan dengan ucapannya.", en: "Match the situation to what we say.",
        items: [["Bertemu kawan // meeting a friend", "Assalamualaikum"], ["Menjawab salam // answering the greeting", "Waalaikumussalam"], ["Selepas bersin // after sneezing", "Alhamdulillah"], ["Sebelum makan // before eating", "Bismillah"], ["Berjanji // making a promise", "Insya-Allah"], ["Melihat sesuatu yang indah // seeing something beautiful", "Subhanallah"], ["Tersilap atau berdosa // making a mistake or sinning", "Astaghfirullah"]]
      },
      sort: {
        title: "Adab yang baik atau buruk? // Good or bad manners?", ask: "Adakah ini adab yang baik?", en: "Is this good manners?",
        cats: ["Adab yang baik // good manners", "Adab yang buruk // bad manners"],
        items: [["Memberi salam // giving the greeting of salam", 0], ["Menolong ibu bapa // helping parents", 0], ["Mengucapkan terima kasih // saying thank you", 0], ["Menziarahi jiran yang sakit // visiting a sick neighbour", 0], ["Makan dengan tangan kanan // eating with the right hand", 0], ["Meninggikan suara kepada ibu // raising your voice at your mother", 1], ["Mengejek kawan // making fun of a friend", 1], ["Makan sambil berjalan // eating while walking", 1], ["Membuat bising di masjid // making noise in the mosque", 1], ["Membazir makanan // wasting food", 1]]
      }
    },
    {
      id: "tajwid", t: "Al-Quran: Asas Tajwid", en: "The Quran: basic tajwid", icon: "📖",
      notes: [
        ["Tajwid ialah ilmu membaca al-Quran dengan betul.", "Tajwid is the knowledge of reading the Quran correctly.", "✅"],
        ["Tanwin ialah baris dua. Bunyinya “an”, “in” dan “un”.", "Tanwin is the doubled vowel mark. It sounds like “an”, “in” and “un”.", "✌️"],
        ["Sukun ialah tanda mati. Syaddah (sabdu) menunjukkan huruf itu dibaca dengan tekanan.", "Sukun is the sign for a letter with no vowel. Syaddah (sabdu) shows the letter is read with stress.", "⭕"],
        ["Mad Asli dibaca panjang dua harakat. Huruf mad ada tiga: alif, wau dan ya.", "Mad Asli is read long, for two beats. There are three mad letters: alif, wau and ya.", "➡️"],
        ["Qalqalah ialah bunyi melantun. Hurufnya lima: ق ط ب ج د", "Qalqalah is a bouncing sound. It has five letters: ق ط ب ج د", "🏀"],
        ["Al-Quran mempunyai 114 surah dan 30 juzuk. Surah pertama ialah al-Fatihah dan surah terakhir ialah an-Nas.", "The Quran has 114 surahs and 30 juz. The first surah is al-Fatihah and the last is an-Nas.", "📚"]
      ],
      q: [
        ["Apakah maksud tajwid?", "What is tajwid?", ["Ilmu membaca al-Quran dengan betul // the knowledge of reading the Quran correctly", "Ilmu menulis Jawi // the knowledge of writing Jawi", "Ilmu mengira // the knowledge of counting", "Ilmu bercerita // the knowledge of storytelling"]],
        ["Tanwin ialah baris ...", "Tanwin is the ... vowel mark.", ["Dua // doubled", "Satu // single", "Mati // silent", "Panjang // long"]],
        ["Apakah bunyi tanwin?", "How does tanwin sound?", ["an, in, un", "a, i, u", "aa, ii, uu", "ba, bi, bu"]],
        ["Apakah nama tanda mati?", "What is the sign for a letter with no vowel called?", ["Sukun", "Syaddah", "Tanwin", "Mad"]],
        ["Apakah nama lain bagi syaddah?", "What is another name for syaddah?", ["Sabdu", "Sukun", "Fathah", "Kasrah"]],
        ["Mad Asli dibaca berapa harakat?", "How many beats long is Mad Asli?", ["Dua // two", "Satu // one", "Empat // four", "Enam // six"]],
        ["Yang manakah huruf mad?", "Which are the mad letters?", ["Alif, wau, ya", "Ba, ta, tha", "Qaf, tho, ba", "Nun, mim, lam"]],
        ["Berapakah bilangan huruf qalqalah?", "How many qalqalah letters are there?", ["Lima // five", "Tiga // three", "Enam // six", "Sepuluh // ten"]],
        ["Yang manakah huruf qalqalah?", "Which one is a qalqalah letter?", ["ق", "م", "ل", "س"]],
        ["Apakah maksud qalqalah?", "What does qalqalah mean?", ["Bunyi melantun // a bouncing sound", "Bunyi panjang // a long sound", "Bunyi dengung // a humming sound", "Berhenti membaca // stopping the reading"]],
        ["Berapakah bilangan surah dalam al-Quran?", "How many surahs are in the Quran?", ["114", "30", "99", "25"]],
        ["Berapakah bilangan juzuk dalam al-Quran?", "How many juz are in the Quran?", ["30", "114", "7", "60"]],
        ["Apakah surah yang pertama dalam al-Quran?", "What is the first surah in the Quran?", ["Al-Fatihah", "Al-Baqarah", "An-Nas", "Al-Ikhlas"]],
        ["Apakah surah yang terakhir dalam al-Quran?", "What is the last surah in the Quran?", ["An-Nas", "Al-Falaq", "Al-Fatihah", "Al-Kauthar"]]
      ],
      pairs: [
        {
          title: "Istilah tajwid // Tajwid words", ask: "Padankan istilah dengan maksudnya.", en: "Match the word to its meaning.",
          items: [["Tanwin", "Baris dua // doubled vowel mark"], ["Sukun", "Tanda mati // no vowel"], ["Syaddah", "Tanda sabdu // stress mark"], ["Mad Asli", "Panjang dua harakat // two beats long"], ["Qalqalah", "Bunyi melantun // bouncing sound"]]
        },
        {
          title: "Nama surah dan maksudnya // Surah names and their meanings", ask: "Padankan nama surah dengan maksudnya.", en: "Match the surah name to its meaning.",
          items: [["Al-Fatihah", "Pembukaan // The Opening"], ["An-Nas", "Manusia // Mankind"], ["Al-Falaq", "Waktu Subuh // Daybreak"], ["Al-Fil", "Gajah // The Elephant"], ["An-Nasr", "Pertolongan // Help"], ["Al-'Asr", "Masa // Time"], ["Al-Kafirun", "Orang-orang kafir // The Disbelievers"], ["Al-Qadr", "Kemuliaan // The Night of Glory"]]
        }
      ],
      sort: {
        title: "Huruf qalqalah atau bukan? // Qalqalah letter or not?", ask: "Adakah ini huruf qalqalah?", en: "Is this a qalqalah letter?",
        cats: ["Huruf qalqalah // qalqalah letter", "Bukan huruf qalqalah // not a qalqalah letter"],
        items: [["ق", 0], ["ط", 0], ["ب", 0], ["ج", 0], ["د", 0], ["م", 1], ["ن", 1], ["ل", 1], ["س", 1], ["ر", 1]]
      }
    },
    {
      id: "jawi", t: "Jawi: Perkataan", en: "Jawi: words", icon: "✍️",
      notes: [
        ["Tulisan Jawi ditulis dan dibaca dari kanan ke kiri.", "Jawi is written and read from right to left.", "⬅️"],
        ["Huruf vokal Jawi: alif (ا) untuk bunyi a, wau (و) untuk bunyi o dan u, ya (ي) untuk bunyi i dan e.", "Jawi vowel letters: alif (ا) for a, wau (و) for o and u, ya (ي) for i and e.", "🔤"],
        ["Enam huruf ini tidak bersambung dengan huruf selepasnya: ا د ذ ر ز و", "These six letters do not join to the letter after them: ا د ذ ر ز و", "✂️"],
        ["Bunyi “a” di hujung perkataan biasanya tidak ditulis dengan alif. Contoh: mata – مات, baca – باچ.", "An “a” sound at the end of a word is usually written without alif. Examples: mata – مات, baca – باچ.", "💡"]
      ],
      q: [
        ["Tulisan Jawi dibaca dari arah mana?", "In which direction is Jawi read?", ["Kanan ke kiri // right to left", "Kiri ke kanan // left to right", "Atas ke bawah // top to bottom", "Bawah ke atas // bottom to top"]],
        ["Huruf vokal manakah untuk bunyi “i”?", "Which vowel letter gives the “i” sound?", ["ي", "و", "ا", "ن"]],
        ["Huruf vokal manakah untuk bunyi “u”?", "Which vowel letter gives the “u” sound?", ["و", "ي", "ا", "م"]],
        ["Yang manakah ejaan Jawi bagi “buku”?", "Which is the Jawi spelling of “buku”?", ["بوکو", "باکو", "بيکي", "بوک"]],
        ["Yang manakah ejaan Jawi bagi “mata”?", "Which is the Jawi spelling of “mata”?", ["مات", "موت", "ميت", "متا"]],
        ["Yang manakah ejaan Jawi bagi “kaki”?", "Which is the Jawi spelling of “kaki”?", ["کاکي", "کوکو", "کاک", "کيکي"]],
        ["Yang manakah ejaan Jawi bagi “susu”?", "Which is the Jawi spelling of “susu”?", ["سوسو", "ساسا", "سيسي", "سوس"]],
        ["Yang manakah ejaan Jawi bagi “nasi”?", "Which is the Jawi spelling of “nasi”?", ["ناسي", "نوسي", "ناس", "نيسي"]],
        ["Apakah bacaan bagi perkataan ini: باجو", "How is this word read: باجو", ["baju", "baja", "biji", "buju"]],
        ["Apakah bacaan bagi perkataan ini: رومه", "How is this word read: رومه", ["rumah", "ramah", "remeh", "rima"]],
        ["Apakah bacaan bagi perkataan ini: ماکن", "How is this word read: ماکن", ["makan", "makin", "mukun", "makna"]],
        ["Huruf manakah yang TIDAK bersambung dengan huruf selepasnya?", "Which letter does NOT join to the letter after it?", ["ر", "ب", "س", "ک"]]
      ],
      pairs: [
        {
          title: "Perkataan Jawi: di rumah dan di sekolah // Jawi words: at home and at school", ask: "Padankan perkataan Rumi dengan tulisan Jawi.", en: "Match the Rumi word to its Jawi spelling.",
          items: [["buku // book", "بوکو"], ["meja // table", "ميجا"], ["kerusi // chair", "کروسي"], ["sekolah // school", "سکوله"], ["rumah // house", "رومه"], ["guru // teacher", "ݢورو"], ["murid // pupil", "موريد"], ["pintu // door", "ڤينتو"], ["baju // shirt", "باجو"], ["kasut // shoe", "کاسوت"], ["bola // ball", "بولا"], ["kereta // car", "کريتا"]]
        },
        {
          title: "Perkataan Jawi: keluarga dan badan // Jawi words: family and body", ask: "Padankan perkataan Rumi dengan tulisan Jawi.", en: "Match the Rumi word to its Jawi spelling.",
          items: [["ibu // mother", "ايبو"], ["bapa // father", "باڤ"], ["kakak // older sister", "کاکق"], ["adik // younger sibling", "اديق"], ["mata // eye", "مات"], ["kaki // foot", "کاکي"], ["tangan // hand", "تاڠن"], ["gigi // teeth", "ݢيݢي"], ["saya // I", "ساي"], ["kami // we", "کامي"], ["nama // name", "نام"]]
        },
        {
          title: "Perkataan Jawi: makanan dan alam // Jawi words: food and nature", ask: "Padankan perkataan Rumi dengan tulisan Jawi.", en: "Match the Rumi word to its Jawi spelling.",
          items: [["makan // eat", "ماکن"], ["minum // drink", "مينوم"], ["nasi // rice", "ناسي"], ["susu // milk", "سوسو"], ["ikan // fish", "ايکن"], ["ayam // chicken", "ايم"], ["kucing // cat", "کوچيڠ"], ["bunga // flower", "بوڠا"], ["api // fire", "اڤي"], ["hari // day", "هاري"], ["pagi // morning", "ڤاݢي"], ["malam // night", "مالم"]]
        }
      ],
      sort: {
        title: "Bersambung atau tidak? // Joins or not?", ask: "Adakah huruf ini bersambung dengan huruf selepasnya?", en: "Does this letter join to the letter after it?",
        cats: ["Bersambung // joins", "Tidak bersambung // does not join"],
        items: [["ب", 0], ["ت", 0], ["س", 0], ["م", 0], ["ن", 0], ["ک", 0], ["ا", 1], ["د", 1], ["ذ", 1], ["ر", 1], ["ز", 1], ["و", 1]]
      }
    },
    {
      id: "arab", t: "Bahasa Arab", en: "Arabic", icon: "🗣️",
      notes: [
        ["Bahasa Arab ialah bahasa al-Quran.", "Arabic is the language of the Quran.", "📖"],
        ["أَنَا bermaksud saya. أَنْتَ bermaksud kamu (lelaki). أَنْتِ bermaksud kamu (perempuan).", "أَنَا means I. أَنْتَ means you (to a boy). أَنْتِ means you (to a girl).", "👉"],
        ["هُوَ bermaksud dia (lelaki). هِيَ bermaksud dia (perempuan). نَحْنُ bermaksud kami.", "هُوَ means he. هِيَ means she. نَحْنُ means we.", "👥"],
        ["هَذَا bermaksud “ini” untuk lelaki. هَذِهِ bermaksud “ini” untuk perempuan.", "هَذَا means “this” for masculine words. هَذِهِ means “this” for feminine words.", "☝️"],
        ["شُكْرًا bermaksud terima kasih. Jawapannya عَفْوًا, bermaksud sama-sama.", "شُكْرًا means thank you. The reply is عَفْوًا, meaning you're welcome.", "🙏"]
      ],
      q: [
        ["Apakah maksud شُكْرًا ?", "What does شُكْرًا mean?", ["Terima kasih // thank you", "Selamat pagi // good morning", "Maaf // sorry", "Selamat jalan // goodbye"]],
        ["Apakah maksud أَنَا ?", "What does أَنَا mean?", ["Saya // I", "Kamu // you", "Dia // he or she", "Kami // we"]],
        ["Apakah maksud نَحْنُ ?", "What does نَحْنُ mean?", ["Kami // we", "Saya // I", "Dia // he or she", "Kamu // you"]],
        ["Apakah maksud هُوَ ?", "What does هُوَ mean?", ["Dia (lelaki) // he", "Dia (perempuan) // she", "Saya // I", "Kami // we"]],
        ["Apakah maksud هَذَا ?", "What does هَذَا mean?", ["Ini // this", "Itu // that", "Di sana // over there", "Siapa // who"]],
        ["Apakah maksud مَا اسْمُكَ ?", "What does مَا اسْمُكَ mean?", ["Siapakah nama kamu? // What is your name?", "Apa khabar? // How are you?", "Di manakah rumah kamu? // Where is your house?", "Berapakah umur kamu? // How old are you?"]],
        ["Apakah maksud كَيْفَ حَالُكَ ?", "What does كَيْفَ حَالُكَ mean?", ["Apa khabar? // How are you?", "Siapakah nama kamu? // What is your name?", "Terima kasih // thank you", "Selamat datang // welcome"]],
        ["Apakah maksud صَبَاحُ الْخَيْرِ ?", "What does صَبَاحُ الْخَيْرِ mean?", ["Selamat pagi // good morning", "Selamat petang // good evening", "Selamat malam // good night", "Selamat jalan // goodbye"]],
        ["Apakah maksud نَعَمْ ?", "What does نَعَمْ mean?", ["Ya (betul) // yes", "Tidak // no", "Mungkin // maybe", "Jangan // do not"]],
        ["Apakah maksud لَا ?", "What does لَا mean?", ["Tidak // no", "Ya (betul) // yes", "Ini // this", "Saya // I"]],
        ["Apakah maksud أَسَدٌ ?", "What does أَسَدٌ mean?", ["Singa // lion", "Gajah // elephant", "Kuda // horse", "Unta // camel"]],
        ["Apakah maksud مَاءٌ ?", "What does مَاءٌ mean?", ["Air // water", "Susu // milk", "Roti // bread", "Garam // salt"]]
      ],
      pairs: [
        {
          title: "Ungkapan harian // Everyday phrases", ask: "Padankan ungkapan Arab dengan maksudnya.", en: "Match the Arabic phrase to its meaning.", speakAr: true,
          items: [["شُكْرًا", "Terima kasih // thank you"], ["عَفْوًا", "Sama-sama // you're welcome"], ["صَبَاحُ الْخَيْرِ", "Selamat pagi // good morning"], ["مَسَاءُ الْخَيْرِ", "Selamat petang // good evening"], ["كَيْفَ حَالُكَ", "Apa khabar? // How are you?"], ["مَا اسْمُكَ", "Siapakah nama kamu? // What is your name?"], ["نَعَمْ", "Ya (betul) // yes"], ["لَا", "Tidak // no"], ["أَهْلًا وَسَهْلًا", "Selamat datang // welcome"], ["مَعَ السَّلَامَةِ", "Selamat jalan // goodbye"]]
        },
        {
          title: "Kata ganti nama // Pronouns", ask: "Padankan perkataan Arab dengan maksudnya.", en: "Match the Arabic word to its meaning.", speakAr: true,
          items: [["أَنَا", "Saya // I"], ["أَنْتَ", "Kamu (lelaki) // you (boy)"], ["أَنْتِ", "Kamu (perempuan) // you (girl)"], ["هُوَ", "Dia (lelaki) // he"], ["هِيَ", "Dia (perempuan) // she"], ["نَحْنُ", "Kami // we"]]
        },
        {
          title: "Haiwan // Animals", ask: "Padankan perkataan Arab dengan maksudnya.", en: "Match the Arabic word to its meaning.", speakAr: true,
          items: [["قِطٌّ", "Kucing // cat"], ["أَسَدٌ", "Singa // lion"], ["فِيلٌ", "Gajah // elephant"], ["بَقَرَةٌ", "Lembu // cow"], ["سَمَكٌ", "Ikan // fish"], ["دَجَاجَةٌ", "Ayam // chicken"], ["جَمَلٌ", "Unta // camel"], ["حِصَانٌ", "Kuda // horse"], ["أَرْنَبٌ", "Arnab // rabbit"], ["قِرْدٌ", "Monyet // monkey"]]
        },
        {
          title: "Makanan dan minuman // Food and drink", ask: "Padankan perkataan Arab dengan maksudnya.", en: "Match the Arabic word to its meaning.", speakAr: true,
          items: [["خُبْزٌ", "Roti // bread"], ["أَرُزٌّ", "Nasi // rice"], ["مَاءٌ", "Air // water"], ["حَلِيبٌ", "Susu // milk"], ["تُفَّاحٌ", "Epal // apple"], ["مَوْزٌ", "Pisang // banana"], ["بَيْضٌ", "Telur // egg"], ["سُكَّرٌ", "Gula // sugar"], ["مِلْحٌ", "Garam // salt"], ["شَايٌ", "Teh // tea"]]
        },
        {
          title: "Di rumah // At home", ask: "Padankan perkataan Arab dengan maksudnya.", en: "Match the Arabic word to its meaning.", speakAr: true,
          items: [["بَيْتٌ", "Rumah // house"], ["بَابٌ", "Pintu // door"], ["نَافِذَةٌ", "Tingkap // window"], ["غُرْفَةٌ", "Bilik // room"], ["مَطْبَخٌ", "Dapur // kitchen"], ["سَرِيرٌ", "Katil // bed"], ["مِفْتَاحٌ", "Kunci // key"], ["حَمَّامٌ", "Bilik air // bathroom"]]
        },
        {
          title: "Hari dalam seminggu // Days of the week", ask: "Padankan nama hari Arab dengan maksudnya.", en: "Match the Arabic day to its meaning.", speakAr: true,
          items: [["الْأَحَدُ", "Ahad // Sunday"], ["الْاِثْنَيْنِ", "Isnin // Monday"], ["الثُّلَاثَاءُ", "Selasa // Tuesday"], ["الْأَرْبِعَاءُ", "Rabu // Wednesday"], ["الْخَمِيسُ", "Khamis // Thursday"], ["الْجُمُعَةُ", "Jumaat // Friday"], ["السَّبْتُ", "Sabtu // Saturday"]]
        }
      ]
    }
  ]
});
