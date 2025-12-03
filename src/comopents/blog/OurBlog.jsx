import React from "react";
import { motion } from "framer-motion";
import Button from "../layout/Button";
import GradientText from "../layout/GradientText";

const OurBlog = () => {
 const blogs = [
  {
    id: 1,
    tag: "Conservation",
    tagIcon: "🌿",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    title: "Sustainable Tourism: A Path to...",
    description:
      "Explore how eco-tourism practices help preserve natural habitats and support local...",
    date: "Nov 1, 2025",
    author: "TFP Technologies",
    readTime: "5 min read",
  },
  {
    id: 2,
    tag: "Photography",
    tagIcon: "📷",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    title: "Wildlife Photography Tips a...",
    description:
      "Master the art of capturing stunning nature photography with professional tips and...",
    date: "Nov 12, 2024",
    author: "Aman Singh Parihar",
    readTime: "6 min read",
  },
  {
    id: 3,
    tag: "Wellness",
    tagIcon: "🧘",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80",
    title: "The Power of Meditation in Nature",
    description:
      "Discover how meditation in natural settings enhances mental well-being and reduces stress.",
    date: "Nov 10, 2024",
    author: "Mr. Ayush Dhar",
    readTime: "4 min read",
  },
  {
    id: 4,
    tag: "Wildlife",
    tagIcon: "🐾",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    title: "Understanding Animal Behavior",
    description:
      "Learn about how animals interact, survive, and adapt in their natural ecosystems.",
    date: "Oct 20, 2024",
    author: "Dr. Niharika Joshi",
    readTime: "7 min read",
  },
  {
    id: 5,
    tag: "Adventure",
    tagIcon: "⛰️",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&q=80",
    title: "Exploring Hidden Trails in Nature",
    description:
      "A guide to discovering lesser-known trails that offer peace, beauty, and adventure.",
    date: "Sep 15, 2024",
    author: "Rupesh Dwivedi",
    readTime: "5 min read",
  },
  {
    id: 6,
    tag: "Environment",
    tagIcon: "🌎",
    image:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?w=800&q=80",
    title: "Climate Awareness and You",
    description:
      "Simple steps everyone can take to protect the environment and reduce carbon impact.",
    date: "Aug 28, 2024",
    author: "TFP Technologies",
    readTime: "3 min read",
  },
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  return (
    <div className="min-h-full bg-linear-to-b  relative overflow-hidden py-10 px-4">
      {/* Leaf Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-[12%] left-[6%] text-8xl">🌿</div>
        <div className="absolute top-[25%] right-[8%] text-7xl">🍃</div>
        <div className="absolute bottom-[30%] left-[12%] text-6xl">🌿</div>
        <div className="absolute top-[60%] right-[15%] text-7xl">🍃</div>
        <div className="absolute bottom-[10%] right-[8%] text-6xl">🌿</div>
        <div className="absolute top-[40%] left-[20%] text-5xl">🍃</div>
      </div>

      {/* Center Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2ECC71] opacity-5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <Button variant="secondary">🌿
Blog & Stories from Nagar Van</Button>
        </motion.div>

        {/* Heading */}
     <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="text-center mb-6"
>
  <GradientText
    variant="primary"
    
  >
  Latest from & Our Blog
  </GradientText>

  <p className="text-white/50 text-base max-w-3xl mx-auto leading-relaxed mt-2">
  Stay updated with insights, stories, and guides about our nature park
  </p>
</motion.div>



        {/* Blog Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 mb-12"
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative bg-linear-to-br from-[#0d3a1f]/60 to-[#08291a]/60 rounded-3xl border border-[#2ECC71]/10 shadow-2xl overflow-hidden group backdrop-blur-sm"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#08291a]/90 via-[#08291a]/40 to-transparent"></div>

                {/* Tag Chip */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-linear-to-r from-[#2ECC71]/80 to-[#27AE60]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <span className="text-base">{blog.tagIcon}</span>
                  <span className="text-white text-xs font-semibold">
                    {blog.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                {/* Title */}
                <h3 className="text-white text-xl font-bold mb-3 leading-snug">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {blog.description}
                </p>

                {/* Metadata Row */}
                <div className="flex items-center gap-4 mb-5 text-white/40 text-xs">
                  <div className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                        strokeWidth="2"
                      />
                      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                      <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                    </svg>
                    <span>{blog.date}</span>
                  </div>
                  <span className="text-white/30">•</span>
                  <span>{blog.author}</span>
                </div>

                {/* Footer Pills */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-[#2ECC71]/70 text-xs">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <polyline points="12 6 12 12 16 14" strokeWidth="2" />
                    </svg>
                    <span>{blog.readTime}</span>
                  </div>

                  <button className="ml-auto cursor-pointer flex items-center gap-2 text-[#2ECC71] text-xs font-medium hover:gap-3 transition-all group/btn">
                    <span>Read More</span>
                    <svg
                      className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Bottom Corner Glows */}
                <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#2ECC71] rounded-full opacity-8 blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#2ECC71] rounded-full opacity-5 blur-2xl translate-x-1/3 translate-y-1/3"></div>
              </div>
            </motion.article>
          ))}
        </motion.div>

       
      </div>
    </div>
  );
};

export default OurBlog;
