import React from "react";
import { Link } from "react-router-dom";
import "./homesecond.scss";

import { SiNestjs, SiQuasar } from "react-icons/si";
import IMG1 from "../../assets/project1.jpg";
import IMG2 from "../../assets/project2.jpg";

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

          <div className="project__item item_left">
            <div className="project__item-image">
              <img src={IMG1} alt="mbaling-desktop" />
            </div>
            <div className="project__info">
              <h3>mBALING Admin System (Desktop)</h3>
              <div className="project__cta">
                <a
                  href="https://github.com/amsolaiman/mbaling-project-client-desktop"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <div className="item__icons">
                  <SiQuasar />
                  <SiNestjs />
                </div>
              </div>
            </div>
          </div>
          <div className="project__item item_right">
            <div className="project__item-image">
              <img src={IMG2} alt="mbaling-mobile" />
            </div>
            <div className="project__info">
              <h3>mBALING App (Mobile)</h3>
              <div className="project__cta">
                <a
                  href="https://github.com/amsolaiman/mbaling-project-client-mobile"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <div className="item__icons">
                  <SiQuasar />
                  <SiNestjs />
                </div>
              </div>
            </div>
          </div>

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
            <div className="project__item">
              <div className="project__item-image">
                <img src={IMG1} alt="mbaling-desktop" />
              </div>
              <div className="project__info">
                <h3>mBALING Admin System (Desktop)</h3>
                <div className="project__cta">
                  <a
                    href="https://github.com/amsolaiman/mbaling-project-client-desktop"
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <div className="item__icons">
                    <SiQuasar />
                    <SiNestjs />
                  </div>
                </div>
              </div>
            </div>
            <div className="project__item">
              <div className="project__item-image">
                <img src={IMG2} alt="mbaling-mobile" />
              </div>
              <div className="project__info">
                <h3>mBALING App (Mobile)</h3>
                <div className="project__cta">
                  <a
                    href="https://github.com/amsolaiman/mbaling-project-client-mobile"
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <div className="item__icons">
                    <SiQuasar />
                    <SiNestjs />
                  </div>
                </div>
              </div>
            </div>
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
