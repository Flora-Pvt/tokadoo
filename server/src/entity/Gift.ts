import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { List } from "./List";

@Entity()
export class Gift {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  photo: string;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column()
  price: number;

  @Column()
  purchased: boolean;

  @OneToOne((type) => List)
  @JoinColumn()
  list: List;
}
