import "reflect-metadata";
import {
  Resolver,
  Query,
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
}

@InputType()
class LoginInputs {
  @Field()
  email: string;

  @Field()
  password: string;
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
  @Query(() => User, { nullable: true })
  async loggedUser(@Ctx() { req }: MyContext) {
    if (!req.session.userId) {
      return null;
    }
    const user = await getConnection()
      .getRepository(User)
      .findOne({ id: req.session.userId });
    return user;
  }

  @Mutation(() => UserResponse)
  async register(@Arg("options") options: UserInputs, @Ctx() {}: MyContext) {
    if (options.password.length < 8) {
      return {
        errors: [
          {
            field: "password",
            message: "le mot de passe doit contenir au moins 7 caractères",
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
    };
    try {
      // need query to return after save
      await getConnection().getRepository(User).save(user);
    } catch (err) {
      if (err.code === "ER_DUP_ENTRY")
        return {
          errors: [{ field: "email", message: "cet email est déjà enregistré" }],
        };
    }
    return user;
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: LoginInputs,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const user = await getConnection()
      .getRepository(User)
      .findOne({ email: options.email });
    if (!user) {
      return {
        errors: [{ field: "email", message: "cet email n'est pas enregistré" }],
      };
    }
    const validPassword = await argon2.verify(user.password, options.password);
    if (!validPassword) {
      return {
        errors: [{ field: "password", message: "mot de passe incorrect" }],
      };
    }

    //store user id to keep logged in with cookie
    req.session!.userId = user.id; 

    return { user };
  }
}
