import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
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

  @ManyToOne((_type) => List, (list) => list.gifts)
  list: List;
}
