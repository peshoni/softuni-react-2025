# stage 1 - Building the application
FROM node:22.21.1-alpine AS softuniApp
WORKDIR /app  
COPY . .
RUN npm install
RUN npm run build

# stage 2 - Copying to the web server
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/nginx.conf
COPY .nginx.conf /etc/nginx/nginx.conf
COPY --from=softuniApp /app/dist /usr/share/nginx/html

EXPOSE 80