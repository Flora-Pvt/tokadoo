import "reflect-metadata";
import {
  Resolver,
  Mutation,
  Arg,
  Field,
  Ctx,
  InputType,
  ObjectType,
} from "type-graphql";
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

@ObjectType()
class FieldError {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver()
export class UserResolver {
  @Mutation(() => UserResponse)
  async register(@Arg("options") options: UserInputs, @Ctx() {}: MyContext) {
    if (options.password.length < 8) {
      return {
        errors: [
          {
            field: "password",
            message: "password length must be greater than 7",
          },
        ],
      };
    }
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
    try {
      // need query to return after save
      await getConnection().getRepository(User).save(user);
    } catch (err) {
      if (err.code === "ER_DUP_ENTRY")
        return {
          errors: [{ field: "email", message: "this email already exist" }],
        };
    }
    return user;
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: UserInputs,
    @Ctx() {}: MyContext
  ): Promise<UserResponse> {
    const user = await getConnection()
      .getRepository(User)
      .findOne({ email: options.email });
    if (!user) {
      return {
        errors: [{ field: "email", message: "this email doesn't exist" }],
      };
    }
    const validPassword = await argon2.verify(user.password, options.password);
    if (!validPassword) {
      return {
        errors: [{ field: "password", message: "incorrect password" }],
      };
    }
    return { user };
  }
}
