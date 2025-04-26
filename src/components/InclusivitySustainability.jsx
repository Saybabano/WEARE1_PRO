import React from "react";

const InclusivitySustainability = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-16">
          <p className="text-yellow-400 text-lg font-medium mb-3">
            + Initiatives for a better tomorrow
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            Our Inclusivity & <br className="sm:hidden" />
            Sustainability Goals
          </h2>
        </div>

        {/* Inclusivity Card */}
        <div className="bg-[#111111] rounded-3xl p-10 flex flex-col md:flex-row gap-12 mb-20 items-center">
          {/* Left Content */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-6">Inclusivity</h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
              At Masters’ Union, we celebrate diversity with a strong representation
              of female students and employees. Inclusivity sits at the heart of
              our community, and we create a supportive and dynamic learning
              environment for everyone.
            </p>

            {/* Student/Employee Stats */}
            <div className="grid grid-cols-2 gap-10 text-center">
              <div>
                <h4 className="text-lg font-bold text-yellow-400 mb-2">Student</h4>
                <p className="text-gray-300 text-base">61.3% Male</p>
                <p className="text-gray-300 text-base">38.7% Female</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-yellow-400 mb-2">Employee</h4>
                <p className="text-gray-300 text-base">48% Male</p>
                <p className="text-gray-300 text-base">52% Female</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src="https://t4.ftcdn.net/jpg/13/20/35/61/360_F_1320356180_xMTa3k7BJz1yYiIhhS7SNu7jFVgDMbAo.jpg"
              alt="Inclusivity"
              className="rounded-2xl w-full h-full object-cover shadow-xl"
            />
          </div>
        </div>

        {/* Sustainability Section */}
        <div className="max-w-5xl">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
            <img
              src="https://images.mastersunion.link/uploads/27012025/v1/Frame1171279071.svg"
              alt="Sustainability Icon"
              className="w-10 h-10"
            />
            Sustainability
          </h3>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Discover sustainable excellence in our LEED Platinum building. Enjoy fresh
            air with MERV 14 filtration, abundant natural daylight, and experience
            optimized space for maximum productivity and comfort.
          </p>

          <button className="bg-white text-black font-semibold text-sm px-8 py-4 rounded-full mb-14 hover:bg-yellow-400 transition-all">
            See LEED Scorecard →
          </button>

          {/* Sustainability Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-base text-gray-300">
            {/* Feature 1 */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl flex items-start gap-6">
              <img
                src="https://images.mastersunion.link/uploads/27012025/v1/Frame11712790714.svg"
                alt="Tick Icon"
                className="w-7 h-7 mt-1"
              />
              <p>Proposed for LEED Platinum by US Green Building Council</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl flex items-start gap-6">
              <img
                src="https://images.mastersunion.link/uploads/27012025/v1/Frame11712790712.svg"
                alt="Sun Icon"
                className="w-7 h-7 mt-1"
              />
              <p>Daylight-Optimized Building Footprint</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl flex items-start gap-6">
              <img
                src="https://images.mastersunion.link/uploads/27012025/v1/Frame11712790714.svg"
                alt="Air Filtration Icon"
                className="w-7 h-7 mt-1"
              />
              <p>Equipped with MERV 14 Air Filtration Technology</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl flex items-start gap-6">
              <img
                src="https://images.mastersunion.link/uploads/27012025/v1/Frame11712790714.svg"
                alt="Space Icon"
                className="w-7 h-7 mt-1"
              />
              <p>Floor Plates Designed To Enable Maximum Space Utilisation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InclusivitySustainability;
