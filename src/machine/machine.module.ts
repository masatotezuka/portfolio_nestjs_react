import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MachineHistory } from 'src/entity/machine-history.entity';
import { Machine } from 'src/entity/machine.entity';
import { Organization } from 'src/entity/organization.entity';
import { UserMachine } from 'src/entity/user-machine.entity';
import { User } from 'src/entity/user.entity';
import { PrismaService } from 'src/prisma.servise';
import { MachineController } from './machine.controller';
import { MachineService } from './machine.service';

@Module({
  imports: [
    // TypeOrmModule.forFeature([
    //   User,
    //   Machine,
    //   UserMachine,
    //   MachineHistory,
    //   Organization,
    // ]),
  ],
  controllers: [MachineController],
  providers: [MachineService, PrismaService],
})
export class MachineModule {}
