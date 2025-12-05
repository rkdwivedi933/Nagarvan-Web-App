import React, { useState, useEffect } from "react";
import { Leaf, Menu, X, MapPin, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // LOCK BODY SCROLL WHEN SIDEBAR IS OPEN
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: "Explore", path: "/" },
    { label: "About", path: "/about" },
    { label: "Gallery", path: "/gallery" },
    { label: "Blog", path: "/blog" },
    { label: "Attractions", path: "/attractions" },
    { label: "Contact", path: "/contact" },
  ];
  const navigate = useNavigate();
const handleClickButton = () =>
  navigate('/contact')

const handleLogo = () =>{
  navigate('/')
}
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-5000 transition-all duration-500 ${
        isScrolled
          ? "bg-[#02180F]/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div onClick={handleLogo} className="flex items-center space-x-3 cursor-pointer transition-transform duration-300 hover:scale-[1.07]">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400/30 blur-2xl rounded-full"></div>

              <div className="relative w-12 h-12 rounded-full bg-linear-to-br 
                from-green-400 to-green-700 flex items-center justify-center shadow-xl 
                ring-1 ring-green-300/50">
                <Leaf className="w-6 h-6 text-white drop-shadow-md" strokeWidth={2.8} />
              </div>
            </div>

            <div className="flex flex-col leading-tight select-none">
              <h1 className="text-[23px] font-bold text-white tracking-wide drop-shadow-sm">
                Nagar Van
              </h1>
              <span className="text-xs text-green-200/90 tracking-wide">
                Nature's Paradise
              </span>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-green-600/90 text-white shadow-md shadow-green-900/40 scale-[1.05]"
                      : "text-green-100/90 hover:text-white hover:bg-green-900/40 hover:scale-[1.07]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shadow-lg active:scale-95 transition"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* DARK OVERLAY */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0   z-9998 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* SLIDE SIDEBAR */}
      {/* SIDEBAR WRAPPER (OVERLAY + PANEL) */}
<div
  className={`fixed top-0 right-0 h-screen w-[80%] sm:w-[350px]  z-99999 
    transition-transform duration-300 overflow-y-auto
    ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
>


  {/* DARK OVERLAY */}
  <div
    className="absolute inset-0  "
    onClick={() => setIsMobileMenuOpen(false)}
  />

  {/* RIGHT SLIDE PANEL */}
  <div
    className={`absolute top-0 right-0 h-full w-72 
      bg-[#03331A] shadow-xl transition-transform duration-300
      ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
  >
    <div className="flex justify-between items-center px-5 py-4 border-b border-green-900/50">
      <h2 className="text-lg font-semibold text-green-100">Nagar Van</h2>
      <X
        className="w-6 h-6 text-green-100 cursor-pointer"
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </div>

    {/* MENU ITEMS */}
    <div className="mt-4 space-y-3 px-4">
      {navItems.map((item, index) => {
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={index}
            to={item.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
              isActive
                ? "bg-green-600 text-white shadow-md scale-[1.02]"
                : "text-green-100 bg-green-900/20 hover:bg-green-900/40 hover:scale-[1.03]"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>

    {/* BOTTOM BUTTON */}
    <div onClick={handleClickButton} className="absolute bottom-20 w-full px-4">
      <button className="w-full py-3 rounded-xl bg-green-600 text-white font-semibold shadow-lg active:scale-95 transition">
        Plan Your Visit
      </button>
    </div>

    {/* CONTACT TEXT */}
    <div className="absolute bottom-4 w-full px-4 text-green-200 text-sm space-y-1">
      <p className="flex items-center space-x-2">
        <MapPin size={15} /> <span>Satna, Madhya Pradesh</span>
      </p>
      <p className="flex items-center space-x-2">
        <Phone size={15} /> <span>+91 7670-123456</span>
      </p>
    </div>
  </div>
</div>


      {/* Glow Bottom Border ll*/}
      <div className="h-0.5 bg-linear-to-r from-transparent via-green-400/70 to-transparent"></div>
    </nav>
  );
};

export default Navbar;
