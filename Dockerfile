# ใช้ official Bun image
FROM oven/bun:1.0.20 as base

# กำหนด working directory
WORKDIR /app

# คัดลอกไฟล์ package สำหรับ dependency
COPY bun.lockb package.json tsconfig.json ./

# ติดตั้ง dependency
RUN bun install --frozen-lockfile

# คัดลอก source code ทั้งหมด
COPY . .

# คอมไพล์ TypeScript ถ้ามี
RUN bun run build

# รันแอป (เปลี่ยนตาม entry point ของคุณ)
CMD ["bun", "run", "start"]
