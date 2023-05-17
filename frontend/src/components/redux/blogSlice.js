import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../axios";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const {data} = await axios.get('/')
    return data
})

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        posts: {
            items: [],
            status: 'loading'
        },
        comments: {
            items: [],
            status: 'loading'
        },
    },
    // reducers: {
    //     addPost(state, action) { },

    //     updatePost(state, action) { },

    //     deletePost(state, action) { },

    //     likePost(state, action) { },

    //     addComment(state, action) { },

    //     updateComment(state, action) { },

    //     deleteComment(state, action) { },

    //     likeComment(state, action) { },
    // },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.posts.items = []
            state.posts.status = 'loading'
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts.items = action.payload
            state.posts.status = 'loaded'
        },
        [fetchPosts.rejected]: (state) => {
            state.posts.items = []
            state.posts.status = 'error'
        }
    }
})

const {actions, reducer} = blogSlice
export const {
    addPost,
    updatePost,
    deletePost,
    likePost,
    addComment,
    updateComment,
    deleteComment,
    likeComment
} = actions;
export const blogReducer = reducer