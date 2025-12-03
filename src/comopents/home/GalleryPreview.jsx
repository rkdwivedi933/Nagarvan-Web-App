import React, { useState, useEffect } from "react";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../layout/Button";
import GradientText from "../layout/GradientText";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const GalleryPreview = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // MODAL STATE
  const [selectedIndex, setSelectedIndex] = useState(null);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
      alt: "Serene lake view",
    },
    {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      alt: "Indoor nature hall",
    },
    {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
      alt: "Sunset seating area",
    },
    {
      url: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80",
      alt: "Forest pathway",
    },
  ];

  const navigate = useNavigate();
  const hanleClickButton = () => navigate("/gallery");

  // NEXT IMAGE
  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
  };

  // PREV IMAGE
  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  // KEYBOARD SUPPORT
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
    <div className="min-h-full relative overflow-hidden py-10 px-4 ">
      {/* FLOATING BUBBLES */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, opacity: 0.3 }}
          animate={{
            y: -30,
            opacity: 0.8,
            transition: {
              repeat: Infinity,
              duration: 3 + Math.random() * 2,
              repeatType: "mirror",
            },
          }}
          className="absolute bg-emerald-300/10 rounded-full blur-3xl"
          style={{
            width: 120,
            height: 120,
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
          }}
        ></motion.div>
      ))}

      {/* LIGHT */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-400/10 blur-[160px] rounded-full"></div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* EXPLORE BUTTON */}
        <div className="flex justify-center mb-8">
          <Button variant="secondary">
            <Camera size={16} />
            <span>Explore Our Gallery</span>
          </Button>
        </div>

        {/* HEADING */}
        <div className="text-center mb-4">
          <GradientText variant="primary">Gallery Preview</GradientText>
        </div>

        <p className="text-center text-white/60 text-lg mb-12 max-w-2xl mx-auto">
          Witness the beauty and serenity of Nagar Van through our curated
          collection.
        </p>

        {/* GRID */}
      <div
  style={{
    display: "grid",

    
    gridTemplateColumns:
      window.innerWidth < 768
        ? "1fr 1fr"               
        : "1fr 1fr 1.8fr 1fr",    

    gridTemplateRows: window.innerWidth < 768 ? "auto" : "300px",
    gap: "10px",
  }}
  className="mb-12"
>
  {galleryImages.map((image, index) => (
    <motion.div
      key={index}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={() => setSelectedIndex(index)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-lg"
    >
      <img
        src={image.url}
        alt={image.alt}
        style={{
          width: "100%",
          height: window.innerWidth < 768 ? "200px" : "100%", 
          objectFit: "cover",
          transition: "0.7s",
          transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
          filter: hoveredIndex === index ? "brightness(1.1)" : "brightness(1)",
        }}
      />
    </motion.div>
  ))}
</div>






        {/* FULL GALLERY BUTTON */}
        <div className="flex justify-center">
          <Button onClick={hanleClickButton} variant="primary">
            View Full Gallery
          </Button>
        </div>
      </div>

      {/* 🟢 MODAL */}
   {selectedIndex !== null && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-99999 flex items-center justify-center p-4">

    <div className="relative">

      {/* IMAGE */}
      <img
        src={galleryImages[selectedIndex].url}
        alt={galleryImages[selectedIndex].alt}
        className="max-w-[90vw] max-h-[90vh] rounded-3xl object-contain"
      />

      {/* CLOSE BUTTON INSIDE IMAGE */}
      <button
        onClick={() => setSelectedIndex(null)}
        className="absolute top-4 right-4 bg-black/60 p-2 rounded-full text-white hover:bg-black/80 transition z-999999"
      >
        <X size={30} />
      </button>

      {/* PREV BUTTON */}
      <button
        onClick={prevImage}
        className="absolute left-[-60px] top-1/2 -translate-y-1/2 text-white hover:text-emerald-400 transition"
      >
        <ChevronLeft size={48} />
      </button>

      {/* NEXT BUTTON */}
      <button
        onClick={nextImage}
        className="absolute right-[-60px] top-1/2 -translate-y-1/2 text-white hover:text-emerald-400 transition"
      >
        <ChevronRight size={48} />
      </button>

    </div>

  </div>
)}


    </div>
  );
};

export default GalleryPreview;
