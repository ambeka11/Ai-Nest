import { motion } from "framer-motion";

export default function Footer() {
  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-[#0A0A0D] mb-5 text-gray-400 px-6 pt-24 pb-14 border border-[#1a1a1a] rounded-2xl h-full max-w-5xl mx-auto mt-16">
      {/* top */}
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="text-center flex flex-col items-center gap-4"
      >
        <h3 className="text-white leading-tight text-5xl font-semibold">
          Join our newsletter
        </h3>
        <p className="text-md text-gray-300 max-w-lg">
          Join our newsletter for exclusive insights, announcements, and special
          offers delivered directly to your inbox.
        </p>
        <div className="flex w-full max-w-md items-center p-1 bg-[#161619] rounded-lg overflow-hidden mt-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
          />
          <button className="px-4 py-2 border-l p-4 text-white text-sm rounded-lg border-gray-700">
            Subscribe
          </button>
        </div>
      </motion.div>

      {/* separator line */}
      <div className="max-w-5xl border-b border-gray-800 mt-20 mb-20"></div>

      {/* bottom  */}
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="mt-12 grid h-full grid-cols-1 md:grid-cols-4 gap-10"
      >
        <div className="md:col-span-1 flex flex-col gap-2">
          <h2 className="text-white text-xl font-bold">CreationHub</h2>
          <div>
            <p className="text-sm mt-[6rem] w-[16rem] text-gray-400">
              © 2025 AINest INC. All rights reserved.
            </p>
          </div>
        </div>

        {/* Product */}
        <div className="flex ml-12 flex-col gap-3">
          <h4 className=" font-semibold text-sm mb-1">Product</h4>
          <a href="#" className="text-sm text-white">
            Integrations
          </a>
          <a href="#" className="text-sm text-white">
            Pricing
          </a>
        </div>

        {/* developers */}
        <div className="flex flex-col gap-3">
          <a href="#" className="text-sm hover:text-white">
            Developers
          </a>
          <a href="#" className="text-sm text-white">
            Docs
          </a>
          <a href="#" className="text-sm text-white">
            Discord server
          </a>
          <a href="#" className="text-sm text-white">
            Changelog
          </a>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-sm mb-1">Company</h4>
          <a href="#" className="text-sm text-white">
            About
          </a>
          <a href="#" className="text-sm text-white">
            Articles
          </a>
          <a href="#" className="text-sm text-white">
            Contact
          </a>
          <a href="#" className="text-sm text-white">
            Privacy Policy
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
