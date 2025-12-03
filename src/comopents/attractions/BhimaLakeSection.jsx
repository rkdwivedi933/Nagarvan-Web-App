import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '../layout/GradientText';

const BhimaLakeSection = () => {
  const features = [
    "Pedal boats and rowing options",
    "Lakeside nature trails",
    "Wildlife viewing platform",
    "Sunset viewpoints"
  ];

  return (
    <div className="min-h-full bg-linear-to-br relative overflow-hidden">
      
      {/* Soft Noise Layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-[0.03]"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-6 md:py-16">

        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: -45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 130
          }}
          className="text-7xl md:text-8xl font-bold text-center mb-20 tracking-wide"
        >
          <GradientText>Bhima Lake</GradientText>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
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
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl font-semibold text-green-600 mb-6"
            >
              Serene Water Paradise
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-gray-300 text-lg leading-relaxed mb-10"
            >
              A pristine lake offering tranquil waters perfect for meditation, photography,
              and water activities. Surrounded by natural beauty and wildlife, it's an ideal
              spot for peaceful reflection.
            </motion.p>

            {/* Features */}
            <div className="space-y-5 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.45 + index * 0.12,
                    type: "spring",
                    stiffness: 140
                  }}
                  whileHover={{
                    scale: 1.05,
                    x: 6,
                    transition: { duration: 0.25 }
                  }}
                  className="flex items-center gap-4"
                >
                  <div className="shrink-0 w-3 h-3 rounded-full bg-[#6CD289] shadow-sm shadow-green-400/50" />
                  <p className="text-gray-300 text-lg">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              type: "spring",
              stiffness: 120
            }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl overflow-hidden shadow-2xl shadow-green-900/40 border border-green-700/15"
            >
              <img
                src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=900&q=80"
                alt="Serene circular lake with green railings surrounded by lush greenery"
                className="w-full h-80 md:h-[380px] lg:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t  via-transparent to-transparent" />
            </motion.div>

            {/* Glow Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.2 }}
              className="absolute -inset-3 bg-linear-to-r from-green-600/10 to-green-500/10 rounded-[36px] blur-2xl -z-10"
            />
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t to-transparent" />
    </div>
  );
};

export default BhimaLakeSection;
