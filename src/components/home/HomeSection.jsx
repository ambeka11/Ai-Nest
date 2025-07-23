import { useEffect } from "react";
import {
  FaRegCompass,
  FaEdit,
  FaUserAlt,
  FaBookOpen,
  FaComments,
  FaPaintBrush,
  FaQuestionCircle,
  FaSyncAlt,
  FaUserCircle,
  FaEllipsisH,
  FaSearch,
} from "react-icons/fa";

export default function HomeSection() {
  useEffect(() => {
    const animateGlow = () => {
      const glow = document.getElementById("glow-ring");
      if (glow) {
        glow.animate(
          [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
          {
            duration: 30000,
            iterations: Infinity,
            easing: "linear",
          }
        );
      }
    };
    animateGlow();
  }, []);

  return (
    <div className=" flex items-center justify-center p-4 relative z-20  ">
      <div className="relative rounded-3xl overflow-hidden max-w-[1440px] w-[68%] h-[530px] bg-[#0f0f0f] shadow-2xl sm:h-[490px] ">
        {/*  */}
        <div
          id="glow-ring"
          className="absolute -inset-1 z-0 rounded-[30px] bg-gradient-to-r from-[#6a5bff] to-[#9c63ff] blur-3xl opacity-60 animate-pulse"
        ></div>

        <div className="relative z-10 flex h-full">
          <aside className="w-60 bg-[#111111] pt-3 px-6 text-white text-sm flex flex-col gap-4 border-r border-white/10">
            <div className="border-b border-white/10 pb-4">
              <div className="flex gap-1 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            <nav className="flex flex-col gap-2 text-sm">
              <h2 className="text-xl font-semibold">Ai Nest</h2>

              <button className="bg-white/10 rounded-full px-4 py-2 text-left font-medium flex items-center gap-2">
                <FaRegCompass /> Explore
              </button>
              <button className="hover:bg-white/10 rounded-md px-3 py-2 text-left flex items-center gap-2">
                <FaPaintBrush /> Realtime Canvas
              </button>
              <button className="hover:bg-white/10 rounded-md px-3 py-2 text-left flex items-center gap-2">
                <FaEdit /> Edit
              </button>
              <button className="hover:bg-white/10 rounded-md px-3 py-2 text-left flex items-center gap-2">
                <FaUserAlt /> Personalize
              </button>
              <button className="hover:bg-white/10 rounded-md px-3 py-2 text-left flex items-center gap-2">
                <FaBookOpen /> Library
              </button>
              <button className="hover:bg-white/10 rounded-md px-3 py-2 text-left flex items-center gap-2">
                <FaComments /> Chat
              </button>
              <button className="hover:bg-white/10 rounded-md px-3 py-2 text-left flex items-center gap-2">
                <FaPaintBrush /> Canvas Editor
              </button>
            </nav>

            <div className=" text-sm space-y-2 border-t border-white/10 pt-4">
              <button className="hover:underline text-white/70 flex items-center gap-2">
                <FaQuestionCircle /> Help
              </button>
              <button className="hover:underline text-white/70 flex items-center gap-2">
                <FaSyncAlt /> Updates
              </button>
              <button className="text-white/70 w-full border border-dotted border-white/20 px-2 py-1 rounded-md flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FaUserCircle /> My Account
                </span>
                <FaEllipsisH />
              </button>
            </div>
          </aside>

          <main className="flex-1 px-6 py-2 text-gray-500 bg-[#121212] flex flex-col gap-3 justify-start">
            <div className="flex justify-center border-b border-white/10 pb-2">
              <div className="bg-white/10 px-6 py-1 rounded-md text-sm border border-white/10 text-center">
                https://www.creationhub.com/workspace
              </div>
            </div>

            <div className="flex justify-between items-center pb-2">
              <div className="flex items-center bg-white/5 border border-white/10 rounded-md px-3 py-1 text-sm w-full text-white gap-2 ">
                <input
                  type="text"
                  placeholder="Type a prompt..."
                  className="bg-transparent focus:outline-none w-full placeholder:text-gray-500 "
                />
                <FaSearch className="text-white/50" />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 p-2">
              {Array.from({ length: 15 }).map((_, i) => (
                <img
                  key={i}
                  src="https://images.peopleimages.com/picture/202211/2544312-beauty-flowers-and-woman-in-studio-for-skincare-makeup-and-product-from-nature-wellness-and-leaf-cosmetics.-portrait-flower-and-girl-model-with-jungle-plant-and-zen-relax-and-peony-aesthetic-fit_400_400.jpg"
                  className="w-full h-[180px] object-cover rounded-xl shadow-inner backdrop-blur-sm"
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
