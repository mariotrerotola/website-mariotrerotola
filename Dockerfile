# Stage 1: Build the application
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Install necessary build tools for Prisma
RUN apk add --no-cache python3 g++ make openssl-dev

# Copy package.json and package-lock.json for installing dependencies
COPY package*.json ./

# Install all dependencies, including dev dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .


# Set environment variable to skip ESLint
ENV NEXT_SKIP_ESLINT=1

# Build the Next.js app
RUN npm run build

# Stage 2: Prepare production image
FROM node:20-alpine

# Set environment variables
ENV NODE_ENV=production

# Install necessary libraries for Prisma
RUN apk add --no-cache libssl3 openssl

# Set the working directory
WORKDIR /app

# Copy only production dependencies from the builder stage
COPY --from=builder /app/package*.json ./
RUN npm install --legacy-peer-deps --only=production

# Copy the built app from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

# Expose the port the app runs on
EXPOSE 3000
# Command to run the app
CMD ["npm", "start"]
