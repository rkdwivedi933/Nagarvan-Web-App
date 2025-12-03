import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

const ContactBackground = ({ children }) => {
  const leaves = Array.from({ length: 6 });
  const contactIcons = Array.from({ length: 5 });

  // Leaf SVG
  const LeafSVG = () => (
    <svg
      width="30"
      height="30"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-40"
    >
      <path
        d="M12 52C12 30 28 12 52 12C52 36 34 52 12 52Z"
        fill="rgba(0,255,120,0.28)"
      />
      <path
        d="M20 44C20 30 30 20 44 20"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  // Randomly choose icon (phone, mail, message)
  const getRandomIcon = () => {
    const icons = [
      <Phone size={26} className="text-white opacity-[0.55]" />,
      <Mail size={26} className="text-white opacity-[0.55]" />,
      <MessageCircle size={26} className="text-white opacity-[0.55]" />,
    ];
    return icons[Math.floor(Math.random() * icons.length)];
  };

  return (
    <div
      className="
        relative w-full min-h-screen overflow-hidden
        bg-linear-to-b bg-[#0c3a0f]
      "
    >
      {/* Soft glow over top */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,160,0.15),transparent_60%)] pointer-events-none" />

      {/* Slight blur */}
      <div className="absolute inset-0 backdrop-blur-[1.5px] opacity-80 pointer-events-none" />

      {/* Floating Leaves */}
      {leaves.map((_, i) => (
        <motion.div
          key={`leaf-${i}`}
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
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
          className="absolute pointer-events-none"
        >
          <LeafSVG />
        </motion.div>
      ))}

      {/* Floating Contact Icons */}
      {contactIcons.map((_, i) => (
        <motion.div
          key={`icon-${i}`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
            scale: Math.random() * 0.4 + 0.8,
            rotate: Math.random() * 45,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.7,
            rotate: Math.random() * 45 + 180,
          }}
          transition={{
            duration: Math.random() * 18 + 14,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
          className="absolute pointer-events-none"
        >
          {getRandomIcon()}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default ContactBackground;
