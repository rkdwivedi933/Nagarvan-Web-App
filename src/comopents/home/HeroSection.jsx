
import { motion, useScroll, useTransform } from 'framer-motion';
import { Map, Calendar, MapPin, Clock, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -30]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.3]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const infoCards = [
    {
      icon: MapPin,
      label: "Location",
      value: "Smart City, Satna (M.P.)",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Clock,
      label: "Open Daily",
      value: "08:00 AM - 08:00 PM",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Star,
      label: "Rating",
      value: "4.9/5",
      showStar: true,
      gradient: "from-yellow-400 to-orange-500"
    }
  ];
const navigate = useNavigate();
const handlePlanVisitButoon = () =>{
  navigate('/contact')
}
const handleExxploreButoon = () =>{
  navigate('/attractions')
}
  return (
    <div className="relative min-h-full overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-[0.85]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542202229-7d93c33f5d07?q=80&w=1170&auto=format&fit=crop')"
        }}
      />

      {/* Enhanced Vignette for Depth */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>

      {/* Soft Glow Borders */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Glow Orbs (same logic, improved color) */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-600/25 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-green-600/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Particles */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-300/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{ y: [0, -25, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Content Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center"
      >

        {/* Title */}
        <motion.h1
          variants={titleVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight drop-shadow-xl"
        >
          <span className="text-white">Welcome </span>

          <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-emerald-200 via-green-300 to-teal-200">
            Nagar Van

            {/* underline */}
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-[3px] bg-linear-to-r from-transparent via-emerald-400 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />

            {/* floating emoji */}
            <motion.div
              animate={{ rotate: [0, 12, -12, 0], y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 -top-4 text-4xl"
            >
              🍃
            </motion.div>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={subtitleVariants}
          className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 font-light max-w-3xl mb-12 leading-relaxed drop-shadow"
        >
          A green escape for families, peace seekers and nature lovers
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={buttonVariants}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="relative px-8 py-4 bg-linear-to-r from-emerald-600 to-green-600 rounded-full font-semibold text-white shadow-xl overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-emerald-400 to-green-400"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span onClick={handleExxploreButoon } className="relative z-10 flex items-center gap-2 cursor-pointer">
              <Map className="w-5 h-5" />
              Explore Attractions
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-emerald-300/40 rounded-full font-semibold text-white hover:bg-white/20 hover:border-emerald-300 transition-all shadow-xl"
          >
            <span onClick={handlePlanVisitButoon} className="flex items-center gap-2 cursor-pointer">
              <Calendar className="w-5 h-5" />
              Plan Your Visit
            </span>
          </motion.button>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full"
        >
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-emerald-500/20 transition-all"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${card.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-all`}
              />

              <div className="relative mb-4 flex justify-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 bg-linear-to-br ${card.gradient} rounded-full flex items-center justify-center shadow-lg`}
                >
                  <card.icon className="w-7 h-7 text-white" />
                </motion.div>
              </div>

              <div className="relative">
                <p className="text-emerald-300/80 text-sm font-medium mb-2">
                  {card.label}
                </p>

                <p className="text-white text-lg font-bold flex justify-center gap-2">
                  {card.value}
                  {card.showStar && (
                    <motion.span
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 6, -6, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-yellow-400"
                    >
                      ⭐
                    </motion.span>
                  )}
                </p>
              </div>

              <div
                className={`absolute bottom-0 left-0 right-0 h-[3px] bg-linear-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-all`}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
