import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef, useState, useEffect } from "react";
import {
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

const Empowering = () => {
  const frameworks = [
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Vue.js", icon: <SiVuedotjs className="text-green-400" /> },
    { name: "Angular", icon: <SiAngular className="text-red-500" /> },
    { name: "Svelte", icon: <SiSvelte className="text-orange-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartCount(true);
    } else {
      setStartCount(false); // remove if you want count to run only once
    }
  }, [isInView]);

  return (
    <div className="text-white min-h-screen pt-24 px-4 py-4">
      <div className="max-w-5xl w-full mx-auto">
        <div className="my-16 gap-y-9">
          <button className="mb-8 rounded-full text-sm bg-white/5 backdrop-blur-1 px-4 py-2">
            About us
          </button>
          <h1 className="text-6xl text-gray-300 mb-4 font-light">
            Empowering <br /> Creators to Build <br /> Smarter
          </h1>
          <p className="text-white/70">
            Explore our concise blog for insightful content on tech trends,{" "}
            <br />
            innovation, and actionable insights.
          </p>
          <button className="mb-1 mt-8 rounded-lg text-sm bg-white/5 backdrop-blur-1 px-4 py-2 hover:bg-white/10">
            Contact us
          </button>
        </div>
        {/* 1 topics */}
        <div className="pt-8">
          <p className="text-gray-400 gap-3">Vision</p>
          {/* divider */}
          <div className="relative flex items-center pt-4">
            <div className="relative w-[5%] border-t-2 border-white">
              <div className="absolute top-full left-0 w-full h-8 bg-gradient-to-b from-white/5 to-transparent blur-sm"></div>
            </div>

            <div className="w-[95%] ml-3 border-t border-gray-600"></div>
          </div>
          <div className="flex gap-6 justify-between py-14 w-full">
            <motion.div
              className="flex flex-col gap-6 py-14 w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <div>
                <h1 className="text-3xl text-white">Our commitment</h1>
                <p className="text-gray-300 mt-2">
                  Shaping the future of design with seamless AI-driven <br />
                  innovation.
                </p>
              </div>
            </motion.div>
            <div className="text-gray-400 leading-8 ">
              1. Foster collaboration and teamwork. <br />
              2. Empower creativity and innovation. Simplify complex processes.{" "}
              <br />
              3. Enhance productivity and efficiency. <br />
              4. Inspire positive change and growth. <br />
              5. Build a more connected and inclusive world.
            </div>
          </div>
        </div>
        {/* 2 topics */}
        <div className="pt-8">
          <p className="text-gray-400 gap-3">Backed by</p>
          {/* 2 divider */}
          <div className="relative flex items-center pt-4">
            <div className="relative w-[5%] border-t-2 border-white">
              <div className="absolute top-full left-0 w-full h-8 bg-gradient-to-b from-white/5 to-transparent blur-sm"></div>
            </div>

            <div className="w-[95%] ml-3 border-t border-gray-600"></div>
          </div>
          <div className="flex gap-6 justify-between py-14 w-full">
            <motion.div
              className="flex flex-col gap-6 py-14 w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <div>
                <h1 className="text-3xl text-white">Driven by</h1>
                <p className="text-gray-300 mt-2">
                  Supported by cutting-edge technology and visionary <br />{" "}
                  expertise.
                </p>
              </div>
            </motion.div>
            <div className="text-gray-400 leading-8 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {frameworks.map((fw, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-xl">{fw.icon}</span>
                  <span className="text-white">{fw.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* 3 topics */}
        <div className="pt-8" ref={ref}>
          <p className="text-gray-400 gap-3">By the numbers</p>
          <div className="relative flex items-center pt-4">
            <div className="relative w-[5%] border-t-2 border-white">
              <div className="absolute top-full left-0 w-full h-8 bg-gradient-to-b from-white/5 to-transparent blur-sm"></div>
            </div>
            <div className="w-[95%] ml-3 border-t border-gray-600"></div>
          </div>

          <div className="flex gap-6 justify-between py-14 w-full">
            <motion.div
              className="flex flex-col gap-6 py-14 w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <div>
                <h1 className="text-3xl text-white">Our impact</h1>
                <p className="text-gray-300 mt-2">
                  Explore the metrics that showcase our success and commitment
                  to excellence.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 w-full max-w-xl">
              {/* Card 1 */}
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-white">
                <p className="text-2xl font-semibold">
                  {startCount ? (
                    <CountUp
                      start={0}
                      end={2024}
                      duration={1.5}
                      separator=","
                    />
                  ) : (
                    "0"
                  )}
                </p>
                <p className="text-sm text-gray-400 mt-1">Launched in</p>
              </div>

              {/* Card 2 */}
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-white">
                <p className="text-2xl font-semibold">
                  {startCount ? (
                    <CountUp
                      start={0}
                      end={44}
                      duration={1.5}
                      separator=","
                      prefix="+"
                      suffix="k"
                    />
                  ) : (
                    "0"
                  )}
                </p>
                <p className="text-sm text-gray-400 mt-1">Monthly campaigns</p>
              </div>

              {/* Card 3 */}
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-white">
                <p className="text-2xl font-semibold">
                  {startCount ? (
                    <CountUp start={0} end={4} duration={1.5} suffix="+" />
                  ) : (
                    "0"
                  )}
                </p>
                <p className="text-sm text-gray-400 mt-1">Users</p>
              </div>

              {/* Card 4 */}
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-white">
                <p className="text-2xl font-semibold">
                  {startCount ? (
                    <CountUp
                      start={0}
                      end={399}
                      duration={1.5}
                      prefix="$"
                      suffix="M"
                    />
                  ) : (
                    "$0"
                  )}
                </p>
                <p className="text-sm text-gray-400 mt-1">In total funding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empowering;
