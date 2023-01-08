import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    likesCount: {
        type: Number,
        default: 0
    },

    imageURL: String,

}, {
    timestamps: true,
})

export default mongoose.model('Message', MessageSchema)
