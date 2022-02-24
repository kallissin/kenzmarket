FROM node:17

WORKDIR /code

COPY . /code/

RUN npm install

EXPOSE 3000

CMD "npm run dev"