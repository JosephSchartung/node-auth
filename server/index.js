import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import passport from "passport";

import { db } from './config/db.config.js';
import passportMiddleware from "./middleware/passportMiddleware.js";
import UserRouter from './routes/api/UserRouter.js';

const app = express();

app.use(express.json());
dotenv.config({path: '../.env'});

console.log(db.url);

const PORT = process.env.NODE_DOCKER_PORT;

app.use(passport.initialize());
passportMiddleware(passport);

// Routes
app.use("/api/users", UserRouter);

app.listen(PORT, () => {
    mongoose.connect(db.url, 
        { useNewUrlParser: true}    
    )
    .then(() => {
        console.log('connected to db 🍃🍃🍃');
    })
    .catch(err => console.error(err));
    console.log(`Server listening on port ${PORT} 🚀🚀🚀`);
});