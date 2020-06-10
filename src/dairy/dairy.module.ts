import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DairyController } from './dairy.controller';
import { DairyService } from './dairy.service';
import { Dairy } from './dairy.entity';
import {validateDairy} from '../middlewares/dairy.middleware';

@Module({
    providers: [DairyService],
    imports: [TypeOrmModule.forFeature([Dairy])],
    controllers: [DairyController]
})
export class DairyModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer
            .apply(validateDairy)
            .forRoutes({ path: 'dairy/create', method: RequestMethod.POST })
    }
}
