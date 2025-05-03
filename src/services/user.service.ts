import { prisma } from "../libs/prisma";
import type { TeachingMethod, TeachingTime } from "../libs/prismaClient";
import type { UserResponse } from "../types/auth.type";

export interface TutorInfo {
  image: string;
  phoneNumber: string;
  pricePerHour: number;
  province: string;
  tutorName: string;
  description: string;
  timeEnd: string;
  timeStart: string;
  teachingTime: string; // Update this to match the 'TeachingTime' type from Prisma
  teachingMethod: string;
  categoryId: number[];
  experience: string[];
  userId: number;
  technique: string;
  levels: number[];
}

const getUserTutors = async (): Promise<any[]> => {
  const tutors = await prisma.user.findMany({
    where: {
      role: "TUTOR",
      NOT: { tutorProfile: null },
      tutorProfile: {
        is: { verifyed: true },
      },
    },
    select: {
      tutorProfile: {
        select: {
          tutorName: true,
          province: true,
          image: true,
          pricePerHour: true,
          description: true,
          phoneNumber: true,
          tutorSubjects: {
            select: {
              category: {
                select: { name: true },
              },
            },
          },
          experiences: {
            select: { detail: true },
          },
          levels: {
            select: { teachingLevel: true },
          },
        },
      },
    },
  });

  // 🔄 แปลงให้ frontend ใช้ง่าย
  const formattedTutors = tutors.map((user) => {
    const profile = user.tutorProfile;
    if (!profile) {
      return null; // or handle the null case as needed
    }
    return {
      tutorName: profile.tutorName,
      province: profile.province,
      image: profile.image,
      pricePerHour: profile.pricePerHour,
      description: profile.description,
      phoneNumber: profile.phoneNumber,
      subjects: profile.tutorSubjects.map((subj) => subj.category.name),
      experiences: profile.experiences.map((exp) => exp.detail),
      levels: profile.levels.map((level) => level.teachingLevel),
    };
  });

  return formattedTutors;
};

const getTutorBySubject = async (subjectId: number) => {
  return prisma.tutorProfile.findMany({
    where: { tutorSubjects: { some: { categoryId: subjectId } } },
  });
};

const createTutorInfo = async (data: TutorInfo) => {
  const { categoryId, experience, userId } = data;
  if (!userId) throw new Error("User not found");

  const existing = await prisma.tutorProfile.findUnique({
    where: { userId },
  });

  let tutor;

  if (existing) {
    tutor = await prisma.tutorProfile.update({
      where: { userId },
      data: {
        image: data.image,
        phoneNumber: data.phoneNumber,
        pricePerHour: data.pricePerHour,
        province: data.province,
        tutorName: data.tutorName,
        description: data.description,
        timeEnd: data.timeEnd,
        timeStart: data.timeStart,
        teachingTime: data.teachingTime as TeachingTime,
        teachingMethod: data.teachingMethod as TeachingMethod,
        technique: data.technique,
      },
      include: { tutorSubjects: true, experiences: true },
    });

    // ล้างข้อมูลเก่าก่อนเพิ่มใหม่
    await prisma.tutorSubject.deleteMany({ where: { tutorId: tutor.id } });
    await prisma.experience.deleteMany({ where: { tutorId: tutor.id } });
    await prisma.tutorLevel.deleteMany({ where: { tutorProfileId: tutor.id } });
  } else {
    tutor = await prisma.tutorProfile.create({
      data: {
        image: data.image,
        phoneNumber: data.phoneNumber,
        pricePerHour: data.pricePerHour,
        province: data.province,
        tutorName: data.tutorName,
        description: data.description,
        timeEnd: data.timeEnd,
        timeStart: data.timeStart,
        teachingTime: data.teachingTime as TeachingTime,
        teachingMethod: data.teachingMethod as TeachingMethod,
        technique: data.technique,
        user: { connect: { id: userId } },
      },
      include: { tutorSubjects: true, experiences: true },
    });
  }

  await prisma.tutorSubject.createMany({
    data: categoryId.map((catId) => ({
      tutorId: tutor.id,
      categoryId: catId,
    })),
  });

  await prisma.experience.createMany({
    data: experience.map((exp) => ({
      detail: exp,
      tutorId: tutor.id,
    })),
  });

  await prisma.tutorLevel.createMany({
    data: data.levels.map((levelId) => ({
      tutorProfileId: tutor.id,
      teachingLevelId: levelId,
    })),
  });

  return tutor;
};

export { getUserTutors, createTutorInfo, getTutorBySubject };
