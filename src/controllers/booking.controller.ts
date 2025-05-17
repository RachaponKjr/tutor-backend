import type { Context } from "elysia";
import { responseError, responseSuccess } from "../utils/response";
import {
  createBookingService,
  getAllBookingService,
  type BookingCreate,
} from "../services/booking.service";

const createBookingController = async ({ body, set }: Context) => {
  try {
    const { fullName, phoneNumber, subjectCategoryId } = body as BookingCreate;
    console.log(body);
    if (!fullName || !phoneNumber || !subjectCategoryId) {
      set.status = 400;
      return responseError("กรุณากรอกชื่อ เบอร์โทร และวิชาอย่างน้อย");
    }

    const create = await createBookingService({ data: body as BookingCreate });
    return responseSuccess(create);
  } catch (err) {
    set.status = 500;
    return responseError("เกิดข้อผิดพลาดบนเซิร์ฟเวอร์");
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
