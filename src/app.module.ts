import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { configService } from './config/config.service';
import { DatabaseModule } from './database/database.module';
import { BlogModule } from './blog/blog.module';
import { BlogController } from './blog/blog.controller';

@Module({
  imports: [
    DatabaseModule,
    BlogModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
