import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { BlogModule } from './blog/blog.module';
import { DairyModule } from './dairy/dairy.module';
import { validateDairy } from './middlewares/dairy.middleware';
import { DairyController } from './dairy/dairy.controller';

@Module({
  imports: [
    DatabaseModule,
    BlogModule,
    DairyModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
    // configure(consumer: MiddlewareConsumer) {
    //     consumer
    //         .apply(validateDairy)
    //         .forRoutes(DairyController)
    // }
}
