import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.servise';
import { MachineController } from './machine.controller';
import { MachineService } from './machine.service';

@Module({
  controllers: [MachineController],
  providers: [MachineService, PrismaService],
})
export class MachineModule {}
