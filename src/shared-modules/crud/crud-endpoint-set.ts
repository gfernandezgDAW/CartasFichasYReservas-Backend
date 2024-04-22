import { Body, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DeepPartial } from 'typeorm';

import { CustomBaseEntity } from '../custom-base-entity/model/custom-base-entity.entity';

import { CrudService } from './crud.service';

export class CrudEndpointSet<T extends CustomBaseEntity> {
  constructor(private crudService: CrudService<T>) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('all')
  async findAll(): Promise<T[]> {
    return await this.crudService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findById(@Param('id') id: string): Promise<T> {
    return await this.crudService.findById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('new')
  async create(@Body() data: DeepPartial<T>): Promise<T> {
    return await this.crudService.create(data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post(':id')
  async updateById(@Param('id') id: string, @Body() object: T) {
    return this.crudService.updateById(id, object);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return this.crudService.deleteById(id);
  }
}
