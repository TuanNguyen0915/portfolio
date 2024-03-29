export const navLinks = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my project" },
  { path: "/contact", name: "contact" },
]

import { RiLinkedinFill, RiGithubFill, RiFacebookFill } from "react-icons/ri"

export const icons = [
  {
    path: "https://www.linkedin.com/in/tuan-nguyen0915/",
    icon: RiLinkedinFill,
  },
  {
    path: "https://github.com/TuanNguyen0915 ",
    icon: RiGithubFill,
  },
  {
    path: "https://facebook.com",
    icon: RiFacebookFill,
  },
]

import {
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  User2,
} from "lucide-react"

export const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Tuan Nguyen",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "617 448 6306",
  },
  {
    icon: <MailIcon size={20} />,
    text: "tuan.nat915@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "09-15-1990",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Quincy, Massachusetts, USA",
  },
]

export const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Umass Boston",
        qualification: "Bachelor of Computer Science",
        years: "2022 - Present",
      },
      {
        university: "General Assembly",
        qualification: "Certificate",
        years: "9/2023 - 12/2023",
      },
      {
        university: "The Complete Python Programming",
        qualification: "Certificate",
        years: "2/2023 - 5/2023",
      },
      {
        university: "Quincy College",
        qualification: "Certificate",
        years: "2015 - 2018",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "General Assembly",
        exp: "Full-stack software engineering 420+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies.",
        years: "9/2023 - 12/2023",
      },
      {
        company: "Target",
        exp: "Dedicate over 65% of daily tasks to inspecting in-store merchandise, ensuring optimal presentation and customer satisfaction.Efficiently organize back-room inventory for streamlined accessibility, assisting team members in efficient product retrieval.",
        years: "2021 - 2023",
      },
      {
        company: "ACB Bank",
        exp: "As a bank teller, I would be responsible for assisting customers with various transactions and providing customer service. My duties would include cashing checks, canceling checks, processing wire transfers, handling loan payments, and assisting with loan applications.",
        years: "2012 - 2014",
      },
    ],
  },
]
import {
  TbBrandVscode,
  TbBrandNotion,
  TbBrandSlack,
  TbBrandDocker,
} from "react-icons/tb"

export const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end development",
      },
      {
        name: "Javascript, TypeScript, Python",
      },
      {
        name: "Back-end development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        icon: TbBrandVscode,
      },
      {
        icon: TbBrandNotion,
      },
      {
        icon: TbBrandSlack,
      },
      {
        icon: TbBrandDocker,
      },
    ],
  },
]

import { GanttChartSquare, Blocks, Gem } from "lucide-react"

export const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Technologies",
    description: [
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Nextjs",
      "Python",
    ],
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Methodologies",
    description: [
      "Agile development",
      "RESTful Routing",
      "QA Testing",
      "Problem Solving",
      "Debugging",
    ],
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "frameworks & tools",
    description: ["Vscode", "Notion", "Slack", "Docker"],
  },
]

export const projectsData = [
  {
    image: "/work/1.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quidem.",
    link: "",
    github: "",
  },
  {
    image: "/work/2.png",
    category: "fullstack",
    name: "booking app",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quidem.",
    link: "",
    github: "",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Lumina Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quidem.",
    link: "",
    github: "",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Crypto tracker",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quidem.",
    link: "",
    github: "",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Lumina Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quidem.",
    link: "",
    github: "",
  },
  {
    image: "/work/1.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quidem.",
    link: "",
    github: "",
  },
]
