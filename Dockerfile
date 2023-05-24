FROM node:20.2.0

ENV PORT 9000
ENV NODE_ENV production
ENV APP_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .


EXPOSE ${PORT}

CMD ["./scripts/start-prod-server.sh"]