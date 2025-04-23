import React from 'react';

function ExploreJobOpening() {
    return (
        <div className="bg-yellow-400 py-16 px-6">
            <div className="bg-white flex flex-col lg:flex-row items-center justify-between p-8 rounded-lg shadow-lg">
                {/* Left Section */}
                <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
                    <h1 className="text-3xl font-extrabold text-gray-800 leading-tight">
                        Passionate About Education? <br />
                        Join Our Team!
                    </h1>
                    <p className="text-md text-gray-600">
                        We are looking for driven individuals who are eager to contribute to the future of education. Apply today!
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <button className="bg-black text-yellow-500 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-yellow-500  hover:text-white hover:scale-105">
                            Explore Job Opening
                        </button>
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <img 
                        src="https://via.placeholder.com/400" 
                        alt="Job Opening" 
                        className="w-full h-auto rounded-lg shadow-lg object-cover" 
                    />
                </div>
            </div>
        </div>
    );
}

export default ExploreJobOpening;
