import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../modules/user/model/user.entity';
import { UserService } from '../modules/user/user.service';

import { UtilsService } from './services/utils.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UtilsService, UserService],
  exports: [UtilsService, UserService],
})
export class SharedModule {}
