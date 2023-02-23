const express = require(`express`);
const router = express.Router();
const controller = require(`../controller/InfoLinksController`);

router.route("/api").get(controller.getInfoLinks);

module.exports = router;
