"use client";

import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MagneticButton from "./MagneticButton";

export default function Contact() {

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "nathannailw@gmail.com",
      href: "mailto:nathannailw@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "08567743255",
      href: "tel:08567743255",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Jakarta Barat, Kembangan Utara",
      href: "#",
      color: "from-orange-500 to-red-500",
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/nathwiels26", label: "GitHub", color: "#333" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/nathannail-wielianto-39467b275/", label: "LinkedIn", color: "#0077b5" },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium inline-block mb-4"
            whileHover={{ scale: 1.05 }}
          >
            📬 Get In Touch
          </motion.span>

          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent mb-4">
            Let&apos;s Work Together
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Feel free to reach out. I&apos;m always open to discussing new opportunities!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl border border-gray-200/50 dark:border-gray-700/50 group relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                    <motion.div
                      className={`p-3 rounded-lg bg-gradient-to-br ${info.color} text-white`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon size={24} />
                    </motion.div>

                    <div className="relative z-10">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {info.label}
                      </p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Connect With Me
              </h3>

              <div className="flex gap-4 justify-center">
                {socialLinks.map((social, index) => (
                  <MagneticButton key={index}>
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-white shadow-lg relative overflow-hidden group cursor-pointer"
                      whileHover={{ scale: 1.15, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <motion.div
                        className="absolute inset-0"
                        style={{ backgroundColor: social.color }}
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <social.icon size={28} className="relative z-10" />
                    </motion.a>
                  </MagneticButton>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <motion.div
              className="relative h-48 mt-12"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-20 blur-2xl" />
              <motion.div
                className="absolute inset-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 60px rgba(139, 92, 246, 0.5)",
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-5xl mb-3"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    💼
                  </motion.div>
                  <p className="text-2xl font-bold">Open for Work</p>
                  <p className="text-sm opacity-80">Let&apos;s build something amazing!</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
