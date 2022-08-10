import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'my_dev',
  password: undefined,
  database: 'portfolio_app_development',
  synchronize: true,
  logging: ['query', 'error'],
  entities: ['src/entity/**/*{.js,.ts}'],
  migrations: ['src/migration/**/*{.js,.ts}'],
});
