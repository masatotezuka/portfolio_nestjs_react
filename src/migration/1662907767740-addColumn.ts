import { MigrationInterface, QueryRunner } from "typeorm";

export class addColumn1662907767740 implements MigrationInterface {
    name = 'addColumn1662907767740'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "machines" ADD "organizationId" integer`);
        await queryRunner.query(`ALTER TABLE "licenses" ADD "organizationId" integer`);
        await queryRunner.query(`ALTER TABLE "machines" ADD CONSTRAINT "FK_0e00fc2bf076a4cbf59f5449d14" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "licenses" ADD CONSTRAINT "FK_4cf8941abbe3057dcface62688f" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "licenses" DROP CONSTRAINT "FK_4cf8941abbe3057dcface62688f"`);
        await queryRunner.query(`ALTER TABLE "machines" DROP CONSTRAINT "FK_0e00fc2bf076a4cbf59f5449d14"`);
        await queryRunner.query(`ALTER TABLE "licenses" DROP COLUMN "organizationId"`);
        await queryRunner.query(`ALTER TABLE "machines" DROP COLUMN "organizationId"`);
    }

}
