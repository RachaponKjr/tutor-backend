FROM oven/bun

WORKDIR /app

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

# Build
RUN bun run build

EXPOSE 3000

CMD ["bun", "dist/index.js"]
