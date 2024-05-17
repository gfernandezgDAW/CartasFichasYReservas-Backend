import { IsNumber } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';

import { CustomBaseEntity } from '../../../shared-modules/custom-base-entity/model/custom-base-entity.entity';
import { Booking } from '../../booking/modal/booking.entity';

@Entity()
export class BookableSpace extends CustomBaseEntity {
  @IsNumber()
  @Column()
  spaceNumber: number;

  @IsNumber()
  @Column()
  left: number;

  @IsNumber()
  @Column()
  top: number;

  @IsNumber()
  @Column()
  size: number;

  @IsNumber()
  @Column()
  capacity: number;

  @OneToMany(() => Booking, (booking) => booking.bookableSpace)
  bookings?: Booking[];
}
