FROM oven/bun:1.0.20
WORKDIR /app

# Step 1: ติดตั้ง dependencies
COPY package.json .
COPY bun.lockb .
RUN bun install --production

# Step 2: คัดลอกโค้ดและ Prisma schema/client
COPY src ./src
COPY tsconfig.json .
COPY prisma ./prisma
COPY generated/client ./generated/client

# Step 3: Set env & run
ENV NODE_ENV=production
EXPOSE 3000

CMD ["bun", "./src/index.ts"]
