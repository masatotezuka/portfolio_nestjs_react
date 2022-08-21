import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Machine } from './machine.entity';
import { UsageStatus } from './usage-status.entity';
import { User } from './user.entity';

@Entity('machine_histories')
export class MachineHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.machineHistories, { nullable: true })
  user: User;

  @ManyToOne(() => Machine, (machine) => machine.machineHistories)
  machine: Machine;

  @ManyToOne(() => UsageStatus, (usageStatus) => usageStatus.machineHistories)
  usageStatus: UsageStatus;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updateAt: Date;
}
