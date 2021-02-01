import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Field,
  Ctx,
  ObjectType,
  InputType,
} from "type-graphql";
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
  @Mutation()
  register(
    @Arg("options") options: UserInputs,
    @Ctx() { req }: MyContext
  ) {
    let user = new User();
    user.firstname = options.firstname;
    user.lastname = options.lastname;
    user.avatar = options.avatar;
    user.email = options.email;
    user.password = options.password;
    user.adressLineOne = options.adressLineOne;
    user.adressLineTwo = options.adressLineTwo;
    user.city = options.city;
    user.province = options.province;
    user.zip = options.zip;

    return user;
  }
}
