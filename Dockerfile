FROM node:20

# Set working directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./

# Install dependencies (ใช้ npm เพื่อความเข้ากันได้กับ Prisma)
RUN npm install

# Copy Prisma schema + source code
COPY prisma ./prisma
COPY src ./src

# Copy config files
COPY tsconfig.json ./
# COPY .env ./

# Generate Prisma Client (ส่งออกไป src/libs/prismaClient)
RUN npx prisma generate

# Build TypeScript
RUN npm run build

# Expose app port
EXPOSE 3000

# Start the app
CMD ["node", "dist/index.js"]
