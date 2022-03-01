import {MigrationInterface, QueryRunner} from "typeorm";

export class alterColumnId1646093814668 implements MigrationInterface {
    name = 'alterColumnId1646093814668'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Items" DROP CONSTRAINT "FK_6bd2417275f5e6fadc0da7c2093"`);
        await queryRunner.query(`ALTER TABLE "Items" DROP CONSTRAINT "FK_75bbbbd0b79ae10d8be276c340f"`);
        await queryRunner.query(`ALTER TABLE "Carts" DROP CONSTRAINT "FK_8c26b3de964f6e854a22b7e3293"`);
        await queryRunner.query(`ALTER TABLE "Users" RENAME COLUMN "id" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "Users" RENAME CONSTRAINT "PK_16d4f7d636df336db11d87413e3" TO "PK_a06d29e81a4b836dddfd684ab87"`);
        await queryRunner.query(`ALTER TABLE "Products" RENAME COLUMN "id" TO "productId"`);
        await queryRunner.query(`ALTER TABLE "Products" RENAME CONSTRAINT "PK_36a07cc432789830e7fb7b58a83" TO "PK_b94f3ae27ab7143e5f1b2cec466"`);
        await queryRunner.query(`ALTER TABLE "Items" DROP CONSTRAINT "PK_189aa34dd7379663b1033e37c65"`);
        await queryRunner.query(`ALTER TABLE "Items" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "Items" DROP COLUMN "cartId"`);
        await queryRunner.query(`ALTER TABLE "Items" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "Carts" DROP CONSTRAINT "PK_6088efe237f1e59de8fff0032d5"`);
        await queryRunner.query(`ALTER TABLE "Carts" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "Carts" DROP CONSTRAINT "REL_8c26b3de964f6e854a22b7e329"`);
        await queryRunner.query(`ALTER TABLE "Carts" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "Items" ADD "itemId" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "Items" ADD CONSTRAINT "PK_0d4310c2cdfe70b163af64c0f66" PRIMARY KEY ("itemId")`);
        await queryRunner.query(`ALTER TABLE "Items" ADD "cartCartId" uuid`);
        await queryRunner.query(`ALTER TABLE "Items" ADD "productProductId" uuid`);
        await queryRunner.query(`ALTER TABLE "Carts" ADD "cartId" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "Carts" ADD CONSTRAINT "PK_6657a6e5757175b71800f251990" PRIMARY KEY ("cartId")`);
        await queryRunner.query(`ALTER TABLE "Carts" ADD "userUserId" uuid`);
        await queryRunner.query(`ALTER TABLE "Carts" ADD CONSTRAINT "UQ_054ca1e945f1f6d875ec8643904" UNIQUE ("userUserId")`);
        await queryRunner.query(`ALTER TABLE "Items" ADD CONSTRAINT "FK_6089ed3dac18a09ad8f53987b38" FOREIGN KEY ("cartCartId") REFERENCES "Carts"("cartId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Items" ADD CONSTRAINT "FK_a8cc6cda48db243e2eac3c0f9fd" FOREIGN KEY ("productProductId") REFERENCES "Products"("productId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Carts" ADD CONSTRAINT "FK_054ca1e945f1f6d875ec8643904" FOREIGN KEY ("userUserId") REFERENCES "Users"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Carts" DROP CONSTRAINT "FK_054ca1e945f1f6d875ec8643904"`);
        await queryRunner.query(`ALTER TABLE "Items" DROP CONSTRAINT "FK_a8cc6cda48db243e2eac3c0f9fd"`);
        await queryRunner.query(`ALTER TABLE "Items" DROP CONSTRAINT "FK_6089ed3dac18a09ad8f53987b38"`);
        await queryRunner.query(`ALTER TABLE "Carts" DROP CONSTRAINT "UQ_054ca1e945f1f6d875ec8643904"`);
        await queryRunner.query(`ALTER TABLE "Carts" DROP COLUMN "userUserId"`);
        await queryRunner.query(`ALTER TABLE "Carts" DROP CONSTRAINT "PK_6657a6e5757175b71800f251990"`);
        await queryRunner.query(`ALTER TABLE "Carts" DROP COLUMN "cartId"`);
        await queryRunner.query(`ALTER TABLE "Items" DROP COLUMN "productProductId"`);
        await queryRunner.query(`ALTER TABLE "Items" DROP COLUMN "cartCartId"`);
        await queryRunner.query(`ALTER TABLE "Items" DROP CONSTRAINT "PK_0d4310c2cdfe70b163af64c0f66"`);
        await queryRunner.query(`ALTER TABLE "Items" DROP COLUMN "itemId"`);
        await queryRunner.query(`ALTER TABLE "Carts" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "Carts" ADD CONSTRAINT "REL_8c26b3de964f6e854a22b7e329" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "Carts" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "Carts" ADD CONSTRAINT "PK_6088efe237f1e59de8fff0032d5" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "Items" ADD "productId" uuid`);
        await queryRunner.query(`ALTER TABLE "Items" ADD "cartId" uuid`);
        await queryRunner.query(`ALTER TABLE "Items" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "Items" ADD CONSTRAINT "PK_189aa34dd7379663b1033e37c65" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "Products" RENAME CONSTRAINT "PK_b94f3ae27ab7143e5f1b2cec466" TO "PK_36a07cc432789830e7fb7b58a83"`);
        await queryRunner.query(`ALTER TABLE "Products" RENAME COLUMN "productId" TO "id"`);
        await queryRunner.query(`ALTER TABLE "Users" RENAME CONSTRAINT "PK_a06d29e81a4b836dddfd684ab87" TO "PK_16d4f7d636df336db11d87413e3"`);
        await queryRunner.query(`ALTER TABLE "Users" RENAME COLUMN "userId" TO "id"`);
        await queryRunner.query(`ALTER TABLE "Carts" ADD CONSTRAINT "FK_8c26b3de964f6e854a22b7e3293" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Items" ADD CONSTRAINT "FK_75bbbbd0b79ae10d8be276c340f" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Items" ADD CONSTRAINT "FK_6bd2417275f5e6fadc0da7c2093" FOREIGN KEY ("cartId") REFERENCES "Carts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
