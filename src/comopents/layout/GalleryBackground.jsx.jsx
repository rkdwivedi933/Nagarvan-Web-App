import { motion } from "framer-motion";

const GalleryBackground = ({ children }) => {
  const particles = Array.from({ length: 12 });

  const LeafSVG = ({ size = 26 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-40"
    >
      <path
        d="M12 52C12 30 28 12 52 12C52 36 34 52 12 52Z"
        fill="rgba(0,255,120,0.18)"
      />
      <path
        d="M20 44C20 30 30 20 44 20"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-linear-to-b bg-[#0c3a0f]">
      {/* Vignette + subtle grid to frame gallery */}
      <div className="absolute inset-0 pointer-events-none">
        {/* radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.45),transparent_40%)] mix-blend-multiply" />
        {/* thin grid lines (subtle) */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M120 0H0V120" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* soft top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-56 bg-[radial-gradient(circle,rgba(0,255,160,0.06),transparent_40%)]" />
      </div>

      {/* Floating particles/leaves for atmosphere */}
      {particles.map((_, i) => {
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const endX = Math.random() * window.innerWidth;
        const endY = Math.random() * window.innerHeight;
        const dur = Math.random() * 18 + 12;
        const scale = Math.random() * 0.5 + 0.6;
        const rotate = Math.random() * 360;
        return (
          <motion.div
            key={i}
            initial={{ x: startX, y: startY, opacity: 0, scale, rotate }}
            animate={{ x: endX, y: endY, opacity: 0.85, rotate: rotate + (Math.random() * 360 + 90) }}
            transition={{ duration: dur, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: Math.random() * 3 }}
            className="absolute pointer-events-none"
            style={{ willChange: "transform, opacity" }}
          >
            <LeafSVG size={Math.random() * 18 + 18} />
          </motion.div>
        );
      })}

      {/* Central framed area for gallery content */}
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto py-12 px-4">
          {/* Optional thin frame to highlight gallery area */}
          <div className="relative rounded-2xl p-6 md:p-10  ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryBackground;
