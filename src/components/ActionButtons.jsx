import { FaArrowRight } from "react-icons/fa";
import React from "react";

const ActionButtons = () => {
  return (
    <div className="flex gap-4 mt-8">
      <button className="border border-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 rounded-full flex items-center gap-2 font-semibold transition duration-300">
        Apply Now <FaArrowRight />
      </button>
      <button className="text-white underline flex items-center gap-2">
        Download Career Report <FaArrowRight className="text-sm" />
      </button>
    </div>
  );
};

export default ActionButtons;