"use client";

import { motion } from "framer-motion";
import { Coffee, Calendar, Award, MapPin } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function OtherExperiences() {
  const [selectedBaristaImage, setSelectedBaristaImage] = useState(0);
  const [selectedEventImage, setSelectedEventImage] = useState(0);

  const baristaImages = [
    {
      src: "/barista-work.jpg",
      alt: "Working at Finders Coffee",
      caption: "Serving customers at the mall"
    },
    {
      src: "/latte-art.jpg",
      alt: "Latte Art Creation",
      caption: "Practicing latte art skills"
    },
    {
      src: "/barista-portrait.jpg",
      alt: "At Finders Coffee Counter",
      caption: "Behind the counter at Finders Cafe"
    },
  ];

  const eventImages = [
    {
      src: "/ganti1.jpg",
      alt: "Event Team",
      caption: "Working with amazing teams"
    },
    {
      src: "/WhatsApp Image 2025-11-13 at 21.05.33_2080624d.jpg",
      alt: "Event Activity",
      caption: "One of my exciting event experiences"
    },
    {
      src: "/WhatsApp Image 2025-11-13 at 21.10.38_15d7034e.jpg",
      alt: "Event Promotion",
      caption: "Engaging with customers during events"
    },
  ];

  const experiences: any[] = [];

  return (
    <section
      id="other-experiences"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 18,
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
            className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-purple-600 dark:text-purple-400 text-sm font-medium inline-block mb-4"
            whileHover={{ scale: 1.05 }}
          >
            🌟 Beyond Coding
          </motion.span>

          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent mb-4">
            My Other Adventures
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Life isn&apos;t just about code. Here are some of my experiences that shaped who I am today.
          </p>
        </motion.div>

        {/* Featured: Barista Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Left: Content */}
              <div className="flex flex-col justify-center space-y-6">
                <motion.div
                  className="inline-flex items-center gap-3 w-fit"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Coffee className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      Part-Time Barista
                    </h3>
                    <p className="text-amber-600 dark:text-amber-400 font-semibold">
                      Finders Coffee
                    </p>
                  </div>
                </motion.div>

                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Lippo Mall Puri, Jakarta</span>
                </div>

                <div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full text-amber-700 dark:text-amber-300 font-semibold">
                  August 19, 2024 - November 13, 2025
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    My most memorable barista experience happened while working at Finders Coffee.
                    This is where I truly learned the art and science of coffee making.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    During my time here, I learned:
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-amber-500 text-xl">☕</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        How to properly brew coffee and master different brewing techniques
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-500 text-xl">⚙️</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        Coffee calibration and maintaining consistency in every cup
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-500 text-xl">🎯</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        Providing tasters to mall visitors and engaging with customers
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-500 text-xl">🎨</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        Creating latte art (honestly, I&apos;m still working on perfecting this! Hahaha)
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {["Customer Service", "Coffee Brewing", "Latte Art", "Time Management", "Communication", "Attention to Detail"].map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-amber-200 dark:border-amber-800 shadow-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Right: Image Gallery */}
              <div className="space-y-4">
                {/* Main Image */}
                <motion.div
                  className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl group bg-white dark:bg-gray-900 border-4 border-amber-200 dark:border-amber-800"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={baristaImages[selectedBaristaImage].src}
                    alt={baristaImages[selectedBaristaImage].alt}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-lg drop-shadow-lg">
                        {baristaImages[selectedBaristaImage].caption}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Thumbnail Navigation */}
                <div className="grid grid-cols-3 gap-3">
                  {baristaImages.map((image, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setSelectedBaristaImage(idx)}
                      className={`relative aspect-[4/3] w-full rounded-xl overflow-hidden transition-all bg-white dark:bg-gray-900 ${
                        selectedBaristaImage === idx
                          ? "border-amber-500 shadow-lg scale-105 border-4"
                          : "border-gray-300 dark:border-gray-600 hover:border-amber-400 border-2"
                      }`}
                      whileHover={{ scale: selectedBaristaImage === idx ? 1.05 : 1.02 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain"
                      />
                      {selectedBaristaImage === idx && (
                        <div className="absolute inset-0 bg-amber-500/20 pointer-events-none" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured: Event Crew & Brand Promoter Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Left: Content */}
              <div className="flex flex-col justify-center space-y-6">
                <motion.div
                  className="inline-flex items-center gap-3 w-fit"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      Event Crew & Brand Promoter
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold">
                      Multiple Roles & Companies
                    </p>
                  </div>
                </motion.div>

                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-700 dark:text-purple-300 font-semibold">
                  Active since 2022 • Various Event Dates
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-semibold">
                    This is honestly the most exciting experience in my life!
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Participating in events like these has helped me make new friends, build my confidence,
                    and significantly improve my communication soft skills. I&apos;ve taken on various roles
                    including SPB, Crew Kitchen, Flyering, and Brand Promoter.
                  </p>

                  <div className="space-y-4 mt-6">
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                      Notable Events & Experiences:
                    </h4>

                    <div className="space-y-4">
                      {/* Nivea Event */}
                      <div className="flex items-start gap-3 p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl">
                        <span className="text-2xl">🎁</span>
                        <div>
                          <h5 className="font-bold text-gray-900 dark:text-white mb-1">
                            Nivea Brand Promoter (2023-2024)
                          </h5>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Distributed product samples in a school-to-school campaign, targeting high school
                            students across various locations.
                          </p>
                        </div>
                      </div>

                      {/* Baby Happy Event */}
                      <div className="flex items-start gap-3 p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl">
                        <span className="text-2xl">👶</span>
                        <div>
                          <h5 className="font-bold text-gray-900 dark:text-white mb-1">
                            Baby Happy Flyering Team
                          </h5>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Engaged with mothers who have babies, inviting them to join our WhatsApp
                            community group and providing product information.
                          </p>
                        </div>
                      </div>

                      {/* PRJ */}
                      <div className="flex items-start gap-3 p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl">
                        <span className="text-2xl">🎪</span>
                        <div>
                          <h5 className="font-bold text-gray-900 dark:text-white mb-1">
                            Pekan Raya Jakarta (PRJ)
                          </h5>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Participated in one of Indonesia&apos;s biggest annual fairs, gaining
                            experience in large-scale event management.
                          </p>
                        </div>
                      </div>

                      {/* More */}
                      <div className="flex items-start gap-3 p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl">
                        <span className="text-2xl">✨</span>
                        <div>
                          <h5 className="font-bold text-gray-900 dark:text-white mb-1">
                            And Many More...
                          </h5>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Various other events as SPB, Crew Kitchen, and more throughout 2022-2024.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {["Brand Promotion", "Flyering", "Event Management", "Public Speaking", "Customer Engagement", "Team Coordination", "Sampling Distribution", "Community Building"].map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-purple-200 dark:border-purple-800 shadow-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * idx }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Right: Image Gallery */}
              <div className="space-y-4">
                {/* Main Image */}
                <motion.div
                  className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl group bg-white dark:bg-gray-900 border-4 border-purple-200 dark:border-purple-800"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={eventImages[selectedEventImage].src}
                    alt={eventImages[selectedEventImage].alt}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-lg drop-shadow-lg">
                        {eventImages[selectedEventImage].caption}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Thumbnail Navigation */}
                <div className="grid grid-cols-3 gap-3">
                  {eventImages.map((image, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setSelectedEventImage(idx)}
                      className={`relative aspect-[4/3] w-full rounded-xl overflow-hidden transition-all bg-white dark:bg-gray-900 ${
                        selectedEventImage === idx
                          ? "border-purple-500 shadow-lg scale-105 border-4"
                          : "border-gray-300 dark:border-gray-600 hover:border-purple-400 border-2"
                      }`}
                      whileHover={{ scale: selectedEventImage === idx ? 1.05 : 1.02 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain"
                      />
                      {selectedEventImage === idx && (
                        <div className="absolute inset-0 bg-purple-500/20 pointer-events-none" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <motion.div
                  className={`h-full bg-gradient-to-br ${experience.bgColor} backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden group`}
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${experience.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {experience.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill: string, skillIndex: number) => (
                      <motion.span
                        key={skillIndex}
                        className="px-3 py-1 bg-white/80 dark:bg-gray-800/80 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Decorative corner element */}
                  <motion.div
                    className={`absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br ${experience.color} rounded-full opacity-20`}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
            <Award className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              What I Learned
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              These diverse experiences taught me invaluable lessons about communication,
              adaptability, and working under pressure. They complement my technical skills
              and help me approach problems from different perspectives, making me a more
              well-rounded professional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
