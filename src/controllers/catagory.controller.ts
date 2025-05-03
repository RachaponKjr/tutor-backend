import type { Context } from "elysia";
import { responseError, responseSuccess } from "../utils/response";
import {
  createCatagory,
  getCatagory,
  getCatagoryById,
} from "../services/catagory.service";

const createSubject = async ({ body, set }: Context) => {
  try {
    const { name, icon } = body as { name: string; icon: string };
    const create = await createCatagory({ subject: name });
    set.status = 201;
    return responseSuccess(create);
  } catch (err) {
    set.status = 400;
    return responseError(err as string);
  }
};

const getCatagoryController = async ({ set }: Context) => {
  try {
    const catagory = await getCatagory();
    return responseSuccess(catagory);
  } catch (err) {
    set.status = 400;
    return responseError(err as string);
  }
};

const getCatagoryBySubject = async ({ params: { subjectId } }: Context) => {
  try {
    const catagory = await getCatagoryById(Number(subjectId));
    return responseSuccess(catagory);
  } catch (err) {
    return responseError(err as string);
  }
};

const deleteCatagory = async ({ params: { subjectId } }: Context) => {
  try {
    const catagory = await getCatagoryById(Number(subjectId));
    return responseSuccess(catagory);
  } catch (err) {
    return responseError(err as string);
  }
};

export {
  createSubject,
  getCatagoryController,
  getCatagoryBySubject,
  deleteCatagory,
};
