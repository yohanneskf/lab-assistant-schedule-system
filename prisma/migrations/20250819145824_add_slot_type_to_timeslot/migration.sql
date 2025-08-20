/*
  Warnings:

  - Added the required column `slotType` to the `TimeSlot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."TimeSlot" ADD COLUMN     "slotType" TEXT NOT NULL;
