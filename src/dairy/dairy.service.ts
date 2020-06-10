import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dairy } from './dairy.entity';

@Injectable()
export class DairyService {
    constructor(@InjectRepository(Dairy) private readonly dairyRepository: Repository<Dairy>) {}

    async findAll(): Promise<Dairy[]> {
        return this.dairyRepository.find();
    }

    async create(dairy: Dairy): Promise<Dairy> {
        return this.dairyRepository.save(dairy);
    }
}
