import {
  FiArrowUp,
  FiHelpCircle,
  FiImage,
  FiMic,
  FiFileText,
} from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiAngular,
  SiSvelte,
  SiNuxtdotjs,
  SiBootstrap,
  SiRedux,
  SiTypescript,
  SiJquery,
  SiBackbone,
  SiNestjs,
} from "react-icons/si";
import { useState } from "react";
import { FiMail, FiTablet, FiBook } from "react-icons/fi";
import { motion } from "framer-motion";

const defaultKeywords = [
  { keyword: "Climate change", volume: "107k", kd: "96", traffic: "6.7k" },
  { keyword: "Global warning", volume: "45k", kd: "89", traffic: "1.2k" },
];

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
const NoCodeChatbot = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="min-h-screen text-white px-4 py-4 flex flex-col items-center gap-12 md:gap-16">
      {/* Top Center Text */}
      <div className="flex flex-col gap-4 items-center text-center max-w-xl">
        <p className="border border-gray-700 rounded-xl px-4 py-1 text-sm font-semibold">
          No code AI chatbot builder
        </p>
        <h1 className="text-4xl font-semibold text-gray-300 leading-tight">
          Build no-code AI chatbots
        </h1>
        <p className="text-gray-400 text-md leading-relaxed">
          Train ChatGPT on your own data and build smarter AI chatbots for your
          website. Make customer interactions your strong suit using Nest.
        </p>
      </div>

      {/* Cards Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Left Card */}
        <div
          className="bg-[#0D0D12] rounded-2xl border-2 border-[#1A1A1E] p-10 w-full md:w-[520px] h-[420px] backdrop-blur-md transition-all duration-300"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {[
              {
                icon: <FiHelpCircle size={24} />,
                label: ["Ask complex", "questions"],
                glow: true,
              },
              {
                icon: <FiImage size={24} />,
                label: ["Create digital", "artwork"],
                glow: false,
              },
              {
                icon: <FiMic size={24} />,
                label: ["Give voice", "commands"],
                glow: false,
              },
              {
                icon: <FiFileText size={24} />,
                label: ["Generate prof", "content"],
                glow: false,
              },
            ].map(({ icon, label, glow }, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-3"
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300
                    ${
                      glow && isHovered
                        ? "bg-[#7C5CFF] text-white border-[#7C5CFF] shadow-[0_0_20px_#7C5CFFAA]"
                        : "bg-[#101014] text-[#C9C9D1] border-[#2D2D32]"
                    }
                  `}
                >
                  {icon}
                </div>
                <div
                  className={`text-sm leading-tight font-normal ${
                    glow && isHovered
                      ? "text-white font-semibold"
                      : "text-[#A0A0A6]"
                  }`}
                >
                  <p>{label[0]}</p>
                  <p>{label[1]}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="space-y-1 mb-6">
            <div className="grid grid-cols-4 px-2 mb-2 font-medium text-white">
              <span>Keyword</span>
              <span>Volume</span>
              <span>KD</span>
              <span>Traffic</span>
            </div>
            {defaultKeywords.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-4 px-2 py-1 text-sm text-zinc-400"
              >
                <span>{item.keyword}</span>
                <span>{item.volume}</span>
                <span>{item.kd}</span>
                <span>{item.traffic}</span>
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="relative pt-4 h-20">
            <input
              type="text"
              placeholder="Type a prompt..."
              className={`w-full h-full bg-[#0D0D12] border-2 border-[#2D2D32] text-[#C9C9D1] placeholder-[#5C5C66] py-6 px-9 pr-20 rounded-xl text-sm outline-none transition-all duration-300 ${
                isHovered
                  ? "ring-2 ring-[#7C5CFF]/60 shadow-[0_0_25px_#7C5CFF33]"
                  : ""
              }`}
            />
            <button
              className={`absolute right-3 top-[60%] -translate-y-1/2 bg-[#1E1E2A] border border-[#2D2D32] rounded-md p-2 text-white transition-all duration-500 ease-in-out ${
                isHovered ? "shadow-[0_0_12px_#7C5CFF55]" : ""
              }`}
            >
              <FiArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div
          className="group relative bg-[#0B0B0F] rounded-2xl border-2 border-[#1A1A1E] p-2 w-full md:w-[460px] h-[420px] flex items-center justify-center overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Hover Circles */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            {[100, 160, 240, 340].map((size, i) => (
              <div
                key={i}
                style={{ width: size, height: size }}
                className={`absolute rounded-full border border-[#7C5CFF55] transition-all duration-300 ease-out
                  ${
                    isHovered ? "opacity-30 scale-100" : "opacity-10 scale-50"
                  }`}
              />
            ))}
          </div>

          {/* Foreground Icons */}
          <div className="z-20 grid grid-cols-5 gap-8">
            {[
              SiReact,
              SiNextdotjs,
              SiVuedotjs,
              SiTailwindcss,
              SiAngular,
              SiSvelte,
              SiNuxtdotjs,
              SiBootstrap,
              SiRedux,
              SiTypescript,
              SiJquery,
              SiBackbone,
              SiNestjs,
              SiRedux,
              SiTailwindcss,
            ].map((Icon, i) => (
              <div
                key={i}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-[#2D2D32] bg-[#14141A] text-[#C9C9D1]"
              >
                <Icon size={22} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Three Column Features - Animated when in view */}
      <div className="grid grid-cols-1 mt-10 w-[65%] pt-8 md:grid-cols-3 gap-8">
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

export default NoCodeChatbot;
