import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TreePine, Leaf, Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../layout/Button";
import GradientText from "../layout/GradientText";

const KidsZonePlaygrounds = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [allImages, setAllImages] = useState([]);

  const firstRowImages = [
    "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=700&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
    "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=700&q=80",
  ];

  const secondRowImages = [
    "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=700&q=80",
    "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=700&q=80",
    "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=700&q=80",
  ];

  const openModal = (imgs, index) => {
    setAllImages(imgs);
    setSelectedIndex(index);
  };

  const closeModal = () => setSelectedIndex(null);

  const showPrev = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : allImages.length - 1));

  const showNext = () =>
    setSelectedIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0));

  useEffect(() => {
  if (selectedIndex !== null) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [selectedIndex]);

  return (
    <div className="bg-linear-to-b relative overflow-hidden min-h-full">
      {/* Background Icons */}
      <Leaf className="absolute left-6 top-10 w-12 h-12 text-white/10 rotate-12" />
      <TreePine className="absolute right-10 bottom-10 w-14 h-14 text-white/10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <Button variant="secondary">
            <Camera className="w-4 h-4" />
            <span className="font-semibold">Kids Zone</span>
          </Button>
        </motion.div>





        {/* Heading */}
       <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-[#C8F7C5] flex items-center gap-3 justify-center mt-4"
        >
          < TreePine className="text-[#67d17e] w-8 h-8" />
          <GradientText>Kids zone</GradientText>
          < TreePine className="text-[#67d17e] w-8 h-8" />
        </motion.div>


        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg italic mt-3 text-center"
        >
          "Where laughter echoes and imagination runs wild"
        </motion.p>

        {/* Underline */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-20 h-0.5 bg-[#3FB06F] mx-auto mt-4 rounded-full"
        />

        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {firstRowImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => openModal(firstRowImages, index)}
              className="cursor-pointer rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#132d1a]/50 hover:scale-[1.03] transition-all"
            >
              <img src={image} className="w-full h-64 md:h-72 object-cover" />
            </motion.div>
          ))}
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {secondRowImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => openModal(secondRowImages, index)}
              className="cursor-pointer rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#132d1a]/50 hover:scale-[1.03] transition-all"
            >
              <img src={image} className="w-full h-64 md:h-72 object-cover" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-9999 p-3">
          <div className="relative w-full max-w-3xl">

            {/* ---- CLOSE BUTTON (Inside Image, Mobile Friendly) ---- */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-black/60 backdrop-blur-md p-2 rounded-full hover:bg-black z-10000 
              md:p-3 md:top-4 md:right-4"
            >
              <X className="text-white" size={26} />
            </button>

            {/* ---- LEFT BUTTON ---- */}
            <button
              onClick={showPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-md p-2 rounded-full hover:bg-black z-10000
              md:p-3 md:left-4"
            >
              <ChevronLeft className="text-white" size={30} />
            </button>

            {/* ---- IMAGE ---- */}
            <img
              src={allImages[selectedIndex]}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />

            {/* ---- RIGHT BUTTON ---- */}
            <button
              onClick={showNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-md p-2 rounded-full hover:bg-black z-10000
              md:p-3 md:right-4"
            >
              <ChevronRight className="text-white" size={30} />
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default KidsZonePlaygrounds;
