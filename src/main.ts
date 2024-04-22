import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as morgan from 'morgan';

import { AppModule } from './app.module';
import { initializeWinstonLogger } from './shared-modules/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const configService = new ConfigService();
  if (process.env.NODE_ENV.trim() === 'production') {
    const logger = initializeWinstonLogger();
    app.use(morgan('combined', { stream: logger.stream }));
  } else {
    app.use(morgan('common'));
    app.enableCors();
  }
  await app.listen(configService.get('APP_PORT') || 3000);
}
bootstrap();
