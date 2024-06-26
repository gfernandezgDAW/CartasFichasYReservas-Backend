import { registerAs } from '@nestjs/config';

export default registerAs('databaseConfig', () => ({
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [],
  synchronize: true,
  autoLoadEntities: true,
  timezone: '+00:00',
  logging: false,
}));
