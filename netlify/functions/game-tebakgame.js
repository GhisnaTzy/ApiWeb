const data = [

  {
      "img": "https://telegra.ph/file/418dbffa6df91dd507171.jpg",
      "jawaban": "Pou"
      },
  {   "img": "https://telegra.ph/file/5a7b19747e453015f1970.jpg",
      "jawaban": "Mobile Legends"
      },
  {
      "img": "https://telegra.ph/file/d28d9cca9c4034f714b76.jpg",
      "jawaban": "Clash of Clans"
      },
  {
      "img": "https://telegra.ph/file/682cb73d267654ba6e264.jpg",
      "jawaban": "Clash Royale"
      },
  {
      "img": "https://telegra.ph/file/ccc5952e0c4997c141404.jpg",
      "jawaban": "Boom Beach"
      },
  {
      "img": "https://telegra.ph/file/c2a7d05736e30f075dc04.jpg",
      "jawaban": "Hay Day"
      },
  {
      "img": "https://telegra.ph/file/6f58e93b1aa4d6277a644.jpg",
      "jawaban": "Counter Strike"
      },
  {
      "img": "https://telegra.ph/file/e4b0a279c657118761afe.jpg",
      "jawaban": "Grand Theft Auto San Andreas"
      },
  {
      "img": "https://telegra.ph/file/2ee6b0af3114e07fa760b.png",
      "jawaban": "Tales Runner"
      },
  {
      "img": "https://telegra.ph/file/0420e1760a68a77b6a9b5.jpg",
      "jawaban": "Genshin Impact"
      },
  {
      "img": "https://telegra.ph/file/9d112a58a0e695f9d10c8.jpg",
      "jawaban": "Honkai Impact"
      },
  {
      "img": "https://telegra.ph/file/91c6fdde323575fda3538.jpg",
      "jawaban": "Subway Surfers"
      },
  {
      "img": "https://telegra.ph/file/33f68c4a75da8209aac90.jpg",
      "jawaban": "Temple Run"
      },
  {
      "img": "https://telegra.ph/file/efa28734c1851bb68d935.jpg",
      "jawaban": "My Talking Tom"
      },
  {
      "img": "https://telegra.ph/file/e34942302d28ec9498176.jpg",
      "jawaban": "Talking Angela"
      },
  {
      "img": "https://telegra.ph/file/0facdb4d7594257b3382d.jpg",
      "jawaban": "Piano Tiles 2"
      },
  {
      "img": "https://telegra.ph/file/8a1fd307cbf5259167162.jpg",
      "jawaban": "Henry Stickmin"
      },
  {
      "img": "https://telegra.ph/file/fd5d8855003819c4103af.jpg",
      "jawaban": "Lost Saga"
      },
  {
      "img": "https://telegra.ph/file/691095b8e6c63cb4fd709.jpg",
      "jawaban": "Iron Saga"
      },
  {
      "img": "https://telegra.ph/file/ba86d11b6da8262c430c6.jpg",
      "jawaban": "Minecraft"
      },
  {
      "img": "https://telegra.ph/file/11b36dde55555eeb14517.jpg",
      "jawaban": "Resident Evil 4"
      },
  {
      "img": "https://telegra.ph/file/def9a6070981b3b1da832.jpg",
      "jawaban": "Grand Theft Auto Vice City"
      },
  {
      "img": "https://telegra.ph/file/e2c8fe5606379028d4b03.jpg",
      "jawaban": "Grand Theft Auto V"
      },
  {
      "img": "https://telegra.ph/file/c403f026120b36463cb71.jpg",
      "jawaban": "Guitar Hero"
      },
  {
      "img": "https://telegra.ph/file/a6bb7b25e9899624f2ad7.jpg",
      "jawaban": "Bully"
      },
  {
      "img": "https://telegra.ph/file/af8fcb2ad7171261b5fc0.jpg",
      "jawaban": "League of Legends"
      },
  {
      "img": "https://telegra.ph/file/e41251f3a6f398d7027f5.jpg",
      "jawaban": "DotA II"
      },
  {
      "img": "https://telegra.ph/file/d24695d764e5882db1f34.png",
      "jawaban": "Ayodance"
      },
  {
      "img": "https://telegra.ph/file/e5ba5fa040dab8ba423d6.png",
      "jawaban": "Player Unknowns Battleground"
      },
  {
      "img": "https://telegra.ph/file/0b698504c9ed88fffae51.jpg",
      "jawaban": "Point Blank"
      },
  {
      "img": "https://telegra.ph/file/24126e011c821ee38b7fc.jpg",
      "jawaban": "Basara"
      },
  {
      "img": "https://telegra.ph/file/72f55035f68a6e347dd13.jpg",
      "jawaban": "Mortal Combat Shaolin Monks"
      },
  {
      "img": "https://telegra.ph/file/9ddfcde7a04cfbe7ffb5b.jpg",
      "jawaban": "Metal Slug"
      },
  {
      "img": "https://telegra.ph/file/876178b79b966f51f2ae3.jpg",
      "jawaban": "Downhill"
      },
  {
      "img": "https://telegra.ph/file/7bd6e614346b295267d2c.jpg",
      "jawaban": "Plants Vs Zombie"
      },
  {
      "img": "https://telegra.ph/file/a23466ade02fb4139eb56.jpg",
      "jawaban": "Zuma"
      },
  {
      "img": "https://telegra.ph/file/47f581c076bdad5b3d139.jpg",
      "jawaban": "Insaniquarium"
      },
  {
      "img": "https://telegra.ph/file/83d16a4600502050c3f6f.jpg",
      "jawaban": "Platypus"
      },
  {
      "img": "https://telegra.ph/file/5b817550f7e9445395835.jpg",
      "jawaban": "Rumble Racing"
      }
]
;

exports.handler = async () => {
  const random = data[Math.floor(Math.random() * data.length)];
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(random, null, 2),
  };
};
