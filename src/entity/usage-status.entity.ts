import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Machine } from './machine.entity';

@Entity('usage_statuses')
export class UsageStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @ManyToOne(() => Machine, (machine) => machine.usageStatus)
  machines: Machine[];
}
