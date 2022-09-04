import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { CreateMachineDto } from './machine.dto';
import { MachineService } from './machine.service';
import { MachineItems } from './machine.type';

@Controller('machines')
@UseGuards(JwtAuthGuard)
export class MachineController {
  constructor(private readonly machineService: MachineService) {}
  @Get()
  async fetch(): Promise<MachineItems[]> {
    return await this.machineService.fetchMachines();
  }

  @Post()
  async create(
    @Body() createMachineDto: CreateMachineDto,
  ): Promise<MachineItems> {
    return await this.machineService.createMachine(createMachineDto);
  }
}
