import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    comments: [{
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
        },
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
    }]
})

export default mongoose.model('Comment', MessageSchema)
