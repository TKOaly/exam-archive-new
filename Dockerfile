FROM node:20.5.0-alpine AS deps

WORKDIR /usr/src/tarpisto

RUN apk add --no-cache libc6-compat bash
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

FROM node:20.5.0-alpine as runner

ENV PORT 9000
ENV NODE_ENV production
ENV APP_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /usr/src/tarpisto

COPY --from=deps /usr/src/tarpisto/node_modules ./node_modules
COPY ./dist/production ./dist/production
COPY package.json package-lock.json next.config.js knexfile.js ./
COPY scripts/start-prod-server.sh ./scripts/start-prod-server.sh
COPY scripts/ ./scripts/

RUN pwd
RUN ls -la
RUN ls -la scripts

EXPOSE ${PORT}

CMD ["bash", "./scripts/start-prod-server.sh"]