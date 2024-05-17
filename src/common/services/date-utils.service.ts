import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import * as timezone from 'dayjs/plugin/timezone';
import * as utc from 'dayjs/plugin/utc';

@Injectable()
export class DateUtilsService {
  constructor() {
    dayjs.extend(utc);
    dayjs.extend(timezone);
  }

  daysJsUtcLocal(date?: Date | dayjs.Dayjs | string | null) {
    return dayjs(date).utc(true).local();
  }

  daysJsUtc(date?: Date | dayjs.Dayjs | string | null) {
    return dayjs(date).utc(false);
  }
}
