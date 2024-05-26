import { IsString } from 'class-validator';
import { CustomBaseEntity } from 'src/shared-modules/custom-base-entity/model/custom-base-entity.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

import { User } from '../../user/model/user.entity';

export type SuggestionStatusType = 'Creada' | 'Aceptada' | 'Denegada';

@Entity()
export class Suggestion extends CustomBaseEntity {
  @IsString()
  @Column()
  title: string;

  @IsString()
  @Column({ type: 'text' })
  description: string;

  @IsString()
  @Column({ default: 'Creada' })
  status: SuggestionStatusType;

  @ManyToOne(() => User, (user) => user.suggestions, { onDelete: 'CASCADE' })
  user: User;
}
