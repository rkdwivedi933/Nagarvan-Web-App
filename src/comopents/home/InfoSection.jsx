import React from "react";
import { motion } from "framer-motion";

import mainGateImg from "../../assets/infosection/main-gate.c9d6c751.webp";
import frontHutImg from "../../assets/infosection/front-hut.892babe5.webp";
import meditationImg from "../../assets/infosection/meditation.f506635e.webp";
import lakeImg from "../../assets/infosection/lak.418a92ab.webp";
import swingImg from "../../assets/infosection/swing-img.3d466c97.webp";
import Button from "../layout/Button";
import GradientText from "../layout/GradientText";
import { useNavigate } from "react-router-dom";

const InfoSection = () => {
  const images = [
    { id: 1, gridArea: "1 / 1 / 3 / 3", src: mainGateImg, label: "Entrance Gate" },
    { id: 2, gridArea: "1 / 3 / 2 / 4", src: lakeImg, label: "Garden" },
    { id: 3, gridArea: "2 / 3 / 3 / 4", src: meditationImg, label: "Meditation Hall" },
    { id: 4, gridArea: "3 / 1 / 4 / 2", src: swingImg, label: "Wooden Swing" },
    { id: 5, gridArea: "3 / 2 / 4 / 3", src: frontHutImg, label: "Luxury Tent" },
    { id: 6, gridArea: "3 / 3 / 4 / 4", src: lakeImg, label: "Circular Pond" },
  ];

const navigate = useNavigate();
const handleClickButton = () =>{
  navigate('/about')
}

  return (
    <div className="relative min-h-full overflow-hidden">

      {/* 🌟 Floating Green Glow Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-green-400/10 blur-md animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* 🌟 Parallax Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-[1400px] mx-auto px-4 py-10 min-h-full flex items-center"
      >
        <div className="grid lg:grid-cols-2 gap-16 w-full items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <Button variant="secondary">Visit Information</Button>
            </div>

            <GradientText variant="primary">
              <div>
                Where Nature Meets 
                <div>Tranquility</div>
              </div>
            </GradientText>

            <p className="text-white opacity-90 max-w-xl">
              Nagar Van Satna is a pristine sanctuary created under the government
              eco-tourism initiative.
            </p>

            <Button onClick={handleClickButton} variant="primary">Explore More Attractions</Button>
          </motion.div>

          {/* RIGHT IMAGE GRID */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div
              className="grid gap-4"
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr 1fr",
                gridTemplateRows: "100px 120px 150px",
                gap: "10px",
              }}
            >
              {images.map((img, index) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-3xl shadow-lg group border border-white/10 backdrop-blur-sm"
                  style={{ gridArea: img.gridArea }}
                >
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${img.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                    <span className="text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                      {img.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default InfoSection;
