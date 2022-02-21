import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { CreateAutoDto } from './dto/dto-create';
import { AutomobilesService } from './automobiles.service';
import { Automobiles } from './interfaces/automobile.interface';

@Controller('automobiles')
export class AutomobilesController {
  constructor(private readonly automobileservice: AutomobilesService) {}
  @Get()
  async findAll(): Promise<Automobiles[]> {
    return this.automobileservice.findall();
  }
  @Get(':id')
  findOne(@Param('id') id): Promise<Automobiles> {
    if (!this.automobileservice.findOne(id)) {
      throw new NotFoundException();
    }
    return this.automobileservice.findOne(id);
  }

  @Post()
  create(@Body() createAutoDto: CreateAutoDto): Promise<Automobiles> {
    return this.automobileservice.create(createAutoDto);
  }

  @Delete(':id')
  Delete(@Param('id') id): Promise<Automobiles> {
    return this.automobileservice.delete(id);
  }

  @Put(':id')
  Update(
    @Body() updateDto: CreateAutoDto,
    @Param('id') id,
  ): Promise<Automobiles> {
    return this.automobileservice.update(id, updateDto);
  }
}
