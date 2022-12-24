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
                updateStatus: false,
                date: new Date().toLocaleString(),
            })
        },
        deleteMessage(state, action) {
            state.forumMessages = state.forumMessages.filter(m => m.id !== action.payload.id)
        },
        updateMessage(state, action) {
            const updateItem = state.forumMessages = state.forumMessages.find(m => m.id !== action.payload.id)
            updateItem.updateStatus = !updateItem.updateStatus
            updateItem.message = action.payload.text

        }
    }
});

const { actions, reducer } = forumSlice

export const { addMessage, deleteMessage, updateMessage } = actions;
export const forumReducer = reducer