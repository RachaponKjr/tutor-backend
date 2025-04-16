import { Elysia, t } from "elysia";
import { login, register } from "../controllers/auth.controllers";
import AuthModel from "../models/auth.model";

export const authRoute = new Elysia({
  prefix: "/api/v1/auth",
  tags: ["Auth"],
})
  .use(AuthModel)
  .post("/register", register, {
    body: "auth-register",
  })
  .post("/login", login, {
    body: "auth-login",
  });
