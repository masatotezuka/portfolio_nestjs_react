import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { MachineHistory } from './machine-history.entity';
import { MachineCategory } from './mashine-category.entity';
import { UsageStatus } from './usage-status.entity';
import { UserMachine } from './user-machine.entity';

@Entity('machines')
export class Machine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'date', nullable: true })
  purchasedAt?: Date | null;

  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  deletedAt?: Date | null;

  @ManyToOne(
    () => MachineCategory,
    (machineCategory) => machineCategory.machines,
  )
  machineCategory: MachineCategory;

  @ManyToOne(() => UsageStatus, (usageStatus) => usageStatus.machines)
  usageStatus: UsageStatus;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updateAt: Date;

  @OneToMany(() => UserMachine, (userMachine) => userMachine.machine)
  userMachines: UserMachine[];

  @OneToMany(() => MachineHistory, (machineHistory) => machineHistory.machine)
  machineHistories: MachineHistory[];
}
