import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CompaniesHeroSection = () => {
  return (
    <section className="bg-black text-white min-h-screen px-6 py-15 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left content */}
      <div className="max-w-2xl space-y-6 text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight">
          Join Us in <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Shaping the Future of Global
          </span>
          <br />
          Business Education
        </h1>

        <p className="text-gray-300 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer blandit, neque vel tristique luctus, nulla turpis aliquet libero, in tincidunt ipsum purus in elit.
        </p>

        <button className="mt-4 px-6 py-3 border border-yellow-500 text-yellow-400 rounded-full flex items-center gap-2 transition duration-300 hover:bg-yellow-500 hover:text-black hover:shadow-lg hover:scale-105 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
          Connect With Us
          <ArrowUpRight size={18} />
        </button>
      </div>

      {/* Right image */}
      <div className="max-w-xl w-full">
        <div className="rounded-3xl overflow-hidden shadow-2xl shadow-yellow-400/20">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi2oc_LF_PJV-l_rp4EmE-43vlF3obRIyWBQ&s"
            alt="Panel Discussion"
            className="w-[560px] h-[350px] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default CompaniesHeroSection;
