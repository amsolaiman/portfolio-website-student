import React from "react";
// assets
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
// styles
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <span>jasafanar workshop</span>

      <div className="footer__socials">
        <a
          href="https://www.facebook.com/ja.moiz"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.linkedin.com/in/abdulmoiz-solaiman/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/amsolaiman"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <div className="footer__notes">
        <small>
          © jasafanar workshop. All rights reserved. <br />
          <b>Marawi City, Lanao del Sur, Philippines 9700</b>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
