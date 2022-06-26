import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import validateLoginInput from "../validators/loginUserValidator";
import User from "../models/User";
dotenv.config({ path: "../.env" });
const loginUserController = (req, res) => {
    const errs = validateLoginInput(req.body);
    const { isValid } = errs;
    if (!isValid) {
        return res.status(400).json(errs);
    }
    const { username, password } = req.body;
    User.findOne({ username }, (err, user) => {
        if (err) {
            console.error(err);
        }
        if (!user) {
            return res.status(400).json({
                usernameNotFound: "Username does not exist."
            });
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                console.error(err);
            }
            ;
            if (isMatch) {
                const payload = {
                    id: user.id,
                    name: user.name,
                    username: user.username,
                };
                jwt.sign(payload, process.env.secretOrKey, {
                    expiresIn: 31556926,
                }, (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                });
            }
            else {
                return res.status(400).json({
                    incorrectPassword: "Incorrect Password."
                });
            }
            ;
        });
    });
};
export default loginUserController;
