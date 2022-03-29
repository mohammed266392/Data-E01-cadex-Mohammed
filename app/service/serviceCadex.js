const data = require("../../data/parts.json");
const client = require("./../../db/connection");

const cadexService = {
    /**
     *
     * @returns {name,verb,adjective,complement}
     */
    async generate() {
        // phrase générée à partir de data/parts.json
        return {
            name: await this.getRandomName(),
            verb: await this.getRandomVerb(),
            adjective: await this.getRandomAdj(),
            complement: await this.getRandomComp(),
            glue() {
                return `${this.name} ${this.verb} ${this.adjective} ${this.complement} `;
            },
        };
        // return "toto est très beau sur un bateau";
    },

    async getRandomName() {
        const query = {
            text: `SELECT * FROM noms
            ORDER BY RANDOM()
            LIMIT 1`,
        };
        // On effectue la requête et on attends la réponse si elle a bien été effectuée
        const result = await client.query(query);
        return result.rows[0].value;
        // on va chercher un name à l'index X
        // X est compris entre 0 et 8 (data.names.length-1)
    },
    async getRandomVerb() {
        const query = {
            text: `SELECT * FROM verbs
            ORDER BY RANDOM()
            LIMIT 1`,
        };
        // On effectue la requête et on attends la réponse si elle a bien été effectuée
        const result = await client.query(query);
        return result.rows[0].value;
    },
    async getRandomAdj() {
        const query = {
            text: `SELECT * FROM adjectives
            ORDER BY RANDOM()
            LIMIT 1`,
        };
        // On effectue la requête et on attends la réponse si elle a bien été effectuée
        const result = await client.query(query);
        return result.rows[0].value;
    },
    async getRandomComp() {
        const query = {
            text: `SELECT * FROM complements
            ORDER BY RANDOM()
            LIMIT 1`,
        };
        // On effectue la requête et on attends la réponse si elle a bien été effectuée
        const result = await client.query(query);
        return result.rows[0].value;
    },
    /**
     * Ajout des valeurs à celles présentes
     * @param {*} valeurs fournies par le formulaire
     */
    async add(values) {
        // on récupère les clefs d'un objet avec Object.keys
        const keys = Object.keys(values);
        console.log(keys);
        console.log(values);
        const promesse = [];
        // je parcours mes clefs et pour chaque clef, j'insère la valeur dans le tableau correspondant (name va dans names)
        for (const key of keys) {
            const query = {
                text: `INSERT INTO "${key}s" ("value") VALUES  ('${values[key]}');`,
            };
            console.log("la requete est : ", query.text);
            // console.log("les valeurs de la requete sont  : ", query.value);

            // On effectue la requête et on attends la réponse si elle a bien été effectuée
            promesse.push(client.query(query));
            // data["names"].push(values["name"])
            // équivalent à data.names.push(values.name)
            // data.names.push("Michel")
        }
        Promise.all(promesse).then(() => {
            console.log("nous avons fini de traiter toutes les promesses");
        });
    },
};

module.exports = cadexService;
