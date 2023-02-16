import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAuthMe } from "./components/redux/authSlice";
import { Routes, Route } from "react-router-dom";

import './App.css';

import { Header } from './components/header-basement/header';
import { Blog } from './components/main/blog/';
import { NewPostItem } from "./components/main/blog/newPostItem";
import { Forum } from './components/main/forum/';
import { Profile } from './components/main/profile/';
import { LogIn } from "./components/auth/logIn";
import { SignUp } from "./components/auth/signUp";
import { BlogItem } from "./components/main/blog/blogInside/blogItem";
import { Info } from "./components/header-basement/info";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAuthMe())
  }, [])

  return (
    <div className="App">
      <Header />
      <div className='mainPage'>
        <Routes>
          <Route path='/' element={<Info />} />
          <Route path="/posts" element={<Blog />} />
          <Route path="/posts/:id" element={<BlogItem />} />
          <Route path="/post-editor" element={<NewPostItem />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
