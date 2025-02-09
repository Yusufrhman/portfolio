import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Button from "./buttons/Button";
export default function ProjectCard({ project }) {
  return (
    <article className="p-4 border border-white/20 rounded-lg space-y-2 h-full flex flex-col justify-between">
      <div className="space-y-2 ">
        <div className="relative border border-white/20 rounded-lg p-4 aspect-[4/3] overflow-hidden">
          <img
            src={project.src}
            alt="character"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <h4 className="text-base font-bold">{project.title}</h4>
        <p className="text-sm border border-blue-200 w-fit text-blue-200 px-2 rounded-full">{project.category}</p>
        <p className="text-sm text-justify text-white/40">{project.desc}</p>
        <p className="text-sm text-justify text-white/60 p-2 rounded-md">{project.devstack}</p>
      </div>
      <div className="flex gap-2 flex-wrap">
        {project.git && (
          <a href={project.git} target="_blank">
            <Button
              className={
                "text-sm px-2 py-1 flex items-center justify-center gap-1"
              }
              reverse
            >
              <FaGithub />
              Github
            </Button>
          </a>
        )}
        {project.link && (
          <a href={project.link} target="_blank">
            <Button
              className={
                "text-sm px-2 py-1 flex items-center justify-center gap-1"
              }
            >
              Link
              <FaExternalLinkAlt />
            </Button>
          </a>
        )}
      </div>
    </article>
  );
}
