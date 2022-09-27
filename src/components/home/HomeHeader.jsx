import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import "./homeheader.css";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import BG from "../../assets/bg-header.jpg";

const HomeHeader = () => {
  window.addEventListener("scroll", () => {
    let first = document.getElementById("header_img");
    let last = document.getElementById("header_text");
    let value = window.scrollY;

    first.style.top = value * 0.7 + "px";
    last.style.top = value * 1 + "px";
  });

  return (
    <header id="home_header">
      <img src={BG} alt="bg-header" id="header_img" />
      <div className="container header__container" id="header_text">
        <h5>Hello I'm</h5>
        <h1>Abdul Moiz Solaiman</h1>
        <h3>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "Frontend Developer",
                "UI/UX Designer",
                "Graphic Designer",
              ],
            }}
          />
        </h3>

        <div className="header__cta">
          <a
            href="https://github.com/amsolaiman/my-portfolio-website/raw/main/src/assets/cv.pdf"
            download
            className="btn btn-cv"
          >
            Download CV
          </a>
          <Link to="my-portfolio-website/contact" className="btn btn-contact">
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

        <Link to="my-portfolio-website/contact" className="scroll__down">
          Let's talk
        </Link>
      </div>
    </header>
  );
};

export default HomeHeader;
