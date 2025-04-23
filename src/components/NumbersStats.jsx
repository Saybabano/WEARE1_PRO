import React from "react";

const NumbersStats = () => {
    const stats = [
      { value: "300+", label: "Masters" },
      { value: "500+", label: "Students Enrolled" },
      { value: "9+", label: "Programmes" },
      { value: "250+", label: "CXO Sessions" }
    ];
  
    return (
      <section className="bg-gray-100 py-10 text-center">
        <div className="flex flex-wrap justify-center gap-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-4xl font-bold">{stat.value}</h3>
              <p className="text-gray-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default NumbersStats;
  