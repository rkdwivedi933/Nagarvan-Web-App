import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import GradientText from "../layout/GradientText";

const RestingZoneSection = () => {
  const features = [
    "Comfortable hammocks and loungers",
    "Covered rest pavilions",
    "Refreshment facilities",
    "Clean facilities and amenities",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-full bg-linear-to-br relative overflow-hidden"
    >
      {/* Noise layer */}
     <div className='absolute inset-0 opacity-[0.03] bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuMDMiLz48L3N2Zz4=")]' />


      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-6 md:py-16 ">
        {/* Main Heading — Smaller */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight"
        >
          <GradientText>
            Resting Zone
          </GradientText>
         
        </motion.div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image — Height Smaller */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl overflow-hidden shadow-xl border border-green-700/20"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
                className="w-full h-80 md:h-[380px] lg:h-[300px] object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-linear-to-t " />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute -inset-2 bg-linear-to-r from-green-600/10 to-green-500/10 rounded-2xl blur-xl -z-10"
            />
          </motion.div>

          {/* Content — Smaller Typography */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <motion.h2
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl font-semibold text-green-600"
            >
              Comfort & Relaxation
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-[#B9CDB7] text-base leading-relaxed max-w-xl"
            >
              Specially designed rest areas offering comfort and relaxation.
              Perfect for unwinding and enjoying nature.
            </motion.p>

            {/* Features — Smaller Icons + Text + Spacing */}
            <div className="space-y-3 pt-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + index * 0.15,
                  }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-7 h-7 rounded-full bg-green-700/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#4CCD6A]" />
                  </div>
                  <p className="text-green-200 text-sm md:text-base">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#021B11] to-transparent" />
    </motion.div>
  );
};

export default RestingZoneSection;
