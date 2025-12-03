import React from 'react';
import { motion } from 'framer-motion';
import Button from '../layout/Button';
import GradientText from '../layout/GradientText';

const LeadershipTeam = () => {
  const organizations = [
    {
      id: 1,
      title: 'Ministry of Environment, Forest and Climate Change (MoEFCC)',
      country: 'India',
      description: "Our vision is to foster a clean, green, and healthy India, guided by the principle of sustainable development and the enhancement of human well-being. We are dedicated to conserving our nation's rich biodiversity, forests, and wildlife, while preventing and abating pollution. Through initiatives like the Nagarvan Yojana, we aim to create vibrant green lungs in every city, providing a wholesome environment, mitigating climate change, and reconnecting our urban residents with nature.",
      email: 'iddiv-moefcc@gov.in',
      phone: '1800-11-5792'
    },
    {
      id: 2,
      title: 'National Compensatory Afforestation Fund Management and Planning Authority',
      country: 'India',
      description: "Our vision is to rebuild and enrich India's forests and biodiversity. Through strategic compensatory afforestation, re-afforestation, and ecological restoration, we are committed to enhancing the life-sustaining ecosystem services that our forests provide, ensuring a resilient and green future for the nation. We champion this mission through scientific management and inclusive community participation.",
      email: 'nationalcampca-moefcc@gov.in',
      phone: '+91-11-23370510'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 0.61, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-full bg-linear-to-br  relative overflow-hidden py-20 px-4">
      {/* Floating Leaf Pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <div className="absolute top-[10%] left-[6%] text-9xl">🌿</div>
        <div className="absolute top-[25%] right-[8%] text-8xl">🍃</div>
        <div className="absolute bottom-[25%] left-[10%] text-7xl">🌿</div>
        <div className="absolute top-[55%] right-[15%] text-8xl">🍃</div>
        <div className="absolute bottom-[12%] right-[7%] text-6xl">🌿</div>
        <div className="absolute top-[38%] left-[18%] text-7xl">🍃</div>
      </div>

      {/* Ambient Lighting Effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#2ECC71] opacity-8 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-[#27AE60] opacity-6 blur-[130px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
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
          <GradientText variant='primary'>
Our Leadership Team
          </GradientText>
          

          {/* Subtitle */}
          <p className="text-white/60 text-base max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated professionals leading Nagar Van's mission to create a sustainable sanctuary for nature and community
          </p>
        </motion.div>

        {/* Leadership Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {organizations.map((org) => (
            <motion.div
              key={org.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative bg-linear-to-br from-[#1a4d2e]/70 to-[#0d2818]/70 backdrop-blur-xl border-2 border-[#2ECC71]/25 rounded-3xl p-8 shadow-2xl overflow-hidden group"
            >
              {/* Inner Glass Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-[#2ECC71]/5 via-transparent to-transparent opacity-50"></div>

              {/* Glowing Border Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-3xl" style={{
                  background: 'linear-gradient(90deg, transparent, rgba(46, 204, 113, 0.3), transparent)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s linear infinite'
                }}></div>
              </div>

              <div className="relative z-10">
                {/* Emblem and Title Section */}
                <div className="flex items-start gap-4 mb-6">
                  {/* India Emblem */}
                  <div className="shrink-0">
                    <div className="w-20 h-20 bg-[#2ECC71]/10 border border-[#2ECC71]/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-12 h-12 text-[#2ECC71]/70" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18.5c-3.87-.78-7-4.88-7-9.5V8.35l7-3.89 7 3.89V11c0 4.62-3.13 8.72-7 9.5z"/>
                        <path d="M12 6L8 10h3v4h2v-4h3z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Title and Country */}
                  <div className="flex-1">
                    <h3 className="text-white text-xl font-bold leading-tight mb-2">
                      {org.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-[#2ECC71]/15 border border-[#2ECC71]/30 rounded-full text-[#2ECC71] text-xs font-semibold">
                      {org.country}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {org.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-linear-to-r from-transparent via-[#2ECC71]/30 to-transparent mb-6"></div>

                {/* Contact Information */}
                <div className="space-y-3">
                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-9 h-9 bg-[#2ECC71]/15 border border-[#2ECC71]/25 rounded-xl flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#2ECC71]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-white/70 text-sm">{org.email}</span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-9 h-9 bg-[#2ECC71]/15 border border-[#2ECC71]/25 rounded-xl flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#2ECC71]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-white/70 text-sm">{org.phone}</span>
                  </div>
                </div>
              </div>

              {/* Corner Decorative Glows */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#2ECC71] rounded-full opacity-5 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#27AE60] rounded-full opacity-5 blur-2xl -translate-x-1/2 translate-y-1/2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Leadership Values Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mt-20 mb-20"
>
  <div className="bg-[#0f3a20]/60 border border-white/10 backdrop-blur-xl rounded-3xl p-10 md:p-14 shadow-xl text-center">

    {/* Heading */}
    <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
      Leadership Values
    </h2>

    {/* Subtext */}
    <p className="text-white/70 text-sm md:text-base mb-10">
      The principles that guide our management approach
    </p>

    {/* 3 Columns Section */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16">

      {/* Leadership */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-white/10 border border-white/15 rounded-2xl flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4s-3 1.567-3 3.5S10.343 11 12 11zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
        </div>
        <h3 className="text-white font-bold text-xl mb-1">Leadership</h3>
        <p className="text-white/60 text-sm">Guiding with vision</p>
      </div>

      {/* Excellence */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-white/10 border border-white/15 rounded-2xl flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a3 3 0 110-6 3 3 0 010 6zm0 2c-3.314 0-10 1.657-10 5v3h20v-3c0-3.343-6.686-5-10-5z" />
          </svg>
        </div>
        <h3 className="text-white font-bold text-xl mb-1">Excellence</h3>
        <p className="text-white/60 text-sm">Committed to quality</p>
      </div>

      {/* Innovation */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-white/10 border border-white/15 rounded-2xl flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l4 4-4 4-4-4 4-4zm0 14l-4-4 4-4 4 4-4 4zm0 4v-4" />
          </svg>
        </div>
        <h3 className="text-white font-bold text-xl mb-1">Innovation</h3>
        <p className="text-white/60 text-sm">Pioneering solutions</p>
      </div>

    </div>
  </div>
</motion.div>

    </div>
  );
};

export default LeadershipTeam;