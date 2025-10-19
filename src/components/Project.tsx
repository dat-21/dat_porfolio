import { CiLink } from "react-icons/ci";
import type { ProjectProps } from "../types/project";

function Project({ title, description, technologies, github }: ProjectProps) {
  return (
    <div className="transition-all duration-300 p-6 md:rounded-xl 
        border border-[var(--color-border)] 
        hover:bg-[var(--card-hover)] dark:hover:bg-[var(--card-hover-dark)]">
      {/* Technologies */}
      <div className="flex gap-2 overflow-x-auto py-2 
          scrollbar-thin scrollbar-thumb-[var(--color-border)]">
        {technologies.split(",").map((tech: string, index: number) => (
          <span
            key={index}
            className="inline-flex items-center gap-x-1.5 py-1.5 px-3 
              rounded-full text-xs font-medium 
              bg-red-100 text-red-800 
              dark:bg-red-800/30 dark:text-red-400"
          >
            {tech.trim()}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="font-bold text-lg 
          text-[var(--color-text)] 
          mt-4">
        {title}
      </h3>

      {/* Description */}
      <p className="leading-7 
          text-[var(--color-text-secondary)] 
          font-light text-base mt-4">
        {description}
      </p>

      {/* Links */}
      <div className="flex gap-6 
          text-[var(--color-text-secondary)] 
          font-medium mt-4">
        {/* {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 
              hover:text-red-700 dark:hover:text-red-500 
              cursor-pointer transition-all duration-300"
          >
            <CiLink className="text-2xl self-center" />
            <span className="text-xs self-center">View Project</span>
          </a>
        )} */}

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 
              hover:text-red-700 dark:hover:text-red-500 
              cursor-pointer transition-all duration-300"
          >
            <CiLink className="text-2xl self-center" />
            <span className="text-xs self-center">View Github</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default Project;
