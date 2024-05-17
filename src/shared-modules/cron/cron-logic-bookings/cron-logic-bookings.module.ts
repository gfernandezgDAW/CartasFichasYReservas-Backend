import { Module } from '@nestjs/common';

import { SharedModule } from '../../../common/shared.module';
import { BookingModule } from '../../../modules/booking/booking.module';

import { CronLogicBookingsService } from './cron-logic-bookings.service';

@Module({
  imports: [SharedModule, BookingModule],
  providers: [CronLogicBookingsService],
  exports: [CronLogicBookingsService],
})
export class CronLogicBookingsModule {}
