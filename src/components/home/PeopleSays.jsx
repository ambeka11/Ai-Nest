import { motion } from "framer-motion";
import { useState } from "react";
import { FiMic } from "react-icons/fi"; // Recording icon

const features = new Array(9).fill({
  title: "High-Quality Recording",
  description:
    "AiNest effortlessly analyzes PDFs, links, videos, extracting essential content for insightful results.",
});

const PeopleSays = () => {
  const [hoveredColumn, setHoveredColumn] = useState(null);

  // Break into 3 columns
  const columns = [[], [], []];
  features.forEach((item, index) => {
    columns[index % 3].push(item);
  });

  // Scroll animation
  const scrollVariants = (direction) => ({
    animate: {
      y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        duration: 12,
        ease: "linear",
        repeat: Infinity,
      },
    },
  });

  return (
    <div className="min-h-screen text-white px-4 mt-20 py-12 flex flex-col items-center gap-12 md:gap-16">
      {/* Top Center Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.6 }} // ← Triggers every time it comes into view
        className="flex flex-col gap-4 items-center text-center max-w-xl"
      >
        <p className="text-gray-400 border border-gray-700 p-2 rounded-full">
          Our Customers
        </p>
        <h1 className="text-4xl font-semibold text-gray-300 leading-tight">
          What people are saying
        </h1>
      </motion.div>
      {/* 9 cards */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-hidden h-[540px]">
          {columns.map((colItems, colIndex) => {
            const dir = colIndex === 1 ? "down" : "up";

            return (
              <motion.div
                key={colIndex}
                onMouseEnter={() => setHoveredColumn(colIndex)}
                onMouseLeave={() => setHoveredColumn(null)}
                variants={scrollVariants(dir)}
                animate={hoveredColumn === colIndex ? "paused" : "animate"}
                className="flex flex-col gap-6"
              >
                {[...colItems, ...colItems].map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#0D0D12] border border-[#1A1A1E] rounded-2xl shadow-[0_0_20px_#00000044] p-6 flex flex-col gap-4 w-full"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <div className="p-3 rounded-full border border-[#2D2D32] bg-[#14141A]">
                        <FiMic className="text-blue-400 text-xl" />
                      </div>
                      <h1 className="text-lg font-semibold text-white">
                        {item.title}
                      </h1>
                    </div>
                    <p className="text-sm text-center text-gray-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PeopleSays;
