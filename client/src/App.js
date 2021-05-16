/*
  The navar shown on top of all the pages in the website
*/

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import BlogPage from "./pages/MainPage";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Posts";
import Home from "./pages/Home";

function App() {
  return <>
    <div className="navbar">
      <div className="links">
        <a href="/">Home</a>
        <a href="/blogpage">Blog Page</a>
        <a href="/createpost">Create Post</a>
      </div>
    </div>

    <Router>
      <Route path="/" exact  render={(props)=><Home />}/>
      <Route path="/blogpage"  render={(props)=><BlogPage />}/>
      <Route path="/createpost" render={(props)=><CreatePost />}/>
      <Route path="/post/:postId" render={(props)=> <Post/>}/>
    </Router>
  </>;
}

export default App;
