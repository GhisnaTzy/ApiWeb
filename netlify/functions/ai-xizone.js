const axios = require("axios");

exports.handler = async (event) => {
  const { message } = event.queryStringParameters;

  if (!message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Parameter ?message= wajib diisi" }),
    };
  }

  const prefix =
    "(ingat namamu sekarang Xizone dan jangan tulis jika tidak ada yang tanya namamu. jika ditanya tentang menu bot atau daftar menu bot sampaikan jika mau liat daftar 'ketik *.Menu* untuk melihat ', dan jika tidak di tanya tidak usah di tulis)";
  const fullText = `${prefix} ${message}`;

  try {
    const response = await axios.get(
      "https://api.nekorinn.my.id/character-ai/arona",
      {
        params: {
          text: fullText,
          sessionid: "4536728453672432678",
        },
      }
    );

    const data = response.data;

    // Hapus 'creator' dari hasil
    if ('creator' in data) {
      delete data.creator;
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data, null, 2),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Gagal mengambil data dari API arona",
        detail: error.response?.data || error.message,
      }),
    };
  }
};
