import React from "react";
import programImage from "../images/Who is This Program For.png";

export default function Learn() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-[#0D0D0D] text-white px-6 py-12 lg:px-24">
      
      {/* Left Section */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-3xl lg:text-5xl font-extrabold">
          Career Outcomes
        </h2>


        <ul className="px-4 py-4 rounded-b-xl">
          {[
            "Esports Manager",
            "Team Operations Executive",
            "Marketing Strategist – Gaming Brands",
            "Event Producer – Gaming & Esports",
            "Startup Founder in Gaming Ecosystem",
          ].map((text, index) => (
            <li
              key={index}
              className={`flex gap-3 items-start py-4 text-gray-300 ${
                index !== 4 ? "border-b border-gray-700" : ""
              }`}
            >
              <span className="text-yellow-400 text-lg">✦</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 relative flex justify-center">
        <div className="relative w-full max-w-xl"> {/* Decreased max width */}
          {/* Fancy border */}
          <div className="absolute top-5 left-5 w-full h-full border-2 border-r-yellow-400 border-b-yellow-400 border-t-transparent border-l-transparent rounded-xl z-0"></div>

          {/* Actual Image */}
          <img
            src={programImage}
            alt="Who Is This Program For"
            className="relative z-10 rounded-xl shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
