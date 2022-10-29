/*
  Warnings:

  - You are about to drop the column `adminId` on the `licenses` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `licenses` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `licenses` table. All the data in the column will be lost.
  - You are about to drop the column `expiredAt` on the `licenses` table. All the data in the column will be lost.
  - You are about to drop the column `purchasedAt` on the `licenses` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `licenses` table. All the data in the column will be lost.
  - You are about to drop the column `adminId` on the `machines` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `machines` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `machines` table. All the data in the column will be lost.
  - You are about to drop the column `purchasedAt` on the `machines` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `machines` table. All the data in the column will be lost.
  - You are about to drop the column `adminId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `isPasswordUpdated` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `verificationToken` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `verificationTokenExpiredAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `Admins` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `adminMailSettings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `adminMonthlySurveyChecks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `adminMonthlySurveyHistories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `licenseHistories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `machineCategories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `machineHistories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `migrations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userLicenses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userMachines` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userMonthlySurveyAnswers` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[admin_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `first_name` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_password_update` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "adminMailSettings" DROP CONSTRAINT "FK_9f18bb3405f6a46e962a49081bd";

-- DropForeignKey
ALTER TABLE "adminMonthlySurveyChecks" DROP CONSTRAINT "FK_0e199c7a5b1a45fcbdda174cd98";

-- DropForeignKey
ALTER TABLE "adminMonthlySurveyHistories" DROP CONSTRAINT "FK_c866199ab0a3a0ae74f0d749ddf";

-- DropForeignKey
ALTER TABLE "licenseHistories" DROP CONSTRAINT "FK_38367e0d1c08e72c6dcbb84b807";

-- DropForeignKey
ALTER TABLE "licenseHistories" DROP CONSTRAINT "FK_575d0a58e0c332892659055e8dc";

-- DropForeignKey
ALTER TABLE "licenses" DROP CONSTRAINT "FK_4cf8941abbe3057dcface62688f";

-- DropForeignKey
ALTER TABLE "machineHistories" DROP CONSTRAINT "FK_2e708dadcc9855da6690f6e7199";

-- DropForeignKey
ALTER TABLE "machineHistories" DROP CONSTRAINT "FK_66400fe3c634514cdd836d4e4b3";

-- DropForeignKey
ALTER TABLE "machines" DROP CONSTRAINT "FK_0e00fc2bf076a4cbf59f5449d14";

-- DropForeignKey
ALTER TABLE "userLicenses" DROP CONSTRAINT "FK_1f236ee512d052a2d30b16ca88c";

-- DropForeignKey
ALTER TABLE "userLicenses" DROP CONSTRAINT "FK_58676d44946231dc974adc3ac7a";

-- DropForeignKey
ALTER TABLE "userMachines" DROP CONSTRAINT "FK_23686370ce613154537877407d7";

-- DropForeignKey
ALTER TABLE "userMachines" DROP CONSTRAINT "FK_5edc031f5f5034ff19b34eadd93";

-- DropForeignKey
ALTER TABLE "userMonthlySurveyAnswers" DROP CONSTRAINT "FK_7fd388c5bd13aef8fb6c3427f29";

-- DropForeignKey
ALTER TABLE "userMonthlySurveyAnswers" DROP CONSTRAINT "FK_af3c1379e78c573fb707f402489";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "FK_f3d6aea8fcca58182b2e80ce979";

-- DropIndex
DROP INDEX "REL_f3d6aea8fcca58182b2e80ce97";

-- AlterTable
ALTER TABLE "licenses" DROP COLUMN "adminId",
DROP COLUMN "createdAt",
DROP COLUMN "deletedAt",
DROP COLUMN "expiredAt",
DROP COLUMN "purchasedAt",
DROP COLUMN "updateAt",
ADD COLUMN     "admin_id" INTEGER,
ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMPTZ(6),
ADD COLUMN     "expired_at" DATE,
ADD COLUMN     "purchased_at" DATE,
ADD COLUMN     "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "machines" DROP COLUMN "adminId",
DROP COLUMN "createdAt",
DROP COLUMN "deletedAt",
DROP COLUMN "purchasedAt",
DROP COLUMN "updateAt",
ADD COLUMN     "admin_id" INTEGER,
ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMPTZ(6),
ADD COLUMN     "puchased_at" DATE,
ADD COLUMN     "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "adminId",
DROP COLUMN "createdAt",
DROP COLUMN "deletedAt",
DROP COLUMN "firstName",
DROP COLUMN "isPasswordUpdated",
DROP COLUMN "lastName",
DROP COLUMN "updateAt",
DROP COLUMN "verificationToken",
DROP COLUMN "verificationTokenExpiredAt",
ADD COLUMN     "admin_id" INTEGER,
ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMPTZ(6),
ADD COLUMN     "first_name" VARCHAR NOT NULL,
ADD COLUMN     "is_password_update" BOOLEAN NOT NULL,
ADD COLUMN     "last_name" VARCHAR NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "verification_token" VARCHAR,
ADD COLUMN     "verification_token_expired_at" TIMESTAMPTZ(6);

-- DropTable
DROP TABLE "Admins";

-- DropTable
DROP TABLE "adminMailSettings";

-- DropTable
DROP TABLE "adminMonthlySurveyChecks";

-- DropTable
DROP TABLE "adminMonthlySurveyHistories";

-- DropTable
DROP TABLE "licenseHistories";

-- DropTable
DROP TABLE "machineCategories";

-- DropTable
DROP TABLE "machineHistories";

-- DropTable
DROP TABLE "migrations";

-- DropTable
DROP TABLE "userLicenses";

-- DropTable
DROP TABLE "userMachines";

-- DropTable
DROP TABLE "userMonthlySurveyAnswers";

-- CreateTable
CREATE TABLE "license_histories" (
    "id" SERIAL NOT NULL,
    "usage_status" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,
    "licenseId" INTEGER,

    CONSTRAINT "PK_f7e3f66b3855d8604968753d1ed" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "machine_histories" (
    "id" SERIAL NOT NULL,
    "usage_status" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER,
    "machine_id" INTEGER,

    CONSTRAINT "PK_6e68d67930a4dd55255acda15e1" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin_mail_settings" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "bodt_text" VARCHAR NOT NULL,
    "monthlySendDay" INTEGER NOT NULL,
    "is_valid_send_mail" BOOLEAN NOT NULL,
    "is_valid_remind" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "admin_id" INTEGER,

    CONSTRAINT "PK_76b7db6ecad3c6d31be12563863" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin_monthly_survey_checks" (
    "id" SERIAL NOT NULL,
    "reason_for_approval" VARCHAR,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "admin_monthly_survey_history_id" INTEGER,

    CONSTRAINT "PK_38fa9052ffc872b5d66453d0d13" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin_monthly_survey_histories" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "admin_mail_setting_id" INTEGER,

    CONSTRAINT "PK_ccff49158816a31576f0e72d23d" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admins" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "deleted_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_6b031fcd0863e3f6b44230163f9" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_licenses" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ(6),
    "user_id" INTEGER,
    "license_id" INTEGER,

    CONSTRAINT "PK_f9fdeafeac79f9c3ef6acbca1f2" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_machines" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ(6),
    "user_id" INTEGER,
    "machine_id" INTEGER,

    CONSTRAINT "PK_f16d4070d0c9b64ed9db4c86e3b" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_monthly_survey_answers" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER,
    "admin_monthly_survey_history_id" INTEGER,

    CONSTRAINT "PK_806bfcf4cd92989eac65ce7792e" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "REL_9f18bb3405f6a46e962a49081b" ON "admin_mail_settings"("admin_id");

-- CreateIndex
CREATE UNIQUE INDEX "REL_f3d6aea8fcca58182b2e80ce97" ON "users"("admin_id");

-- AddForeignKey
ALTER TABLE "license_histories" ADD CONSTRAINT "FK_38367e0d1c08e72c6dcbb84b807" FOREIGN KEY ("licenseId") REFERENCES "licenses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "license_histories" ADD CONSTRAINT "FK_575d0a58e0c332892659055e8dc" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "licenses" ADD CONSTRAINT "FK_4cf8941abbe3057dcface62688f" FOREIGN KEY ("admin_id") REFERENCES "admins"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "machine_histories" ADD CONSTRAINT "FK_2e708dadcc9855da6690f6e7199" FOREIGN KEY ("machine_id") REFERENCES "machines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "machine_histories" ADD CONSTRAINT "FK_66400fe3c634514cdd836d4e4b3" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "machines" ADD CONSTRAINT "FK_0e00fc2bf076a4cbf59f5449d14" FOREIGN KEY ("admin_id") REFERENCES "admins"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "admin_mail_settings" ADD CONSTRAINT "FK_9f18bb3405f6a46e962a49081bd" FOREIGN KEY ("admin_id") REFERENCES "admins"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "admin_monthly_survey_checks" ADD CONSTRAINT "FK_0e199c7a5b1a45fcbdda174cd98" FOREIGN KEY ("admin_monthly_survey_history_id") REFERENCES "admin_monthly_survey_histories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "admin_monthly_survey_histories" ADD CONSTRAINT "FK_c866199ab0a3a0ae74f0d749ddf" FOREIGN KEY ("admin_mail_setting_id") REFERENCES "admin_mail_settings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_licenses" ADD CONSTRAINT "FK_1f236ee512d052a2d30b16ca88c" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_licenses" ADD CONSTRAINT "FK_58676d44946231dc974adc3ac7a" FOREIGN KEY ("license_id") REFERENCES "licenses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_machines" ADD CONSTRAINT "FK_23686370ce613154537877407d7" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_machines" ADD CONSTRAINT "FK_5edc031f5f5034ff19b34eadd93" FOREIGN KEY ("machine_id") REFERENCES "machines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_monthly_survey_answers" ADD CONSTRAINT "FK_7fd388c5bd13aef8fb6c3427f29" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_monthly_survey_answers" ADD CONSTRAINT "FK_af3c1379e78c573fb707f402489" FOREIGN KEY ("admin_monthly_survey_history_id") REFERENCES "admin_monthly_survey_histories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "FK_f3d6aea8fcca58182b2e80ce979" FOREIGN KEY ("admin_id") REFERENCES "admins"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
