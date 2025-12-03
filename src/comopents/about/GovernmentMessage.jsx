import React from 'react';
import { motion } from 'framer-motion';
import Button from '../layout/Button';
import GradientText from '../layout/GradientText';

const GovernmentMessage = () => {
  return (
    <div className="min-h-full bg-linear-to-br  relative overflow-hidden py-20 px-4">
      {/* Floating Leaf Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-[12%] left-[8%] text-8xl">🌿</div>
        <div className="absolute top-[28%] right-[10%] text-7xl">🍃</div> 
        <div className="absolute bottom-[20%] left-[12%] text-6xl">🌿</div>
        <div className="absolute top-[60%] right-[18%] text-7xl">🍃</div>
        <div className="absolute bottom-[15%] right-[8%] text-5xl">🌿</div>
        <div className="absolute top-[40%] left-[15%] text-6xl">🍃</div>
      </div>

      {/* Radial Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#2ECC71] opacity-8 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#27AE60] opacity-6 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-10"
        >
          
           <Button variant='secondary'>
              <svg className="w-4 h-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
Our Commitment to Earth
            </Button>
          
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-10 h-10 text-[#2ECC71]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <GradientText variant='primary'>
Message from Government
          </GradientText>
          
        </motion.div>

        {/* Content Section */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left Side - Circular Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-4 flex justify-center"
          >
            <div className="relative">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 bg-linear-to-br from-[#2ECC71] to-[#27AE60] rounded-full blur-2xl opacity-30 scale-110"></div>
              
              {/* Border Ring */}
              <div className="relative w-64 h-64 rounded-full p-1 bg-linear-to-br from-[#2ECC71] to-[#27AE60] shadow-2xl">
                {/* Image Container */}
                <div className="w-full h-full rounded-full overflow-hidden bg-linear-to-br from-orange-400 to-orange-500 border-4 border-white/10">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGrKlBcAbAJZKueIujU8OZCyoII0Rzpwx_RuLPHHKwRM9hdnW2QkcEUh38nD3oXaSZUUic9hi83dOfGEUM4G79nKIJTWUtAWrYodldDZ4&s=10"
                    alt="Prime Minister"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom Shadow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-[#2ECC71] rounded-full blur-3xl opacity-40"></div>
            </div>
          </motion.div>

          {/* Right Side - Quote Box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:col-span-8"
          >
            <div className="relative bg-linear-to-br from-[#1a4d2e]/80 to-[#0d2818]/80 backdrop-blur-xl border-2 border-[#2ECC71]/30 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden">
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-[#2ECC71]/10 via-transparent to-transparent opacity-50"></div>

              {/* Opening Quote Mark */}
              <div className="relative z-10">
                <svg className="w-12 h-12 text-[#2ECC71] mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>

                {/* Quote Text */}
                <p className="text-white text-base md:text-lg leading-relaxed tracking-wide mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                  We must all unite to make our cities greener and healthier for the coming generations. I urge everyone to plant a tree in the name of their mother as a mark of love and respect. This will be a great service to Mother Earth and will strengthen our urban forests (Nagarvans) across the nation.
                </p>

                {/* Closing Quote Mark */}
                <div className="flex justify-end mb-6">
                  <svg className="w-12 h-12 text-[#2ECC71] opacity-50 rotate-180" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                </div>

                {/* Separator Line */}
                <div className="w-full h-px bg-linear-to-r from-transparent via-[#2ECC71]/50 to-transparent mb-6"></div>

                {/* Signature */}
                <div className="space-y-1">
                  <h3 className="text-[#2ECC71] text-xl font-bold tracking-wide">
                    Shri. Narendra Modi
                  </h3>
                  <p className="text-white/70 text-sm tracking-wider">
                    Prime Minister of India
                  </p>
                </div>

                {/* Bottom Glow Line */}
                <div className="mt-4 w-24 h-1 bg-linear-to-r from-[#2ECC71] to-transparent rounded-full"></div>
              </div>

              {/* Corner Decorative Glows */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#2ECC71] rounded-full opacity-5 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#27AE60] rounded-full opacity-5 blur-2xl -translate-x-1/2 translate-y-1/2"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentMessage;