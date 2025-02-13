import React from "react";
import tedx from "../../assets/images/projects/tedx.png";
import isac from "../../assets/images/projects/isac.png";
import kare from "../../assets/images/projects/kare.png";
import adminkare from "../../assets/images/projects/adminkare.png";
import upstyle from "../../assets/images/projects/upstyle.png";
import epengaduan from "../../assets/images/projects/epengaduan.png";
import epengaduanMobile from "../../assets/images/projects/epengaduanMobile.png";
import seoboost from "../../assets/images/projects/seoboost.png";

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
    title: "Admin UMKM Desa Kare",
    category: projectCategory.website,
    desc: "Admin UMKM Kare is a Web-based admin platform designed to manage UMKM data in Desa Kare, featuring dual user roles, CRUD modules, and a responsive design to support digital transformation and local business growth.",
    devstack: "Laravel 11, Filament, MySQL",
    link: "http://adminumkmkare.aryaprasetya.me/",
    git: "https://github.com/Yusufrhman/admin-umkm-kare-laravel.git",
    src: adminkare,
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
    title: "E-Pengaduan",
    category: projectCategory.website,
    desc: `This web-based Community Complaint Application is a school project designed to help citizens report environmental issues, track complaint progress, and access news on resolutions. It provides a practical and efficient solution for improving communication between the community and authorities.`,
    devstack: "EJS, Express.js, Node.js, Bootstrap, MySQL.",
    link: false,
    git: "https://github.com/Yusufrhman/E-pengaduan",
    src: epengaduan,
  },
  {
    title: "SEOBoost",
    category: projectCategory.website,
    desc: `SEOBoost is a web application designed to help users analyze keywords, track keyword trends, and get SEO recommendations. The app allows users to input a keyword or phrase and provides detailed insights into search volume, competition, and SEO optimization techniques.`,
    devstack: "React.js, Next.js, TailwindCSS, Google Trends, MongoDB, cheerio",
    link: false,
    git: "https://github.com/AgileRE-2024/SEO-TOOLS",
    src: seoboost,
  },
  {
    title: "E-Pengaduan Mobile",
    category: projectCategory.mobile,
    desc: `This school project is a Mobile app-based complaint app for reporting environmental issues, tracking progress, and accessing resolution updates, enhancing community-government communication.`,
    devstack: "Flutter, Dart, Firebase",
    link: false,
    git: "https://github.com/Yusufrhman/e-pengaduan-mobile",
    src: epengaduanMobile,
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
