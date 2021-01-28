"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_js_1 = require("./entity/User.js");
typeorm_1.createConnection()
    .then(async (connection) => {
    let savedUser = await connection.manager.find(User_js_1.User);
    console.log("All users from the db: ", savedUser);
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map