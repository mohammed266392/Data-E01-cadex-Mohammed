/* eslint-disable no-console */
require("dotenv").config();
const express = require("express");

const app = express();
const router = require("./app/router");

app.use(express.static("public"));
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
