import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '../layout/GradientText';

const SelfiePointsSection = () => {
  const locations = [
    "Hill View",
    "Flower Field",
    "Lake Mirror",
    "Forest Grove"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-full bg-linear-to-br relative overflow-hidden"
    >

      {/* Soft Pattern BG */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]" />

      <div className="relative z-10  max-w-[1400px] mx-auto px-8 py-6 md:py-16  ">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-16 tracking-wide"
        >
          <GradientText>
            Selfie Points
          </GradientText>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl overflow-hidden shadow-2xl shadow-green-900/40 border border-green-700/20"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
                alt="Green gazebo selfie point surrounded by lush forest"
                className="w-full h-80 md:h-[380px] lg:h-[340px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t  via-transparent to-transparent" />
            </motion.div>

            <div className="absolute -inset-2 bg-linear-to-r from-green-600/10 to-green-500/10 rounded-3xl blur-2xl -z-10" />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-xl font-semibold text-green-600"
            >
              Picture Perfect Moments
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[#B7CBB5] text-lg leading-relaxed w-[85%]"
            >
              Capture stunning memories at our specially curated viewpoints. 
              Each location offers unique backdrops and natural beauty perfect 
              for photography and social sharing.
            </motion.p>

            {/* Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-4">
              {locations.map((location, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                    boxShadow: '0 10px 35px rgba(34, 197, 94, 0.35)',
                    borderColor: 'rgba(34, 197, 94, 0.6)'
                  }}
                  className="py-4 px-6 bg-green-700/10 border border-green-700/40 rounded-xl text-green-200 font-medium text-lg hover:bg-green-700/20 transition-all duration-300 backdrop-blur-sm"
                >
                  {location}
                </motion.button>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t to-transparent" />
    </motion.div>
  );
};

export default SelfiePointsSection;
