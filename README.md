# Death Time Middleware in Client 

![Mi genial imagen](img/Example.jpg)

This is an example of how the Death Time middleware works.

## Before Installation

Before continuing you will need an API to test DeathTime and configure ```src/app/ui/List.tsx``` 

## Router configure

`` .env.local ``

```
# <<-APIs REST->>

# Express 
# <------>
# Local
# NEXT_PUBLIC_SERVICE_URL="http://localhost:3001/api"
#----------------------------------
# ASP.NET
# <------>
# Local
# NEXT_PUBLIC_SERVICE_URL="http://localhost:5024/api"
#----------------------------------
# JAVA.SpringBoot
# <------>
# Local
# NEXT_PUBLIC_SERVICE_URL="http://localhost:8080/api"

```

## Requirements

[Nodejs](https://nodejs.org/en/download/package-manager)

### DeathTime-API

[.NET-API](https://github.com/DMarzzucco/DeathTime.ASP.NET.git)

[Express-API](https://github.com/DMarzzucco/DeathTime.Express-API.git)

[SpringBoot-API](https://github.com/DMarzzucco/DeathTimewithSpringBoot.git)

## Intallation

```bash 

# Start client
$ npm install
$ npm run dev
``` 

## Port

[localhost:3000](http://localhost:3000)

## Author

Made by Dario Marzzucco (DMarzzucco)
