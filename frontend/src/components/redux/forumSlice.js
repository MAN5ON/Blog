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
        updateMessage(state, action) {
            const updateItem = state.forumMessages.find(m => m.id === action.payload.id)
            updateItem.text = action.payload.message
            updateItem.updateStatus = !updateItem.updateStatus
        },
        updateMessageStatus(state, action) {
            const updateItemStatus = state.forumMessages.find(m => m.id === action.payload.id)
            updateItemStatus.updateStatus = !updateItemStatus.updateStatus
        },
        deleteMessage(state, action) {
            state.forumMessages = state.forumMessages.filter(m => m.id !== action.payload.id)
        },
    }
});

const { actions, reducer } = forumSlice

export const { addMessage, updateMessage, updateMessageStatus, deleteMessage } = actions;
export const forumReducer = reducer