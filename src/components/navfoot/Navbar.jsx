import { Link } from "react-router-dom";
import {
  FaAngleDown,
  FaUserFriends,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

const Navbar = () => {
  const dropdownItems = [
    {
      icon: <FaUserFriends className="text-white/60" />,
      label: "About",
      path: "/about",
    },
    {
      icon: <FaPhoneAlt className="text-white/60" />,
      label: "Contact",
      path: "/contact",
    },
    {
      icon: <FaClock className="text-white/60" />,
      label: "Changelog",
      path: "/changelog",
    },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[70%] md:w-[70%] bg-[#ffffff0a] backdrop-blur-md border border-[#ffffff14] rounded-2xl px-6 py-2 flex justify-between items-center shadow-[0_0_40px_#ffffff0b]">
      <ul className="flex items-center gap-7 text-sm text-white/90 font-medium">
        {/* Logo */}
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

        {/* Main Links */}
        <li>
          <Link to="/" className="hover:text-white cursor-pointer transition">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/integrations"
            className="hover:text-white cursor-pointer transition"
          >
            Integrations
          </Link>
        </li>
        <li>
          <Link
            to="/pricing"
            className="hover:text-white cursor-pointer transition"
          >
            Pricing
          </Link>
        </li>

        <li className="relative group">
          <button className="flex items-center gap-1 hover:text-white transition">
            Company <FaAngleDown />
          </button>

          {/* Dropdown */}
          <div className="absolute top-8 left-0 w-52 bg-[#0c0c0c] border border-[#ffffff1a] shadow-2xl rounded-xl py-3 px-2 text-sm text-white/80 z-50 space-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            {dropdownItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-100 bg-transparent 
          hover:bg-white/5 hover:ring-1 hover:ring-white/20 
          hover:shadow-[0_0_10px_rgba(255,255,255,0.08)]"
              >
                {item.icon}
                <span className="text-white/90 font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </li>

        {/*extranal Link to Docs */}
        <li>
          <a
            href="https://ainest.framer.website/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white cursor-pointer transition"
          >
            Docs
          </a>
        </li>

        <li>
          <Link
            to="/articles"
            className="hover:text-white cursor-pointer transition"
          >
            Articles
          </Link>
        </li>
      </ul>

      {/* Right Button */}
      <button className="bg-gradient-to-r from-[#6A5BFF] to-[#9C63FF] hover:brightness-110 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-[0_0_15px_#835bff50] transition-all duration-300">
        Creation Hub
      </button>
    </nav>
  );
};

export default Navbar;
