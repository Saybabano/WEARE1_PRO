import { FaArrowRight } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const ActionButtons = () => {
  return (
    <div className="flex gap-4 mt-8">
      <Link to="/create-account">
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold transition duration-300 hover:bg-yellow-400">
            Apply Now <FaArrowRight />
          </button>
        </Link>
    </div>
  );
};

export default ActionButtons;