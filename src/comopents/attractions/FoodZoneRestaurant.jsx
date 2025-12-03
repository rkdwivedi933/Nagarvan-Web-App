import React from 'react';
import { Utensils } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientText from '../layout/GradientText';
import Button from '../layout/Button';

const FoodZoneRestaurant = () => {
  const menuItems = [
    {
      title: "Main Restaurant",
      subtitle: "Fine dining with nature views",
      delay: 0.8
    },
    {
      title: "Organic Cafe",
      subtitle: "Farm-to-table healthy options",
      delay: 0.9
    },
    {
      title: "Juice Bar",
      subtitle: "Fresh juices and smoothies",
      delay: 1.0
    }
  ];

  // Reusable fade variant
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

      {/* Floating Background Icons */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-24 left-16 text-green-600 text-7xl"
        >
          🍃
        </motion.div>

        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-28 right-20 text-green-600 text-6xl"
        >
          🌿
        </motion.div>

        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/2 left-1/4 text-green-600 text-5xl"
        >
          🌱
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 md:py-16">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", stiffness: 180 }}
          className="flex justify-center mb-10"
        >
          <Button variant='secondary'>
            <Utensils className="w-5 h-5 text-green-300" />
            Food Zone
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
            Food Zone & Restaurant
          </GradientText>
        </motion.div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Subtitle */}
            <motion.h2
              {...fadeUp}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-xl font-semibold text-green-600"
            >
              Culinary Delights
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              {...fadeUp}
              transition={{ delay: 0.5, duration: 0.75 }}
              className="text-gray-300 text-base leading-relaxed"
            >
              Our food zone brings authentic local flavors with international
              delicacies. Fresh organic ingredients, handcrafted recipes and a
              serene natural atmosphere create a delightful dining experience.
            </motion.p>

            {/* Menu Items */}
            <div className="space-y-4 mt-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: item.delay,
                    type: "spring",
                    stiffness: 120
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative group"
                >
                  {/* Accent Line */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-green-400 to-green-600 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                  />

                  {/* Card */}
                  <div className="bg-linear-to-br from-green-900/20 to-green-800/10 backdrop-blur-md border border-green-600/20 rounded-2xl p-4 pl-7 shadow-md shadow-green-900/20 group-hover:shadow-green-500/30 group-hover:border-green-500/40 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-green-600 mb-1 group-hover:text-green-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.subtitle}</p>
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
            transition={{ duration: 1.0, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl overflow-hidden shadow-xl shadow-green-900/40 border border-green-700/20"
            >
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80"
                alt="Restaurant"
                className="w-full h-80 md:h-[380px] lg:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t  via-transparent to-transparent" />
              <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-green-900/40" />
            </motion.div>

            {/* Glow Effect */}
            <motion.div
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -inset-1 bg-linear-to-r from-green-600/15 to-green-500/15 rounded-2xl blur-lg -z-10"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t to-transparent" />
    </motion.div>
  );
};

export default FoodZoneRestaurant;
