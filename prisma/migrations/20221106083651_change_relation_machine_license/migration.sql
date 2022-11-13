/*
  Warnings:

  - A unique constraint covering the columns `[license_id]` on the table `user_licenses` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[machine_id]` on the table `user_machines` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_licenses_license_id_key" ON "user_licenses"("license_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_machines_machine_id_key" ON "user_machines"("machine_id");
