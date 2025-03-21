# Stage 1: Build the React app
FROM node:20 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 3004

RUN echo "server { \
    listen 3004; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
        try_files \$uri /index.html; \
    } \
}" > /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
