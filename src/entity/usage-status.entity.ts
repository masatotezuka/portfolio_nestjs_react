import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { LicenseHistory } from './license-history.entity';
import { License } from './license.entity';
import { MachineHistory } from './machine-history.entity';
import { Machine } from './machine.entity';

@Entity('usage_statuses')
export class UsageStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  readonly name: string;

  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  deletedAt?: Date | null;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updateAt: Date;

  @OneToMany(
    () => MachineHistory,
    (machineHistory) => machineHistory.usageStatus,
    { cascade: true },
  )
  machineHistories: MachineHistory[];

  @OneToMany(
    () => LicenseHistory,
    (licenseHistory) => licenseHistory.usageStatus,
    { cascade: true },
  )
  licenseHistories: LicenseHistory[];
}
