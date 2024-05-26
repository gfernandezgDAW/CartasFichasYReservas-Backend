import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { RequestData } from '../../common/interfaces/request-data.interface';
import { CrudEndpointSet } from '../../shared-modules/crud/crud-endpoint-set';
import { IsAdminGuard } from '../auth/guards/is-admin.guard';

import { DeepPartial } from 'typeorm';
import { Suggestion } from './model/suggestion.entity';
import { SuggestionService } from './suggestion.service';

@Controller('suggestion')
export class SuggestionController extends CrudEndpointSet<Suggestion> {
  constructor(private suggestionService: SuggestionService) {
    super(suggestionService);
  }

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Get('all')
  async findAll(): Promise<Suggestion[]> {
    return await this.suggestionService.suggestionRepository.find({
      order: {
        createdAt: 'DESC',
      },
      relations: {
        user: true,
      },
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('new')
  async createNewSuggestion(
    @Req() request: RequestData,
    @Body() data: DeepPartial<Suggestion>,
  ): Promise<Suggestion> {
    if (!request.user) {
      return;
    }

    const suggestion = { ...data, user: request.user };
    return await this.suggestionService.create(suggestion);
  }

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Post(':id')
  async updateById(@Param('id') id: string, @Body() suggestion: Suggestion) {
    return this.suggestionService.updateById(id, suggestion);
  }

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Suggestion> {
    return await this.suggestionService.suggestionRepository.findOne({
      where: { id },
      relations: {
        user: true,
      },
    });
  }

  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return await this.suggestionService.deleteById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('all/app')
  async findAllApp(@Req() request: RequestData): Promise<Suggestion[]> {
    if (!request.user) {
      return;
    }

    return await this.suggestionService.suggestionRepository.find({
      where: {
        user: {
          id: request.user.id,
        },
      },
      order: {
        createdAt: 'DESC',
      },
    });
  }
}
