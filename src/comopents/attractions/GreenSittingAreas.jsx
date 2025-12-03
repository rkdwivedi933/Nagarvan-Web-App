import React from 'react';
import { Trees, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../layout/Button';
import GradientText from '../layout/GradientText';

const GreenSittingAreas = () => {
  const features = [
    "Wooden benches under ancient trees",
    "Gazebos with panoramic views",
    "Picnic tables for family gatherings",
    "Secluded corners for privacy"
  ];

  // Smooth fade + slide reusable variant
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-full bg-linear-to-br relative overflow-hidden"
    >

      {/* Background floating leaves animation */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-32 left-20 text-green-500 text-7xl"
        >
          🌿
        </motion.div>

        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-32 right-16 text-green-500 text-8xl"
        >
          🍃
        </motion.div>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/2 left-1/3 text-green-500 text-6xl"
        >
          🌱
        </motion.div>

        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/4 text-green-500 text-5xl"
        >
          🍀
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 md:py-16">

        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-8"
        >
          <Button variant='secondary'>
            <Trees className="w-5 h-5" />
            Green Sitting Areas
          </Button>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-center mb-20 leading-tight"
        >
          <GradientText>
           Netural Green Sitting Areas
          </GradientText>
        </motion.div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-14 items-center mt-10">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl overflow-hidden shadow-2xl shadow-green-900/60 border border-green-700/20"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
                alt="Garden gazebo with seating area surrounded by lush greenery"
                className="w-full h-80 md:h-[380px] lg:h-[380px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t  via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            <motion.h2
              {...fadeUp}
              className="text-xl font-semibold text-green-600 mb-2"
            >
              Comfort in Nature
            </motion.h2>

            <motion.p
              {...fadeUp}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-gray-300 text-base leading-relaxed"
            >
              Discover thoughtfully designed seating areas nestled within our lush gardens.
              These peaceful spots are perfect for reading, meditating, or simply soaking
              in the natural beauty around you.
            </motion.p>

            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors" />
                  <p className="text-gray-200 group-hover:text-white transition-colors">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="pt-6 flex justify-center md:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="px-6 py-3  bg-linear-to-r from-green-600 to-green-500 text-white font-semibold rounded-full
                hover:from-green-500 hover:to-green-400 transition-all duration-300 shadow-lg shadow-green-600/40
                hover:shadow-green-500/60"
              >
                Explore Our Gardens
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t to-transparent" />

    </motion.div>
  );
};

export default GreenSittingAreas;
