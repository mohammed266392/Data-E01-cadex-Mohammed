/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const cadexService = require("./service/serviceCadex");

const controller = {
    async cadex(_req, res, _next) {
        const dataPhrase = cadexService.generate();

        // console.log("ma phrase ", phrase);
        res.json(cadexService.phraseData(dataPhrase));
    },
};

module.exports = controller;
