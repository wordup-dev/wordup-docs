FROM nginx:1.16.0-alpine
COPY build /var/www
COPY nginx.conf /etc/nginx/nginx.conf