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
    `text-base font-medium transition-colors duration-200 hover:text-blue-600 ${
      isActive ? "text-blue-600 font-bold" : "text-gray-700"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center gap-2"
          >
             {/* You can add a logo image here if available */}
            <span className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-blue-900' : 'text-blue-900'}`}>
              Telaiya Tourism
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
                className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Book a Trip
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none transition-colors"
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
