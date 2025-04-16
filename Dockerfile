FROM oven/bun:1.0.20
WORKDIR /app

# Step 1: Copy package info
COPY package.json bun.lockb ./

# Step 2: ติดตั้ง dependencies (ทุกตัว)
RUN bun install

# Step 3: คัดลอกไฟล์โปรเจกต์ทั้งหมด
COPY prisma ./prisma
COPY src ./src
COPY tsconfig.json ./

# Step 4: Generate Prisma Client
RUN bunx prisma generate

# Step 5: ตัด dev dependencies ทิ้ง (เลือกได้)
RUN bun install --production

# Step 6: รันแอป
EXPOSE 3000
CMD ["bun", "src/index.ts"]
