import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { CreateAdminDto } from './user.dto';
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

  @Post('password-reset/request')
  async resetPassword(@Body() data: { email: string }): Promise<void> {
    this.userService.createVerificationToken(data.email);
    return;
  }
}
