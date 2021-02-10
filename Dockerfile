FROM node:latest
ENV NODE_ENV=production
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm i --production
EXPOSE 3003
CMD ["npm", "run", "docker:start"]
########^^^ sdc_v2 ^^^############
########vvv fec_v1 vvv############

# FROM node:latest
# # FROM node:12.18.4
# ENV NODE_ENV=production
# WORKDIR /app
# COPY ["package.json", "package-lock.json*", "./"]
# RUN npm install --production
# COPY . .
# CMD [ "npm", "run", "docker:start" ]