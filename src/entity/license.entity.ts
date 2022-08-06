import {
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Column,
} from 'typeorm';
import { LicenseHistory } from './license-history.entity';
import { UserLicense } from './user-license.entity';

@Entity('license')
export class License {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  purchasedAt: Date;

  @Column({ nullable: true })
  expiredAt: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @OneToMany(() => UserLicense, (userLicense) => userLicense.license)
  userLicenses: UserLicense[];

  @OneToMany(() => LicenseHistory, (licenseHistory) => licenseHistory.license)
  licenseHistories: LicenseHistory[];
}
