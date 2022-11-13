import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { CreateMachineDto, UpdateMachineDto } from './machine.dto';
import { MachineService } from './machine.service';

@Controller('machines')
@UseGuards(JwtAuthGuard)
export class MachineController {
  constructor(private readonly machineService: MachineService) {}

  @Get(':userId')
  async fetch(@Param('userId', ParseIntPipe) adminId: number) {
    return await this.machineService.fetchMachinesByAdminId(adminId);
  }

  @Post(':userId')
  async create(
    @Param('userId', ParseIntPipe) adminId: number,
    @Body() createMachineDto: CreateMachineDto,
  ) {
    return await this.machineService.createMachine(createMachineDto, adminId);
  }

  @Patch(':userId')
  async update(
    @Param('userId', ParseIntPipe) adminId: number,
    @Body() updateMachineDto: UpdateMachineDto,
  ) {
    return await this.machineService.updateMachine(updateMachineDto);
  }
}
