import React from "react";
import { Link } from "react-router-dom";
// assets
import { IoColorPaletteSharp } from "react-icons/io5";
import { FaCode, FaGraduationCap, FaQuoteRight } from "react-icons/fa";
import {
  SiGit,
  SiFigma,
  SiHtml5,
  SiReact,
  SiUnity,
  SiCsharp,
  SiTrello,
  SiAdobexd,
  SiJavascript,
  SiVisualstudio,
  SiAdobephotoshop,
} from "react-icons/si";
// styles
import "./homefirst.scss";

const HomeFirst = () => {
  return (
    <>
      {/* #home_first desktop section */}
      <section id="home_first-d">
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
                <SiFigma />
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
                <SiGit />
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
              Art has been a great influence on my life. I'm an aspiring web and
              software designer and developer. I am flexible in using and
              learning different development technologies. I have been
              freelancing since senior high school as a graphic designer and
              illustrator, and have helped a few organizations with their needs
              for digital design support.
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

      {/* #home_first mobile section */}
      <section id="home_first-m">
        <h5>Greetings from</h5>
        <h2>JASAFANAR WORKSHOP</h2>

        <div className="container intro__container">
          <div className="intro__content">
            <FaQuoteRight className="qoute" />
            <p>
              Art has been a great influence on my life. I'm an aspiring web and
              software designer and developer. I am flexible in using and
              learning different development technologies. I have been
              freelancing since senior high school as a graphic designer and
              illustrator, and have helped a few organizations with their needs
              for digital design support.
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
                <SiFigma />
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
                <SiGit />
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
