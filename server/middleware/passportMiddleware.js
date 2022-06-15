import { Strategy, ExtractJwt } from "passport-jwt";
import User from "../models/User.js";
import dotenv from 'dotenv';

dotenv.config({path: "../.env"});

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.secretOrKey,
};

export default (passport) => {
    passport.use(
        new Strategy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload.id, (err, user) => {
                if(err) {
                    console.error(err);
                    return;
                }
                if ( user ) {
                    return done(null, user);
                }
                return done(null, false);
            });
        })
    );
};