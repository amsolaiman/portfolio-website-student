import React from "react";
import { Link } from "react-router-dom";
import "./homesecond.scss";

import project from "../../store/project";

const HomeSecond = () => {
  return (
    <>
      {/* #home_second desktop section */}
      <section id="home_second-d">
        <div className="container project__container">
          <div className="project__title">
            <h5>These are my</h5>
            <h2>Major Projects</h2>
          </div>

          {project.map((project, index) => {
            if (index === 0) {
              return (
                <div className="project__item item_left">
                  <div className="project__item-image">
                    <img src={project.image} alt={project.alt} />
                  </div>
                  <div className="project__info">
                    <h3>{project.name}</h3>
                    <div className="project__cta">
                      {project.links.map((link, index) => {
                        if (index === 0) {
                          return (
                            <a
                              key={index}
                              href={link.link}
                              className="btn"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {link.type}
                            </a>
                          );
                        }
                        return null;
                      })}
                      <div className="item__icons">
                        {project.techs.map((tech, index) => {
                          if (index <= 1) {
                            return <div key={index}>{tech.icon}</div>;
                          }
                          return null;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}

          {project.map((project, index) => {
            if (index === 1) {
              return (
                <div className="project__item item_right">
                  <div className="project__item-image">
                    <img src={project.image} alt={project.alt} />
                  </div>
                  <div className="project__info">
                    <h3>mBALING App (Mobile)</h3>
                    <div className="project__cta">
                      {project.links.map((link, index) => {
                        if (index === 0) {
                          return (
                            <a
                              key={index}
                              href={link.link}
                              className="btn"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {link.type}
                            </a>
                          );
                        }
                        return null;
                      })}
                      <div className="item__icons">
                        {project.techs.map((tech, index) => {
                          if (index <= 1) {
                            return <div key={index}>{tech.icon}</div>;
                          }
                          return null;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}

          <div className="project__notes">
            <small>Some projects are restricted by NDA.</small>
            <Link to="/project" className="btn btn-primary">
              View more
            </Link>
          </div>
        </div>
      </section>

      {/* #home_second mobile section */}
      <section id="home_second-m">
        <h5>These are my</h5>
        <h2>Major Projects</h2>

        <div className="container project__container">
          <div className="project__grid">
            {project.map((project, index) => {
              if (index <= 1) {
                return (
                  <div key={index} className="project__item">
                    <div className="project__item-image">
                      <img src={project.image} alt={project.alt} />
                    </div>
                    <div className="project__info">
                      <h3>{project.name}</h3>
                      <div className="project__cta">
                        {project.links.map((link, index) => {
                          if (index === 0) {
                            return (
                              <a
                                key={index}
                                href={link.link}
                                className="btn"
                                target="_blank"
                                rel="noreferrer"
                              >
                                {link.type}
                              </a>
                            );
                          }
                          return null;
                        })}
                        <div className="item__icons">
                          {project.techs.map((tech, index) => {
                            if (index <= 1) {
                              return <div key={index}>{tech.icon}</div>;
                            }
                            return null;
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className="project__notes">
            <small>Some projects are restricted by NDA.</small>
            <Link to="/project" className="btn btn-primary">
              View more
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSecond;
