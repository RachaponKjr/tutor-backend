FROM oven/bun:1.0.20
WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install --production

COPY src src
COPY tsconfig.json .
COPY prisma prisma

# COPY public public

COPY generated generated

ENV NODE_ENV production
CMD ["bun", "./src/index.ts"]

EXPOSE 3000