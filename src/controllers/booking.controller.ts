import type { Context } from "elysia";
import { responseError, responseSuccess } from "../utils/response";
import {
  createBookingService,
  getAllBookingService,
  type BookingCreate,
} from "../services/booking.service";

const createBookingController = async ({ body, set }: Context) => {
  try {
    const {
      fullName,
      phoneNumber,
      startStudyingDate,
      studyLocation,
      studyingDays,
      studyingTimes,
      target,
      teacherSex,
      teachingMethod,
      yourCity,
    } = body as BookingCreate;
    if (
      !fullName ||
      !phoneNumber ||
      !startStudyingDate ||
      !studyLocation ||
      !studyingDays ||
      !studyingTimes ||
      !target ||
      !teacherSex ||
      !teachingMethod ||
      !yourCity
    ) {
      set.status = 400;
      return responseError("กรุณากรอกข้อมูลให้ครบ");
    }
    const create = await createBookingService({ data: body as BookingCreate });
    return responseSuccess(create);
  } catch (err) {
    return responseError(err as string);
  }
};

const getAllBookingController = async ({ set }: Context) => {
  try {
    const create = await getAllBookingService();
    set.status = 200;
    return responseSuccess(create);
  } catch (err) {
    set.status = 400;
    return responseError(err as string);
  }
};

export { createBookingController, getAllBookingController };
