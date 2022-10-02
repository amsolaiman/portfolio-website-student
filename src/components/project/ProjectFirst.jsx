import React, { useState } from "react";
import "./projectfirst.scss";

import {
  SiAdobeillustrator,
  SiMysql,
  SiNestjs,
  SiQuasar,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import IMG1 from "../../assets/project1.jpg";
import IMG2 from "../../assets/project2.jpg";
import IMG3 from "../../assets/project3.jpg";

const ProjectFirst = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const modalCloseHandler = () => {
    setOpenModal(false);

    document.body.style.overflow = "unset";
  };

  const modalOpenHandler = () => {
    setOpenModal(true);

    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <section>
      <h5>Recent works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((project, index) => {
          return (
            <>
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
                        modalOpenHandler();
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
              <Modal
                openModal={openModal}
                modalIndex={modalIndex}
                closeModal={() => modalCloseHandler()}
              />
            </>
          );
        })}
      </div>
      <div className="portfolio__other">
        <small>Some projects are restricted by NDA.</small>
      </div>
    </section>
  );
};

export default ProjectFirst;

function Modal({ openModal, modalIndex, closeModal }) {
  if (!openModal) {
    return null;
  }

  return (
    <div onClick={closeModal} className="modal__overlay">
      {data.map((project, index) => {
        if (index === modalIndex) {
          return (
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="container modal__container"
            >
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
                {project.links.map(({ type, link }, index) => {
                  return (
                    <a
                      key={index}
                      href={link}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {type}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

const data = [
  {
    image: IMG1,
    name: "mBALING Admin System (Desktop)",
    type: "Capstone Project",
    description: `A student housing management system for on-campus housing firms in the Mindanao State University campus. This is the desktop system of the project that administers the user records and the creation and deletion of user accounts.`,
    alt: "mbaling-desktop",
    techs: [
      {
        icon: <SiQuasar />,
      },
      {
        icon: <SiNestjs />,
      },
      {
        icon: <SiVuedotjs />,
      },
      {
        icon: <SiTypescript />,
      },
      {
        icon: <SiMysql />,
      },
    ],
    links: [
      {
        type: "GitHub",
        link: "https://github.com/amsolaiman/mbaling-project-client-desktop",
      },
      {
        type: "Abstract",
        link: "https://docs.google.com/document/d/1Afgxo2BnDnE0YIqH5ZKp1AysD7vJu5Uk/edit?usp=sharing&ouid=117078887115328947363&rtpof=true&sd=true",
      },
    ],
  },
  {
    image: IMG2,
    name: "mBALING App (Mobile)",
    type: "Capstone Project",
    description: `A student housing management system for on-campus housing firms in the Mindanao State University campus. This is the mobile system of the project that manages the activities and displays the content posted by the users.`,
    alt: "mbaling-mobile",
    techs: [
      {
        icon: <SiQuasar />,
      },
      {
        icon: <SiNestjs />,
      },
      {
        icon: <SiVuedotjs />,
      },
      {
        icon: <SiTypescript />,
      },
      {
        icon: <SiMysql />,
      },
    ],
    links: [
      {
        type: "GitHub",
        link: "https://github.com/amsolaiman/mbaling-project-client-mobile",
      },
      {
        type: "Abstract",
        link: "https://docs.google.com/document/d/1Afgxo2BnDnE0YIqH5ZKp1AysD7vJu5Uk/edit?usp=sharing&ouid=117078887115328947363&rtpof=true&sd=true",
      },
    ],
  },
  {
    image: IMG3,
    name: "MSU-SPFC Logo",
    type: "Logo Design",
    description: `MSU Student Peer Facilitators' Circle is a student support program established by the Mindanao State University-Division of Student Affairs. This logo was designed using Adobe Illustrator and consists of outlined and non-outlined variations.`,
    alt: "spfc-logo",
    techs: [
      {
        icon: <SiAdobeillustrator />,
      },
    ],
    links: [
      {
        type: "Visit page",
        link: "https://www.facebook.com/MSUDSASPFC",
      },
    ],
  },
];
