import React from "react";

const RecruitmentSection = () => {
  return (
    <section className="bg-white px-6 md:px-10 py-16 text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left drop-shadow-md tracking-wid">
          Recruitment Process
        </h2>
        <p className="text-gray-600 text-sm mb-12 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Timeline Section */}
          <div className="relative">
            {/* Vertical line (shortened) */}
            <div className="absolute top-0 left-5 h-[85%] w-1 bg-yellow-500"></div>

            {/* Step 1 */}
            <div className="relative pl-16 mb-12">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold border-4 border-white z-10">
                01
              </div>
              <div className="bg-white">
                <h3 className="font-semibold text-sm md:text-sm mb-1">
                  Lorem Ipsum Title One
                </h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel malesuada elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel malesuada elit.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative pl-16 mb-12">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold border-4 border-white z-10">
                02
              </div>
              <div className="bg-white">
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
                03
              </div>
              <div className="bg-white">
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
              src="https://dgtg.in/images/aboutus/gallery1.png"
              alt="Event"
              className="rounded-xl w-full h-[200px] sm:h-[220px] object-cover col-span-1 sm:col-span-2"
            />
            <img
              src="https://media.licdn.com/dms/image/v2/C4E1BAQG2zNzTfWYo2Q/company-background_10000/company-background_10000/0/1584619185616/dgtg_marketing__retail_private_limited_cover?e=2147483647&v=beta&t=j_sVvjl2-z_-MG1uHid3U7FNFYwIKcLwv6YprMk4ZeE"
              alt="Team Group"
              className="rounded-xl w-full h-[170px] object-cover"
            />
            <img
              src="https://dgtg.in/images/Home/dgtg.png"
              alt="Panel Discussion"
              className="rounded-xl w-full h-[170px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;
