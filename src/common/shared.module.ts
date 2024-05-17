import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../modules/user/model/user.entity';
import { UserService } from '../modules/user/user.service';

import { DateUtilsService } from './services/date-utils.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [DateUtilsService, UserService],
  exports: [DateUtilsService, UserService],
})
export class SharedModule {}
