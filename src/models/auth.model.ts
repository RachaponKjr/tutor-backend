import Elysia, { t } from "elysia";

const registerBody = t.Object({
  name: t.String(),
  email: t.String(),
  password: t.String({
    minLength: 8,
    description: "Password must be at least 8 characters long",
  }),
  role: t.Optional(t.String()),
});

const loginBody = t.Object({
  email: t.String(),
  password: t.String({
    minLength: 8,
    description: "Password must be at least 8 characters long",
  }),
});

const AuthModel = new Elysia()
  .model("auth-register", registerBody)
  .model("auth-login", loginBody);

export default AuthModel;
