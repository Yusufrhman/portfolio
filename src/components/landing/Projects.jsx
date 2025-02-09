import React from "react";
import tedx from "../../assets/images/projects/tedx.png";
import isac from "../../assets/images/projects/isac.png";
import kare from "../../assets/images/projects/kare.png";
import upstyle from "../../assets/images/projects/upstyle.png";

import H2 from "../H2";
import ProjectCard from "../ProjectCard";

const projectCategory = {
  website: "Web Apps",
  mobile: "Mobile Apps",
};

const projects = [
  {
    title: "Tedx Universitas Airlangga",
    category: projectCategory.website,
    desc: "Developed and maintained the TEDx Universitas Airlangga website, creating responsive, user-friendly interfaces for a seamless experience across all devices while ensuring visual consistency and optimal performance.",
    devstack: "React.js, Next.js, TailwindCSS, Typescript",
    link: "https://tedxuniversitasairlangga.com/",
    git: false,
    src: tedx,
  },
  {
    title: "UMKM Desa Kare",
    category: projectCategory.website,
    desc: "Developed a website for UMKM Kare Village to empower local businesses by providing an online platform that enhances digital visibility and helps entrepreneurs reach a broader audience.",
    devstack: "React.js, Next.js, TailwindCSS, Typescript, MySQL",
    link: "https://demo-umkmkare.vercel.app/",
    git: "https://github.com/Yusufrhman/umkmkare",
    src: kare,
  },
  {
    title: "UPSTYLE",
    category: projectCategory.mobile,
    desc: "Developed and integrated an order feature that allows users to place orders, track status, and receive notifications for payment and delivery updates. Successfully integrated the Midtrans payment gateway via Firebase Cloud Functions for secure, real-time payment processing.",
    devstack: "Flutter, Firebase, Midtrans",
    link: "https://play.google.com/apps/testing/com.stylelagi_team.stylelagi",
    git: false,
    src: upstyle,
  },

  {
    title: "ISAC Himsi Unair",
    category: projectCategory.website,
    desc: "Led front-end development for the Information System Airlangga Competition website, focusing on creating visually appealing and highly functional user interfaces.",
    devstack: "Laravel, TailwindCSS",
    link: "https://isac.himsiunair.com/",
    git: false,
    src: isac,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="text-white p-8 md:w-[90%] lg:w-[85%] 2xl:max-w-[92rem] mx-auto mt-16 md:mt-32"
    >
      <H2>
        Pro<span className="text-blue-500">jects</span>{" "}
      </H2>
      <ul className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 h-fit">
        {projects.map((project, index) => {
          return (
            <li key={index} className=" h-full">
              <ProjectCard project={project} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
