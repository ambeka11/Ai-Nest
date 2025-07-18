import {
  FiHelpCircle,
  FiImage,
  FiMic,
  FiFileText,
  FiArrowUp,
} from "react-icons/fi";

const AiDiscoveryFrontiers = () => {
  return (
    <div className=" text-white min-h-screen flex items-center justify-center px-4 py-4">
      <div className="flex flex-col md:flex-row items-center max-w-5xl w-full gap-16">
        {/* Left Panel */}
        <div className="group bg-[#0D0D12] rounded-2xl border-2 border-[#1A1A1E] p-16 w-full md:w-2/4 backdrop-blur-md transition-all duration-300 overflow-hidden relative">
          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              {
                icon: <FiHelpCircle size={24} />,
                label: ["Ask complex", "questions"],
                highlightOnGroupHover: true,
              },
              {
                icon: <FiImage size={24} />,
                label: ["Create digital", "artwork"],
              },
              {
                icon: <FiMic size={24} />,
                label: ["Give voice", "commands"],
              },
              {
                icon: <FiFileText size={24} />,
                label: ["Generate prof", "content"],
              },
            ].map(({ icon, label, highlightOnGroupHover }, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-3 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 text-base ${
                    highlightOnGroupHover
                      ? "bg-[#101014] border-[#2D2D32] text-[#C9C9D1] group-hover:bg-[#7C5CFF] group-hover:text-white group-hover:border-[#7C5CFF]"
                      : "bg-[#101014] border-[#2D2D32] text-[#C9C9D1] group-hover:text-white"
                  }`}
                >
                  {icon}
                </div>
                <div
                  className={`text-sm leading-tight font-normal transition-all duration-300 ${
                    highlightOnGroupHover
                      ? "text-[#A0A0A6] group-hover:text-white group-hover:font-semibold"
                      : "text-[#A0A0A6] group-hover:text-white"
                  }`}
                >
                  <p>{label[0]}</p>
                  <p>{label[1]}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div className="relative pt-4 h-20">
            {/* Input field */}
            <input
              type="text"
              placeholder="Type a prompt..."
              className="w-full h-full bg-[#0D0D12] border-2 border-[#2D2D32] text-[#C9C9D1] placeholder-[#5C5C66] py-6 px-9 pr-20 rounded-xl text-sm outline-none transition-all duration-300
      group-hover:ring-2 group-hover:ring-[#7C5CFF]/60
      group-hover:shadow-[0_0_30px_#7C5CFF33]
      group-hover:placeholder-transparent"
            />

            {/* Hover text inside input */}
            <div className="pointer-events-none absolute max-w-[16rem] left-9 top-[40%] translate-y-4 opacity-0 text-sm font-medium text-white transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
              Who won the Academy for Best Original Song in the year 2024
            </div>

            {/* Animated arrow button */}
            <button className="absolute right-3 top-[60%] -translate-y-1/2 group-hover:-translate-y-[65%] bg-[#1E1E2A] border border-[#2D2D32] rounded-md p-2 text-white transition-all duration-500 ease-in-out group-hover:shadow-[0_0_15px_#7C5CFF55]">
              <FiArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 text-left">
          <p className="text-[#6F7EFF] text-sm font-normal mb-3">
            AI Discovery Frontiers
          </p>
          <h1 className="text-white text-4xl font-light leading-tight mb-4">
            Emerging Frontiers in AI <br /> Exploration
          </h1>
          <p className="text-[#A0A0A6] text-base font-normal leading-relaxed">
            Embark on a journey into the ever-expanding world of artificial
            intelligence exploration. Discover the latest advancements and
            breakthroughs shaping the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AiDiscoveryFrontiers;
