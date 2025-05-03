import type { Context } from "elysia";
import { responseError, responseSuccess } from "../utils/response";
import {
  createTutorInfo,
  getTutorBySubject,
  getUserTutors,
  type TutorInfo,
} from "../services/user.service";

const createTutorDetail = async ({ body, set }: Context) => {
  try {
    const create = await createTutorInfo(body as TutorInfo);
    return responseSuccess(create);
  } catch (err) {
    set.status = 400;
    return responseError(err as string);
  }
};

const getTutosList = async ({ set }: Context) => {
  try {
    const tutors = await getUserTutors();
    return responseSuccess(tutors);
  } catch (err) {
    set.status = 400;
    return responseError(err as string);
  }
};

const getTutorsBySubject = async ({ params: { subjectId } }: Context) => {
  try {
    const tutors = await getTutorBySubject(Number(subjectId));
    return responseSuccess(tutors);
  } catch (err) {
    return responseError(err as string);
  }
};

export { createTutorDetail, getTutosList, getTutorsBySubject };
