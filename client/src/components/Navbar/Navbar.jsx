import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/10 ${
      isActive ? "bg-white/20 text-blue-400 shadow-inner" : "text-gray-200 hover:text-white"
    }`;

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[100] transition-all duration-500 rounded-2xl ${
        isScrolled
          ? "glass bg-black/40 py-2 border-white/10"
          : "bg-transparent py-4 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
           <Link
            to="/"
            className="flex-shrink-0 flex items-center gap-2 group"
          >
             {/* You can add a logo image here if available */}
            <span className={`text-2xl font-display font-bold tracking-tight transition-colors duration-300 text-white group-hover:text-neon-blue drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`}>
              Telaiya<span className="text-neon-blue">Tourism</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/discover" className={navLinkClass}>
              Discover
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact Us
            </NavLink>
            
            {location.pathname !== "/book" && (
              <Link
                to="/book"
                className="bg-blue-600/80 backdrop-blur-sm text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-600 hover:shadow-neon-blue/50 transition-all duration-300 transform hover:-translate-y-0.5 border border-white/10"
              >
                Book a Trip
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-neon-blue focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-lg transform transition-all duration-300 ease-in-out origin-top ${
            isOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
            <NavLink to="/discover" className={({ isActive }) => `block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
              Discover
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
              Contact Us
            </NavLink>
            {location.pathname !== "/book" && (
              <Link
                to="/book"
                className="block w-full text-center mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-blue-700 transition-colors"
              >
                Book a Trip
              </Link>
            )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
