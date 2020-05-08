FROM nginx:1.17.10-alpine
COPY build /var/www
COPY robots.txt /var/www/robots.txt
COPY nginx.conf /etc/nginx/nginx.conf