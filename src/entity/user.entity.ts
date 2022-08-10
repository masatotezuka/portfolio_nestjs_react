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
import { UserMonthlySurveyAnswer } from './user-monthly-survey-answer.entity';

@Entity('users')
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  verificationToken?: string | null;

  @Column({ type: 'timestamptz', nullable: true })
  verificationTokenExpiredAt?: Date | null;

  @Column()
  isPasswordUpdated: boolean;

  @Column()
  role: number;

  @OneToOne(() => Organization)
  @JoinColumn()
  organization: Organization;

  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  deletedAt?: Date | null;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updateAt: Date;

  @OneToMany(() => UserMachine, (userMachine) => userMachine.user)
  userMachines: UserMachine[];

  @OneToMany(() => UserLicense, (userLicense) => userLicense.user, {
    cascade: true,
  })
  userLicenses: UserLicense[];

  @OneToMany(() => LicenseHistory, (licenseHistory) => licenseHistory.user, {
    cascade: true,
  })
  licenseHistories: LicenseHistory[];

  @OneToMany(() => MachineHistory, (machineHistory) => machineHistory.user, {
    cascade: true,
  })
  machineHistories: MachineHistory[];

  @OneToMany(
    () => UserMonthlySurveyAnswer,
    (userMonthlySurveyAnswer) => userMonthlySurveyAnswer.user,
    { cascade: true },
  )
  userMonthlySurveyAnswers: UserMonthlySurveyAnswer[];
}
