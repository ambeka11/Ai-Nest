import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <div className="min-h-screen text-white px-4 mt-20 py-8 flex flex-col items-center gap-12 md:gap-16">
      {/* Top Center Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.6 }} // ← Triggers every time it comes into view
        className="flex flex-col gap-4 items-center text-center max-w-xl"
      >
        <p className="border uppercase border-gray-700 rounded-xl px-4 py-1 text-sm font-semibold">
          Chatgpt like chat
        </p>
        <h1 className="text-4xl font-semibold text-gray-300 leading-tight">
          Pricing Made Easy
        </h1>
        <p className="text-gray-400 text-md leading-relaxed">
          Free, GPT-4-powered alternative to ChatGPT, overcoming its limits for
          enhanced content creation and ideas.
        </p>
      </motion.div>

      {/* 3 subscription cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {["dark", "darkBlue", "darkOrange"].map((theme, index) => {
          const themeStyles = {
            dark: "bg-[#1A1A1D] border border-[#2A2A2D] shadow-[0_0_25px_#2A2A2D]",
            darkBlue:
              "bg-[#161F2D] border border-[#2B3A50] shadow-[0_0_25px_#2B3A50]",
            darkOrange:
              "bg-[#2B1F15] border border-[#443428] shadow-[0_0_25px_#443428]",
          }[theme];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
                delay: index * 0.3,
              }}
              whileHover={{ y: -6 }}
              className={`${themeStyles} rounded-2xl p-6 flex flex-col gap-4 transition-all`}
            >
              <h2 className="text-xl font-bold text-white">Pro</h2>
              <p className="text-gray-400">Access professional features</p>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold text-white">$12</span>
                <span className="text-2xl text-gray-400 line-through">$10</span>
                <span className="text-sm text-gray-500">/month</span>
              </div>
              <button className="mt-2 bg-gray-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition">
                Get Started
              </button>
              <h3 className="mt-4 font-semibold text-gray-300">Key features</h3>
              <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                <li>8,500 fast tokens resets daily</li>
                <li>25,500 rollover token bank capacity</li>
                <li>Organize with 1 collection</li>
                <li>Create private generations</li>
                <li>Up to 200 realtime generation actions</li>
                <li>Unlock enhanced quality</li>
                <li>Queue up to 5 generations</li>
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
