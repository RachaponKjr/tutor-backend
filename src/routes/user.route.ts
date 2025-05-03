import { Elysia, t } from "elysia";
import {
  createTutorDetail,
  getTutorsBySubject,
  getTutosList,
} from "../controllers/user.controller";
import UserModel from "../models/user.model";

export const userRoute = new Elysia({
  prefix: "/api/v1/user",
  tags: ["User"],
})
  .use(UserModel)
  .get("/tutors", getTutosList)
  .get("/tutors/:subjectId", getTutorsBySubject)
  .post("/tutor-detail", createTutorDetail, {
    body: "user-create-tutor-detail",
  });
