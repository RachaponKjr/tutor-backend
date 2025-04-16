# ใช้ Bun official image
FROM oven/bun:1.0.20

# Set working directory
WORKDIR /app

# Copy dependency config
COPY package.json bun.lockb ./

# ติดตั้ง dependencies (รวม prisma CLI และ client)
RUN bun install --production

# คัดลอก source code และ Prisma schema
COPY prisma ./prisma
COPY src ./src
COPY tsconfig.json ./

# Generate Prisma Client (ใช้ default output → node_modules/@prisma/client)
RUN bunx prisma generate

# Expose port
EXPOSE 3000

# Run app
CMD ["bun", "src/index.ts"]
