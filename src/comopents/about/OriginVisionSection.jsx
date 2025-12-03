import React from 'react';
import { motion } from 'framer-motion';
import Button from '../layout/Button';
import GradientText from '../layout/GradientText';

const OriginVisionSection = () => {
  const timelineEvents = [
    {
      id: 1,
      month: 'jan',
      year: '2024',
      title: 'The Beginning',
      description: 'Nagar Van was established as a community initiative'
    },
    {
      id: 2,
      month: 'jul',
      year: '2024',
      title: 'Expansion',
      description: 'Park area doubled with new plantations and facilities'
    },
    {
      id: 3,
      month: 'jan',
      year: '2025',
      title: 'Recognition',
      description: 'Awarded Best Urban Forest by State Government'
    },
    {
      id: 4,
      month: '',
      year: '2025',
      title: 'Modern Era',
      description: 'Enhanced with eco-friendly infrastructure and trails'
    }
  ];

  const stats = [
    { id: 1, value: '2+', label: 'Years of Growth' },
    { id: 2, value: '5000+', label: 'Trees Planted' },
    { id: 3, value: '40', label: 'Acres Covered' },
    { id: 4, value: '50+', label: 'Species' }
  ];

  return (
    <div className="min-h-full bg-linear-to-br  relative overflow-hidden  px-4">
      {/* Floating Leaf Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-[10%] left-[8%] text-9xl">🌿</div>
        <div className="absolute top-[25%] right-[12%] text-8xl">🍃</div>
        <div className="absolute bottom-[30%] left-[15%] text-7xl">🌿</div>
        <div className="absolute top-[55%] right-[18%] text-8xl">🍃</div>
        <div className="absolute bottom-[15%] right-[10%] text-6xl">🌿</div>
      </div>

      {/* Radial Glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#2ECC71] opacity-10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#27AE60] opacity-8 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Heading Area */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <Button variant='secondary'>
              <svg className="w-4 h-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
              Our Journey
            </Button>
            
          </div>

          {/* Main Heading */}
          <GradientText variant='primary' >
Origin & Vision
          </GradientText>
          

          {/* Subheading */}
          <p className="text-white/60 text-base max-w-3xl mx-auto">
            From a simple dream to a thriving green sanctuary, discover how Nagar Van has grown into Satna's most beloved natural retreat.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          {/* Left Story Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Origin Badge */}
            <div className="inline-flex flex-col bg-[#1a4d2e]/40 border border-[#2ECC71]/30 backdrop-blur-md px-5 py-3 rounded-2xl">
              <div className="flex items-center gap-2 text-white text-sm font-medium mb-1">
                <svg className="w-4 h-4 text-[#2ECC71]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
                <span>The Origin Story</span>
              </div>
              <span className="text-white/70 text-xs font-medium">Where It All Began</span>
            </div>

            {/* Story Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Born from a Vision to Preserve Nature in Urban Satna
            </h2>

            {/* Story Paragraphs */}
            <div className="space-y-4 text-white/70 text-sm leading-relaxed">
              <p>
                In 2010, a group of passionate environmentalists and community leaders recognized the urgent need for a green sanctuary in the rapidly urbanizing landscape of Satna. What started as a modest initiative to plant trees and create walking paths has blossomed into a comprehensive ecological park.
              </p>
              <p>
                Through collaboration with the Satna Forest Division and support from local communities, Nagar Van has transformed barren land into a thriving ecosystem. Today, it stands as a testament to what dedicated conservation efforts can achieve.
              </p>
            </div>
          </motion.div>

          {/* Timeline and Events */}
          <div className="lg:col-span-7 relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#2ECC71] via-[#27AE60] to-[#2ECC71] opacity-30"></div>

            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                  className="flex items-start gap-8"
                >
                  {/* Timeline Marker */}
                  <div className="shrink-0 relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.15, type: "spring" }}
                      className="relative"
                    >
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-[#2ECC71] blur-lg opacity-40 rounded-full"></div>
                      
                      {/* Date Badge */}
                      <div className="relative bg-linear-to-br from-[#2ECC71] to-[#27AE60] rounded-full px-4 py-3 shadow-lg border border-[#2ECC71]/50 min-w-[70px] text-center">
                        {event.month && (
                          <div className="text-white text-xs font-bold lowercase">{event.month}</div>
                        )}
                        <div className="text-white text-sm font-bold">{event.year}</div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Event Card */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="flex-1 bg-linear-to-br from-[#1a4d2e]/60 to-[#0d2818]/60 backdrop-blur-md border border-[#2ECC71]/20 rounded-2xl p-6 shadow-xl relative overflow-hidden group"
                  >
                    {/* Corner Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#2ECC71] rounded-full opacity-5 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-white text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-white/60 text-sm">{event.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
              whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(46, 204, 113, 0.3)' }}
              className="bg-linear-to-br from-[#1a4d2e]/70 to-[#0d2818]/70 backdrop-blur-md border border-[#2ECC71]/25 rounded-2xl p-4  shadow-xl relative overflow-hidden group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-[#2ECC71]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-center ">
                <div className="text-xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/60 font-medium">{stat.label}</div>
              </div>

              {/* Bottom Corner Glow */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#2ECC71] rounded-full opacity-5 blur-2xl translate-x-1/2 translate-y-1/2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OriginVisionSection;