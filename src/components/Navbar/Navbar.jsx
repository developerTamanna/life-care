import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full bg-white sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      {/* FULL WIDTH */}
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-full">
              <span className="text-white text-xl font-bold">+</span>
            </div>
            <h1 className="font-bold text-lg">Phudu</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm text-gray-700">
            {['/', '/my-booking', '/blogs', '/contact'].map((path, i) => (
              <NavLink
                key={i}
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-2 border-blue-600 pb-1 text-black font-medium'
                    : 'hover:text-black'
                }
              >
                {path === '/'
                  ? 'Home'
                  : path === '/my-booking'
                  ? 'My-Bookings'
                  : path === '/blogs'
                  ? 'Blogs'
                  : 'Contact Us'}
              </NavLink>
            ))}
          </div>

          {/* Emergency Button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Emergency
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-gray-700"
            >
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 text-sm text-gray-700 bg-gray-100">
          <NavLink
            to="/"
            end
            onClick={() => setIsOpen(false)}
            className="block"
          >
            Home
          </NavLink>
          <NavLink
            to="/my-booking"
            onClick={() => setIsOpen(false)}
            className="block"
          >
            My-Bookings
          </NavLink>
          <NavLink
            to="/blogs"
            onClick={() => setIsOpen(false)}
            className="block"
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block"
          >
            Contact Us
          </NavLink>

          <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-full hover:bg-blue-700 transition mt-2">
            Emergency
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
