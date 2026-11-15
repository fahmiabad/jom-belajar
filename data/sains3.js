/* SAINS TAHUN 3 – KSSR (Semakan 2017).
   Senarai topik mengikut dokumen perancangan dalam folder ini (Claude.pdf):
   Kemahiran Saintifik, Peraturan Bilik Sains, Manusia, Haiwan, Tumbuh-tumbuhan,
   Pengukuran, Ketumpatan, Asid dan Alkali, Sistem Suria, Mesin.
   Format: jawapan betul sentiasa yang PERTAMA. "Melayu // English" dipisahkan oleh data/lib.js. */
window.addSubject({
  id: "sains3", year: 3, name: "Sains", en: "Science", icon: "🔬", color: "#17A673",
  topics: [
    {
      id: "kemahiran", t: "Kemahiran Saintifik", en: "Scientific skills", icon: "🔎",
      notes: [
        ["Memerhati: menggunakan deria untuk mengetahui sesuatu.", "Observing: using our senses to find out about something.", "👀"],
        ["Mengelas: mengasingkan benda mengikut ciri yang sama.", "Classifying: sorting things by what they have in common.", "🗂️"],
        ["Mengukur dan menggunakan nombor: menggunakan alat dan unit yang betul.", "Measuring and using numbers: using the right tool and the right unit.", "📏"],
        ["Membuat inferens: memberi sebab yang munasabah bagi apa yang diperhatikan.", "Making an inference: giving a sensible reason for what we observe.", "🤔"],
        ["Meramal: meneka apa yang akan berlaku berdasarkan pemerhatian atau data.", "Predicting: saying what will happen next, based on observations or data.", "🔮"],
        ["Berkomunikasi: merekod dan berkongsi maklumat melalui lukisan, jadual, carta atau tulisan.", "Communicating: recording and sharing information with drawings, tables, charts or writing.", "📝"]
      ],
      q: [
        ["Ali melihat warna dan menghidu bau sekuntum bunga. Apakah kemahiran ini?", "Ali looks at the colour of a flower and smells it. Which skill is this?", ["Memerhati // observing", "Meramal // predicting", "Mengukur // measuring", "Mengelas // classifying"], "Memerhati bermaksud menggunakan deria. // Observing means using our senses."],
        ["Siti mengasingkan butang mengikut warna. Apakah kemahiran ini?", "Siti sorts buttons by colour. Which skill is this?", ["Mengelas // classifying", "Memerhati // observing", "Meramal // predicting", "Membuat inferens // making an inference"], "Mengelas bermaksud mengumpulkan benda yang sama cirinya. // Classifying means grouping things that share a feature."],
        ["Langit mendung dan gelap. Amir berkata, “Hujan akan turun.” Apakah kemahiran ini?", "The sky is cloudy and dark. Amir says, “It is going to rain.” Which skill is this?", ["Meramal // predicting", "Mengukur // measuring", "Mengelas // classifying", "Berkomunikasi // communicating"], "Meramal ialah meneka apa yang AKAN berlaku. // Predicting is saying what WILL happen."],
        ["Daun pokok itu layu. Mei Ling berkata, “Mungkin pokok itu tidak disiram.” Apakah kemahiran ini?", "The plant's leaves have wilted. Mei Ling says, “Maybe the plant was not watered.” Which skill is this?", ["Membuat inferens // making an inference", "Meramal // predicting", "Mengukur // measuring", "Mengelas // classifying"], "Inferens ialah sebab yang munasabah bagi sesuatu pemerhatian. // An inference is a sensible reason for what we observed."],
        ["Raju melukis carta palang untuk menunjukkan tinggi pokoknya setiap minggu. Apakah kemahiran ini?", "Raju draws a bar chart to show how tall his plant is each week. Which skill is this?", ["Berkomunikasi // communicating", "Meramal // predicting", "Memerhati // observing", "Membuat inferens // making an inference"], "Carta, jadual dan lukisan ialah cara berkomunikasi dalam sains. // Charts, tables and drawings are ways of communicating in science."],
        ["Alat manakah digunakan untuk mengukur isi padu air?", "Which tool is used to measure the volume of water?", ["Silinder penyukat // measuring cylinder", "Pembaris // ruler", "Termometer // thermometer", "Kanta pembesar // magnifying glass"]],
        ["Alat manakah digunakan untuk mengukur suhu?", "Which tool is used to measure temperature?", ["Termometer // thermometer", "Pembaris // ruler", "Jam randik // stopwatch", "Silinder penyukat // measuring cylinder"]],
        ["Selepas eksperimen, apakah yang perlu dibuat dengan alat radas?", "After an experiment, what should be done with the apparatus?", ["Dibersihkan dan disimpan di tempat asal // cleaned and put back in its place", "Dibiarkan di atas meja // left on the table", "Dibawa pulang // taken home", "Dibuang ke dalam tong sampah // thrown in the bin"], "Membersih dan menyimpan alat ialah kemahiran manipulatif. // Cleaning and storing apparatus is a manipulative skill."]
      ],
      pairs: {
        title: "Kemahiran proses sains // Science process skills", ask: "Padankan kemahiran dengan maksudnya.", en: "Match the skill to its meaning.",
        items: [
          ["Memerhati // observing", "Menggunakan deria // using the senses"],
          ["Mengelas // classifying", "Mengumpul mengikut ciri yang sama // grouping by a shared feature"],
          ["Mengukur // measuring", "Menggunakan alat dan unit // using a tool and a unit"],
          ["Membuat inferens // making an inference", "Memberi sebab yang munasabah // giving a sensible reason"],
          ["Meramal // predicting", "Meneka apa yang akan berlaku // saying what will happen"],
          ["Berkomunikasi // communicating", "Merekod dan berkongsi maklumat // recording and sharing information"]
        ]
      },
      sort: {
        title: "Inferens atau ramalan? // Inference or prediction?", ask: "Adakah ini inferens atau ramalan?", en: "Is this an inference or a prediction?",
        cats: ["Inferens (sebab) // inference (a reason)", "Ramalan (akan berlaku) // prediction (will happen)"],
        items: [
          ["Lantai basah kerana air tumpah. // The floor is wet because water was spilt.", 0],
          ["Ais itu akan cair jika dibiarkan di luar. // The ice will melt if it is left out.", 1],
          ["Kucing itu kurus kerana kurang makan. // The cat is thin because it does not eat enough.", 0],
          ["Biji benih itu akan bercambah esok. // The seed will sprout tomorrow.", 1],
          ["Lampu tidak menyala kerana bateri habis. // The lamp is not lit because the battery is flat.", 0],
          ["Belon itu akan pecah jika ditiup lagi. // The balloon will burst if it is blown up more.", 1]
        ]
      }
    },
    {
      id: "peraturan", t: "Peraturan Bilik Sains", en: "Science room rules", icon: "🧪",
      notes: [
        ["Masuk ke bilik sains hanya dengan kebenaran guru.", "Only enter the science room with the teacher's permission.", "🚪"],
        ["Jangan makan, minum, berlari atau bermain di dalam bilik sains.", "Do not eat, drink, run or play in the science room.", "🚫"],
        ["Jangan rasa atau hidu bahan kimia tanpa arahan guru.", "Do not taste or smell chemicals unless the teacher tells you to.", "⚠️"],
        ["Jika ada alat pecah atau kemalangan, beritahu guru dengan segera.", "If something breaks or there is an accident, tell the teacher straight away.", "🙋"],
        ["Selepas eksperimen: bersihkan alat, simpan di tempat asal, buang sisa dengan betul dan basuh tangan.", "After an experiment: clean the apparatus, put it back, throw waste away properly and wash your hands.", "🧼"]
      ],
      q: [
        ["Bilakah murid boleh masuk ke bilik sains?", "When may pupils enter the science room?", ["Apabila dibenarkan oleh guru // when the teacher allows it", "Pada bila-bila masa // at any time", "Apabila bilik itu kosong // when the room is empty", "Semasa waktu rehat // at break time"]],
        ["Sebuah bikar kaca pecah. Apakah yang perlu kamu buat?", "A glass beaker breaks. What should you do?", ["Beritahu guru dengan segera // tell the teacher straight away", "Kutip kaca dengan tangan // pick up the glass by hand", "Sembunyikan kaca itu // hide the glass", "Biarkan sahaja // just leave it"], "Kaca pecah boleh mencederakan. Guru tahu cara membersihkannya dengan selamat. // Broken glass can hurt you. The teacher knows how to clear it safely."],
        ["Mengapakah kita tidak boleh makan di dalam bilik sains?", "Why must we not eat in the science room?", ["Makanan mungkin terkena bahan kimia // food may get chemicals on it", "Makanan di situ tidak sedap // food does not taste good there", "Bilik sains terlalu sejuk // the science room is too cold", "Guru tidak suka makanan // the teacher does not like food"]],
        ["Apakah yang perlu dibuat sebelum memulakan eksperimen?", "What should you do before starting an experiment?", ["Dengar dan ikut arahan guru // listen to and follow the teacher's instructions", "Terus mula tanpa bertanya // start straight away without asking", "Campurkan semua bahan // mix all the materials together", "Bermain dengan alat radas // play with the apparatus"]],
        ["Apakah yang perlu dibuat selepas menyentuh bahan eksperimen?", "What should you do after touching experiment materials?", ["Basuh tangan dengan sabun // wash your hands with soap", "Lap tangan pada baju // wipe your hands on your shirt", "Terus makan // eat straight away", "Gosok mata // rub your eyes"]],
        ["Bahan kimia terpercik pada tangan. Apakah yang perlu dibuat?", "A chemical splashes on your hand. What should you do?", ["Basuh dengan air yang banyak dan beritahu guru // wash with plenty of water and tell the teacher", "Lap dengan baju // wipe it on your shirt", "Tunggu sehingga kering // wait until it dries", "Rasa bahan itu // taste it"]]
      ],
      sort: {
        title: "Boleh atau tidak boleh? // Allowed or not allowed?", ask: "Bolehkah perkara ini dibuat di dalam bilik sains?", en: "Is this allowed in the science room?",
        cats: ["Boleh // allowed", "Tidak boleh // not allowed"],
        items: [
          ["Mengikut arahan guru // following the teacher's instructions", 0],
          ["Berlari dan berkejaran // running and chasing each other", 1],
          ["Membersihkan alat selepas digunakan // cleaning the apparatus after use", 0],
          ["Merasa bahan kimia // tasting chemicals", 1],
          ["Melaporkan kemalangan kepada guru // reporting an accident to the teacher", 0],
          ["Makan dan minum // eating and drinking", 1],
          ["Membasuh tangan selepas eksperimen // washing hands after an experiment", 0],
          ["Membawa keluar alat radas tanpa kebenaran // taking apparatus out without permission", 1]
        ]
      }
    },
    {
      id: "gigi", t: "Manusia: Gigi", en: "Humans: teeth", icon: "🦷",
      notes: [
        ["Manusia mempunyai tiga jenis gigi: gigi kacip, gigi taring dan gigi geraham.", "Humans have three kinds of teeth: incisors, canines and molars.", "🦷"],
        ["Gigi kacip memotong makanan. Gigi taring mengoyak makanan. Gigi geraham mengunyah dan melumatkan makanan.", "Incisors cut food. Canines tear food. Molars chew and grind food.", "🍎"],
        ["Kanak-kanak mempunyai 20 batang gigi susu. Orang dewasa mempunyai 32 batang gigi kekal.", "Children have 20 milk teeth. Adults have 32 permanent teeth.", "👶"],
        ["Gigi susu akan tanggal dan diganti dengan gigi kekal. Gigi kekal tidak akan diganti lagi.", "Milk teeth fall out and are replaced by permanent teeth. Permanent teeth are never replaced.", "🔁"],
        ["Struktur gigi: enamel (lapisan luar yang paling keras), dentin, saraf, salur darah dan gusi.", "Parts of a tooth: enamel (the hardest, outer layer), dentine, nerves, blood vessels and the gum.", "🔬"],
        ["Jaga gigi: berus gigi sekurang-kurangnya dua kali sehari, kurangkan makanan manis dan jumpa doktor gigi.", "Look after your teeth: brush at least twice a day, eat fewer sweet things and visit the dentist.", "🪥"]
      ],
      q: [
        ["Gigi manakah yang memotong makanan?", "Which teeth cut food?", ["Gigi kacip // incisors", "Gigi taring // canines", "Gigi geraham // molars", "Gigi susu // milk teeth"], "Gigi kacip berada di hadapan dan berbentuk nipis serta tajam. // Incisors are at the front and are thin and sharp."],
        ["Gigi manakah yang mengoyak makanan?", "Which teeth tear food?", ["Gigi taring // canines", "Gigi kacip // incisors", "Gigi geraham // molars", "Gigi kekal // permanent teeth"], "Gigi taring runcing dan tajam. // Canines are pointed and sharp."],
        ["Gigi manakah yang mengunyah dan melumatkan makanan?", "Which teeth chew and grind food?", ["Gigi geraham // molars", "Gigi kacip // incisors", "Gigi taring // canines", "Gigi susu // milk teeth"], "Gigi geraham besar dan permukaannya lebar. // Molars are big and have a wide surface."],
        ["Berapakah bilangan gigi susu?", "How many milk teeth are there?", ["20", "32", "10", "28"]],
        ["Berapakah bilangan gigi kekal orang dewasa?", "How many permanent teeth does an adult have?", ["32", "20", "24", "40"]],
        ["Apakah bahagian gigi yang paling keras?", "Which part of a tooth is the hardest?", ["Enamel // enamel", "Dentin // dentine", "Gusi // gum", "Saraf // nerve"], "Enamel ialah lapisan luar yang melindungi gigi. // Enamel is the outer layer that protects the tooth."],
        ["Bahagian gigi manakah yang membuatkan kita berasa sakit atau ngilu?", "Which part of the tooth lets us feel pain?", ["Saraf // nerve", "Enamel // enamel", "Gusi // gum", "Dentin // dentine"]],
        ["Apakah yang berlaku apabila gigi susu tanggal?", "What happens when a milk tooth falls out?", ["Gigi kekal tumbuh menggantikannya // a permanent tooth grows in its place", "Tiada gigi yang akan tumbuh // no tooth will grow", "Gigi susu baharu tumbuh // a new milk tooth grows", "Gusi menjadi gigi // the gum becomes a tooth"]],
        ["Makanan manakah yang boleh merosakkan gigi jika dimakan selalu?", "Which food can damage teeth if eaten often?", ["Gula-gula // sweets", "Sayur // vegetables", "Ikan // fish", "Susu // milk"], "Gula menyebabkan gigi berlubang. // Sugar causes holes (cavities) in teeth."],
        ["Makanan manakah yang baik untuk gigi yang kuat?", "Which food is good for strong teeth?", ["Susu // milk", "Gula-gula // sweets", "Coklat // chocolate", "Air berkarbonat // fizzy drinks"], "Susu mengandungi kalsium untuk gigi dan tulang. // Milk has calcium for teeth and bones."],
        ["Berapa kali sekurang-kurangnya kita perlu memberus gigi setiap hari?", "At least how many times should we brush our teeth each day?", ["Dua kali // twice", "Sekali seminggu // once a week", "Sekali // once", "Tidak perlu // no need"]],
        ["Mengapakah gigi kekal mesti dijaga dengan baik?", "Why must permanent teeth be looked after well?", ["Gigi kekal tidak akan diganti lagi // permanent teeth are never replaced", "Gigi kekal akan tumbuh semula // permanent teeth grow back", "Gigi kekal sangat kecil // permanent teeth are very small", "Gigi kekal lembut // permanent teeth are soft"]]
      ],
      pairs: [
        {
          title: "Jenis gigi dan fungsinya // Kinds of teeth and what they do", ask: "Padankan gigi dengan fungsinya.", en: "Match the tooth to its job.",
          items: [["Gigi kacip // incisors", "Memotong makanan // cutting food"], ["Gigi taring // canines", "Mengoyak makanan // tearing food"], ["Gigi geraham // molars", "Mengunyah dan melumatkan makanan // chewing and grinding food"]]
        },
        {
          title: "Struktur gigi // Parts of a tooth", ask: "Padankan bahagian gigi dengan keterangannya.", en: "Match the part of the tooth to its description.",
          items: [["Enamel // enamel", "Lapisan luar yang paling keras // the hardest, outer layer"], ["Dentin // dentine", "Lapisan di bawah enamel // the layer under the enamel"], ["Saraf // nerve", "Merasa sakit dan ngilu // feels pain"], ["Salur darah // blood vessels", "Membawa darah ke gigi // carry blood to the tooth"], ["Gusi // gum", "Memegang gigi dengan kukuh // holds the tooth firmly"]]
        }
      ],
      sort: {
        title: "Gigi susu atau gigi kekal? // Milk teeth or permanent teeth?", ask: "Gigi manakah ini?", en: "Which set of teeth is this about?",
        cats: ["Gigi susu // milk teeth", "Gigi kekal // permanent teeth"],
        items: [["20 batang // 20 teeth", 0], ["32 batang // 32 teeth", 1], ["Akan tanggal dan diganti // fall out and are replaced", 0], ["Tidak akan diganti // are never replaced", 1], ["Set gigi pertama // the first set of teeth", 0], ["Set gigi kedua // the second set of teeth", 1]]
      }
    },
    {
      id: "makanan", t: "Manusia: Kelas Makanan", en: "Humans: food classes", icon: "🍚",
      notes: [
        ["Ada tujuh kelas makanan: karbohidrat, protein, lemak, vitamin, mineral, pelawas dan air.", "There are seven food classes: carbohydrates, protein, fat, vitamins, minerals, fibre and water.", "7️⃣"],
        ["Karbohidrat memberi tenaga. Contoh: nasi, roti, mi, ubi kentang.", "Carbohydrates give energy. Examples: rice, bread, noodles, potatoes.", "🍞"],
        ["Protein untuk tumbesaran dan membaiki tisu yang rosak. Contoh: ikan, ayam, telur, kacang.", "Protein is for growth and for repairing damaged tissue. Examples: fish, chicken, eggs, beans.", "🐟"],
        ["Lemak membekalkan tenaga dan memanaskan badan. Contoh: minyak, mentega, marjerin.", "Fat supplies energy and keeps the body warm. Examples: oil, butter, margarine.", "🧈"],
        ["Vitamin dan mineral mengekalkan kesihatan. Banyak terdapat dalam buah-buahan dan sayur-sayuran.", "Vitamins and minerals keep us healthy. Fruit and vegetables have plenty of them.", "🥦"],
        ["Pelawas mencegah sembelit. Air mengawal suhu badan dan membantu pencernaan.", "Fibre prevents constipation. Water controls body temperature and helps digestion.", "💧"],
        ["Makanan seimbang mengandungi semua kelas makanan dalam jumlah yang betul.", "A balanced diet has all the food classes in the right amounts.", "⚖️"]
      ],
      q: [
        ["Kelas makanan manakah yang memberi tenaga?", "Which food class gives energy?", ["Karbohidrat // carbohydrates", "Vitamin // vitamins", "Mineral // minerals", "Pelawas // fibre"]],
        ["Kelas makanan manakah yang diperlukan untuk tumbesaran?", "Which food class is needed for growth?", ["Protein // protein", "Lemak // fat", "Pelawas // fibre", "Air // water"]],
        ["Kelas makanan manakah yang mencegah sembelit?", "Which food class prevents constipation?", ["Pelawas // fibre", "Protein // protein", "Lemak // fat", "Karbohidrat // carbohydrates"], "Pelawas banyak terdapat dalam sayur-sayuran dan buah-buahan. // Vegetables and fruit have plenty of fibre."],
        ["Kelas makanan manakah yang memanaskan badan?", "Which food class keeps the body warm?", ["Lemak // fat", "Vitamin // vitamins", "Pelawas // fibre", "Mineral // minerals"]],
        ["Nasi, roti dan mi kaya dengan apa?", "Rice, bread and noodles are rich in what?", ["Karbohidrat // carbohydrates", "Protein // protein", "Lemak // fat", "Vitamin // vitamins"]],
        ["Ikan, ayam dan telur kaya dengan apa?", "Fish, chicken and eggs are rich in what?", ["Protein // protein", "Karbohidrat // carbohydrates", "Pelawas // fibre", "Lemak // fat"]],
        ["Mineral manakah yang menguatkan tulang dan gigi?", "Which mineral makes bones and teeth strong?", ["Kalsium // calcium", "Gula // sugar", "Pelawas // fibre", "Lemak // fat"], "Kalsium terdapat dalam susu, keju dan ikan bilis. // Calcium is found in milk, cheese and anchovies."],
        ["Apakah maksud makanan seimbang?", "What does a balanced diet mean?", ["Mengandungi semua kelas makanan dalam jumlah yang betul // it has all the food classes in the right amounts", "Makan nasi sahaja // eating only rice", "Makan banyak gula-gula // eating lots of sweets", "Makan sekali sehari // eating once a day"]],
        ["Apakah yang boleh berlaku jika kita makan terlalu banyak lemak dan gula?", "What can happen if we eat too much fat and sugar?", ["Badan menjadi gemuk // the body becomes overweight", "Badan menjadi lebih tinggi // the body gets taller", "Gigi menjadi lebih kuat // teeth get stronger", "Mata menjadi lebih terang // eyesight gets sharper"]],
        ["Mengapakah kita perlu minum air yang cukup?", "Why do we need to drink enough water?", ["Untuk mengawal suhu badan // to control body temperature", "Untuk menguatkan gigi // to make teeth strong", "Untuk memanaskan badan // to keep the body warm", "Untuk membina otot // to build muscle"]],
        ["Dalam piramid makanan, makanan manakah yang perlu dimakan paling sedikit?", "In the food pyramid, which foods should we eat least of?", ["Lemak, minyak, gula dan garam // fat, oil, sugar and salt", "Sayur-sayuran // vegetables", "Buah-buahan // fruit", "Nasi dan bijirin // rice and grains"]],
        ["Buah-buahan dan sayur-sayuran kaya dengan apa?", "Fruit and vegetables are rich in what?", ["Vitamin, mineral dan pelawas // vitamins, minerals and fibre", "Lemak // fat", "Protein sahaja // protein only", "Karbohidrat sahaja // carbohydrates only"]]
      ],
      pairs: {
        title: "Kelas makanan dan fungsinya // Food classes and what they do", ask: "Padankan kelas makanan dengan fungsinya.", en: "Match the food class to its job.",
        items: [
          ["Karbohidrat // carbohydrates", "Memberi tenaga // gives energy"],
          ["Protein // protein", "Tumbesaran dan membaiki tisu // growth and repairing tissue"],
          ["Lemak // fat", "Memanaskan badan // keeps the body warm"],
          ["Vitamin dan mineral // vitamins and minerals", "Mengekalkan kesihatan // keep us healthy"],
          ["Pelawas // fibre", "Mencegah sembelit // prevents constipation"],
          ["Air // water", "Mengawal suhu badan // controls body temperature"]
        ]
      },
      sort: {
        title: "Kelas makanan // Food classes", ask: "Makanan ini kaya dengan apa?", en: "What is this food rich in?",
        cats: ["Karbohidrat // carbohydrates", "Protein // protein", "Lemak // fat", "Vitamin & mineral // vitamins & minerals"],
        items: [["Nasi // rice", 0], ["Roti // bread", 0], ["Mi // noodles", 0], ["Ubi kentang // potato", 0], ["Ikan // fish", 1], ["Ayam // chicken", 1], ["Telur // egg", 1], ["Kacang soya // soya beans", 1], ["Mentega // butter", 2], ["Minyak masak // cooking oil", 2], ["Marjerin // margarine", 2], ["Bayam // spinach", 3], ["Oren // orange", 3], ["Betik // papaya", 3], ["Lobak merah // carrot", 3]]
      }
    },
    {
      id: "pencernaan", t: "Manusia: Pencernaan", en: "Humans: digestion", icon: "🫃",
      notes: [
        ["Pencernaan ialah proses memecahkan makanan kepada bahagian yang kecil supaya boleh diserap oleh badan.", "Digestion is breaking food into tiny parts so that the body can absorb it.", "🍽️"],
        ["Laluan makanan: mulut → esofagus → perut → usus kecil → usus besar → dubur.", "The path of food: mouth → oesophagus → stomach → small intestine → large intestine → anus.", "➡️"],
        ["Di dalam mulut, gigi mengunyah makanan dan air liur melembutkannya.", "In the mouth, teeth chew the food and saliva softens it.", "👄"],
        ["Di dalam perut, makanan dihancurkan menjadi lebih halus.", "In the stomach, food is broken down even more finely.", "🥣"],
        ["Di usus kecil, makanan yang telah dicerna diserap ke dalam darah.", "In the small intestine, digested food is absorbed into the blood.", "🩸"],
        ["Di usus besar, air diserap. Bahan yang tidak dicerna dikeluarkan melalui dubur sebagai tinja.", "In the large intestine, water is absorbed. Undigested matter leaves through the anus as faeces.", "🚽"]
      ],
      q: [
        ["Di manakah pencernaan bermula?", "Where does digestion begin?", ["Mulut // mouth", "Perut // stomach", "Usus kecil // small intestine", "Usus besar // large intestine"]],
        ["Apakah nama saluran yang membawa makanan dari mulut ke perut?", "What is the tube that carries food from the mouth to the stomach?", ["Esofagus // oesophagus", "Usus kecil // small intestine", "Usus besar // large intestine", "Dubur // anus"]],
        ["Di manakah makanan yang telah dicerna diserap ke dalam darah?", "Where is digested food absorbed into the blood?", ["Usus kecil // small intestine", "Mulut // mouth", "Esofagus // oesophagus", "Dubur // anus"]],
        ["Di manakah air diserap?", "Where is water absorbed?", ["Usus besar // large intestine", "Mulut // mouth", "Esofagus // oesophagus", "Gigi // teeth"]],
        ["Bahan yang tidak dicerna dikeluarkan melalui apa?", "Undigested matter leaves the body through what?", ["Dubur // anus", "Mulut // mouth", "Hidung // nose", "Perut // stomach"]],
        ["Apakah yang melembutkan makanan di dalam mulut?", "What softens food in the mouth?", ["Air liur // saliva", "Darah // blood", "Peluh // sweat", "Udara // air"]],
        ["Mengapakah kita perlu mengunyah makanan sehingga lumat?", "Why should we chew food until it is fine?", ["Supaya mudah dicerna // so that it is easy to digest", "Supaya makanan lebih manis // so that food is sweeter", "Supaya gigi cepat tanggal // so that teeth fall out quickly", "Supaya cepat kenyang // so that we feel full quickly"]],
        ["Organ manakah yang berbentuk seperti beg dan menghancurkan makanan?", "Which organ is shaped like a bag and breaks food down?", ["Perut // stomach", "Esofagus // oesophagus", "Dubur // anus", "Usus besar // large intestine"]],
        ["Selepas usus kecil, ke manakah makanan yang tidak dicerna pergi?", "After the small intestine, where does undigested food go?", ["Usus besar // large intestine", "Perut // stomach", "Esofagus // oesophagus", "Mulut // mouth"]],
        ["Apakah maksud pencernaan?", "What does digestion mean?", ["Memecahkan makanan supaya boleh diserap badan // breaking food down so the body can absorb it", "Menyedut udara ke dalam badan // breathing air into the body", "Mengepam darah ke seluruh badan // pumping blood round the body", "Membuang peluh // getting rid of sweat"]]
      ],
      pairs: {
        title: "Organ pencernaan // Digestive organs", ask: "Padankan organ dengan apa yang berlaku di situ.", en: "Match the organ to what happens there.",
        items: [
          ["Mulut // mouth", "Makanan dikunyah // food is chewed"],
          ["Esofagus // oesophagus", "Makanan ditolak ke perut // food is pushed to the stomach"],
          ["Perut // stomach", "Makanan dihancurkan lebih halus // food is broken down more finely"],
          ["Usus kecil // small intestine", "Makanan tercerna diserap // digested food is absorbed"],
          ["Usus besar // large intestine", "Air diserap // water is absorbed"],
          ["Dubur // anus", "Tinja dikeluarkan // faeces leave the body"]
        ]
      },
      order: [
        ["Susun laluan makanan dalam badan.", "Put the path of food through the body in order.", ["Mulut // mouth", "Esofagus // oesophagus", "Perut // stomach", "Usus kecil // small intestine", "Usus besar // large intestine", "Dubur // anus"]]
      ]
    },
    {
      id: "haiwan", t: "Haiwan: Tabiat Makan", en: "Animals: eating habits", icon: "🐅",
      notes: [
        ["Herbivor ialah haiwan yang makan tumbuhan sahaja. Contoh: lembu, kambing, arnab, gajah.", "A herbivore is an animal that eats only plants. Examples: cow, goat, rabbit, elephant.", "🐄"],
        ["Karnivor ialah haiwan yang makan haiwan lain sahaja. Contoh: harimau, singa, helang, ular.", "A carnivore is an animal that eats only other animals. Examples: tiger, lion, eagle, snake.", "🐅"],
        ["Omnivor ialah haiwan yang makan tumbuhan dan haiwan. Contoh: ayam, beruang, monyet, itik.", "An omnivore is an animal that eats both plants and animals. Examples: chicken, bear, monkey, duck.", "🐔"],
        ["Herbivor mempunyai gigi kacip yang tajam untuk memotong dan gigi geraham yang lebar untuk mengunyah tumbuhan.", "Herbivores have sharp incisors for cutting and wide molars for chewing plants.", "🌿"],
        ["Karnivor mempunyai gigi taring yang tajam dan runcing untuk mengoyak daging.", "Carnivores have sharp, pointed canines for tearing meat.", "🥩"],
        ["Omnivor mempunyai gigi kacip, gigi taring dan gigi geraham.", "Omnivores have incisors, canines and molars.", "🦷"]
      ],
      q: [
        ["Apakah maksud herbivor?", "What is a herbivore?", ["Haiwan yang makan tumbuhan sahaja // an animal that eats only plants", "Haiwan yang makan haiwan lain sahaja // an animal that eats only other animals", "Haiwan yang makan tumbuhan dan haiwan // an animal that eats plants and animals", "Haiwan yang tidak makan // an animal that does not eat"]],
        ["Apakah maksud karnivor?", "What is a carnivore?", ["Haiwan yang makan haiwan lain sahaja // an animal that eats only other animals", "Haiwan yang makan tumbuhan sahaja // an animal that eats only plants", "Haiwan yang makan tumbuhan dan haiwan // an animal that eats plants and animals", "Haiwan yang hidup di dalam air // an animal that lives in water"]],
        ["Apakah maksud omnivor?", "What is an omnivore?", ["Haiwan yang makan tumbuhan dan haiwan // an animal that eats plants and animals", "Haiwan yang makan tumbuhan sahaja // an animal that eats only plants", "Haiwan yang makan haiwan lain sahaja // an animal that eats only other animals", "Haiwan yang makan buah sahaja // an animal that eats only fruit"]],
        ["Haiwan manakah herbivor?", "Which animal is a herbivore?", ["Kambing // goat", "Harimau // tiger", "Helang // eagle", "Buaya // crocodile"]],
        ["Haiwan manakah karnivor?", "Which animal is a carnivore?", ["Singa // lion", "Lembu // cow", "Arnab // rabbit", "Ayam // chicken"]],
        ["Haiwan manakah omnivor?", "Which animal is an omnivore?", ["Ayam // chicken", "Gajah // elephant", "Harimau // tiger", "Zirafah // giraffe"], "Ayam makan bijirin dan juga cacing. // Chickens eat grain and also worms."],
        ["Gigi manakah yang paling penting bagi karnivor untuk mengoyak daging?", "Which teeth matter most to a carnivore for tearing meat?", ["Gigi taring // canines", "Gigi geraham // molars", "Gigi susu // milk teeth", "Gigi kacip // incisors"]],
        ["Mengapakah gigi geraham herbivor lebar dan rata?", "Why are a herbivore's molars wide and flat?", ["Untuk mengunyah dan melumatkan tumbuhan // to chew and grind plants", "Untuk mengoyak daging // to tear meat", "Untuk menangkap mangsa // to catch prey", "Untuk menggali tanah // to dig the soil"]],
        ["Seekor haiwan mempunyai gigi taring yang panjang dan tajam. Apakah tabiat makannya?", "An animal has long, sharp canines. What does it most likely eat?", ["Karnivor // carnivore", "Herbivor // herbivore", "Makan rumput // eats grass", "Makan daun // eats leaves"]],
        ["Beruang makan ikan dan buah-buahan. Beruang ialah ...", "A bear eats fish and fruit. A bear is a ...", ["Omnivor // omnivore", "Herbivor // herbivore", "Karnivor // carnivore", "Tumbuhan // plant"]],
        ["Kumpulan manakah semuanya herbivor?", "In which group are all the animals herbivores?", ["Lembu, kambing, rusa // cow, goat, deer", "Harimau, singa, helang // tiger, lion, eagle", "Ayam, itik, beruang // chicken, duck, bear", "Ular, buaya, kucing // snake, crocodile, cat"]],
        ["Haiwan dikelaskan sebagai herbivor, karnivor atau omnivor berdasarkan apa?", "Animals are grouped as herbivores, carnivores or omnivores based on what?", ["Makanan yang dimakannya // the food they eat", "Warna badannya // their body colour", "Tempat tinggalnya // where they live", "Saiz badannya // their body size"]]
      ],
      pairs: {
        title: "Tabiat makan // Eating habits", ask: "Padankan istilah dengan maksudnya.", en: "Match the word to its meaning.",
        items: [["Herbivor // herbivore", "Makan tumbuhan sahaja // eats only plants"], ["Karnivor // carnivore", "Makan haiwan lain sahaja // eats only other animals"], ["Omnivor // omnivore", "Makan tumbuhan dan haiwan // eats plants and animals"]]
      },
      sort: {
        title: "Herbivor, karnivor atau omnivor? // Herbivore, carnivore or omnivore?", ask: "Apakah tabiat makan haiwan ini?", en: "What is this animal's eating habit?",
        cats: ["Herbivor // herbivore", "Karnivor // carnivore", "Omnivor // omnivore"],
        items: [["Lembu // cow", 0], ["Kambing // goat", 0], ["Arnab // rabbit", 0], ["Gajah // elephant", 0], ["Rusa // deer", 0], ["Zirafah // giraffe", 0], ["Harimau // tiger", 1], ["Singa // lion", 1], ["Helang // eagle", 1], ["Ular // snake", 1], ["Buaya // crocodile", 1], ["Ayam // chicken", 2], ["Itik // duck", 2], ["Beruang // bear", 2], ["Monyet // monkey", 2]]
      }
    },
    {
      id: "tumbuhan", t: "Tumbuh-tumbuhan: Pembiakan", en: "Plants: reproduction", icon: "🌱",
      notes: [
        ["Tumbuhan membiak untuk menambah bilangannya supaya tidak pupus.", "Plants reproduce to increase their numbers so that they do not die out.", "🌳"],
        ["Tumbuhan membiak melalui biji benih, spora, keratan batang, daun, anak pokok dan batang bawah tanah.", "Plants reproduce by seeds, spores, stem cuttings, leaves, suckers and underground stems.", "🌿"],
        ["Biji benih: jagung, kacang, betik, rambutan, tembikai.", "Seeds: maize, beans, papaya, rambutan, watermelon.", "🌽"],
        ["Spora: paku-pakis dan lumut. Spora sangat halus dan ringan.", "Spores: ferns and moss. Spores are very fine and light.", "🍃"],
        ["Keratan batang: ubi kayu, tebu, bunga raya, bunga ros.", "Stem cuttings: tapioca, sugar cane, hibiscus, rose.", "✂️"],
        ["Daun: setawar dan begonia. Anak pokok: pisang, nanas dan buluh.", "Leaves: bryophyllum (setawar) and begonia. Suckers: banana, pineapple and bamboo.", "🍌"],
        ["Batang bawah tanah: halia, kunyit, ubi kentang dan bawang.", "Underground stems: ginger, turmeric, potato and onion.", "🧅"]
      ],
      q: [
        ["Mengapakah tumbuhan membiak?", "Why do plants reproduce?", ["Untuk menambah bilangan supaya tidak pupus // to increase their numbers so they do not die out", "Untuk mendapat cahaya // to get light", "Untuk menjadi lebih tinggi // to grow taller", "Untuk menyerap air // to take in water"]],
        ["Bagaimanakah pokok jagung membiak?", "How does a maize plant reproduce?", ["Biji benih // seeds", "Spora // spores", "Daun // leaves", "Anak pokok // suckers"]],
        ["Bagaimanakah paku-pakis membiak?", "How do ferns reproduce?", ["Spora // spores", "Biji benih // seeds", "Keratan batang // stem cuttings", "Daun // leaves"], "Spora terdapat di bawah daun paku-pakis. // Spores are found under fern leaves."],
        ["Bagaimanakah pokok pisang membiak?", "How does a banana plant reproduce?", ["Anak pokok // suckers", "Spora // spores", "Daun // leaves", "Biji benih // seeds"], "Anak pokok pisang tumbuh di pangkal pokok induk. // Young banana plants grow at the base of the parent plant."],
        ["Bagaimanakah ubi kayu membiak?", "How does tapioca reproduce?", ["Keratan batang // stem cuttings", "Spora // spores", "Daun // leaves", "Biji benih // seeds"]],
        ["Bagaimanakah pokok setawar membiak?", "How does the setawar plant reproduce?", ["Daun // leaves", "Spora // spores", "Biji benih // seeds", "Keratan batang // stem cuttings"], "Anak pokok tumbuh di tepi daun setawar. // New plants grow along the edge of a setawar leaf."],
        ["Bagaimanakah halia membiak?", "How does ginger reproduce?", ["Batang bawah tanah // underground stems", "Spora // spores", "Daun // leaves", "Biji benih // seeds"]],
        ["Tumbuhan manakah membiak melalui spora?", "Which plant reproduces by spores?", ["Lumut // moss", "Jagung // maize", "Pisang // banana", "Tebu // sugar cane"]],
        ["Tumbuhan manakah membiak melalui biji benih?", "Which plant reproduces by seeds?", ["Betik // papaya", "Paku-pakis // fern", "Halia // ginger", "Setawar // setawar"]],
        ["Tumbuhan manakah membiak melalui keratan batang?", "Which plant reproduces by stem cuttings?", ["Tebu // sugar cane", "Lumut // moss", "Jagung // maize", "Kunyit // turmeric"]],
        ["Pokok nanas membiak melalui apa?", "How does a pineapple plant reproduce?", ["Anak pokok // suckers", "Spora // spores", "Biji benih // seeds", "Daun // leaves"]],
        ["Apakah yang akan berlaku jika tumbuhan tidak membiak?", "What would happen if plants did not reproduce?", ["Tumbuhan itu akan pupus // the plant would die out", "Tumbuhan itu akan bertambah banyak // there would be more of the plant", "Tiada apa-apa berlaku // nothing would happen", "Tumbuhan itu menjadi lebih besar // the plant would get bigger"]]
      ],
      sort: {
        title: "Cara tumbuhan membiak // How plants reproduce", ask: "Bagaimanakah tumbuhan ini membiak?", en: "How does this plant reproduce?",
        cats: ["Biji benih // seeds", "Spora // spores", "Keratan batang // stem cuttings", "Anak pokok // suckers", "Batang bawah tanah // underground stems"],
        items: [["Jagung // maize", 0], ["Kacang // beans", 0], ["Betik // papaya", 0], ["Rambutan // rambutan", 0], ["Paku-pakis // fern", 1], ["Lumut // moss", 1], ["Ubi kayu // tapioca", 2], ["Tebu // sugar cane", 2], ["Bunga raya // hibiscus", 2], ["Pisang // banana", 3], ["Nanas // pineapple", 3], ["Buluh // bamboo", 3], ["Halia // ginger", 4], ["Kunyit // turmeric", 4], ["Ubi kentang // potato", 4]]
      }
    },
    {
      id: "ukur", t: "Pengukuran: Luas & Isi Padu", en: "Measurement: area & volume", icon: "📐",
      notes: [
        ["Luas ialah saiz permukaan sesuatu objek. Luas boleh diukur dengan mengira petak segi empat sama.", "Area is the size of a surface. We can measure area by counting squares.", "⬛"],
        ["Unit luas ialah sentimeter persegi (cm²) dan meter persegi (m²).", "The units of area are the square centimetre (cm²) and the square metre (m²).", "📏"],
        ["Isi padu ialah banyaknya ruang yang dipenuhi oleh sesuatu objek.", "Volume is how much space an object takes up.", "🧊"],
        ["Isi padu pepejal diukur dengan mengira kubus unit. Unitnya sentimeter padu (cm³) dan meter padu (m³).", "The volume of a solid is measured by counting unit cubes. The units are the cubic centimetre (cm³) and the cubic metre (m³).", "🎲"],
        ["Isi padu cecair diukur dalam mililiter (ml) dan liter (l) dengan silinder penyukat.", "The volume of a liquid is measured in millilitres (ml) and litres (l) with a measuring cylinder.", "🧪"],
        ["Semasa membaca silinder penyukat, mata mesti searas dengan bahagian bawah meniskus.", "When reading a measuring cylinder, your eyes must be level with the bottom of the meniscus.", "👁️"],
        ["Isi padu pepejal yang tidak sekata, seperti batu, diukur dengan kaedah sesaran air.", "The volume of an irregular solid, such as a stone, is measured by water displacement.", "🪨"]
      ],
      q: [
        ["Apakah maksud luas?", "What is area?", ["Saiz permukaan sesuatu objek // the size of an object's surface", "Berat sesuatu objek // how heavy an object is", "Panjang sesuatu objek // how long an object is", "Suhu sesuatu objek // how hot an object is"]],
        ["Apakah unit bagi luas?", "Which is a unit of area?", ["cm²", "cm", "ml", "kg"]],
        ["Sebuah bentuk meliputi 8 petak. Setiap petak ialah 1 cm². Berapakah luasnya?", "A shape covers 8 squares. Each square is 1 cm². What is its area?", ["8 cm²", "8 cm", "16 cm²", "4 cm²"]],
        ["Apakah maksud isi padu?", "What is volume?", ["Banyaknya ruang yang dipenuhi objek // how much space an object takes up", "Saiz permukaan objek // the size of an object's surface", "Berat objek // how heavy an object is", "Warna objek // the colour of an object"]],
        ["Apakah unit bagi isi padu pepejal?", "Which is a unit for the volume of a solid?", ["cm³", "cm²", "cm", "g"]],
        ["Apakah unit bagi isi padu cecair?", "Which are units for the volume of a liquid?", ["ml dan l // ml and l", "cm dan m // cm and m", "g dan kg // g and kg", "cm² dan m² // cm² and m²"]],
        ["Sebuah bongkah dibina daripada 12 kubus. Setiap kubus ialah 1 cm³. Berapakah isi padunya?", "A block is built from 12 cubes. Each cube is 1 cm³. What is its volume?", ["12 cm³", "12 cm²", "24 cm³", "6 cm³"]],
        ["Alat manakah paling tepat untuk mengukur isi padu air?", "Which tool measures the volume of water most accurately?", ["Silinder penyukat // measuring cylinder", "Pembaris // ruler", "Gelas minuman // drinking glass", "Sudu // spoon"]],
        ["Di manakah kedudukan mata yang betul semasa membaca silinder penyukat?", "Where should your eyes be when reading a measuring cylinder?", ["Searas dengan bahagian bawah meniskus // level with the bottom of the meniscus", "Di atas aras air // above the water level", "Di bawah aras air // below the water level", "Di belakang silinder // behind the cylinder"]],
        ["Paras air ialah 50 ml. Selepas sebiji batu dimasukkan, paras air menjadi 70 ml. Berapakah isi padu batu itu?", "The water level is 50 ml. After a stone is put in, it reads 70 ml. What is the volume of the stone?", ["20 ml", "70 ml", "120 ml", "50 ml"], "Isi padu batu = 70 ml − 50 ml = 20 ml. // Volume of the stone = 70 ml − 50 ml = 20 ml."],
        ["Mengapakah kaedah sesaran air digunakan untuk batu?", "Why is water displacement used for a stone?", ["Bentuk batu tidak sekata // a stone has an irregular shape", "Batu sangat ringan // a stone is very light", "Batu boleh larut // a stone can dissolve", "Batu berwarna gelap // a stone is dark"]],
        ["Meja A meliputi 20 petak dan meja B meliputi 15 petak yang sama saiz. Meja manakah lebih luas?", "Table A covers 20 squares and table B covers 15 squares of the same size. Which is bigger in area?", ["Meja A // table A", "Meja B // table B", "Sama luas // the same", "Tidak dapat ditentukan // cannot tell"]]
      ],
      pairs: {
        title: "Ukuran dan unitnya // Measurements and their units", ask: "Padankan ukuran dengan unitnya.", en: "Match the measurement to its unit.",
        items: [["Luas // area", "cm²"], ["Isi padu pepejal // volume of a solid", "cm³"], ["Isi padu cecair // volume of a liquid", "ml"], ["Panjang // length", "cm"], ["Jisim // mass", "kg"]]
      },
      order: [
        ["Susun langkah mengukur isi padu batu.", "Put the steps for measuring the volume of a stone in order.", ["Isi air ke dalam silinder penyukat // pour water into the measuring cylinder", "Catat bacaan awal // record the first reading", "Masukkan batu perlahan-lahan // lower the stone in gently", "Catat bacaan akhir // record the final reading", "Tolak bacaan awal daripada bacaan akhir // subtract the first reading from the final reading"]]
      ]
    },
    {
      id: "tumpat", t: "Ketumpatan", en: "Density", icon: "🛟",
      notes: [
        ["Sesetengah objek timbul di atas air. Sesetengah objek tenggelam di dalam air.", "Some objects float on water. Some objects sink in water.", "🌊"],
        ["Objek yang kurang tumpat daripada air akan timbul.", "An object that is less dense than water floats.", "🛟"],
        ["Objek yang lebih tumpat daripada air akan tenggelam.", "An object that is denser than water sinks.", "⚓"],
        ["Contoh objek yang timbul: gabus, kayu, span, ais, bola plastik. Minyak juga timbul di atas air.", "Examples that float: cork, wood, sponge, ice, a plastic ball. Oil floats on water too.", "🪵"],
        ["Contoh objek yang tenggelam: batu, paku besi, duit syiling, guli.", "Examples that sink: stone, iron nail, coin, marble.", "🪨"],
        ["Air menjadi lebih tumpat apabila garam dilarutkan di dalamnya. Telur yang tenggelam boleh timbul di dalam air garam.", "Water becomes denser when salt is dissolved in it. An egg that sinks can float in salt water.", "🥚"]
      ],
      q: [
        ["Objek yang kurang tumpat daripada air akan ...", "An object that is less dense than water will ...", ["Timbul // float", "Tenggelam // sink", "Larut // dissolve", "Cair // melt"]],
        ["Objek yang lebih tumpat daripada air akan ...", "An object that is denser than water will ...", ["Tenggelam // sink", "Timbul // float", "Terapung // stay on top", "Hilang // disappear"]],
        ["Objek manakah yang timbul di atas air?", "Which object floats on water?", ["Gabus // cork", "Batu // stone", "Paku besi // iron nail", "Guli // marble"]],
        ["Objek manakah yang tenggelam di dalam air?", "Which object sinks in water?", ["Duit syiling // coin", "Span // sponge", "Kayu // wood", "Bola plastik // plastic ball"]],
        ["Minyak masak dituang ke dalam air. Apakah yang berlaku?", "Cooking oil is poured into water. What happens?", ["Minyak timbul di atas air // the oil floats on the water", "Minyak tenggelam ke dasar // the oil sinks to the bottom", "Minyak larut di dalam air // the oil dissolves in the water", "Air timbul di atas minyak // the water floats on the oil"], "Minyak kurang tumpat daripada air. // Oil is less dense than water."],
        ["Mengapakah ais timbul di atas air?", "Why does ice float on water?", ["Ais kurang tumpat daripada air // ice is less dense than water", "Ais lebih tumpat daripada air // ice is denser than water", "Ais sangat sejuk // ice is very cold", "Ais berwarna putih // ice is white"]],
        ["Bagaimanakah air boleh dijadikan lebih tumpat?", "How can water be made denser?", ["Larutkan garam di dalamnya // dissolve salt in it", "Tambah lebih banyak air // add more water", "Kacau air itu // stir the water", "Tuang ke dalam bekas lain // pour it into another container"]],
        ["Sebiji telur tenggelam di dalam air paip. Apakah yang berlaku jika banyak garam dilarutkan?", "An egg sinks in tap water. What happens if a lot of salt is dissolved in the water?", ["Telur itu timbul // the egg floats", "Telur itu pecah // the egg breaks", "Telur itu larut // the egg dissolves", "Tiada perubahan // nothing changes"], "Air garam lebih tumpat, jadi telur boleh timbul. // Salt water is denser, so the egg can float."],
        ["Sebatang paku besi tenggelam di dalam air. Apakah inferens kamu?", "An iron nail sinks in water. What can you infer?", ["Paku besi lebih tumpat daripada air // the iron nail is denser than water", "Paku besi kurang tumpat daripada air // the iron nail is less dense than water", "Paku besi sangat kecil // the iron nail is very small", "Air terlalu sejuk // the water is too cold"]],
        ["Pernyataan manakah BETUL?", "Which statement is TRUE?", ["Kayu kurang tumpat daripada air // wood is less dense than water", "Batu kurang tumpat daripada air // stone is less dense than water", "Gabus lebih tumpat daripada air // cork is denser than water", "Semua objek tenggelam // all objects sink"]]
      ],
      sort: {
        title: "Timbul atau tenggelam? // Float or sink?", ask: "Adakah objek ini timbul atau tenggelam di dalam air?", en: "Does this object float or sink in water?",
        cats: ["Timbul // floats", "Tenggelam // sinks"],
        items: [["Gabus // cork", 0], ["Kayu // wood", 0], ["Span // sponge", 0], ["Ais // ice", 0], ["Bola plastik // plastic ball", 0], ["Minyak masak // cooking oil", 0], ["Batu // stone", 1], ["Paku besi // iron nail", 1], ["Duit syiling // coin", 1], ["Guli // marble", 1], ["Kunci besi // iron key", 1], ["Sudu logam // metal spoon", 1]]
      }
    },
    {
      id: "asid", t: "Asid dan Alkali", en: "Acids and alkalis", icon: "🍋",
      notes: [
        ["Bahan boleh dikelaskan kepada asid, alkali dan neutral.", "Substances can be grouped as acidic, alkaline or neutral.", "🧪"],
        ["Kertas litmus digunakan untuk menguji bahan.", "Litmus paper is used to test substances.", "📄"],
        ["Asid menukar kertas litmus biru kepada merah.", "An acid turns blue litmus paper red.", "🔴"],
        ["Alkali menukar kertas litmus merah kepada biru.", "An alkali turns red litmus paper blue.", "🔵"],
        ["Bahan neutral tidak mengubah warna kertas litmus.", "A neutral substance does not change the colour of litmus paper.", "⚪"],
        ["Bahan berasid rasanya masam. Bahan beralkali rasanya pahit dan terasa licin.", "Acidic substances taste sour. Alkaline substances taste bitter and feel slippery.", "😖"],
        ["Jangan rasa atau sentuh bahan yang tidak dikenali. Sesetengah asid dan alkali berbahaya.", "Never taste or touch a substance you do not know. Some acids and alkalis are dangerous.", "⚠️"]
      ],
      q: [
        ["Apakah yang digunakan untuk menguji asid dan alkali?", "What is used to test for acids and alkalis?", ["Kertas litmus // litmus paper", "Kertas tisu // tissue paper", "Pembaris // ruler", "Termometer // thermometer"]],
        ["Apakah yang berlaku kepada kertas litmus biru di dalam asid?", "What happens to blue litmus paper in an acid?", ["Bertukar menjadi merah // it turns red", "Kekal biru // it stays blue", "Bertukar menjadi hijau // it turns green", "Bertukar menjadi kuning // it turns yellow"]],
        ["Apakah yang berlaku kepada kertas litmus merah di dalam alkali?", "What happens to red litmus paper in an alkali?", ["Bertukar menjadi biru // it turns blue", "Kekal merah // it stays red", "Bertukar menjadi hijau // it turns green", "Bertukar menjadi putih // it turns white"]],
        ["Kertas litmus merah dan biru tidak berubah warna. Bahan itu ialah ...", "Red and blue litmus paper do not change colour. The substance is ...", ["Neutral // neutral", "Asid // an acid", "Alkali // an alkali", "Beracun // poisonous"]],
        ["Apakah rasa bahan berasid?", "How do acidic substances taste?", ["Masam // sour", "Pahit // bitter", "Manis // sweet", "Masin // salty"]],
        ["Apakah rasa bahan beralkali?", "How do alkaline substances taste?", ["Pahit // bitter", "Masam // sour", "Manis // sweet", "Pedas // spicy"]],
        ["Bahan manakah berasid?", "Which substance is acidic?", ["Jus limau // lime juice", "Air sabun // soapy water", "Air suling // distilled water", "Ubat gigi // toothpaste"]],
        ["Bahan manakah beralkali?", "Which substance is alkaline?", ["Air sabun // soapy water", "Cuka // vinegar", "Jus oren // orange juice", "Larutan gula // sugar solution"]],
        ["Bahan manakah neutral?", "Which substance is neutral?", ["Air suling // distilled water", "Cuka // vinegar", "Air sabun // soapy water", "Jus limau // lime juice"]],
        ["Bahan beralkali terasa bagaimana apabila disentuh?", "How does an alkaline substance feel to the touch?", ["Licin // slippery", "Kasar // rough", "Melekit seperti gam // sticky like glue", "Berduri // prickly"]],
        ["Mengapakah kita tidak boleh merasa bahan yang tidak dikenali?", "Why must we never taste a substance we do not know?", ["Bahan itu mungkin berbahaya // it may be dangerous", "Bahan itu mungkin manis // it may be sweet", "Bahan itu mahal // it is expensive", "Bahan itu akan habis // it will run out"]],
        ["Jus nanas menukar kertas litmus biru kepada merah. Apakah kesimpulannya?", "Pineapple juice turns blue litmus paper red. What can we conclude?", ["Jus nanas berasid // pineapple juice is acidic", "Jus nanas beralkali // pineapple juice is alkaline", "Jus nanas neutral // pineapple juice is neutral", "Jus nanas pahit // pineapple juice is bitter"]]
      ],
      pairs: {
        title: "Ujian kertas litmus // The litmus paper test", ask: "Padankan bahan dengan kesannya pada kertas litmus.", en: "Match the kind of substance to what it does to litmus paper.",
        items: [["Asid // acid", "Biru menjadi merah // blue turns red"], ["Alkali // alkali", "Merah menjadi biru // red turns blue"], ["Neutral // neutral", "Tiada perubahan warna // no colour change"]]
      },
      sort: {
        title: "Asid, alkali atau neutral? // Acid, alkali or neutral?", ask: "Bahan ini berasid, beralkali atau neutral?", en: "Is this substance acidic, alkaline or neutral?",
        cats: ["Asid // acid", "Alkali // alkali", "Neutral // neutral"],
        items: [["Jus limau // lime juice", 0], ["Cuka // vinegar", 0], ["Jus oren // orange juice", 0], ["Asam jawa // tamarind", 0], ["Air sabun // soapy water", 1], ["Ubat gigi // toothpaste", 1], ["Syampu // shampoo", 1], ["Serbuk penaik // baking soda", 1], ["Air suling // distilled water", 2], ["Larutan gula // sugar solution", 2], ["Larutan garam // salt solution", 2], ["Minyak masak // cooking oil", 2]]
      }
    },
    {
      id: "suria", t: "Sistem Suria", en: "The Solar System", icon: "🪐",
      notes: [
        ["Sistem Suria terdiri daripada Matahari, lapan planet, satelit semula jadi, asteroid, meteoroid dan komet.", "The Solar System is made up of the Sun, eight planets, natural satellites, asteroids, meteoroids and comets.", "☀️"],
        ["Matahari berada di pusat Sistem Suria. Matahari ialah bintang.", "The Sun is at the centre of the Solar System. The Sun is a star.", "⭐"],
        ["Urutan planet dari Matahari: Utarid, Zuhrah, Bumi, Marikh, Musytari, Zuhal, Uranus, Neptun.", "The planets in order from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.", "🪐"],
        ["Planet beredar mengelilingi Matahari mengikut orbit masing-masing.", "Each planet travels round the Sun in its own orbit.", "🔄"],
        ["Semakin jauh planet dari Matahari, semakin lama masa yang diambil untuk mengelilingi Matahari.", "The further a planet is from the Sun, the longer it takes to go round the Sun.", "⏳"],
        ["Bumi ialah satu-satunya planet yang diketahui mempunyai hidupan. Bulan ialah satelit semula jadi Bumi.", "Earth is the only planet known to have living things. The Moon is Earth's natural satellite.", "🌍"]
      ],
      q: [
        ["Apakah yang berada di pusat Sistem Suria?", "What is at the centre of the Solar System?", ["Matahari // the Sun", "Bumi // Earth", "Bulan // the Moon", "Musytari // Jupiter"]],
        ["Berapakah bilangan planet dalam Sistem Suria?", "How many planets are in the Solar System?", ["8", "7", "9", "10"]],
        ["Planet manakah yang paling hampir dengan Matahari?", "Which planet is nearest the Sun?", ["Utarid // Mercury", "Zuhrah // Venus", "Bumi // Earth", "Neptun // Neptune"]],
        ["Planet manakah yang paling jauh dari Matahari?", "Which planet is furthest from the Sun?", ["Neptun // Neptune", "Uranus // Uranus", "Zuhal // Saturn", "Utarid // Mercury"]],
        ["Planet manakah yang paling besar?", "Which planet is the biggest?", ["Musytari // Jupiter", "Zuhal // Saturn", "Bumi // Earth", "Marikh // Mars"]],
        ["Planet manakah yang paling kecil?", "Which planet is the smallest?", ["Utarid // Mercury", "Marikh // Mars", "Zuhrah // Venus", "Bumi // Earth"]],
        ["Bumi ialah planet yang keberapa dari Matahari?", "Which planet from the Sun is Earth?", ["Ketiga // the third", "Pertama // the first", "Kedua // the second", "Keempat // the fourth"]],
        ["Planet manakah yang dikenali sebagai Planet Merah?", "Which planet is known as the Red Planet?", ["Marikh // Mars", "Zuhrah // Venus", "Musytari // Jupiter", "Neptun // Neptune"]],
        ["Planet manakah yang mempunyai gelang yang jelas kelihatan?", "Which planet has rings that are easy to see?", ["Zuhal // Saturn", "Bumi // Earth", "Utarid // Mercury", "Marikh // Mars"]],
        ["Apakah nama laluan planet mengelilingi Matahari?", "What is the path of a planet round the Sun called?", ["Orbit // orbit", "Jalan // road", "Garisan // line", "Bulatan // circle"]],
        ["Apakah satelit semula jadi Bumi?", "What is Earth's natural satellite?", ["Bulan // the Moon", "Matahari // the Sun", "Marikh // Mars", "Komet // a comet"]],
        ["Planet manakah mengambil masa paling lama untuk mengelilingi Matahari?", "Which planet takes the longest to go round the Sun?", ["Neptun // Neptune", "Utarid // Mercury", "Bumi // Earth", "Marikh // Mars"], "Neptun paling jauh dari Matahari, jadi orbitnya paling panjang. // Neptune is furthest from the Sun, so its orbit is the longest."],
        ["Planet manakah yang diketahui mempunyai hidupan?", "Which planet is known to have living things?", ["Bumi // Earth", "Marikh // Mars", "Zuhrah // Venus", "Musytari // Jupiter"]],
        ["Matahari ialah sebuah ...", "The Sun is a ...", ["Bintang // star", "Planet // planet", "Satelit // satellite", "Komet // comet"]]
      ],
      pairs: {
        title: "Mengenal planet // Getting to know the planets", ask: "Padankan planet dengan cirinya.", en: "Match the planet to its feature.",
        items: [["Utarid // Mercury", "Paling hampir dengan Matahari // nearest the Sun"], ["Bumi // Earth", "Mempunyai hidupan // has living things"], ["Marikh // Mars", "Planet Merah // the Red Planet"], ["Musytari // Jupiter", "Planet paling besar // the biggest planet"], ["Zuhal // Saturn", "Mempunyai gelang // has rings"], ["Neptun // Neptune", "Paling jauh dari Matahari // furthest from the Sun"]]
      },
      order: [
        ["Susun empat planet yang pertama dari Matahari.", "Put the first four planets from the Sun in order.", ["Utarid // Mercury", "Zuhrah // Venus", "Bumi // Earth", "Marikh // Mars"]],
        ["Susun empat planet yang terakhir dari Matahari.", "Put the last four planets from the Sun in order.", ["Musytari // Jupiter", "Zuhal // Saturn", "Uranus", "Neptun // Neptune"]],
        ["Susun lapan planet dari Matahari.", "Put all eight planets in order from the Sun.", ["Utarid // Mercury", "Zuhrah // Venus", "Bumi // Earth", "Marikh // Mars", "Musytari // Jupiter", "Zuhal // Saturn", "Uranus", "Neptun // Neptune"]]
      ]
    },
    {
      id: "takal", t: "Mesin: Takal", en: "Machines: the pulley", icon: "🏗️",
      notes: [
        ["Takal ialah sejenis mesin ringkas.", "A pulley is a kind of simple machine.", "⚙️"],
        ["Takal terdiri daripada roda yang beralur dan tali.", "A pulley is made of a grooved wheel and a rope.", "🛞"],
        ["Tali dililit pada alur roda. Apabila tali ditarik ke bawah, beban naik ke atas.", "The rope runs in the groove of the wheel. When the rope is pulled down, the load goes up.", "⬆️"],
        ["Takal memudahkan kita mengangkat beban ke tempat yang tinggi.", "A pulley makes it easier to lift a load to a high place.", "💪"],
        ["Contoh penggunaan takal: tiang bendera, kren, perigi, lif dan bidai tingkap.", "Examples of pulleys in use: a flagpole, a crane, a well, a lift and window blinds.", "🚩"]
      ],
      q: [
        ["Takal ialah sejenis ...", "A pulley is a kind of ...", ["Mesin ringkas // simple machine", "Haiwan // animal", "Tumbuhan // plant", "Bahan kimia // chemical"]],
        ["Takal terdiri daripada apa?", "What is a pulley made of?", ["Roda beralur dan tali // a grooved wheel and a rope", "Bateri dan mentol // a battery and a bulb", "Magnet dan besi // a magnet and iron", "Kayu dan paku // wood and nails"]],
        ["Apakah kegunaan takal?", "What is a pulley used for?", ["Memudahkan mengangkat beban // making it easier to lift a load", "Menyalakan lampu // lighting a lamp", "Mengukur suhu // measuring temperature", "Memotong kertas // cutting paper"]],
        ["Apabila tali takal ditarik ke bawah, apakah yang berlaku kepada beban?", "When the pulley rope is pulled down, what happens to the load?", ["Beban naik ke atas // the load goes up", "Beban turun ke bawah // the load goes down", "Beban tidak bergerak // the load does not move", "Beban menjadi lebih berat // the load gets heavier"]],
        ["Di manakah tali diletakkan pada takal?", "Where does the rope sit on a pulley?", ["Pada alur roda // in the groove of the wheel", "Di bawah beban // under the load", "Di dalam air // in water", "Pada dinding // on the wall"]],
        ["Yang manakah menggunakan takal?", "Which of these uses a pulley?", ["Tiang bendera // flagpole", "Gunting // scissors", "Pensel // pencil", "Sudu // spoon"]],
        ["Jentera manakah menggunakan takal untuk mengangkat beban berat di tapak pembinaan?", "Which machine uses pulleys to lift heavy loads on a building site?", ["Kren // crane", "Basikal // bicycle", "Kipas // fan", "Radio // radio"]],
        ["Bagaimanakah air ditimba dari perigi dengan mudah?", "How is water drawn up from a well easily?", ["Menggunakan takal // using a pulley", "Menggunakan magnet // using a magnet", "Menggunakan kanta // using a lens", "Menggunakan termometer // using a thermometer"]],
        ["Mengapakah roda takal mempunyai alur?", "Why does a pulley wheel have a groove?", ["Supaya tali tidak tergelincir // so the rope does not slip off", "Supaya roda lebih cantik // so the wheel looks nicer", "Supaya roda lebih berat // so the wheel is heavier", "Supaya beban jatuh // so the load falls"]],
        ["Yang manakah BUKAN contoh penggunaan takal?", "Which is NOT an example of a pulley in use?", ["Pembaris // ruler", "Lif // lift", "Kren // crane", "Bidai tingkap // window blinds"]]
      ],
      sort: {
        title: "Menggunakan takal atau tidak? // Uses a pulley or not?", ask: "Adakah benda ini menggunakan takal?", en: "Does this use a pulley?",
        cats: ["Menggunakan takal // uses a pulley", "Tidak menggunakan takal // does not use a pulley"],
        items: [["Tiang bendera // flagpole", 0], ["Kren // crane", 0], ["Perigi // well", 0], ["Lif // lift", 0], ["Bidai tingkap // window blinds", 0], ["Gunting // scissors", 1], ["Sudu // spoon", 1], ["Pembaris // ruler", 1], ["Pensel // pencil", 1], ["Buku // book", 1]]
      },
      order: [
        ["Susun langkah menaikkan bendera.", "Put the steps for raising a flag in order.", ["Ikat bendera pada tali // tie the flag to the rope", "Tarik tali ke bawah // pull the rope down", "Roda takal berputar // the pulley wheel turns", "Bendera naik ke atas // the flag goes up"]]
      ]
    }
  ]
});
