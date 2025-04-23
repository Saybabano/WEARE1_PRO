import React from 'react';

function ReadMore() {
  return (
    <div className="bg-black text-white flex flex-col md:flex-row items-center justify-between p-10 md:p-20 shadow-lg">
      <div className="w-full md:w-1/2 md:pr-10 mb-8 md:mb-0">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-snug">
          Exploring the <span className="text-yellow-400">Highest MBA Placement Packages</span> in India:
          <br />What You Can Expect from <span className="text-yellow-400">Masters’ Union</span>
        </h1>
        <p className="text-gray-300 mb-6">
          Discover how India's top MBA institutions are revolutionizing careers with record-breaking
          placement packages and industry-driven learning. Here's everything you need to know.
        </p>
        <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition-all duration-300 ease-in-out">
          Read More
        </button>
      </div>

      <div className="w-full md:w-1/2">
        <img 
          src="https://www.shutterstock.com/image-vector/power-play-dynamic-gaming-controller-260nw-2321548437.jpg" 
          alt="MBA Placement" 
          className="rounded-lg w-full h-auto shadow-md"
        />
      </div>
    </div>
  );
}

export default ReadMore;
