FROM node:23-bookworm AS base
RUN apt-get update -y && apt-get install -y openssl
RUN apt-get update -y && apt-get install -y fonts-noto
RUN apt-get update -y && apt-get install -y vim
RUN apt-get update -y && apt-get install -y build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev pkg-config
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm i -g pnpm@9.15.1
RUN npm i -g typescript
RUN npm i -g concurrently
WORKDIR /app
COPY pnpm-lock.yaml /app/pnpm-lock.yaml
COPY package.json /app/package.json
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
WORKDIR /app
CMD ["npm", "run", "dev"]