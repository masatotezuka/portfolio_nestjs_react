import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { License } from './license.entity';
import { User } from './user.entity';

@Entity('user_license')
export class UserLicense {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.userLicenses)
  user: User;

  @ManyToOne(() => License, (license) => license.userLicenses)
  license: License;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
