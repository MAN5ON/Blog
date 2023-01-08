import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    text: String,
    imageURL: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    likesCount: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true,
})

export default mongoose.model('Message', MessageSchema)
