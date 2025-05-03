FROM oven/bun

WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl

# Copy dependencies
COPY package*.json ./
RUN bun install

# Copy Prisma + source
COPY prisma ./prisma
COPY src ./src

# Copy config
COPY tsconfig.json ./
# COPY .env ./

# Generate Prisma Client
RUN bunx prisma generate

EXPOSE 3001

CMD ["bun", "src/index.ts"]