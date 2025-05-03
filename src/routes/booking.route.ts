import Elysia from "elysia";
import BookingModel from "../models/booking.model";
import {
  createBookingController,
  getAllBookingController,
} from "../controllers/booking.controller";

export const bookingRoute = new Elysia({
  prefix: "/api/v1/booking",
  tags: ["Booking"],
})
  .use(BookingModel)
  .post("/create", createBookingController, { body: "booking-create" })
  .get("/", getAllBookingController);
