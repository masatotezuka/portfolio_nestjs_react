import { IsNotEmpty } from 'class-validator';

export class CreateMachineDto {
  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  name: string;

  purchasedAt: Date | string | undefined;

  userId: number;

  @IsNotEmpty()
  usageStatus: string;
}
