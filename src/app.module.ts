import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'my_dev',
      password: undefined,
      database: 'portfolio_app_development',
      synchronize: true,
      logging: ['query', 'error'],
      entities: ['./entity/*.ts'],
      migrations: ['./migration/*.ts'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
