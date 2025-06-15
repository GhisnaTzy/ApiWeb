const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  const filePath = path.join(__dirname, "./database/tebakkpop.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const random = data[Math.floor(Math.random() * data.length)];
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(random, null, 2));
};