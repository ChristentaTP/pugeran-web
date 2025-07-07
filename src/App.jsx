import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Profil from "./sections/Profil";
import Program from "./sections/Program";
import Galeri from "./sections/Galeri";
import Footer from "./sections/Footer";

import Peta from "./sections/peta";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

  function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans scroll-smooth">
      <Navbar />

      <main className> 
        <Hero />
        <Peta />
        <Profil />
        <Program />
        <Peta />
        <Galeri />
        
      </main>

      <Footer />
    </div>
  );
}

export default App;
