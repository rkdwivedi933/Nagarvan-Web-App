import React from 'react';
import { motion } from 'framer-motion';
import Button from '../layout/Button';

const NatureWisdomHero = () => {
  const floatingElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4
  }));

  const leafParticles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
    duration: 15 + Math.random() * 10
  }));

  return (
    <div className="min-h-screen  relative overflow-hidden flex items-center justify-center px-4 py-20">
      {/* Floating Flower Icons */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          initial={{ opacity: 0.3 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            y: [0, -20, 0]
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut"
          }}
          className="absolute text-[#5DBB63] opacity-30"
          style={{ left: element.left, top: element.top }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="2"/>
            <circle cx="12" cy="6" r="2"/>
            <circle cx="12" cy="18" r="2"/>
            <circle cx="6" cy="12" r="2"/>
            <circle cx="18" cy="12" r="2"/>
          </svg>
        </motion.div>
      ))}

      {/* Falling Leaf Particles */}
      {leafParticles.map((particle) => (
        <motion.div
          key={`leaf-${particle.id}`}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: [0, 1000],
            x: [0, 50, -50, 0],
            opacity: [0, 0.4, 0.4, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear"
          }}
          className="absolute text-[#5DBB63] opacity-20"
          style={{ left: particle.left }}
        >
          🍃
        </motion.div>
      ))}

      {/* Tree Silhouettes - Left */}
      <div className="absolute bottom-0 left-0 w-48 h-96 opacity-10">
        <svg viewBox="0 0 100 200" fill="none" className="w-full h-full">
          <path d="M50 10 L30 60 L40 60 L20 100 L35 100 L15 150 L50 150 L50 200" fill="#0a3d20" opacity="0.6"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-20 w-40 h-80 opacity-8">
        <svg viewBox="0 0 100 200" fill="none" className="w-full h-full">
          <path d="M50 20 L35 70 L45 70 L30 110 L42 110 L25 160 L50 160 L50 200" fill="#0a3d20" opacity="0.5"/>
        </svg>
      </div>

      {/* Tree Silhouettes - Right */}
      <div className="absolute bottom-0 right-0 w-48 h-96 opacity-10">
        <svg viewBox="0 0 100 200" fill="none" className="w-full h-full">
          <path d="M50 10 L70 60 L60 60 L80 100 L65 100 L85 150 L50 150 L50 200" fill="#0a3d20" opacity="0.6"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-20 w-40 h-80 opacity-8">
        <svg viewBox="0 0 100 200" fill="none" className="w-full h-full">
          <path d="M50 20 L65 70 L55 70 L70 110 L58 110 L75 160 L50 160 L50 200" fill="#0a3d20" opacity="0.5"/>
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-12"
        >
            <Button variant='secondary'>

            <svg className="w-5 h-5  group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Blog & Stories
            </Button>
          
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide">
            <span className="text-[#D7EECF] block mb-2">Nature Wisdom &</span>
            <span className="text-[#5DBB63]">Park Updates</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#7FB88E] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Discover stories, tips, and insights about eco-tourism, wildlife conservation, and sustainable living at Nagar Van Satna.
        </motion.p>

        {/* Decorative Separator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          {/* Left Leaf */}
          <div className="text-[#5DBB63]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.67-2.11c.52.16 1.04.29 1.56.39l-.77 2.42 1.89.66.93-2.93c.45.05.91.08 1.37.08 3.47 0 6.53-1.78 8.26-4.48l1.15 1.15L22 15V8h-7l1.15 1.15C14.9 11.01 13.03 12 11 12c-1.58 0-3.03-.57-4.16-1.5C8.13 9.33 10.65 8.55 17 8z"/>
            </svg>
          </div>

          {/* Center Lines */}
          <div className="flex items-center gap-2">
            <div className="w-24 h-0.5 bg-[#5DBB63] opacity-40"></div>
            <svg className="w-5 h-5 text-[#5DBB63]" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="2"/>
              <circle cx="12" cy="6" r="2"/>
              <circle cx="12" cy="18" r="2"/>
              <circle cx="6" cy="12" r="2"/>
              <circle cx="18" cy="12" r="2"/>
            </svg>
            <div className="w-24 h-0.5 bg-[#5DBB63] opacity-40"></div>
          </div>

          {/* Right Leaf */}
          <div className="text-[#5DBB63] transform rotate-180">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.67-2.11c.52.16 1.04.29 1.56.39l-.77 2.42 1.89.66.93-2.93c.45.05.91.08 1.37.08 3.47 0 6.53-1.78 8.26-4.48l1.15 1.15L22 15V8h-7l1.15 1.15C14.9 11.01 13.03 12 11 12c-1.58 0-3.03-.57-4.16-1.5C8.13 9.33 10.65 8.55 17 8z"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NatureWisdomHero;