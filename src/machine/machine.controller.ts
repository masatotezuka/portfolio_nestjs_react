import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { CreateMachineDto } from './machine.dto';
import { MachineService } from './machine.service';
import { MachineItems } from './machine.type';

@Controller('machines')
@UseGuards(JwtAuthGuard)
export class MachineController {
  constructor(private readonly machineService: MachineService) {}
  @Get(':userId')
  async fetch(
    @Param('userId', ParseIntPipe) adminId: number,
  ): Promise<MachineItems[]> {
    return await this.machineService.fetchMachinesByUserId(adminId);
  }

  @Post(':userId')
  async create(
    @Param('userId', ParseIntPipe) adminId: number,
    @Body() createMachineDto: CreateMachineDto,
  ): Promise<MachineItems> {
    return await this.machineService.createMachine(createMachineDto, adminId);
  }
}
