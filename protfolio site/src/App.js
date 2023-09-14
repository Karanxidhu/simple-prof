import React from "react";
import "./App.css"
import Home from "./components/Home";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;