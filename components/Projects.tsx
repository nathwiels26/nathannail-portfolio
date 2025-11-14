"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";
import { useState } from "react";

interface Project3DCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    github: string;
    demo: string;
    videoUrl?: string;
  };
  index: number;
  onDemoClick?: () => void;
}

function Project3DCard({ project, index, onDemoClick }: Project3DCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative group"
    >
      <motion.div
        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(50px)",
        }}
      >
        {/* Project Image */}
        <div className="relative h-64 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-600/60 to-purple-600/60"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Floating particles */}
          <motion.div
            className="absolute top-4 right-4 w-4 h-4 bg-white rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-8 left-8 w-3 h-3 bg-yellow-300 rounded-full"
            animate={{
              y: [0, -15, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>

        <div className="p-6 relative">
          {/* Glowing card effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <motion.h3
            className="text-2xl font-bold text-gray-900 dark:text-white mb-3 relative"
            style={{ transform: "translateZ(75px)" }}
          >
            {project.title}
          </motion.h3>

          <motion.p
            className="text-gray-600 dark:text-gray-400 mb-4 relative"
            style={{ transform: "translateZ(50px)" }}
          >
            {project.description}
          </motion.p>

          {/* Technologies */}
          <motion.div
            className="flex flex-wrap gap-2 mb-6 relative"
            style={{ transform: "translateZ(25px)" }}
          >
            {project.technologies.map((tech, idx) => (
              <motion.span
                key={idx}
                className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex gap-4 relative"
            style={{ transform: "translateZ(75px)" }}
          >
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 rounded-lg font-medium"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              suppressHydrationWarning
            >
              <FiGithub size={20} />
              View Source Code
            </motion.a>

            {project.demo && project.demo !== "#" ? (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                suppressHydrationWarning
              >
                <FiExternalLink size={20} />
                Live Demo
              </motion.a>
            ) : (
              <motion.button
                onClick={onDemoClick}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title="Click to watch demo video"
                suppressHydrationWarning
              >
                <FiExternalLink size={20} />
                Watch Demo Video
              </motion.button>
            )}
          </motion.div>
        </div>

        {/* Card border glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const openVideoModal = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setTimeout(() => setCurrentVideo(""), 300);
  };

  const projects = [
    {
      title: "Sistem Informasi Parfum",
      description:
        "A comprehensive perfume information system with product management, real-time chat support, user authentication, and file upload capabilities. Built with modern full-stack technologies for seamless user experience.",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "EJS", "Multer"],
      image: "/project-parfum.png",
      github: "https://github.com/nathannail/sistem-informasi-parfum",
      demo: "#",
      videoUrl: "/parfum-demo.mp4",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" suppressHydrationWarning>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
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
            🎨 My Work
          </motion.span>

          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work showcasing various technologies and problem-solving approaches
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {projects.map((project, index) => (
              <Project3DCard
                key={index}
                project={project}
                index={index}
                onDemoClick={project.videoUrl ? () => openVideoModal(project.videoUrl!) : undefined}
              />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 rounded-lg font-medium"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            suppressHydrationWarning
          >
            <FiGithub size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideoModal}
          >
            <motion.div
              className="relative w-full max-w-5xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                suppressHydrationWarning
              >
                <FiX size={24} />
              </motion.button>

              {/* Video player */}
              <div className="relative aspect-video bg-black">
                <video
                  src={currentVideo}
                  controls
                  autoPlay
                  className="w-full h-full"
                  controlsList="nodownload"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video info */}
              <div className="p-6 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
                <h3 className="text-xl font-bold text-white mb-2">
                  Sistem Informasi Parfum - Demo Video
                </h3>
                <p className="text-gray-300 text-sm">
                  Watch the full demonstration of the perfume information system features and functionality
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
