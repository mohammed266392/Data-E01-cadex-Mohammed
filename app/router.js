const express = require("express");

const controller = require("./controller");

const router = express.Router();
router.get("/v1/cadex", controller.getCadex);
router.post("/v1/cadex", controller.postCadex);

module.exports = router;
