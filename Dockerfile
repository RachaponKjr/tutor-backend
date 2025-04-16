FROM oven/bun:1.0.20
WORKDIR /app

COPY bun.lockb package.json tsconfig.json ./
RUN bun install

COPY . .

# ❌ ไม่ต้อง generate ตอน build

RUN bun run build

# ✅ generate Prisma client + run app ตอน container start
CMD ["sh", "-c", "bunx prisma generate && bun run start"]
