import { Entity, Column, PrimaryGeneratedColumn, } from 'typeorm';

@Entity('todos')
export class Todo {
    @PrimaryGeneratedColumn()
    todo_id: number;

  @Column()
  title: string;

  @Column()
  status: string;

  @Column()
  Description: string;

  @Column()
  user_id: number;

  @Column()
  created_on: Date;
}
