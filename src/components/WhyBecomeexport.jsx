import React from "react";
import CollageImage from "../images/Collage image.png";

// Import icon images
import Icon1 from "../images/001.png";
import Icon2 from "../images/002.png";
import Icon3 from "../images/003.png";
import Icon4 from "../images/004.png";
import Icon5 from "../images/005.png";

const WhyBecomeMaster = () => {
  const features = [
    {
      title: "Dedicated Esports Education Platform in India",
      icon: Icon1,
    },
    {
      title: "Faculty with Gaming + Business Expertise",
      icon: Icon2,
    },
    {
      title: "Industry Partnerships with Tournaments, Teams, Startups",
      icon: Icon3,
    },
    {
      title: "Blended Learning: Online + Real-Time Events",
      icon: Icon4,
    },
    {
      title: "Portfolio Development & Startup Incubation",
      icon: Icon5,
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
                <div className="flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={`Icon ${index + 1}`}
                    className="w-6 h-6"
                  />
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
              src={CollageImage}
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
