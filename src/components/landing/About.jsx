import React from "react";

import character from "../../assets/images/character1.png";

export const About = () => {
  return (
    <section
      id="about"
      className="text-white p-8 md:w-[90%] lg:w-[85%] 2xl:max-w-[92rem] mx-auto"
    >
      <h2 className="text-3xl md:text-4xl lg:text-6xl text-center lg:text-left font-bold mb-8">
        About <span className="text-blue-500">Me</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <div className="border border-white/20 rounded-lg p-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">01. Background</h3>
            <p className="text-white/50 mb-6">
              I am a dedicated Website Developer with a strong foundation in
              Information Systems, currently pursuing my degree at Universitas
              Airlangga. My passion lies in crafting intuitive and engaging user
              experiences through modern web technologies. With hands-on
              experience in various projects, I am committed to continuous
              learning and innovation in the field of web development.
            </p>
          </div>
          <div className="rounded-lg p-4 mb-4 border border-white/20 ">
            <code className="text-blue-200">
              const skills = [<br />
              &nbsp;&nbsp;'React',
              <br />
              &nbsp;&nbsp;'Next.js',
              <br />
              &nbsp;&nbsp;'Tailwind CSS',
              <br />
              &nbsp;&nbsp;'Flutter',
              <br />
              &nbsp;&nbsp;'Node.js',
              <br />
              &nbsp;&nbsp;'Express.js',
              <br />
              &nbsp;&nbsp;'Laravel',
              <br />
              &nbsp;&nbsp;'Firebase',
              <br />
              &nbsp;&nbsp;'MongoDB',
              <br />
              &nbsp;&nbsp;'MySQL',
              <br />
              &nbsp;&nbsp;'Git & Github',
              <br />
              ];
            </code>
          </div>
        </div>

        <div className="border border-white/20 rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">02. Expertise</h3>
            <p className="text-white/50">
              I specialize in building responsive and user-friendly web
              applications using modern technologies. My experience spans across
              developing scalable front-end solutions and integrating seamless
              user interfaces. I have worked on multiple projects, contributing
              to their architecture, design, and development while ensuring
              optimal performance and accessibility.
            </p>
          </div>
          <div className="mt-4 relative border border-white/20 rounded-lg p-4 h-full min-h-[200px] overflow-hidden">
            <img
              src={character}
              alt="character"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="border border-white/20 rounded-lg p-6 md:col-span-2 xl:col-span-1 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">03. Skills</h3>
            <p className="text-white/50 mb-4">
              I have a strong command of various technologies and continuously
              enhance my skill set to remain at the cutting edge of web
              development.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 text-center gap-4 h-full">
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-blue-500 font-medium mb-2">
                Web Development
              </h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>Docker</li>
              </ul>
            </div>
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-blue-500 font-medium mb-2">
                Backend Development
              </h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Firebase</li>
                <li>Laravel</li>
              </ul>
            </div>
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-blue-500 font-medium mb-2">Database</h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Firebase</li>
              </ul>
            </div>
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-blue-500 font-medium mb-2">
                Version Control
              </h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>Git</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
