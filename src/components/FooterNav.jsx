// import React from "react";
// import { Link } from "react-router-dom";

// const FooterNav = () => {
//   const links = [
//     { name: "HighlightsPage", path: "/highlights-page" },
//     { name: "Curriculum", path: "/curriculum-page" },
//     { name: "Immersions", path: "/immersions" },
//     { name: "Faculty", path: "/faculty" },
//     { name: "Admissions & Fees", path: "/admissions-fees" },
//     { name: "Career Prospects", path: "/career-prospects" },
//     { name: "Cohort Profile", path: "/cohort-profile" },
//   ];

//   return (
//     <div className="bg-black border-t border-gray-800 py-6 px-4">
//       <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center md:justify-between gap-4 text-sm text-gray-300">
//         {links.map((item, index) => (
//           <Link
//             key={index}
//             to={item.path}
//             className={`hover:text-yellow-400 transition duration-300 ease-in-out ${
//               item.name === "Career Prospects"
//                 ? "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500"
//                 : ""
//             }`}
//           >
//             {item.name}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FooterNav;


import React from "react";
import { Link } from "react-router-dom";

const FooterNav = () => {
  const links = [
    { name: "Highlights", path: "/highlights" },
    { name: "Curriculum", path: "/curriculum" },
    { name: "Immersions", path: "/immersions" },
    { name: "Faculty", path: "/faculty" },
    { name: "Admissions & Fees", path: "/admissions-fees" },
    { name: "Career Prospects", path: "/career-prospects" },
    { name: "Cohort Profile", path: "/cohort-profile" },
  ];

  return (
    <div className="bg-black border-t border-gray-800 py-6 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center md:justify-between gap-4 text-sm text-gray-300">
        {links.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`hover:text-yellow-400 transition duration-300 ease-in-out ${
              item.name === "Highlights"
                ? "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500"
                : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterNav;
