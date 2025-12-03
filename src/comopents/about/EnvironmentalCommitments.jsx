import React from 'react';
import { motion } from 'framer-motion';
import Button from '../layout/Button';
import GradientText from '../layout/GradientText';

const EnvironmentalCommitments = () => {
  const commitments = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
        </svg>
      ),
      title: 'Zero Carbon Footprint',
      description: '100% renewable energy powers all facilities with solar panels and wind turbines',
      badge: '500 tons CO₂ offset annually'
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
        </svg>
      ),
      title: 'Water Conservation',
      description: 'Rainwater harvesting systems and drip irrigation minimize water waste',
      badge: '2M liters saved yearly'
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4"/>
          <path d="M3 10h18"/>
          <path d="M7 3l5 5 5-5"/>
        </svg>
      ),
      title: 'Waste Management',
      description: 'Comprehensive recycling and composting programs achieve zero waste to landfill',
      badge: '95% waste diverted'
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          <path d="M12 12c3.5 0 7-2 7-5s-3.5-5-7-5-7 2-7 5 3.5 5 7 5z"/>
          <path d="M12 12c3.5 0 7 2 7 5s-3.5 5-7 5-7-2-7-5 3.5-5 7-5z"/>
        </svg>
      ),
      title: 'Reforestation',
      description: 'Annual tree plantation drives with native species to enhance biodiversity',
      badge: '500+ trees planted yearly'
    },
    {
      id: 5,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 7h.01"/>
          <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/>
          <path d="m20 7 2 .5-2 .5"/>
          <path d="M10 18v3"/>
          <path d="M14 17.75V21"/>
          <path d="M7 18a6 6 0 0 0 3.84-10.61"/>
        </svg>
      ),
      title: 'Wildlife Protection',
      description: 'Habitat preservation zones and bird sanctuaries protect local fauna',
      badge: '40+ species protected'
    },
    {
      id: 6,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
        </svg>
      ),
      title: 'Air Quality',
      description: 'Dense green cover acts as natural air purifier for surrounding urban areas',
      badge: '30% cleaner air'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 0.61, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-full bg-linear-to-br  relative overflow-hidden mt-20 px-4">
      {/* Floating Leaf Pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <div className="absolute top-[8%] left-[5%] text-9xl">🌿</div>
        <div className="absolute top-[20%] right-[8%] text-8xl">🍃</div>
        <div className="absolute bottom-[25%] left-[10%] text-7xl">🌿</div>
        <div className="absolute top-[50%] right-[15%] text-8xl">🍃</div>
        <div className="absolute bottom-[10%] right-[7%] text-6xl">🌿</div>
        <div className="absolute top-[35%] left-[20%] text-7xl">🍃</div>
      </div>

      {/* Radial Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#2ECC71] opacity-8 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-[#27AE60] opacity-6 blur-[130px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Area */}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
Our Commitment to Earth
            </Button>
            
          </div>

          {/* Main Heading */}
          <GradientText variant='primary' >
Environmental Commitments
          </GradientText>
        

          {/* Subheading */}
          <p className="text-white/60 text-base max-w-3xl mx-auto leading-relaxed">
            Our dedication to sustainability goes beyond words. Every action we take is guided by our commitment to preserving and protecting our natural environment
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {commitments.map((commitment) => (
            <motion.div
              key={commitment.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative bg-linear-to-br from-[#1a4d2e]/70 to-[#0d2818]/70 backdrop-blur-md border border-[#2ECC71]/20 rounded-3xl p-3 shadow-2xl overflow-hidden group"
            >
              {/* Glowing Edge Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-[#2ECC71]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative z-10 mb-6">
                <div className="w-14 h-14 bg-[#2ECC71]/15 border border-[#2ECC71]/30 rounded-2xl flex items-center justify-center text-[#2ECC71] backdrop-blur-sm group-hover:bg-[#2ECC71]/25 transition-all duration-300">
                  <div className="w-7 h-7">
                    {commitment.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                {/* Title */}
                <h3 className="text-white text-2xl font-bold leading-tight">
                  {commitment.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed">
                  {commitment.description}
                </p>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#2ECC71]/15 border border-[#2ECC71]/25 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="w-1.5 h-1.5 bg-[#2ECC71] rounded-full animate-pulse"></div>
                  <span className="text-[#2ECC71] text-xs font-semibold">
                    {commitment.badge}
                  </span>
                </div>
              </div>

              {/* Corner Glows */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2ECC71] rounded-full opacity-5 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#2ECC71] rounded-full opacity-5 blur-2xl -translate-x-1/2 translate-y-1/2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EnvironmentalCommitments;