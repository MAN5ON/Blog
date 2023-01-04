import express from "express";
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import { validationResult } from "express-validator";

import { registerValidation } from "./validations/auth.js";
import { login, profile, signup } from "./controllers/userController.js";
import UserModel from "./models/user.js"
import checkAuth from "./utils/checkAuth.js";


mongoose
    .connect('mongodb+srv://admin:rrrrrr@cluster0.jtc6fxf.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err))

const app = express()

app.use(express.json());

app.post('/auth/log-in', login)

app.post('/auth/sign-up', registerValidation, signup)

app.get('/profile', checkAuth, profile)

app.listen(666, (error) => {
    if (error) {
        return console.log(error)
    }

    console.log('server OK')
})
