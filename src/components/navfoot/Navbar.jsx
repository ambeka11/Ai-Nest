import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaAngleDown,
  FaUserFriends,
  FaPhoneAlt,
  FaClock,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

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
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-[70%] bg-[#ffffff0a] backdrop-blur-md border border-[#ffffff14] rounded-2xl px-6 py-2 shadow-[0_0_40px_#ffffff0b]">
      <div className="flex justify-between items-center">
        {/* Logo and animated Creation Hub text */}
        <div className="flex items-center group  max-w-[220px]">
          <div className="bg-gradient-to-r from-[#6A5BFF] to-[#9C63FF] text-white font-bold px-5 py-2 rounded-full transition duration-300 cursor-pointer shrink-0">
            CH
          </div>
          <span
            className="
              ml-4 whitespace-nowrap
              text-white font-medium uppercase
              max-w-0 group-hover:max-w-[170px]
              overflow-hidden
              transition-[max-width] duration-500 ease-in-out
              block
            "
          >
            Creation Hub
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-7 text-sm text-white/90 font-medium">
          <li>
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/integrations" className="hover:text-white transition">
              Integrations
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="hover:text-white transition">
              Pricing
            </Link>
          </li>
          {/* Desktop Company Dropdown */}
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-white transition">
              Company <FaAngleDown />
            </button>
            <div className="absolute top-8 left-0 w-52 bg-[#0c0c0c] border border-[#ffffff1a] shadow-2xl rounded-xl py-3 px-2 text-sm text-white/80 z-50 space-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              {dropdownItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-white/5 hover:ring-1 hover:ring-white/20 hover:shadow-[0_0_10px_rgba(255,255,255,0.08)]"
                >
                  {item.icon}
                  <span className="text-white/90 font-medium">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </li>
          <li>
            <a
              href="https://ainest.framer.website/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Docs
            </a>
          </li>
          <li>
            <Link to="/articles" className="hover:text-white transition">
              Articles
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-xl border border-white/20 p-2 rounded-lg shadow-[0_0_10px_#ffffff40]"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile fullscreen menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-0 left-0 bg-[#0c0c0cf2] z-40 p-6 pt-24 w-full h-screen text-white shadow-[0_0_30px_#ffffff25] overflow-auto text-sm flex flex-col gap-4">
          <Link
            to="/"
            className="hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/integrations"
            className="hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Integrations
          </Link>
          <Link
            to="/pricing"
            className="hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>

          {/* Mobile Company Dropdown */}
          <div>
            <button
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}
              className="flex items-center justify-between w-full hover:text-white"
            >
              <span>Company</span>
              <FaAngleDown
                className={`transition-transform ${
                  isCompanyOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isCompanyOpen && (
              <div className="mt-2 pl-4 space-y-2">
                {dropdownItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 hover:text-white"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://ainest.framer.website/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Docs
          </a>
          <Link
            to="/articles"
            className="hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Articles
          </Link>

          <button className="w-full bg-gradient-to-r from-[#6A5BFF] to-[#9C63FF] text-white px-5 py-2 mt-4 rounded-full font-semibold shadow-[0_0_10px_#835bff50]">
            Creation Hub
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
