import React, { useState, useRef, useMemo, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

const App = () => {
  const targetRef = useRef(null);
  const [atFooter, setAtFooter] = useState(false);

  const atFooterFunction = (entries) => {
    const [entry] = entries;
    setAtFooter(entry.isIntersecting);
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(atFooterFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [targetRef, options]);

  return (
    <>
      <Nav className={atFooter ? "nav__atfooter" : ""} />
      <div>
        <Routes>
          <Route path="my-portfolio-website/" element={<Home />} />
          <Route path="my-portfolio-website/about" element={<About />} />
          <Route path="my-portfolio-website/project" element={<Project />} />
          <Route path="my-portfolio-website/service" element={<Service />} />
          <Route path="my-portfolio-website/contact" element={<Contact />} />
          <Route
            path="*"
            element={<Navigate to="my-portfolio-website/" replace />}
          />
        </Routes>
      </div>
      <div ref={targetRef}>
        <Footer />
      </div>
    </>
  );
};

export default App;
