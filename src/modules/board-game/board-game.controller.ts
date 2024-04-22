import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { DeepPartial } from 'typeorm';
import { CrudEndpointSet } from '../../shared-modules/crud/crud-endpoint-set';
import { IsAdminGuard } from '../auth/guards/is-admin.guard';
import { BoardGameService } from './board-game.service';
import { BoardGame } from './model/board-game.entity';

@Controller('board-game')
export class BoardGameController extends CrudEndpointSet<BoardGame> {
  constructor(private boardGameService: BoardGameService) {
    super(boardGameService);
  }

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Post('new')
  async create(@Body() data: DeepPartial<BoardGame>): Promise<BoardGame> {
    return await this.boardGameService.create(data);
  }

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Post(':id')
  async updateById(@Param('id') id: string, @Body() boardGame: BoardGame) {
    return this.boardGameService.updateById(id, boardGame);
  }

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return this.boardGameService.deleteById(id);
  }
}
