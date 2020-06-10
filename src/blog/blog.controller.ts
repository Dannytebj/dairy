import { Controller, Get, Post, Body } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from './blog.entity';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async getAllBlogs(): Promise<Blog[]> {
    return this.blogService.findAll();
  }

  @Post('create')
  async createPost(@Body() postData: Blog): Promise<Blog> {
      return this.blogService.create(postData);
  }


}