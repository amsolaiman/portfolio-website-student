import React from "react";
import { Link } from "react-router-dom";
import "./homefirst.css";

import { FaCode, FaGraduationCap, FaQuoteRight } from "react-icons/fa";
import { IoColorPaletteSharp } from "react-icons/io5";
import {
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobexd,
  SiCsharp,
  SiHtml5,
  SiJavascript,
  SiQuasar,
  SiReact,
  SiTrello,
  SiUnity,
  SiVisualstudio,
} from "react-icons/si";

const HomeFirst = () => {
  return (
    <>
      <section id="home_first-d" className="isDesktop">
        <div className="container intro__container">
          <div className="intro__cards">
            <article className="intro__card">
              <div>
                <FaGraduationCap className="intro__icon" />
                <h5>Education</h5>
              </div>
              <small>
                Information Technology
                <br />
                <b>Mindanao State University</b>
              </small>
            </article>
            <article className="intro__card">
              <div>
                <IoColorPaletteSharp className="intro__icon" />
                <h5>Interests</h5>
              </div>
              <div className="small__icons">
                <SiCsharp />
                <SiHtml5 />
                <SiJavascript />
                <SiAdobephotoshop />
                <SiAdobepremierepro />
                <SiAdobexd />
                <small>etc.</small>
              </div>
            </article>
            <article className="intro__card">
              <div>
                <FaCode className="intro__icon" />
                <h5>Technologies</h5>
              </div>
              <div className="small__icons">
                <SiReact />
                <SiQuasar />
                <SiUnity />
                <SiVisualstudio />
                <SiTrello />
                <small>etc.</small>
              </div>
            </article>
          </div>

          <div className="intro__content">
            <h5>Greetings from</h5>
            <h2>JASAFANAR WORKSHOP</h2>

            <FaQuoteRight className="qoute" />
            <p>
              Hello! I'm Abdul Moiz Solaiman, a BS Information Technology
              student at Mindanao State University, Marawi City. I'm an aspiring
              web and software developer. I have been freelancing since senior
              high school as a graphic designer and illustrator, and have helped
              a few organizations with their needs for digital design support.
            </p>
            <div className="intro__content-cta">
              <Link to="/about" className="btn btn-primary">
                About me
              </Link>
              <Link to="/service" className="btn">
                Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="home_first-m" className="isMobile">
        <h5>Greetings from</h5>
        <h2>JASAFANAR WORKSHOP</h2>

        <div className="container intro__container">
          <div className="intro__content">
            <FaQuoteRight className="qoute" />
            <p>
              Hello! I'm Abdul Moiz Solaiman, a BS Information Technology
              student at Mindanao State University, Marawi City. I'm an aspiring
              web and software developer. I have been freelancing since senior
              high school as a graphic designer and illustrator, and have helped
              a few organizations with their needs for digital design support.
            </p>
            <div className="intro__content-cta">
              <Link to="/about" className="btn btn-primary">
                About me
              </Link>
              <Link to="/service" className="btn">
                Services
              </Link>
            </div>
          </div>

          <div className="intro__cards">
            <article className="intro__card">
              <div>
                <IoColorPaletteSharp className="intro__icon" />
                <h5>Interests</h5>
              </div>
              <div className="small__icons">
                <SiCsharp />
                <SiHtml5 />
                <SiJavascript />
                <SiAdobephotoshop />
                <SiAdobepremierepro />
                <SiAdobexd />
                <small>etc.</small>
              </div>
            </article>
            <article className="intro__card">
              <div>
                <FaCode className="intro__icon" />
                <h5>Technologies</h5>
              </div>
              <div className="small__icons">
                <SiReact />
                <SiQuasar />
                <SiUnity />
                <SiVisualstudio />
                <SiTrello />
                <small>etc.</small>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeFirst;
