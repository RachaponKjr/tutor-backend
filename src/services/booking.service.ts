import { prisma } from "../libs/prisma";
import type {
  BookingStatus,
  SexMethod,
  TeachingMethod,
  TeachingTime,
} from "../libs/prismaClient";

export interface BookingCreate {
  fullName: string;
  phoneNumber: string;
  email?: string;
  subjectId?: number;
  subjectName?: string;
  level?: string;
  target?: string;
  nationalityTeacher?: string;
  teacherSex?: SexMethod;
  studyingDays?: TeachingTime;
  studyingTimes?: string;
  startStudyingDate?: string;
  teachingMethod?: TeachingMethod;
  studyLocation?: string;
  yourCity?: string;
  note?: string;
  status?: BookingStatus;
  // assignedTutorId: อย่าให้ส่งมาตอนสร้าง
}

const createBookingService = async ({ data }: { data: BookingCreate }) => {
  return prisma.bookingTutor.create({
    data: {
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      subjectId: data.subjectId,
      subjectName: data.subjectName,
      level: data.level,
      target: data.target,
      nationalityTeacher: data.nationalityTeacher,
      teacherSex: data.teacherSex,
      studyingDays: data.studyingDays,
      studyingTimes: data.studyingTimes,
      startStudyingDate: data.startStudyingDate,
      teachingMethod: data.teachingMethod,
      studyLocation: data.studyLocation,
      yourCity: data.yourCity,
      note: data.note,
      status: data.status || "PENDING", // fallback ถ้าไม่ส่ง status
      // assignedTutorId: ไม่ต้องใส่
    },
  });
};

const getAllBookingService = async () => {
  return prisma.bookingTutor.findMany();
};

export { createBookingService, getAllBookingService };
