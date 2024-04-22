import * as bcrypt from 'bcrypt';
import { IsBoolean, IsOptional, IsString, Matches } from 'class-validator';
import { CustomBaseEntity } from 'src/shared-modules/custom-base-entity/model/custom-base-entity.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';

const SALT_ROUNDS = 10;

@Entity()
export class User extends CustomBaseEntity {
  @IsString()
  @Column()
  username: string;

  @IsString()
  @Matches(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gm,
    {
      message: `Formato de correo incorrecto`,
    },
  )
  @Column()
  email: string;

  @IsString()
  @Matches(/^[0-9]{8,8}[A-Za-z]$/gm, {
    message: `Formato de dni incorrecto`,
  })
  @Column()
  dni: string;

  @Column()
  password: string;

  @IsBoolean()
  @IsOptional()
  @Column({ default: false })
  isAdmin?: boolean;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (!this.password) {
      return;
    }

    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  }
}
