import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
} from 'typeorm';
import { LicenseHistory } from './license-history.entity';
import { MachineHistory } from './machine-history.entity';
import { Organization } from './organization.entity';
import { UserLicense } from './user-license.entity';
import { UserMachine } from './user-machine.entity';

@Entity('users')
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  verificationToken: string;

  @Column({ nullable: true })
  verificationTokenExpiredAt: Date;

  @Column()
  isPasswordUpdated: boolean;

  @Column()
  role: number;

  @OneToOne(() => Organization)
  @JoinColumn()
  organization: Organization;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @OneToMany(() => UserMachine, (userMachine) => userMachine.user)
  userMachines: UserMachine[];

  @OneToMany(() => UserLicense, (userLicense) => userLicense.user)
  userLicenses: UserLicense[];

  @OneToMany(() => LicenseHistory, (licenseHistory) => licenseHistory.user)
  licenseHistories: LicenseHistory[];

  @OneToMany(() => MachineHistory, (machineHistory) => machineHistory.user)
  machineHistories: MachineHistory[];
}
