import React from "react";
import { Link } from "react-router-dom";
// styles
import "./aboutfirst.scss";
// assets
import { FaGraduationCap, FaAward } from "react-icons/fa";
import ME from "../../assets/me.jpg";

const AboutFirst = () => {
  return (
    <>
      <section>
        <h5>Get to know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__pic">
            <div className="about__pic-image">
              <img src={ME} alt="me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaGraduationCap className="about__icon" />
                <h5>Education</h5>
                <small>Mindanao State University</small>
              </article>

              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Degree</h5>
                <small>Information Technology</small>
              </article>
            </div>

            <p>
              Hello! I'm Moiz. I'm passionate about designing and developing
              websites and software. I also work as a freelance graphic designer
              and illustrator. Occasionally, I do interior designing as well
              with CAD software. I am highly competent at learning new
              technologies to further advance my skills and expertise.
            </p>

            <Link to="/contact" className="btn btn-primary">
              Let's talk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutFirst;
