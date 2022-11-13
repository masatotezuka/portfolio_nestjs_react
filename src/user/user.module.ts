import { forwardRef, Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from 'src/prisma.servise';
import { SendgridModule } from 'src/sendgrid/sendgrid.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
@Module({
  imports: [
    forwardRef(() => AuthModule),
    EventEmitterModule.forRoot(),
    SendgridModule.register(process.env.SENDGRID_API_KEY),
  ],
  controllers: [UserController],
  providers: [UserService, PrismaService],
  exports: [UserService],
})
export class UserModule {}
