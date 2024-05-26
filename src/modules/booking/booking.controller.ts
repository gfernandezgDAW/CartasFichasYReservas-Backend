import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DeepPartial } from 'typeorm';

import { RequestData } from '../../common/interfaces/request-data.interface';
import { CrudEndpointSet } from '../../shared-modules/crud/crud-endpoint-set';
import { IsAdminGuard } from '../auth/guards/is-admin.guard';

import { BookingService } from './booking.service';
import { BookingDto } from './dtos/booking.dto';
import { DateRangeDto } from './dtos/date-range.dto';
import { Booking } from './modal/booking.entity';

@Controller('booking')
export class BookingController extends CrudEndpointSet<Booking> {
  constructor(private bookingService: BookingService) {
    super(bookingService);
  }

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Get('all')
  async findAll(): Promise<Booking[]> {
    return await this.bookingService.bookingRepository.find({
      order: {
        startOf: 'DESC',
      },
      relations: {
        user: true,
      },
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('all/app')
  async findAllApp(@Req() request: RequestData): Promise<Booking[]> {
    if (!request.user) {
      return;
    }

    return await this.bookingService.bookingRepository.find({
      where: {
        user: {
          id: request.user.id,
        },
      },
      order: {
        startOf: 'DESC',
        createdAt: 'DESC',
      },
    });
  }

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Booking> {
    return await this.bookingService.bookingRepository.findOne({
      where: {
        id,
      },
      order: {
        startOf: 'DESC',
      },
      relations: {
        user: true,
      },
    });
  }

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Post('new')
  async createBooking(@Body() data: DeepPartial<Booking>): Promise<Booking> {
    return await this.bookingService.create({ ...data, id: 'newFromAdmin' });
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('new/app')
  async createBookingApp(
    @Req() request: RequestData,
    @Body() data: DeepPartial<Booking>,
  ): Promise<Booking> {
    if (!request.user) {
      return;
    }

    const booking = { ...data, user: request.user };
    return await this.bookingService.create(booking);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('available-spaces')
  async getAvailableBookingSpaceBetweenDates(@Body() bookingDto: BookingDto) {
    return await this.bookingService.getAvailableBookingSpaceBetweenDates(
      bookingDto.from,
      bookingDto.to,
      bookingDto.participants,
    );
  }

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Post('available-spaces-modify/:id')
  async getAvailableBookingSpaceBetweenDatesOnModifyById(
    @Param('id') id: string,
    @Body() bookingDto: BookingDto,
  ) {
    return await this.bookingService.getAvailableBookingSpaceBetweenDates(
      bookingDto.from,
      bookingDto.to,
      bookingDto.participants,
      id,
    );
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('available-games')
  async getAvailableGamesBetweenDates(@Body() dateRangeDto: DateRangeDto) {
    return await this.bookingService.getAvailableBoardGamesBetweenDates(
      dateRangeDto.from,
      dateRangeDto.to,
    );
  }

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Post('available-games-modify/:id')
  async getAvailableGamesBetweenDatesOnModifyById(
    @Param('id') id: string,
    @Body() dateRangeDto: DateRangeDto,
  ) {
    return await this.bookingService.getAvailableBoardGamesBetweenDates(
      dateRangeDto.from,
      dateRangeDto.to,
      id,
    );
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('cancel')
  async cancelBookingById(
    @Req() request: RequestData,
    @Body() body: { bookingId: string },
  ) {
    return await this.bookingService.cancelBooking(
      request.user.id,
      body.bookingId,
    );
  }

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Post(':id')
  async updateById(@Param('id') id: string, @Body() object: Booking) {
    return this.bookingService.updateById(id, object);
  }

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return this.bookingService.deleteById(id);
  }
}
