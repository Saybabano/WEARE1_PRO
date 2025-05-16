import React from "react";
import { FaGamepad, FaDownload, FaArrowRight } from "react-icons/fa";
import { MdOutlineSend } from "react-icons/md";
import { Link } from "react-router-dom"; // ✅ Added missing import

const EsportsCTA = () => {
  return (
    <section className="bg-yellow-100 py-12 px-4 md:px-20 text-gray-900">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
          Ready to Lead the <span className="text-yellow-600">Esports Revolution?</span>
        </h2>

        <p className="text-lg sm:text-xl font-medium flex justify-center items-center gap-2">
          <FaGamepad className="text-yellow-600 text-2xl" />
          Don’t just play the game — <span className="text-yellow-800 font-semibold ml-1">run it.</span>
        </p>

        <p className="text-base sm:text-lg">
          Start your journey into <span className="font-semibold text-yellow-700">Esports Business Management</span> today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          {/* Apply Now Button with Gradient */}
          <Link to="/create-account">
            <button
              className="text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold transition duration-300 hover:opacity-90"
              style={{
                background:
                  "linear-gradient(92deg, #39b6d8 7.6%, #f7d344 53.43%, #e38330 99.26%)",
              }}
            >
              Apply Now <FaArrowRight />
            </button>
          </Link>

          {/* Download Brochure Button */}
          <a
            href="/brochure.pdf"
            download
            className="bg-white text-yellow-600 px-6 py-3 rounded-full font-semibold border border-yellow-500 hover:bg-yellow-50 transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <FaDownload className="text-lg" />
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
};

export default EsportsCTA;
