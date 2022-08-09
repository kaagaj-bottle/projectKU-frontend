import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./components/Navbar";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/About";
import Notices from "./pages/Notices/Notices";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
