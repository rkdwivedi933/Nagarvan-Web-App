import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import GradientText from '../layout/GradientText';

const MeditationHutsSection = () => {
  const features = [
    { title: "Silent Huts", subtitle: "Peaceful meditation spaces" },
    { title: "Yoga Platform", subtitle: "Guided sessions available" },
    { title: "Nature Retreat", subtitle: "Holistic wellness programs" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="min-h-full bg-linear-to-br relative overflow-hidden"
    >

      {/* Soft Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-6 md:py-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-tight"
        >
          <GradientText>Meditation Huts</GradientText>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl font-semibold text-green-600"
            >
              Inner Peace Sanctuary
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#B9CDB7] text-base leading-relaxed max-w-md"
            >
              Dedicated meditation spaces designed for peace, mindfulness and 
              spiritual connection. These quiet huts are isolated from crowds, 
              offering perfect calmness.
            </motion.p>

            {/* Feature List */}
            <div className="space-y-3 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "rgba(34,139,34,0.15)",
                    borderColor: "rgba(34,139,34,0.40)"
                  }}
                  className="bg-green-700/10 border border-green-700/20 rounded-lg p-4 backdrop-blur-sm transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-green-300 font-semibold text-base mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-green-200/70 text-xs">{feature.subtitle}</p>
                    </div>

                    <Leaf className="w-4 h-4 text-green-400/30 group-hover:text-green-400/60 transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl overflow-hidden shadow-xl shadow-green-900/40 border border-green-700/20"
            >
              <img
                src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=900&q=80"
                alt="Meditation hut"
                className="w-full h-80 md:h-[380px] lg:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t  via-transparent to-transparent" />
            </motion.div>

            <div className="absolute -inset-2 bg-linear-to-r from-green-600/10 to-green-500/10 rounded-2xl blur-2xl -z-10" />
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t to-transparent" />
    </motion.div>
  );
};

export default MeditationHutsSection;
