import { Controller, Get, Post, Body } from '@nestjs/common';
import { DairyService } from './dairy.service';
import { Dairy } from './dairy.entity';


@Controller('dairy')
export class DairyController {
    constructor (private readonly dairyService: DairyService) {}

    @Get()
    async getAll (): Promise<Dairy[]> {
        return this.dairyService.findAll();
    }

    @Post('create')
    async create(@Body() dairy: Dairy): Promise<Dairy> {
        return this.dairyService.create(dairy);
    }
}
