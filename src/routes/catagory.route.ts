import Elysia from "elysia";
import {
  createSubject,
  deleteCatagory,
  getCatagoryBySubject,
  getCatagoryController,
} from "../controllers/catagory.controller";
import CatagoryModel from "../models/catagory.model";

export const catagoryRoute = new Elysia({
  prefix: "/api/v1/catagory",
  tags: ["CatagorySubject"],
})
  .use(CatagoryModel)
  .post("/create", createSubject, { body: "catagory-create-subject" })
  .get("/", getCatagoryController)
  .get("/:subjectId", getCatagoryBySubject)
  .delete("/:subjectId", deleteCatagory);
