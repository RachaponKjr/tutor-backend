/*
  Warnings:

  - You are about to drop the `AvailableTime` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `timeEnd` to the `TutorProfile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeStart` to the `TutorProfile` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TeachingTime" AS ENUM ('WEEKDAY', 'WEEKEND', 'EVERYDAY');

-- DropForeignKey
ALTER TABLE "AvailableTime" DROP CONSTRAINT "AvailableTime_tutorId_fkey";

-- AlterTable
ALTER TABLE "TutorProfile" ADD COLUMN     "availableTimes" "TeachingTime" NOT NULL DEFAULT 'EVERYDAY',
ADD COLUMN     "teachingTime" "TeachingTime" NOT NULL DEFAULT 'EVERYDAY',
ADD COLUMN     "timeEnd" TEXT NOT NULL,
ADD COLUMN     "timeStart" TEXT NOT NULL;

-- DropTable
DROP TABLE "AvailableTime";
