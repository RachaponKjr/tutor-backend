import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import { loggerPlugin } from "./plugins/logger";
import swagger from "@elysiajs/swagger";
import { authRoute } from "./routes/auth.route";
import { userRoute } from "./routes/user.route";

export const app = new Elysia()
  .use(cors())
  .use(loggerPlugin)
  .use(
    swagger({
      path: "/docs",
      documentation: {
        info: {
          title: "Tutor API By ElysiaJS",
          version: "1.0.0",
        },
      },
    })
  )
  .use(authRoute)
  .use(userRoute)
  .onError(({ code, error }) => {
    console.error(
      `[${code}]`,
      "message" in error ? error.message : "Unknown error"
    );
    return {
      message: "message" in error ? error.message : "An unknown error occurred",
    };
  });

//   debug path
// console.log(app.routes.map((r) => r.path));
