/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-restricted-globals */
const app = {
    baseUrl: `${location.origin}/v1`,

    container: document.querySelector("main"),

    clearWords: () => {
        const words = app.container.querySelectorAll(".word");
        for (const word of words) {
            word.remove();
        }
    },

    createWord: (word, index) => {
        const span = document.createElement("span");
        span.classList.add("word");
        span.textContent = word;
        span.style.animationDelay = `${index / 4}s`;
        return span;
    },

    displayPhrase: (phrase) => {
        // on retire l'éventuelle phrase affichée précédemment
        app.clearWords();
        // on récupère chaque mot dans un tableau
        const words = phrase.split(" ");
        // on crée un span avec un délai d'affichage pour l'animation
        const spans = words.map(app.createWord);
        // on ajoute les spans en spreadant le tableau
        app.container.append(...spans);
    },

    // teste la présence de la route POST sur le serveur et affiche le formulaire si elle est présente
    tryPost: async () => {
        try {
            const response = await fetch(`${app.baseUrl}/cadex`, { method: "POST" });
            if (response.status !== 404) {
                document.querySelector(".formOpen").style.display = "block";
                document.querySelector(".formOpen").classList.add("buttonPost");
            }
        } catch (error) {
            console.error(error);
        }
    },
    tryPatch: async () => {
        try {
            const response = await fetch(`${app.baseUrl}/cadex`, { method: "PATCH" });
            if (response.status !== 404) {
                const ButtonPatch = document.querySelector(".formOpen").cloneNode(true);
                ButtonPatch.classList.remove("buttonPost");
                ButtonPatch.style.display = "block";
                ButtonPatch.style.left = "150px";
                ButtonPatch.textContent = "Patch";
                ButtonPatch.classList.add("buttonPatch");

                // [newChild, child1, child2]
                document.querySelector("main").prepend(ButtonPatch);
            }
        } catch (error) {
            console.error(error);
        }
    },
    showForm: (event, form) => {
        console.log("mon param1 : ", event);
        console.log("mon param : ", form);
        // document.querySelector(`#${form}`).style.display = "block";
    },

    hideForm: () => {
        document.querySelector("form").style.display = "none";
        document.querySelector(".formOpen").style.display = "block";
    },

    postCadex: async (event) => {
        // on intercepte la validation du formulaire par le user
        event.preventDefault();
        const json = {};
        // on place les infos des inputs dans un object
        for (let i = 0; i < 4; i++) {
            const input = event.target[i];
            if (input.value) {
                json[input.id] = input.value;
            }
        }
        console.log(json);
        try {
            // on envoie l'object stringifié au serveur en indiquant le bon Content-Type
            const response = await fetch(`${app.baseUrl}/cadex`, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(json),
            });
            const phrase = await response.json();
            // on affiche la phrase reçue en réponse
            app.displayPhrase(phrase);
        } catch (error) {
            console.error(error);
        }
    },

    // récupération d'un cadex aléatoire ou configuré via la queryString
    // cette string est stockée dans la variable location.search, on la retransmet telle quelle à la route
    fetchCadex: async () => {
        try {
            const response = await fetch(`${app.baseUrl}/cadex${location.search}`);
            const phrase = await response.json();
            console.log("ma phrase dans JS ", phrase);
            app.displayPhrase(phrase);
        } catch (error) {
            console.error(error);
        }
    },

    init: async () => {
        console.log(location.origin);
        await app.fetchCadex();
        await app.tryPost();
        await app.tryPatch();
        document.querySelector("#again").addEventListener("click", app.fetchCadex);
        document.querySelector(".buttonPost").addEventListener("click", () => {
            document.querySelector("#formPost").style.display = "block";
        });
        document.querySelector("#formPost .formClose").addEventListener("click", app.hideForm);

        document.querySelector(".buttonPatch").addEventListener("click", () => {
            document.querySelector("#formPatch").style.display = "block";
        });
        document.querySelector("#formPatch .formClose").addEventListener("click", () => {
            document.querySelector("#formPatch").style.display = "none";
            document.querySelector("#formPatch .formOpen").style.display = "block";
        });
        document.querySelector("#formPost").addEventListener("submit", (event) => {
            console.log("je ne doigt pas recharcher");
            event.preventDefault();
        });
        // document.querySelector(".buttonPatch").addEventListener("click", app.showForm, "formPatch");
        // document.querySelector("#formPatch, .formOpen").addEventListener("click", app.showForm("formPatch"));
        // document.querySelectorAll(".formClose").addEventListener("click", app.hideForm);
        // });
        // document.querySelector("#formPost").addEventListener("submit", app.postCadex);
        // document.querySelector("#formPatch").addEventListener("submit", app.postCadex);
    },
};

document.addEventListener("DOMContentLoaded", app.init);
