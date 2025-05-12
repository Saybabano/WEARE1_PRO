import React, { useState } from "react";
import FAQItem from "./FAQItem";

const tabs = [
  "General",
  "Eligibility",
  "Application Queries",
  "Entrance and Essays",
  "Admission Policies",
];

const faqData = {
  General: [
    { question: "Is this program equivalent to other Executive MBAs?", answer: "Yes, it is comparable in academic rigor." },
    { question: "Can I work full-time during the program?", answer: "Yes, it's designed for working professionals." },
    { question: "How is residency handled?", answer: "Residency is hybrid and flexible." },
    { question: "What is the duration of the program?", answer: "It lasts approximately 12 months." },
    { question: "What is the mode of instruction?", answer: "Blended learning – online and in-person." },
    
  ],
  Eligibility: [
    { question: "What’s the minimum experience required?", answer: "At least 3 years in a managerial role." },
    { question: "Is a business background required?", answer: "No, diverse professional backgrounds are welcome." },
    { question: "Can freshers apply?", answer: "No, work experience is mandatory." },
    { question: "Are international applicants allowed?", answer: "Yes, with equivalent qualifications." },
    { question: "Is an undergraduate degree compulsory?", answer: "Yes, from a recognized university." },
  ],
  "Application Queries": [
    { question: "How do I apply?", answer: "Visit the official website and fill out the form." },
    { question: "What documents are required?", answer: "Resume, statement of purpose, degree, ID." },
    { question: "Is there an application fee?", answer: "Yes, check the site for current fees." },
  ],
  "Entrance and Essays": [
    { question: "Is there an entrance test?", answer: "Yes, a short aptitude test is required." },
    { question: "Are essays mandatory?", answer: "Yes, they help evaluate your fit for the program." },
    { question: "How should I write my SOP?", answer: "Be authentic, concise, and goal-oriented." },
  ],
  "Admission Policies": [
    { question: "What’s the refund policy?", answer: "Refunds are subject to the admissions policy." },
    { question: "Can I defer my admission?", answer: "Yes, under specific conditions." },
    { question: "Are there scholarships?", answer: "Yes, merit-based scholarships are available." },
  ],
};

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <div className="p-6 md:p-12 bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen">
      {/* Top Heading */}
      <p className="text-xs text-yellow-500 font-semibold uppercase mb-1 tracking-wider">✦ Student Journey</p>
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 drop-shadow-lg mb-10">
        Frequently Asked <span className="block text-black">Questions</span>
      </h1>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-black rounded-2xl shadow-2xl p-6 space-y-3">
          <h2 className="text-sm font-bold mb-3 text-yellow-400 uppercase tracking-wide">Categories</h2>
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 
              ${activeTab === tab
                  ? "bg-yellow-400 text-black shadow-yellow-300 shadow-md animate-pulse"
                  : "text-gray-300 hover:bg-gray-800 hover:text-yellow-300"
                }`}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="flex-1 bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {faqData[activeTab]?.length > 0 ? (
            <div className="space-y-4">
              {faqData[activeTab].map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No questions available for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}
