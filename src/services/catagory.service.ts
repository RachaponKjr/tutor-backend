import { prisma } from "../libs/prisma";

const createCatagory = async ({ subject }: { subject: string }) => {
  return prisma.subjectCategory.createMany({
    data: {
      name: subject,
    },
  });
};

const getCatagory = async () => {
  return prisma.subjectCategory.findMany();
};

const getCatagoryById = async (id: number) => {
  return prisma.subjectCategory.findUnique({ where: { id } });
};

const deleteCatagory = async (id: number) => {
  return prisma.subjectCategory.delete({ where: { id } });
};

export { createCatagory, getCatagory, getCatagoryById, deleteCatagory };
