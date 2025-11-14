"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";

interface DeviceSelectorProps {
  onSelect: (device: "mobile" | "desktop") => void;
}

export default function DeviceSelector({ onSelect }: DeviceSelectorProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already selected
    const savedDevice = localStorage.getItem("devicePreference");
    if (savedDevice) {
      onSelect(savedDevice as "mobile" | "desktop");
    } else {
      setIsVisible(true);
    }
  }, [onSelect]);

  const handleSelect = (device: "mobile" | "desktop") => {
    localStorage.setItem("devicePreference", device);
    setIsVisible(false);
    onSelect(device);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative max-w-4xl w-full mx-4"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            {/* Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Choose Your Experience
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Select how you&apos;d like to view my portfolio
              </motion.p>
            </motion.div>

            {/* Device Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mobile Option */}
              <motion.button
                onClick={() => handleSelect("mobile")}
                className="group relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center space-y-6">
                  {/* Icon */}
                  <motion.div
                    className="w-32 h-32 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center"
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Smartphone className="w-16 h-16 text-white" strokeWidth={1.5} />
                  </motion.div>

                  {/* Text */}
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Mobile View
                    </h3>
                    <p className="text-white/80 text-sm">
                      Optimized for phones and tablets
                    </p>
                  </div>

                  {/* Features */}
                  <div className="w-full space-y-2">
                    {["Vertical Layout", "Touch Optimized", "Compact Design"].map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 text-white/90 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white text-xl">→</span>
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.button>

              {/* Desktop Option */}
              <motion.button
                onClick={() => handleSelect("desktop")}
                className="group relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-pink-600 to-orange-600"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center space-y-6">
                  {/* Icon */}
                  <motion.div
                    className="w-32 h-32 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center"
                    whileHover={{ rotate: [0, 5, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Monitor className="w-16 h-16 text-white" strokeWidth={1.5} />
                  </motion.div>

                  {/* Text */}
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Desktop View
                    </h3>
                    <p className="text-white/80 text-sm">
                      Full experience for laptops and PCs
                    </p>
                  </div>

                  {/* Features */}
                  <div className="w-full space-y-2">
                    {["Wide Layout", "More Details", "Enhanced Animations"].map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 text-white/90 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white text-xl">→</span>
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -bottom-12 -left-12 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.button>
            </div>

            {/* Footer hint */}
            <motion.p
              className="text-center text-gray-400 text-sm mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              You can change this preference anytime by refreshing the page
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
