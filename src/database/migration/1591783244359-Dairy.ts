import {MigrationInterface, QueryRunner} from "typeorm";

export class Dairy1591783244359 implements MigrationInterface {
    name = 'Dairy1591783244359'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dairy" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "isPassworded" boolean NOT NULL DEFAULT false, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cb5eec2f080c840ec603910660b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "dairy"`);
    }

}
