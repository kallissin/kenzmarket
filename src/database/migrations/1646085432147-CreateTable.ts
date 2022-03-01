import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTable1646085432147 implements MigrationInterface {
    name = 'CreateTable1646085432147'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "name" character varying NOT NULL, "password" character varying NOT NULL, "isAdm" boolean NOT NULL, "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "updatedOn" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_3c3ab3f49a87e6ddb607f3c4945" UNIQUE ("email"), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "stock" integer NOT NULL, "price" double precision NOT NULL, CONSTRAINT "UQ_26c9336d231c4e90419a5954bd7" UNIQUE ("name"), CONSTRAINT "PK_36a07cc432789830e7fb7b58a83" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Items" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "cartId" uuid, "productId" uuid, CONSTRAINT "PK_189aa34dd7379663b1033e37c65" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Carts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "updatedOn" TIMESTAMP NOT NULL DEFAULT now(), "total" double precision NOT NULL, "userId" uuid, CONSTRAINT "REL_8c26b3de964f6e854a22b7e329" UNIQUE ("userId"), CONSTRAINT "PK_6088efe237f1e59de8fff0032d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Items" ADD CONSTRAINT "FK_6bd2417275f5e6fadc0da7c2093" FOREIGN KEY ("cartId") REFERENCES "Carts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Items" ADD CONSTRAINT "FK_75bbbbd0b79ae10d8be276c340f" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Carts" ADD CONSTRAINT "FK_8c26b3de964f6e854a22b7e3293" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Carts" DROP CONSTRAINT "FK_8c26b3de964f6e854a22b7e3293"`);
        await queryRunner.query(`ALTER TABLE "Items" DROP CONSTRAINT "FK_75bbbbd0b79ae10d8be276c340f"`);
        await queryRunner.query(`ALTER TABLE "Items" DROP CONSTRAINT "FK_6bd2417275f5e6fadc0da7c2093"`);
        await queryRunner.query(`DROP TABLE "Carts"`);
        await queryRunner.query(`DROP TABLE "Items"`);
        await queryRunner.query(`DROP TABLE "Products"`);
        await queryRunner.query(`DROP TABLE "Users"`);
    }

}
