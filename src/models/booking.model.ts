import { Elysia, t } from "elysia";

const BookingCreateBody = t.Object({
  fullName: t.String({
    description: "ชื่อของลูกค้า",
    example: "สมชาย ใจดี",
  }),
  phoneNumber: t.String({
    description: "เบอร์โทรศัพท์",
    example: "0812345678",
  }),
  email: t.String({
    format: "email",
    optional: true,
    default: "",
    description: "อีเมล (optional)",
    example: "example@email.com",
  }),

  subjectId: t.Integer({ optional: true, example: 1 }),
  subjectName: t.String({ optional: true, default: "", example: "คณิตศาสตร์" }),
  level: t.String({ optional: true, default: "", example: "มัธยมปลาย" }),
  target: t.String({
    optional: true,
    default: "",
    example: "สอบเข้ามหาวิทยาลัย",
  }),
  nationalityTeacher: t.String({ optional: true, default: "", example: "ไทย" }),

  teacherSex: t.Optional(
    t.Enum(
      {
        MAN: "MAN",
        WOMAN: "WOMAN",
        NULL: "NULL",
      },
      {
        description: "เพศของครูที่ต้องการ",
        example: "MAN",
      }
    )
  ),

  studyingDays: t.Optional(
    t.Enum(
      {
        WEEKDAY: "WEEKDAY",
        WEEKEND: "WEEKEND",
        EVERYDAY: "EVERYDAY",
      },
      {
        description: "วันที่ต้องการเรียน",
        example: "WEEKEND",
      }
    )
  ),

  studyingTimes: t.String({
    optional: true,
    default: "",
    example: "18:00 - 20:00",
  }),
  startStudyingDate: t.String({
    optional: true,
    format: "date",
    default: "",
    example: "2025-05-01",
    description: "วันที่เริ่มเรียน (yyyy-mm-dd)",
  }),

  teachingMethod: t.Optional(
    t.Enum(
      {
        ONLINE: "ONLINE",
        ONSITE: "ONSITE",
        BOTH: "BOTH",
      },
      {
        description: "รูปแบบการเรียน",
        example: "ONLINE",
      }
    )
  ),

  studyLocation: t.String({
    optional: true,
    default: "",
    example: "เขตลาดพร้าว",
  }),
  yourCity: t.String({ optional: true, default: "", example: "กรุงเทพมหานคร" }),
  note: t.String({
    optional: true,
    default: "",
    example: "อยากให้ครูเน้นการสนทนา",
  }),

  assignedTutorId: t.Optional(t.Integer({ example: 42 })),

  status: t.Optional(
    t.Enum(
      {
        PENDING: "PENDING",
        CONFIRMED: "CONFIRMED",
        CANCELLED: "CANCELLED",
        COMPLETED: "COMPLETED",
      },
      {
        example: "PENDING",
        description: "สถานะของการจอง",
      }
    )
  ),
});

const BookingModel = new Elysia().model("booking-create", BookingCreateBody);

export default BookingModel;
export { BookingCreateBody };
