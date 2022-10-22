import React from "react";
import Typewriter from "typewriter-effect";
import { Link, useNavigate } from "react-router-dom";
// styles
import "./aboutheader.scss";
// assets
import { BsArrowUp } from "react-icons/bs";
import BG from "../../assets/bg-header.jpg";

const AboutHeader = () => {
  //#region Header Parallax Effect
  let navigate = useNavigate();

  window.addEventListener("scroll", () => {
    let first = document.getElementById("header_img");
    let last = document.getElementById("header_text");
    let value = window.scrollY;

    first.style.top = value * 0.7 + "px";
    last.style.top = value * 1 + "px";
  });
  //#endregion

  return (
    <>
      <header id="about__header">
        <img src={BG} alt="bg-header" id="header_img" />
        <div className="container header__container" id="header_text">
          <div className="header__content">
            <h1 className="typewriter">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 70,
                  strings: [
                    "Nyke Moiz hen Solaiman Lentrot.",
                    "I prefer minimalistic designs.",
                    "My MBTI is INFJ-T.",
                    "I'm a bit perfectionistic btw.",
                  ],
                }}
              />
            </h1>
          </div>
          <Link onClick={() => navigate(-1)} className="back__button">
            Back <BsArrowUp className="back__button-icon" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default AboutHeader;
