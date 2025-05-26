import React from "react";
import CollageImage from "../images/Who is This Program For.png";

import {
  FaRegLightbulb,
  FaChalkboardTeacher,
  FaBriefcase,
  FaGlobe,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";

const OverviewWeare1 = () => {
  const infoCards = [
    {
      icon: <FaRegLightbulb size={24} />,
      title: "12-Month Immersive Program",
      value: "Blended",
      subtext: "with Real-World Projects",
    },
    {
      icon: <FaChalkboardTeacher size={24} />,
      title: "Learn from Industry Experts",
      value: "Esports & Gaming",
      subtext: "Business & Sports Experts",
    },
    {
      icon: <FaBriefcase size={24} />,
      title: "Live Case Studies",
      value: "Gaming Startups",
      subtext: "And Real Tournaments",
    },
    {
      icon: <FaGlobe size={24} />,
      title: "Global Curriculum",
      value: "International Trends",
      subtext: "Aligned with Esports Standards",
    },
    {
      icon: <FaRocket size={24} />,
      title: "Startup Bootcamp",
      value: "For Entrepreneurs",
      subtext: "Build Your Gaming Startup",
    },
    {
      icon: <FaChartLine size={24} />,
      title: "Placement & Internship Support",
      value: "With Top Brands",
      subtext: "Esports & Gaming Industry",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <img
            src={CollageImage}
            alt="Overview"
            className="rounded-2xl shadow-xl w-full max-h-[400px] object-cover"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-6 text-center md:text-left">
            Overview <span className="text-yellow-500">WeAre1 Academy</span>
          </h2>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {infoCards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 border border-yellow-200"
            >
              <div className="flex items-center justify-center mb-3 text-yellow-500">
                {item.icon}
              </div>
              <h3 className="font-semibold text-sm text-gray-800 text-center">
                {item.title}
              </h3>
              <p className="text-xs text-gray-700 text-center font-medium mt-1">
                {item.value}
              </p>
              <p className="text-xs text-gray-500 text-center">{item.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewWeare1;
