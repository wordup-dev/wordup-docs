FROM nginx:1.16.0-alpine
COPY build /var/www
COPY robots.txt /var/www/robots.txt
COPY nginx.conf /etc/nginx/nginx.conf