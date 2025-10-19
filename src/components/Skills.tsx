import {

  BiLogoTypescript,
} from "react-icons/bi";

import { DiGithubAlt, DiMongodb } from "react-icons/di";
import {

  FaCss3Alt,

  FaGitAlt,
  FaGitlab,
  FaHtml5,
  FaNodeJs,

  FaReact,

} from "react-icons/fa6";
import { IoLogoJavascript} from "react-icons/io5";
import {

  SiExpress,

  SiPostman,

  SiTailwindcss,

} from "react-icons/si";
import styles from '../styles/Skills.module.css';

function Skills() {
  const skillItemClass =
    "inline-flex items-center justify-between gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition-transform duration-700 rounded-xl font-medium border border-[var(--border)] bg-[var(--card)] text-[var(--text)] hover:bg-[var(--card-hover)]";

  return (
    <section
      id="skills"
      className="mx-4 lg:mx-20 transition-colors duration-500"
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      <h4 className={`text-4xl font-bold text-center mt-20 text-[var(--text)] ${styles.titleAnimate}`}>
        Technologies I Use
      </h4>

      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 mt-8 ${styles.skillsGrid}`}>
        <span className={`${skillItemClass} ${styles.skillItem}`} style={{ animationDelay: '0.1s' }}>
          <FaHtml5 className="text-2xl" /> HTML
        </span>
        <span className={`${skillItemClass} ${styles.skillItem}`} style={{ animationDelay: '0.2s' }}>
          <FaCss3Alt className="text-2xl" /> CSS
        </span>
        <span className={`${skillItemClass} ${styles.skillItem}`} style={{ animationDelay: '0.3s' }}>
          <IoLogoJavascript className="text-2xl" /> JavaScript
        </span>
        <span className={`${skillItemClass} ${styles.skillItem}`} style={{ animationDelay: '0.4s' }}>
          <BiLogoTypescript className="text-2xl" /> TypeScript
        </span>
        <span className={`${skillItemClass} ${styles.skillItem}`} style={{ animationDelay: '0.5s' }}>
          <FaReact className="text-2xl" /> ReactJS
        </span>
        <span className={`${skillItemClass} ${styles.skillItem}`} style={{ animationDelay: '0.6s' }}>
          <SiExpress className="text-2xl" /> Express
        </span>
        <span className={`${skillItemClass} ${styles.skillItem}`} style={{ animationDelay: '0.7s' }}>
          <FaNodeJs className="text-2xl" /> NodeJS
        </span>
        <span className={`${skillItemClass} ${styles.skillItem}`} style={{ animationDelay: '0.8s' }}>
          <SiTailwindcss className="text-2xl" /> Tailwind
        </span>
        <span className={`${skillItemClass} ${styles.skillItem}`} style={{ animationDelay: '0.9s' }}>
          <FaGitAlt className="text-2xl" /> Git
        </span>
        <span className={`${skillItemClass} ${styles.skillItem}`} style={{ animationDelay: '1s' }}>
          <DiGithubAlt className="text-2xl" /> Github
        </span>
        <span className={`${skillItemClass} ${styles.skillItem}`} style={{ animationDelay: '1.1s' }}>
          <FaGitlab className="text-2xl" /> Gitlab
        </span>
        <span className={`${skillItemClass} ${styles.skillItem}`} style={{ animationDelay: '1.2s' }}>
          <SiPostman className="text-2xl" /> Postman
        </span>
        <span className={`${skillItemClass} ${styles.skillItem}`} style={{ animationDelay: '1.3s' }}>
          <DiMongodb className="text-2xl" /> MongoDB
        </span>
      </div>
    </section>
  );
}

export default Skills;