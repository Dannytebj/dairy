import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from '../blog/blog.entity';

require('dotenv').config();

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: process.env.POSTGRES_HOST,
            port:  parseInt(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USERNAME,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
            entities: [Blog],
            synchronize: true
        })
    ]
})
export class DatabaseModule {}
