/*
  Warnings:

  - You are about to drop the column `organizationId` on the `licenses` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `machines` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `license_histories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `machine_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `machine_histories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `organization_mail_settings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `organization_monthly_survey_checks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `organization_monthly_survey_histories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `organizations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usage_statuses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_license` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_machines` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_monthly_survey_answers` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[adminId]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "license_histories" DROP CONSTRAINT "FK_38367e0d1c08e72c6dcbb84b807";

-- DropForeignKey
ALTER TABLE "license_histories" DROP CONSTRAINT "FK_575d0a58e0c332892659055e8dc";

-- DropForeignKey
ALTER TABLE "licenses" DROP CONSTRAINT "FK_4cf8941abbe3057dcface62688f";

-- DropForeignKey
ALTER TABLE "machine_histories" DROP CONSTRAINT "FK_2e708dadcc9855da6690f6e7199";

-- DropForeignKey
ALTER TABLE "machine_histories" DROP CONSTRAINT "FK_66400fe3c634514cdd836d4e4b3";

-- DropForeignKey
ALTER TABLE "machines" DROP CONSTRAINT "FK_0e00fc2bf076a4cbf59f5449d14";

-- DropForeignKey
ALTER TABLE "organization_mail_settings" DROP CONSTRAINT "FK_9f18bb3405f6a46e962a49081bd";

-- DropForeignKey
ALTER TABLE "organization_monthly_survey_checks" DROP CONSTRAINT "FK_0e199c7a5b1a45fcbdda174cd98";

-- DropForeignKey
ALTER TABLE "organization_monthly_survey_histories" DROP CONSTRAINT "FK_c866199ab0a3a0ae74f0d749ddf";

-- DropForeignKey
ALTER TABLE "user_license" DROP CONSTRAINT "FK_1f236ee512d052a2d30b16ca88c";

-- DropForeignKey
ALTER TABLE "user_license" DROP CONSTRAINT "FK_58676d44946231dc974adc3ac7a";

-- DropForeignKey
ALTER TABLE "user_machines" DROP CONSTRAINT "FK_23686370ce613154537877407d7";

-- DropForeignKey
ALTER TABLE "user_machines" DROP CONSTRAINT "FK_5edc031f5f5034ff19b34eadd93";

-- DropForeignKey
ALTER TABLE "user_monthly_survey_answers" DROP CONSTRAINT "FK_7fd388c5bd13aef8fb6c3427f29";

-- DropForeignKey
ALTER TABLE "user_monthly_survey_answers" DROP CONSTRAINT "FK_af3c1379e78c573fb707f402489";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "FK_f3d6aea8fcca58182b2e80ce979";

-- DropIndex
DROP INDEX "REL_f3d6aea8fcca58182b2e80ce97";

-- AlterTable
ALTER TABLE "licenses" DROP COLUMN "organizationId",
ADD COLUMN     "adminId" INTEGER;

-- AlterTable
ALTER TABLE "machines" DROP COLUMN "organizationId",
ADD COLUMN     "adminId" INTEGER;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "organizationId",
ADD COLUMN     "adminId" INTEGER;

-- DropTable
DROP TABLE "license_histories";

-- DropTable
DROP TABLE "machine_categories";

-- DropTable
DROP TABLE "machine_histories";

-- DropTable
DROP TABLE "organization_mail_settings";

-- DropTable
DROP TABLE "organization_monthly_survey_checks";

-- DropTable
DROP TABLE "organization_monthly_survey_histories";

-- DropTable
DROP TABLE "organizations";

-- DropTable
DROP TABLE "usage_statuses";

-- DropTable
DROP TABLE "user_license";

-- DropTable
DROP TABLE "user_machines";

-- DropTable
DROP TABLE "user_monthly_survey_answers";

-- CreateTable
CREATE TABLE "licenseHistories" (
    "id" SERIAL NOT NULL,
    "usageStatus" VARCHAR NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,
    "licenseId" INTEGER,

    CONSTRAINT "PK_f7e3f66b3855d8604968753d1ed" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "machineCategories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "deletedAt" TIMESTAMPTZ(6),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_8ab0803abf8741d4651e6bfeaaa" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "machineHistories" (
    "id" SERIAL NOT NULL,
    "usageStatus" VARCHAR NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,
    "machineId" INTEGER,

    CONSTRAINT "PK_6e68d67930a4dd55255acda15e1" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adminMailSettings" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "bodyText" TEXT NOT NULL,
    "monthlySendDay" INTEGER NOT NULL,
    "isValidSendMail" BOOLEAN NOT NULL,
    "isValidRemind" BOOLEAN NOT NULL,
    "deletedAt" TIMESTAMPTZ(6),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "adminId" INTEGER,

    CONSTRAINT "PK_76b7db6ecad3c6d31be12563863" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adminMonthlySurveyChecks" (
    "id" SERIAL NOT NULL,
    "reasonForApproval" TEXT,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "adminMonthlySurveyHistoryId" INTEGER,

    CONSTRAINT "PK_38fa9052ffc872b5d66453d0d13" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adminMonthlySurveyHistories" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "adminMailSettingId" INTEGER,

    CONSTRAINT "PK_ccff49158816a31576f0e72d23d" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admins" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "deletedAt" TIMESTAMPTZ(6),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_6b031fcd0863e3f6b44230163f9" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userLicenses" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMPTZ(6),
    "userId" INTEGER,
    "licenseId" INTEGER,

    CONSTRAINT "PK_f9fdeafeac79f9c3ef6acbca1f2" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userMachines" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMPTZ(6),
    "userId" INTEGER,
    "machineId" INTEGER,

    CONSTRAINT "PK_f16d4070d0c9b64ed9db4c86e3b" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userMonthlySurveyAnswers" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,
    "adminMonthlySurveyHistoryId" INTEGER,

    CONSTRAINT "PK_806bfcf4cd92989eac65ce7792e" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "REL_9f18bb3405f6a46e962a49081b" ON "adminMailSettings"("adminId");

-- CreateIndex
CREATE UNIQUE INDEX "REL_f3d6aea8fcca58182b2e80ce97" ON "users"("adminId");

-- AddForeignKey
ALTER TABLE "licenseHistories" ADD CONSTRAINT "FK_38367e0d1c08e72c6dcbb84b807" FOREIGN KEY ("licenseId") REFERENCES "licenses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "licenseHistories" ADD CONSTRAINT "FK_575d0a58e0c332892659055e8dc" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "licenses" ADD CONSTRAINT "FK_4cf8941abbe3057dcface62688f" FOREIGN KEY ("adminId") REFERENCES "Admins"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "machineHistories" ADD CONSTRAINT "FK_2e708dadcc9855da6690f6e7199" FOREIGN KEY ("machineId") REFERENCES "machines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "machineHistories" ADD CONSTRAINT "FK_66400fe3c634514cdd836d4e4b3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "machines" ADD CONSTRAINT "FK_0e00fc2bf076a4cbf59f5449d14" FOREIGN KEY ("adminId") REFERENCES "Admins"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "adminMailSettings" ADD CONSTRAINT "FK_9f18bb3405f6a46e962a49081bd" FOREIGN KEY ("adminId") REFERENCES "Admins"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "adminMonthlySurveyChecks" ADD CONSTRAINT "FK_0e199c7a5b1a45fcbdda174cd98" FOREIGN KEY ("adminMonthlySurveyHistoryId") REFERENCES "adminMonthlySurveyHistories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "adminMonthlySurveyHistories" ADD CONSTRAINT "FK_c866199ab0a3a0ae74f0d749ddf" FOREIGN KEY ("adminMailSettingId") REFERENCES "adminMailSettings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userLicenses" ADD CONSTRAINT "FK_1f236ee512d052a2d30b16ca88c" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userLicenses" ADD CONSTRAINT "FK_58676d44946231dc974adc3ac7a" FOREIGN KEY ("licenseId") REFERENCES "licenses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userMachines" ADD CONSTRAINT "FK_23686370ce613154537877407d7" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userMachines" ADD CONSTRAINT "FK_5edc031f5f5034ff19b34eadd93" FOREIGN KEY ("machineId") REFERENCES "machines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userMonthlySurveyAnswers" ADD CONSTRAINT "FK_7fd388c5bd13aef8fb6c3427f29" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userMonthlySurveyAnswers" ADD CONSTRAINT "FK_af3c1379e78c573fb707f402489" FOREIGN KEY ("adminMonthlySurveyHistoryId") REFERENCES "adminMonthlySurveyHistories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "FK_f3d6aea8fcca58182b2e80ce979" FOREIGN KEY ("adminId") REFERENCES "Admins"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
