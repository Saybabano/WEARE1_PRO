import React from "react";
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
      icon: <FaRegLightbulb size={30} className="text-yellow-500" />,
      title: "12-Month Immersive Program",
      value: "Blended",
      subtext: "with Real-World Projects",
    },
    {
      icon: <FaChalkboardTeacher size={30} className="text-yellow-500" />,
      title: "Learn from Industry Experts",
      value: "Esports & Gaming",
      subtext: "Business & Sports Experts",
    },
    {
      icon: <FaBriefcase size={30} className="text-yellow-500" />,
      title: "Live Case Studies",
      value: "Gaming Startups",
      subtext: "And Real Tournaments",
    },
    {
      icon: <FaGlobe size={30} className="text-yellow-500" />,
      title: "Global Curriculum",
      value: "International Trends",
      subtext: "Aligned with Esports Standards",
    },
    {
      icon: <FaRocket size={30} className="text-yellow-500" />,
      title: "Startup Bootcamp",
      value: "For Entrepreneurs",
      subtext: "Build Your Gaming Startup",
    },
    {
      icon: <FaChartLine size={30} className="text-yellow-500" />,
      title: "Placement & Internship Support",
      value: "With Top Brands",
      subtext: "Esports & Gaming Industry",
    },
  ];

  return (
    <div className="bg-yellow-100 p-4 sm:p-6 md:p-8 shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Image */}
        <div>
          <img
            src="https://gmedia.playstation.com/is/image/SIEPDC/cod-bo6-keyart-no-logo-01-en-7jun24?$native$"
            alt="Overview Weare1"
            className="rounded-xl w-full h-auto object-cover max-h-[400px] shadow-lg"
          />
          <p className="text-black font-bold mt-4 text-center sm:text-left text-xl">
            Overview WeAre1 Academy
          </p>
        </div>

        {/* Right Side - Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {infoCards.map((item, index) => (
            <div
              key={index}
              className="bg-white hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl p-5 shadow-md hover:shadow-2xl text-center text-black"
            >
              <div className="flex justify-center mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
              <p className="text-base mt-2 font-medium text-gray-700">{item.value}</p>
              <p className="text-sm text-gray-600">{item.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewWeare1;
