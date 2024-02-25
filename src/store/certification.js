// assets
import IMG1_1 from "../assets/certificate1-1.jpg";
import IMG1_2 from "../assets/certificate1-2.jpg";
import IMG1_3 from "../assets/certificate1-3.jpg";
import IMG1_4 from "../assets/certificate1-4.jpg";
import IMG1_5 from "../assets/certificate1-5.jpg";
import IMG2 from "../assets/certificate2.jpg";
import IMG3 from "../assets/certificate3.jpg";

const certification = [
  {
    id: 1,
    name: "C# Programming for Unity Game Development",
    type: "Course Certificate",
    images: [
      {
        image: IMG1_1,
        alt: "csharpunity-cert1",
      },
      {
        image: IMG1_2,
        alt: "csharpunity-cert2",
      },
      {
        image: IMG1_3,
        alt: "csharpunity-cert3",
      },
      {
        image: IMG1_4,
        alt: "csharpunity-cert4",
      },
      {
        image: IMG1_5,
        alt: "csharpunity-cert4",
      },
    ],
  },
  {
    id: 2,
    name: "Cybersecurity Awareness and Innovation",
    type: "Course Certificate",
    images: [
      {
        image: IMG2,
        alt: "cybersecurity-cert",
      },
    ],
  },
  {
    id: 3,
    name: "Using HTML and CSS to Design a Website",
    type: "Course Certificate",
    images: [
      {
        image: IMG3,
        alt: "dict-html-css-cert",
      },
    ],
  },
];

export default certification;
