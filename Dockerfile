#Using Nginx Server 
FROM nginx: alpine 

RUN rm-rf/usr/share/nginx/html/*

copy ./usr/share/nginx/html/

EXPOSE  80 
# to start nginx 
CMD ["nginx"]