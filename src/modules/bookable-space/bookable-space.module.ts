import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SharedModule } from '../../common/shared.module';

import { BookableSpaceController } from './bookable-space.controller';
import { BookableSpaceService } from './bookable-space.service';
import { BookableSpace } from './model/bookable-space.entity';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([BookableSpace])],
  controllers: [BookableSpaceController],
  providers: [BookableSpaceService],
  exports: [BookableSpaceService],
})
export class BookableSpaceModule {}
