const data = require("../../data/parts.json");

const cadexService = {
    /**
     *
     * @returns {name,verb,adjective,complement}
     */
    generate() {
        // phrase générée à partir de data/parts.json
        return {
            name: this.getRandomName(),
            verb: this.getRandomVerb(),
            adjective: this.getRandomAdj(),
            complement: this.getRandomComp(),
            glue() {
                return `${this.name} ${this.verb} ${this.adjective} ${this.complement} `;
            },
        };
        // return "toto est très beau sur un bateau";
    },

    getRandomName() {
        // on va chercher un name à l'index X
        // X est compris entre 0 et 8 (data.names.length-1)
        const X = Math.round(Math.random() * (data.names.length - 1));

        return data.names[X];
    },
    getRandomVerb() {
        // on va chercher un name à l'index X
        // X est compris entre 0 et 8 (data.names.length-1)
        const X = Math.round(Math.random() * (data.verbs.length - 1));

        return data.verbs[X];
    },
    getRandomAdj() {
        // on va chercher un name à l'index X
        // X est compris entre 0 et 8 (data.names.length-1)
        const X = Math.round(Math.random() * (data.adjectives.length - 1));

        return data.adjectives[X];
    },
    getRandomComp() {
        // on va chercher un name à l'index X
        // X est compris entre 0 et 8 (data.names.length-1)
        const X = Math.round(Math.random() * (data.complements.length - 1));

        return data.complements[X];
    },
    /**
     * @param {json} dataPhrase
     */
    phraseData(dataPhrase) {
        let phrase = "";
        for (const key of Object.keys(dataPhrase)) {
            phrase = `${phrase} ${dataPhrase[key]}`;
        }
        return phrase;
    },
};

module.exports = cadexService;
