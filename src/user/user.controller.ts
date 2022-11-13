import {
  Body,
  Controller,
  Post,
  Patch,
  Put,
  Get,
  Delete,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import {
  CreateAdminDto,
  CreateUserDto,
  UserDto,
  VerifyPasswordDto,
} from './user.dto';
import { UserService } from './user.service';
import { User } from '@prisma/client';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('admin')
  async createAdmin(
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

  @Get()
  @UseGuards(JwtAuthGuard)
  async fetchUser(): Promise<User[]> {
    return this.userService.fetchUser();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<User | undefined> {
    return await this.userService.createUser(createUserDto);
  }

  @Delete(':userId')
  @UseGuards(JwtAuthGuard)
  async deleteUser(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<number> {
    return await this.userService.softDeleteUser(userId);
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  async updateUser(@Body() updateUserDto: UserDto): Promise<UserDto> {
    return await this.userService.updateUser(updateUserDto);
  }
}
