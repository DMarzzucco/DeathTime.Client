# Death Time Middleware in APIsREST with ExpressJS

![Mi genial imagen](img/Example.jpg)

This is an example of how the Death Time middleware works.

## Before Installation

Before testing the application, it is recommended to check the source code to configure the counter. The soruce code is located at: `./server/src/middleware/DeathTime.middleware.ts`. 

```TS 
 const deathTime = new Date('YEAR-MONTH-DAYTHOURS:MINUTE:SECONS');
```
## Requirements

* Docker
* Node js (Optional)

## Intallation

```bash 
# Start with Docker
$ docker-compose up

# If yout have Node.Js and want to start the process in your local machine, follows this path:

# Start datebase
$ docker-compose up db

# Start server inside the  `./server` folder
$ npx prisma generate
$ npx prisma migrate deploy
$ npm run dev

# Start client inside the `./client` folder
$ npm run dev
``` 

## Port

[localhost:5173](http://localhost:5173)

## Documentation

The server code is documented in Swagger. You can acces it at [localhost:3000/docs](http://localhost:3000/docs/)


## Author

Made by Dario Marzzucco (DMarzzucco)