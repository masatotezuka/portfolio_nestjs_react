import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { OrganizationMonthlySurveyHistory } from './organization-monthly-survey-history.entity';

@Entity('organization_monthly_survey_checks')
export class OrganizationMonthlySurveyCheck {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  reasonForApproval: string | null;

  @ManyToOne(
    () => OrganizationMonthlySurveyHistory,
    (organizationMonthlySurveyHistory) =>
      organizationMonthlySurveyHistory.organizationMonthlySurveyChecks,
  )
  organizationMonthlySurveyHistory: OrganizationMonthlySurveyHistory;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}
