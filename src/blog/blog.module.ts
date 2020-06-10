import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogService } from './blog.service';
import { Blog } from './blog.entity';
import { BlogController } from './blog.controller';

@Module({
    providers: [BlogService],
    imports: [TypeOrmModule.forFeature([Blog])],
    controllers: [BlogController]
})
export class BlogModule {}
