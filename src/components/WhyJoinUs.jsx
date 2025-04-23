import React from 'react';

function WhyJoinUs() {
    return (
        <div className="bg-white py-16 px-6 lg:px-24">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
                {/* Left Section */}
                <div className="lg:w-1/2 space-y-6">
                    <span className="text-sm font-semibold text-yellow-500">WHY JOIN US</span>
                    <h1 className="text-4xl lg:text-4xl font-extrabold text-gray-800 leading-tight">
                        Become a Part of Our <br />
                        Mission to Redefine Business Education
                    </h1>
                    <p className="text-md text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                    </p>
                    <div className="flex justify-start">
                        <button className="bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-yellow-400 hover:scale-105">
                            Join Us
                        </button>
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="lg:w-1/2">
                    <img 
                        src="https://files.mastersunion.link/resources/img/jobs2Section.webp" 
                        alt="Why Join Us" 
                        className="w-full h-auto rounded-lg shadow-lg object-cover" 
                    />
                </div>
            </div>
        </div>
    );
}

export default WhyJoinUs;
