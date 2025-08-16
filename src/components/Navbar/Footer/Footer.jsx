import { NavLink } from "react-router";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-10">
      {/* Logo */}
      <div className="flex flex-col sm:flex-row items-center justify-center mb-6 space-y-2 sm:space-y-0 sm:space-x-2">
        <div className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-full">
          <span className="text-white text-xl font-bold">+</span>
        </div>
        <h1 className="font-bold text-lg">Phudu</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 text-gray-700 text-sm sm:text-base">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? "border-b-2 border-blue-600 text-blue-600 pb-1" : "hover:text-blue-600"
          }>
          Home
        </NavLink>

        <NavLink 
          to="/my-booking" 
          className={({ isActive }) => 
            isActive ? "border-b-2 border-blue-600 text-blue-600 pb-1" : "hover:text-blue-600"
          }>
          My Booking
        </NavLink>

        <NavLink 
          to="/blogs" 
          className={({ isActive }) => 
            isActive ? "border-b-2 border-blue-600 text-blue-600 pb-1" : "hover:text-blue-600"
          }>
          Blogs
        </NavLink>

        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            isActive ? "border-b-2 border-blue-600 text-blue-600 pb-1" : "hover:text-blue-600"
          }>
          Contact Us
        </NavLink>
      </div>

      {/* Border Line */}
      <div className="border-t border-gray-300 w-11/12 sm:w-3/4 mx-auto mb-6"></div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 text-gray-700 text-xl sm:text-2xl">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="hover:text-blue-600" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-600" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="hover:text-red-600" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
