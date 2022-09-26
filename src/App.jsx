import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
