import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Machine } from './machine.entity';
import { User } from './user.entity';

@Entity('machine_historie')
export class MachineHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.machineHistories)
  user: User;

  @ManyToOne(() => Machine, (machine) => machine.machineHistories)
  machine: Machine;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
