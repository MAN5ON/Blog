import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: String,
    introText: String,
    introIMG: String,

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
}, {
    timestamps: true,
})

export default mongoose.model('Post', PostSchema)
