import { motion } from "framer-motion";
import { FiMic } from "react-icons/fi"; // Recording icon
import bg from "../../assets/bg.jpeg";

const UseAinest = () => {
  return (
    <div className="min-h-screen text-white px-4 mt-20 py-12 flex flex-col items-center gap-12 md:gap-16">
      {/* Top Center Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.6 }} // ← Triggers every time it comes into view
        className="flex flex-col gap-4 items-center text-center max-w-xl"
      >
        ]
        <h1 className="text-4xl font-semibold text-gray-300 leading-tight">
          Use AINest today for
        </h1>
        <p className="text-gray-400 text-md leading-relaxed">
          Free, GPT-4-powered alternative to ChatGPT, overcoming its limits for
          enhanced content creation and ideas.
        </p>
      </motion.div>

      {/* a lil content */}
      <div className="flex gap-16 border bg-gray-950 border-gray-600 p-3 rounded-full items-center justify-center w-[35%]">
        <p className="flex gap-3">
          <span>
            {" "}
            <FiMic className="text-blue-400 text-xl" />
          </span>
          Wallpaper
        </p>
        <p className="flex gap-3">
          <span>
            {" "}
            <FiMic className="text-blue-400 text-xl" />
          </span>
          Ai Voice
        </p>
        <p className="flex gap-3">
          <span>
            {" "}
            <FiMic className="text-blue-400 text-xl" />
          </span>
          AI Image
        </p>
      </div>

      <img className="h-[50%] w-[67%] " src={bg} alt="a image" />
    </div>
  );
};

export default UseAinest;
