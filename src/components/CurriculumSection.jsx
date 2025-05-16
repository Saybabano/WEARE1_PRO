import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const cards = [
  { code: "IEE", title: "Introduction to Esports Ecosystem" },
  { code: "SMBB", title: "Sponsorship, Marketing & Brand Building" },
  { code: "TLO", title: "Tournament and League Operations" },
  { code: "TTM", title: "Team & Talent Management" },
  { code: "MSE", title: "Monetization Strategies in Esports" },
  { code: "LCE", title: "Legal & Compliance in Esports" },
];

export default function CurriculumSection() {
  const [phase, setPhase] = useState("spread");

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("grouped"), 1500);
    const timer2 = setTimeout(() => setPhase("spread"), 3500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const spreadLayout = [
    { top: "0%", left: "40%" },
    { top: "20%", left: "10%" },
    { top: "20%", left: "70%" },
    { top: "60%", left: "5%" },
    { top: "60%", left: "70%" },
    { top: "40%", left: "35%" },
  ];

  const groupedLayout = Array(cards.length).fill({ top: "30%", left: "35%" });
  const currentLayout = phase === "grouped" ? groupedLayout : spreadLayout;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-around p-6 sm:p-10 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 overflow-x-hidden text-black">
      
      {/* Left Content */}
      <div className="lg:w-1/2 mb-10 lg:mb-0 px-4">
        <p className="text-sm tracking-wide text-yellow-500 font-semibold mb-2 drop-shadow-lg">
          ⭐ INNOVATIVE LEARNING PATH
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug text-black drop-shadow-lg">
          Explore a Future-Ready <span className="text-yellow-500">Curriculum</span>
        </h2>
        <p className="text-gray-700 mb-6 text-base sm:text-lg">
          Our curriculum blends esports strategy, business fundamentals, marketing, operations, and tournament management.
        </p>
      </div>

      {/* Right Side: Animated Cards (only for sm and up) */}
      <div className="lg:w-1/2 relative h-[450px] w-full max-w-[500px] hidden sm:block">
        {cards.map((item, index) => {
          const { top, left } = currentLayout[index];
          return (
            <motion.div
              key={index}
              animate={{ top, left, opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 70, damping: 12 }}
              className="absolute bg-white p-4 w-52 rounded-xl shadow-xl border border-gray-300 hover:scale-105 transition-transform duration-300"
            >
              <span className="bg-yellow-500 text-black px-2 py-1 text-xs rounded-full inline-block shadow">
                {item.code}
              </span>
              <p className="mt-3 text-sm font-semibold text-gray-900">{item.title}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Responsive Card Grid for Mobile (xs only) */}
      <div className="w-full grid grid-cols-1 xs:grid-cols-2 gap-4 sm:hidden mt-4 px-4">
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-lg border border-gray-300"
          >
            <span className="bg-yellow-500 text-black px-2 py-1 text-xs rounded-full inline-block shadow">
              {item.code}
            </span>
            <p className="mt-3 text-sm font-semibold text-gray-900">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
