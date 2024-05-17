import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { Column, Entity, ManyToOne } from 'typeorm';

import { CustomBaseEntity } from '../../../shared-modules/custom-base-entity/model/custom-base-entity.entity';
import { BoardGame } from '../../board-game/model/board-game.entity';
import { BookableSpace } from '../../bookable-space/model/bookable-space.entity';
import { User } from '../../user/model/user.entity';

export type BookingStatusType =
  | 'Pendiente'
  | 'Activa'
  | 'Finalizada'
  | 'Cancelada';

@Entity()
export class Booking extends CustomBaseEntity {
  @IsDate()
  @Type(() => Date)
  @Column()
  startOf: Date;

  @IsDate()
  @Type(() => Date)
  @Column()
  endOf: Date;

  @IsNumber()
  @Column()
  participants: number;

  @ManyToOne(() => BookableSpace, (bookableSpace) => bookableSpace.bookings, {
    eager: true,
  })
  bookableSpace: BookableSpace;

  @ManyToOne(() => BoardGame, (boardGame) => boardGame.bookings, {
    eager: true,
  })
  boardGame: BoardGame;

  @ManyToOne(() => User, (user) => user.bookings)
  user: User;

  @IsString()
  @Column({ default: 'Pendiente' })
  status: BookingStatusType;
}
