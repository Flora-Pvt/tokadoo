import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User.js";
import { List } from "./entity/List.js";

createConnection()
  .then(async (connection) => {
    let user = new User();
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

    let list = new List();
    list.title = "Matt's birthday";
    list.user = user;

    let userRepository = connection.getRepository(User);
    let listRepository = connection.getRepository(List);
    
    await userRepository.save(user)
    await listRepository.save(list)
    console.log("User from the db: ", user);
    console.log("List from the db: ", list);
  })
  .catch((error) => console.log(error));
