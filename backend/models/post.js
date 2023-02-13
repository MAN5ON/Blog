import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: String,
    introText: String,
    introIMG: String,
    tags: Array,

    postArr: [{
        itemType: String,
        itemContent: String
    }],

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
}, {
    timestamps: true,
})

export default mongoose.model('Post', PostSchema)
