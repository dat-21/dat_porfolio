import React from "react";
import { FaLandmark } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";// Thêm icon cho GitHub
import user_info from "../data/userdata";

// Định nghĩa interface cho dữ liệu education
interface EducationData {
  school: string;
  degree: string;
  duration: string;
  image: string;
}

// Định nghĩa interface cho dữ liệu certificate
interface CertificateData {
  title: string;
  description: string;
  link: string;
  icon: "google" | "github" | "hackerrank";
}

// Định nghĩa interface cho dữ liệu experience
interface ExperienceData {
  position: string;
  company: string;
  duration: string;
  image: string;
  descriptions: string[];
}

// Định nghĩa interface cho user_info
interface UserInfo {
  main: {
    name: string;
    description: string;
    role: string;
    photo: string;
    email: string;
  };
  socials: {
    twitter: string;
    github: string;
    linkedin: string;
    instagram: string;
    facebook: string;
  };
  projects: {
    title: string;
    description: string;
    technologies: string;
    github: string;
    link: string;
  }[];
  education: EducationData[];
  experience: ExperienceData[];
  certificates: CertificateData[];
  contact: {
    title: string;
    description: string;
  };
  footer: string;
}

const EducationAndExperience = () => {
  // Sử dụng user_info làm info
  const info = user_info as UserInfo;

  return (
    <section
      id="education-and-experience"
      className="
        mt-20 mx-4 lg:mx-20 
        flex flex-col md:flex-row gap-4 md:gap-2 
        text-[var(--color-text)] 
        transition-all duration-[var(--transition-speed)]
      "
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      {/* =========== EDUCATION =========== */}
      <div className="w-full md:w-[80%]">
        {/* =========== EDUCATION TITLE =========== */}
        <h4
          className="
            text-xl font-bold flex gap-2 items-center
            text-[var(--color-text)]
          "
        >
          <FaLandmark className="text-xl text-[var(--color-accent)]" />
          Education
        </h4>

        {/* =========== EDUCATION LIST =========== */}
        {info.education.map((edu, index) => (
          <div key={index}>
            {/* =========== DURATION =========== */}
            <div className="ps-2 my-2 first:mt-0 !mt-2">
              <h3
                className="
                  text-xs font-medium uppercase 
                  text-[var(--color-subtext)]
                "
              >
                {edu.duration}
              </h3>
            </div>

            <div className="flex gap-x-3 relative group rounded-lg">
              <div
                className="
                  relative last:after:hidden after:absolute after:top-0 after:bottom-0 
                  after:start-3.5 after:w-px after:-translate-x-[0.5px] 
                  after:bg-[var(--color-border)] 
                  group-hover:after:bg-[var(--color-accent)]
                "
              >
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div
                    className="
                      size-2 rounded-full 
                      bg-[var(--color-bg)] 
                      border-2 border-[var(--color-border)] 
                      group-hover:border-[var(--color-accent)] 
                      transition-colors duration-[var(--transition-speed)]
                    "
                  ></div>
                </div>
              </div>

              <div className="grow p-2 pb-8">
                {/* =========== IMAGE AND SCHOOL NAME =========== */}
                <h3
                  className="
                    flex items-center gap-x-2 font-semibold 
                    text-[var(--color-text)]
                  "
                >
                  <img
                    className="w-9 h-9 rounded-full"
                    src={edu.image}
                    alt={`${edu.school} Logo`}
                  />
                  <div className="leading-5">
                    {edu.school}
                    {/* =========== DEGREE =========== */}
                    <p
                      className="
                        font-normal text-xs 
                        text-[var(--color-subtext)]
                      "
                    >
                      {edu.degree}
                    </p>
                  </div>
                </h3>
              </div>
            </div>
          </div>
        ))}

        {/* =========== CERTIFICATES TITLE =========== */}
        <h4
          className="
            text-xl mt-6 font-bold flex gap-2 items-center
            text-[var(--color-text)]
          "
        >
          <PiCertificateFill className="text-2xl text-[var(--color-accent)]" />
          Certificates
        </h4>


      </div>

      {/* =========== EXPERIENCE =========== */}
      <div className="w-full">
        {/* =========== EXPERIENCE TITLE =========== */}
        <h4
          className="
            text-xl mb-4 font-bold flex gap-2 items-center
            text-[var(--color-text)]
          "
        >
          <FaBuildingUser className="text-2xl text-[var(--color-accent)]" />
          Experience
        </h4>

        <div className="md:h-[480px] md:overflow-y-scroll scroll-smooth">
          {/* =========== EXPERIENCE LIST =========== */}
          {info.experience.map((exp, index) => (
            <div key={index}>
              <div className="ps-2 my-2 first:mt-0 !mt-2">
                <h3
                  className="
                    text-xs font-medium uppercase 
                    text-[var(--color-subtext)]
                  "
                >
                  {exp.duration}
                </h3>
              </div>

              <div className="flex gap-x-3 relative group rounded-lg">
                <div
                  className="
                    relative last:after:hidden after:absolute after:top-0 after:bottom-0 
                    after:start-3.5 after:w-px after:-translate-x-[0.5px] 
                    after:bg-[var(--color-border)] 
                    group-hover:after:bg-[var(--color-accent)]
                  "
                >
                  <div className="relative z-10 size-7 flex justify-center items-center">
                    <div
                      className="
                        size-2 rounded-full 
                        bg-[var(--color-bg)] 
                        border-2 border-[var(--color-border)] 
                        group-hover:border-[var(--color-accent)] 
                        transition-colors duration-[var(--transition-speed)]
                      "
                    ></div>
                  </div>
                </div>

                <div className="grow p-2 pb-8">
                  {/* =========== COMPANY NAME =========== */}
                  <h3
                    className="
                      flex items-center gap-x-2 font-semibold 
                      text-[var(--color-text)]
                    "
                  >
                    <img
                      className="w-9 h-9 rounded-full"
                      src={exp.image}
                      alt={`${exp.company} Logo`}
                    />
                    <div className="leading-5">
                      {exp.company}
                      {/* =========== POSITION =========== */}
                      <p
                        className="
                          font-normal text-xs 
                          text-[var(--color-subtext)]
                        "
                      >
                        {exp.position}
                      </p>
                    </div>
                  </h3>

                  <ul className="list-disc list-inside text-[var(--color-text)] mt-2">
                    {/* =========== DESCRIPTION LIST =========== */}
                    {exp.descriptions.map((desc, i) => (
                      <li className="flex space-x-3" key={i}>
                        <svg
                          className="
                            flex-shrink-0 size-4 mt-0.5 
                            text-[var(--color-accent)]
                          "
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span className="text-sm text-[var(--color-subtext)] mt-1">
                          {desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationAndExperience;
