import React, { useState } from "react";

const categories = [
  "Consulting",
  "Finance And Fintech",
  "Large Tech",
  "Venture Capital",
  "Consumer Tech",
  "Emerging"
];

const consultingLogos = [
  "KEARNEY",
  "McKinsey & Company",
  "Bain & Company",
  "BCG",
  "Oliver Wyman",
  "Accenture",
  "Samagra Shiksha Abhiyan",
  "EY",
  "Deloitte",
  "PwC",
  "Avalon Consulting",
  "Takshashila Consulting",
  "Acuvon",
  "Virtusa",
  "Tekion",
  "ThouCentric Labs",
  "Praxis Global Alliance",
  "HEX Advisory Group"
];

const RecruiterTabsComponent = () => {
  const [activeTab, setActiveTab] = useState("Consulting");

  const getLogos = () => {
    if (activeTab === "Consulting") return consultingLogos;
    return ["Coming soon..."];
  };

  return (
    <div className="px-8 py-10">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
        Industry Icons
      </h2>
      <h1 className="text-3xl font-bold mt-1 mb-6">Our Recruiters</h1>

      <div className="flex flex-wrap gap-4 bg-black text-white rounded-full px-2 py-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === category
                ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black"
                : "hover:bg-gray-800"
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
        {getLogos().map((logo, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-lg shadow-sm flex items-center justify-center h-24 text-center p-4 text-sm font-medium text-gray-700"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruiterTabsComponent;
