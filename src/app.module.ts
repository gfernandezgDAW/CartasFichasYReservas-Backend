import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dayjs from 'dayjs';
import 'dayjs/locale/es';
import { join } from 'path';

import dbConfig from './config/db.config';
import { AuthModule } from './modules/auth/auth.module';
import { BGCategoryModule } from './modules/bg-category/bg-category.module';
import { BoardGameModule } from './modules/board-game/board-game.module';
import { BookableSpaceModule } from './modules/bookable-space/bookable-space.module';
import { BookingModule } from './modules/booking/booking.module';
import { SuggestionModule } from './modules/suggestion/suggestion.module';
import { UserModule } from './modules/user/user.module';
import { CronLogicBookingsModule } from './shared-modules/cron/cron-logic-bookings/cron-logic-bookings.module';
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
    BookableSpaceModule,
    BookingModule,
    CronLogicBookingsModule,
    SuggestionModule,
  ],
})
export class AppModule {
  constructor() {
    dayjs.locale('es');
  }
}
