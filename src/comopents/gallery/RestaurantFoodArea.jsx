import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed, TreePine, Leaf, X, ChevronLeft, ChevronRight } from "lucide-react";
import GradientText from "../layout/GradientText";

const RestaurantFoodArea = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80"
  ];

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const showPrev = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));

  const showNext = () =>
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));


  const [openIndex, setOpenIndex] = useState(null);

// SCROLL LOCK FIXED
useEffect(() => {
  if (selectedIndex !== null) {
    document.body.style.overflow = "hidden"; // lock scroll
  } else {
    document.body.style.overflow = "auto"; // enable scroll
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [selectedIndex]);

  return (
    <section className="bg-linear-to-b py-20 relative overflow-hidden">
      
      {/* Decorative Icons */}
      <Leaf className="absolute left-6 top-10 w-12 h-12 text-white/10" />
      <TreePine className="absolute right-10 bottom-10 w-14 h-14 text-white/10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-[#C8F7C5] flex items-center gap-3 justify-center mt-4"
        >
          < UtensilsCrossed className="text-[#67d17e] w-8 h-8" />
          <GradientText>Restaurant & <br /> Food Area </GradientText>
          < UtensilsCrossed className="text-[#67d17e] w-8 h-8" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg italic mt-3 text-center"
        >
          "Savor the flavors and ambiance of our culinary haven"
        </motion.p>

        {/* Underline */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-20 h-0.5 bg-[#3FB06F] mx-auto mt-4 rounded-full"
        />

        {/* IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {images.slice(0, 2).map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden cursor-pointer
              border border-white/10 shadow-lg bg-[#132d1a]/50 hover:scale-[1.03]
              transition-all"
              onClick={() => openModal(index)}
            >
              <img src={img} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {images.slice(2, 4).map((img, index) => (
            <motion.div
              key={index + 2}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden cursor-pointer
              border border-white/10 shadow-lg bg-[#132d1a]/50 hover:scale-[1.03]
              transition-all"
              onClick={() => openModal(index + 2)}
            >
              <img src={img} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center  z-9999">
          
          <div className="relative">
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 bg-black/50 hover:bg-black rounded-full"
            >
              <X size={30} className="text-white" />
            </button>

            {/* Prev */}
            <button
              onClick={showPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black  rounded-full"
            >
              <ChevronLeft size={32} className="text-white" />
            </button>

            {/* Image */}
            <img
              src={images[selectedIndex]}
              className=" p-2 max-h-[80vh] object-contain rounded-xl shadow-xl"
            />

            {/* Next */}
            <button
              onClick={showNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black p-2 rounded-full"
            >
              <ChevronRight size={32} className="text-white" />
            </button>
          </div>

        </div>
      )}
    </section>
  );
};

export default RestaurantFoodArea;
