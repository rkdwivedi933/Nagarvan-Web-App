import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { blogDetailsData } from "../blogDetails/blogDetailsData";

import { Leaf, Calendar, Timer, User, ChevronRight } from "lucide-react";

const icons = { Leaf };

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogDetailsData.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl">
        Blog Not Found
      </div>
    );
  }

  return (
    <div className="min-h-full text-white relative overflow-hidden pt-28 pb-20 px-5">

      {/* Floating Background Bubbles */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute top-32 left-20 w-40 h-40 bg-green-500/10 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-28 right-32 w-32 h-32 bg-green-400/10 blur-2xl rounded-full"
      />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Category */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-5 py-1 mb-5 text-sm rounded-full
                     bg-green-500/20 text-green-300 border border-green-700/40
                     backdrop-blur-xl shadow-md"
        >
          {blog.category}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight bg-linear-to-r 
                     from-green-200 to-green-400 text-transparent bg-clip-text"
        >
          {blog.title}
        </motion.h1>

        {/* Meta Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 mt-4 text-sm text-white/70"
        >
          <span className="flex items-center gap-1">
            <User size={16} /> {blog.author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={16} /> {blog.date}
          </span>
          <span className="flex items-center gap-1">
            <Timer size={16} /> {blog.readTime}
          </span>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="relative"
        >
          <img
            src={blog.image}
            className="w-full rounded-3xl mt-10 shadow-2xl hover:scale-[1.02]
                       transition-transform duration-500"
          />

          {/* Glow border */}
          <div className="absolute inset-0 rounded-3xl  pointer-events-none" />
        </motion.div>

        {/* Sections */}
        <div className="mt-14 space-y-12">
          {blog.sections.map((section, i) => {
            const Icon = icons[section.icon];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative p-7 rounded-3xl 
                           bg-white/5 backdrop-blur-xl
                           border border-green-600/20 
                           shadow-xl transition-all duration-500"
              >
                {/* internal floating bubbles */}
                <motion.div
                  animate={{ y: [0, -10, 0], opacity: [0.15, 0.3, 0.15] }}
                  transition={{ repeat: Infinity, duration: 6 }}
                  className="absolute -top-4 -right-4 w-10 h-10 bg-green-500/20 blur-xl rounded-full"
                />
                <motion.div
                  animate={{ y: [0, 10, 0], opacity: [0.15, 0.25, 0.15] }}
                  transition={{ repeat: Infinity, duration: 7 }}
                  className="absolute -bottom-4 -left-5 w-14 h-14 bg-green-400/10 blur-xl rounded-full"
                />

                {/* Section Heading */}
                <div className="flex items-center gap-2 mb-3">
                  {Icon && (
                    <Icon className="text-green-400 drop-shadow-[0_0_5px_rgba(0,255,0,0.4)]" />
                  )}
                  <h2 className="text-2xl font-bold text-green-300">
                    {section.heading}
                  </h2>
                </div>

                {/* Paragraph */}
                {section.content && (
                  <p className="text-white/70 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                )}

                {/* List */}
                {section.list && (
                  <ul className="space-y-4 mt-5">
                    {section.list.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 group hover:translate-x-1 transition-all"
                      >
                        <ChevronRight className="text-green-400 mt-1" />
                        <p>
                          <span className="text-green-300 font-semibold">
                            {item.title}:
                          </span>{" "}
                          <span className="text-white/70">{item.desc}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
