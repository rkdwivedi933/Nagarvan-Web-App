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
    },
    {
      id: 5,
      icon: "🅿️",
      iconBg: "bg-pink-600/40",
      title: "Parking",
      description: "Secure and spacious parking facilities for all guests.",
      image:
        "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",
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
    },
  ];

  const floatBubble = {
    initial: { y: 0, opacity: 0.4 },
    animate: {
      y: -20,
      opacity: 0.8,
      transition: {
        repeat: Infinity,
        duration: 3,
        repeatType: "mirror",
      },
    },
  };

  const randomBubbles = Array.from({ length: 6 });

  return (
    <div className="min-h-full relative overflow-hidden py-10 px-4">

      {/* Floating BG Bubbles same as Blog.jsx */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          variants={floatBubble}
          initial="initial"
          animate="animate"
          className="absolute bg-green-300/10 rounded-full blur-3xl"
          style={{
            width: 120,
            height: 120,
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
          }}
        ></motion.div>
      ))}

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {facilities.map((facility) => (
            <motion.div
              key={facility.id}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.3 }}
              className="relative bg-[#0f3b27]/70 border border-[#2ECC71]/20 rounded-3xl 
                         shadow-xl backdrop-blur-md overflow-hidden group"
            >
              {/* Hover Neon Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 
                              group-hover:opacity-100 transition-all duration-300 
                              blur-xl bg-[#2ECC71]/20"></div>

              {/* Internal Floating Bubbles */}
              {randomBubbles.map((_, i) => (
                <motion.div
                  key={i}
                  variants={floatBubble}
                  initial="initial"
                  animate="animate"
                  className="absolute bg-green-200/10 rounded-full blur-xl"
                  style={{
                    width: 40,
                    height: 40,
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                ></motion.div>
              ))}

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={facility.image}
                  className="w-full h-full object-cover group-hover:scale-110 duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70"></div>
              </div>

              {/* CONTENT */}
              <div className="p-6 relative">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`${facility.iconBg} w-14 h-14 rounded-2xl 
                                flex items-center justify-center text-2xl 
                                border border-white/20 backdrop-blur-sm`}
                  >
                    {facility.icon}
                  </div>

                  <h3 className="text-white text-xl font-bold">
                    {facility.title}
                  </h3>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-4">
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
