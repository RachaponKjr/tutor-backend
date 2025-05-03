-- CreateEnum
CREATE TYPE "TeachingMethod" AS ENUM ('ONLINE', 'ONSITE', 'BOTH');

-- AlterTable
ALTER TABLE "TutorProfile" ADD COLUMN     "teachingMethod" "TeachingMethod" NOT NULL DEFAULT 'ONLINE';
