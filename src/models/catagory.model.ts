import Elysia, { t } from "elysia";

const createSubjectBody = t.Object({
  name: t.String(),
});

const CatagoryModel = new Elysia().model(
  "catagory-create-subject",
  createSubjectBody
);

export default CatagoryModel;
