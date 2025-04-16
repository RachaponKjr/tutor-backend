# ใช้ official Bun image
FROM oven/bun:1.0.20 as base

WORKDIR /app

# คัดลอกเฉพาะไฟล์ที่จำเป็นเพื่อใช้ cache สำหรับ dependency install
COPY bun.lockb package.json tsconfig.json ./

# ติดตั้ง dependencies
RUN bun install

# ✅ คัดลอกโค้ดทั้งหมด (รวม src/, prisma/)
COPY . .

# ✅ Generate Prisma Client หลังจากมี source code แล้ว
RUN bunx prisma generate

# ✅ (ถ้าต้องการ migrate schema)
RUN bunx prisma migrate deploy

# สั่ง build TypeScript (ถ้ามี)
RUN bun run build

# รันแอป
CMD ["bun", "run", "start"]
