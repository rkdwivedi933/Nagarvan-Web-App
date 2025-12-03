import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '../layout/GradientText';

const SynthesisParkSection = () => {
  const features = [
    {
      title: "Art Gallery",
      subtitle: "Handpicked modern and nature-inspired artworks"
    },
    {
      title: "Cultural Hub",
      subtitle: "Live performances, mini-exhibits & creative events"
    },
    {
      title: "Community Space",
      subtitle: "Open lawns ideal for gatherings and activities"
    }
  ];

  return (
    <div className="min-h-full bg-linear-to-br relative overflow-hidden">

      {/* Soft Noise Layer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(46,190,86,0.15),transparent_60%)]"
      />

      <div className="relative z-10 max-w-[1350px] mx-auto px-6 md:px-10 py-6 md:py-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 140
          }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-wide"
        >
          <GradientText>Synthesis Park</GradientText>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 120
            }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl overflow-hidden shadow-xl border border-green-700/20"
            >
              <img
                src="https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=900&q=80"
                alt="Serene park"
                className="w-full h-80 md:h-[380px] lg:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t " />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1.1 }}
              className="absolute -inset-2 bg-linear-to-r from-green-600/10 to-green-500/10 rounded-2xl blur-xl -z-10"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 120
            }}
            className="space-y-5"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="  text-xl font-semibold text-green-600"
            >
              Where Art Meets Nature
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-gray-300 text-base leading-relaxed max-w-xl"
            >
              A peaceful space where creativity and nature blend beautifully.
              Enjoy art installations, cultural moments, and open relaxing zones.
            </motion.p>

            {/* Feature Cards */}
            <div className="space-y-4 pt-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + index * 0.12,
                    type: "spring",
                    stiffness: 120
                  }}
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                    transition: { duration: 0.25 }
                  }}
                  className="bg-[#0F2F21]/50 backdrop-blur-sm border border-[#1C6B3E]/30 rounded-xl p-5 shadow-md hover:shadow-green-500/20 hover:border-green-500/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-green-600">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mt-1">
                    {feature.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t to-transparent" />
    </div>
  );
};

export default SynthesisParkSection;
