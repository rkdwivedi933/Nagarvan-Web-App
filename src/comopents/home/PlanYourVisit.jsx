import React, { useState } from 'react';
import { Clock, IndianRupee, Phone, MapPin } from 'lucide-react';
import Button from '../layout/Button';
import GradientText from '../layout/GradientText';

const PlanYourVisit = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // 🌿 All cards have SAME COLOR now
  const cardColor = "from-emerald-800/50 to-emerald-900/50";

  const visitInfo = [
    {
      id: 1,
      icon: Clock,
      title: "Opening Hours",
      details: [
        "Mon - Sun: 08:00 AM - 08:00 PM",
        "Peak HR's: 09:00 AM - 06:00 PM"
      ],
    },
    {
      id: 2,
      icon: IndianRupee,
      title: "Entry Fee",
      details: [
        "Adults: ₹30",
        "Children (5-12): ₹20",
        "Below 5: Free"
      ],
    },
    {
      id: 3,
      icon: Phone,
      title: "Contact",
      details: [
        "Phone: +91 8120376521",
        "Email: info@nagarvan.com"
      ],
    },
    {
      id: 4,
      icon: MapPin,
      title: "Location",
      details: [
        "Behind Pradhanmantri Aawas",
        "Smart City",
        "Satna, Madhya Pradesh 485001"
      ],
    }
  ];

  return (
    <div className="min-h-full bg-linear-to-br py-10 px-4 relative overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Badge */}
        <div className="flex justify-center mb-8">
          <Button variant='secondary'>
            <MapPin size={16} className="text-emerald-300" />
            <span>Plan Your Visit</span>
          </Button>
        </div>

        {/* Heading */}
        <div className="text-center mb-4">
          <GradientText variant='primary'>
            Plan Your Visit
          </GradientText>
        </div>

        {/* Subtitle */}
        <p className="text-center text-gray-300 text-lg mb-16 max-w-2xl mx-auto">
          Everything you need to know before you visit
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visitInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div
                key={info.id}
                className={`
                  bg-linear-to-br ${cardColor} backdrop-blur-sm
                  rounded-2xl p-8 border border-emerald-600/20 shadow-2xl
                  transition-all duration-500 relative overflow-hidden
                  ${hoveredCard === index ? 'scale-105 border-emerald-500/40' : 'scale-100'}
                `}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon Box */}
                  <div className={`
                    w-16 h-16 rounded-xl bg-emerald-700/30 backdrop-blur-sm
                    border border-emerald-500/30 flex items-center justify-center mb-6
                    transition-all duration-300
                    ${hoveredCard === index ? 'scale-110 bg-emerald-600/40' : 'scale-100'}
                  `}>
                    <IconComponent size={28} className="text-emerald-300" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-xl font-bold mb-4">
                    {info.title}
                  </h3>

                  {/* Details */}
                  <ul className="space-y-3">
                    {info.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                        <span className="text-gray-300 text-sm leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Glow */}
                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500
                  ${hoveredCard === index ? 'opacity-100' : ''}
                `}>
                  <div className="absolute inset-0 bg-linear-to-t from-emerald-500/10 to-transparent" />
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default PlanYourVisit;
