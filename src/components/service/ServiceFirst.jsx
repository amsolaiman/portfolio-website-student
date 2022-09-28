import React from "react";
import "./servicefirst.css";

import { BiCheck } from "react-icons/bi";

const ServiceFirst = () => {
  return (
    <section>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Developing & Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>React frontend development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Quasar Framework development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Adobe XD</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Adobe Muse web development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Portfolio website developing</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Design & Editing</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Adobe Photoshop & Illustrator</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Logo designing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Tarpaulin/poster/pamphlets etc.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Microsoft Publisher editing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>PowerPoint templates & editing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Adobe Premiere Pro</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>CAD & Interior Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>AutoCAD designing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SketchUp interior designing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Chief Architect</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default ServiceFirst;
