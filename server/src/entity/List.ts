import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { User } from "./User";
import { Gift } from "./Gift";

@Entity()
export class List {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne((_type) => User, (user) => user.lists)
  user: User;

  @OneToMany(_type => Gift, gift => gift.list)
  gifts: Gift[];
}
