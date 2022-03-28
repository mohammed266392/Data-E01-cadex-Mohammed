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
    /**
     * Ajout des valeurs à celles présentes
     * @param {*} valeurs fournies par le formulaire
     */
    add(values) {
        // on récupère les clefs d'un objet avec Object.keys
        const keys = Object.keys(values);
        console.log(keys);
        console.log(values);

        console.log("data.names avant ", data.names);
        // je parcours mes clefs et pour chaque clef, j'insère la valeur dans le tableau correspondant (name va dans names)
        for (const key of keys) {
            /*
                values = { name: 'Julie' , verb : 'arrose' }
                je veux push mon name dans data.names
                -- data.names.push(values.name);
                -- data.verbs.push(values.verb);
                -- data.complements.push(values.complement); // va jouter "undefined", il faut donc faire un test avant pour s'assurer qu'il y a une valeur
                je souhaite le faire de manière dynamique
                -- data[nomDeLaListe].push(values[nomDeLaClef])
            */
            data[`${key}s`].push(values[key]);
            // data["names"].push(values["name"])
            // équivalent à data.names.push(values.name)
            // data.names.push("Michel")
        }
        console.log("data.names après ", data.names);
    },
};

module.exports = cadexService;
