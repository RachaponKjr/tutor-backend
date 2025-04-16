import { z } from "zod";

const AvailableTimeSchema = z.object({
  dayStart: z.string(),
  dayEnd: z.string(),
  timeStart: z.string(),
  timeEnd: z.string(),
  tutorId: z.number(),
});

const ExperienceSchema = z.object({
  detail: z.string(),
  tutorId: z.number(),
});

const ReviewSchema = z.object({
  comment: z.string(),
  rating: z.number(),
  tutorId: z.number(),
  userId: z.number(),
});

const TutorSubject = z.object({
  tutorId: z.number(),
  categoryId: z.number(),
});

const TutorProfileSchema = z.object({
  tutorName: z.string(),
  province: z.string(),
  image: z.string(),
  pricePerHour: z.number(),
  description: z.string(),
  phoneNumber: z.string(),
  verified: z.boolean(),
  availableTime: z.array(AvailableTimeSchema),
  experience: z.array(ExperienceSchema),
  tutorSubjects: z.array(TutorSubject),
});

export type AvailableTime = z.infer<typeof AvailableTimeSchema>;
export type TutorProfile = z.infer<typeof TutorProfileSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type Review = z.infer<typeof ReviewSchema>;
export type TutorSubject = z.infer<typeof TutorSubject>;
