import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/70 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
        <div className="text-green-700 font-bold text-2xl md:text-3xl tracking-wide">
          Desa Pugeran
        </div>

        <button
          className="text-green-700 md:hidden focus:outline-none text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul
          className={`md:flex md:items-center md:space-x-8 text-green-700 font-semibold absolute md:static bg-white md:bg-transparent left-0 w-full md:w-auto px-4 md:px-0 transition-all duration-300 ease-in-out text-lg ${
            menuOpen ? "top-20" : "top-[-490px]"
          }`}
        >
          <li className="py-3 md:py-0">
            <a href="#home" className="hover:text-green-900 transition duration-300 block">
              Beranda
            </a>
          </li>
          <li className="py-3 md:py-0">
            <a href="#profil" className="hover:text-green-900 transition duration-300 block">
              Profil
            </a>
          </li>
          <li className="py-3 md:py-0">
            <a href="#program" className="hover:text-green-900 transition duration-300 block">
              Program
            </a>
          </li>
          <li className="py-3 md:py-0">
            <a href="#galeri" className="hover:text-green-900 transition duration-300 block">
              Galeri
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
