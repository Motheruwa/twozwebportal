/*
  Warnings:

  - You are about to drop the column `photo` on the `slider` table. All the data in the column will be lost.
  - Added the required column `attachment` to the `Slider` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `slider` DROP COLUMN `photo`,
    ADD COLUMN `attachment` VARCHAR(191) NOT NULL;
