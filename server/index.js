import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import passport from "passport";

import passportMiddleware from "./middleware/passportMiddleware.js";
import UserRouter from './routes/api/UserRouter.js';

const app = express();

app.use(express.json());
dotenv.config();

const db = process.env.MONGO_URI;

const PORT = process.env.port || 8080;

app.use(passport.initialize());
passportMiddleware(passport);

// Routes
app.use("/api/users", UserRouter);

app.listen(PORT, () => {
    mongoose.connect(db, 
        { useNewUrlParser: true}    
    )
    .then(() => {
        console.log('connected to db 🍃🍃🍃');
    })
    .catch(err => console.error(err));
    console.log(`Server listening on port ${PORT} 🚀🚀🚀`);
});