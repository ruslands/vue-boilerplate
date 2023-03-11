FROM node:17-alpine as build-stage
WORKDIR /app

COPY *.json ./

RUN npm ci
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
