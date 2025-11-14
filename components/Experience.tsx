"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Senior Web Developer",
      company: "Tech Company Inc.",
      period: "2023 - Present",
      description:
        "Leading the development of full-stack web applications using modern technologies. Mentoring junior developers and implementing best practices.",
      responsibilities: [
        "Architecting and developing scalable web applications",
        "Code reviews and team collaboration",
        "Performance optimization and testing",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2021 - 2023",
      description:
        "Developed and maintained multiple client projects using React, Node.js, and various databases.",
      responsibilities: [
        "Building responsive web applications",
        "API development and integration",
        "Database design and optimization",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Junior Developer",
      company: "StartUp Innovations",
      period: "2020 - 2021",
      description:
        "Started my professional journey working on various web projects and learning industry best practices.",
      responsibilities: [
        "Frontend development with React",
        "Bug fixing and feature implementation",
        "Collaborating with design team",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
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
            💼 Career Journey
          </motion.span>

          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent mb-4">
            Work Experience
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the amazing companies I&apos;ve had the privilege to work with
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-20"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-white dark:border-gray-900"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2, type: "spring" }}
                  whileHover={{ scale: 1.5 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all group relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  {/* Glowing border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <motion.h3
                          className="text-2xl font-bold text-gray-900 dark:text-white mb-1"
                          whileHover={{ x: 5 }}
                        >
                          {exp.title}
                        </motion.h3>
                        <motion.p
                          className={`bg-gradient-to-r ${exp.color} bg-clip-text text-transparent font-bold text-lg`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {exp.company}
                        </motion.p>
                      </div>
                      <motion.span
                        className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mt-2 md:mt-0"
                        whileHover={{ scale: 1.1 }}
                      >
                        {exp.period}
                      </motion.span>
                    </div>

                    <motion.p
                      className="text-gray-700 dark:text-gray-300 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      {exp.description}
                    </motion.p>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.4 + idx * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.span
                            className="text-blue-500 mt-1"
                            animate={{ rotate: [0, 360] }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear",
                              delay: idx * 0.5,
                            }}
                          >
                            ✦
                          </motion.span>
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
