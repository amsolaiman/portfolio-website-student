import React from "react";

import {
  SiAdobeillustrator,
  SiMysql,
  SiNestjs,
  SiQuasar,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import IMG1 from "../assets/project1.jpg";
import IMG2 from "../assets/project2.jpg";
import IMG3 from "../assets/project3.jpg";

const project = [
  {
    image: IMG1,
    name: "mBALING Admin System (Desktop)",
    type: "Capstone Project",
    description: `A student housing management system for on-campus housing firms in the Mindanao State University campus. This is the desktop system of the project that administers the user records and the creation and deletion of user accounts.`,
    alt: "mbaling-desktop",
    techs: [
      {
        name: "Quasar Framework",
        icon: <SiQuasar />,
      },
      {
        name: "Nest JS",
        icon: <SiNestjs />,
      },
      {
        name: "Vue",
        icon: <SiVuedotjs />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        name: "MySQL",
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
        name: "Quasar Framework",
        icon: <SiQuasar />,
      },
      {
        name: "Nest JS",
        icon: <SiNestjs />,
      },
      {
        name: "Vue",
        icon: <SiVuedotjs />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        name: "MySQL",
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
        name: "Adove Illustrator",
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

export default project;
