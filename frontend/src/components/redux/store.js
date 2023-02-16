import { configureStore } from '@reduxjs/toolkit'
import { blogReducer } from './blogSlice'
import { authReducer } from './authSlice'
import { forumReducer } from './forumSlice'

export const store = configureStore({
    reducer: {
        blog: blogReducer,
        forum: forumReducer,
        auth: authReducer,
    }
})
