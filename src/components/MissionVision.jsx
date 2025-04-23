import React, { useState } from "react";

export default function VisionMissionSection() {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <div className="bg-black text-white min-h-screen py-16 px-6 md:px-24">
      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full p-1">
          <button
            className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
              activeTab === "vision" ? "bg-white text-black" : "text-white"
            }`}
            onClick={() => setActiveTab("vision")}
          >
            VISION
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
              activeTab === "mission" ? "bg-white text-black" : "text-white"
            }`}
            onClick={() => setActiveTab("mission")}
          >
            MISSION
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid md:grid-cols-3 gap-10 items-center">
        {/* Left Text */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-light leading-relaxed">
            To build a <span className="font-bold">globally eminent institution</span> that continuously challenges pedagogy & processes to deliver <span className="font-bold">unparalleled human growth</span>
          </h2>
          <p className="mt-4 text-gray-400 italic">“What” Masters’ Union is building</p>
        </div>

        {/* Center Image */}
        <div className="md:col-span-1">
          <img
            src="https://www.bluehost.com/blog/wp-content/uploads/2023/04/Writing-Mission-and-Vision-Statements.jpg"
            alt="vision mission"
            className="rounded-xl shadow-lg w-full"
          />
        </div>

        {/* Right 'How' Section */}
        <div className="md:col-span-1 space-y-4">
          <h3 className="text-yellow-400 font-semibold text-lg">The "How"</h3>
          <ul className="text-sm space-y-2">
            <li>➤ By not being a prisoner of our own legacy & continuously iterating on curriculum</li>
            <li>➤ By teaching as if a student is not a vessel that needs filling, but a candle that needs lighting</li>
            <li>➤ By always thinking big, striving to paint outside the lines while always being student centric</li>
          </ul>
        </div>
      </div>

      {/* Tabbed Content - shown based on selection */}
      <div className="mt-10 text-center text-sm text-gray-300">
        {activeTab === "vision" && <p>We envision a world-class education ecosystem...</p>}
        {activeTab === "mission" && <p>Our mission is to redefine learning through innovation...</p>}
      </div>
    </div>
  );
}