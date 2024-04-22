import { Injectable } from '@nestjs/common';
import { DeepPartial, DeleteResult, Repository } from 'typeorm';

import { CustomBaseEntity } from '../custom-base-entity/model/custom-base-entity.entity';

@Injectable()
export class CrudService<Entity extends CustomBaseEntity> {
  constructor(private readonly crudRepository: Repository<Entity>) {}

  async findAll(): Promise<Entity[]> {
    return await this.crudRepository.find();
  }

  async findById(id: any): Promise<Entity> {
    return await this.crudRepository.findOneBy({
      id,
    });
  }

  async create(data: DeepPartial<Entity>): Promise<Entity> {
    return await this.crudRepository.save(this.crudRepository.create(data));
  }

  async updateById(id: string, data: DeepPartial<Entity>): Promise<any> {
    const updatedEntity = Object.assign({}, data);
    updatedEntity.id = id;
    return await this.crudRepository.save(updatedEntity);
  }

  async deleteById(id: string): Promise<DeleteResult> {
    return await this.crudRepository.delete(id);
  }
}
