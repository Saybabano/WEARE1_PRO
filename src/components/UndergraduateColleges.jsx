import React, { useState } from "react";

const categories = ["Undergraduate Colleges", "Former Employers"];

const undergraduateColleges = [
  "PennState",
  "Reed College",
  "University of California",
  "University of Essex",
  "University of Warwick",
  "Monash University",
  "IIT Varanasi",
  "Ramjas College",
  "St. Xavier’s",
  "Miranda House",
  "Symbiosis",
  "VIT",
  "Thapar Institute",
  "Loyola College",
  "St. Joseph’s College",
  "Michigan State University",
  "BITS Pilani",
  "Lady Shri Ram College",
];

const employers = [
  "McKinsey & Company",
  "Bain & Company",
  "BCG",
  "Oliver Wyman",
  "Accenture",
  "EY",
  "Deloitte",
  "PwC",
  "Samagra Shiksha Abhiyan",
  "Takshashila Consulting",
  "Avalon Consulting",
  "Virtusa",
  "Tekion",
  "ThouCentric Labs",
  "Praxis Global Alliance",
  "HEX Advisory Group",
];

const UndergraduateColleges = () => {
  const [activeTab, setActiveTab] = useState("Undergraduate Colleges");

  const getLogos = () => {
    return activeTab === "Undergraduate Colleges"
      ? undergraduateColleges
      : employers;
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 py-16 bg-white text-black space-y-14">
      {/* Heading */}
      <div className="text-center space-y-2">
        <h3 className="text-sm font-semibold text-yellow-500 uppercase tracking-wider">
          Collaborations & Affiliations
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Join Us to Drive Innovation in Education
        </h1>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm font-medium ${
              activeTab === category
                ? "bg-yellow-400 text-black border-yellow-500 shadow-lg"
                : "bg-black text-white hover:bg-gray-800 border-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {getLogos().map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out rounded-xl flex items-center justify-center h-24 p-4 text-center text-sm font-medium text-gray-700"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UndergraduateColleges;
