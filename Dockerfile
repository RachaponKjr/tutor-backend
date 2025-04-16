FROM oven/bun:1.0.20
WORKDIR /app

# ติดตั้ง dependencies
COPY bun.lockb package.json tsconfig.json ./
RUN bun install

# ✅ คัดลอกทุกไฟล์ในโปรเจกต์ (รวม prisma/, src/, .env)
COPY . .

# Build TypeScript
RUN bun run build

# ✅ Generate Prisma client ก่อนรันแอป
CMD ["sh", "-c", "bunx prisma generate && bun run start"]
