import { IsString } from 'class-validator';
import { CustomBaseEntity } from 'src/shared-modules/custom-base-entity/model/custom-base-entity.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class BGCategory extends CustomBaseEntity {
  @IsString()
  @Column()
  title: string;

  @IsString()
  @Column({ type: 'text' })
  description: string;
}
