FROM cypress/base
RUN apt-get update  && apt-get upgrade
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install --save-dev cypress
RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run