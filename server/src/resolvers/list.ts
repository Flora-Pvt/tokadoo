import { Query, Resolver } from "type-graphql";
import { List } from "../entity/List";
import "reflect-metadata";

@Resolver()
export class ListResolver {
  @Query(() => String)
  lists() {
    return "list resolver";
  }
}
