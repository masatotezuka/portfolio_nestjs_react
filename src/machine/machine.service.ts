import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MachineHistory } from 'src/entity/machine-history.entity';
import { Machine } from 'src/entity/machine.entity';
import { UserMachine } from 'src/entity/user-machine.entity';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { CreateMachineDto } from './machine.dto';

@Injectable()
export class MachineService {
  constructor(
    @InjectRepository(Machine)
    private machineRepository: Repository<Machine>,

    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(MachineHistory)
    private machineHistoryRepository: Repository<MachineHistory>,

    @InjectRepository(UserMachine)
    private userMachineRepository: Repository<UserMachine>,
  ) {}
  async createMachine(createMachineDto: CreateMachineDto) {
    const { category, name, purchasedAt, userId, usageStatus } =
      createMachineDto;

    const machine = this.machineRepository.create({
      category: category,
      name: name,
      purchasedAt: purchasedAt,
    });

    const machineHistory = this.machineHistoryRepository.create({
      usageStatus: usageStatus,
    });
    const userMachine = this.userMachineRepository.create();

    machineHistory.machine = machine;
    userMachine.machine = machine;
    const newMachine = await this.machineRepository.save(machine);

    if (userId) {
      const user = await this.userRepository.findOne({
        where: {
          id: userId,
        },
      });
      machineHistory.user = user;
      userMachine.user = user;
      userMachine.machine = machine;
      await this.userMachineRepository.save(userMachine);
    }

    await this.machineHistoryRepository.save(machineHistory);
    //machineId name category purchasedAt user{userId/firstName/lastName} usageStatus machineHistory updateAt
    const response = await this.machineRepository.findOne({
      select: {
        id: true,
        name: true,
        category: true,
        purchasedAt: true,
        machineHistories: { usageStatus: true, updateAt: true },
        userMachines: {
          id: true,
          user: { id: true, firstName: true, lastName: true },
        },
      },
      relations: { machineHistories: true, userMachines: { user: true } },
      where: { id: newMachine.id },
    });

    return response;
  }
}
