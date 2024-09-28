import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

interface Persons {
  name: string;
  age: number;
  skills: string[];
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, type: "date" })
  date: Date;

  @Column({ nullable: true })
  completed: boolean;

  @Column({ nullable: false, type: "json", default: [] })
  persons: Persons[];
}
