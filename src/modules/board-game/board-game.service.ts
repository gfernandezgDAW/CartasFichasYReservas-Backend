import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CrudService } from '../../shared-modules/crud/crud.service';

import { BoardGame } from './model/board-game.entity';

@Injectable()
export class BoardGameService extends CrudService<BoardGame> {
  constructor(
    @InjectRepository(BoardGame)
    public readonly boardGameRepository: Repository<BoardGame>,
  ) {
    super(boardGameRepository);
  }
}
