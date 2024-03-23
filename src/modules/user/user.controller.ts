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

import { IsAdminGuard } from '../auth/guards/is-admin.guard';

import { User } from './model/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Get('all')
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findById(@Param('id') id: string): Promise<User[]> {
    return await this.userService.findById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('new')
  async create(@Body() data: Partial<User>): Promise<User> {
    return await this.userService.create(data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post(':id')
  async updateById(@Param('id') id: string, @Body() user: User) {
    return this.userService.updateById(id, user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return this.userService.deleteById(id);
  }
}
