import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import Notices from "./pages/Notices";
import Programs from "./pages/Programs";

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/notices" element={<Notices />} />
      </Routes>
    </>
  );
};

export default App;
