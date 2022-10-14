import React from "react";
import Typewriter from "typewriter-effect";
import { Link, useNavigate } from "react-router-dom";
// styles
import "./serviceheader.scss";
// assets
import { BsArrowUp } from "react-icons/bs";
import BG from "../../assets/bg-header.jpg";

const ServiceHeader = () => {
  let navigate = useNavigate();

  window.addEventListener("scroll", () => {
    let first = document.getElementById("header_img");
    let last = document.getElementById("header_text");
    let value = window.scrollY;

    first.style.top = value * 0.7 + "px";
    last.style.top = value * 1 + "px";
  });

  return (
    <header id="service__header">
      <img src={BG} alt="bg-header" id="header_img" />
      <div className="container header__container" id="header_text">
        <h1 className="typewriter">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 70,
              strings: [
                "Freelancing",
                "Product Prototyping",
                "UI Developing",
                "Designing and Editing",
                "Feel free to contact me.",
              ],
            }}
          />
        </h1>
        <Link onClick={() => navigate(-1)} className="back__button">
          Back <BsArrowUp className="back__button-icon" />
        </Link>
      </div>
    </header>
  );
};

export default ServiceHeader;
