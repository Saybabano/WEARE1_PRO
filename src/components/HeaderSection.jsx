import React from "react";

const HeaderSection = () => {
  return (
    <div className="w-full max-w-4xl px-4 sm:px-6 md:px-8 mt-[-40px] sm:mt-[-60px] md:mt-[-100px] space-y-4 sm:space-y-6">
      <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold leading-snug sm:leading-tight tracking-tight text-white">
        <span className="text-yellow-500 drop-shadow-lg">
          Turn Your Passion into a Profession
        </span>
        <br />
        with{" "}
        <span className="relative inline-block">
          <span className="text-white drop-shadow-lg">Esports Business </span>
          <span className="hidden sm:block absolute bottom-0 left-0 w-full h-1 bg-yellow-300 rounded-full transition-all duration-500 ease-in-out transform scale-x-0 hover:scale-x-100"></span>
        </span>
        <span className="text-yellow-500 drop-shadow-lg"> Management</span>
      </h1>

      <p className="text-xs sm:text-lg md:text-md text-gray-700 drop-shadow-lg ">
        Join the Future of Gaming Leadership
      </p>

      <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed drop-shadow-lg">
        Master the business side of esports with industry-aligned curriculum, <br/>
         hands-on projects, and expert mentorship.
      </p>
    </div>
  );
};

export default HeaderSection;
