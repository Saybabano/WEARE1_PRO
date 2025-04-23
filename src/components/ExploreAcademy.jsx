import React from 'react';

function ExploreAacademy() {
  return (
    <div
      className="py-12 px-4 flex flex-col items-center min-h-[60vh]"
    >
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl text-center font-bold mb-8 text-gray-800 drop-shadow-md tracking-wide">
          Explore Weare1 Academy{' '}
          <span className="text-yellow-500">...</span>
        </h1>

        <div className="grid grid-cols-2 gap-6">
          {[
            'Student Life',
            'Explore Career',
            'See the Academics',
            'Explore Events',
          ].map((label, index) => (
            <button
              key={index}
              className="w-full py-3 text-center bg-white text-black border border-yellow-500 rounded-full shadow-sm hover:bg-black hover:text-white hover:border-yellow-500 transition-all duration-300 flex items-center justify-between px-4 group"
            >
              <span>{label}</span>
              <span className="text-lg transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreAacademy;
