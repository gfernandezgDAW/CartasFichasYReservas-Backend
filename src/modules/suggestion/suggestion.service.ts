import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CrudService } from '../../shared-modules/crud/crud.service';

import { Suggestion } from './model/suggestion.entity';

@Injectable()
export class SuggestionService extends CrudService<Suggestion> {
  constructor(
    @InjectRepository(Suggestion)
    public readonly suggestionRepository: Repository<Suggestion>,
  ) {
    super(suggestionRepository);
  }
}
