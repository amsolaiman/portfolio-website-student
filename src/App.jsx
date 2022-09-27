import React, { useState, useRef, useMemo, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
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
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ScrollToTop>
      <div ref={targetRef}>
        <Footer />
      </div>
    </>
  );
};

export default App;

const ScrollToTop = (props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};
