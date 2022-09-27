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
          <Route path="/my-portfolio-website/" element={<Home />} />
          <Route path="/my-portfolio-website/about" element={<About />} />
          <Route path="/my-portfolio-website/project" element={<Project />} />
          <Route path="/my-portfolio-website/service" element={<Service />} />
          <Route path="/my-portfolio-website/contact" element={<Contact />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
