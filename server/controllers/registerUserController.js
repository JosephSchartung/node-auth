import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { validateRegisterInput } from '../validators/Register.js';

export default  (req, res) => {
    const { errs, isValid } = validateRegisterInput(req.body);
    if(!isValid) {
        console.log(errs);
        return res.status(400).json(errs);
    };


    User.findOne({ username: req.body.username }, (user => {
        if(user){
            return res.status(400).json({ username: "Username already exists."});
        } else {
            const newUser = new User({
                name: req.body.name,
                username: req.body.username,
                password: req.body.password,
            });
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(updatedUser => {
                            res.json(updatedUser);
                        })
                        .catch(err => {
                            console.error(err);
                        });
                })
            })
        }
    }))
}