import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DeepPartial } from 'typeorm';

import { CrudEndpointSet } from '../../shared-modules/crud/crud-endpoint-set';
import { IsAdminGuard } from '../auth/guards/is-admin.guard';

import { User } from './model/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController extends CrudEndpointSet<User> {
  constructor(private userService: UserService) {
    super(userService);
  }

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Get('all')
  async findAll(): Promise<User[]> {
    const users = await this.userService.findAll();
    for (const user of users) {
      user.password = undefined;
    }

    return users;
  }

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Post('new')
  async create(@Body() data: DeepPartial<User>): Promise<User> {
    return await this.userService.create(data);
  }

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Post(':id')
  async updateById(@Param('id') id: string, @Body() object: User) {
    return this.userService.updateById(id, object);
  }

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<User> {
    const user = await this.userService.findById(id);
    user.password = undefined;
    return user;
  }

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return await this.userService.deleteById(id);
  }
}
