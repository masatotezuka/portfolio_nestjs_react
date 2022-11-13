import { Injectable } from '@nestjs/common';
import { Machine, UserMachine, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.servise';
import { CreateMachineDto, UpdateMachineDto } from './machine.dto';
@Injectable()
export class MachineService {
  constructor(private prisma: PrismaService) {}
  async fetchMachinesByAdminId(adminId: number): Promise<
    (Machine & {
      userMachines: UserMachine & {
        user: User;
      };
    })[]
  > {
    const results = await this.prisma.machine.findMany({
      where: { adminId },
      include: { userMachines: { include: { user: true } } },
    });
    return results;
  }

  async createMachine(
    {
      symbol,
      category,
      name,
      purchasedAt,
      userId,
      usageStatus,
    }: CreateMachineDto,
    adminId: number,
  ): Promise<
    Machine & {
      userMachines: UserMachine & {
        user: User;
      };
    }
  > {
    return await this.prisma.$transaction(async (tx) => {
      const machine = await tx.machine.create({
        data: {
          symbol,
          category,
          name,
          purchasedAt: purchasedAt,
          adminId: adminId,
          machineHistories: {
            create: [{ usageStatus: usageStatus, userId: userId }],
          },
        },
        include: { machineHistories: true },
      });

      if (userId)
        await tx.userMachine.create({
          data: { userId: userId, machineId: machine.id },
        });

      const response = await tx.machine.findUnique({
        where: { id: machine.id },
        include: { userMachines: { include: { user: true } } },
      });
      return response;
    });
  }
  async updateMachine({
    id,
    symbol,
    category,
    name,
    purchasedAt,
    userId,
    usageStatus,
  }: UpdateMachineDto) {
    await this.prisma.$transaction(async (tx) => {
      await tx.machine.update({
        where: { id },
        data: {
          symbol,
          category,
          name,
          purchasedAt,
        },
      });
      if (userId) {
        await tx.userMachine.update({ where: { id }, data: { userId } });
        await tx.machineHistory.create({
          data: { machineId: id, userId, usageStatus },
        });
      } else {
        await tx.machineHistory.create({
          data: { machineId: id, usageStatus },
        });
      }
      const response = await tx.machine.findUnique({
        where: { id },
        include: { userMachines: { include: { user: true } } },
      });
      return response;
    });
  }
}
