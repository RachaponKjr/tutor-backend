FROM oven/bun:1.0.20
WORKDIR /app

COPY package.json ./
RUN bun install

COPY prisma ./prisma
COPY src ./src
COPY tsconfig.json ./

RUN bunx prisma generate

EXPOSE 3000
CMD ["bun", "src/index.ts"]
