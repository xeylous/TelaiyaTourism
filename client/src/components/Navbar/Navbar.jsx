import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 ${
      isActive 
        ? "bg-zinc-900 text-white dark:bg-white dark:text-black" 
        : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
    }`;

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[100] transition-all duration-500 rounded-2xl ${
        isScrolled
          ? "glass bg-white/80 dark:bg-black/50 py-2 border-zinc-200 dark:border-zinc-800 shadow-sm backdrop-blur-md"
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
            <span className={`text-2xl font-display font-medium tracking-tight transition-colors duration-300 text-zinc-900 dark:text-white`}>
              Telaiya<span className="text-zinc-500 dark:text-zinc-500">Tourism</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink to="/discover" className={navLinkClass}>
              Discover
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact Us
            </NavLink>
            
            <div className="ml-2 pl-2 border-l border-zinc-200 dark:border-zinc-800">
               <ThemeToggle />
            </div>

            {location.pathname !== "/book" && (
              <Link
                to="/book"
                className="bg-zinc-900 text-white dark:bg-white dark:text-black px-6 py-2 rounded-full font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300 transform hover:-translate-y-0.5 ml-4"
              >
                Book a Trip
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-black/90 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-2xl mt-2 transform transition-all duration-300 ease-in-out origin-top ${
            isOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
            <NavLink to="/discover" className={({ isActive }) => `block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${isActive ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900'}`}>
              Discover
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${isActive ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900'}`}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${isActive ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900'}`}>
              Contact Us
            </NavLink>
            {location.pathname !== "/book" && (
              <Link
                to="/book"
                className="block w-full text-center mt-4 bg-zinc-900 text-white dark:bg-white dark:text-black px-6 py-3 rounded-xl font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
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
