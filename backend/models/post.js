import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: String,
    postArr: [{
        text: String,
        imageURL:String,
    }],
    tags: Array,
    viewsCount: {
        type: Number,
        default: 0
    },
    likesCount: {
        type: Number,
        default: 0
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

    comments: [{
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        likesCount: {
            type: Number,
            default: 0
        },
        text: String,
    }, {
        timestamps: true,
    }],

    imageURL: String,

}, {
    timestamps: true,
})

export default mongoose.model('Post', PostSchema)
