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
    { question: "Is this course only for gamers?", answer: "No. This program is for anyone interested in the esports business – marketing professionals, analysts, event planners, and entrepreneurs are all welcome." },
    { question: "Do I need prior experience in esports?", answer: "Not at all. We begin with fundamentals and guide you through to advanced strategy, so beginners and pros both gain value." },
    { question: " Is this a certified program?", answer: "Yes. Upon completion, you receive an industry-recognized certification from WeAre1 Academy." },
    { question: "WAre there any internships or placement support?", answer: "Absolutely. We offer live projects, internships with esports companies, and career guidance." },
    { question: " Can I manage the course with my job or college?", answer: "Yes, it’s designed to be flexible for working professionals and college students, with weekend classes and online access." },
    { question: "Will I get to work on real tournaments or teams?", answer: "Yes. Our capstone projects include managing real esports events or collaborating with active teams." },

  ],
  Eligibility: [
    { question: "Q: How many years of experience do applicants need to be admitted?", answer: "No prior experience in esports is mandatory. However, a passion for gaming, management acumen, or interest in event operations is highly recommended." },
    { question: "Is there an age limit for entry?", answer: "No, there is no age limit. Anyone with a passion for gaming and esports business can apply." },
    { question: "Who are we looking for?", answer: "We’re looking for ambitious learners who are enthusiastic about the gaming industry—whether they are students, working professionals, marketers, or aspiring entrepreneurs." },
  ],
  "Application Queries": [
    { question: "Do I need to take GMAT, GRE, or CAT to enroll?", answer: "No. The program does not require standardized test scores. Admission is based on your profile and intent." },
    { question: "Can applicants get their profile evaluated before applying?", answer: "Yes, we offer a free profile evaluation session. Reach out to our admissions team to schedule one." },
    { question: "Are all candidates interviewed?", answer: "Yes, shortlisted candidates will be interviewed as part of the selection process." },
    { question: "If my application is unsuccessful, may I reapply in the next round?", answer: "Absolutely. We encourage you to reapply after addressing any feedback or recommendations shared." },
    { question: "How strict are the application deadlines?", answer: "Deadlines are strictly followed due to limited seats per cohort. We advise applying early." },
  ],
  "Entrance and Essays": [
    { question: "How will applicants be graded for the course?", answer: "Grading is based on participation, project performance, practical assessments, and attendance in live sessions." },
    { question: "Can applicants tailor their learning journey in the esports business program?", answer: "Yes. While core subjects are fixed, there are elective tracks and capstone projects that align with individual career goals." },
    { question: "Are any of the rounds more or less competitive than others?", answer: "All admission rounds maintain similar competitiveness. However, early applications typically have higher chances due to limited seats." },
    { question: "How should applicants approach the essay section?", answer: "Use the essay to highlight your passion for esports, career goals, and why this program fits into your journey. Be authentic and reflective." },
  ],
  "Admission Policies": [
    { question: "Are the fees refunded if I decide to drop out of the program?", answer: "We follow a transparent refund policy. Refunds are possible within a specific window before the course begins. Please refer to our policy guide or speak to an advisor." },
    { question: "Can I defer my admission offer to the next year?", answer: "Yes, deferral is allowed under certain circumstances and must be approved by the admissions committee." },
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
