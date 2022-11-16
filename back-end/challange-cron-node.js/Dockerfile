FROM node:alpine
WORKDIR /app


COPY package.json ./
COPY yarn.lock ./
COPY src ./src

RUN yarn install 
COPY . .

EXPOSE 3000

RUN ls -a
CMD yarn dev
