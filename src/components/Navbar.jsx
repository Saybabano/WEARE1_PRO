import React, { useState } from "react";
import {
  FaAngleDown,
  FaExternalLinkAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const navItems = {
  "ABOUT US": [
    [
      { label: "Our Story", path: "/our-story" },
      { label: "Experiences at the Union", path: "/experience-page" },
    ],
  ],
  ACADEMICS: [
    [
      { label: "School of Business", path: "/school-of-business" },
      { label: "School of Emerging Technologies", path: "/school-of-emerging-technologies" },
      { label: "Executive Education", path: "/executive-education" },
    ],
    [
      { label: "PGP in Tech and Business Management", path: "/pgp-tech-business-management" },
      { label: "PGP in Family Business Legacy Management", path: "/pgp-family-business-legacy-management" },
      { label: "UG in Tech and Business Management", path: "/ug-tech-business-management" },
      { label: "UG in Psychology and Marketing", path: "/ug-psychology-marketing" },
    ],
    [
      { label: "Highlights", path: "/academics-highlights" },
      { label: "Curriculum", path: "/curriculum" },
      { label: "Global Immersions", path: "/global-immersions" },
      { label: "Admissions & Fees", path: "/admissions-fees" },
      { label: "Career Prospects", path: "/career-prospects" },
      { label: "Cohort Profile", path: "/cohort-profile" },
    ],
  ],
  "STUDENT LIFE": [
    [
      { label: "Campus Life", path: "/campus-life" },
      { label: "Student Clubs", path: "/student-clubs" },
      { label: "Events", path: "/events" },
      { label: "Housing", path: "/housing" },
    ],
  ],
  INNOVATION: [
    [
      { label: "Labs", path: "/innovation-labs" },
      { label: "Research", path: "/research" },
      { label: "Startups", path: "/startups" },
      { label: "Tech Expo", path: "/tech-expo" },
    ],
  ],
};

const TopLinks = [
  { label: "For Companies", path: "/companypage" },
  { label: "Jobs", path: "/jobs" },
  { label: "Events", path: "/events" },
  { label: "Become a Master", path: "/become-a-master" },
  { label: "Blog", path: "/blog" },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isMegaMenu = (label) => navItems[label]?.length > 1;

  const toggleDropdown = (label) => {
    setActiveMenu(activeMenu === label ? null : label);
  };

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-black text-gray-400 text-[12px] py-2 px-4 hidden md:flex justify-end gap-x-4">
        {TopLinks.map((link) => (
          <Link key={link.label} to={link.path} className="cursor-pointer hover:underline">
            {link.label}
          </Link>
        ))}
      </div>

      {/* Navbar */}
      <nav className="bg-black text-white px-4 py-3 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img src="/logo.png" alt="logo" className="h-10" />

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 relative">
            {Object.keys(navItems).map((label) => (
              <div className="relative" key={label}>
                <button
                  className={`flex items-center font-semibold text-xs hover:text-yellow-300 transition-all ${
                    activeMenu === label ? "text-yellow-300" : ""
                  }`}
                  onClick={() => toggleDropdown(label)}
                >
                  {label} <FaAngleDown className="ml-1" />
                </button>

                {activeMenu === label && (
                  <div
                    className={`absolute top-[100%] mt-4 bg-black border-b-4 border-yellow-300 p-4 z-50 shadow-lg text-xs transition-all duration-200 ease-in-out ${
                      isMegaMenu(label) ? "grid grid-cols-3 gap-6 w-[48rem]" : "w-48"
                    } ${label === "INNOVATION" ? "right-0" : "left-1/2 -translate-x-1/2"}`}
                  >
                    {navItems[label].map((column, colIndex) => (
                      <div key={colIndex}>
                        {column.map((item, i) => (
                          <Link
                            key={i}
                            to={item.path}
                            className="mb-2 flex items-center gap-1 cursor-pointer hover:underline"
                          >
                            {item.label.includes("🔗") ? (
                              <>
                                {item.label.replace(" 🔗", "")}
                                <FaExternalLinkAlt className="text-xs" />
                              </>
                            ) : (
                              item.label
                            )}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/careers" className="font-semibold text-xs hover:text-yellow-300 transition-all">
              CAREERS
            </Link>
          </div>

          {/* Hamburger (Mobile) */}
          <button className="md:hidden text-white text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-6 px-4 text-xs">
            <div className="bg-black text-yellow-300 text-[12px] py-2 flex flex-wrap justify-center gap-3 border-y border-gray-700">
              {TopLinks.map((link) => (
                <Link key={link.label} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className="cursor-pointer hover:underline">
                  {link.label}
                </Link>
              ))}
            </div>

            {Object.keys(navItems).map((label) => (
              <div key={label} className="relative">
                <button onClick={() => toggleDropdown(label)} className="flex items-center justify-between w-full font-semibold py-2">
                  {label} <FaAngleDown />
                </button>

                {activeMenu === label && (
                  <div className="bg-black border-l-4 border-yellow-300 pl-4 mt-2 transition-all duration-200 ease-in-out grid gap-4">
                    {navItems[label].map((column, colIndex) => (
                      <div key={colIndex}>
                        {column.map((item, i) => (
                          <Link key={i} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="mb-2 flex items-center gap-1 cursor-pointer hover:underline">
                            {item.label.includes("🔗") ? (
                              <>
                                {item.label.replace(" 🔗", "")}
                                <FaExternalLinkAlt className="text-xs" />
                              </>
                            ) : (
                              item.label
                            )}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)} className="block font-semibold py-2 text-yellow-300 hover:underline">
              CAREERS
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
