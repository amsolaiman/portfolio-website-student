import React from "react";
import Typewriter from "typewriter-effect";
import { Link, useNavigate } from "react-router-dom";
// styles
import "./contactheader.scss";
// assets
import { BsArrowUp } from "react-icons/bs";
import BG from "../../assets/bg-header.jpg";

const ContactHeader = () => {
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
      <header id="contact__header">
        <img src={BG} alt="bg-header" id="header_img" />
        <div className="container header__container" id="header_text">
          <h1 className="typewriter">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 70,
                strings: [
                  "I would love to hear from you.",
                  "Let me help you achieve your goals.",
                  "I look forward to working with you.",
                  "Together let's make something amazing.",
                ],
              }}
            />
          </h1>
          <Link onClick={() => navigate(-1)} className="back__button">
            Back <BsArrowUp className="back__button-icon" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default ContactHeader;
