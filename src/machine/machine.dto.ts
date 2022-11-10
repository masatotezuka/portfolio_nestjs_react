import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty } from 'class-validator';

export class CreateMachineDto {
  @IsNotEmpty()
  symbol: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  name: string;

  @IsDate()
  @Type(() => Date)
  purchasedAt: Date | undefined;

  userId: number;

  @IsNotEmpty()
  usageStatus: string;
}

export class UpdateMachineDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  symbol: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  name: string;

  purchasedAt: Date | string | undefined;

  userId: number;

  @IsNotEmpty()
  usageStatus: string;
}
