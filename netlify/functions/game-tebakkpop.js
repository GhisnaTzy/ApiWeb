const data = [
  {
    "index": 0,
    "img": "https://telegra.ph/file/12ecc386a2bbd1716ab38.jpg",
    "jawaban": "kai baekyun",
    "deskripsi": "Tebak siapa mereka?"
  },
  {
    "index": 1,
    "img": "https://telegra.ph/file/08df633edc47bc73bc443.jpg",
    "jawaban": "Suju",
    "deskripsi": "Tebak siapa mereka?"
  },
  {
    "index": 2,
    "img": "https://telegra.ph/file/ac922a149cca45d151231.jpg",
    "jawaban": "Joy",
    "deskripsi": "Tebak siapa mereka?"
  },
  {
    "index": 3,
    "img": "https://telegra.ph/file/9ef6c69e91d9d311783b1.jpg",
    "jawaban": "CNT",
    "deskripsi": "Tebak siapa mereka?"
  },
  {
    "index": 4,
    "img": "https://telegra.ph/file/b38429ea52c495f6430e7.jpg",
    "jawaban": "nct drem",
    "deskripsi": "Tebak siapa mereka?"
  },
  {
    "index": 5,
    "img": "https://telegra.ph/file/6d55dde6e99a1b74a3700.jpg",
    "jawaban": "snsd",
    "deskripsi": "Tebak siapa mereka?"
  },
  {
    "index": 6,
    "img": "https://telegra.ph/file/67df62321fb0c1430f6af.jpg",
    "jawaban": "Seventen",
    "deskripsi": "Tebak siapa mereka?"
  },
  {
    "index": 7,
    "img": "https://telegra.ph/file/2393de447b2a7430a6dde.jpg",
    "jawaban": "iu baekyun",
    "deskripsi": "Tebak siapa mereka?"
  },
  {
    "index": 8,
    "img": "https://telegra.ph/file/1fefe3bedfcd86df9c721.jpg",
    "jawaban": "khachi",
    "deskripsi": "Tebak siapa mereka?"
  },
  {
    "index": 9,
    "img": "https://telegra.ph/file/75ab9b2c00de28937a437.jpg",
    "jawaban": "si kritnamber",
    "deskripsi": "Tebak siapa mereka?"
  },
  {
    "index": 10,
    "img": "https://telegra.ph/file/933ca6c0f0da468f15c23.jpg",
    "jawaban": "ateez",
    "deskripsi": "Tebak siapa mereka?"
  },
  {
    "index": 11,
    "img": "https://telegra.ph/file/e52ddb4c225fd95639f58.jpg",
    "jawaban": "enypen",
    "deskripsi": "Tebak siapa mereka?"
  },
  {
    "index": 12,
    "img": "https://telegra.ph/file/a7b07022c1843911fb6c3.jpg",
    "jawaban": "Black pink",
    "deskripsi": "Tebak siapa mereka?"
  },
  {
    "index": 13,
    "img": "https://telegra.ph/file/a73b6811ec89904656588.jpg",
    "jawaban": "BTS",
    "deskripsi": "Tebak siapa mereka?"
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
