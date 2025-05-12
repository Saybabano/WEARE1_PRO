import React, { useState } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const navItems = {
  "ABOUT US": [
    [
      { label: "Team Members", path: "https://weare1.academy/team" },
      { label: "Partners", path: "https://weare1.academy/partners" },
      { label: "trainers", path: "https://weare1.academy/trainers" },
      { label: "About WEARE1", path: "https://weare1.academy/aboutus" },
    ],
  ],
  "CONTACT US": [
    [
      { label: "Get in Touch", path: "/contact" },
      { label: "FAQs", path: "/faqs" },
    ],
  ],
};

const simpleNavLinks = [
  { label: "COURSES", path: "https://weare1.academy/#popular-course" },
  { label: "COMPANY HIRING", path: "https://weare1.academy/companies" },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (label) => {
    setActiveMenu(activeMenu === label ? null : label);
  };

  return (
    <div className="w-full">
      <nav className="text-gray-700 h-25 px-4 py-5 sticky top-0 z-50 bg-black">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img
            src="https://weare1.academy/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.4d572962.png&w=256&q=75"
            alt="logo"
            className="h-10"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 relative">
            <Link
              to="/"
              className="font-semibold text-gray-200 hover:text-yellow-400 transition-all py-2"
            >
              HOME
            </Link>

            {simpleNavLinks.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="font-semibold text-gray-200 hover:text-yellow-400 transition-all py-2"
              >
                {item.label}
              </Link>
            ))}

            {Object.keys(navItems).map((label) => (
              <div className="relative" key={label}>
                <button
                  className={`flex items-center font-semibold text-gray-200 hover:text-yellow-400 transition-all py-2 ${
                    activeMenu === label ? "text-yellow-400" : ""
                  }`}
                  onClick={() => toggleDropdown(label)}
                >
                  {label} <FaAngleDown className="ml-1" />
                </button>

                {activeMenu === label && (
                  <div className="absolute top-full mt-3 bg-black text-gray-200 border-b-4 border-yellow-400 p-4 shadow-lg text-md w-64 rounded-lg transition-all">
                    {navItems[label][0].map((item, i) => (
                      <a
                        key={i}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mb-2 hover:underline"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 px-4 text-md bg-black text-gray-200 shadow-lg rounded-lg">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-semibold py-2 hover:text-yellow-300"
            >
              HOME
            </Link>

            {simpleNavLinks.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-semibold py-2 hover:text-yellow-300"
              >
                {item.label}
              </Link>
            ))}

            {Object.keys(navItems).map((label) => (
              <div key={label}>
                <button
                  onClick={() => toggleDropdown(label)}
                  className="flex items-center justify-between w-full font-semibold py-2 text-gray-200 hover:text-yellow-400"
                >
                  {label} <FaAngleDown />
                </button>

                {activeMenu === label && (
                  <div className="bg-black border-l-4 border-yellow-300 pl-4 mt-2">
                    {navItems[label][0].map((item, i) => (
                      <a
                        key={i}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block mb-2 hover:underline text-gray-200"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
