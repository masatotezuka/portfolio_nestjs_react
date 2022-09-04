import { Body, Controller, Post } from '@nestjs/common';
import { CreateMachineDto } from './machine.dto';
import { MachineService } from './machine.service';
import { MachineItems } from './machine.interface';

@Controller('machines')
export class MachineController {
  constructor(private readonly machineService: MachineService) {}
  @Post()
  async create(
    @Body() createMachineDto: CreateMachineDto,
  ): Promise<MachineItems> {
    return await this.machineService.createMachine(createMachineDto);
  }
}