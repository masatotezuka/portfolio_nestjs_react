import { Body, Controller, Post, Patch, Put } from '@nestjs/common';
import { CreateAdminDto, VerifyPasswordDto } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('admin')
  async create(
    @Body() createAdminDto: CreateAdminDto,
  ): Promise<{ accessToken: string }> {
    return await this.userService.createAdmin(createAdminDto);
  }

  @Put('password-reset/request')
  async resetPassword(@Body() data: { email: string }): Promise<void> {
    return await this.userService.createVerificationToken(data.email);
  }

  @Patch('password-reset/verification')
  async verifyPassword(
    @Body() verifyPasswordDto: VerifyPasswordDto,
  ): Promise<void> {
    return await this.userService.verifyPassword(verifyPasswordDto);
  }
}
