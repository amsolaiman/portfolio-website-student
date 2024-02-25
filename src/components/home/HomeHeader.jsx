import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
// assets
import CV from "../../assets/cv.pdf";
import BG from "../../assets/bg-header.jpg";
import { BsLinkedin, BsGithub } from "react-icons/bs";
// styles
import "./homeheader.scss";

const HomeHeader = () => {
  //#region Header Parallax Effect
  window.addEventListener("scroll", () => {
    let first = document.getElementById("header_img");
    let last = document.getElementById("header_text");
    let value = window.scrollY;

    first.style.top = value * 0.7 + "px";
    last.style.top = value * 1 + "px";
  });
  //#endregion

  return (
    <header id="home_header">
      <img src={BG} alt="bg-header" id="header_img" />

      <div className="container header__container">
        <div className="header__container-content" id="header_text">
          <h5>Hello I'm</h5>
          <h1>Abdul Moiz Solaiman</h1>

          <h3>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 70,
                strings: [
                  "Frontend Developer",
                  "UI/UX Designer",
                  "Graphic Designer",
                ],
              }}
            />
          </h3>

          <div className="header__cta">
            <a href={CV} download className="btn btn-cv">
              Download CV
            </a>

            <Link to="/contact" className="btn btn-contact">
              Let's talk
            </Link>
          </div>

          <div className="header__socials">
            <a
              href="https://www.linkedin.com/in/abdulmoiz-solaiman/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>

            <a
              href="https://github.com/amsolaiman"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </div>

          <Link to="/contact" className="scroll__down">
            Let's talk
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
