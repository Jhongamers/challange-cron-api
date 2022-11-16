FROM node:14-alpine
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN yarn install 


COPY . .

EXPOSE 5173

CMD yarn run dev
