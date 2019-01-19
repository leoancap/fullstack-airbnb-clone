#! /bin/bash
yarn build:server
heroku container:push --app=abb-db web   
heroku container:release --app=abb-db web   