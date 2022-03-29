/* eslint-disable no-console */
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./app/router");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
