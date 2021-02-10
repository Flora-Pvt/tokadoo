import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import * as bodyParser from "body-parser";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

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
  })
  .catch((error) => console.log(error));
