/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const cadexService = require("./service/serviceCadex");

const controller = {
    getCadex(req, res, _next) {
        const dataPhrase = cadexService.generate();
        const valuesToReplace = req.query;
        console.log(valuesToReplace);
        const copy = { ...dataPhrase, ...valuesToReplace };
        // console.log("ma phrase ", phrase);
        res.json(copy.glue());
    },
    postCadex(req, res, _next) {
        // console.log("ma phrase ", phrase);
        const values = req.body;

        // on insère les valeurs
        cadexService.add(values);

        // je renvoie une phrase avec les valeurs ajoutées
        const cadex = cadexService.generate();
        const copy = { ...cadex, ...values };

        res.json(copy.glue());
    },
};

module.exports = controller;
