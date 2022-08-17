import { Body, Controller, Post, Patch, Put } from '@nestjs/common';
import { CreateAdminDto, VerifyPasswordDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('create/admin')
  async create(
    @Body() createAdminDto: CreateAdminDto,
  ): Promise<{ accessToken: string }> {
    return await this.userService.createAdmin(createAdminDto);
  }

  @Put('password-reset/request')
  async resetPassword(@Body() data: { email: string }): Promise<void> {
    this.userService.createVerificationToken(data.email);
    return;
  }

  @Patch('password-reset/verification')
  async verificationPassword(
    @Body() verifyPasswordDto: VerifyPasswordDto,
  ): Promise<void> {
    return this.userService.verifyPassword(verifyPasswordDto);
  }
}
