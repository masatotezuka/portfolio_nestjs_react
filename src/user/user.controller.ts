import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { CreateAdminDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private authService: AuthService,
  ) {}
  @Post('create/admin')
  async create(@Body() createAdminDto: CreateAdminDto) {
    return await this.userService.createAdmin(createAdminDto);
  }
}
