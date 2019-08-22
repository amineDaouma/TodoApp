FROM node:10.16.3
#Create server directory
RUN mkdir -p /server
WORKDIR /server

COPY package.json /server
COPY package-lock.json /server

RUN npm install

COPY . /server

CMD ["npm", "start"]
