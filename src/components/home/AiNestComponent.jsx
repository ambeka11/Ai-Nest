import React, { useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const defaultKeywords = [
  { keyword: "Climate change", volume: "107k", kd: "96", traffic: "6.7k" },
  { keyword: "Global warning", volume: "45k", kd: "89", traffic: "1.2k" },
];

const hoverKeywords = [
  { keyword: "Climate Crisis", volume: "59k", kd: "109", traffic: "8.9k" },
  {
    keyword: "Environmental Threats",
    volume: "88k",
    kd: "79",
    traffic: "3.2k",
  },
];

const AiNestComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen text-white px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-16">
      {/* Left Section */}
      <div
        className="w-[35%] p-6 rounded-2xl bg-[#0D0D12] border border-gray-700 relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex justify-center mb-6">
          <button className="bg-[#1e1e2a] px-6 py-2 rounded-xl text-sm">
            ENTER A TOPIC
          </button>
        </div>

        {/* Input */}
        <div className="relative mb-8 transition-all duration-300">
          <input
            type="text"
            value={isHovered ? "Earth" : ""}
            placeholder="Type a prompt..."
            readOnly
            className={`w-full px-5 py-4 text-white rounded-md border outline-none transition-all duration-300 
      ${
        isHovered
          ? "bg-[#161622] border-violet-400 shadow-[inset_0_0_8px_#8B5CF6,0_0_8px_#4c1d95]"
          : "bg-[#0D0D12] border-gray-700"
      }`}
          />
          <button
            className={`absolute right-2 top-2.5 p-2 rounded border transition-all duration-300 
      ${
        isHovered
          ? "border-violet-800 text-white shadow-[0_0_6px_#7c3aed]"
          : "border-gray-700 text-gray-500"
      }`}
          >
            <FiArrowUp size={16} />
          </button>
        </div>

        {/* Table Headers */}
        <div className="grid grid-cols-4 px-2 mb-2 text-white font-medium">
          <span className="text-white">Keyword</span>
          <span>Volume</span>
          <span>KD</span>
          <span>Traffic</span>
        </div>

        <div className="relative h-[120px] overflow-hidden">
          {/* Default*/}
          <div
            className={`absolute top-[10%] left-0 right-0 transition-all duration-500 ease-in-out ${
              isHovered
                ? "-translate-y-full opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
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

          {/* Hovered */}
          <div
            className={`absolute top-[70%] left-0 right-0 transition-all duration-500 ease-in-out ${
              isHovered
                ? "translate-y-[-100%] opacity-100"
                : "translate-y-0 opacity-0"
            }`}
          >
            {hoverKeywords.map((item, idx) => (
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
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[30%]">
        <h4 className="text-pink-300 mb-2">Creativity Unlocked</h4>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Unlock the Power of <span className="text-white">Words</span>
          <br />
          with <span className="text-white">AI Nest</span>
        </h1>
        <p className="text-zinc-400 leading-relaxed">
          Elevate your website copywriting skills to unprecedented heights with
          AiNest. This innovative tool not only enhances your proficiency but
          also instills the confidence to extend your capabilities by offering
          top-notch copywriting as a service.
        </p>
      </div>
    </div>
  );
};

export default AiNestComponent;
