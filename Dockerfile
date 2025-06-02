FROM node:22.14.0-slim as base
WORKDIR /app

FROM base as build
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

COPY package-lock.json package.json ./
RUN npm ci --include=dev

COPY . .
RUN npm run build
RUN npm prune --omit=dev

FROM base
COPY --from=build /app /app

# Set environment variables for Fly.io
ENV HOST=0.0.0.0
ENV PORT=8080

EXPOSE 8080
CMD ["node", "./dist/server/entry.mjs"]