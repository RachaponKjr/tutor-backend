# ใช้ official Bun image
FROM oven/bun:1.0.20 as base

# Set working directory
WORKDIR /app

# คัดลอกเฉพาะไฟล์ที่จำเป็นก่อนเพื่อใช้ cache build
COPY package.json bun.lockb tsconfig.json prisma ./ 

# ติดตั้ง dependencies
RUN bun install

# Generate Prisma Client
RUN bunx prisma generate

# คัดลอก source code ทั้งหมดที่เหลือ
COPY . .

# (ถ้าคุณใช้ Prisma Migrate, สั่ง migrate ใน production แบบ safe)
RUN bunx prisma migrate deploy

# สั่ง build TypeScript (ถ้ามี)
RUN bun run build

# รันแอป (เปลี่ยนตาม entry point ของคุณ)
CMD ["bun", "run", "start"]
