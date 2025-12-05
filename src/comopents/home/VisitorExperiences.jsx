import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Button from "../layout/Button";
import GradientText from "../layout/GradientText";

const VisitorExperiences = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      quote:
        "Our TFP Technologies team had an amazing day at Nagar Van Satna! The greenery, Bhima Lake, and peaceful vibes made it the perfect team getaway!",
      name: "Prins Singh, (CTO)",
      role: "TFP Technologies Pvt. Ltd., Satna",
      avatar:
        "https://api.dicebear.com/7.x/initials/svg?seed=PS&backgroundColor=4338ca",
    },
    {
      id: 2,
      quote:
        "Nagar Van Satna stands as a symbol of our commitment to preserving nature while creating a peaceful, safe, and joyful space for families and visitors.",
      name: "District Collector",
      role: "Satna (M.P.)",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DC",
    },
    {
      id: 3,
      quote:
        "A hidden gem! The peaceful atmosphere and green surroundings are exactly what we needed.",
      name: "Mrs. Muskan Soni",
      role: "Social Activist, Satna",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MS",
    },
    {
      id: 4,
      quote:
        "Nagar Van Satna stands as a symbol of our commitment to preserving nature while creating a peaceful, safe, and joyful space for families and visitors.",
      name: "District Collector",
      role: "Satna (M.P.)",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DC",
    },
    {
      id: 5,
      quote:
        "Nagar Van Satna stands as a symbol of our commitment to preserving nature while creating a peaceful, safe, and joyful space for families and visitors.",
      name: "District Collector",
      role: "Satna (M.P.)",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DC",
    },
    
  ];

  const slideToIndex = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0].offsetWidth + 24;
    scrollRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % testimonials.length;
      slideToIndex(newIndex);
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev - 1 + testimonials.length) % testimonials.length;
      slideToIndex(newIndex);
      return newIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();

    touchStartX.current = null;
  };

  return (
    <section
      className="bg-linear-to-b py-10 px- md:px-10 relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* TOP BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <Button variant="secondary">
            <Star className="w-5 h-5" />
            Visitor Experiences
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-center mb-4"
        >
          <GradientText variant="primary">Visitor Experiences</GradientText>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg text-center mb-16"
        >
          What our guests are saying about Nagar Van
        </motion.p>

        {/* MAIN CAROUSEL */}
        <div className="relative">
          
          {/* PREV BUTTON */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#2d5239] p-3 rounded-full text-white hover:scale-110 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* CARDS */}
          <div
            ref={scrollRef}
            className="
              flex min-w-[260px]
              gap-10 sm:gap-12
              
              overflow-x-hidden
              snap-x snap-mandatory
              hide-scroll
            "
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="
                  bg-linear-to-br from-[#1a3d28] to-[#0d2418]
                  p-8 rounded-2xl border border-white/10 shadow-xl
                  snap-center
                  min-w-[85%] 
                  sm:min-w-[45%]
                  md:min-w-[30%]
                "
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>

                <p className="text-gray-200 italic mb-8 leading-relaxed">
                  {testimonial.quote}
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-[#68d57b]"
                  />
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* NEXT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#2d5239] p-3 rounded-full text-white hover:scale-110 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default VisitorExperiences;
