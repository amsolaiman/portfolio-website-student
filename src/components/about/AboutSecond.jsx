import React from "react";
import Tippy from "@tippyjs/react";
import "./aboutsecond.scss";

import interest from "../../store/interest";
import experience from "../../store/experience";

const AboutSecond = () => {
  return (
    <section>
      <h5>Skills I have</h5>
      <h2>Experiences</h2>

      <div className="container experience__container">
        <div className="experience__skills">
          {interest.map(({ name, icon }, index) => {
            return (
              <Tippy content={name} placement="bottom">
                <div key={index} className="skills__icon">
                  {icon}
                </div>
              </Tippy>
            );
          })}
        </div>

        <div className="experience__works">
          {experience.map((experience, index) => {
            return (
              <>
                <div key={index} className="work__container">
                  <div className="work__container-year">
                    <h3>{experience.year}</h3>
                  </div>
                  <div className="work__container-content">
                    {experience.jobs.map((job, index) => {
                      return (
                        <div key={index} className="work__item">
                          <h4>{job.name}</h4>
                          <div>
                            <b>{job.employer}</b>
                          </div>
                          <div>{job.type}</div>
                          <div>{job.duration}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSecond;
