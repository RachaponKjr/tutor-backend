import { prisma } from "../libs/prisma";
import type {
  BookingStatus,
  SexMethod,
  TeachingMethod,
  TeachingTime,
} from "../libs/prismaClient";

export type BookingCreate = {
  fullName: string;
  phoneNumber: string;
  email?: string;

  formOne?: string;
  formTwo?: string;
  formThree?: string;
  formFour?: string;
  formFive?: string;
  formSix?: string;
  formSeven?: string;
  formEight?: string;
  formTen?: string;
  formEleven?: string;

  yourCity?: string;
  subjectCategoryId: number;
  status?: "PENDING" | "CONFIRMED" | "REJECTED"; // ถ้าใช้ enum
};

const createBookingService = async ({ data }: { data: BookingCreate }) => {
  return prisma.bookingTutor.create({
    data: {
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      formOne: data.formOne,
      formTwo: data.formTwo,
      formThree: data.formThree,
      formFour: data.formFour,
      formFive: data.formFive,
      formSix: data.formSix,
      formSeven: data.formSeven,
      formEight: data.formEight,
      yourCity: data.yourCity,
      subjectCategoryId: data.subjectCategoryId,
      status: (data.status || "PENDING") as BookingStatus,
    },
  });
};

const getAllBookingService = async () => {
  return prisma.bookingTutor.findMany();
};

export { createBookingService, getAllBookingService };
