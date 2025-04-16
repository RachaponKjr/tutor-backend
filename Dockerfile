FROM oven/bun:1.0.20

WORKDIR /app

# ติดตั้ง dependencies
COPY bun.lockb package.json tsconfig.json ./
RUN bun install

# คัดลอก source ทั้งหมด
COPY . .

# Build TypeScript
RUN bun run build

# ✅ generate Prisma ตอน container start แล้วค่อย start app
CMD ["sh", "-c", "bunx prisma generate && bun run start"]
