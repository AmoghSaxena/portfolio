import genio from "../assets/images/genio.jpeg";
import draic from "../assets/images/image2.png";
import rbl from "../assets/images/RBL.png";
import stealth from "../assets/images/stealth.jpeg";

import { blue, green, pink, yellow } from "../utils";

export const experiences = [
  {
    logo: stealth,
    name: "Digivalet",
    joined: "Jan'21",
    end: "March'23",
    title: "Research and Development",
    bio: "Developed an On-Screen Promotion Tool for hotel rooms in Python, created an Auto Provisioning Server to streamline installation of room controllers, and maintained the Modern Analytics and Reporting System (MARS) for detailed guest activity analysis.",
    color: blue,
  },
  {
    logo: rbl,
    name: "Cisco Networking Academy",
    joined: "June'20",
    end: "October'20",
    title: "Network Analyst - Apprenticeship",
    bio: "Managed the development, deployment, and training of the RTS system and internal systems suite, and analyzed data traces using protocol analyzers.",
    color: green,
  },
  {
    logo: genio,
    name: "Shiva Concept Solution",
    joined: "May'19",
    end: "August'19",
    title: "Python Developer - Internship",
    bio: "Troubleshot and debugged code for compatibility across devices, browsers, and operating systems, and collaborated with project managers and the development team to brainstorm new ideas.",
    color: yellow,
  },
  {
    logo: draic,
    name: "Kangaroo Software",
    joined: "May'19",
    end: "August'19",
    title: "Web Developer - Intership",
    bio: "Created, maintained, and monitored a comprehensive online e-commerce shop, managed over 20 microservices for five clients, and developed user interfaces using modern JavaScript frameworks, HTML5, and CSS3.",
    color: pink,
  },
];
