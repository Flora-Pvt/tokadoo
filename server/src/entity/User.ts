import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { List } from "./List";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  avatar: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  adressLineOne: string;

  @Column({ nullable: true })
  adressLineTwo: string;

  @Column()
  city: string;

  @Column()
  province: string;

  @Column()
  zip: string;

  @OneToMany((_type) => List, (list) => list.user)
  lists: List[];
}
