import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const alumniData = [
  {
    name: "Krishna Goyal",
    role: "Product Manager",
    company: "CISCO",
    cohort: "Cohort ‘24",
    before: "Hevo Data",
    after: "CISCO",
    image: "https://media.gettyimages.com/id/1693074336/photo/incheon-south-korea-momo-of-k-pop-girl-group-twice-is-seen-leaving-incheon-international.jpg?s=612x612&w=gi&k=20&c=93z0zX_KqGpyD6ByJB3-_4Do-o3sPgvzH67a5WZkt-c=",
  },
  {
    name: "Aisha Khan",
    role: "Software Engineer",
    company: "Google",
    cohort: "Cohort ‘23",
    before: "Amazon",
    after: "Google",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4BRSUY_p90-PMfI_AQDEn51vTTBj--jiClg&s",
  },
  {
    name: "Ravi Kumar",
    role: "Data Scientist",
    company: "Microsoft",
    cohort: "Cohort ‘22",
    before: "Facebook",
    after: "Microsoft",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR412ChMnseGlUQAxaYtOX3Yka5OAPkV9WDiw&s",
  },
];

const AlumniSpotlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextAlumni = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % alumniData.length);
  };

  const prevAlumni = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + alumniData.length) % alumniData.length
    );
  };

  const { name, role, company, cohort, before, after, image } = alumniData[currentIndex];

  return (
    <div className="bg-black text-white px-6 py-12 space-y-10">
      {/* Top Salary Section */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">
          ₹29.12<span className="text-yellow-400">L</span>, ₹33.10<span className="text-yellow-400">L</span> & ₹34.07<span className="text-yellow-400">L</span>
        </h2>
        <p className="text-sm text-gray-300">
          First, Second & Third cohorts’ average CTC surpassed that of Top B Schools, making us the most valued graduates in India.
        </p>
      </div>

      {/* Cohort Reports */}
      <div className="flex justify-center gap-4 flex-wrap">
        {[2021, 2022, 2023, 2024].map((year, idx) => (
          <div key={idx} className="bg-white w-24 h-28 rounded shadow-sm flex flex-col items-center justify-center">
            <div className="text-black font-semibold text-sm">Cohort {year}</div>
          </div>
        ))}
      </div>

      {/* Article Button */}
      <div className="text-center space-y-2">
        <p className="text-xs text-gray-400 max-w-md mx-auto">
          These placement reports have been verified & audited by Brickworks Analytics, an auditor for IIM Ahmedabad’s placement report.
        </p>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-500 transition-colors">
          Read The Economics Times article here
        </button>
      </div>

      {/* Alumni Spotlight Section */}
      <div className="pt-12 border-t border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-center">Alumni Spotlight</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10 items-center bg-gray-800 p-6 rounded-xl shadow-2xl transition-all transform hover:scale-105">
          {/* Alumni Image */}
          <img
            src={image}
            alt={name}
            className="w-64 h-64 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-110"
          />

          {/* Alumni Details */}
          <div className="space-y-3 text-left max-w-lg">
            <div>
              <h3 className="text-lg font-bold text-yellow-400">{name}</h3>
              <p className="text-sm text-white font-medium">
                {role}, <span className="text-yellow-400">{company}</span>
              </p>
              <p className="text-xs text-gray-400">{cohort}</p>
            </div>

            <div className="text-sm">
              <p className="text-gray-400">BEFORE</p>
              <p className="font-semibold text-white">{before}</p>
              <p className="text-gray-400 mt-2">AFTER</p>
              <p className="font-semibold text-yellow-400">{after}</p>
            </div>

            {/* Slide Number */}
            <p className="text-xs text-gray-400">{currentIndex + 1}/{alumniData.length}</p>

            {/* Navigation Arrows */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={prevAlumni}
                className="p-2 rounded-full border border-gray-500 hover:bg-gray-800 hover:scale-110 transition-transform"
              >
                <ChevronLeft className="w-4 h-4 text-yellow-400" />
              </button>
              <button
                onClick={nextAlumni}
                className="p-2 rounded-full border border-gray-500 hover:bg-gray-800 hover:scale-110 transition-transform"
              >
                <ChevronRight className="w-4 h-4 text-yellow-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniSpotlight;
