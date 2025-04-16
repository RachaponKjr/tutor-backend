FROM oven/bun:1.0.20
WORKDIR /app

COPY package.json .
COPY bun.lockb .
RUN bun install

COPY src ./src
COPY tsconfig.json .
COPY prisma ./prisma

# ✅ ไม่ต้อง COPY generated
# ❌ COPY generated/client ./generated/client

ENV NODE_ENV=production
EXPOSE 3000

CMD ["bun", "./src/index.ts"]
