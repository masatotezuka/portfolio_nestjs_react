import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

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

  @IsNumber()
  @Type(() => Number)
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

  @IsDate()
  @Type(() => Date)
  purchasedAt: Date | undefined;

  @IsNumber()
  @Type(() => Number)
  userId: number;

  @IsNotEmpty()
  usageStatus: string;
}
