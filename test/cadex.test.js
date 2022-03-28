// On teste notre service !

const cadexService = require("../app/service/serviceCadex");

const cadex = cadexService.generate();
const phrase = cadexService.phraseData(cadex);
const data = require("../data/parts.json");

/*
describe : (message,function)
permet de former un groupe de test

test : (message,function)
it :  (message,function)
test & it permettent de tester quelque chose
*/

/* Je souhaite tester mon service cadex */
describe("Cadex object", () => {
    /* je vérifie si le cadex est un objet */
    it("should be an object", () => {
        expect(cadex).toBeInstanceOf(Object);
    });

    /* je vérifie que la propriété "name" est présente dans l'objet retourné */
    it("should have name,verb,component,adjective properties", () => {
        expect(cadex).toHaveProperty("name");
        expect(cadex).toHaveProperty("verb");
        expect(cadex).toHaveProperty("complement");
        expect(cadex).toHaveProperty("adjective");
    });
});

describe("Random name", () => {
    /** Je teste le type */
    it("le nom du cadex devrait être un string", () => {
        expect(typeof (cadex.name)).toBe("string");
    });
    it("le nom du cadex est contenu dans data.name", () => {
        expect(data.names).toContain(cadex.name);
    });
    /** Je teste qu'il soit bien dans la liste des names */
});

describe("Random verb", () => {
    it("le verbe du cadex devrait être un string", () => {
        expect(typeof (cadex.verb)).toBe("string");
    });
    it("le nom du cadex est contenu dans data.name", () => {
        expect(data.verbs).toContain(cadex.verb);
    });
});

describe("Random Adjective", () => {
    it("le Adjective du cadex devrait être un string", () => {
        expect(typeof (cadex.adjective)).toBe("string");
    });
    it("le Adjective du cadex est contenu dans data.adjective", () => {
        expect(data.adjectives).toContain(cadex.adjective);
    });
});

describe("Random complement", () => {
    it("le complement du cadex devrait être un string", () => {
        expect(typeof (cadex.complement)).toBe("string");
    });
    it("le complement du cadex est contenu dans data.complement", () => {
        expect(data.complements).toContain(cadex.complement);
    });
});

describe("Test sur la méthode phraseData", () => {
    it("la méthode doit retourner un string", () => {
        expect(typeof (phrase)).toBe("string");
    });
    it("la longeur ne doit pas être egal à 0", () => {
        expect(phrase.length > 0).toEqual(true);
    });
});
