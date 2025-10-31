import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import user_info from "../data/userdata"; // Giả sử đây là file .ts hoặc .tsx

// Định nghĩa interface cho dữ liệu user_info
interface UserInfo {
  main: {
    name: string;
    role: string;
    description: string;
    photo: string;
  };
}

const Hero = () => {
  // Ép kiểu user_info sang UserInfo
  const info = user_info as UserInfo;

  return (
    <section
      id="hero"
      className="pb-28 pt-24 sm:pt-28 md:pt-44 flex px-6 lg:px-24 bg-[var(--color-bg)]"
    >
      <div className="self-center w-full"
        style={{
          backgroundColor: "var(--color-bg)",
          color: "var(--color-text)",
        }}>
        {/* Ảnh & tooltip */}
        <div className="hs-tooltip [--placement:right] w-20 hs-tooltip-toggle relative">
          <img
            src={info.main.photo}
            className="rounded-full mb-6 lg:hidden border border-[var(--color-border)]"
            alt={`${info.main.name} Graduation Picture`}
          />
          <span
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-[var(--color-card)] border border-[var(--color-border)] text-xs font-medium text-[var(--color-text)] rounded shadow-sm"
            role="tooltip"
          >
            Hello! 👋 How are you doing? 🤔
          </span>
        </div>

        {/* Nội dung chính */}
        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
          <div className="lg:w-[80%] self-center">
            <h2 className="text-xl text-[var(--color-text-secondary)]">
              {info.main.role}
            </h2>
            <h1 className="font-black mt-3 text-5xl lg:w-[80%] text-[var(--color-text)]">
              {info.main.name}
            </h1>
            <p className="mt-6 text-[var(--color-text-secondary)] text-base font-light lg:w-[87%] leading-7">
              {info.main.description}
            </p>

            {/* Nút bấm */}
            <div className="flex gap-2 mt-6">
              <a
                href="#projects"
                className="px-6 py-3 border border-[var(--color-border)] hover:bg-red-800 hover:text-white hover:border-red-800 dark:hover:bg-red-700 dark:hover:border-red-700 dark:hover:text-white font-medium transition-all duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300 flex gap-3 hover:gap-4"
              >
                <span className="self-center font-medium">Contact</span>
                <IoIosArrowForward className="self-center" />
              </a>
            </div>
          </div>

          {/* Ảnh bên phải */}
          <div className="hidden lg:block w-[480px] self-center">
            <img
              className="rounded-[10%] transform rotate-3 border border-[var(--color-border)] shadow-md"
              src={info.main.photo}
              alt={`${info.main.name} Graduation Picture`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;