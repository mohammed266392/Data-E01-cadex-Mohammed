/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const cadexService = require("./service/serviceCadex");

const controller = {
    async getCadex(req, res, _next) {
        const dataPhrase = await cadexService.generate();
        const valuesToReplace = req.query;
        console.log(valuesToReplace);
        const copy = { ...dataPhrase, ...valuesToReplace };
        // console.log("ma phrase ", phrase);
        res.json(copy.glue());
    },
    async postCadex(req, res, next) {
        // console.log("ma phrase ", phrase);
        const values = req.body;

        // on insère les valeurs
        console.log("valeurs : ", values);
        // je renvoie une phrase avec les valeurs ajoutées
        const cadex = await cadexService.generate();
        console.log("mon cadex  ", cadex);
        const copy = { ...cadex, ...values };
        await cadexService.add(values);
        console.log("mon cadex courant ", copy);
        res.json(copy.glue());
    },
    patchCadex(req, res, _next) {
        // console.log("ma phrase ", phrase)

        res.json({ name: "ok" });
    },
};

module.exports = controller;
