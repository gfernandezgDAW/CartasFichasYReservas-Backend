import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { CrudEndpointSet } from '../../shared-modules/crud/crud-endpoint-set';
import { BookableSpaceService } from './bookable-space.service';
import { BookableSpace } from './model/bookable-space.entity';

@Controller('bookable-space')
export class BookableSpaceController extends CrudEndpointSet<BookableSpace> {
  constructor(private bookableSpaceService: BookableSpaceService) {
    super(bookableSpaceService);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('all')
  async findAll(): Promise<BookableSpace[]> {
    return await this.bookableSpaceService.bookableSpaceRepository.find({
      order: {
        spaceNumber: 'DESC',
      },
    });
  }
}
