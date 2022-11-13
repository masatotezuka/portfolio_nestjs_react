import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MachineModule } from './machine/machine.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, AuthModule, MachineModule],
})
export class AppModule {}
