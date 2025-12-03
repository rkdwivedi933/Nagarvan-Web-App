import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Leaf, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../layout/Button';
import GradientText from '../layout/GradientText';

const SelfiePoints = () => {

  const bigImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&q=80"
  ];

  const smallImages = [
    "https://images.unsplash.com/photo-1545389336-cf090694435e?w=500&q=80",
    "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=500&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80",
    "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=500&q=80"
  ];

  const allImages = [...bigImages, ...smallImages];

  const [openIndex, setOpenIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);


  const showPrev = () => {
    setOpenIndex(prev => prev === 0 ? allImages.length - 1 : prev - 1);
  };

  const showNext = () => {
    setOpenIndex(prev => prev === allImages.length - 1 ? 0 : prev + 1);
  };


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
    <div className="bg-linear-to-b py-20 relative overflow-hidden min-h-full">

      {/* Background Decorative Icons */}
      <Leaf className="absolute top-20 left-10 w-40 h-40 text-white opacity-10 rotate-12" strokeWidth={0.5} />
      <Camera className="absolute bottom-20 right-16 w-32 h-32 text-white opacity-7 -rotate-12" strokeWidth={0.5} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <Button variant='secondary'>
            <Camera className="w-4 h-4" />
            <span className="font-semibold">Selfie Points</span>
          </Button>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-[#C8F7C5] flex items-center gap-3 justify-center mt-4"
        >
          <Camera className="text-[#67d17e] w-8 h-8" />
          <GradientText>Selfie Points</GradientText>
          <Camera className="text-[#67d17e] w-8 h-8" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-lg italic mt-3 text-center"
        >
          "Strike a pose at Satna's most Instagram-worthy spots"
        </motion.p>

        <div className="w-20 h-0.5 bg-[#3FB06F] mx-auto mt-4 rounded-full" />

        {/* Big Images Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {bigImages.map((img, i) => (
            <motion.div
              key={i}
              onClick={() => setOpenIndex(i)}
              className="cursor-pointer overflow-hidden rounded-xl md:rounded-2xl border border-white/10 shadow-lg shadow-black/40 hover:scale-[1.03] transition-all bg-[#132d1a]/50"
            >
              <img src={img} className="w-full h-64 md:h-80 object-cover" />
            </motion.div>
          ))}
        </div>

        {/* Small Images Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {smallImages.map((img, i) => (
            <motion.div
              key={i}
              onClick={() => setOpenIndex(i + bigImages.length)}
              className="cursor-pointer overflow-hidden rounded-xl md:rounded-2xl border border-white/10 shadow-lg shadow-black/40 hover:scale-[1.03] transition-all bg-[#132d1a]/50"
            >
              <img src={img} className="w-full h-48 md:h-56 object-cover" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {openIndex !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm mt-20 p-6 flex items-center justify-center z-9999">

          <div className="relative max-w-4xl max-h-[80vh]">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpenIndex(null)}
              className="absolute -top-4 -right-4 z-50 p-2 bg-white/90 hover:bg-white rounded-full shadow-xl"
            >
              <X size={22} className="text-black" />
            </button>

            {/* MAIN IMAGE */}
            <motion.img
              key={openIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={allImages[openIndex]}
              className="rounded-xl max-h-[80vh] object-contain shadow-2xl "
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

export default SelfiePoints;
