"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from "react-icons/fi";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="max-w-7xl w-full relative z-10"
        style={{ y }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-20">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center md:text-left space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="inline-block"
            >
              <motion.span
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium shadow-lg shadow-blue-500/10"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.span
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                >
                  👋
                </motion.span>
                Welcome to my portfolio
              </motion.span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Hi, I&apos;m
              </motion.span>{" "}
              <br />
              <motion.span
                className="relative inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Nathannail
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="space-y-4"
            >
              <motion.p
                className="text-2xl sm:text-3xl font-semibold"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Passionate in Business Analyst
                </span>
              </motion.p>

              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              />

              <motion.p
                className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Currently in my <span className="font-medium text-gray-700 dark:text-gray-300">5th semester</span> of Information Systems at{" "}
                <span className="font-medium text-gray-700 dark:text-gray-300">Unika Atma Jaya</span>,
                preparing to embark on an internship journey next semester. I&apos;m driven by
                the challenge of transforming complex data into strategic insights and actionable
                business solutions. While my heart lies in{" "}
                <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Business Analysis
                </span>, I&apos;m equally
                enthusiastic about exploring the dynamic realms of Machine Learning, Web Development,
                and Software Engineering.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <motion.a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-medium overflow-hidden shadow-xl shadow-blue-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </motion.a>

              <motion.a
                href="#projects"
                className="group px-8 py-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-2xl font-medium relative overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05, y: -2, borderColor: "#3b82f6" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <motion.span
                    initial={{ y: 0 }}
                    whileHover={{ y: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    ↓
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="/cv.pdf"
                download
                className="group px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-medium flex items-center justify-center gap-2 relative overflow-hidden shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FiDownload />
                </motion.span>
                <span className="relative z-10">Download CV</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-3 justify-center md:justify-start mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[
                { icon: FiGithub, href: "https://github.com/nathwiels26", label: "GitHub" },
                { icon: FiLinkedin, href: "https://www.linkedin.com/in/nathannail-wielianto-39467b275/", label: "LinkedIn" },
                { icon: FiMail, href: "#contact", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="group relative w-14 h-14 flex items-center justify-center rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    <social.icon size={22} />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image - Elegant Design */}
          <motion.div
            className="flex-shrink-0 relative"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <motion.div
              className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Elegant gradient border with glassmorphism */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[3px] shadow-2xl shadow-purple-500/30">
                <div className="w-full h-full rounded-[3rem] bg-white dark:bg-gray-900 p-4">
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 z-10" />

                    {/* Animated glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 z-10"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Profile Photo */}
                    <Image
                      src="/profile.jpg"
                      alt="Nathannail Wielianto"
                      fill
                      className="object-cover relative z-20"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Elegant floating decorative elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl shadow-blue-500/50 backdrop-blur-sm"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  y: [0, -10, 0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-white text-2xl">
                  💼
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-xl shadow-purple-500/50 backdrop-blur-sm"
                animate={{
                  rotate: [0, -10, 0, 10, 0],
                  y: [0, 10, 0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-white text-xl">
                  📊
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-xl shadow-pink-500/50 backdrop-blur-sm"
                animate={{
                  x: [0, 10, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-white text-lg">
                  🎯
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Elegant Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 cursor-pointer group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Scroll Down
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-gray-700 flex items-start justify-center p-2 group-hover:border-blue-500 transition-colors">
              <motion.div
                className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full group-hover:bg-blue-500"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
