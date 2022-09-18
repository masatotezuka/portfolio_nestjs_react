import { ValidationPipe, HttpException } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: 'http://localhost:3000', credentials: true },
  });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(80);
}
bootstrap();
