import React, { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <NavLink to="/" end className={({ isActive }) => isActive ? "border-b-2 border-blue-600 pb-1 text-black" : "hover:text-black"}>
              Home
            </NavLink>
            <NavLink to="/my-booking" className={({ isActive }) => isActive ? "border-b-2 border-blue-600 pb-1 text-black" : "hover:text-black"}>
              My-Bookings
            </NavLink>
            <NavLink to="/blogs" className={({ isActive }) => isActive ? "border-b-2 border-blue-600 pb-1 text-black" : "hover:text-black"}>
              Blogs
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "border-b-2 border-blue-600 pb-1 text-black" : "hover:text-black"}>
              Contact Us
            </NavLink>
          </div>

          {/* Emergency Button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Emergency
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-700">
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 text-gray-700 text-sm">
          <NavLink to="/" end onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "block border-b-2 border-blue-600 pb-1 text-black" : "block hover:text-black"}>
            Home
          </NavLink>
          <NavLink to="/my-booking" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "block border-b-2 border-blue-600 pb-1 text-black" : "block hover:text-black"}>
            My-Bookings
          </NavLink>
          <NavLink to="/blogs" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "block border-b-2 border-blue-600 pb-1 text-black" : "block hover:text-black"}>
            Blogs
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "block border-b-2 border-blue-600 pb-1 text-black" : "block hover:text-black"}>
            Contact Us
          </NavLink>
          <button className="w-full bg-blue-600 text-white text-sm font-semibold py-2 rounded-full hover:bg-blue-700 transition mt-2">
            Emergency
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
