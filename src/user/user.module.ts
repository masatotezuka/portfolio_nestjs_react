import { Controller, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from 'src/entity/organization.entity';
import { User } from 'src/entity/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Organization])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
