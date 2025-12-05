import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import GradientText from "../layout/GradientText";

const GalleryCollectionSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const stats = [
    { number: "500+", label: "Photos" },
    { number: "50+", label: "Videos" },
    { number: "12", label: "Collections" },
    { number: "4K", label: "Quality" },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  ];

  // PREVENT SCROLL WHEN MODAL OPEN
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selectedIndex]);

  const nextImage = () =>
    setSelectedIndex((prev) => (prev + 1) % galleryImages.length);

  const prevImage = () =>
    setSelectedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));

  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <div className="relative py-10  ">
    {/* HEADING */}
<div className="text-center">
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide">
            <span className="text-[#D7EECF] block mb-2">Gallery <span className="text-[#5DBB63]">Collection</span></span>
           
          </h1>
  </motion.div>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="text-gray-300 max-w-xl mx-auto mt-6 text-lg"
  >
    Explore breathtaking moments captured at Nagar Van. From serene
    landscapes to vibrant wildlife, discover the natural beauty that awaits you.
  </motion.p>
</div>

{/* STATS */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, delay: 0.3 }}
  className="flex justify-center gap-8 md:gap-20 mt-14 text-center"
>
  {stats.map((stat, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
      className="hover:-translate-y-2 transition-all duration-300"
    >
      <h2 className="text-3xl font-bold text-green-400">{stat.number}</h2>
      <p className="text-white/80">{stat.label}</p>
    </motion.div>
  ))}
</motion.div>


      {/* GALLERY GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-20 ">

        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.07, y: -6 }}
            onClick={() => setSelectedIndex(index)}
            className="cursor-pointer"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl shadow-green-900/40 ">
              <img
                src={image}
                className="h-[250px] md:h-[300px] w-full  object-cover"
                alt=""
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* FULLSCREEN MODAL */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-9999 flex items-center justify-center p-4">
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <img
              src={galleryImages[selectedIndex]}
              className="rounded-3xl max-w-full max-h-full object-contain shadow-2xl"
              alt=""
            />

            {/* CLOSE */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-3 right-3 bg-black/50 p-3 rounded-full text-white hover:bg-black/70"
            >
              <X size={28} />
            </button>

            {/* PREV BTN */}
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:text-green-400"
            >
              <ChevronLeft size={40} />
            </button>

            {/* NEXT BTN */}
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:text-green-400"
            >
              <ChevronRight size={40} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryCollectionSection;
