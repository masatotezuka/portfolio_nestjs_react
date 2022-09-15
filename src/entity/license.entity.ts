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
import { Organization } from './organization.entity';
import { UserLicense } from './user-license.entity';

@Entity('licenses')
export class License {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  symbol: string;

  @Column()
  name: string;

  @Column({ type: 'date', nullable: true })
  purchasedAt: Date;

  @Column({ type: 'date', nullable: true })
  expiredAt: Date;

  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  deletedAt?: Date | null;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updateAt: Date;

  @OneToMany(() => UserLicense, (userLicense) => userLicense.license, {
    cascade: true,
  })
  userLicenses: UserLicense[];

  @OneToMany(() => LicenseHistory, (licenseHistory) => licenseHistory.license, {
    cascade: true,
  })
  licenseHistories: LicenseHistory[];

  @ManyToOne(() => Organization, (organization) => organization.license)
  organization: Organization;
}
