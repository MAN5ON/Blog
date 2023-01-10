import express from "express";
import mongoose from "mongoose";
import multer from "multer";

import checkAuth from "./utils/checkAuth.js";
import { MessageValidation, PostValidation, loginValidation, registerValidation, profileInfoValidation } from "./validations.js";

import { createPost, updatePost, deletePost, getAllPosts, getOnePost } from "./controllers/postController.js";
import { createMessage, deleteMessage, getAllMessages, updateMessage } from "./controllers/forumController.js";
import { deleteProfile, login, openProfile, signup, updateProfile } from "./controllers/userController.js";
import { handleValidationsErrors } from "./utils/handleValidationsErrors.js";


mongoose
    .connect('mongodb+srv://admin:rrrrrr@cluster0.jtc6fxf.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err))

const app = express()

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'uploads')
    }, filename: (_, file, cb) => {
        cb(null, file.originalname = (new Date()).getTime() + Math.random().toString(16).slice(2) + file.originalname )
    }
})

const upload = multer({storage})

app.use(express.json());
app.use('/uploads', express.static('uploads'))

//get req-res
app.get('/forum', getAllMessages)
app.get('/profile/:id', checkAuth, openProfile)
app.get('/:id', getOnePost)
app.get('/', getAllPosts)

//post req-res
app.post('/auth/sign-up', registerValidation, handleValidationsErrors, signup)
app.post('/auth/log-in', loginValidation,handleValidationsErrors, login)
app.post('/forum', checkAuth, MessageValidation, handleValidationsErrors, createMessage)
app.post('/new', checkAuth, PostValidation, handleValidationsErrors, createPost)
//upload image
app.post('/uploads', checkAuth, upload.single('image'), (req,res)=> {
    res.json({
        url: `/uploads/${req.file.originalname}`
    })
})

//patch req-res
app.patch('/forum/:id', checkAuth, MessageValidation, handleValidationsErrors, updateMessage)
app.patch('/profile/:id', checkAuth, profileInfoValidation, handleValidationsErrors, updateProfile)
app.patch('/:id', checkAuth, PostValidation, handleValidationsErrors, updatePost)

//delete req-res
app.delete('/forum/:id', checkAuth, deleteMessage)
app.delete('/profile/:id', checkAuth, deleteProfile)
app.delete('/:id', checkAuth, deletePost)


app.listen(666, (error) => {
    if (error) {
        return console.log(error)
    }

    console.log('server OK')
})
