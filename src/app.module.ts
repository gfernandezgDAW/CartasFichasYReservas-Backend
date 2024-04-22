import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import dbConfig from './config/db.config';
import { AuthModule } from './modules/auth/auth.module';
import { BGCategoryModule } from './modules/bg-category/bg-category.module';
import { BoardGameModule } from './modules/board-game/board-game.module';
import { UserModule } from './modules/user/user.module';
import { FileUploaderModule } from './shared-modules/file-uploader/file-uploader.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.${process.env.NODE_ENV.trim()}.env`],
      load: [dbConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get('databaseConfig'),
      inject: [ConfigService],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public-files'),
      renderPath: '/public-files',
    }),
    AuthModule,
    UserModule,
    BGCategoryModule,
    BoardGameModule,
    FileUploaderModule,
  ],
})
export class AppModule {}
