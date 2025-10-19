import user_info from "../data/userdata";

import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  const contactLinkClass =
    "flex gap-4 text-zinc-700 dark:text-zinc-300 hover:text-red-800 dark:hover:text-red-400 transition-colors duration-300";

  return (
    <section
      id="contact"
      className="mt-20 pt-12 px-6 lg:px-24 transition-colors duration-500"
    >
      {/* =========== TITLE =========== */}
      <h4 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100">
        Let&apos;s Get in Touch:{" "}
        <span className="text-red-800 dark:text-red-500">
          Ways to Connect with Me
        </span>
      </h4>

      {/* =========== DESCRIPTION =========== */}
      <p className="mt-8 leading-7 text-base text-zinc-600 dark:text-zinc-300 font-light max-w-3xl">
        {user_info.contact.description}
      </p>

      {/* =========== LINKS =========== */}
      <div className="mt-12 space-y-4">
        {/* Facebook */}
        <a href={user_info.socials.facebook} className={contactLinkClass}>
          <FaFacebook className="self-center text-xl text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on Facebook</span>
        </a>

        {/* X / Twitter */}
        <a href={user_info.socials.twitter} className={contactLinkClass}>
          <FaSquareXTwitter className="self-center text-xl text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on X</span>
        </a>

        {/* Instagram */}
        <a href={user_info.socials.instagram} className={contactLinkClass}>
          <FaInstagram className="self-center text-xl text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on Instagram</span>
        </a>

        {/* LinkedIn */}
        <a href={user_info.socials.linkedin} className={contactLinkClass}>
          <FaLinkedin className="self-center text-xl text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on LinkedIn</span>
        </a>
      </div>

      <hr className="mt-8 w-72 border-zinc-300 dark:border-zinc-700 transition-colors duration-300" />

      {/* =========== EMAIL =========== */}
      <a
        href={`mailto:${user_info.main.email}`}
        className={`${contactLinkClass} mt-6`}
      >
        <MdEmail className="self-center text-xl text-red-800 dark:text-red-500" />
        <span>{user_info.main.email}</span>
      </a>
    </section>
  );
}

export default Contact;
