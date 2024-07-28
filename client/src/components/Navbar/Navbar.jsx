import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.pageYOffset < window.innerHeight * 0.05); // Show when scrolled to top 10%
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setShowNavbar(true); // Ensure navbar is visible when changing routes
  }, [location]);

  return (
    <div className={`bg-transparent p-4 fixed top-0 left-0 right-0 z-10 ${showNavbar ? 'block' : 'hidden'}`}>
      <div className="relative flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl text-black absolute top-4 left-1">
          Telaiya Tourism
        </Link>
        <div className="absolute top-6 left-52">
          <NavLink
            to="/discover"
            className={({ isActive }) => isActive ? "text-black font-bold" : "text-black font-normal"}
          >
            Discover
          </NavLink>
        </div>
        <div className="absolute top-6 left-72 px-0">
          <ul className="flex space-x-5 text-black font-xl">
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "font-bold" : "font-normal"}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "font-bold" : "font-normal"}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        {location.pathname !== '/book' && (
          <Link
            to="/book"
            className="bg-blue-500 p-2 px-5 rounded-xl text-white font-semibold hover:bg-blue-600 absolute top-4 right-12"
          >
            Book a Trip
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
