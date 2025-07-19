import { FaEnvelope, FaPhone } from "react-icons/fa";

const ContactSupport = () => {
  return (
    <div className="text-white min-h-screen pt-24 px-4 mt-20 py-4">
      <div className="max-w-5xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            <button className="px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_10px_#ffffff22] text-white text-sm font-medium">
              ⚡ Contact support team
            </button>

            <h1 className="text-4xl font-bold leading-snug">
              Get in touch <br />
              how can we help
            </h1>

            <p className="text-gray-400 text-lg">
              Experiencing licensing, billing, or technical challenges?
              Interested in providing feedback? Seeking information about our
              pricing plan?
              <br />
              Feel free to reach out to us.
            </p>

            <div className="grid sm:grid-cols-2 gap-10 pt-10">
              {/* Email */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-xl shadow-[0_0_10px_#ffffff22]">
                  <FaEnvelope />
                </div>
                <h3 className="text-lg font-semibold">
                  Get in Touch via Email
                </h3>
                <p className="text-gray-400 text-sm">
                  Reach us anytime at our email address for inquiries and
                  support.
                </p>
                <p className="text-sm text-white cursor-pointer">
                  Send an email →
                </p>
              </div>

              {/* Call */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-xl shadow-[0_0_10px_#ffffff22]">
                  <FaPhone />
                </div>
                <h3 className="text-lg font-semibold">Call Us</h3>
                <p className="text-gray-400 text-sm">
                  Speak with us directly for quick assistance.
                </p>
                <p className="text-sm text-white cursor-pointer">Call us →</p>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-md shadow-[0_0_20px_#ffffff1a] space-y-6">
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Your name</label>
              <input
                type="text"
                placeholder="Jane Smith"
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white/30 shadow-[0_0_8px_#ffffff1a]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                placeholder="jane@framer.com"
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white/30 shadow-[0_0_8px_#ffffff1a]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                placeholder="Write here..."
                rows={5}
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white/30 shadow-[0_0_8px_#ffffff1a]"
              ></textarea>
            </div>

            <button className="w-full bg-white/5 border border-white/10 rounded-xl py-3 text-white font-semibold hover:bg-white/10 transition-all shadow-[0_0_12px_#ffffff22]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
