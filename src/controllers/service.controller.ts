import type { Context } from "elysia";
import {
  BookingTutorService,
  searchTutorService,
} from "../services/service.service";
import { responseError, responseSuccess } from "../utils/response";

const searchTutor = async ({ body, set }: Context) => {
  try {
    const { searchText } = body as { searchText: string };
    if (!searchText || searchText.trim() === "") {
      set.status = 400;
      return responseError("กรุณากรอกคำค้นหา");
    }
    const tutors = await searchTutorService({ searchText: searchText });
    set.status = 200;
    return responseSuccess(tutors);
  } catch (err) {
    set.status = 400;
    return responseError(err as string);
  }
};

const bookingTutor = async ({ body, set }: Context) => {
  try {
    const { userId, tutorId, note } = body as {
      userId: number;
      tutorId: number;
      note: string;
    };
    const tutors = await BookingTutorService({ userId, tutorId, note });
    set.status = 200;
    return responseSuccess(tutors);
  } catch (err) {
    set.status = 400;
    return responseError(err as string);
  }
};

export { searchTutor, bookingTutor };
