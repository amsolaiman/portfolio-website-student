import React from "react";
import "./aboutsecond.scss";

import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobexd,
  SiAutodesk,
  SiCsharp,
  SiCss3,
  SiGit,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiMaterialui,
  SiNodedotjs,
  SiQuasar,
  SiReact,
  SiSass,
  SiSketchup,
  SiTypescript,
  SiUnity,
  SiVuedotjs,
} from "react-icons/si";

const AboutSecond = () => {
  return (
    <section>
      <h5>Skills I have</h5>
      <h2>Experiences</h2>

      <div className="container experience__container">
        <div className="experience__skills">
          {skills.map(({ name, icon }, index) => {
            return (
              <div key={index} className="skills__icon">
                {icon}
              </div>
            );
          })}
        </div>

        <div className="experience__works">
          {works.map((year, index) => {
            return (
              <>
                <div key={index} className="work__container">
                  <div className="work__container-year">
                    <h3>{year.year}</h3>
                  </div>
                  <div className="work__container-content">
                    {year.jobs.map((job, index) => {
                      return (
                        <div key={index} className="work__item">
                          <h4>{job.name}</h4>
                          <div>
                            <b>{job.employer}</b>
                          </div>
                          <div>{job.type}</div>
                          <div>{job.duration}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSecond;

const skills = [
  {
    name: "React JS",
    icon: <SiReact />,
  },
  {
    name: "C#",
    icon: <SiCsharp />,
  },
  {
    name: "Adobe Photoshop",
    icon: <SiAdobephotoshop />,
  },
  {
    name: "Material UI",
    icon: <SiMaterialui />,
  },
  {
    name: "HTML5",
    icon: <SiHtml5 />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
  },
  {
    name: "Quasar Framework",
    icon: <SiQuasar />,
  },
  {
    name: "Node JS",
    icon: <SiNodedotjs />,
  },
  {
    name: "Vue",
    icon: <SiVuedotjs />,
  },
  {
    name: "Javascript",
    icon: <SiJavascript />,
  },
  {
    name: "Java",
    icon: <SiJava />,
  },
  {
    name: "Unity",
    icon: <SiUnity />,
  },
  {
    name: "SketchUp",
    icon: <SiSketchup />,
  },
  {
    name: "Adobe Illustrator",
    icon: <SiAdobeillustrator />,
  },
  {
    name: "CSS3",
    icon: <SiCss3 />,
  },
  {
    name: "Adobe XD",
    icon: <SiAdobexd />,
  },
  {
    name: "Adove Premiere Pro",
    icon: <SiAdobepremierepro />,
  },
  {
    name: "Git",
    icon: <SiGit />,
  },
  {
    name: "Sass",
    icon: <SiSass />,
  },
  {
    name: "AutoCAD",
    icon: <SiAutodesk />,
  },
];

const works = [
  {
    year: 2018,
    jobs: [
      {
        name: "Graphic Designer/Editor",
        type: "Freelance",
        employer: "",
        duration: "2018 - present",
      },
      {
        name: "BS Information Technology (Database Systems)",
        type: "Student",
        employer: "College of Information and Computing Sciences",
        duration: "Aug 2018 - Feb 2023",
      },
    ],
  },
  {
    year: 2022,
    jobs: [
      {
        name: "Frontend Web Developer",
        type: "Internship",
        employer: "AP Global IT Solutions Inc.",
        duration: "Sept 2022 - Nov 2022",
      },
    ],
  },
];
