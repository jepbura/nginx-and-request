FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf
COPY index.js /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]
