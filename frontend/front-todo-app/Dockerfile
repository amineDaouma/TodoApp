FROM node:10.16.3
#Create react client directory and use it as the working directory
RUN mkdir -p /client
WORKDIR /client
COPY package.json /client
COPY package-lock.json /clinet

RUN npm install

COPY . /client

CMD [ "npm", "start" ]