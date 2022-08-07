import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Machine } from './machine.entity';

@Entity('machine_categories')
export class MachineCategory {
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

  @OneToMany(() => Machine, (machine) => machine.machineCategory)
  machines: Machine[];
}
