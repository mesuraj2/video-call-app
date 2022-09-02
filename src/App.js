import "./App.css";
import Navbar from "./Components/Navbar";
import React from "react";
import Home from "./Components/Home";
import About from "./Components/about";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <h1>hello world suraj</h1>
      <Routes>
        <Route exact path="/" element={<Home/>} />
 
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
