import { FaChartLine } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const FooterNav = () => {
  const links = [
    { name: "HighlightsPage", path: "/highlightspage" },
    { name: "Curriculum", path: "/curriculum" },
    { name: "Immersions", path: "/immersions" },
    { name: "Faculty", path: "/faculty" },
    { name: "Admissions & Fees", path: "/admissions-fees" },
    { name: "Career Prospects", path: "/career-prospects" },
    { name: "Cohort Profile", path: "/cohort-profile" },
  ];

  return (
    <div className="bg-black border-t border-gray-800 py-4">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm text-gray-300">
        {links.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 hover:text-yellow-400 transition ${
              item.name === "Career Prospects" ? "font-semibold text-gradient" : ""
            }`}
          >
            {item.name === "Career Prospects" && (
              <FaChartLine className="text-yellow-400" />
            )}
            <Link to={item.path}> {/* Wrap the item name in a Link */}
              <span>{item.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterNav;
