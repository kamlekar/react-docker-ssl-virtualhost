FROM node:14.17.6

WORKDIR /server

COPY package.json ./
#COPY yarn.lock* ./
RUN yarn
COPY . .

EXPOSE 5001

CMD ["yarn", "start"]
