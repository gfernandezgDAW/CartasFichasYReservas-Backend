import { IsNumber, IsString } from 'class-validator';
import { CustomBaseEntity } from 'src/shared-modules/custom-base-entity/model/custom-base-entity.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';

import { BGCategory } from '../../bg-category/model/bg-category.entity';
import { Booking } from '../../booking/modal/booking.entity';

@Entity()
export class BoardGame extends CustomBaseEntity {
  @IsString()
  @Column()
  title: string;

  @IsString()
  @Column()
  introduction: string;

  @IsString()
  @Column({ type: 'text' })
  description: string;

  @Column({ nullable: true })
  coverArtImage?: string;

  @IsNumber()
  @Column({ default: 1 })
  minPlayers: number;

  @IsNumber()
  @Column({ default: 1 })
  maxPlayers: number;

  @IsNumber()
  @Column({ default: 1 })
  averageLength: number;

  @IsNumber()
  @Column({ default: 3 })
  minAge: number;

  @IsNumber()
  @Column({ default: 0 })
  unitsAvaliable: number;

  @ManyToMany(() => BGCategory, {
    eager: true,
  })
  @JoinTable()
  categories?: BGCategory[];

  @OneToMany(() => Booking, (booking) => booking.boardGame)
  bookings?: Booking[];
}
