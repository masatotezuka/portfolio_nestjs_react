import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { OrganizationMonthlySurveyHistory } from './organization-monthly-survey-history.entity';
import { User } from './user.entity';

@Entity('user_monthly_survey_answers')
export class UserMonthlySurveyAnswer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.userMonthlySurveyAnswers)
  user: User;

  @ManyToOne(
    () => OrganizationMonthlySurveyHistory,
    (organizationMonthlySurveyHistory) =>
      organizationMonthlySurveyHistory.userMonthlySurveyAnswers,
  )
  organizationMonthlySurveyHistory: OrganizationMonthlySurveyHistory;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updateAt: Date;
}
