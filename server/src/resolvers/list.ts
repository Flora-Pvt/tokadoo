import { Field, ObjectType } from "type-graphql";
import { List } from "../entity/List";
import "reflect-metadata";

@ObjectType()
export class ListResolver {
  @Field(() => List, { nullable: true })
  list?: List;
}
