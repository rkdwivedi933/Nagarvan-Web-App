import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./comopents/Navbar";
import Footer from "./comopents/Footer";
import BackgroundWrapper from "./comopents/layout/BackgroundWrapper";
import About from "./pages/About";
import Blog from "./pages/Blog";

import Contact from "./pages/Contact";
import Attraction from "./pages/Attractions";
import Gallery from "./pages/Gallery";
import ScrollToTop from "./comopents/ScrollToTop";

import BlogInfo from "./pages/BlogInfo";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/attractions" element={<Attraction />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog-details/:id" element={<BlogInfo/>} />
      </Routes>
      <BackgroundWrapper>
        <Footer />
      </BackgroundWrapper>
    </Router>
  );
}

export default App;
