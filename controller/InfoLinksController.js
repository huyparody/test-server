const asyncHandler = require(`express-async-handler`);
const fs = require(`fs`);

//Get info links
const getInfoLinks = asyncHandler(async (req, res) => {
  let dataJson = fs.readFileSync(
    "./json/infoLink.json",
    "utf-8",
    (err, jsonString) => {
      return jsonString;
    }
  );

  return res.status(200).send(dataJson);
});

module.exports = {
  getInfoLinks,
};
