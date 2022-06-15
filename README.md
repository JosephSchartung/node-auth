# Node-Auth

This project is a template repository for authentication using MongoDB/Expressjs/React/Nodejs.  
Intended to be used as a basis for other projects that require basic user authentication.  
My motivation for creating this project was to create a reusable repository for future projects that allows for me to register users.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_USER`: username for accessing MongoDB database    
`MONGODB_PASSWORD`: password for accessing MongoDB database  
`MONGODB_DATABASE`: name of root database  
`MONGODB_HOST`: hostname for database  
`MONGODB_LOCAL_PORT`: port to be used for MongoDB outside docker container  
`MONGODB_DOCKER_PORT`: port used for MongoDB inside docker container  
`NODE_LOCAL_PORT`: port used for node backend outside docker container    
`NODE_DOCKER_PORT`: port used for node backend inside docker container   
`CLIENT_LOCAL_PORT`: port used for client frontend outside docker container  
`CLIENT_DOCKER_PORT`: port used for client frontend inside docker container  
`secretOrKey`: passport-jwt secretOrKey variable. [docs](https://www.passportjs.org/packages/passport-jwt/)

## Installation

Install `node-auth` with `docker-compose`.  

1. Make sure you have installed `docker`, and `docker-compose` on your machine.  
    * You can test this by running `docker --version` and `docker-compose --version` in your terminal.
    * [Docker install guide](https://docs.docker.com/get-docker/)
2. Run the following commands in the root directory. i.e, /node-auth

```
docker-compose build
docker-compose up -d
```

    
## License

[MIT](https://choosealicense.com/licenses/mit/)


## Screenshots

![Example .env file](/example-env.png)


## Tech Stack

**Client:** React, Redux, Materialize

**Server:** Node, Express, Passport, MongoDB


