import React, { useState } from "react";
import { Backdrop, Fade, Modal } from "@mui/material";
import "./projectfirst.scss";

import project from "../../store/project";

const ProjectFirst = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  return (
    <>
      <section>
        <h5>Recent works</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {project.map((project, index) => {
            return (
              <div key={index} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={project.image} alt={project.alt} />
                </div>
                <div className="portfolio__content">
                  <h3>{project.name}</h3>
                  <span> {project.type} </span>
                  <div className="portfolio__content-cta">
                    <button
                      onClick={() => {
                        setOpenModal(true);
                        setModalIndex(index);
                      }}
                      className="btn"
                    >
                      Learn more
                    </button>
                    <div className="portfolio__content-icons">
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
          })}
        </div>
        <div className="portfolio__other">
          <small>Some projects are restricted by NDA.</small>
        </div>
      </section>

      <ModalView
        openModal={openModal}
        modalIndex={modalIndex}
        closeModal={() => setOpenModal(false)}
      />
    </>
  );
};

export default ProjectFirst;

function ModalView({ openModal, modalIndex, closeModal }) {
  return (
    <>
      {project.map((project, index) => {
        if (index === modalIndex) {
          return (
            <Modal
              open={openModal}
              onClose={closeModal}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 400,
              }}
            >
              <Fade in={openModal}>
                <div className="container modal__container">
                  <h3>{project.name}</h3>
                  <p>
                    <span> {project.type} </span>
                    <br /> {project.description}
                  </p>
                  <div className="modal__icons">
                    {project.techs.map((tech, index) => {
                      return <div key={index}>{tech.icon}</div>;
                    })}
                  </div>

                  <div className="modal__cta">
                    {project.links.map((link, index) => {
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
                    })}
                  </div>
                </div>
              </Fade>
            </Modal>
          );
        }
        return null;
      })}
    </>
  );
}
