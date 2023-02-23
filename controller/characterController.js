const asyncHandler = require(`express-async-handler`);
const fs = require(`fs`);

//Get character
const getCharacter = asyncHandler(async (req, res) => {
  let dataJson = fs.readFileSync(
    "./json/character/characterRoutes.json",
    "utf-8",
    (err, jsonString) => {
      return jsonString;
    }
  );

  return res.status(200).send(dataJson);
});

module.exports = {
  getCharacter,
};
