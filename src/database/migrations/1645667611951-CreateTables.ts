import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1645667611951 implements MigrationInterface {
    name = 'CreateTables1645667611951'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Products" RENAME COLUMN "quantity" TO "stock"`);
        await queryRunner.query(`CREATE TABLE "Items" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "cartId" uuid, "productId" uuid, CONSTRAINT "PK_189aa34dd7379663b1033e37c65" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Carts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "updatedOn" TIMESTAMP NOT NULL DEFAULT now(), "total" double precision NOT NULL, CONSTRAINT "PK_6088efe237f1e59de8fff0032d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "cartId" uuid`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "UQ_669d33e88144db7f7916c0eea80" UNIQUE ("cartId")`);
        await queryRunner.query(`ALTER TABLE "Items" ADD CONSTRAINT "FK_6bd2417275f5e6fadc0da7c2093" FOREIGN KEY ("cartId") REFERENCES "Carts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Items" ADD CONSTRAINT "FK_75bbbbd0b79ae10d8be276c340f" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "FK_669d33e88144db7f7916c0eea80" FOREIGN KEY ("cartId") REFERENCES "Carts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "FK_669d33e88144db7f7916c0eea80"`);
        await queryRunner.query(`ALTER TABLE "Items" DROP CONSTRAINT "FK_75bbbbd0b79ae10d8be276c340f"`);
        await queryRunner.query(`ALTER TABLE "Items" DROP CONSTRAINT "FK_6bd2417275f5e6fadc0da7c2093"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "UQ_669d33e88144db7f7916c0eea80"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "cartId"`);
        await queryRunner.query(`DROP TABLE "Carts"`);
        await queryRunner.query(`DROP TABLE "Items"`);
        await queryRunner.query(`ALTER TABLE "Products" RENAME COLUMN "stock" TO "quantity"`);
    }

}
