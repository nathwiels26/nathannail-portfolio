"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  const certificates = [
    {
      title: "ASEAN Data Science Explorer",
      image: "/ASEANDATASCIENCEEXPLORER.jpg",
      category: "Data Science",
    },
    {
      title: "Operating Systems and Becoming a Power User",
      image: "/operatingsystemsandbecomingapoweruser.jpg",
      category: "IT Fundamentals",
    },
    {
      title: "Wall Street English Certificate",
      image: "/wallstreetenglish.jpg",
      category: "English Proficiency",
    },
    {
      title: "TechFest 2025 - Data Analyst Competition",
      image: "/TECHFEST2025LOMBADATAANALYST.jpg",
      category: "Competition",
    },
  ];

  return (
    <>
      <section
        id="certificates"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
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
              <Award className="inline-block w-4 h-4 mr-2" />
              Achievements
            </motion.span>

            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent mb-4">
              Certificates & Awards
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional certifications and recognitions that showcase my continuous learning journey
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedCertificate(index)}
                >
                  {/* Certificate Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.div
                        className="text-center"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                      >
                        <ExternalLink className="w-12 h-12 text-white mb-2 mx-auto" />
                        <p className="text-white font-semibold">Click to view</p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                          {cert.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium">
                        {cert.category}
                      </span>
                    </div>
                  </div>

                  {/* Subtle shimmer effect */}
                  <motion.div
                    className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    animate={{
                      left: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedCertificate !== null && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCertificate(null)}
        >
          <motion.div
            className="relative max-w-5xl w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedCertificate(null)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Certificate Image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white">
              <Image
                src={certificates[selectedCertificate].image}
                alt={certificates[selectedCertificate].title}
                fill
                className="object-contain"
              />
            </div>

            {/* Certificate Info */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                {certificates[selectedCertificate].title}
              </h3>
              <div className="flex items-center justify-center">
                <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                  {certificates[selectedCertificate].category}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
