const express = require("express");

const controller = require("./controller");

const router = express.Router();
router.get("/v1/cadex", controller.getCadex);
router.post("/v1/cadex", controller.postCadex);
// router.patch("/v1/cadex", controller.patchCadex);

module.exports = router;
