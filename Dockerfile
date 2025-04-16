FROM oven/bun:1.0.20
WORKDIR /app

# คัดลอกไฟล์พื้นฐาน
COPY bun.lockb package.json tsconfig.json ./
RUN bun install

# ✅ สำคัญ: คัดลอก prisma แยกมาก่อน
COPY prisma ./prisma

# ✅ แล้วค่อยคัดลอก source code ทั้งหมด
COPY . .

# Build TypeScript
RUN bun run build

# ✅ generate Prisma ตอนรัน container แล้วค่อย start
CMD ["sh", "-c", "bunx prisma generate && bun run start"]