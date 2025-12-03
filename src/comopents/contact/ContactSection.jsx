import React from "react";
import { motion } from "framer-motion";
import Button from "../layout/Button";
import GradientText from "../layout/GradientText";

const ContactSection = () => {
  const features = [
    { id: 1, icon: "📞", title: "Quick Call", subtitle: "Instant Help" },
    { id: 2, icon: "✉️", title: "Email Us", subtitle: "24/7 Reply" },
    { id: 3, icon: "📍", title: "Visit Office", subtitle: "Smart City" },
  ];

  const contactCards = [
    {
      id: 1,
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path d="M2 5a2 2 0 0 1 2-2h3.2a1 1 0 0 1 .95.68l1.5 4.5c.1.3 0 .7-.3.9l-2.2 1.1c1.5 3 4 5.5 7 7l1.1-2.2c.2-.3.6-.4.9-.3l4.5 1.5a1 1 0 0 1 .68.95V19a2 2 0 0 1-2 2h-1c-8 0-14-6-14-14V5Z" />
        </svg>
      ),
      title: "Phone",
      main: "+91 8120376521",
      sub: "Mon–Sun • 08:00 AM – 08:00 PM",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
      title: "Email",
      main: "info@nagarvan.com",
      sub: "Replies within 24 hours",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path d="M12 22s7-4 7-10a7 7 0 0 0-14 0c0 6 7 10 7 10Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: "Address",
      main: "Behind Pradhanmantri Aawas",
      sub: "Smart City, Satna (M.P.) 485001",
    },
    {
      id: 4,
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "Office Hours",
      main: "Mon – Sun",
      sub: "08:00 AM – 08:00 PM",
    },
  ];

  return (
    <div className="min-h-full relative overflow-hidden py-28 px-4 ">

      {/* Mesh Background */}
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_20%_30%,#4FAF4F_0%,transparent_60%)]"></div>
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_80%_70%,#4FAF4F_0%,transparent_65%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Button variant="secondary">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
                We're Here to Help
              </Button>
            </motion.div>

            {/* Heading */}
            <div className="mb-10">
              <GradientText variant="primary">
                <span className="text-6xl md:text-7xl font-bold">Get in Touch</span>
              </GradientText>
              <div className="w-36 h-1 bg-[#4FAF4F] mt-2 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-[#90cfa1] text-lg leading-relaxed mb-10">
              Need help planning your visit, booking facilities or learning more?
              Our team is always ready to assist you.
            </p>

            {/* Features */}
            <div className="flex gap-5 mb-10">
              {features.map((f) => (
                <div
                  key={f.id}
                  className="bg-[#12351f]/50 border border-[#4FAF4F]/20 backdrop-blur-xl px-6 py-4 rounded-2xl text-center hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  <div className="text-3xl mb-2">{f.icon}</div>
                  <div className="text-white font-semibold text-sm">{f.title}</div>
                  <div className="text-[#7FB88E] text-xs">{f.subtitle}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <button className="flex items-center cursor-pointer gap-3 bg-[#4FAF4F] px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:scale-105">
                📞 Call Now
              </button>

              <button className="flex items-center cursor-pointer gap-3 border-2 border-[#4FAF4F]/40 px-8 py-4 rounded-full text-white hover:bg-[#4FAF4F]/10 hover:scale-105">
                ✉️ Send Email
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-5">
            {contactCards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#12351f]/60 border border-[#4FAF4F]/25 backdrop-blur-xl rounded-3xl p-6 shadow-2xl flex gap-5 items-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#4FAF4F]/15 border border-[#4FAF4F]/30 flex items-center justify-center text-[#4FAF4F]">
                  {card.icon}
                </div>
                <div>
                  <div className="text-[#7FB88E] text-sm">{card.title}</div>
                  <div className="text-white text-xl font-bold">{card.main}</div>
                  <div className="text-[#7FB88E] text-sm">{card.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;
