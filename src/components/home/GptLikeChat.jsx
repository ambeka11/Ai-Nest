import { motion } from "framer-motion";
import { FiMic } from "react-icons/fi"; // Recording icon
const features = new Array(9).fill({
  title: "High-Quality Recording",
  description:
    "AiNest effortlessly analyzes PDFs, links, videos, extracting essential content for insightful results.",
});
const GptLikeChat = () => {
  return (
    <div className="min-h-screen text-white px-6 mt-20 py-12 flex flex-col items-center gap-12 md:gap-16">
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
          AI Conversation Partner
        </h1>
        <p className="text-gray-400 text-md leading-relaxed">
          Free, GPT-4-powered alternative to ChatGPT, overcoming its limits for
          enhanced content creation and ideas.
        </p>
      </motion.div>

      <div className="max-w-5xl w-full px-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              viewport={{ once: false, amount: 0.4 }}
              className="bg-[#0D0D12] border border-[#1A1A1E] rounded-2xl shadow-[0_0_20px_#00000044] p-6 flex flex-col gap-4"
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GptLikeChat;
