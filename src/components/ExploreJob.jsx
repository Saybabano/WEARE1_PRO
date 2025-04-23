import React from 'react';

function ExploreJob() {
    return (
        <div className="bg-black text-white flex flex-col lg:flex-row items-center justify-between px-6 py-12 space-y-8 lg:space-y-0">
            {/* Left Section */}
            <div className="lg:w-1/2 space-y-6">
                <h1 className="text-4xl font-extrabold leading-tight text-center lg:text-left">
                    Embark on <br />
                    an Exciting Journey <br />
                    by Working With Us
                </h1>
                <p className="text-lg text-gray-400 text-center lg:text-left">
                    Collaborate with us to shape your career path and grow in an innovative environment.
                </p>
                <div className="flex justify-center lg:justify-start">
                    <button className="bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-yellow-400 hover:scale-105">
                        Explore Job
                    </button>
                </div>
            </div>

            {/* Right Section - Image */}
            <div className="lg:w-1/2 flex justify-center">
                <img 
                    src="https://files.mastersunion.link/resources/img/muWork.webp" 
                    alt="Work With Us" 
                    className="w-2/3 h-auto rounded-lg shadow-lg object-cover" 
                />
            </div>
        </div>
    );
}

export default ExploreJob;
