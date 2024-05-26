import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CrudService } from '../../shared-modules/crud/crud.service';
import { BoardGameService } from '../board-game/board-game.service';
import { BookableSpaceService } from '../bookable-space/bookable-space.service';

import { Booking } from './modal/booking.entity';

export interface BookedBoardGameByDateRes {
  id: string;
  bg_booked_count: number;
}

@Injectable()
export class BookingService extends CrudService<Booking> {
  constructor(
    @InjectRepository(Booking)
    public readonly bookingRepository: Repository<Booking>,
    private bookableSpaceService: BookableSpaceService,
    private boardGameService: BoardGameService,
  ) {
    super(bookingRepository);
  }

  async getAvailableBookingSpaceBetweenDates(
    bookingStart: Date,
    bookingEnd: Date,
    participants: number,
    idBooking = '',
  ) {
    const selectQueryBuilder = this.bookableSpaceService.bookableSpaceRepository
      .createQueryBuilder('entity')
      .where((qb) => {
        const subQuery = qb
          .subQuery()
          .select('entity.id')
          .from('bookable_space', 'entity')
          .leftJoin('entity.bookings', 'bookings')
          .andWhere(':bookingEnd >= bookings.startOf', {
            bookingEnd,
          })
          .andWhere(':bookingStart <= bookings.endOf', {
            bookingStart,
          })
          .andWhere(`bookings.status not like 'Cancelada'`)
          .andWhere('bookings.id not like :idBooking', {
            idBooking,
          })
          .setFindOptions({ loadEagerRelations: false })
          .getQuery();
        return 'entity.id NOT IN ' + subQuery;
      });
    selectQueryBuilder.andWhere('entity.capacity >= :participants', {
      participants,
    });
    selectQueryBuilder.orderBy('entity.spaceNumber');

    return await selectQueryBuilder.getMany();
  }

  async getAvailableBoardGamesBetweenDates(
    bookingStart: Date,
    bookingEnd: Date,
    idBooking = '',
  ) {
    let boardGames = await this.boardGameService.boardGameRepository.find({
      order: {
        title: 'ASC',
      },
    });

    const selectQueryBuilder = this.boardGameService.boardGameRepository
      .createQueryBuilder('bg')
      .select(['bg.id as id', 'count(bg.id) as bg_booked_count'])
      .leftJoin('bg.bookings', 'bookings')
      .where(':bookingEnd >= bookings.startOf', {
        bookingEnd,
      })
      .andWhere(':bookingStart <= bookings.endOf', {
        bookingStart,
      })
      .andWhere(`bookings.status not like 'Cancelada'`)
      .andWhere('bookings.id not like :idBooking', {
        idBooking,
      })
      .groupBy('bg.id')
      .setFindOptions({ loadEagerRelations: false });
    const bookedBoardGamesByDate = <BookedBoardGameByDateRes[]>(
      await selectQueryBuilder.getRawMany()
    );

    boardGames = boardGames.filter((boardGame) => {
      const numberOfEntriesBooked = bookedBoardGamesByDate.find(
        (bookedBoardGameByDate) => bookedBoardGameByDate.id === boardGame.id,
      );
      if (!numberOfEntriesBooked && boardGame.unitsAvaliable > 0) {
        return true;
      }

      return (
        boardGame.unitsAvaliable - numberOfEntriesBooked.bg_booked_count > 0
      );
    });

    return boardGames;
  }

  async getBookingsBetweenDatesByUser(
    bookingStart: Date,
    bookingEnd: Date,
    userId: string,
    idBooking = '',
  ) {
    const selectQueryBuilder = this.bookingRepository
      .createQueryBuilder('entity')
      .where(':bookingEnd >= entity.startOf', {
        bookingEnd,
      })
      .andWhere(':bookingStart <= entity.endOf', {
        bookingStart,
      })
      .andWhere('entity.userId like :userId', {
        userId,
      })
      .andWhere('entity.id not like :idBooking', {
        idBooking,
      })
      .andWhere(`entity.status not like 'Cancelada'`)
      .setFindOptions({ loadEagerRelations: false });

    return await selectQueryBuilder.getRawMany();
  }

  async cancelBooking(userId: string, bookingId: string) {
    const booking = await this.bookingRepository.findOne({
      where: { id: bookingId, user: { id: userId } },
      relations: {
        user: true,
      },
      loadEagerRelations: true,
    });

    if (booking.user.id !== userId) {
      throw new BadRequestException(
        'No puedes cancelar una reserva que no es tuya',
      );
    }

    if (booking.status === 'Finalizada') {
      throw new BadRequestException(
        'No puedes cancelar una reserva que ya haya finalizado',
      );
    }

    booking.status = 'Cancelada';
    return await this.updateById(bookingId, booking);
  }
}
