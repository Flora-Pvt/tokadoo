import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import * as bodyParser from "body-parser";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

// import { User } from "./entity/User.js";
// import { List } from "./entity/List.js";
// import { Gift } from "./entity/Gift.js";

import { HelloResolver } from "./resolvers/hello.js";
import { UserResolver } from "./resolvers/user.js";
import { ListResolver } from "./resolvers/list.js";

import redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";
import { MyContext } from "./types.js";

createConnection()
  .then(async () => {
    // create express app
    const app = express();
    app.use(bodyParser.json());

    const RedisStore = connectRedis(session);
    const redisClient = redis.createClient();
    app.use(
      session({
        name: "qid",
        store: new RedisStore({
          client: redisClient,
          disableTouch: true,
        }),
        cookie: {
          maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
          httpOnly: true,
          sameSite: "lax", // csrf
          // secure: true, // cookies only works in https
        },
        saveUninitialized: false,
        secret: "super secret",
        resave: false,
      })
    );

    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [HelloResolver, ListResolver, UserResolver],
        validate: false,
      }),
      context: ({ req, res }): MyContext => ({ req, res }),
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
  })
  .catch((error) => console.log(error));
