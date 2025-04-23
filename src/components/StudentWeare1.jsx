import React from 'react'

function StudentWeare1() {
    return (
        <div className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row p-6 sm:p-8 md:p-6 gap-6 transition-all duration-500 ease-in-out">

                    {/* Right side: Text Content */}
                    <div className="md:w-1/2 w-full p-2 sm:p-4">
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 leading-snug mb-4 drop-shadow-md tracking-wide">
                            Student of the <span className="text-yellow-500">Export</span>
                        </h1>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
                            malesuada. Join a dynamic cohort of learners driving real-world
                            change through innovation and collaboration.
                        </p>
                    </div>

                    {/* Left side: Video */}
                    <div className="md:w-1/2 w-full">
                        <iframe
                            className="w-full h-52 sm:h-64 md:h-50 lg:h-60 rounded-xl"
                            src="https://www.youtube.com/embed/S623rc2x6vU"
                            title="YouTube video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default StudentWeare1
