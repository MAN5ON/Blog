import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";

export const fetchAuth = createAsyncThunk('auth/fetchUserData', async (params) => {
    const { data } = await axios.post('/log-in', params)
    return data
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        data: null,
        status: 'loading',
    },
    reducers: {
        logout: (state) => {
            state.data = null 
        }
    },
    extraReducers: {
        [fetchAuth.pending]: (state) => {
            state.data = null
            state.status = 'loading'
        },
        [fetchAuth.fulfilled]: (state, action) => {
            state.data = action.payload
            state.status = 'loaded'
        },
        [fetchAuth.rejected]: (state) => {
            state.data = null
            state.status = 'error'
        }
    }
})

export const selectIsAuth = state => Boolean(state.auth.data)

const { actions, reducer } = authSlice
export const { logout } = actions;
export const authReducer = reducer;