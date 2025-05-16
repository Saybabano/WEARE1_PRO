import React from "react";
import { FaGamepad, FaChalkboardTeacher, FaHandshake, FaLaptopCode, FaRocket } from "react-icons/fa";

const WhyBecomeMaster = () => {
  const features = [
    {
      title: "Dedicated Esports Education Platform in India",
      icon: <FaGamepad />,
    },
    {
      title: "Faculty with Gaming + Business Expertise",
      icon: <FaChalkboardTeacher />,
    },
    {
      title: "Industry Partnerships with Tournaments, Teams, Startups",
      icon: <FaHandshake />,
    },
    {
      title: "Blended Learning: Online + Real-Time Events",
      icon: <FaLaptopCode />,
    },
    {
      title: "Portfolio Development & Startup Incubation",
      icon: <FaRocket />,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-20 bg-black text-gray-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10 text-center md:text-left">
          <h4 className="text-xs font-semibold tracking-widest uppercase text-yellow-400 mb-2">
            Nurturing Growth
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            Why Choose <span className="text-yellow-500">WeAre1 Academy?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6 text-white">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center text-black text-xl">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-400 hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Right - Image */}
          <div className="w-full">
            <img
              src="https://www.eventsforgamers.com/wp-content/uploads/2020/07/MiddleEastGameCon.jpg"
              alt="Event Preview"
              className="rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBecomeMaster;
