import React, { useState } from "react";
import { FiLink, FiVolume2, FiFileText, FiUpload } from "react-icons/fi";
import {
  FaShieldAlt,
  FaImage,
  FaArrowRight,
  FaMicrophone,
} from "react-icons/fa";

const Chatgptlike = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen text-white px-4 mt-20 py-12 flex flex-col items-center gap-12 md:gap-16">
      {/* Top Center Text */}
      <div className="flex flex-col gap-4 items-center text-center max-w-xl">
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
      </div>

      {/* Cards Row (Top 3 Cards) */}
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Card 1 */}
        <div
          className="bg-[#0D0D12] border pt-12 border-[#1A1A1E] rounded-2xl p-6 flex flex-col gap-4 h-[420px]"
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="flex items-center justify-center gap-16">
            <div className="p-2 rounded-full border border-[#2D2D32] bg-[#14141A]">
              <FiLink size={20} />
            </div>
            <div className="p-2 rounded-full border border-[#2D2D32] bg-[#14141A]">
              <FiFileText size={20} />
            </div>
            <div className="p-2 rounded-full border border-[#2D2D32] bg-[#14141A]">
              <FiUpload size={20} />
            </div>
          </div>
          <div className="p-1 flex items-center justify-center gap-16">
            <h3 className="text-md flex font-medium">Link</h3>
            <h3 className="text-md flex font-medium"> Text </h3>
            <h3 className="text-md flex font-medium">File</h3>
          </div>
          <div
            className={`transition-all duration-300 border border-[#1F1F28] rounded-lg p-3 bg-[#121217] ${
              hoveredCard === 1
                ? "text-blue-400 border-blue-600 shadow-[0_0_12px_#3b82f6]"
                : "text-gray-400"
            }`}
          >
            {hoveredCard === 1
              ? "アップロード ファイル us-ai-institute-generate… を使用してチャットを開始できます。"
              : "You can start chatting with the upload file us-ai-institute-genearte…"}
          </div>
          <h4 className="text-md font-medium pt-2">File Conversations</h4>
          <p className="text-sm text-gray-400">
            AiNest effortlessly analyzes PDFs, links, videos, extracting
            essential content for insightful results.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className={`bg-[#0D0D12] border border-[#1A1A1E] rounded-2xl p-8 pt-12 flex flex-col gap-4 h-[420px] transition-all duration-300 ${
            hoveredCard === 2 ? "shadow-[0_0_20px_#a855f7aa]" : ""
          }`}
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div
            className="grid grid-cols-4 gap-1 w-full h-[8rem] bg-[#1A1A1E] rounded-lg"
            style={{
              backgroundImage: "radial-gradient(#333 1px, transparent 0)",
              backgroundSize: "8px 8px",
            }}
          ></div>
          <div className="flex gap-3 items-center border border-[#2D2D32] bg-[#14141A] rounded-lg p-2">
            <div className="p-2 rounded-full border border-[#2D2D32] bg-[#14141A]">
              <FaShieldAlt
                size={20}
                className={
                  hoveredCard === 2 ? "text-purple-400 blur-[1px]" : ""
                }
              />
            </div>
            <h3
              className={`text-md font-semibold ${
                hoveredCard === 2 ? "text-purple-300 blur-[0.5px]" : ""
              }`}
            >
              All DATA SECURE
            </h3>
          </div>
          <h4 className="text-md font-medium">Privacy Management</h4>
          <p className="text-sm text-gray-400">
            Prioritize customer privacy and securely capture leads with AINest's
            guaranteed secure environment.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="bg-[#0D0D12] border border-[#1A1A1E] rounded-2xl p-6 flex flex-col gap-4 h-[420px] relative"
          onMouseEnter={() => setHoveredCard(3)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="flex gap-3">
            <div className="border border-[#2D2D32] bg-[#14141A] rounded-lg px-3 py-1 text-sm">
              CHATBOT PICTURE
            </div>
            <div className="border border-[#2D2D32] bg-[#14141A] rounded-lg px-3 py-1 text-sm">
              BOT NAME
            </div>
          </div>
          <div className="flex justify-center items-center h-full">
            <div className="w-24 h-24 border border-[#2D2D32] rounded-xl flex items-center justify-center relative bg-[#14141A]">
              <FaImage size={28} className="text-gray-500" />
              {hoveredCard === 3 && (
                <div className="absolute top-24 left-full ml-2 w-28 p-2 rounded-lg bg-[#1A1A2B] text-sm text-white shadow-lg animate-fadeIn border border-blue-500">
                  Avatar.jpg
                </div>
              )}
            </div>
          </div>
          <h4 className="text-md font-medium text-center">
            Chatbot Personalization
          </h4>
          <p className="text-sm text-gray-400 text-center">
            Customize your AI chatbot with logos, colors, and messages for a
            cohesive brand experience.
          </p>
        </div>
      </div>

      {/* Bottom Two Cards */}
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* First Wide Card */}
        <div
          className={`col-span-2 bg-[#0D0D12] border border-[#1A1A1E] rounded-2xl p-8 relative transition-all duration-300 ${
            hoveredCard === 4 ? "shadow-[0_0_30px_#c084fc99]" : ""
          }`}
          onMouseEnter={() => setHoveredCard(4)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Girl Image */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-pink-400 rounded-full shadow-lg">
            {hoveredCard === 4 && (
              <p className="relative ml-4 left-[100%] top-6 border border-gray-700 rounded-xl w-20 text-center text-sm">
                サクラ
              </p>
            )}
          </div>

          {/* Input Field */}
          <div
            className={`mt-20 mb-4 flex items-center border rounded-lg px-4 py-2 gap-3 transition-all duration-300 ${
              hoveredCard === 4
                ? "border-blue-100 bg-[#1a1a22] shadow-[0_0_20px_#c084fcaa]"
                : "border-[#2D2D32] bg-[#14141A]"
            }`}
          >
            <span
              className={`text-xl ${
                hoveredCard === 4 ? "text-blue-400" : "text-white"
              }`}
            >
              🈳
            </span>
            <input
              type="text"
              placeholder="We have over 30 languages"
              className={`flex-1 bg-transparent outline-none text-sm ${
                hoveredCard === 4 ? "text-blue-400" : "text-white"
              }`}
            />
            <button className="border border-[#2D2D32] rounded-full p-2 hover:bg-blue-500 transition-all">
              <FaArrowRight className="text-white" />
            </button>
          </div>

          {/* Boy Avatars */}
          <div className="flex justify-evenly gap-16 items-center mt-3">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
              {hoveredCard === 4 && (
                <p className="text-xs mt-1 border border-[#1A1A1E] px-2 py-1 rounded-md">
                  Hiroshi
                </p>
              )}
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-400 rounded-full"></div>
              {hoveredCard === 4 && (
                <p className="text-xs mt-1 border border-[#1A1A1E] px-2 py-1 rounded-md">
                  Hello
                </p>
              )}
            </div>
          </div>

          <h1 className="text-xl font-bold mt-6">Multilingual Support</h1>
          <p className="text-sm text-gray-400 mt-2">
            Reach a global audience with AINest's support for up to 30
            languages, offering multilingual capabilities.
          </p>
        </div>

        {/* Second Card */}
        <div
          className="bg-[#0D0D12] border pt-12 border-[#1A1A1E] rounded-2xl p-6 flex flex-col gap-4 h-[420px] relative overflow-hidden"
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Animated Icons */}
          <div
            className={`flex items-center justify-center gap-16 transition-all duration-300 ${
              hoveredCard === 1 ? "-translate-y-1" : "translate-y-0"
            }`}
          >
            <div className="p-2 rounded-full border border-[#2D2D32] bg-[#14141A]">
              <FiLink size={20} />
            </div>
            <div className="p-2 rounded-full border border-[#2D2D32] bg-[#14141A]">
              <FiFileText size={20} />
            </div>
            <div className="p-2 rounded-full border border-[#2D2D32] bg-[#14141A]">
              <FiUpload size={20} />
            </div>
          </div>

          {/* Icon Labels + Generate Above Input */}
          <div
            className={`p-1 flex flex-col items-center justify-center transition-all duration-300 ${
              hoveredCard === 1 ? "-translate-y-1" : "translate-y-0"
            }`}
          >
            <div className="flex gap-14">
              <h3 className="text-md flex font-medium">Link</h3>
              <h3 className="text-md flex font-medium"> Text </h3>
              <h3 className="text-md flex font-medium">File</h3>
            </div>

            {/* Generate Animation */}
            <div
              className={`mt-6 transition-all duration-500 ease-in-out ${
                hoveredCard === 1
                  ? "opacity-100 -translate-y-1"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold bg-[#14141A] px-3 py-1 border border-blue-600 rounded-full shadow-[0_0_12px_#3b82f6]">
                <FiVolume2 className="text-blue-400" />
                Generate
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div
            className={`transition-all duration-300 border rounded-lg p-3 ${
              hoveredCard === 1
                ? "text-blue-400 border-blue-600 shadow-[0_0_12px_#3b82f6] bg-[#1A1A24]"
                : "text-gray-400 border-[#1F1F28] bg-[#121217]"
            }`}
          >
            {hoveredCard === 1
              ? "アップロード ファイル us-ai-institute-generate… を使用してチャットを開始できます。"
              : "You can start chatting with the upload file us-ai-institute-genearte…"}
          </div>

          <h4 className="text-md font-medium">File Conversations</h4>
          <p className="text-sm text-gray-400">
            AiNest effortlessly analyzes PDFs, links, videos, extracting
            essential content for insightful results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chatgptlike;
