const express = require(`express`);
const router = express.Router();
const controller = require(`../../controller/characterController`);

router.route("/api/characters").get(controller.getCharacter);

module.exports = router;
