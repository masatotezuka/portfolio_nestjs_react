import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
export class CreateAdminDto {
  organizationName: string;

  firstName: string;

  lastName: string;

  email: string;

  password: string;
}
