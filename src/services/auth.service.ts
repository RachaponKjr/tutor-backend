import { prisma } from "../libs/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import type { UserLoginResponse, UserResponse } from "../types/auth.type";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";

export const registerService = async (data: {
  name: string;
  email: string;
  password: string;
  role?: "USER" | "TUTOR";
}): Promise<UserResponse> => {
  const existing = await prisma.user.findUnique({
    where: { email: data.email },
  });
  if (existing) throw new Error("Email already exists");

  const hashed = await bcrypt.hash(data.password, 10);
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashed,
      role: data.role || "USER",
    },
  });

  const { password, ...safeUser } = user;
  return safeUser as UserResponse;
};

export const loginService = async (
  email: string,
  password: string
): Promise<UserLoginResponse> => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("Invalid credentials");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: "7d",
  });

  const { password: _, ...userData } = user;
  return { token, user: userData };
};
