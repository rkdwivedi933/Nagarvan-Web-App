import React from 'react';
import { Footprints, Clock, MapPin, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../layout/Button';
import GradientText from '../layout/GradientText';

const WalkingTrailsSection = () => {
  const trails = [
    {
      name: "Easy Trail",
      distance: "2 km",
      duration: "30 mins",
      difficulty: "Beginner Friendly",
      icon: MapPin
    },
    {
      name: "Moderate Trail",
      distance: "5 km",
      duration: "1.5 hrs",
      difficulty: "Nature Explorer",
      icon: TrendingUp
    },
    {
      name: "Challenging Trail",
      distance: "8 km",
      duration: "3 hrs",
      difficulty: "Adventure Seeker",
      icon: TrendingUp
    },
    {
      name: "Scenic Loop",
      distance: "6 km",
      duration: "2 hrs",
      difficulty: "Photography Path",
      icon: MapPin
    }
  ];

  return (
    <div className="min-h-full bg-linear-to-br relative overflow-hidden">

      {/* Animated Leaf Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {[
          { icon: "🍃", style: { top: "80px", left: "40px" } },
          { icon: "🌿", style: { bottom: "160px", right: "80px" } },
          { icon: "🍀", style: { top: "33%", right: "25%" } },
          { icon: "🌱", style: { bottom: "60px", left: "25%" } }
        ].map((leaf, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400 text-8xl"
            style={leaf.style}
            initial={{ y: 0 }}
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 6, repeat: Infinity, delay: i * 1.2 }}
          >
            {leaf.icon}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 md:py-16">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button variant='secondary'>
            <Footprints />
            Walking Trails
          </Button>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <GradientText variant='primary' className='mt-5'>
            Walking Tracks & Green Trails
          </GradientText>
        </motion.div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-12 mt-10 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold text-green-600 mb-4">
              Nature Immersion Paths
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Explore curated walking trails through pristine forests and serene landscapes.
              Each path offers a unique journey for all experience levels.
            </p>

            {/* TRAIL CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trails.map((trail, index) => (
                <motion.div
                  key={trail.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="group bg-linear-to-br from-green-900/20 to-green-800/10
                  backdrop-blur-md border border-green-600/30 rounded-2xl 
                  p-4 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/20
                  transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-white mb-1 group-hover:text-green-300 transition-colors">
                        {trail.name}
                      </h3>

                      <p className="text-green-400/80 text-sm mb-3">
                        {trail.difficulty}
                      </p>

                      <div className="flex flex-wrap gap-3 text-gray-400 text-sm">
                        <span className="flex items-center gap-1 min-w-[85px]">
                          <MapPin className="w-4 h-4" />
                          {trail.distance}
                        </span>

                        <span className="flex items-center gap-1 min-w-[85px]">
                          <Clock className="w-4 h-4" />
                          {trail.duration}
                        </span>
                      </div>
                    </div>

                    {/* ICON */}
                    <div className="bg-green-500/10 p-3 rounded-full group-hover:bg-green-500/20 transition-colors shrink-0">
                      <trail.icon className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl overflow-hidden shadow-2xl shadow-green-900/50 
                border border-green-600/20"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
                alt="Lush green forest walking trail"
                className="w-full h-80 md:h-[380px] lg:h-[380px] object-cover"
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="bg-green-500 p-2 rounded-lg">
                  <Footprints className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800">Trail Experience</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Guided eco-walks available daily. Book your nature immersion journey today.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default WalkingTrailsSection;
