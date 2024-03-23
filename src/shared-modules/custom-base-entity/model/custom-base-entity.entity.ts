import { IsDate, IsOptional, IsString } from 'class-validator';
import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CustomBaseEntity extends BaseEntity {
  @IsString()
  @IsOptional()
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @IsDate()
  @IsOptional()
  @CreateDateColumn()
  createdAt?: Date;

  @IsDate()
  @IsOptional()
  @UpdateDateColumn()
  updatedAt?: Date;
}
