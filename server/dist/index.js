"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_js_1 = require("./entity/User.js");
const List_js_1 = require("./entity/List.js");
typeorm_1.createConnection()
    .then(async (connection) => {
    let user = new User_js_1.User();
    user.firstname = "Matt";
    user.lastname = "Doe";
    user.avatar = "photo-of-Matt.jpg";
    user.email = "Mattdoe@tokadoo.com";
    user.password = "password";
    user.adressLineOne = "a street";
    user.adressLineTwo = "in a batiment";
    user.city = "Montreal";
    user.province = "Quebec";
    user.zip = "H1K 1H1";
    let list = new List_js_1.List();
    list.title = "Matt's birthday";
    list.user = user;
    let userRepository = connection.getRepository(User_js_1.User);
    let listRepository = connection.getRepository(List_js_1.List);
    await userRepository.save(user);
    await listRepository.save(list);
    console.log("User from the db: ", user);
    console.log("List from the db: ", list);
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map