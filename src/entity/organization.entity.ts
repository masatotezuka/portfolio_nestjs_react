import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { License } from './license.entity';
import { Machine } from './machine.entity';
import { OrganizationMailSetting } from './organization-mail-setting.entity';

@Entity('organizations')
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  deletedAt?: Date | null;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updateAt: Date;

  @OneToMany(
    () => OrganizationMailSetting,
    (organizationMailSetting) => organizationMailSetting.organization,
    { cascade: true },
  )
  organizationMailSettings: OrganizationMailSetting[];

  @OneToMany(() => Machine, (machine) => machine.organization, {
    cascade: true,
  })
  machine: Machine;

  @OneToMany(() => License, (license) => license.organization, {
    cascade: true,
  })
  license: License;
}
