import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import * as bodyParser from "body-parser";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

// import { User } from "./entity/User.js";
import { List } from "./entity/List.js";
// import { Gift } from "./entity/Gift.js";

import { HelloResolver } from "./resolvers/hello.js";
import { ListResolver } from "./resolvers/list.js";


createConnection()
  .then(async (connection) => {
    // create express app
    const app = express();
    app.use(bodyParser.json());

    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [HelloResolver, ListResolver],
        validate: false,
      }),
      context: ({ req, res }) => ({ req, res, connection }),
    });

    apolloServer.applyMiddleware({ app });

    // run app
    app.listen(4000);

    console.log("Express application is up and running on port 4000");

    /*let user = new User();
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

    let gift = new Gift();
    gift.photo = "bag";
    gift.title = "Photo Bag";
    gift.link = "http://baaags.com";
    gift.price = 30;
    gift.purchased = false;
    gift.list = list;

    let userRepository = connection.getRepository(User);
    let listRepository = connection.getRepository(List);
    let giftRepository = connection.getRepository(Gift);
    
    await userRepository.save(user)
    await listRepository.save(list)
    await giftRepository.save(gift)
    console.log("User from the db: ", user);
    console.log("List from the db: ", list);
    console.log("Gift from the db: ", gift); */
    let list = await connection.getRepository(List).findOne(1);
    console.log("List from the db: ", list);
  })
  .catch((error) => console.log(error));
