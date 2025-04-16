FROM oven/bun:1.0.20
WORKDIR /app

COPY package.json ./
RUN bun install

COPY prisma ./prisma
COPY src ./src
COPY tsconfig.json ./

# ✅ Force generate to correct output
RUN rm -rf node_modules/.prisma node_modules/@prisma/client && bunx prisma generate

EXPOSE 3000
CMD ["bun", "src/index.ts"]
