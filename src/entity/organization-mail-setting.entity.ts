import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToMany,
  DeleteDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { OrganizationMonthlySurveyHistory } from './organization-monthly-survey-history.entity';
import { Organization } from './organization.entity';

@Entity('organization_mail_settings')
export class OrganizationMailSetting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  bodyText: string;

  @Column()
  monthlySendDay: number;

  @Column()
  isValidSendMail: boolean;

  @Column()
  isValidRemind: boolean;

  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  deletedAt: Date | null;

  @OneToOne(() => Organization)
  @JoinColumn()
  organization: Organization;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updateAt: Date;

  @OneToMany(
    () => OrganizationMonthlySurveyHistory,
    (organizationMonthlySurveyHistory) =>
      organizationMonthlySurveyHistory.organizationMailSetting,
    { cascade: true },
  )
  organizationMonthlySurveyHistories: OrganizationMonthlySurveyHistory[];
}
