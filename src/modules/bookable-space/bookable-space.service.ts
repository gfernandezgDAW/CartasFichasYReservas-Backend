import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CrudService } from '../../shared-modules/crud/crud.service';

import { BookableSpace } from './model/bookable-space.entity';

@Injectable()
export class BookableSpaceService extends CrudService<BookableSpace> {
  constructor(
    @InjectRepository(BookableSpace)
    public readonly bookableSpaceRepository: Repository<BookableSpace>,
  ) {
    super(bookableSpaceRepository);
  }
}
