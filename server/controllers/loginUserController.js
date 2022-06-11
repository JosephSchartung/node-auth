import User from "../models/User.js";
import { validateLoginInput } from '../valdiators/Login.js';
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import dotenv from "dotenv";

dotenv.config();

export default (req, res) => {
    const { errs, isValid } = validateLoginInput(req.body);

    if(!isValid){
        return res.status(400).json(errs);
    };

    const { username, password } = req.body;

    User.findOne({ username }, (err, user) => {
        if( err ) {
            console.error(err);
        };
        if( !user ) {
            return res.status(404).json({ usernameNotFound: "Username does not exist." });
        }

        // comparing hash to determine if password is correct.
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if( err ) {
                console.error(err);
            };
            if( isMatch ) {
                // user matched => create jwt_payload.
                const payload = {
                    id: user.id,
                    name: user.name,
                };

                // next, sign the token.
                jwt.sign(
                    payload, 
                    process.env.secretOrKey,
                    {
                        expiresIn: 31556926
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        })
                    }
                );
            } else {
                return res.status(400).json({
                    incorrectPassword: "Incorrect Password."
                })
            }
        })
    })
}