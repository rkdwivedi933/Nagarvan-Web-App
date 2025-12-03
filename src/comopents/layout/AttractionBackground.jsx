import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AttractionBackground = ({ children }) => {
  const [windowSize, setWindowSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    setWindowSize({
      w: window.innerWidth,
      h: window.innerHeight,
    });
  }, []);

  const particles = Array.from({ length: 14 });

  const LeafSVG = ({ size = 30 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-45"
    >
      <path
        d="M12 52C12 30 28 12 52 12C52 36 34 52 12 52Z"
        fill="rgba(0,255,120,0.32)"
      />
      <path
        d="M20 44C20 30 30 20 44 20"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-linear-to-b bg-[#0c3a0f]">

      {/* Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,160,0.10),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_40%)] mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_60%)] pointer-events-none" />

      {/* Particles */}
      {windowSize.w > 0 &&
        particles.map((_, i) => {
          const startX = Math.random() * windowSize.w;
          const startY = Math.random() * windowSize.h;
          const endX = Math.random() * windowSize.w;
          const endY = Math.random() * windowSize.h;

          return (
            <motion.div
              key={i}
              initial={{
                x: startX,
                y: startY,
                opacity: 0,
                scale: Math.random() * 0.4 + 0.7,
                rotate: Math.random() * 360,
              }}
              animate={{
                x: endX,
                y: endY,
                opacity: 0.85,
                rotate: Math.random() * 540 + 360,
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
              className="absolute pointer-events-none"
            >
              <LeafSVG size={Math.random() * 18 + 22} />
            </motion.div>
          );
        })}

      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default AttractionBackground;
