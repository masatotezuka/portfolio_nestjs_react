import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Machine } from './machine.entity';
import { User } from './user.entity';

@Entity('user_machines')
export class UserMachine {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.userMachines)
  user: User;

  @ManyToOne(() => Machine, (machine) => machine.userMachines)
  machine: Machine;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
