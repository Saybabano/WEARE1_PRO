import React from 'react';

function CocreateCourse() {
  return (
    <section className="bg-gray-100 px-10 md:px-10 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left text-shadow-lg drop-shadow-md tracking-wid ">
          Help us Build a
          <br />
          Better Union
        </h2>
        <p className="text-sm mb-12 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Timeline Section */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute top-0 left-5 h-full w-1 bg-yellow-400 transition-all duration-300"></div>

            <div className="relative pl-16 mb-12">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold border-4 border-white z-10">
                01
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-sm mb-1">
                  Lorem Ipsum Title One
                </h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit amet, consectetur adipiscing elit. Donec vel malesuada elit.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative pl-16 mb-12">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold border-4 border-white z-10">
                02
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-sm mb-1">
                  Dolor Sit Amet Title Two
                </h3>
                <p className="text-gray-600 text-sm">
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam amet, consectetur adipiscing elit. Donec vel malesuada elit.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="relative pl-16 mb-12">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold border-4 border-white z-10">
                03
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-sm mb-1">
                  Dolor Sit Amet Title Two
                </h3>
                <p className="text-gray-600 text-sm">
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus amet, consectetur adipiscing elit. Donec vel malesuada elit.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="relative pl-16 mb-12">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold border-4 border-white z-10">
                04
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-sm mb-1">
                  Dolor Sit Amet Title Two
                </h3>
                <p className="text-gray-600 text-sm">
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel malesuada elit.
                </p>
              </div>
            </div>

            {/* Step 3 (no line below this one) */}
            <div className="relative pl-16">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold border-4 border-white z-10">
                05
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-sm mb-1">
                  Consectetur Adipiscing Title Three
                </h3>
                <p className="text-gray-600 text-sm">
                  Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel malesuada elit.
                </p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src="https://media.istockphoto.com/id/1366724877/photo/rear-view-of-mature-teacher-talking-to-his-student-during-lecture-at-university-classroom.jpg?s=612x612&w=0&k=20&c=PYpAFHxiUKX2i1D8w_ElnGsm1B64GBleyF-DfYTLcN0="
              alt="Event"
              className="rounded-xl shadow-xl w-full h-[250px] sm:h-[250px] object-cover col-span-1 sm:col-span-2 transition-all duration-500 transform hover:scale-105"
            />
            <img
              src="https://st.depositphotos.com/1037987/4846/i/450/depositphotos_48462361-stock-photo-class-of-university-students-using.jpg"
              alt="Team Group"
              className="rounded-xl shadow-xl w-full h-[200px] object-cover transition-all duration-500 transform hover:scale-105"
            />
            <img
              src="https://t4.ftcdn.net/jpg/04/20/87/11/360_F_420871138_xnYQlUAlMx3k5zsJq4Ay3ktynVE8Rv2F.jpg"
              alt="Panel Discussion"
              className="rounded-xl shadow-xl w-full h-[200px] object-cover transition-all duration-500 transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CocreateCourse;
