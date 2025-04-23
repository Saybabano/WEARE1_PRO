import React from "react";

const HeaderSection = () => {
    return (
      <div className="max-w-xl">
        <h1 className="text-4xl font-extrabold leading-tight">
          Weare1 <span className="relative inline-block">
            Academy
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-yellow-500 rounded-full"></span>
          </span>
          <br />
          Management
        </h1>
        <p className="text-gray-400 mt-4">
          Career reset programme for mid-career professionals
        </p>
      </div>
    );
  };
  
  export default HeaderSection;