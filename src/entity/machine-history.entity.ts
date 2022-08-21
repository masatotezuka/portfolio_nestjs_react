import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Column,
} from 'typeorm';
import { Machine } from './machine.entity';

import { User } from './user.entity';

@Entity('machine_histories')
export class MachineHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usageStatus: string;

  @ManyToOne(() => User, (user) => user.machineHistories, { nullable: true })
  user: User;

  @ManyToOne(() => Machine, (machine) => machine.machineHistories)
  machine: Machine;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updateAt: Date;
}
