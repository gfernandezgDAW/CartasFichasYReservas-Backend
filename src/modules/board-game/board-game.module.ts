import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SharedModule } from '../../common/shared.module';

import { BoardGameController } from './board-game.controller';
import { BoardGameService } from './board-game.service';
import { BoardGame } from './model/board-game.entity';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([BoardGame])],
  controllers: [BoardGameController],
  providers: [BoardGameService],
  exports: [BoardGameService],
})
export class BoardGameModule {}
