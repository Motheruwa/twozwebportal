/*
  Warnings:

  - You are about to drop the column `describtion` on the `news` table. All the data in the column will be lost.
  - Added the required column `description` to the `News` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `news` DROP COLUMN `describtion`,
    ADD COLUMN `description` VARCHAR(191) NOT NULL;
