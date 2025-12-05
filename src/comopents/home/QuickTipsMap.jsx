import React, { useState } from 'react';
import { Lightbulb, Camera, Users, Calendar, Leaf, MapPin, Navigation, Share2 } from 'lucide-react';
import Button from '../layout/Button';

const QuickTipsMap = () => {
  const [hoveredTip, setHoveredTip] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const tips = [
    {
      id: 1,
      icon: Camera,
      text: "Best time for photos: Early morning",
      color: "from-emerald-800/50 to-emerald-900/50"
    },
    {
      id: 2,
      icon: Users,
      text: "Family-friendly with kids play area",
      color: "from-green-800/50 to-green-900/50"
    },
    {
      id: 3,
      icon: Calendar,
      text: "Avoid weekends for peaceful visits",
      color: "from-teal-800/50 to-teal-900/50"
    },
    {
      id: 4,
      icon: Leaf,
      text: "Carry water bottles & eco-friendly bags",
      color: "from-emerald-800/50 to-green-900/50"
    }
  ];

  const handleGetDirections = () => {
    window.open('https://www.google.com/maps/dir//Nagar+Van+Satna,+Madhya+Pradesh+485001', '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Nagar Van Satna',
        text: 'Visit Nagar Van - A beautiful nature park in Satna',
        url: window.location.href
      });
    } else {
      alert('Location: Nagar Van Satna, Madhya Pradesh 485001');
    }
  };

  return (
    <div className="min-h-full bg-linear-to-br  py-10 px-4 relative overflow-hidden">
      {/* Decorative Leaf Silhouettes */}
      <div className="absolute top-20 right-32 opacity-5">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
          <path d="M90 18c18 0 32 14 32 32 0 29-22 43-32 76-10-33-32-47-32-76 0-18 14-32 32-32z" fill="currentColor" className="text-emerald-300"/>
        </svg>
      </div>
      <div className="absolute bottom-32 left-16 opacity-5">
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
          <path d="M70 14c14 0 25 11 25 25 0 22-17 34-25 59-8-25-25-37-25-59 0-14 11-25 25-25z" fill="currentColor" className="text-emerald-300"/>
        </svg>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-40 left-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-32 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Badge */}
        <div className="flex justify-center mb-12">
          <Button variant='secondary'>

            <Lightbulb size={18}  />
            <span >Quick <span >Tips</span></span>
          </Button>
          
        </div>

        {/* Tips Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {tips.map((tip, index) => {
            const IconComponent = tip.icon;
            return (
              <div
                key={tip.id}
                className={`
                   ${tip.color} backdrop-blur-md
                  rounded-xl p-6 border border-emerald-600/20 shadow-xl
                  transition-all duration-500
                  ${hoveredTip === index ? 'scale-105 hover:border-2 border-green-900 -translate-y-1' : 'scale-100'}
                `}
                onMouseEnter={() => setHoveredTip(index)}
                onMouseLeave={() => setHoveredTip(null)}
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`
                    w-12 h-12 rounded-lg bg-emerald-700/30 backdrop-blur-sm
                    border border-emerald-500/30 flex items-center justify-center shrink-0
                    transition-all duration-300
                    ${hoveredTip === index ? 'scale-110 bg-emerald-600/40' : 'scale-100'}
                  `}>
                    <IconComponent size={22} className="text-emerald-300" strokeWidth={1.5} />
                  </div>

                  {/* Text */}
                  <p className="text-gray-200 text-sm leading-relaxed pt-2">
                    {tip.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Map Section */}
        <div 
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-600/20"
          style={{
            animation: 'fadeIn 0.8s ease-out 0.4s both'
          }}
        >
          {/* Google Map Embed */}
          <div className="relative w-full h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.847!2d80.8276!3d24.5797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398431e8e8d8e8d8%3A0x8d8e8d8e8d8e8d8!2sNagar%20Van%20Satna!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nagar Van Location"
            />
            
            {/* Bottom Fade Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-emerald-950/90 via-emerald-950/50 to-transparent pointer-events-none" />
          </div>

          {/* Floating Info Box */}
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-md bg-linear-to-br from-emerald-900/95 to-green-900/95 backdrop-blur-xl rounded-2xl p-2 border border-emerald-500/30 shadow-2xl">
            <div className="mb-4">
              <h3 className="text-white text-2xl font-bold mb-3">
                Nagar Van Satna
              </h3>
              <div className="flex items-start gap-2 text-emerald-300">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <p className="text-sm">
                  Satna, Madhya Pradesh 485001
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 ">
              <button
                onClick={handleGetDirections}
                onMouseEnter={() => setHoveredButton('directions')}
                onMouseLeave={() => setHoveredButton(null)}
                className={`
                  flex-1 flex items-center justify-center gap-2
                  bg-emerald-600 hover:bg-emerald-500 text-white
                  px-5 py-3 rounded-xl font-semibold text-sm
                  transition-all duration-300 shadow-lg
                  ${hoveredButton === 'directions' ? 'scale-105 shadow-emerald-500/50' : 'scale-100'}
                `}
              >
                <Navigation size={18} />
                <span>Get Directions</span>
              </button>

              <button
                onClick={handleShare}
                onMouseEnter={() => setHoveredButton('share')}
                onMouseLeave={() => setHoveredButton(null)}
                className={`
                  flex items-center justify-center gap-2
                  bg-emerald-800/60 hover:bg-emerald-700/80 text-white
                  px-5 py-3 rounded-xl font-semibold text-sm
                  transition-all duration-300 border border-emerald-600/30 shadow-lg
                  ${hoveredButton === 'share' ? 'scale-105 shadow-emerald-500/30' : 'scale-100'}
                `}
              >
                <Share2 size={18} />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default QuickTipsMap;