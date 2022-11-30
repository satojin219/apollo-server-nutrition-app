/*
  Warnings:

  - You are about to drop the `Todo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `activeLevel` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `activeLevel` INTEGER NOT NULL,
    ADD COLUMN `age` INTEGER NOT NULL,
    ADD COLUMN `gender` VARCHAR(191) NOT NULL,
    ADD COLUMN `height` INTEGER NOT NULL,
    ADD COLUMN `weight` INTEGER NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Todo`;

-- CreateTable
CREATE TABLE `Menu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `recipeName` VARCHAR(191) NOT NULL,
    `imgUrl` VARCHAR(191) NOT NULL,
    `tips` VARCHAR(191) NOT NULL,
    `cost` INTEGER NOT NULL,
    `time` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `createdAt` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Foodstuff` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `weight` INTEGER NOT NULL,
    `menuId` INTEGER NOT NULL,

    UNIQUE INDEX `Foodstuff_menuId_key`(`menuId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recipe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(191) NOT NULL,
    `menuId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nutrition` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `calorie` INTEGER NOT NULL,
    `carbohydrates` INTEGER NOT NULL,
    `protein` INTEGER NOT NULL,
    `lipids` INTEGER NOT NULL,
    `suger` INTEGER NOT NULL,
    `dietaryFiber` INTEGER NOT NULL,
    `salt` INTEGER NOT NULL,
    `na` INTEGER NOT NULL,
    `k` INTEGER NOT NULL,
    `ca` INTEGER NOT NULL,
    `mg` INTEGER NOT NULL,
    `p` INTEGER NOT NULL,
    `fe` INTEGER NOT NULL,
    `zn` INTEGER NOT NULL,
    `cu` INTEGER NOT NULL,
    `mn` INTEGER NOT NULL,
    `i` INTEGER NOT NULL,
    `se` INTEGER NOT NULL,
    `cr` INTEGER NOT NULL,
    `mo` INTEGER NOT NULL,
    `vitA` INTEGER NOT NULL,
    `vitD` INTEGER NOT NULL,
    `vitE` INTEGER NOT NULL,
    `vitK` INTEGER NOT NULL,
    `vitB1` INTEGER NOT NULL,
    `vitB2` INTEGER NOT NULL,
    `vitB6` INTEGER NOT NULL,
    `vitB12` INTEGER NOT NULL,
    `vitC` INTEGER NOT NULL,
    `niacin` INTEGER NOT NULL,
    `pantothenicAcid` INTEGER NOT NULL,
    `folate` INTEGER NOT NULL,
    `biotin` INTEGER NOT NULL,
    `menuId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
