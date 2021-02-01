import "reflect-metadata";
import { Resolver, Mutation, Arg, Field, Ctx, InputType } from "type-graphql";
import { getConnection } from "typeorm";
import argon2 from "argon2";
import { MyContext } from "../types";
import { User } from "../entity/User";

@InputType()
class UserInputs {
  @Field()
  avatar: string;

  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  adressLineOne: string;

  @Field()
  adressLineTwo: string;

  @Field()
  city: string;

  @Field()
  province: string;

  @Field()
  zip: string;
}

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async register(@Arg("options") options: UserInputs, @Ctx() {}: MyContext) {
    const hashedPassword = await argon2.hash(options.password);
    const user = {
      firstname: options.firstname,
      lastname: options.lastname,
      avatar: options.avatar,
      email: options.email,
      password: hashedPassword,
      adressLineOne: options.adressLineOne,
      adressLineTwo: options.adressLineTwo,
      city: options.city,
      province: options.province,
      zip: options.zip,
    };
    await getConnection().getRepository(User).save(user);
    return user
  }
}
