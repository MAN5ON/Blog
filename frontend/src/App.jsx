import React, {useEffect} from "react";
import {Routes, Route} from "react-router-dom";

import {Header} from './components/header/';
import {Blog} from './components/main/blog/';
import {NewPostItem} from "./components/main/blog/newPostItem";
import {Profile} from './components/main/profile/';
import {LogIn} from "./components/auth/logIn";
import {SignUp} from "./components/auth/signUp";
import {BlogItem} from "./components/main/blog/blogInside/blogItem";
import {Info} from "./components/info";
import {NotFound} from "./components/notFound";
import {useDispatch} from "react-redux";
import {fetchCheckAuth} from "./components/redux/authSlice";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCheckAuth())
    }, [])
    return (<div className="appWrapper">
        <Header/>
        <Routes>
            <Route path='/about' element={<Info/>}/>
            <Route path="/" element={<Blog/>}/>
            <Route path="/:id" element={<BlogItem/>}/>
            <Route path="/post-editor" element={<NewPostItem/>}/>
            <Route path="/profile/:id" element={<Profile/>}/>
            <Route path="/log-in" element={<LogIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/me" element={<NotFound/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>);
}

export default App;
