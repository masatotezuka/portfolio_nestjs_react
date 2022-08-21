import { Body, Controller, Post } from '@nestjs/common';
import { CreateMachineDto } from './machine.dto';
import { MachineService } from './machine.service';

@Controller('machines')
export class MachineController {
  constructor(private readonly machineService: MachineService) {}
  @Post()
  async create(@Body() createMachineDto: CreateMachineDto) {
    return await this.machineService.createMachine(createMachineDto);
  }
}
type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

type Machine = {
  id?: number;
  category: string;
  name: string;
  purchasedAt?: Date | string;
  user: User;
  updateAt: Date;
  usageStatus: string;
};
