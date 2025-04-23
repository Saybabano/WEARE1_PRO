import React, { useState } from "react";

const categories = [
  "Practitioners",
  "Academic Collaborations",
  "Accreditation Bodies",
  "NGOs & Communities",
  "Govt. Bodies",
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
  "HEX Advisory Group",
];

const CollaborationsAffiliations = () => {
  const [activeTab, setActiveTab] = useState("Practitioners");

  const getLogos = () => {
    if (activeTab === "Practitioners") return consultingLogos;
    return ["Coming soon..."];
  };

  return (
    <div className="px-4 md:px-12 lg:px-24 py-12 bg-white text-black space-y-10">
      {/* Section Title */}
      <div className="space-y-2">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
          Collaborations & Affiliations
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold">
          Join Us to Drive Innovation in Education
        </h1>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 bg-black text-white rounded-full px-4 py-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === category
                ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black"
                : "hover:bg-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {getLogos().map((logo, idx) => (
          <div
            key={idx}
            className="bg-gray-100 hover:bg-yellow-100 rounded-xl shadow-md flex items-center justify-center h-24 text-center p-4 text-sm font-semibold text-gray-700 transition-all duration-300"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborationsAffiliations;
