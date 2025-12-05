
import {
  Leaf,
  Clock,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    
    <footer className="relative bg-[#0c1f12] text-white overflow-hidden">
      {/* Glow Bottom Border */}
      <div className="h-0.5 bg-linear-to-r from-transparent via-green-400/70 to-transparent"></div>

      {/* LIGHT PATTERN OVERLAY */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url('/footer-pattern.svg')] bg-cover"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-[#1b4f26] rounded-xl flex items-center justify-center shadow-lg shadow-green-900/30">
                <Leaf size={22} className="text-green-300" />
              </div>
              <h2 className="text-3xl font-extrabold tracking-wide">Nagar Van</h2>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 text-[15px]">
              A calm, refreshing escape for families, nature lovers, and peace seekers — 
              located in the heart of Satna.
            </p>

            {/* TIMINGS CARDS */}
            <div className="flex flex-col sm:flex-row gap-4">

              <div className="glass-card w-full sm:w-[190px]">
                <div className="flex items-center gap-2 text-green-300 mb-1.5">
                  <Clock size={18} />
                  <span className="font-medium">Open Daily</span>
                </div>
                <p className="text-white font-semibold text-sm">08:00 AM - 08:00 PM</p>
              </div>

              <div className="glass-card w-full sm:w-[190px]">
                <div className="flex items-center gap-2 text-green-300 mb-1.5">
                  <Calendar size={18} />
                  <span className="font-medium">All Week</span>
                </div>
                <p className="text-white font-semibold text-sm">No Holidays</p>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="footer-title">Quick Links</h3>

           
<ul className="space-y-3 text-gray-300 text-[15px]">
  {[
    { name: "About Us", path: "/about" },
    { name: "Attractions", path: "/attractions" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    
    { name: "Contact Us", path: "/contact" },
  ].map((item) => (
    <li
      key={item.name}
      className="hover:text-green-400 cursor-pointer transition"
    >
      <Link to={item.path}>{item.name}</Link>
    </li>
  ))}
</ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="footer-title">Contact Us</h3>

            <div className="space-y-5">

              {[
                { Icon: Phone, label: "Phone", value: "+91 8120376521" },
                { Icon: Mail, label: "Email", value: "info@nagarvan.com" },
                {
                  Icon: MapPin,
                  label: "Location",
                  value: "Behind Pradhanmantri Aawas, Smart City, Satna (M.P.)",
                },
              ].map(({ Icon, label, value }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#1b4f26] rounded-lg flex items-center justify-center shadow-md shadow-green-900/25">
                    <Icon size={20} className="text-green-300" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{label}</p>
                    <p className="font-semibold leading-snug text-[15px]">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="footer-title">Stay Connected</h3>

            <div className="flex gap-4 cursor-pointer">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <div
                  key={i}
                  className="w-12 h-12 bg-[#1b4f26] rounded-xl flex items-center justify-center shadow-lg shadow-green-900/25 hover:bg-[#236f36] transition"
                >
                  <Icon size={22} className="text-green-300 " />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full border-t border-green-800/40 mt-14 mb-6"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300 text-sm">

          <p>
            © 2025 <span className="text-green-400 font-semibold">Nagar Van Satna.</span>  
            All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {["Privacy Policy", "Terms of Service", "Rules & Regulations"].map((one) => (
              <span key={one} className="hover:text-green-400 cursor-pointer">
                {one}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span>Designed & Developed By</span>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-900 font-bold text-xs">TFP</span>
              </div>
              <span className="text-green-400 font-semibold">TFP Technologies</span>
            </div>
          </div>

        </div>
      </div>

      {/* EXTRA CSS (Tailwind Utilities Extended) */}
      <style>
        {`
          .glass-card {
            background: rgba(15, 61, 24, 0.55);
            border: 1px solid rgba(35, 130, 66, 0.4);
            backdrop-filter: blur(6px);
            padding: 10px 14px;
            border-radius: 12px;
          }

          .footer-title {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
          }
        `}
      </style>

    </footer>
  );
};

export default Footer;
