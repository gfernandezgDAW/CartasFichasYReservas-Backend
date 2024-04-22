import { IsNumber, IsString } from 'class-validator';
import { CustomBaseEntity } from 'src/shared-modules/custom-base-entity/model/custom-base-entity.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

import { BGCategory } from '../../bg-category/model/bg-category.entity';

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
  @Column()
  minPlayers: number;

  @IsNumber()
  @Column()
  maxPlayers: number;

  @IsNumber()
  @Column()
  averageLength: number;

  @IsNumber()
  @Column()
  minAge: number;

  @ManyToMany(() => BGCategory, {
    eager: true,
  })
  @JoinTable()
  categories?: BGCategory[];
}
