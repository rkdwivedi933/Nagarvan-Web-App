import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '../layout/GradientText';

const KidsPlayground = () => {
  const features = [
    { number: 1, text: "Eco-friendly play equipment" },
    { number: 2, text: "Nature discovery stations" },
    { number: 3, text: "Water play area" },
  ];

  // Reusable variant
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-full bg-linear-to-br relative overflow-hidden"
    >

      {/* Floating Soft Icons */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-32 left-12 text-green-400 text-7xl"
        >
          🌿
        </motion.div>

        <motion.div
          animate={{ y: [0, 22, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute right-10 bottom-40 text-green-500 text-6xl"
        >
          🍃
        </motion.div>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute left-1/3 top-1/2 text-green-300 text-5xl"
        >
          🌱
        </motion.div>
      </div>

      {/* Soft radial texture */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(46,190,86,0.15),transparent_55%)]" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 py-6 md:py-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 tracking-wide"
        >
          <GradientText>Kids Playground</GradientText>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-2"
          >
            {/* Description Box */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0D2B1F]/40 backdrop-blur-sm border border-green-600/20 rounded-3xl p-4 shadow-lg shadow-green-900/20"
            >
              <motion.div
                {...fadeUp}
                transition={{ delay: 0.2 }}
                className="text-xl font-semibold text-green-600 mb-4"
              >
                Adventure for Little Explorers
              </motion.div>

              <motion.p
                {...fadeUp}
                transition={{ delay: 0.3 }}
                className="text-gray-300 text-base leading-relaxed"
              >
                A safe and engaging play area designed for kids to explore, learn,
                and enjoy nature. Equipped with modern setups and trained supervision
                to offer a memorable family experience.
              </motion.p>
            </motion.div>

            {/* Feature Cards */}
            <div className="space-y-4 mt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.35 + index * 0.15
                  }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-linear-to-r from-[#0F2F21]/40 to-[#0D2B1F]/40 backdrop-blur-sm border border-green-600/20 rounded-2xl p-5 shadow-md shadow-green-900/20 hover:border-green-500/40 transition-all"
                >
                  <div className="flex items-center gap-4">
                    {/* Number */}
                    <motion.div
                      whileHover={{ rotate: 6 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 w-11 h-11 rounded-full bg-linear-to-br from-green-500 to-green-600 shadow-md flex items-center justify-center"
                    >
                      <span className="text-white font-bold text-base">
                        {feature.number}
                      </span>
                    </motion.div>

                    {/* Text */}
                    <p className="text-white text-base font-medium">
                      {feature.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl overflow-hidden shadow-xl shadow-green-900/40 border border-green-700/20"
            >
              <img
                src="https://images.unsplash.com/photo-1668561791354-b299b018abbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkJTIwcGF5Z3JvdW5kfGVufDB8fDB8fHww"
                alt="Playground"
                className="w-full h-80 md:h-[380px] lg:h-[440px] object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t  via-transparent to-transparent" />
            </motion.div>

            {/* Slow pulsing glow */}
            <motion.div
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -inset-2 bg-linear-to-r from-green-600/15 to-green-500/15 rounded-4xl blur-xl -z-10"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t to-transparent" />
    </motion.div>
  );
};

export default KidsPlayground;
