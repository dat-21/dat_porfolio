import React, { FormEvent, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import type { AppContextType } from "../types/AppContext";
import imageOverlayLight from "/earth.png";
import imageOverlayDark from "/earth-dark.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { sendEmail } from "../services/emailService";

const ContactEmail = () => {
  const { theme } = useContext<AppContextType>(AppContext);
  const backgroundImage = theme === "dark" ? imageOverlayDark : imageOverlayLight;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<null | string>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const result = await sendEmail(formData);

    if (result.success) {
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="pt-16 pb-4 lg:px-24 bg-[var(--color-bg)] transition-colors duration-500"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "var(--color-text)",
      }}
    >
      <div
        style={{
          backgroundColor: theme === "dark" ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.3)",
        }}
      />

      <div className="relative z-10 container mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-[var(--color-card)] rounded-2xl shadow-lg p-8 border border-[var(--color-border)]">
            <h3 className="text-2xl font-bold mb-6 text-[var(--color-text)]">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-input-bg)] text-[var(--color-text)]"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-input-bg)] text-[var(--color-text)]"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-input-bg)] text-[var(--color-text)]"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Write your message..."
                required
                className="w-full p-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-input-bg)] text-[var(--color-text)]"
              />

              <button
                type="submit"
                className="w-full py-3 mt-4 rounded-lg bg-red-700 text-white font-medium hover:bg-red-800 transition-all duration-300"
              >
                Send Message
              </button>
            </form>

            {status && <p className="mt-4 text-center text-sm">{status}</p>}
          </div>

          {/* Thông tin liên hệ */}
          <div className="self-center" style={{ textShadow: "5px" }}>
            <h3 className="text-2xl font-bold mb-6 text-[var(--color-text)]">Get in Touch</h3>
            <p className="text-[var(--color-text-secondary)] leading-7 mb-6">
              Whether you want to get in touch, discuss a collaboration, or just say hi — I'd love to hear from you!
              <br /> Fill out the form, and I'll get back to you soon.
            </p>

            <div className="flex gap-4 mt-6">
              <a href="https://github.com/dat-21" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border hover:bg-red-700 hover:text-white">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/mai-nguy%E1%BB%85n-ti%E1%BA%BFn-%C4%91%E1%BA%A1t-662a112b6/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border hover:bg-red-700 hover:text-white">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactEmail;
