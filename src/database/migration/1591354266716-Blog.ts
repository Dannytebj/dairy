import {MigrationInterface, QueryRunner} from "typeorm";

export class Blog1591354266716 implements MigrationInterface {
    name = 'Blog1591354266716'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "blog" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "isPublished" boolean NOT NULL, CONSTRAINT "PK_85c6532ad065a448e9de7638571" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "blog"`);
    }

}
