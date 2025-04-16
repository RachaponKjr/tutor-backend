import type { Context } from "elysia";
import { responseError, responseSuccess } from "../utils/response";
import { loginService, registerService } from "../services/auth.service";
import type { UserBodyRegister, UserResponse } from "../types/auth.type";

type RegisterContext = Context<{
  body: UserBodyRegister;
}>;

type LoginContext = Context<{
  body: { email: string; password: string };
}>;

const register = async ({ body, set }: RegisterContext) => {
  try {
    const user: UserResponse = await registerService(body as UserBodyRegister);
    return responseSuccess(user);
  } catch (err) {
    set.status = 400;
    return responseError(err as string);
  }
};

const login = async ({ body: { email, password }, set }: LoginContext) => {
  try {
    const res = await loginService(email, password);
    return responseSuccess(res);
  } catch (err) {
    set.status = 400;
    return responseError(err as string);
  }
};

export { register, login };
