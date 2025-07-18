import { useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaUserFriends,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[70%] md:w-[70%] bg-[#ffffff0a] backdrop-blur-md border border-[#ffffff14] rounded-2xl px-6 py-2 flex justify-between items-center shadow-[0_0_40px_#ffffff0b]">
      <ul className="flex items-center gap-7 text-sm text-white/90 font-medium">
        <li className="relative group">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-[#6A5BFF] to-[#9C63FF] text-white font-bold px-5 py-2 rounded-full transition duration-300 cursor-pointer">
              CH
            </div>
            <span className="overflow-hidden w-0 group-hover:w-[110px] transition-all duration-500 ml-4 whitespace-nowrap text-white font-medium uppercase">
              Creation Hub
            </span>
          </div>
        </li>

        <li className="hover:text-white cursor-pointer transition">Home</li>
        <li className="hover:text-white cursor-pointer transition">
          Integrations
        </li>
        <li className="hover:text-white cursor-pointer transition">Pricing</li>

        <li className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 hover:text-white transition"
          >
            Company {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
          </button>

          {dropdownOpen && (
            <div className="absolute top-9 left-0 w-52 bg-[#0c0c0c] border border-[#ffffff1a] shadow-2xl rounded-xl py-3 px-2 text-sm text-white/80 z-50 space-y-2">
              {[
                {
                  icon: <FaUserFriends className="text-white/60" />,
                  label: "About",
                },
                {
                  icon: <FaPhoneAlt className="text-white/60" />,
                  label: "Contact",
                },
                {
                  icon: <FaClock className="text-white/60" />,
                  label: "Changelog",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 bg-transparent 
                  hover:bg-white/5 hover:ring-1 hover:ring-white/20 
                  hover:shadow-[0_0_10px_rgba(255,255,255,0.08)]"
                >
                  {item.icon}
                  <span className="text-white/90 font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </li>

        <li className="hover:text-white cursor-pointer transition">Docs</li>
        <li className="hover:text-white cursor-pointer transition">Articles</li>
      </ul>

      <button className="bg-gradient-to-r from-[#6A5BFF] to-[#9C63FF] hover:brightness-110 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-[0_0_15px_#835bff50] transition-all duration-300">
        Creation Hub
      </button>
    </nav>
  );
};

export default Navbar;
