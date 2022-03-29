const cadexService = require("../app/service/serviceCadex");

describe("test cadex BDD", () => {
    /* je vérifie si le cadex est un objet */
    it("should be an object", () => {
        expect(typeof (cadexService.getRandomName())).toBe("string");
    });
});
