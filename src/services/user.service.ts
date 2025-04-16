import { prisma } from "../libs/prisma";
import type { UserResponse } from "../types/auth.type";

export interface TutorInfo {
  image: string;
  phoneNumber: string;
  pricePerHour: number;
  province: string;
  tutorName: string;
  description: string;
  categoryId: number[];
  experience: string[];
  userId: number;
}

const getUserTutors = async (): Promise<any[]> => {
  return prisma.user.findMany({
    where: { role: "TUTOR" },
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
                select: {
                  name: true,
                },
              },
            },
          },
          experiences: {
            select: {
              detail: true,
            },
          },
        },
      },
    },
  });
};

const getTutorBySubject = async (subjectId: number) => {
  return prisma.tutorProfile.findMany({
    where: { tutorSubjects: { some: { categoryId: subjectId } } },
  });
};

const createTutorInfo = async (data: TutorInfo) => {
  const { categoryId, experience, userId } = data;
  if (!userId) throw new Error("User not found");

  // const result = await prisma.$transaction(async (tx) => {
  const tutor = await prisma.tutorProfile.create({
    data: {
      image: data.image,
      phoneNumber: data.phoneNumber,
      pricePerHour: data.pricePerHour,
      province: data.province,
      tutorName: data.tutorName,
      description: data.description,
      user: { connect: { id: userId } },
    },
    include: { tutorSubjects: true, experiences: true },
  });

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

  return tutor;
  // })

  // return result
};

export { getUserTutors, createTutorInfo, getTutorBySubject };
