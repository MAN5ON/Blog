import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAuthMe } from "./components/redux/authSlice";
import { Routes, Route } from "react-router-dom";

import { Header } from './components/header/';
import { Blog } from './components/main/blog/';
import { NewPostItem } from "./components/main/blog/newPostItem";
import { Profile } from './components/main/profile/';
import { LogIn } from "./components/auth/logIn";
import { SignUp } from "./components/auth/signUp";
import { BlogItem } from "./components/main/blog/blogInside/blogItem";
import { Info } from "./components/info";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAuthMe())
  }, [])

  return (
    <div className="appWrapper">
      <Header />
      <Routes>
        <Route path='/' element={<Info />} />
        <Route path="/posts" element={<Blog />} />
        <Route path="/posts/:id" element={<BlogItem />} />
        <Route path="/post-editor" element={<NewPostItem />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
