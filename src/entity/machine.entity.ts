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

  @Column()
  purchasedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(
    () => MachineCategory,
    (machineCategory) => machineCategory.machines,
  )
  machineCategory: MachineCategory;

  @ManyToOne(() => UsageStatus, (usageStatus) => usageStatus.machines)
  usageStatus: UsageStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @OneToMany(() => UserMachine, (userMachine) => userMachine.machine)
  userMachines: UserMachine[];

  @OneToMany(() => MachineHistory, (machineHistory) => machineHistory.machine)
  machineHistories: MachineHistory[];
}
