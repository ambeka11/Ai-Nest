export default function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-center text-center px-4  text-white pt-32 pb-20">
      <p className="text-xs sm:text-sm text-white/70 border border-white/10 backdrop-blur-md px-4 py-1 rounded-full mb-4">
        Our AI generates support at all times.
      </p>

      <h1 className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] font-bold leading-tight text-white">
        Smarter Design, Seamless
      </h1>

      <h1 className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] font-bold mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#8aa9ff] to-[#b18eff]">
        Automation
      </h1>

      <p className="text-white/70 max-w-xl mt-2 text-base sm:text-lg">
        Streamline your creative process effortlessly with AiNest’s intelligent
        design tools.
      </p>

      <div className="mt-4 flex items-center gap-6">
        <button className="bg-gradient-to-r from-[#6A5BFF] to-[#9C63FF] hover:brightness-110 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-[0_0_20px_#835bff50] transition-all duration-300">
          Get Started
        </button>
        <button className="text-white/80 hover:text-white transition font-medium text-sm">
          Developer API
        </button>
      </div>
    </section>
  );
}
