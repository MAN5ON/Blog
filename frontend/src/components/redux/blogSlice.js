import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blogPosts: [
            // blogPage:[],
            // blogComments:[]
        ],
    },
    reducers: {
        addPost(state, action) {
            state.blogPosts.blogPage.push({
                id: new Date().toISOString(),
                comments: action.payload.postInfo,
                likesCount: 0,
                likeStatus: false,
                tags: []
            })
        },
        addComment(state, action) {
            state.blogPosts.blogComments.push({
                id: new Date().toISOString(),
                comment: action.payload.comment,
                likesCount: 0,
                likeStatus: false,
                dateComment: new Date().toLocaleString(),
            })
        },
        commentLikeStatus(state, action) {

        },
        updateComment(state, action) { },
        deleteComment(state, action) { },
    }
})

const { actions, reducer } = blogSlice
export const { addPost, updatePost, deletePost, addComment, commentLikeStatus, updateComment, deleteComment } = actions;
export const blogReducer = reducer