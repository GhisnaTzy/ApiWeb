const data = [
  {
   "lagu": "https://g.top4top.io/m_2045h3rp51.mp3",
   "judul": "Pudar",
   "artis": "Alan Walker"
  },
  {
   "lagu": "https://j.top4top.io/m_2045mhz4a1.mp3",
   "judul": "Pudar",
   "artis": "Rossa"
  },
  {
   "lagu": "https://d.top4top.io/m_2279c43oo0.mp3",
   "judul": "Saya Membutuhkan Dokter",
   "artis": "Dr. Dre ft. Eminem, Skylar Grey"
  },
  {
   "lagu": "https://b.top4top.io/m_22770t0if0.mp3",
   "judul": "Membangun Pelacur",
   "artis": "Bella Poarch"
  },
  {
   "lagu": "https://c.top4top.io/m_2293vpv6s0.mp3",
   "judul": "Beri Aku Alasan",
   "artis": "P!nk"
  },
  {
   "lagu": "https://c.top4top.io/m_2277v3fez0.mp3",
   "judul": "Saat Terburuk",
   "artis": "Berkeringat Merah Muda"
  },
  {
   "lagu": "https://e.top4top.io/m_204572ywy1.mp3",
   "judul": "Kepastian Rasa",
   "artis": "Kru ZBI"
  },
  {
   "lagu": "https://i.top4top.io/m_2045l8hwa1.mp3",
   "judul": "Lili",
   "artis": "Alan Walker"
  },
  {
   "lagu": "https://c.top4top.io/m_2045mevgl1.mp3",
   "judul": "Buka",
   "artis": "Tokyo Ghoul"
  },
  {
   "lagu": "https://a.top4top.io/m_2045a4prl1.mp3",
   "judul": "Bersyukur",
   "artis": "Neffex"
  },
  {
   "lagu": "https://j.top4top.io/m_2045opkmh1.mp3",
   "judul": "Sesuatu Seperti Ini",
   "artis": "Alan Walker"
  },
  {
   "lagu": "https://b.top4top.io/m_22911u0be0.mp3",
   "judul": "Masalah Adalah Teman",
   "artis": "Lenka"
  },
  {
   "lagu": "https://i.top4top.io/m_2045s3t221.mp3",
   "judul": "Waka Waka",
   "artis": "Shakira"
  },
  {
   "lagu": "https://h.top4top.io/m_20469o1zl1.mp3",
   "judul": "Batal",
   "artis": "Linkin Park"
  },
  {
   "lagu": "https://k.top4top.io/m_20461d0421.mp3",
   "judul": "Mati Muda",
   "artis": "Kesha"
  },
  {
   "lagu": "https://g.top4top.io/m_2046my4ft0.mp3",
   "judul": "Tanggal Main",
   "artis": "Melanie Martinez"
  },
  {
   "lagu": "https://h.top4top.io/m_20461ogql0.mp3",
   "judul": "Aku juga",
   "artis": "Ava Max"
  },
  {
   "lagu": "https://j.top4top.io/m_2046jrb050.mp3",
   "judul": "Legenda Tak Pernah Mati",
   "artis": "Liga Legenda"
  },
  {
   "lagu": "https://i.top4top.io/m_2046t1nh20.mp3",
   "judul": "Tentang Aku Kau Dan Dia",
   "artis": "Kangen Band"
  },
  {
   "lagu": "https://a.top4top.io/m_2046fhj6y0.mp3",
   "judul": "Ruang Rindu",
   "artis": "Letto"
  },
  {
   "lagu": "https://d.top4top.io/m_2046cdz240.mp3",
   "judul": "Surat Cinta Untuk Starla",
   "artis": "Perawan"
  },
  {
   "lagu": "https://l.top4top.io/m_20464jk570.mp3",
   "judul": "Kusimpan Rindu Di hati",
   "artis": "Punk Rock Jalanan"
  },
  {
   "lagu": "https://e.top4top.io/m_2290jei5g0.mp3",
   "judul": "Merindukanmu",
   "artis": "Dash Uciha"
  },
  {
   "lagu": "https://d.top4top.io/m_2046vooc30.mp3",
   "judul": "Takkan Terganti",
   "artis": "Kangen Band"
  },
  {
   "lagu": "https://k.top4top.io/m_20477yi3p0.mp3",
   "judul": "Disaat Aku Tersakiti",
   "artis": "Dadali"
  },
  {
   "lagu": "https://k.top4top.io/m_2047bfvz50.mp3",
   "judul": "Payung",
   "artis": "Rihana"
  },
  {
   "lagu": "https://l.top4top.io/m_2047sewpu0.mp3",
   "judul": "Lathi",
   "artis": "Jenius Aneh"
  },
  {
   "lagu": "https://e.top4top.io/m_2047b41oj0.mp3",
   "judul": "Agan",
   "artis": "FDM"
  },
  {
   "lagu": "https://e.top4top.io/m_2047fq6220.mp3",
   "judul": "Cintailah Aku Seperti Kamu",
   "artis": "Ellie Goulding"
  },
  {
   "lagu": "https://a.top4top.io/m_22933zaum0.mp3",
   "judul": "Meraih Bintang",
   "artis": "Via Vallen"
  },
  {
   "lagu": "https://j.top4top.io/m_2078lwcuh0.mp3",
   "judul": "Tanah Ajaib",
   "artis": "Axel Johansson"
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
