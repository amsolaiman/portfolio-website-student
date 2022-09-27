import React from "react";
import "./aboutsecond.css";

import { BsPatchCheckFill } from "react-icons/bs";

const AboutSecond = () => {
  return (
    <section>
      <h5>Skills I have</h5>
      <h2>Interests</h2>

      <div className="container interest__container">
        <div className="interest__language">
          <h3>Languages</h3>
          <div className="interest__content">
            {language.map(({ title, caption }, index) => {
              return (
                <article key={index} className="interest__details">
                  <BsPatchCheckFill className="interest__details-icon" />
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{caption}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="interest__framework">
          <h3>Technologies</h3>
          <div className="interest__content">
            {technology.map(({ title, caption }, index) => {
              return (
                <article key={index} className="interest__details">
                  <BsPatchCheckFill className="interest__details-icon" />
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{caption}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSecond;

const language = [
  {
    title: "Java",
    caption: "Intermediate",
  },
  {
    title: "C#",
    caption: "Beginner",
  },
  {
    title: "HTML",
    caption: "Experienced",
  },
  {
    title: "CSS",
    caption: "Intermediate",
  },
  {
    title: "JavaScript",
    caption: "Intermediate",
  },
  {
    title: "MySQL",
    caption: "Intermediate",
  },
];

const technology = [
  {
    title: "ReactJS",
    caption: "Intermediate",
  },
  {
    title: "VueJS",
    caption: "Experienced",
  },
  {
    title: "Material-UI",
    caption: "Beginner",
  },
  {
    title: "Quasar",
    caption: "Experienced",
  },
  {
    title: "Unity",
    caption: "Beginner",
  },
];
