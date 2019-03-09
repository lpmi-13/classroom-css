FROM ubuntu:16.04

RUN apt update && \
    apt install -y curl build-essential bash libssl-dev

RUN curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh

RUN bash nodesource_setup.sh

RUN apt install -y nodejs

RUN npm install -g localtunnel

#WORKDIR /app
#RUN lt -p 8080 & npm run dev

EXPOSE 8080
