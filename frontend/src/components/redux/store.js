import { configureStore } from '@reduxjs/toolkit'
import { forumReducer } from './forumSlice'
import { blogReducer } from './blogSlice'

export const store =  configureStore({
    reducer: {
        blog: blogReducer,
        forum: forumReducer,
    }
})