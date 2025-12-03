import React from "react";
import { motion } from "framer-motion";

const GradientText = ({ children, className = "", variant = "primary" }) => {
  const variants = {
    primary:
      "bg-gradient-to-r from-white via-green-400 to-green-900 text-transparent bg-clip-text font-bold text-4xl leading-none leading-tight",

    secondary: `
      bg-clip-text text-transparent 
      bg-gradient-to-br from-[#b2f5ea] via-[#6ee7b7] to-[#3b82f6]
      drop-shadow-[0_0_10px_rgba(100,255,180,0.35)]
      tracking-wide 
      font-semibold
      transition-all duration-500 ease-out 
      hover:drop-shadow-[0_0_18px_rgba(100,255,180,0.55)]
      hover:scale-[1.04]
    `,
  };

  return (
    <motion.h1
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </motion.h1>
  );
};

export default GradientText;
