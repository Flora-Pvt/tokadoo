"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const List_js_1 = require("./entity/List.js");
typeorm_1.createConnection()
    .then(async (connection) => {
    let listRepository = connection.getRepository(List_js_1.List);
    let list = await listRepository.find({ relations: ["user"] });
    console.log("Users from the db: ", list);
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map