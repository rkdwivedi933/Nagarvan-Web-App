import React from "react";
import { motion } from "framer-motion";
import Button from "../layout/Button";

const ExploreAttractionsHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-full bg-linear-to-br relative overflow-hidden flex items-center justify-center px-4 py-24"
    >
      {/* Central Radial Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#5BBF5A] blur-[150px] rounded-full"
      ></motion.div>

      {/* Animated Floating BG Icons */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        {/* Mountain Icon */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-16 left-24"
        >
          <svg className="w-32 h-32 text-[#5BBF5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.3} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.3} d="M3 21l4-8 4 8" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.3} d="M13 21l4-8 4 8" />
          </svg>
        </motion.div>

        {/* Leaf Icon */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-24 right-32"
        >
          <svg className="w-28 h-28 text-[#5BBF5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.3} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </motion.div>

        {/* Compass Icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-32 left-32"
        >
          <svg className="w-36 h-36 text-[#5BBF5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="0.3" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.3} d="M12 2v4m0 12v4M2 12h4m12 0h4" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.3} d="M12 8l-3 9 3-2 3 2z" />
          </svg>
        </motion.div>

        {/* Tree Icon */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
          className="absolute top-1/2 right-24 -translate-y-1/2"
        >
          <svg className="w-24 h-24 text-[#5BBF5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.3} d="M12 2L4 8v8l8 6 8-6V8l-8-6z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.3} d="M12 22V12M12 12L4 8M12 12l8-4" />
          </svg>
        </motion.div>

        {/* Star Icon */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-24 right-40"
        >
          <svg className="w-20 h-20 text-[#5BBF5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.3} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Top Badge Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Button variant="secondary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-bold text-base">Discover Our Attractions</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </Button>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide">
            <span className="text-[#F9FFF8] block mb-2">Explore Amazing</span>
            <span className="text-[#5BBF5A]">Attractions</span>
          </h1>
        </motion.div>

        {/* Underline Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex justify-center mb-10"
        >
          <div className="w-40 h-1.5 bg-linear-to-r from-[#59B45B] to-[#5BBF5A] rounded-full shadow-lg"></div>
        </motion.div>

        {/* Subheading Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
        >
          <p className="text-[#E2F0E2] text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
            From scenic walking trails to peaceful meditation spaces, discover{" "}
            <span className="text-[#5BBF5A] font-semibold">12 unique attractions</span>{" "}
            designed to create unforgettable memories
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExploreAttractionsHero;
