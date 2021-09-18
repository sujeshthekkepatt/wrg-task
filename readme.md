# User Creator

## Development
 Make sure you installed `sequelize`,`sequelize-cli` and `typescript` installed.
 To run migrations run the following command `sequelize db:migrate` this will create necessary database tables. Please update the `.env` files accordingly. A sample `.env` file commited with the project. 
 ## Running Project
Please install `nodemon` globally to run the project in `watch` mode. Also please install `pino-pretty` module gloablly if there is an error. This module used to format the logs. There are a couple of `npm scripts` added in the `package.json` file. Please take a look. To run the development server use `npm start`. The project ui can be accessible at `http://localhost:port/`. If you want to run the project after build, make sure you have necessary `environment` variables set accrodingly.

## Database
I have used `postgres` as the database. Since I have used `sequelize` ORM, with minor tweaks you can run with any database supported by the sequelize.

## FrontEnd
The front end is absolutely minimal and I am not much a front end guy. The project is coded to run the front end separately. So that we can easily integrate the same with external front end code.