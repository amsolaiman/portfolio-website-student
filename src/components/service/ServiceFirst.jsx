import React from "react";
import "./servicefirst.scss";

import service from "../../store/service";

import { BiCheck } from "react-icons/bi";

const ServiceFirst = () => {
  return (
    <section>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {service.map((service, index) => {
          return (
            <article key={index} className="service">
              <div className="service__head">
                <h3>{service.name}</h3>
              </div>
              <ul className="service__list">
                {service.offers.map((offer, index) => {
                  return (
                    <li key={index}>
                      <BiCheck className="service__list-icon" />
                      <p>{offer.name}</p>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceFirst;
