import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Video, Play, Eye, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../layout/Button";
import GradientText from "../layout/GradientText";

const VideoMoments = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
const [openImage, setOpenImage] = useState(false);


  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Introducing Nagar Van, Satna",
      category: "Nature",
      views: "1.2K views",
      date: "Nov 2025",
      duration: "01:20",
      thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
      featured: true,
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Night View",
      category: "Ambiance",
      views: "3.4K views",
      date: "Nov 2025",
      duration: "00:45",
      thumbnail: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&q=80",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Kids Zone - Joyful Moments",
      category: "Activities",
      views: "2.8K views",
      date: "Nov 2025",
      duration: "01:15",
      thumbnail: "https://images.unsplash.com/photo-1587818541473-544798f61659?w=600&q=80",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Bhima Lake Wildlife",
      category: "Wildlife",
      views: "4.1K views",
      date: "Nov 2025",
      duration: "00:48",
      thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Community Yoga Session",
      category: "Wellness",
      views: "1.8K views",
      date: "Nov 2025",
      duration: "01:08",
      thumbnail: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Garden Tour - Seasonal Flowers",
      category: "Nature",
      views: "3.2K views",
      date: "Nov 2025",
      duration: "00:52",
      thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    },
  ];

  const openVideo = (index) => {
    setSelectedIndex(index);
  };

  const closeVideo = () => {
    setSelectedIndex(null);
  };

  const nextVideo = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") closeVideo();
      if (e.key === "ArrowRight") nextVideo(e);
      if (e.key === "ArrowLeft") prevVideo(e);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  // PREVENT BACKGROUND SCROLL WHEN MODAL IS OPEN
useEffect(() => {
  if (selectedIndex !== null) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto"; // safety clean-up
  };
}, [selectedIndex]);

  return (
    <div className="min-h-full bg-linear-to-br relative overflow-hidden">
      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto py-24 md:py-32">
        <div className="flex justify-center mb-10">
          <Button variant="secondary">
            <Video className="w-4 h-4" /> Video Moments
          </Button>
        </div>

        <div className="text-center mb-6">
          <GradientText>Video Moments</GradientText>
        </div>

        {/* Video Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          <motion.div className="lg:row-span-2 lg:col-span-2">
            <VideoCard video={videos[0]} onClick={() => openVideo(0)} large />
          </motion.div>

          {videos.slice(1).map((video, index) => (
            <VideoCard
              key={index}
              video={video}
              onClick={() => openVideo(index + 1)}
            />
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-200 p-5 flex items-center justify-center  "
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#0D2B1A] rounded-xl max-w-4xl w-full p-6 md:p-8 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={closeVideo}
                className="absolute -top-4 -right-4 bg-green-600 hover:bg-green-500 text-white rounded-full p-3 shadow-xl"
              >
                <X className="w-5 h-5" />
              </button>

              {/* NEXT BUTTON */}
              <button
                onClick={nextVideo}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-green-600/80 hover:bg-green-500 text-white p-3 rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* PREV BUTTON */}
              <button
                onClick={prevVideo}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-green-600/80 hover:bg-green-500 text-white p-3 rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* VIDEO PLAYER */}
              <div className="aspect-video w-full rounded-xl overflow-hidden mt-10">
                <iframe
                  src={`https://www.youtube.com/embed/${videos[selectedIndex].id}?autoplay=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Video Details */}
              <h2 className="text-3xl font-bold text-white mb-2">
                {videos[selectedIndex].title}
              </h2>

              <div className="flex gap-4 flex-wrap text-green-200">
                <span>{videos[selectedIndex].category}</span>
                <span>{videos[selectedIndex].views}</span>
                <span>{videos[selectedIndex].date}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* 💠 VIDEO CARD COMPONENT */
const VideoCard = ({ video, onClick, large }) => (
  <div
    onClick={onClick}
    className={`relative cursor-pointer rounded-2xl overflow-hidden shadow-xl hover:scale-[1.03] transition-all ${
      large ? "h-full" : "h-60"
    }`}
  >
    <img src={video.thumbnail} className="w-full h-full object-cover" />

    <div className="absolute inset-0 bg-black/40"></div>

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center">
        <Play className="w-8 h-8 text-white ml-1" />
      </div>
    </div>

    <div className="absolute bottom-4 left-4 text-white">
      <h3 className="text-lg font-bold">{video.title}</h3>
    </div>
  </div>
);

export default VideoMoments;
