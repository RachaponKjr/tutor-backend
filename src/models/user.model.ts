import Elysia, { t } from "elysia";


// สมมุติว่าใช้ enum เหล่านี้จาก Prisma
const TeachingMethod = { ONLINE: 'ONLINE', ONSITE: 'ONSITE', BOTH: 'BOTH' } as const;
const TeachingTime = { WEEKDAY: 'WEEKDAY', WEEKEND: 'WEEKEND', EVERYDAY: 'EVERYDAY' } as const;
const SexMethod = { MAN: 'MAN', WOMAN: 'WOMAN', OTHER: 'OTHER' } as const;
const Language = { THAI: 'THAI', ENGLISH: 'ENGLISH' } as const;

export const createTutorDetailBody = t.Object({
  image: t.String({ examples: ['https://example.com/image.jpg'] }),
  phoneNumber: t.String({ examples: ['0612345678'] }),
  pricePerHour: t.Number({ examples: [300] }),
  province: t.String({ examples: ['กรุงเทพมหานคร'] }),
  tutorName: t.String({ examples: ['ครูมิ๊ก'] }),
  description: t.Optional(
    t.String({ examples: ['ติวเข้มเนื้อหาครบถ้วนทุกจุดที่สำคัญ'] })
  ),
  technique: t.Optional(
    t.String({ examples: ['สอนเน้นความเข้าใจมากกว่าท่องจำ'] })
  ),

  categoryId: t.Array(t.Number({ examples: [1] }), {
    examples: [[1, 2, 3]],
  }),
  teachingTime: t.Enum(TeachingTime, {
    examples: Object.values(TeachingTime),
  }),
  timeStart: t.String({ examples: ['08:00:00'] }),
  timeEnd: t.String({ examples: ['17:00:00'] }),

  experience: t.Array(t.String(), {
    examples: [['สอน GED 2 ปี', 'ติวสอบ IGCSE']],
  }),
  levels: t.Array(t.Number(), {
    examples: [[1, 2, 3]],
  }),

  userId: t.Number({ examples: [42] }),
  teachingMethod: t.Enum(TeachingMethod, {
    examples: Object.values(TeachingMethod),
  }),
  sex: t.Enum(SexMethod, { examples: Object.values(SexMethod) }),
  languageTaught: t.Enum(Language, { examples: Object.values(Language) }),
});


const UserModel = new Elysia().model(
  "user-create-tutor-detail",
  createTutorDetailBody
);

export default UserModel;
