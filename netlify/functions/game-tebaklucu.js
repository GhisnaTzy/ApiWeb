const data = [
  {
      "soal": "Pemain bola apa yang beratnya 3kg?",
      "jawaban": "Bambang tabung gas"
  },
  {
      "soal": "Kenapa matahari tenggelam?",
      "jawaban": "Karena gak bisa berenang"
  },
  {
      "soal": "Penyayi luar negeri yang suka sepedaan",
      "jawaban": "Selena Gowes"
  },
  {
      "soal": "Penyanyi yang rambutnya gak lurus?",
      "jawaban": "Ayu keriting."
  },
  {
      "soal": "Kenapa sepian ada dua?",
      "jawaban": "Kalo dua kesepion, kalo satu kesepian"
  },
  {
      "soal": "Kenapa Sinterklas ketawanya hohoho",
      "jawaban": "Kalo hihihi kan kuntilanak"
  },
  {
      "soal": "Ada bebek 10 dikali 2, jadi berapa",
      "jawaban": "Jadi 8, soalnya kan yang 2 ada di kali"
  },
  {
      "soal": "Siapa penyanyi yang gak suka ngebut",
      "jawaban": "Ed sered"
  },
  {
      "soal": "Penyayi yang sering gak sadar diri",
      "jawaban": "Pingsan mambo."
  },
  {
      "soal": "Kenapa zombie kalau nyerang musti bareng-bareng?",
      "jawaban": "Karena kalau sendiri namanya zomblo"
  },
  {
      "soal": "Gubernur apa yang suka nyayi",
      "jawaban": "Biduan Kemil"
  },
  {
      "soal": "Wakil presiden yang sering nonton streming?",
      "jawaban": "Muhammad Youtube Kalla"
  },
  {
      "soal": "Ada gak buah rambutan yang berbahaya kalau kita makan",
      "jawaban": "Ada, kalau makannya di tengah jalan tol"
  },
  {
      "soal": "Cuaca sedang mendung. Ada 5 orang tapi hanya ada 1 payung. Bagaimana caranya agar mereka semua tidak kehujanan",
      "jawaban": "Tinggal jalan saja, kan baru mendung, belum hujan"
  },
  {
      "soal": "Ayam apa yang bikin sebel",
      "jawaban": "Ayamnya habis, tapi nasinya masih banyak."
  },
  {
      "soal": "Buah apa yang isinya durian tapi kulitnya berduri",
      "jawaban": "Yaa buah durian lahh"
  },
  {
      "soal": "Kenapa di komputer ada tulisan enter",
      "jawaban": "Karena kalo tulisannya entar, programnya ngga jalan-jalan, dong"
  },
  {
      "soal": "Kunci apa yang bisa bikin orang joget",
      "jawaban": "Kunci-kunci hota hee"
  },
  {
      "soal": "Rambut putih namanya uban, rambut merah namanya pirang, kalo rambut hijau namanya apa",
      "jawaban": "Rambutan belum mateng"
  },
  {
      "soal": "Buah apa yang paling kaya",
      "jawaban": "Sri Kaya"
  },
  {
      "soal": "Benda kecil apa yang bisa ngeluarin orang",
      "jawaban": "Bel Rumah"
  },
  {
      "soal": "Belajar bahasa Mandarin, lantai basah artinya apa",
      "jawaban": "Lhi Chin"
  },
  {
      "soal": "Apa itu Cemilan",
      "jawaban": "Cecudah Celapan, Cebelum Cepuluh"
  },
  {
      "soal": "Gang apa yang selalu bikin ibu-ibu kesel",
      "jawaban": "Gang-guin suaminya"
  },
  {
      "soal": "Kutu jenis yang amat mengerikan",
      "jawaban": "Kutu-kan"
  },
  {
      "soal": "Kenapa seorang dalang selalu membawa keris pada saat sedang melakukan pertunjukan wayang? ",
      "jawaban": "Karena jika dia membawa motor, jadi gak seru nonton wayangnya"
  },
  {
      "soal": "Apa nama benda yang lebih bermanfaat ketika sudah pecah?",
      "jawaban": "Telur! maksudnya dipecahkan hehe"
  },
  {
      "soal": "Apa judul lagu pembunuhan yang sadis",
      "jawaban": "Potong bebek angsa"
  },
  {
      "soal": "Kenapa dalang membawa keris ketika pertunjukan wayang? ",
      "jawaban": "Karena kalau bawa kompor, istrinya gak bisa masak"
  },
  {
      "soal": "Tau gak angin warnanya apa",
      "jawaban": "Merah. Coba lihat hasil kerokan di badan orang yang sedang masuk angin"
  },
  {
      "soal": "Siapakah yang suka naik angkot, tetapi tidak pernah bayar angkot? ",
      "jawaban": "Supir angkot"
  },
  {
      "soal": "Daun apa yang tidak pernah gugur",
      "jawaban": "Daun telinga"
  },
  {
      "soal": "Benda apa keluar ketika diputar",
      "jawaban": "Lipstik bibir"
  },
  {
      "soal": "Tahu kamu malam apa yang sangat mengerikan dan menakutkan",
      "jawaban": "Maklam-pir"
  },
  {
      "soal": "Jika orang sakit dibawa ke rumah sakit, tetapi jika rumah sakit yang sakit dibawa ke mana? ",
      "jawaban": "Tukang bangunan"
  },
  {
      "soal": "Ada orang sedang mencari sesuatu datang bersih pulang babak belur. Apa yang sebenanya dia cari?",
      "jawaban": "Orang yang lagi cari masalah"
  }
];

exports.handler = async () => {
  const random = data[Math.floor(Math.random() * data.length)];
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(random, null, 2),
  };
};
