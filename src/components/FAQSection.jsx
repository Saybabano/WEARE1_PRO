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
        { question: "Are there international immersion programs?", answer: "Yes, depending on the cohort and schedule." },
        { question: "What certifications will I receive?", answer: "Post Graduate Programme in Management certificate." },

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
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Top Heading */}
            <p className="text-xs text-yellow-500 font-medium uppercase mb-1">  ✦ Student Journey</p>
            <h1 className="text-4xl font-extrabold text-black mb-8 drop-shadow-md tracking-wide">
                Frequently Asked <span className="block text-yellow-500">Questions</span>
            </h1>

            {/* Layout */}
            <div className="flex flex-col md:flex-row gap-6">
                {/* Sidebar */}
                <div className="w-full md:w-60 bg-white rounded-xl shadow-lg p-4 space-y-2 h-auto md:h-[350px] overflow-y-auto">
                    <h2 className="text-sm font-bold mb-2 text-gray-700">Categories</h2>
                    {tabs.map((tab) => (
                        <div
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`cursor-pointer px-3 py-2 rounded-md text-sm transition-all duration-200 ${activeTab === tab
                                    ? "bg-yellow-100 text-yellow-500 font-semibold"
                                    : "text-gray-500 hover:bg-gray-100"
                                }`}
                        >
                            {tab}
                        </div>
                    ))}
                </div>

                {/* FAQ Content */}
                <div className="flex-1">
                    {faqData[activeTab]?.length > 0 ? (
                        <div className="space-y-3">
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
