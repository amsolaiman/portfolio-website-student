// dependencies
import React, { useState, useRef, useMemo, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
// styles
import "./index.scss";
// components
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";

const App = () => {
  //#region Loading Screen
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  //#endregion

  //#region Navbar Hide Function
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
  //#endregion

  return (
    <>
      {loading ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
          >
            <Loader />
          </motion.div>
        </AnimatePresence>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.7 } }}
          >
            <Nav className={atFooter ? "nav__atfooter" : null} />
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
          </motion.div>
        </>
      )}
      <div ref={targetRef} className={loading ? "footer__atloading" : null}>
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
