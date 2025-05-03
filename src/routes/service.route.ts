import Elysia from "elysia";
import { bookingTutor, searchTutor } from "../controllers/service.controller";
import ServiceModel from "../models/service.model";

export const serviceRoute = new Elysia({
  prefix: "/api/v1/service",
  tags: ["Service"],
})
  .use(ServiceModel)
  .post("/search-tutor", searchTutor, { body: "service-search-tutor" })
  .post("/booking-tutor", bookingTutor, { body: "service-booking-tutor" });
