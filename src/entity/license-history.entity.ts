import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { License } from './license.entity';
import { UsageStatus } from './usage-status.entity';
import { User } from './user.entity';

@Entity('license_histories')
export class LicenseHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.licenseHistories, { nullable: true })
  user: User;

  @ManyToOne(() => License, (license) => license.licenseHistories)
  license: License;

  @ManyToOne(() => UsageStatus, (usageStatus) => usageStatus.licenseHistories)
  usageStatus: UsageStatus;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updateAt: Date;
}
