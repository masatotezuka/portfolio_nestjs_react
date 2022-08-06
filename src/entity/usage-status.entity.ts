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

@Entity('usage_statuses')
export class UsageStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  readonly name: string;

  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  deletedAt?: Date | null;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updateAt: Date;

  @OneToMany(() => Machine, (machine) => machine.usageStatus)
  machines: Machine[];

  @OneToMany(() => License, (license) => license.usageStatus)
  licenses: License[];
}
