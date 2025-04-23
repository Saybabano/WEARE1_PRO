import React, { useState } from "react";

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-white shadow-sm border border-gray-200 rounded-lg p-3 sm:p-4 cursor-pointer transition duration-200 hover:shadow-md"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-sm sm:text-base font-semibold text-gray-700">{question}</h3>
        <span className="text-yellow-500 text-xl">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && (
        <p className="mt-2 text-gray-600 text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
}
