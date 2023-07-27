import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PostView from "./components/PostView";
import PostCreate from "./components/PostCreate";
import PostEdit from "./components/PostEdit";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/new" element={<PostCreate />} />
        <Route path="/posts/:id" element={<PostView />} />
        <Route path="/posts/:id/edit" element={<PostEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
