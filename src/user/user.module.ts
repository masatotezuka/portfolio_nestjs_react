import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { Organization } from 'src/entity/organization.entity';
import { User } from 'src/entity/user.entity';
import { PrismaService } from 'src/prisma.servise';
import { SendgridModule } from 'src/sendgrid/sendgrid.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Organization]),
    forwardRef(() => AuthModule),
    EventEmitterModule.forRoot(),
    SendgridModule.register(process.env.SENDGRID_API_KEY),
  ],
  controllers: [UserController],
  providers: [UserService, PrismaService],
  exports: [UserService],
})
export class UserModule {}
