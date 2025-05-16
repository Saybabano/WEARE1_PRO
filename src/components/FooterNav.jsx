import React from "react";
import { Link, useLocation } from "react-router-dom";

const FooterNav = () => {
  const location = useLocation(); // get current path

  const links = [
    { name: "Highlights", path: "/highlights" },
    { name: "Curriculum", path: "/curriculum" },
  ];

  return (
    <div className="bg-black border-t border-gray-800 py-6 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-around gap-4 text-sm font-bold text-gray-300">
        {links.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={index}
              to={item.path}
              className={`hover:text-yellow-400 transition duration-300 ease-in-out ${
                isActive
                  ? "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FooterNav;
