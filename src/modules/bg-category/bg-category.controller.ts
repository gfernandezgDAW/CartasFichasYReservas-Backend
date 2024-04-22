import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DeepPartial } from 'typeorm';

import { CrudEndpointSet } from '../../shared-modules/crud/crud-endpoint-set';
import { IsAdminGuard } from '../auth/guards/is-admin.guard';

import { BGCategoryService } from './bg-category.service';
import { BGCategory } from './model/bg-category.entity';

@Controller('bg-category')
export class BGCategoryController extends CrudEndpointSet<BGCategory> {
  constructor(private bgCategoryService: BGCategoryService) {
    super(bgCategoryService);
  }

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Post('new')
  async create(@Body() data: DeepPartial<BGCategory>): Promise<BGCategory> {
    return await this.bgCategoryService.create(data);
  }

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Post(':id')
  async updateById(@Param('id') id: string, @Body() bgCategory: BGCategory) {
    return this.bgCategoryService.updateById(id, bgCategory);
  }

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return await this.bgCategoryService.deleteById(id);
  }
}
