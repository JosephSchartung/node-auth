import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import registerUserController from '../../controllers/registerUserController.js';
import loginUserController from '../../controllers/loginUserController.js';

import User from '../../models/User.js';

const router = Router();

/*
    @route: POST api/users/register
    @desc: route to register user.
    @access: public
*/
router.post("/register", registerUserController);

/*
    @route: POST api/users/login
    @desc: login user and return jwt token.
    @access: public
*/
router.post("/login", loginUserController);

export default router;