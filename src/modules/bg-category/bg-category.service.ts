import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CrudService } from '../../shared-modules/crud/crud.service';

import { BGCategory } from './model/bg-category.entity';

@Injectable()
export class BGCategoryService extends CrudService<BGCategory> {
  constructor(
    @InjectRepository(BGCategory)
    public readonly bgCategoryRepository: Repository<BGCategory>,
  ) {
    super(bgCategoryRepository);
  }
}
