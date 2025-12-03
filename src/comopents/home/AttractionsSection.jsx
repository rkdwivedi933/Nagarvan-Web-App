import React from "react";
import { motion } from "framer-motion";
import Button from "../layout/Button";
import GradientText from "../layout/GradientText";
import { useNavigate } from "react-router-dom";

const AttractionsSection = () => {
  const attractions = [
    { id: 1, title: "Hanuman Temple", subtitle: "A peaceful sacred spot" },
    { id: 2, title: "Walking Track", subtitle: "Nature walking pathways" },
    { id: 3, title: "Bhima Lake", subtitle: "Beautiful lakeside view" },
    { id: 4, title: "Kids Playground", subtitle: "Safe fun zone for kids" },
    { id: 5, title: "Selfie Points", subtitle: "Perfect scenic photo spots" },
    { id: 6, title: "Restaurant", subtitle: "Delicious food & ambiance" },
  ];

  const bubbleFloat = {
    animate: {
      y: [0, -12, 0],
      x: [0, 6, 0],
      transition: {
        repeat: Infinity,
        duration: 6,
        ease: "easeInOut"
      }
    }
  };

const navigate = useNavigate();
const handleClickButton = () =>{
  navigate('/attractions')
}

  return (
    <div className="relative min-h-full py-10 px-4  overflow-hidden">

      {/* OPTIONAL: Background floating leaf shapes */}
      <div className="pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-20 left-10 opacity-10 rotate-12"
        >
          🍃
        </motion.div>

        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute bottom-32 right-16 opacity-10 rotate-30"
        >
          🍂
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <Button variant="secondary">🌿 More attractions coming soon</Button>

          <div className="mt-4">
            <GradientText>Explore Our Attractions</GradientText>
          </div>

          <p className="text-white/60 max-w-xl mx-auto mt-3">
            Experience the beauty and highlights of Nagar Van with a premium visual design.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {attractions.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="
                relative p-8 rounded-3xl 
                bg-linear-to-br from-[#0a4525] to-[#062615]
                border border-[#3FB06F]/40 
                shadow-[0_0_25px_rgba(63,176,111,0.35)]
                overflow-hidden cursor-pointer
              "
            >

              {/* 🟢 Neon Border Glow */}
              <div className="absolute inset-0 rounded-3xl border border-[#3FB06F]/20 shadow-[0_0_50px_20px_rgba(63,176,111,0.15)]"></div>

              {/* 🍃 Leaf Silhouette Shape */}
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-10 -left-10 text-[90px] opacity-[0.06] pointer-events-none"
              >
                🍃
              </motion.div>

              {/* 🫧 FLOATING GRADIENT BUBBLES */}
              <motion.div
                variants={bubbleFloat}
                animate="animate"
                className="absolute top-6 left-6 w-20 h-20 rounded-full 
                bg-linear-to-br from-green-300/20 to-green-500/30 blur-2xl"
              />

              <motion.div
                variants={bubbleFloat}
                animate="animate"
                className="absolute bottom-10 right-6 w-16 h-16 rounded-full 
                bg-linear-to-br from-green-200/10 to-green-400/20 blur-xl"
              />

              <motion.div
                variants={bubbleFloat}
                animate="animate"
                className="absolute bottom-20 left-14 w-10 h-10 rounded-full 
                bg-linear-to-br from-green-400/20 to-green-300/20 blur-md"
              />

              <motion.div
                variants={bubbleFloat}
                animate="animate"
                className="absolute top-16 right-20 w-14 h-14 rounded-full 
                bg-linear-to-br from-green-300/15 to-green-500/20 blur-xl"
              />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm mt-1">
                  {item.subtitle}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <Button onClick={handleClickButton} variant="primary">Explore More</Button>
        </div>

      </div>
    </div>
  );
};

export default AttractionsSection;
