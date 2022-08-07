import { MigrationInterface, QueryRunner } from 'typeorm';

export class seed1659866679826 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO machine_categories (name) VALUES('PC')`,
    );
    await queryRunner.query(
      `INSERT INTO machine_categories (name) VALUES('モニター')`,
    );
    await queryRunner.query(
      `INSERT INTO machine_categories (name) VALUES('ケーブル類')`,
    );
    await queryRunner.query(
      `INSERT INTO machine_categories (name) VALUES('スマホ・携帯')`,
    );
    await queryRunner.query(
      `INSERT INTO machine_categories (name) VALUES('モバイルルーター')`,
    );
    await queryRunner.query(
      `INSERT INTO machine_categories (name) VALUES('無線ルーター')`,
    );
    await queryRunner.query(
      `INSERT INTO machine_categories (name) VALUES('その他')`,
    );
    await queryRunner.query(
      `INSERT INTO usage_statuses (name) VALUES('使用中')`,
    );
    await queryRunner.query(
      `INSERT INTO usage_statuses (name) VALUES('未使用')`,
    );

    await queryRunner.query(`INSERT INTO usage_statuses (name) VALUES('紛失')`);
    await queryRunner.query(`INSERT INTO usage_statuses (name) VALUES('破損')`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM machine_categories`);
    await queryRunner.query(`DELETE FROM usage_statuses`);
  }
}
