import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    login: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },

    avatarURL: String,

}, {
    timestamps: true,
})

export default mongoose.model('User', UserSchema)