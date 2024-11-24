// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> |{" "}
          <Link to="/blog/1">Blog Post 1</Link> |{" "}
          <Link to="/blog/2">Blog Post 2</Link>
        </nav>

        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/profile/*" element={<Profile />} />
          {/* Dynamic route for blog posts */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
