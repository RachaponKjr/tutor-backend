# ใช้ official Bun image
FROM oven/bun:1.0.20

WORKDIR /app

# คัดลอกไฟล์สำคัญก่อนเพื่อล็อค layer
COPY package.json bun.lockb tsconfig.json ./

# ติดตั้ง dependencies
RUN bun install

# คัดลอกทุกไฟล์ที่เหลือ (รวม src, prisma/)
COPY . .

# ✅ Generate Prisma client หลังจากมี src/prisma แล้ว
RUN bunx prisma generate

# ✅ Optional: migrate (สำหรับ production)
RUN bunx prisma migrate deploy

# Build TypeScript (ถ้ามี)
RUN bun run build

EXPOSE 3000

# Start app
CMD ["bun", "run", "start"]
