import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { OrganizationMailSetting } from './organization-mail-setting.entity';
import { OrganizationMonthlySurveyCheck } from './organization-monthly-survey-check.entity';
import { UserMonthlySurveyAnswer } from './user-monthly-survey-answer.entity';

@Entity('organization_monthly_survey_histories')
export class OrganizationMonthlySurveyHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => OrganizationMailSetting,
    (organizationMailSetting) =>
      organizationMailSetting.organizationMonthlySurveyHistories,
  )
  organizationMailSetting: OrganizationMailSetting;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @OneToMany(
    () => OrganizationMonthlySurveyCheck,
    (organizationMonthlySurveyCheck) =>
      organizationMonthlySurveyCheck.organizationMonthlySurveyHistory,
  )
  organizationMonthlySurveyChecks: OrganizationMonthlySurveyCheck[];

  @OneToMany(
    () => UserMonthlySurveyAnswer,
    (userMonthlySurveyAnswer) =>
      userMonthlySurveyAnswer.organizationMonthlySurveyHistory,
  )
  userMonthlySurveyAnswers: UserMonthlySurveyAnswer[];
}
