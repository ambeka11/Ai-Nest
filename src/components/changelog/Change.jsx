import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

const changelogData = [
  {
    version: "v1.2.0",
    date: "Sept 12, 2024",
    items: [
      "Added user analytics dashboard with live charts",
      "Improved performance by 30%",
      "Fixed login edge-case on Safari",
    ],
  },
  {
    version: "v1.1.0",
    date: "Aug 5, 2024",
    items: [
      "Launched multi-language support",
      "Enhanced accessibility with ARIA tags",
    ],
  },
  {
    version: "v1.0.0",
    date: "Jul 1, 2024",
    items: ["Initial release with core features"],
  },
];

export default function Change() {
  return (
    <div className=" text-white min-h-screen px-6 mt-20 md:px-16 lg:px-[16rem] py-16 font-sans">
      <motion.h1
        className="text-5xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Changelog
      </motion.h1>

      <div className="space-y-12">
        {changelogData.map((entry, idx) => (
          <motion.div
            key={idx}
            className="border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-[0_0_20px_#ffffff10]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">{entry.version}</h2>
              <span className="text-gray-400">{entry.date}</span>
            </div>
            <ul className="text-gray-200 space-y-2 list-none marker:text-indigo-400">
              {entry.items.map((item, i2) => (
                <li key={i2} className="flex items-start gap-2">
                  <FaChevronRight className="mt-1 text-indigo-400 text-xs" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
