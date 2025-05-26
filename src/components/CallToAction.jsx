import React from "react";
import { FaFileDownload, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-br from-yellow-100 via-orange-50 to-yellow-100 py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
        {/* Decorative Shape */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-yellow-300 rounded-full opacity-30 animate-pulse z-0"></div>

        <div className="relative z-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-yellow-600 mb-6 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl mb-10">
            Join the <span className="font-semibold text-black">Esports Business Management Program</span> and become part of a future-ready tribe reshaping digital entertainment.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button className="flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              <FaEnvelope className="text-lg" />
              Apply Now
            </button>

            <button className="flex items-center gap-3 border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-105">
              <FaFileDownload className="text-lg" />
              Download Brochure
            </button>

            <button className="flex items-center gap-3 bg-orange-100 hover:bg-orange-200 text-orange-600 font-semibold px-6 py-3 rounded-full border border-orange-300 transition-all duration-300 transform hover:scale-105">
              <FaPhoneAlt className="text-lg" />
              Talk to an Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
