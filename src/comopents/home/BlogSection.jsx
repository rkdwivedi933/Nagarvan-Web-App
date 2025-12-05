import React from "react";
import { motion } from "framer-motion";
import Button from "../layout/Button";
import GradientText from "../layout/GradientText";
import { useNavigate } from "react-router-dom";

const BlogSection = () => {
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
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
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
  ];

  const floatBubble = {
    initial: { y: 0, opacity: 0.4 },
    animate: {
      y: -20,
      opacity: 0.8,
      transition: {
        repeat: Infinity,
        duration: 3,
        repeatType: "mirror",
      },
    },
  };

  const randomBubbles = Array.from({ length: 6 });

  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/blog");
  };

  return (
    <div className="min-h-full  relative overflow-hidden py-10 px-4">
      {/* BG Floating Bubbles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          variants={floatBubble}
          initial="initial"
          animate="animate"
          className="absolute bg-green-300/10 rounded-full blur-3xl"
          style={{
            width: 120,
            height: 120,
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
          }}
        ></motion.div>
      ))}

      {/* Center Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#2ECC71]/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-10">
          <Button variant="secondary">Nagar van Facilities</Button>
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <GradientText variant="primary">Nagar Van Blog</GradientText>

          <p className="text-white/60 text-base max-w-3xl mx-auto mt-3">
            Dive into stories, insights, and updates from Nagar Van—your gateway
            to nature, conservation, and community.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="relative bg-[#0f3b27]/70 backdrop-blur-md border border-[#2ECC71]/20 rounded-3xl overflow-hidden shadow-xl group"
            >
              {/* Neon Glow on Hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl bg-[#2ECC71]/20"></div>

              {/* Internal Floating Bubbles */}
              {randomBubbles.map((_, i) => (
                <motion.div
                  key={i}
                  variants={floatBubble}
                  initial="initial"
                  animate="animate"
                  className="absolute bg-green-200/10 rounded-full blur-xl"
                  style={{
                    width: 40,
                    height: 40,
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                ></motion.div>
              ))}

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  className="w-full h-full object-cover group-hover:scale-110 duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70"></div>

                {/* Tag */}
                <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-[#2ECC71]/70 backdrop-blur-md border border-white/20 flex gap-2 items-center">
                  <span>{blog.tagIcon}</span>
                  <span className="text-white text-xs font-semibold">
                    {blog.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-white text-xl font-bold mb-3">
                  {blog.title}
                </h3>

                <p className="text-white/60 text-sm mb-5">{blog.description}</p>

                <div className="flex items-center gap-4 text-white/40 text-xs mb-5">
                  <span>{blog.date}</span>•<span>{blog.author}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#2ECC71]/70 text-xs">
                    {blog.readTime}
                  </span>

                  <button
                    onClick={() => navigate(`/blog-details/${blog.id}`)}
                    className="ml-auto flex cursor-pointer items-center gap-2 text-[#2ECC71] text-xs hover:gap-3 transition-all"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Button onClick={handleClickButton} variant="primary">
            Explore More Blogs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
