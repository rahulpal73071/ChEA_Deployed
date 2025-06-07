import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import pndLogo from "../assets/images/cheaorange.png"; // Update the path as per your folder
import { Navigate , Link } from "react-router-dom";

export default function Navbar({ user, onLogout}) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Events", href: "#events" },
    { name: "Blogs", href: "#blogs" },
    { name: "Publications", href: "/publications" },
    { name: "Links", href: "/links/25" },
    { name: "Our Council", href: "/contact" }, // External route
    { name: "Facads", href: "/facad/24" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-10" src={pndLogo} alt="PND Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-purple-400 transition duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* manual added */}
          <div className="space-x-4">
        {!user ? (
          <>
            <Link to="/register" className="bg-purple-500 hover:bg-purple-600 px-3 py-1 rounded">
              Register
            </Link>
            <Link to="/login" className="bg-purple-500 hover:bg-purple-600 px-3 py-1 rounded">
              Login
            </Link>
          </>
        ) : (
          <button onClick={onLogout} className="bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded">
            Logout
          </button>
        )}
      </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-6 pt-4 pb-6 ">
          <div className="space-y-4 flex flex-col items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-orange-400 text-lg transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
