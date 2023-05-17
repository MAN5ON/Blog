import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../axios";

export const fetchLogin = createAsyncThunk('auth/fetchLogin', async (params) => {
    const {data} = await axios.post('/log-in', params)
    return data
})

export const fetchCheckAuth = createAsyncThunk('auth/fetchCheckAuth', async (params) => {
    const {data} = await axios.get('/me', params)
    return data
})

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
    const {data} = await axios.post('/sign-up', params)
    return data
})

const authSlice = createSlice({
    name: 'auth', initialState: {
        data: null, status: 'loading',
    }, reducers: {
        logout: (state) => {
            state.data = null
        },
    }, extraReducers: {
        [fetchLogin.pending]: (state) => {
            state.data = null
            state.status = 'loading'
        }, [fetchLogin.fulfilled]: (state, action) => {
            state.data = action.payload
            state.status = 'loaded'
        }, [fetchLogin.rejected]: (state) => {
            state.data = null
            state.status = 'error'
        }, [fetchCheckAuth.pending]: (state) => {
            state.data = null
            state.status = 'loading'
        }, [fetchCheckAuth.fulfilled]: (state, action) => {
            state.data = action.payload
            state.status = 'loaded'
        }, [fetchCheckAuth.rejected]: (state) => {
            state.data = null
            state.status = 'error'
        }, [fetchRegister.pending]: (state) => {
            state.data = null
            state.status = 'loading'
        }, [fetchRegister.fulfilled]: (state, action) => {
            state.data = action.payload
            state.status = 'loaded'
        }, [fetchRegister.rejected]: (state) => {
            state.data = null
            state.status = 'error'
        },


    }
})

export const selectIsAuth = state => state.auth.data

const {actions, reducer} = authSlice
export const {logout, addDataIfAuth} = actions;
export const authReducer = reducer;