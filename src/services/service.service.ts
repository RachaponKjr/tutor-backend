import { prisma } from "../libs/prisma";

interface BookingInput {
  userId: number;
  tutorId: number;
  note?: string;
}

const searchTutorService = async ({ searchText }: { searchText: string }) => {
  if (!searchText || searchText.trim() === "") {
    return {
      status: false,
      message: "กรุณากรอกคำค้นหา",
      data: [],
    };
  }

  const tutors = await prisma.tutorProfile.findMany({
    where: {
      OR: [
        {
          tutorName: {
            contains: searchText,
            mode: "insensitive",
          },
        },
        {
          province: {
            contains: searchText,
            mode: "insensitive",
          },
        },
        {
          tutorSubjects: {
            some: {
              category: {
                name: {
                  contains: searchText,
                  mode: "insensitive",
                },
              },
            },
          },
        },
      ],
    },
    select: {
      id: true,
      tutorName: true,
    },
  });

  return {
    status: true,
    message: `พบ ${tutors.length} รายการ`,
    tutors: tutors,
  };
};

const BookingTutorService = async ({ userId, tutorId, note }: BookingInput) => {
  // ตรวจสอบว่าเคยจองแล้วหรือยัง (ยังไม่ถูกยกเลิก)
  const existing = await prisma.bookingTutor.findFirst({
    where: {
      userId,
      tutorId,
      status: {
        in: ["PENDING", "CONFIRMED"],
      },
    },
  });

  if (existing) {
    return {
      status: false,
      message: "คุณได้ทำการจองติวเตอร์คนนี้ไว้แล้ว",
    };
  }

  // สร้างการจองใหม่
  const booking = await prisma.bookingTutor.create({
    data: {
      userId,
      tutorId,
      note,
    },
  });

  return {
    status: true,
    message: "จองติวเตอร์สำเร็จ",
    data: {
      id: booking.id,
      status: booking.status,
    },
  };
};

export { searchTutorService, BookingTutorService };
