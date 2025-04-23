import React from "react";

const OverviewWeare1 = () => {
  return (
    <div className="bg-yellow-200 p-4 sm:p-6 md:p-8 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Side - Image */}
        <div>
          <img
            src="https://via.placeholder.com/600x400" // Replace with actual image path
            alt="Overview Weare1"
            className="rounded-lg w-full h-auto object-cover max-h-[400px]"
          />
          <p className="text-black font-semibold mt-3 text-center sm:text-left">Overview Weare1</p>
        </div>

        {/* Right Side - Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "Format", value: "Blended", subtext: "Online/In-Person Weekend Classes" },
            { title: "Commencement Date", value: "July", subtext: "(Tentative)" },
            { title: "Duration", value: "12 Months", subtext: "Incl. 2 Immersions" },
            { title: "Eligibility", value: "Working Professionals", subtext: "Minimum 5 Yrs Work Ex" }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow text-center text-black"
            >
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-base mt-2">{item.value}</p>
              <p className="text-sm text-gray-600">{item.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewWeare1;
