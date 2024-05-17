import { BadRequestException } from '@nestjs/common';
import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';

import { DateUtilsService } from '../../../common/services/date-utils.service';
import { BookingService } from '../booking.service';
import { Booking } from '../modal/booking.entity';

@EventSubscriber()
export class BookingSubscriber implements EntitySubscriberInterface<Booking> {
  constructor(
    dataSource: DataSource,
    private bookingService: BookingService,
    private dateUtilsService: DateUtilsService,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Booking;
  }

  async beforeInsert(event: InsertEvent<Booking>) {
    const booking = event.entity;
    await this.beforeBookingUpsertChecks(booking);
  }

  async beforeUpdate(event: UpdateEvent<Booking>) {
    const booking = event.databaseEntity;
    await this.beforeBookingUpsertChecks(booking, booking.id);
  }

  async beforeBookingUpsertChecks(booking: Booking, bookingId = '') {
    const startOf = booking.startOf;
    const endOf = booking.endOf;

    if (!bookingId.length) {
      this.checkBookingDateIsNotBeforeCurrentTime(startOf);
    }
    this.checkBookingMinDuration(startOf, endOf);
    this.checkBookingTimeMinAndMax(startOf, endOf);
    await this.checkIfTheAreDateRangesOverlap(
      startOf,
      endOf,
      booking,
      bookingId,
    );
    await this.checkIfBookingSpaceIsAvailable(
      startOf,
      endOf,
      booking,
      bookingId,
    );
    await this.checkIfBoardGameIsAvailable(startOf, endOf, booking, bookingId);
  }

  private checkBookingDateIsNotBeforeCurrentTime(startOf: Date) {
    if (
      this.dateUtilsService.daysJsUtcLocal().unix() >
      this.dateUtilsService.daysJsUtc(startOf).unix()
    ) {
      throw new BadRequestException(
        'La reserva no puede generarse a tiempo pasado',
      );
    }
  }

  private checkBookingMinDuration(startOf: Date, endOf: Date) {
    if (
      this.dateUtilsService
        .daysJsUtc(endOf)
        .diff(this.dateUtilsService.daysJsUtc(startOf), 'minutes') < 30
    ) {
      throw new BadRequestException(
        'La duración mínima de una reserva es de 30 minutos',
      );
    }
  }

  private checkBookingTimeMinAndMax(startOf: Date, endOf: Date) {
    const dayjsStartOf = this.dateUtilsService.daysJsUtc(startOf);
    if (dayjsStartOf.get('h') < 8) {
      throw new BadRequestException(
        'La reserva no puede comenzar antes de las 8:00',
      );
    }

    const dayjsEndOf = this.dateUtilsService.daysJsUtc(endOf);
    const dayjsEndOfHour = dayjsEndOf.get('h');
    if (
      dayjsEndOfHour > 21 ||
      (dayjsEndOfHour === 21 && dayjsEndOf.get('m') > 30)
    ) {
      throw new BadRequestException(
        'La reserva no se puede acabar después de las 21:30',
      );
    }
  }

  private async checkIfTheAreDateRangesOverlap(
    startOf: Date,
    endOf: Date,
    booking: Booking,
    idBooking = '',
  ) {
    const userBookings =
      await this.bookingService.getBookingsBetweenDatesByUser(
        startOf,
        endOf,
        booking.user.id,
        idBooking,
      );

    if (userBookings.length) {
      throw new BadRequestException(
        'Ya tienes una reserva creada dentro de ese rango de tiempo',
      );
    }
  }

  private async checkIfBoardGameIsAvailable(
    startOf: Date,
    endOf: Date,
    booking: Booking,
    idBooking = '',
  ) {
    const availableBoardGames =
      await this.bookingService.getAvailableBoardGamesBetweenDates(
        startOf,
        endOf,
        idBooking,
      );

    if (
      !availableBoardGames.find(
        (boardGame) => boardGame.id === booking.boardGame.id,
      )
    ) {
      throw new BadRequestException(
        'Todas las unidades del juego seleccionado se encuentran ya en reserva',
      );
    }
  }

  private async checkIfBookingSpaceIsAvailable(
    startOf: Date,
    endOf: Date,
    booking: Booking,
    idBooking = '',
  ) {
    const availableBookingSpace =
      await this.bookingService.getAvailableBookingSpaceBetweenDates(
        startOf,
        endOf,
        booking.participants,
        idBooking,
      );

    if (
      !availableBookingSpace.find(
        (bookingSpace) => bookingSpace.id === booking.bookableSpace.id,
      )
    ) {
      throw new BadRequestException(
        'La sala seleccionada ya se encuentra en reserva',
      );
    }
  }
}
