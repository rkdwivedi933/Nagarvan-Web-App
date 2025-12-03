import React from "react";
import { motion } from "framer-motion";
import Button from "../layout/Button";
import GradientText from "../layout/GradientText";

const FacilitiesSection = () => {
  const facilities = [
    {
      id: 1,
      icon: "🍽️",
      iconBg: "bg-green-700/40",
      title: "Restaurant",
      description:
        "Fine dining experience with panoramic views. Enjoy delicious meals.",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      hasExplore: true,
    },
    {
      id: 2,
      icon: "💖",
      iconBg: "bg-pink-600/40",
      title: "Marriage Garden",
      description:
        "Beautifully decorated garden ideal for weddings and celebrations.",
      image:
        "https://media.istockphoto.com/id/1400801171/photo/wedding-guest-setup-with-fresh-flowers.webp?a=1&b=1&s=612x612&w=0&k=20&c=UQyoBytEXCPDZMsOpQ5yA0J8v9FR7zg5Svd1jcQm0FI=",
      hasExplore: true,
    },
    {
      id: 3,
      icon: "🎵",
      iconBg: "bg-purple-600/40",
      title: "Concerts",
      description:
        "Live music performances and cultural events under the stars.",
      image:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
      hasExplore: true,
    },
    {
      id: 4,
      icon: "🚶‍♂️",
      iconBg: "bg-green-700/40",
      title: "Morning Walk",
      description:
        "Experience calmness with scenic walking tracks surrounded by greenery.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
      hasExplore: true,
    },
    {
      id: 5,
      icon: "🅿️",
      iconBg: "bg-pink-600/40",
      title: "Parking",
      description: "Secure and spacious parking facilities for all guests.",
      image:
        "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",
      hasExplore: true,
    },
    {
      id: 6,
      icon: "🚻",
      iconBg: "bg-purple-600/40",
      title: "Washroom",
      description:
        "Clean and well-maintained facilities with modern amenities.",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      hasExplore: true,
    },
  ];

  const floatBubble = {
    animate: {
      y: [0, -15, 0],
      x: [0, 8, 0],
      transition: { repeat: Infinity, duration: 6, ease: "easeInOut" }
    }
  };

  return (
    <div className="min-h-full bg-linear-to-b relative overflow-hidden py-10 px-4 pb-5">

      {/* SOFT BACKGROUND LEAFS */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-[10%] left-[8%] text-7xl">🌿</div>
        <div className="absolute top-[20%] right-[12%] text-6xl">🍃</div>
        <div className="absolute bottom-[25%] left-[15%] text-5xl">🌿</div>
        <div className="absolute top-[55%] right-[20%] text-6xl">🍃</div>
        <div className="absolute bottom-[15%] right-[10%] text-5xl">🌿</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <Button variant="secondary">
            <span className="text-base">🏢</span>
            <span className="text-[#3FB06F] text-sm font-medium">
              Nagar Van Facilities
            </span>
          </Button>

          <GradientText>Nagar Van Facilities</GradientText>

          <p className="text-white/60 text-base max-w-3xl mx-auto mt-3">
            Explore our world-class amenities designed for unforgettable experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 ">
          {facilities.map((facility) => (
            <motion.div
              key={facility.id}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden 
                         bg-[#0d3a1f]/80 border border-[#3FB06F]/20 
                         shadow-[0_0_25px_rgba(63,176,111,0.25)]
                         backdrop-blur-sm"
                         
            >

              {/*  LEAF SILHOUETTE */}
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-12 -left-10 text-[100px] opacity-[0.06]"
              >
                🍃
              </motion.div>

              {/*  FLOATING BUBBLES */}
              <motion.div
                variants={floatBubble}
                animate="animate"
                className="absolute top-10 left-6 w-20 h-20 rounded-full 
                           bg-linear-to-br from-green-300/20 to-green-500/30 blur-xl"
              />

              <motion.div
                variants={floatBubble}
                animate="animate"
                className="absolute bottom-16 right-8 w-16 h-16 rounded-full 
                           bg-linear-to-br from-green-200/10 to-green-400/20 blur-lg"
              />

              <motion.div
                variants={floatBubble}
                animate="animate"
                className="absolute bottom-24 left-20 w-12 h-12 rounded-full 
                           bg-linear-to-br from-green-400/20 to-green-300/20 blur-md"
              />

              {/*  NEON GLOW OUTER RING */}
              <div className="absolute inset-0 rounded-3xl border border-[#3FB06F]/15 
                              shadow-[0_0_35px_15px_rgba(63,176,111,0.15)]"></div>

              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={facility.image}
                  className="w-full h-full object-cover ]: transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 relative z-10">
                <div className="flex items-start justify-between mb-4">

                  <div className="flex items-center gap-4">
                    <div
                      className={`${facility.iconBg} w-14 h-14 rounded-2xl 
                                  flex items-center justify-center text-2xl 
                                  border border-white/10 backdrop-blur-sm`}
                    >
                      {facility.icon}
                    </div>
                    <h3 className="text-white text-2xl font-bold">
                      {facility.title}
                    </h3>
                  </div>

                 
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {facility.description}
                </p>

              
              </div>

            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="primary">Explore More Attractions</Button>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesSection;
