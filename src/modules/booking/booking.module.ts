import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SharedModule } from '../../common/shared.module';
import { BoardGameModule } from '../board-game/board-game.module';
import { BookableSpaceModule } from '../bookable-space/bookable-space.module';

import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { Booking } from './modal/booking.entity';
import { BookingSubscriber } from './subscribers/booking.subscriber';

@Module({
  imports: [
    SharedModule,
    TypeOrmModule.forFeature([Booking]),
    BookableSpaceModule,
    BoardGameModule,
  ],
  controllers: [BookingController],
  providers: [BookingService, BookingSubscriber],
  exports: [BookingService],
})
export class BookingModule {}
