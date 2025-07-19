import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is AINest?",
    answer:
      "AINest is an AI-powered productivity tool to enhance creative and technical workflows effortlessly.",
  },
  {
    question: "Is AINest free to use?",
    answer:
      "Yes, core features are free. Premium plans unlock advanced features.",
  },
  {
    question: "Can I use AINest for commercial projects?",
    answer:
      "Yes, both free and premium users can use AINest for personal and commercial work.",
  },
  {
    question: "What kind of content can I generate?",
    answer:
      "Text, images, code, documentation — AINest is versatile for many formats.",
  },
  {
    question: "How secure is my data on AINest?",
    answer:
      "We use encryption and strict access controls to keep your data safe and private.",
  },
  {
    question: "Can I collaborate with my team?",
    answer:
      "Yes! AINest supports real-time collaboration and shared collections.",
  },
  {
    question: "Does AINest support mobile devices?",
    answer: "Yes, AINest is optimized for mobile use and works across devices.",
  },
  {
    question: "Is there a limit to how much I can generate?",
    answer:
      "Free plans have daily limits. Premium plans offer increased generation capacity.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="w-full py-20 flex justify-center text-white">
      <motion.div
        className="w-full max-w-3xl px-4 flex flex-col gap-6"
        initial={{ opacity: 3, y: 60, scaleX: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-400 mb-10">
          Seamlessly use your preferred tools for unified work, start to finish.
        </p>

        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, scaleX: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scaleX: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
            viewport={{ once: false, amount: 0.2 }}
            className="border border-gray-700 rounded-xl bg-[#111] p-4 transition-all duration-300"
          >
            <button
              className="flex justify-between items-center w-full text-left text-lg font-medium text-white"
              onClick={() => toggleOpen(index)}
            >
              {faq.question}
              <span className="text-xl font-bold text-white">
                {openIndex === index ? " × " : "+"}
              </span>
            </button>

            <motion.div
              initial={false}
              animate={
                openIndex === index
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <p className="text-gray-400 mt-3">{faq.answer}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQ;
