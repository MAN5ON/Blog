import express from "express";
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";
import { validationResult } from "express-validator";

import { registerValidation } from "./validations/auth.js";


mongoose
    .connect('mongodb+srv://admin:rrrrrr@cluster0.jtc6fxf.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('DB ok')) 
    .catch((err) => console.log('DB error', err))

const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.post('/auth', (req, res) => {
    const token = jwt.sign({
        email: req.body.email,

    }, 'banana-ninja')

    res.json({
        token
    })
})

app.post('/auth', registerValidation, (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array())
    }
    res.json({
        success: true
    })
})

app.listen(666, (err) => {
    if (error) {
        return console.log(error)
    }

    console.log('server OK')
})