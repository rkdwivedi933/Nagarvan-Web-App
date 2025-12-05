import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Trees, X, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../layout/Button";
import GradientText from "../layout/GradientText";

const NatureLandscapes = () => {
  const images = [
    // top row
    "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&q=80",

    // middle row
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=400&q=80",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&q=80",
    "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=400&q=80",

    // bottom row
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&q=80",
    "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80",
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);


  const showPrev = () => {
    setOpenIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = () => {
    setOpenIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  // PREVENT BACKGROUND SCROLL WHEN MODAL IS OPEN
useEffect(() => {
  if (openIndex !== null) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [openIndex]);



  return (
    <div className="bg-linear-to-b min-h-full">
      <div className="max-w-7xl mx-auto">

        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <Button variant="secondary">
            <Leaf className="w-4 h-4" />
            Nature Landscapes
          </Button>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-[#C8F7C5] flex items-center gap-3 justify-center mt-4"
        >
          < Trees className="text-[#67d17e] w-8 h-8" />
          <GradientText>Nature & <br /> Landscapes </GradientText>
          < Trees className="text-[#67d17e] w-8 h-8" />
        </motion.div>

        <p className="text-gray-300 text-lg italic text-center mt-3">
          "A green escape within the heart of Satna"
        </p>

        <div className="w-20 h-0.5 bg-[#3FB06F] mx-auto mt-4 rounded-full" />

        {/* GRID IMAGES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setOpenIndex(i)}
              className="cursor-pointer overflow-hidden bg-[#1A2F22]/50 border border-white/10 rounded-xl shadow-lg shadow-black/40 hover:scale-[1.03] transition-all duration-300 col-span-1"
            >
              <img src={img} className="w-full h-48 md:h-64 object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {openIndex !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-9999">

          <div className="relative max-w-4xl max-h-[80vh] mx-auto">

            {/* CLOSE BUTTON — CORNER OF IMAGE */}
            <button
              onClick={() => setOpenIndex(null)}
              className="absolute top-0 right-2 z-50 p-2 bg-white/90 hover:bg-white rounded-full shadow-xl"
            >
              <X size={22} className="text-black" />
            </button>

            {/* MAIN IMAGE */}
            <motion.img
              key={openIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={images[openIndex]}
              className="rounded-xl w-auto p-2 max-h-[80vh] object-contain shadow-2xl"
            />

            {/* LEFT ARROW */}
            <button
              onClick={showPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white rounded-full shadow-xl"
            >
              <ChevronLeft size={26} className="text-black" />
            </button>

            {/* RIGHT ARROW */}
            <button
              onClick={showNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white rounded-full shadow-xl"
            >
              <ChevronRight size={26} className="text-black" />
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default NatureLandscapes;
