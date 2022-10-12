import React from "react";
import "./servicesecond.scss";

import { TbCup } from "react-icons/tb";
import { RiNewspaperLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { BiHomeHeart } from "react-icons/bi";

const ServiceSecond = () => {
  return (
    <section>
      <div className="container offer__container">
        <div className="offer__grid">
          <div className="grid__head">
            <span className="grid__head-icon">
              <TbCup />
            </span>
            <h2>Design your product labels</h2>
          </div>
          <div className="grid__content">
            I can help you design graphic assets to make your products stand
            out, so you can achieve your business goals.
          </div>
          <div className="grid__caption">
            Product labels help a customer differentiate the product from other
            items, especially if it's placed next to similar options. Labels
            also provide descriptive information, such as the size, ingredients,
            instructions on how to use the product, how to store the product
            properly, and more.
          </div>
        </div>

        <div className="offer__grid">
          <div className="grid__head">
            <span className="grid__head-icon">
              <CgWebsite />
            </span>
            <h2>Build your personal website</h2>
          </div>
          <div className="grid__content">
            I can help you with building your own website or upgrading an
            existing one, and help you deploy and manage it online.
          </div>
          <div className="grid__caption">
            Setting up your own website allows you to showcase your work and
            provide proof of your abilities. This is a must if you are in one of
            the creative fields such as writing, designing, art, music, etc.
            While you can list out your skills on your resume, having a
            portfolio lets people see exactly what you have done.
          </div>
        </div>

        <div className="offer__grid">
          <div className="grid__head">
            <span className="grid__head-icon">
              <RiNewspaperLine />
            </span>
            <h2>Design your marketing materials</h2>
          </div>
          <div className="grid__content">
            I can help you create graphic materials for your ads, banners,
            brochures, business cards, logos, and more.
          </div>
          <div className="grid__caption">
            Good marketing materials give the viewer a glimpse of things like
            the value proposition, vision, and culture within an organization.
            These factors heavily affect your brand image. So, putting a little
            more planning into the design aspects of your marketing materials
            can help you boost your brand and company image.
          </div>
        </div>

        <div className="offer__grid">
          <div className="grid__head">
            <span className="grid__head-icon">
              <BiHomeHeart />
            </span>
            <h2>Make your dreamhouse 3D</h2>
          </div>
          <div className="grid__content">
            I can help you transform your dream house blueprint into a 3D model
            that will help you visualize its finished design beforehand.
          </div>
          <div className="grid__caption">
            Using 3D Modelling for architectural construction and design allows
            the architect to make constant changes as the 3D model is developed
            and apply variations to suit the clients' requirements. This results
            in not only a better finished design but also a more efficient
            utilization of the materials used.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSecond;
