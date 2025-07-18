import React, { useEffect, useState, useRef } from "react";

const HomeMasterpieces = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // If you want animation to run again on re-entry:
          setIsVisible(false);
        }
      },
      { threshold: 0.5 } // 50% visible triggers animation
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div className=" text-white flex items-center justify-center px-4 py-1">
      <div className="flex flex-col md:flex-row items-center max-w-5xl w-full gap-16">
        <div className="md:w-1/2 text-left">
          <p className="text-orange-300 text-sm font-normal mb-3">
            AI's Artistry Unleashed
          </p>
          <h1 className="text-white text-4xl font-light leading-tight mb-4">
            Masterpieces Forged by AI Brilliance
          </h1>
          <p className="text-[#A0A0A6] text-base font-normal leading-relaxed">
            Elevate your visuals with AiNest's expertise in creating captivating
            digital AI art for your social media and digital campaigns.
          </p>
        </div>

        {/* right side  */}
        <div
          ref={containerRef}
          className="bg-[#0D0D12]/80 rounded-2xl border border-[#1a1a1e] p-8 w-full md:w-2/4 backdrop-blur-xl transition-all duration-300 overflow-hidden"
        >
          <div className="bg-[#1A1A1E] rounded-xl border border-[#2D2D32] p-4">
            <div className="flex gap-4 mb-4">
              <img
                src="https://img.freepik.com/premium-photo/3d-animation-character-cartoon_113255-10825.jpg"
                alt="3D image of a boy"
                className={`w-1/2 h-auto rounded-md object-cover ${
                  isVisible ? "animate-slideUpFast" : ""
                }`}
              />
              <img
                src="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/26409476/2024/12/12/07dda15b-352e-4b39-b656-8843205c481b1733997303738-Bewakoof-Air-10-Men-Oversized-Windcheater-Jacket-83817339973-1.jpg"
                alt="Real photo"
                className={`w-1/2 h-auto rounded-md object-cover ${
                  isVisible ? "animate-slideUpSlow" : ""
                }`}
              />
            </div>
          </div>
          {/* generate */}
          <div className="flex justify-between items-center px-8 py-3 bg-white/10 backdrop-blur-4xl border border-white/10 rounded-2xl shadow-lg">
            <p className="text-white font-medium">Generate image</p>
            <button className="flex items-center gap-2 px-8 py-2 bg-[#0D0D12] text-gray-100 rounded-md border border-[#2D2D32] hover:shadow-[0_0_10px_#7C5CFF55] transition-all duration-300">
              <span className="text-sm">⚡</span>
              <span className="text-sm font-medium">Generate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMasterpieces;
