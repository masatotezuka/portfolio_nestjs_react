import {
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Column,
  ManyToOne,
} from 'typeorm';
import { LicenseHistory } from './license-history.entity';
import { UsageStatus } from './usage-status.entity';
import { UserLicense } from './user-license.entity';

@Entity('licenses')
export class License {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'date', nullable: true })
  purchasedAt: Date;

  @Column({ type: 'date', nullable: true })
  expiredAt: Date;

  @ManyToOne(() => UsageStatus, (usageStatus) => usageStatus.licenses)
  usageStatus: UsageStatus;

  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  deletedAt?: Date | null;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updateAt: Date;

  @OneToMany(() => UserLicense, (userLicense) => userLicense.license)
  userLicenses: UserLicense[];

  @OneToMany(() => LicenseHistory, (licenseHistory) => licenseHistory.license)
  licenseHistories: LicenseHistory[];
}
