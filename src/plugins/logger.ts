import { logger } from "@tqman/nice-logger";

export const loggerPlugin = logger({
  mode: "live",
  withTimestamp: true,
});
