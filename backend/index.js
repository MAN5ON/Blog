import express from "express";
import mongoose from "mongoose";

import { CreatePostValidation, loginValidation, registerValidation } from "./validations.js";
import { login, profile, signup } from "./controllers/userController.js";
import checkAuth from "./utils/checkAuth.js";
import { createPost, deletePost, getAllPosts, getOnePost, updatePost } from "./controllers/postController.js";


mongoose
    .connect('mongodb+srv://admin:rrrrrr@cluster0.jtc6fxf.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err))

const app = express()

app.use(express.json());

//user pages
app.post('/auth/sign-up', registerValidation, signup)
app.post('/auth/log-in', loginValidation, login)
app.get('/profile', checkAuth, profile)

//blog page 
app.get('/', getAllPosts)
app.get('/:id', getOnePost)
app.post('/new',  checkAuth, CreatePostValidation, createPost)

//post & comment
app.patch('/:id',checkAuth, updatePost)
app.delete('/:id',checkAuth, deletePost)


//forum page
//app.get('/forum', getAllMessages)
//app.patch('/forum:id', updateMessage)
//app.delete('/forum:id', deleteMessage)

app.listen(666, (error) => {
    if (error) {
        return console.log(error)
    }

    console.log('server OK')
})
