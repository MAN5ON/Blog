import { configureStore } from '@reduxjs/toolkit'
import { forumReducer } from './forumSlice'

export const store =  configureStore({
    reducer: {
        forum: forumReducer
    }
})