import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MachineModule } from './machine/machine.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'my_dev',
      password: undefined,
      database: 'portfolio_app_development',
      synchronize: true,
      logging: ['error'],
      entities: [__dirname + '/entity/*.entity.js'],
      migrations: [__dirname + 'migration/*.js'],
    }),
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
    MachineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
