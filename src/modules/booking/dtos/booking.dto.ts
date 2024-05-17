import { IsNumber } from 'class-validator';

import { DateRangeDto } from './date-range.dto';

export class BookingDto extends DateRangeDto {
  @IsNumber()
  participants: number;
}
