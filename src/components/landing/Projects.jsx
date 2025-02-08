import React from "react";
import proj1 from "../../assets/images/character1.png";
import proj2 from "../../assets/images/character1.png";
import proj3 from "../../assets/images/character1.png";
import H2 from "../H2";

const projects = [
  {
    title: "Ecommerce Digital Products",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    devstack: "MongoDB, Express, React, Node.js",
    link: "#",
    git: "#",
    src: proj1,
    type: "fullstack",
  },
  {
    title: "Interactive E-Learning Platform",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    devstack: "NextJs",
    link: "#",
    git: "#",
    src: proj2,
    type: "frontend",
  },
  {
    title: "Portfolio Website",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    devstack: "React, Tailwind",
    link: "#",
    git: "#",
    src: proj3,
    type: "frontend",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="text-white p-8 md:w-[90%] lg:w-[85%] 2xl:max-w-[92rem] mx-auto"
    >
      <H2>
        Pro<span className="text-blue-500">jects</span>{" "}
      </H2>
    </section>
  );
}
