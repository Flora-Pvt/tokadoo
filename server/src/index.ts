import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User.js";

createConnection()
  .then(async (connection) => {
    /*let user = new User();
    user.firstname = "Jane";
    user.lastname = "Doe";
    user.avatar = "photo-of-jane.jpg";
    user.email = "janedoe@tokadoo.com";
    user.password = "password";
    user.adressLineOne = "a street";
    user.adressLineTwo = "in a batiment";
    user.city = "Montreal";
    user.province = "Quebec";
    user.zip = "H1K 1H1";

    await connection.manager.save(user).then((user) => {
      console.log("User has been saved. Id is", user.id);
    });*/
    let savedUser = await connection.manager.find(User);
    console.log("All users from the db: ", savedUser);
  })
  .catch((error) => console.log(error));
