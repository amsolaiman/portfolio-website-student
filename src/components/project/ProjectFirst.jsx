import React from "react";
import "./projectfirst.css";

import {
  SiMysql,
  SiNestjs,
  SiQuasar,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import IMG1 from "../../assets/project1.jpg";
import IMG2 from "../../assets/project2.jpg";

const ProjectFirst = () => {
  return (
    <section>
      <h5>Recent works</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        {data.map((project, index) => {
          return (
            <div key={index} className="project__item">
              <div className="project__item-image">
                <img src={project.image} alt={project.alt} />
              </div>
              <div className="project__content">
                <h3>{project.name}</h3>
                <p className="text-light">
                  <span> {project.status} </span>
                  <br /> {project.description}
                </p>
                <div className="project__content-icons">
                  {project.techs.map((tech, index) => {
                    return <div key={index}>{tech.icon}</div>;
                  })}
                </div>
                <div className="project__content-cta">
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
            </div>
          );
        })}
      </div>
      <div className="project__other">
        <small>Some projects are restricted by NDA.</small>
      </div>
    </section>
  );
};

export default ProjectFirst;

const data = [
  {
    image: IMG1,
    name: "mBALING (Desktop)",
    status: "Capstone Project",
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
    name: "mBALING (Mobile)",
    status: "Capstone Project",
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
];
