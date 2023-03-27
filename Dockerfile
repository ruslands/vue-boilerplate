FROM node:18-alpine as build-stage
WORKDIR /app

ARG VITE_APP_HOSTNAME
ENV VITE_APP_HOSTNAME=${VITE_APP_HOSTNAME}

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM nginx:stable-alpine as production-stage
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
