import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import { Backdrop, Fade, Modal } from "@mui/material";
import "./projectfirst.scss";

import project from "../../store/project";

const projects = (data, setOpenModal, setModalIndex) => {
  return (
    <>
      {data.map((project, index) => {
        return (
          <dic key={index} className="portfolio__item">
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
                  {project.technologies.map((tech, index) => {
                    if (index <= 1) {
                      return <div key={index}>{tech.icon}</div>;
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
          </dic>
        );
      })}
    </>
  );
};

const ProjectFirst = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const pageNumberLimit = 5;
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const indexLastItem = currentPage * itemsPerPage;
  const indexFirstItem = indexLastItem - itemsPerPage;
  const currentItems = project.slice(indexFirstItem, indexLastItem);

  const [openModal, setOpenModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const pages = [];
  for (let i = 1; i <= Math.ceil(project.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const handleClickNext = () => {
    let pageIncrease = currentPage + 1;
    setCurrentPage(pageIncrease);

    if (pageIncrease > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handleClickPrev = () => {
    let pageDecrease = currentPage - 1;
    setCurrentPage(pageDecrease);

    if (pageDecrease % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrease = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrease = <li className="portfolio__pagination-more">{"· · ·"}</li>;
  }

  let pageDecrease = null;
  if (minPageNumberLimit >= 1) {
    pageDecrease = <li className="portfolio__pagination-more">{"· · ·"}</li>;
  }

  const pagination = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    if (windowSize.width <= 600) {
      setItemsPerPage(3);
    }
    if (windowSize.width > 600 && windowSize.width <= 1024) {
      setItemsPerPage(4);
    }
    if (windowSize.width > 1024) {
      setItemsPerPage(6);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width]);

  return (
    <>
      <section>
        <h5>Recent works</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          <div className="portfolio__item-container">
            {projects(currentItems, setOpenModal, setModalIndex)}
          </div>
          <ul className="portfolio__pagination">
            <li>
              <button
                onClick={handleClickPrev}
                disabled={currentPage === pages[0] ? true : false}
              >
                {"<"}
              </button>
            </li>
            {pageDecrease}
            {pagination}
            {pageIncrease}
            <li>
              <button
                onClick={handleClickNext}
                disabled={
                  currentPage === pages[pages.length - 1] ? true : false
                }
              >
                {">"}
              </button>
            </li>
          </ul>
          <div className="portfolio__other">
            <small>Some projects are restricted by NDA.</small>
          </div>
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
                <div className="container modal__container-project ">
                  <h3>{project.name}</h3>
                  <p>
                    <span> {project.type} </span>
                    <br /> {project.description}
                  </p>
                  <div className="modal__icons">
                    {project.technologies.map((tech, index) => {
                      return (
                        <Tippy
                          key={index}
                          content={tech.name}
                          placement="bottom"
                        >
                          {tech.icon}
                        </Tippy>
                      );
                    })}
                  </div>

                  <div className="modal__cta">
                    {project.credentials.map((link, index) => {
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
