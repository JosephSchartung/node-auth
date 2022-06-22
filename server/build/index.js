import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import passport from "passport";
import DB from "./config/db";
import passportMiddleware from "./middleware/passportMiddleware";
import { UserRouter } from "./routes/userRoutes";
import UserController from "./controllers/UserController";
const app = express();
app.use(express.json());
dotenv.config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_LOCAL_PORT } = process.env;
const db = new DB(DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_LOCAL_PORT);
const PORT = process.env.NODE_DOCKER_PORT;
app.use(passport.initialize());
passportMiddleware(passport);
const userRouter = new UserRouter(new UserController());
app.use(userRouter.mainRoute, userRouter.router);
app.listen(PORT, () => {
    mongoose.connect(db.url, () => {
        console.log('connected to db!');
    });
    console.log(`Server listening on port ${PORT}.`);
});
