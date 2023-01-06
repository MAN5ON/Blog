import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    intro: {
        type: String,
        required: true,
        unique: true,
    },
    postArr: {
        type: Array, 
        required:true,
        default: [],
    },

    tags: {
        type: Array,
        default: [],
    },

    viewsCount: {
        type: Number,
        default: 0,
    },

    likesCount: {
        type: Number,
        default: 0
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    comments: {
        type: Array,
        default: []
    },
    introIMG: String,

}, {
    timestamps: true,
})

export default mongoose.model('Post', PostSchema)