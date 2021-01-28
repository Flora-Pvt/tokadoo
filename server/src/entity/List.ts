import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class List {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToOne((type) => User)
  @JoinColumn()
  user: User;
}
