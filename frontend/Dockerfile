FROM node:20-slim

WORKDIR /app

# install with CI for deterministic deps
COPY package.json package-lock.json* ./
RUN npm ci

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]
