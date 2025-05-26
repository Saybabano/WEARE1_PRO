import React from 'react';
import { Link } from 'react-router-dom';

function ExploreAacademy() {
  return (
    <div className="py-12 px-4 flex flex-col items-center min-h-[55vh]">
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl text-center font-bold mb-8 text-gray-800 drop-shadow-md tracking-wide">
          Ready to Get Started?{' '}
          <span className="text-yellow-500">...</span>
        </h1>

        <p className="mb-6">
          Join the Esports Business Management Program and become part of a future-ready tribe reshaping digital entertainment.
        </p>

        <div className="grid grid-cols-2 gap-6">
          {/* Apply Now */}
          <Link to="/create-account" className="w-full">
            <button className="w-full py-3 bg-white text-black border border-yellow-500 rounded-full shadow-sm hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-between px-4 group">
              <span>Apply Now</span>
              <span className="text-lg transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </Link>

          {/* Download Brochure */}
          <a href="/brochure.pdf" className="w-full" download>
            <button className="w-full py-3 bg-white text-black border border-yellow-500 rounded-full shadow-sm hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-between px-4 group">
              <span>Download Brochure</span>
              <span className="text-lg transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </a>

          {/* Explore Curriculum */}
          <Link to="/Curriculum" className="w-full">
            <button className="w-full py-3 bg-white text-black border border-yellow-500 rounded-full shadow-sm hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-between px-4 group">
              <span>Explore Curriculum</span>
              <span className="text-lg transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </Link>

          {/* Talk to an Expert */}
          <a href="mailto:contact@example.com" className="w-full">
            <button className="w-full py-3 bg-white text-black border border-yellow-500 rounded-full shadow-sm hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-between px-4 group">
              <span>Talk to an Expert</span>
              <span className="text-lg transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ExploreAacademy;
