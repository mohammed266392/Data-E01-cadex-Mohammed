const express = require("express");

const controller = require("./controller");

const router = express.Router();
router.get("/v1/cadex", controller.cadex);
// router.post('/v1/cadex',controller.cadex);

module.exports = router;
