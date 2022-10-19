// assets
import IMG1_2 from "../assets/certificate1-2.jpg";
import IMG1_3 from "../assets/certificate1-3.jpg";
import IMG1_4 from "../assets/certificate1-4.jpg";
import IMG2 from "../assets/certificate2.jpg";

const certification = [
  {
    id: 1,
    name: "C# Programming for Unity Game Development",
    type: "Course Certificate",
    images: [
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
];

export default certification;
