import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 30px স্ক্রল হলে হালকা শ্যাডো আসবে
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100' // হালকা বর্ডার, হালকা শ্যাডো
          : 'bg-transparent' // সম্পূর্ণ ট্রান্সপারেন্ট
      }`}
    >
      {/* Container with proper spacing */}
      <div className="w-full px-4 sm:px-6 lg:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Simple and Clean */}
          <div className="flex items-center space-x-3">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                scrolled
                  ? 'bg-blue-600 shadow'
                  : 'bg-blue-600/90 backdrop-blur-sm'
              }`}
            >
              <span className="text-white font-bold text-lg">+</span>
            </div>
            <div>
              <h1
                className={`font-bold text-xl transition-all duration-300 ${
                  scrolled ? 'text-gray-900' : 'text-gray-900'
                }`}
              >
                Phudu
              </h1>
              <p
                className={`text-xs transition-all duration-300 ${
                  scrolled ? 'text-gray-500' : 'text-gray-600'
                }`}
              >
                Medical Service
              </p>
            </div>
          </div>

          {/* Desktop Menu - Clean Design */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/my-booking', label: 'My Bookings' },
              { path: '/blogs', label: 'Blogs' },
              { path: '/contact', label: 'Contact Us' },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    scrolled
                      ? isActive
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                      : isActive
                      ? 'text-black font-semibold'
                      : 'text-gray-800 hover:text-blue-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Emergency Button - Subtle Design */}
          <div className="hidden md:block">
            <button
              className={`
              font-semibold px-6 py-2.5 rounded-full text-sm transition-all duration-300
              ${
                scrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow'
                  : 'bg-white/90 text-blue-600 hover:bg-white shadow-sm hover:shadow-md'
              }
            `}
            >
              Emergency
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                scrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-gray-800 hover:bg-white/50'
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen
            ? 'max-h-80 opacity-100 bg-white/95 backdrop-blur-sm border-t border-gray-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 space-y-3">
          {[
            { path: '/', label: 'Home' },
            { path: '/my-booking', label: 'My Bookings' },
            { path: '/blogs', label: 'Blogs' },
            { path: '/contact', label: 'Contact Us' },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-3 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <button className="w-full mt-3 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Emergency
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
