import { Routes, Route } from "react-router-dom";

import './App.css';

import { Header } from './components/header-basement/header';
import { Blog } from './components/main/blog/';
import { Forum } from './components/main/forum/';
import { Profile } from './components/main/profile/';
import { Basement } from './components/header-basement/basement';
import { Auth } from "./components/auth";

function App() {
  return (
    <div className="App">
      <Header />
      <div className='mainPage'>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Auth />} />
         </Routes>
      </div>
      <Basement />
    </div>
  );
}

export default App;
