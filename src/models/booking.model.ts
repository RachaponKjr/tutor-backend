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
    optional: true,
    default: "",
    description: "อีเมล (optional)",
    example: "example@email.com",
  }),

  // แบบฟอร์มที่ผู้ใช้งานเลือกแต่ละขั้น (optional ทั้งหมด)
  formOne: t.String({ optional: true, default: "", example: "วัยประถมศึกษา" }),
  formTwo: t.String({ optional: true, default: "", example: "เพิ่มเกรด" }),
  formThree: t.String({ optional: true, default: "", example: "ครูผู้หญิง" }),
  formFour: t.String({ optional: true, default: "", example: "สอนออนไลน์" }),
  formFive: t.String({ optional: true, default: "", example: "เขตลาดพร้าว" }),
  formSix: t.String({ optional: true, default: "", example: "เสาร์-อาทิตย์" }),
  formSeven: t.String({
    optional: true,
    default: "",
    example: "18:00 - 20:00",
  }),
  formEight: t.String({ optional: true, default: "", example: "2025-06-01" }),

  yourCity: t.String({ optional: true, default: "", example: "กรุงเทพมหานคร" }),

  assignedTutorId: t.Optional(t.Integer({ example: 42 })),

  subjectCategoryId: t.Optional(t.Integer({ example: 1 })),

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
