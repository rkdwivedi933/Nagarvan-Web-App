import { motion } from "framer-motion";

const BlogBackground = ({ children }) => {
  const leaves = Array.from({ length: 10 });

  const LeafSVG = () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-40"
    >
      <path
        d="M12 52C12 30 28 12 52 12C52 36 34 52 12 52Z"
        fill="rgba(0,255,120,0.25)"
      />
      <path
        d="M20 44C20 30 30 20 44 20"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div
      className="
        relative w-full min-h-full overflow-hidden
        bg-linear-to-b bg-[#0c3a0f]
      "
    >
      {/* Soft Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px] opacity-70 pointer-events-none" />

      {/* Floating Leaves - slower + softer for blog feel */}
      {leaves.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
            scale: Math.random() * 0.3 + 0.7,
            rotate: Math.random() * 360,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.8,
            rotate: Math.random() * 360 + 360,
          }}
          transition={{
            duration: Math.random() * 18 + 14, // slower
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 4,
          }}
          className="absolute pointer-events-none"
        >
          <LeafSVG />
        </motion.div>
      ))}

      {/* Blog Page Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default BlogBackground;
