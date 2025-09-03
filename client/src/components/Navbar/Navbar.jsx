import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger + close icon

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.pageYOffset < window.innerHeight * 0.05);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setShowNavbar(true);
    setIsOpen(false); // close menu when route changes
  }, [location]);

  return (
    <div
      className={`bg-transparent p-4 fixed top-0 left-0 right-0 z-10 ${
        showNavbar ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-between items-center relative">
        {/* Logo */}
        <Link
          to="/"
          className="font-bold text-2xl text-black md:absolute md:top-4 md:left-1"
        >
          Telaiya Tourism
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:block md:absolute md:top-6 md:left-52">
          <NavLink
            to="/discover"
            className={({ isActive }) =>
              isActive ? "text-black font-bold" : "text-black font-normal"
            }
          >
            Discover
          </NavLink>
        </div>
        <div className="hidden md:block md:absolute md:top-6 md:left-72 px-0">
          <ul className="flex space-x-5 text-black font-xl">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "font-normal"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "font-normal"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Book Button (Desktop Only) */}
        {location.pathname !== "/book" && (
          <Link
            to="/book"
            className="hidden md:block bg-blue-500 p-2 px-5 rounded-xl text-white font-semibold hover:bg-blue-600 md:absolute md:top-4 md:right-12"
          >
            Book a Trip
          </Link>
        )}

        {/* Hamburger (Mobile Only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-xl mt-4 p-5 w-full">
          <ul className="space-y-4 text-black">
            <li>
              <NavLink
                to="/discover"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "font-bold" : "font-normal"
                }
              >
                Discover
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "font-bold" : "font-normal"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "font-bold" : "font-normal"
                }
              >
                Contact Us
              </NavLink>
            </li>
            {location.pathname !== "/book" && (
              <li>
                <Link
                  to="/book"
                  onClick={() => setIsOpen(false)}
                  className="bg-blue-500 block text-center p-2 rounded-lg text-white font-semibold hover:bg-blue-600"
                >
                  Book a Trip
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
