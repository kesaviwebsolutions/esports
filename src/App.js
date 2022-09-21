import "./App.css";
import * as React from "react";
import Navbar from "./component/page/Navbar";
import Home from "./component/page/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./component/page/Signup";
import Login from "./component/page/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
