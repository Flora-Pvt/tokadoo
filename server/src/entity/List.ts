import { Field, ObjectType, Int } from "type-graphql";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class List {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  title: string;

  @OneToOne((_type) => User)
  @JoinColumn()
  user: User;
}
