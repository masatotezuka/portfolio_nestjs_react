import { MigrationInterface, QueryRunner } from "typeorm";

export class init1659801721875 implements MigrationInterface {
    name = 'init1659801721875'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "organization_monthly_survey_checks" ("id" SERIAL NOT NULL, "reasonForApproval" text, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "organizationMonthlySurveyHistoryId" integer, CONSTRAINT "PK_38fa9052ffc872b5d66453d0d13" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_monthly_survey_answers" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "userId" integer, "organizationMonthlySurveyHistoryId" integer, CONSTRAINT "PK_806bfcf4cd92989eac65ce7792e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "organization_monthly_survey_histories" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "organizationMailSettingId" integer, CONSTRAINT "PK_ccff49158816a31576f0e72d23d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "organization_mail_settings" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "bodyText" text NOT NULL, "monthlySendDay" integer NOT NULL, "isValidSendMail" boolean NOT NULL, "isValidRemind" boolean NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "organizationId" integer, CONSTRAINT "REL_9f18bb3405f6a46e962a49081b" UNIQUE ("organizationId"), CONSTRAINT "PK_76b7db6ecad3c6d31be12563863" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "organizations" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_6b031fcd0863e3f6b44230163f9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_license" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "userId" integer, "licenseId" integer, CONSTRAINT "PK_f9fdeafeac79f9c3ef6acbca1f2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_machines" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "userId" integer, "machineId" integer, CONSTRAINT "PK_f16d4070d0c9b64ed9db4c86e3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "verificationToken" character varying, "verificationTokenExpiredAt" TIMESTAMP WITH TIME ZONE, "isPasswordUpdated" boolean NOT NULL, "role" integer NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "organizationId" integer, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "REL_f3d6aea8fcca58182b2e80ce97" UNIQUE ("organizationId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "machine_histories" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "userId" integer, "machineId" integer, CONSTRAINT "PK_6e68d67930a4dd55255acda15e1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "machine_categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_8ab0803abf8741d4651e6bfeaaa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "machines" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "purchasedAt" date, "deletedAt" TIMESTAMP WITH TIME ZONE, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "machineCategoryId" integer, "usageStatusId" integer, CONSTRAINT "PK_7b0817c674bb984650c5274e713" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usage_statuses" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_4b0562b5e2ed83ea803abd73e9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "licenses" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "purchasedAt" date, "expiredAt" date, "deletedAt" TIMESTAMP WITH TIME ZONE, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "usageStatusId" integer, CONSTRAINT "PK_da5021501ce80efa03de6f40086" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "license_histories" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "userId" integer, "licenseId" integer, CONSTRAINT "PK_f7e3f66b3855d8604968753d1ed" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "organization_monthly_survey_checks" ADD CONSTRAINT "FK_0e199c7a5b1a45fcbdda174cd98" FOREIGN KEY ("organizationMonthlySurveyHistoryId") REFERENCES "organization_monthly_survey_histories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_monthly_survey_answers" ADD CONSTRAINT "FK_7fd388c5bd13aef8fb6c3427f29" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_monthly_survey_answers" ADD CONSTRAINT "FK_af3c1379e78c573fb707f402489" FOREIGN KEY ("organizationMonthlySurveyHistoryId") REFERENCES "organization_monthly_survey_histories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "organization_monthly_survey_histories" ADD CONSTRAINT "FK_c866199ab0a3a0ae74f0d749ddf" FOREIGN KEY ("organizationMailSettingId") REFERENCES "organization_mail_settings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "organization_mail_settings" ADD CONSTRAINT "FK_9f18bb3405f6a46e962a49081bd" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_license" ADD CONSTRAINT "FK_1f236ee512d052a2d30b16ca88c" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_license" ADD CONSTRAINT "FK_58676d44946231dc974adc3ac7a" FOREIGN KEY ("licenseId") REFERENCES "licenses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_machines" ADD CONSTRAINT "FK_23686370ce613154537877407d7" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_machines" ADD CONSTRAINT "FK_5edc031f5f5034ff19b34eadd93" FOREIGN KEY ("machineId") REFERENCES "machines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_f3d6aea8fcca58182b2e80ce979" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "machine_histories" ADD CONSTRAINT "FK_66400fe3c634514cdd836d4e4b3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "machine_histories" ADD CONSTRAINT "FK_2e708dadcc9855da6690f6e7199" FOREIGN KEY ("machineId") REFERENCES "machines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "machines" ADD CONSTRAINT "FK_aedfadc16783ff2494f28e9d85e" FOREIGN KEY ("machineCategoryId") REFERENCES "machine_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "machines" ADD CONSTRAINT "FK_efaf176125eb06acdb546b55f6e" FOREIGN KEY ("usageStatusId") REFERENCES "usage_statuses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "licenses" ADD CONSTRAINT "FK_cbb9cf57747b6ebb0d24b32d0d4" FOREIGN KEY ("usageStatusId") REFERENCES "usage_statuses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "license_histories" ADD CONSTRAINT "FK_575d0a58e0c332892659055e8dc" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "license_histories" ADD CONSTRAINT "FK_38367e0d1c08e72c6dcbb84b807" FOREIGN KEY ("licenseId") REFERENCES "licenses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "license_histories" DROP CONSTRAINT "FK_38367e0d1c08e72c6dcbb84b807"`);
        await queryRunner.query(`ALTER TABLE "license_histories" DROP CONSTRAINT "FK_575d0a58e0c332892659055e8dc"`);
        await queryRunner.query(`ALTER TABLE "licenses" DROP CONSTRAINT "FK_cbb9cf57747b6ebb0d24b32d0d4"`);
        await queryRunner.query(`ALTER TABLE "machines" DROP CONSTRAINT "FK_efaf176125eb06acdb546b55f6e"`);
        await queryRunner.query(`ALTER TABLE "machines" DROP CONSTRAINT "FK_aedfadc16783ff2494f28e9d85e"`);
        await queryRunner.query(`ALTER TABLE "machine_histories" DROP CONSTRAINT "FK_2e708dadcc9855da6690f6e7199"`);
        await queryRunner.query(`ALTER TABLE "machine_histories" DROP CONSTRAINT "FK_66400fe3c634514cdd836d4e4b3"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_f3d6aea8fcca58182b2e80ce979"`);
        await queryRunner.query(`ALTER TABLE "user_machines" DROP CONSTRAINT "FK_5edc031f5f5034ff19b34eadd93"`);
        await queryRunner.query(`ALTER TABLE "user_machines" DROP CONSTRAINT "FK_23686370ce613154537877407d7"`);
        await queryRunner.query(`ALTER TABLE "user_license" DROP CONSTRAINT "FK_58676d44946231dc974adc3ac7a"`);
        await queryRunner.query(`ALTER TABLE "user_license" DROP CONSTRAINT "FK_1f236ee512d052a2d30b16ca88c"`);
        await queryRunner.query(`ALTER TABLE "organization_mail_settings" DROP CONSTRAINT "FK_9f18bb3405f6a46e962a49081bd"`);
        await queryRunner.query(`ALTER TABLE "organization_monthly_survey_histories" DROP CONSTRAINT "FK_c866199ab0a3a0ae74f0d749ddf"`);
        await queryRunner.query(`ALTER TABLE "user_monthly_survey_answers" DROP CONSTRAINT "FK_af3c1379e78c573fb707f402489"`);
        await queryRunner.query(`ALTER TABLE "user_monthly_survey_answers" DROP CONSTRAINT "FK_7fd388c5bd13aef8fb6c3427f29"`);
        await queryRunner.query(`ALTER TABLE "organization_monthly_survey_checks" DROP CONSTRAINT "FK_0e199c7a5b1a45fcbdda174cd98"`);
        await queryRunner.query(`DROP TABLE "license_histories"`);
        await queryRunner.query(`DROP TABLE "licenses"`);
        await queryRunner.query(`DROP TABLE "usage_statuses"`);
        await queryRunner.query(`DROP TABLE "machines"`);
        await queryRunner.query(`DROP TABLE "machine_categories"`);
        await queryRunner.query(`DROP TABLE "machine_histories"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "user_machines"`);
        await queryRunner.query(`DROP TABLE "user_license"`);
        await queryRunner.query(`DROP TABLE "organizations"`);
        await queryRunner.query(`DROP TABLE "organization_mail_settings"`);
        await queryRunner.query(`DROP TABLE "organization_monthly_survey_histories"`);
        await queryRunner.query(`DROP TABLE "user_monthly_survey_answers"`);
        await queryRunner.query(`DROP TABLE "organization_monthly_survey_checks"`);
    }

}
