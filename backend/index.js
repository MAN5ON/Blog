import express from "express";
import mongoose from "mongoose";

import checkAuth from "./utils/checkAuth.js";
import { createMessageValidation, createPostValidation, loginValidation, registerValidation } from "./validations.js";

import { createPost, updatePost, deletePost, getAllPosts, getOnePost } from "./controllers/postController.js";
import { createMessage, deleteMessage, getAllMessages, updateMessage } from "./controllers/forumController.js";
import { login, profile, signup } from "./controllers/userController.js";


mongoose
    .connect('mongodb+srv://admin:rrrrrr@cluster0.jtc6fxf.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err))

const app = express()

app.use(express.json());

//get req
app.get('/forum', getAllMessages)
app.get('/profile', checkAuth, profile)
app.get('/:id', getOnePost)
app.get('/', getAllPosts)

app.post('/auth/sign-up', registerValidation, signup)
app.post('/auth/log-in', loginValidation, login)
app.post('/forum', checkAuth, createMessageValidation, createMessage)
app.post('/new', checkAuth, createPostValidation, createPost)

app.patch('/forum/:id', checkAuth, updateMessage)
app.patch('/:id', checkAuth, updatePost)

app.delete('/forum/:id', checkAuth, deleteMessage)
app.delete('/:id', checkAuth, deletePost)


app.listen(666, (error) => {
    if (error) {
        return console.log(error)
    }

    console.log('server OK')
})
