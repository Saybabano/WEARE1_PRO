import React from 'react';

function BecameExport() {
  return (
    <>
      <div className="bg-black flex flex-col sm:flex-row justify-between items-center p-10 sm:p-20 rounded-xl shadow-xl">
        <div className="text-white w-full sm:w-1/2 mb-10 sm:mb-0 sm:pr-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-6">
            <span className="text-yellow-400">Lead</span>, <span className="text-yellow-400">Mentor</span>, and <span className="text-yellow-400">Inspire</span><br /> 
            the Next Gen Leaders
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Be the change that builds future leaders. Share your journey and become a guiding light.
          </p>
          <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full shadow-md transition duration-300 ease-in-out">
            Become an Expert
          </button>
        </div>

        <div className="w-full sm:w-1/2 rounded-lg overflow-hidden  border-yellow-400">
          <iframe 
            width="100%" 
            height="315" 
            src="https://www.youtube.com/embed/WmMPzm5l-oU?si=He8z3zAcKuCAb38b" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default BecameExport;
