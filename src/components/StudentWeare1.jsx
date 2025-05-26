import React from 'react';

function StudentWeare1() {
  return (
    <div className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col-reverse md:flex-row items-center p-6 sm:p-10 md:p-12 gap-10 transition-all duration-500 ease-in-out">

          {/* Left side: Video */}
          <div className="md:w-1/2 w-full">
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <iframe
                className="w-full h-64 sm:h-72 md:h-60 lg:h-72 xl:h-80"
                src="https://www.youtube.com/embed/S623rc2x6vU"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right side: Text Content */}
          <div className="md:w-1/2 w-full space-y-5 text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-wide">
              🎮 Esports Business <span className="text-yellow-400">Management</span>
            </h1>
            <p className="text-gray-200 text-base sm:text-lg">
              Launch your career in the future of competitive gaming.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Step into the high-energy world of esports with a program designed for aspiring managers, entrepreneurs, and professionals looking to lead and scale the esports industry. Our program blends industry expertise, live case studies, and practical simulations to prepare you for real-world challenges in this booming domain.
            </p>
            <button className="mt-4 inline-block px-6 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-xl shadow-md transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentWeare1;
