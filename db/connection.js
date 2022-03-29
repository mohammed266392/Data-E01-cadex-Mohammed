require("dotenv").config();
const { Client } = require("pg");

// str de connection : postgres://<utilisateur>:<mot de passe>@<hote>/<bdd>
// On se connecte à la BDD a l'aide de la connection string
const client = new Client(process.env.PG_URL);

client.connect();

module.exports = client;
