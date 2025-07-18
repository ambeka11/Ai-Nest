import { IoIosPeople } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { BiBadgeCheck, BiAtom, BiBlanket, BiBug } from "react-icons/bi";

const items = [
  ["TodoFusion", <BiBadgeCheck />],
  ["Flexify", <BiAtom />],
  ["Agentify", <BiBlanket />],
  ["Identify", <BiBug />],
  ["Codify", <BiBug />],
  ["Nexus AI", <BiBug />],
  ["Landify", <BiBug />],
  ["Flowboard", <BiBug />],
];

export default function HomePeople() {
  return (
    <div className="py-16 w-full flex justify-center">
      <div className="max-w-[1440px] w-[73%] rounded-2xl p-12">
        {/* socials */}
        <div className="flex flex-wrap justify-between gap-8">
          {/* Card 1 */}
          <div className="flex-1 min-w-[250px]">
            <div className="inline-flex items-center justify-center text-[#9c63ff] text-4xl p-2 bg-white/5 rounded-xl border border-white/10 mb-6">
              <MdOutlineDesignServices />
            </div>
            <h1 className="text-2xl font-normal text-white mb-4">
              For creators
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Create production-quality visual assets for your projects with
              unprecedented quality, speed, and style-consistency.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex-1 min-w-[250px]">
            <div className="inline-flex items-center justify-center text-[#9c63ff] text-4xl p-2 bg-white/5 rounded-xl border border-white/10 mb-6">
              <IoIosPeople />
            </div>
            <h1 className="text-2xl font-normal text-white mb-4">For teams</h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Bring your team's best ideas to life at scale, with our intuitive
              AI-first creative suite designed for collaboration.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex-1 min-w-[250px]">
            <div className="inline-flex items-center justify-center text-[#9c63ff] text-4xl p-2 bg-white/5 rounded-xl border border-white/10 mb-6">
              <FaCode />
            </div>
            <h1 className="text-2xl font-normal text-white mb-4">
              For developers
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Experience content creation excellence with AiNest's API. With
              unmatched scalability.
            </p>
          </div>
        </div>
        {/* a lil text part */}
        <div className="flex flex-col items-center py-4 mt-24">
          <p className="text-xl"> Powering the world’s best product teams.</p>
          <p className="text-xl text-gray-400">
            From next-gen startups to established enterprises.
          </p>
        </div>
        {/* animation */}
        <div className="overflow-hidden w-full py-8">
          <div className=" flex w-max animate-scroll-loop whitespace-nowrap">
            {[...items, ...items].map(([label, icon], i) => (
              <p
                key={i}
                className="  text-gray-400 font-semibold flex items-center gap-2 text-xl  px-6"
              >
                <span className="text-2xl font-semibold">{icon}</span>
                {label}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
