import React from "react";

const RecruitmentSection = () => {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-10 py-12 sm:py-16 text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center md:text-left drop-shadow-md tracking-wide drop-shadow-lg">
          Kickstart Your Career in Esports
        </h2>

        <p className="text-gray-500 text-sm sm:text-xs mb-8 sm:mb-6 text-center md:text-left leading-relaxed">
          With access to real-world internships, live projects, and recruiter networking events, we ensure you’re ready for roles like
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Timeline Section */}
          <div className="relative">
            {/* Vertical Timeline Line (Hidden on small screens) */}
            <div className="hidden sm:block absolute top-0 left-5 h-[85%] w-1 bg-yellow-500"></div>

            {[
              "Esports Team Manager",
              "Tournament Operations Manager",
              "Esports Marketing Strategist",
              "Business Development Associate – Gaming",
              "Gaming Content Manager"
            ].map((role, i) => (
              <div
                key={i}
                className="relative pl-14 sm:pl-16 mb-10 sm:mb-12 flex items-start"
              >
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold border-4 border-white z-10 text-sm sm:text-base">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base mb-1">
                    {role}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src="https://dgtg.in/images/aboutus/gallery1.png"
              alt="Event"
              className="rounded-xl w-full h-[180px] sm:h-[220px] object-cover col-span-1 sm:col-span-2"
            />
            <img
              src="https://media.licdn.com/dms/image/v2/C4E1BAQG2zNzTfWYo2Q/company-background_10000/company-background_10000/0/1584619185616/dgtg_marketing__retail_private_limited_cover?e=2147483647&v=beta&t=j_sVvjl2-z_-MG1uHid3U7FNFYwIKcLwv6YprMk4ZeE"
              alt="Team Group"
              className="rounded-xl w-full h-[160px] sm:h-[170px] object-cover"
            />
            <img
              src="https://dgtg.in/images/Home/dgtg.png"
              alt="Panel Discussion"
              className="rounded-xl w-full h-[160px] sm:h-[170px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;
