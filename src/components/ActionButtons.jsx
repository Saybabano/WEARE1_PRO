import { FaArrowRight } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const ActionButtons = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-4 sm:mt-6 md:mt-8 ml-6">
      <Link to="/create-account">
        <button
          className="text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 font-semibold transition duration-300 hover:opacity-90"
          style={{
            background:
              "linear-gradient(92deg, #39b6d8 7.6%, #f7d344 53.43%, #e38330 99.26%)",
          }}
        >
          Apply Now <FaArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default ActionButtons;
