import { z } from "zod";

const UserBodyRegister = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.enum(["USER", "TUTOR"]),
});

const UserResponse = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  role: z.enum(["USER", "TUTOR", "ADMIN"]),
});

const UserLoginResponse = z.object({ token: z.string(), user: UserResponse });

export type UserBodyRegister = z.infer<typeof UserBodyRegister>;
export type UserResponse = z.infer<typeof UserResponse>;
export type UserLoginResponse = z.infer<typeof UserLoginResponse>;
