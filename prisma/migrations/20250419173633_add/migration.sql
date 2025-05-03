-- AlterTable
ALTER TABLE "TutorProfile" ADD COLUMN     "experience" TEXT,
ADD COLUMN     "technique" TEXT;

-- CreateTable
CREATE TABLE "TeachingLevel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TeachingLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TutorLevel" (
    "id" SERIAL NOT NULL,
    "tutorProfileId" INTEGER NOT NULL,
    "teachingLevelId" INTEGER NOT NULL,

    CONSTRAINT "TutorLevel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TeachingLevel_name_key" ON "TeachingLevel"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TutorLevel_tutorProfileId_teachingLevelId_key" ON "TutorLevel"("tutorProfileId", "teachingLevelId");

-- AddForeignKey
ALTER TABLE "TutorLevel" ADD CONSTRAINT "TutorLevel_tutorProfileId_fkey" FOREIGN KEY ("tutorProfileId") REFERENCES "TutorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TutorLevel" ADD CONSTRAINT "TutorLevel_teachingLevelId_fkey" FOREIGN KEY ("teachingLevelId") REFERENCES "TeachingLevel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
