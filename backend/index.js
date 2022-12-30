import express from "express";
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import { validationResult } from "express-validator";

import { registerValidation } from "./validations/auth.js";
import UserModel from "./models/user.js"

mongoose
    .connect('mongodb+srv://admin:rrrrrr@cluster0.jtc6fxf.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err))

const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.post('/auth/log-in', (req, res) => {
    const token = jwt.sign({
        email: req.body.email,
    }, 'banana-ninja')


    res.json({
        token
    })
})

app.post('/auth/sign-up', registerValidation, async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array())
        }

        const password = req.body.password
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const doc = new UserModel({
            email: req.body.email,
            login: req.body.login,
            name: req.body.name,
            surname: req.body.surname,
            passwordHash: hash,
            avatarURL: req.body.avatarURL
        })

        const user = await doc.save();

        const token = jwt.sign({
            _id: user._id,
        }, 'flowers',
            {
                expiresIn: '30d',
            }
        )

        const {passwordHash, ...userData} = user._doc
        res.json({ ...userData, token })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Ошибка регистрации'
        })
    }
})


app.listen(666, (error) => {
    if (error) {
        return console.log(error)
    }

    console.log('server OK')
})
