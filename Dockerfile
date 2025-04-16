FROM oven/bun:1.0.20

WORKDIR /app

# คัดลอก package ไว้ก่อน เพื่อใช้ cache layer
COPY bun.lockb package.json tsconfig.json ./

# ติดตั้ง dependency (รวม @prisma/client)
RUN bun install

# คัดลอกโค้ดทั้งหมด (รวม prisma/schema.prisma และ src/)
COPY . .

# Build TypeScript (ถ้ามี)
RUN bun run build

# Start
CMD ["bun", "run", "start"]
