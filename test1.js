const cadex = require("./app/service/serviceCadex");

cadex.getRandomName();
cadex.getRandomAdj();
cadex.getRandomComp();
cadex.getRandomVerb();
const generate = async () => {
    const a = await cadex.generate();
    console.log("ma glue : ", a.glue());
    return a;
};

generate();
