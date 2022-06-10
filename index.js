import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

const app = express();

app.use(express.json());
dotenv.config();

const db = process.env.MONGO_URI;

const PORT = process.env.port || 8080;

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