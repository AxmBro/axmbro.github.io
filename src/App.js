import React from "react";
import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import { Projects } from "./screens/Projects.tsx";
import Contact from "./screens/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
