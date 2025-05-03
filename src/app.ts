import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import { loggerPlugin } from "./plugins/logger";
import swagger from "@elysiajs/swagger";
import { authRoute } from "./routes/auth.route";
import { userRoute } from "./routes/user.route";
import { catagoryRoute } from "./routes/catagory.route";
import { serviceRoute } from "./routes/service.route";
import { bookingRoute } from "./routes/booking.route";

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
  .use(catagoryRoute)
  .use(serviceRoute)
  .use(bookingRoute)
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
