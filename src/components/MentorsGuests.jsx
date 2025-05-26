import React from "react";
import LearnFromLegendsImg from "../images/Learn from the Legends.png";

export default function MentorsGuests() {
  return (
    <div className="bg-[#FFFCEB] rounded-2xl px-6 lg:px-24 py-12 mx-4 lg:mx-10 my-8">
      <div className="flex flex-col lg:flex-row items-center justify-between">

        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-2xl lg:text-4xl font-bold text-black leading-snug drop-shadow-lg">
            Learn from the Legends <br />
          </h2>

          <p className="text-gray-700 text-base">
            Get mentored by top esports coaches, managers, analysts, marketers, and tech founders.
          </p>
          <h1 className="text-yellow-600 drop-shadow-lg">Featured Mentors & Guests:</h1>

          <ul className="space-y-4 text-gray-700">
            {[
              "Former Esports Team Managers (PUBG, Valorant, CS:GO)",
              "Brand Managers from Top Gaming Companies",
              "Shoutcasters & Tournament Directors",
              "Tech Leads from Gaming Startups",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-yellow-500 text-lg mt-1">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            src={LearnFromLegendsImg}
            alt="Learn from the Legends"
            className="rounded-2xl shadow-md w-full max-w-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
