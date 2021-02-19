import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
import { Field, ObjectType, Int } from "type-graphql";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  avatar: string;

  @Field(() => String)
  @Column()
  firstname: string;

  @Field(() => String)
  @Column()
  lastname: string;

  @Field(() => String)
  @Column({unique: true})
  email: string;

  @Column()
  password: string;
}
