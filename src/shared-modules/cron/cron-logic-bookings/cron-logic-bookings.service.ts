import { Injectable } from '@nestjs/common';
import { CronJob } from 'cron';
import * as dayjs from 'dayjs';

import { DateUtilsService } from '../../../common/services/date-utils.service';
import { BookingService } from '../../../modules/booking/booking.service';
import {
  Booking,
  BookingStatusType,
} from '../../../modules/booking/modal/booking.entity';

@Injectable()
export class CronLogicBookingsService {
  cronJob: CronJob;
  cronName = 'Cron de lógica de cambio de estado de reservas de sitio';

  constructor(
    private bookingsService: BookingService,
    private dateUtilsService: DateUtilsService,
  ) {
    this.startCron();
  }

  startCron() {
    this.cronJob = new CronJob(`0 */5 * * * *`, async () => {
      this.executeCronLogic();
    });
    this.cronJob.start();
  }

  logCron(text: string, isError = false) {
    const today = dayjs().format('YYYY-MM-DD HH:mm:ss');
    const msg = `${this.cronName} ${today} - ${text}`;
    isError ? console.error(msg) : console.log(msg);
  }

  async executeCronLogic() {
    this.logCron('Inicio de ejecución');
    const todayTime = this.dateUtilsService.daysJsUtcLocal().valueOf();

    try {
      this.logCron('Obteniendo reservas pendientes o activas');
      const bookings = await this.getPendingAndActiveBookings();

      await this.updateBookingsStatusByDate(
        bookings,
        todayTime,
        'startOf',
        'Pendiente',
        'Activa',
        'Actualizando el estado de las reservas pendientes que acaban de comenzar (estado pendiente a activo)',
        'No se encontraron reservas pendientes a actualizar',
      );

      await this.updateBookingsStatusByDate(
        bookings,
        todayTime,
        'endOf',
        'Activa',
        'Finalizada',
        'Actualizando el estado de las reservas activas que acaban de finalizar (estado activo a finalizado)',
        'No se encontraron reservas activas a actualizar',
      );

      this.logCron('Ejecución finalizada');
    } catch (error) {
      this.logCron(`Error en la ejecución: ${error.toString()}`, true);
    }
  }

  async getPendingAndActiveBookings() {
    return await this.bookingsService.bookingRepository.find({
      where: [{ status: 'Pendiente' }, { status: 'Activa' }],
      relations: {
        user: true,
        bookableSpace: true,
        boardGame: true,
      },
      loadEagerRelations: false,
    });
  }

  async updateBookingsStatusByDate(
    bookings: Booking[],
    todayTime: number,
    dateParam: 'startOf' | 'endOf',
    filterStatusType: BookingStatusType,
    newStatusType: BookingStatusType,
    updatingResultsMsg: string,
    noResultsMsg: string,
  ) {
    const bookingsToUpdate = bookings.filter(
      (booking) =>
        todayTime >= dayjs(booking[dateParam]).valueOf() &&
        booking.status === filterStatusType,
    );
    if (!bookingsToUpdate.length) {
      this.logCron(noResultsMsg);
      return;
    }

    this.logCron(updatingResultsMsg);
    for (const booking of bookingsToUpdate) {
      try {
        await this.updateBookingStatus(booking, newStatusType);
      } catch (error) {
        this.logCron(
          `Error al actualizar reserva ${booking.id} del usuario ${
            booking.status
          }: ${error.toString()}`,
          true,
        );
      }
    }
  }

  async updateBookingStatus(booking: Booking, newStatus: BookingStatusType) {
    const startOfDate = this.dateUtilsService
      .daysJsUtc(booking.startOf)
      .format('YYYY-MM-DD HH:mm');
    const endOfHHmm = this.dateUtilsService
      .daysJsUtc(booking.endOf)
      .format('HH:mm');
    this.logCron(
      `Modificando estado de reserva ${booking.id} ${startOfDate} a ${endOfHHmm} de usuario ${booking.user.email} a ${newStatus}`,
    );
    booking.status = newStatus;
    await this.bookingsService.updateById(booking.id, booking);
  }
}
