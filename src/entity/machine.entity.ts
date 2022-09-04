import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { MachineHistory } from './machine-history.entity';
import { UserMachine } from './user-machine.entity';

@Entity('machines')
export class Machine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  symbol: string;

  @Column()
  category: string;

  @Column()
  name: string;

  @Column({ type: 'date', nullable: true })
  purchasedAt?: Date | null;

  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  deletedAt?: Date | null;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updateAt: Date;

  @OneToMany(() => UserMachine, (userMachine) => userMachine.machine, {
    cascade: true,
  })
  userMachines: UserMachine[];

  @OneToMany(() => MachineHistory, (machineHistory) => machineHistory.machine, {
    cascade: true,
  })
  machineHistories: MachineHistory[];
}
