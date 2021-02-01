import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType, Int } from "type-graphql";

@ObjectType()
@Entity()
export class User {
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

  @Field(() => String)
  @Column()
  adressLineOne: string;

  @Field(() => String)
  @Column({ nullable: true })
  adressLineTwo: string;

  @Field(() => String)
  @Column()
  city: string;

  @Field(() => String)
  @Column()
  province: string;

  @Field(() => String)
  @Column()
  zip: string;
}
