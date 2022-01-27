FROM node:14.17.6

# set working directory
WORKDIR /client

# add `/client/node_modules/.bin` to $PATH
ENV PATH /client/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock* ./
RUN yarn

# add app
COPY . ./

EXPOSE 3000

# start app
CMD ["yarn", "start"]
