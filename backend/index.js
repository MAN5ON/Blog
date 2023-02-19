import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors"

import checkAuth from "./utils/checkAuth.js";
import { PostValidation, loginValidation, registerValidation, profileInfoValidation } from "./validations.js";

import { updatePost, deletePost, getAllPosts, getOnePost, newPost } from "./controllers/postController.js";
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
        cb(null, file.originalname = (new Date()).getTime() + Math.random().toString(16).slice(2) + file.originalname)
    }
})

const upload = multer({ storage })

app.use(express.json());
app.use(cors())
app.use('/uploads', express.static('uploads'))

//get req-res
app.get('/profile/:id', checkAuth, openProfile)
app.get('/posts/:id', getOnePost)
app.get('/posts', getAllPosts)
app.get('/me', checkAuth, openProfile)

//post req-res
app.post('/sign-up', registerValidation, handleValidationsErrors, signup)
app.post('/log-in', loginValidation, handleValidationsErrors, login)
app.post('/post-editor', checkAuth, PostValidation, handleValidationsErrors, newPost)
//upload image
app.post('/uploads', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
    })
})

//patch req-res
app.patch('/profile/:id', checkAuth, profileInfoValidation, handleValidationsErrors, updateProfile)
app.patch('/posts/:id', checkAuth, PostValidation, handleValidationsErrors, updatePost)

//delete req-res
app.delete('/profile/:id', checkAuth, deleteProfile)
app.delete('/posts/:id', checkAuth, deletePost)


app.listen(666, (error) => {
    if (error) {
        return console.log(error)
    }

    console.log('server OK')
})
