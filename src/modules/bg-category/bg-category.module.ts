import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SharedModule } from '../../common/shared.module';

import { BGCategoryController } from './bg-category.controller';
import { BGCategoryService } from './bg-category.service';
import { BGCategory } from './model/bg-category.entity';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([BGCategory])],
  controllers: [BGCategoryController],
  providers: [BGCategoryService],
  exports: [BGCategoryService],
})
export class BGCategoryModule {}
