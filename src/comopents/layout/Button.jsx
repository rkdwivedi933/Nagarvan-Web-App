import React from "react";
import { motion } from "framer-motion";

const Button = ({ variant = "primary", children, onClick }) => {
  const baseClasses =
    "relative rounded-full font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 overflow-hidden";

  const variants = {
    primary: `
      px-8 py-3 text-black 
      bg-gradient-to-b from-green-200 to-green-300 
      cursor-pointer 
      shadow-[0_3px_8px_rgba(0,0,0,0.25)]
      hover:shadow-[0_6px_18px_rgba(63,176,111,0.45)]
      hover:ring-2 hover:ring-green-300/60
      hover:bg-gradient-to-b hover:from-green-100 hover:to-green-300
    `,

    secondary: `
      px-5 py-2 inline-flex items-center gap-2
      bg-[#3FB06F]/20 
      border border-[#3FB06F]/30 
      rounded-full 
      text-[#3FB06F] 
      text-sm font-medium 
      cursor-default
      transition-all duration-300
      hover:border-[#3FB06F]/50
    `,
  };

  const hoverEffects =
    variant === "primary"
      ? {
          whileHover: { scale: 1.06 },
          whileTap: { scale: 0.9 },
        }
      : {};

  return (
    <motion.button
      {...hoverEffects}
      onClick={variant === "primary" ? onClick : undefined}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {/* Shine Effect */}
      {variant === "primary" && (
        <span
          className="
            absolute inset-0 
            bg-linear-to-r from-transparent via-white/40 to-transparent
            translate-x-[-150%]
            group-hover:translate-x-[150%]
            transition-transform duration-700
          "
        />
      )}

      {/* Glow Ring Animation */}
      {variant === "primary" && (
        <span
          className="
            absolute inset-0 rounded-full 
            ring-0 ring-green-300/0 
            group-hover:ring-4 group-hover:ring-green-300/40
            transition-all duration-500
          "
        />
      )}

      {/* Floating Particles */}
      {variant === "primary" && (
        <span className="absolute -top-2 left-2 w-2 h-2 bg-green-400/70 rounded-full blur-[2px] animate-ping"></span>
      )}
      {variant === "primary" && (
        <span className="absolute bottom-2 right-3 w-1.5 h-1.5 bg-green-300/70 rounded-full blur-[1px] animate-pulse"></span>
      )}

      {children}
    </motion.button>
  );
};

export default Button;
