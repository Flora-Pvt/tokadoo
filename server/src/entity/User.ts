import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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

  @Column()
  adressLineTwo: string;
  
  @Column()
  city: string;

  @Column()
  province: string;

  @Column()
  zip: string;
}
