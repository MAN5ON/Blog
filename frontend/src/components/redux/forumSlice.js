import { createSlice } from '@reduxjs/toolkit'

const forumSlice = createSlice({
    name: 'forum',
    initialState: {
        forumMessages: []
    },
    reducers: {
        addMessage(state, action) {
            state.forumMessages.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                likesCount: 0,
                likeStatus: false,
                date : new Date().toLocaleString(),
            })
        },
        deleteMessage(state, action) {
            state.forumMessages = state.forumMessages.filter((m) => m.id !== action.payload.id)
        },
        toggleLikeStatus(state, action) {
            const toggledLike = state.forumMessages.find(m => m.id === action.payload.id)
            toggledLike.likeStatus = !toggledLike.likeStatus
        },
    }
});

const { actions, reducer } = forumSlice

export const { addMessage, deleteMessage, toggleLikeStatus } = actions;
export const forumReducer = reducer