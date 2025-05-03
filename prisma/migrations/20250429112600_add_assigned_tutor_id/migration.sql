/*
  Warnings:

  - You are about to drop the column `tutorId` on the `BookingTutor` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `BookingTutor` table. All the data in the column will be lost.
  - Added the required column `fullName` to the `BookingTutor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `BookingTutor` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SexMethod" AS ENUM ('MAN', 'WOMAN', 'NULL');

-- CreateEnum
CREATE TYPE "Language" AS ENUM ('THAI', 'ENGLISH', 'BOTH');

-- DropForeignKey
ALTER TABLE "BookingTutor" DROP CONSTRAINT "BookingTutor_tutorId_fkey";

-- DropForeignKey
ALTER TABLE "BookingTutor" DROP CONSTRAINT "BookingTutor_userId_fkey";

-- AlterTable
ALTER TABLE "BookingTutor" DROP COLUMN "tutorId",
DROP COLUMN "userId",
ADD COLUMN     "assignedTutorId" INTEGER,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "level" TEXT,
ADD COLUMN     "nationalityTeacher" TEXT,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "startStudyingDate" TIMESTAMP(3),
ADD COLUMN     "studyLocation" TEXT,
ADD COLUMN     "studyingDays" "TeachingTime",
ADD COLUMN     "studyingTimes" TEXT,
ADD COLUMN     "subjectId" INTEGER,
ADD COLUMN     "subjectName" TEXT,
ADD COLUMN     "target" TEXT,
ADD COLUMN     "teacherSex" "SexMethod",
ADD COLUMN     "teachingMethod" "TeachingMethod",
ADD COLUMN     "yourCity" TEXT;

-- AlterTable
ALTER TABLE "TutorProfile" ADD COLUMN     "languageTaught" "Language" NOT NULL DEFAULT 'THAI',
ADD COLUMN     "sex" "SexMethod" NOT NULL DEFAULT 'MAN';

-- AddForeignKey
ALTER TABLE "BookingTutor" ADD CONSTRAINT "BookingTutor_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "SubjectCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingTutor" ADD CONSTRAINT "BookingTutor_assignedTutorId_fkey" FOREIGN KEY ("assignedTutorId") REFERENCES "TutorProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
