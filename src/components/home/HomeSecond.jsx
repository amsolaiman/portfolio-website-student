import React from "react";
import { Link } from "react-router-dom";
import "./homesecond.css";

import { SiNestjs, SiQuasar } from "react-icons/si";
import IMG1 from "../../assets/project1.jpg";
import IMG2 from "../../assets/project2.jpg";

const HomeSecond = () => {
  return (
    <>
      <section id="home_second-d" className="isDesktop">
        <div className="container works__container">
          <div className="works__title">
            <h5>These are my</h5>
            <h2>Prided Works</h2>
          </div>

          <div className="works__item item_left">
            <div className="works__item-image">
              <img src={IMG1} alt="mbaling-desktop" />
            </div>
            <div className="works__info">
              <h3>mBALING (Desktop)</h3>
              <div className="works__cta">
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
          <div className="works__item item_right">
            <div className="works__item-image">
              <img src={IMG2} alt="mbaling-mobile" />
            </div>
            <div className="works__info">
              <h3>mBALING (Mobile)</h3>
              <div className="works__cta">
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

          <div className="works__notes">
            <small>Some projects are restricted by NDA.</small>
            <Link to="/project" className="btn btn-primary">
              View more
            </Link>
          </div>
        </div>
      </section>

      <section id="home_second-m" className="isMobile">
        <h5>These are my</h5>
        <h2>Prided Works</h2>

        <div className="container works__container">
          <div className="works__grid">
            <div className="works__item">
              <div className="works__item-image">
                <img src={IMG1} alt="mbaling-desktop" />
              </div>
              <div className="works__info">
                <h4>mBALING (Desktop)</h4>
                <div className="works__cta">
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
            <div className="works__item">
              <div className="works__item-image">
                <img src={IMG2} alt="mbaling-mobile" />
              </div>
              <div className="works__info">
                <h4>mBALING (Mobile)</h4>
                <div className="works__cta">
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

          <div className="works__notes">
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
