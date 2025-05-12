import React, { useState, useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const tabs = [
  "Dropshipping Challenge",
  "VIP Challenge",
  "Case Competitions",
  "Creator Challenge",
];

export default function ChallengeSection() {
  const [activeTab, setActiveTab] = useState("VIP Challenge");
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 320;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const getCardsForTab = () => {
    const content = {
      "Dropshipping Challenge": {
        image: "/dropshipping.jpg",
        desc: "Build your ecom store and learn dropshipping in 5 days.",
      },
      "VIP Challenge": {
        image: "/bullspree.jpg",
        desc: "Bullspree has become one of India’s top gaming apps to understand stock market dynamics.",
      },
      "Case Competitions": {
        image: "/casecomp.jpg",
        desc: "Solve real-world cases from companies and compete with peers.",
      },
      "Creator Challenge": {
        image: "/creator.jpg",
        desc: "Build your personal brand and monetize your creativity.",
      },
    };

    const { image, desc } = content[activeTab];

    return (
      <>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="min-w-[300px] max-w-sm bg-white rounded-2xl shadow-lg p-4 flex-shrink-0"
          >
            <img src={image} alt={activeTab} className="rounded-xl mb-4" />
            <h4 className="text-lg font-semibold">
              {activeTab} Card {i + 1}
            </h4>
            <span className="text-xs bg-gray-200 rounded px-2 py-1 inline-block mt-2">
              Raised $1M+
            </span>
            <p className="text-sm mt-2">{desc}</p>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="py-12 bg-white text-black max-w-screen-xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-2">
        Witness the Outcomes of <br />
        OutClass Curriculum
      </h2>
      <img src="/underline.svg" alt="underline" className="mb-6" />

      {/* Tabs */}
      <div className="flex bg-black rounded-full overflow-hidden mb-8 max-w-4xl">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm md:text-base px-5 py-3 transition-all duration-300 font-semibold ${
              activeTab === tab ? "text-yellow-400" : "text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards Section */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden scroll-smooth pointer-events-none"
        >
          <div className="pointer-events-auto flex">
            {getCardsForTab()}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-end items-center mt-4 gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border text-black flex items-center justify-center"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border text-black flex items-center justify-center"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
