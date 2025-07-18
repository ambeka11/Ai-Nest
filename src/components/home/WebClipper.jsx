import React from "react";
import { FiMail, FiTablet, FiBook } from "react-icons/fi";
import { motion } from "framer-motion";

const WebClipper = () => {
  // Animation settings
  const slideUpAnimation = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Top Section - Animated when in view */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        variants={slideUpAnimation}
        className="text-center mb-16"
      >
        <h1 className="text-[32px] font-medium text-gray-300 mb-4">
          AiNest as Your Exceptional Web Clipper
        </h1>
        <p className="text-lg text-gray-400 mx-auto max-w-2xl">
          Unleash unparalleled efficiency as AiNest transforms the mundane task
          of web clipping into an extraordinary journey.
        </p>
      </motion.div>

      {/* Three Column Features - Animated when in view */}
      <div className="grid grid-cols-1 pt-8 md:grid-cols-3 gap-8">
        {/* Newsletter Feature */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={slideUpAnimation}
          className="relative"
        >
          <div className="absolute top-[-32px] left-0 w-[90%] flex">
            <div className="w-8 h-[2px] bg-white"></div>
            <div className="flex-1 h-[2px] bg-gray-700"></div>
          </div>
          <div className="flex flex-col text-left w-[90%]">
            <div className="text-white text-2xl mb-4">
              <FiMail />
            </div>
            <h2 className="text-xl font-medium text-white mb-2">Newsletters</h2>
            <p className="text-gray-400">
              Save newsletters effortlessly, no more forwarding messy emails.
            </p>
          </div>
        </motion.div>

        {/* Kindle Feature */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={slideUpAnimation}
          className="relative"
        >
          <div className="absolute top-[-32px] left-0 w-[90%] flex">
            <div className="w-8 h-[2px] bg-white"></div>
            <div className="flex-1 h-[2px] bg-gray-700"></div>
          </div>
          <div className="flex flex-col text-left w-[90%]">
            <div className="text-white text-2xl mb-4">
              <FiBook />
            </div>
            <h2 className="text-xl font-medium text-white mb-2">Kindle</h2>
            <p className="text-gray-400">
              Automatically sync your highlights and notes from your Kindle.
            </p>
          </div>
        </motion.div>

        {/* Mobile Feature */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={slideUpAnimation}
          className="relative"
        >
          <div className="absolute top-[-32px] left-0 w-[90%] flex">
            <div className="w-8 h-[2px] bg-white"></div>
            <div className="flex-1 h-[2px] bg-gray-700"></div>
          </div>
          <div className="flex flex-col text-left w-[90%]">
            <div className="text-white text-2xl mb-4">
              <FiTablet />
            </div>
            <h2 className="text-xl font-medium text-white mb-2">Mobile</h2>
            <p className="text-gray-400">
              Capture ideas the instant you get them, whether you are on a
              computer.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebClipper;
