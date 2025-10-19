import user_info from "../../data/userdata";
import Project from "../Project.jsx";

function Projects() {
  return (
    <section
      id="projects"
      className="
       grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-8 md:gap-12 lg:px-16 
        py-16 
        bg-[var(--color-bg)] 
        text-[var(--color-text)] 
        transition-colors duration-300
      "
    >
      {user_info.projects.map((project, index) => (
        <div
          key={index}
          className="
            rounded-xl p-6 
            shadow-md 
            bg-[var(--color-card)] 
            border border-[var(--color-border)] 
            transition-all duration-300 
            hover:shadow-lg hover:-translate-y-1
          "
        >
          <Project
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            link={project.link}
          />
        </div>
      ))}
    </section>
  );
}

export default Projects;
