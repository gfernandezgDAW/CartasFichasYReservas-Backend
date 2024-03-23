import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';

import { CrudService } from '../../shared-modules/crud/crud.service';

import { User } from './model/user.entity';

@Injectable()
export class UserService extends CrudService<User> {
  constructor(
    @InjectRepository(User)
    public readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }

  override async create(user: DeepPartial<User>): Promise<User> {
    await this.mailAlreadyExists(user.email);
    return await super.create(user);
  }

  override async updateById(id: string, user: DeepPartial<User>): Promise<any> {
    await this.mailAlreadyExists(user.email);
    return await super.updateById(id, user);
  }

  async mailAlreadyExists(email: string) {
    const matches = await this.userRepository.findBy({ email });
    if (!matches.length) {
      return;
    }

    throw new ConflictException(
      'Ya existe un usuario con esa dirección de correo',
    );
  }
}
