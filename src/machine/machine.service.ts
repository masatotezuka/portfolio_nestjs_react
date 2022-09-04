import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MachineHistory } from 'src/entity/machine-history.entity';
import { Machine } from 'src/entity/machine.entity';
import { UserMachine } from 'src/entity/user-machine.entity';
import { User } from 'src/entity/user.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateMachineDto } from './machine.dto';
import { MachineItems } from './machine.type';

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

    private AppDataSource: DataSource,
  ) {}

  async createMachine(
    createMachineDto: CreateMachineDto,
  ): Promise<MachineItems> {
    const { symbol, category, name, purchasedAt, userId, usageStatus } =
      createMachineDto;

    const machine = this.machineRepository.create({
      symbol: symbol,
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

    const result = await this.AppDataSource.transaction(
      async (transactionalEntityManager) => {
        const machineRepository =
          transactionalEntityManager.getRepository(Machine);
        const userMachineRepository =
          transactionalEntityManager.getRepository(UserMachine);
        const machineHistoryRepository =
          transactionalEntityManager.getRepository(MachineHistory);

        const newMachine = await machineRepository.save(machine);

        if (userId) {
          const user = await this.userRepository.findOne({
            where: {
              id: userId,
            },
          });
          machineHistory.user = user;
          userMachine.user = user;
          userMachine.machine = machine;
          await userMachineRepository.save(userMachine);
        }
        await machineHistoryRepository.save(machineHistory);
        return await machineRepository.findOne({
          select: {
            id: true,
            symbol: true,
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
      },
    );

    if (!result.userMachines[0]) {
      const response = {
        id: result.id,
        symbol: result.symbol,
        name: result.name,
        category: result.category,
        purchasedAt: result.purchasedAt,
        usageStatus: result.machineHistories[0].usageStatus,
        updateAt: result.machineHistories[0].updateAt,
      };
      return response;
    }

    const response = {
      id: result.id,
      symbol: result.symbol,
      name: result.name,
      category: result.category,
      purchasedAt: result.purchasedAt,
      usageStatus: result.machineHistories[0].usageStatus,
      updateAt: result.machineHistories[0].updateAt,
      user: {
        id: result.userMachines[0].user.id,
        firstName: result.userMachines[0].user.firstName,
        lastName: result.userMachines[0].user.lastName,
      },
    };
    return response;
  }
}
