import React from "react";
import { motion } from "framer-motion";
import Button from "../layout/Button";
import GradientText from "../layout/GradientText";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const features = [
    { id: 1, text: "Family Friendly Environment" },
    { id: 2, text: "100% Eco-Friendly Park" },
    { id: 3, text: "Open All Year Round" },
  ];

  const stats = [
    { id: 1, value: "50+", label: "Tree Species", icon: "🌳" },
    { id: 2, value: "10K+", label: "Annual Visitors", icon: "👥" },
    { id: 3, value: "4.9/5", label: "Visitor Rating", icon: "⭐" },
    { id: 4, value: "40", label: "Acres of Nature", icon: "🌿" },
  ];
const navigate = useNavigate();
const handleExploreStory = () =>{
  navigate('/blog')
}
  return (
    <div className="min-h-full bg-linear-to-br  relative overflow-hidden">
      {/* Floating Leaf Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-[8%] left-[5%] text-9xl animate-pulse">
          🌿
        </div>
        <div className="absolute top-[30%] right-[10%] text-8xl animate-pulse">
          🍃
        </div>
        <div className="absolute bottom-[20%] left-[15%] text-7xl animate-pulse">
          🌿
        </div>
        <div className="absolute top-[60%] right-[20%] text-8xl animate-pulse">
          🍃
        </div>
        <div className="absolute bottom-[10%] right-[8%] text-6xl animate-pulse">
          🌿
        </div>
      </div>

      {/* Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#2ECC71] opacity-10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-[#27AE60] opacity-8 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-26    relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-full">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}

            <Button variant="secondary">
              <svg
                className="w-4 h-4 text-[#2ECC71]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              About Nagar Van
            </Button>

            {/* Heading */}

            <GradientText
              variant="primary"
              className="text-2xl md:text-4xl font-bold  mb-2"
            >
              Nature's Haven In
              <br />
              Satna
            </GradientText>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 text-base leading-relaxed max-w-xl"
            >
              Nagar Van is a cherished green sanctuary in the heart of Satna,
              Madhya Pradesh. Established to provide a peaceful retreat for
              families and nature enthusiasts, our park offers a perfect blend
              of recreational activities, natural beauty, and environmental
              conservation.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#2ECC71]/20 border border-[#2ECC71]/40 flex items-center justify-center shrink-0">
                    <svg
                      className="w-3.5 h-3.5 text-[#2ECC71]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-white/90 text-sm font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
           <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.9 }}
  className="flex flex-col md:flex-row gap-4 pt-4 h-auto md:h-16"
>
  <Button
    variant="primary"
    onClick={handleExploreStory}
    className="h-12"
  >
    Explore Our Story
  </Button>

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    className="px-8 h-12 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:border-white/50 hover:bg-white/5 transition-all duration-300"
  >
    Contact Us
  </motion.button>
</motion.div>

          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            {/* Forest Image Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
                alt="Forest Pathway"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Est Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4 text-[#2ECC71]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <polyline points="12 6 12 12 16 14" strokeWidth="2" />
                </svg>
                <span className="text-sm font-semibold text-gray-800">
                  Est. 2024 • 2+ Years
                </span>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 ">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 40px rgba(46, 204, 113, 0.2)",
                  }}
                  className="bg-linear-to-br py-1   from-[#1a4d2e]/60 to-[#0d2818]/60 backdrop-blur-md border border-[#2ECC71]/20 rounded-2xl p-6 shadow-xl relative overflow-hidden group"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-[#2ECC71]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xl">{stat.icon}</span>
                    </div>
                    <div className="text-xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>

                  {/* Corner Glow */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#2ECC71] rounded-full opacity-5 blur-2xl translate-x-1/2 translate-y-1/2"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
