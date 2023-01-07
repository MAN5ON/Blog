import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        unique: true,
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    imageURL: String,

}, {
    timestamps: true,
})

export default mongoose.model('Post', MessageSchema)
