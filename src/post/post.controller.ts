import {
  Controller,
  Get,
  Param,
  NotFoundException,
  Delete,
  Put,
  Post,
  Body,
} from '@nestjs/common';

import { PostInt } from './interface/postinterface';
import { PostService } from './post.service';
import { PostDto } from './PostDto/postDto';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async findAll(): Promise<PostInt[]> {
    return this.postService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id): Promise<PostInt> {
    if (!this.postService.findOne(id)) {
      throw new NotFoundException();
    }
    return this.postService.findOne(id);
  }
  @Post()
  create(@Body() postdto: PostDto): Promise<PostInt> {
    return this.postService.create(postdto);
  }

  @Delete(':id')
  Delete(@Param('id') id): Promise<PostInt> {
    return this.postService.delete(id);
  }
  @Put(':id')
  Update(@Body() postDto: PostDto, @Param('id') id): Promise<PostInt> {
    return this.postService.update(id, postDto);
  }
}
