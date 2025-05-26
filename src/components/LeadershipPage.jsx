import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaChalkboardTeacher,
  FaUsers,
  FaAward,
  FaGamepad,
  FaUserShield,
  FaChartLine,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const iconColors = {
  FaGamepad: "#4ade80", // green for gaming
  FaChalkboardTeacher: "#60a5fa", // blue for teaching
  FaUserShield: "#f87171", // red for protection/mentorship
  FaUsers: "#fbbf24", // amber for users/people
  FaChartLine: "#34d399", // teal for growth/chart
  FaAward: "#facc15", // yellow for awards/certification
};

const sectionData = [
  {
    heading: "Real-World Learning Experiences",
    desc: "Engage with the ecosystem through:",
    points: [
      "Guest Sessions by esports industry leaders",
      "Tournament Management Simulations",
      "Virtual Internships with game publishers and tournament hosts",
      "Game Analytics and Monetization Workshops",
    ],
  },
  {
    heading: "What You’ll Learn",
    points: [
      "Esports Industry Fundamentals",
      "Tournament Design & League Management",
      "Sponsorships & Brand Partnerships",
      "Marketing and Community Engagement",
      "Business Operations in Esports",
      "Tools: OBS Studio, Discord, Twitch Analytics, and more",
    ],
  },
];

export default function LeadershipPage() {
  const iconMap = {
    FaGamepad: FaGamepad,
    FaChalkboardTeacher: FaChalkboardTeacher,
    FaUserShield: FaUserShield,
    FaUsers: FaUsers,
    FaChartLine: FaChartLine,
    FaAward: FaAward,
  };

  return (
    <div className="min-h-screen bg-white px-6 md:px-16 py-16 font-sans">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="md:w-1/4 sticky top-24 self-start">
          <motion.div
            className="bg-gray-900 p-8 rounded-3xl border border-yellow-400/40 shadow-yellow-500/30 shadow-lg"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm uppercase text-yellow-400 mb-6 font-semibold tracking-wide">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm text-gray-300 font-medium">
              <motion.li
                className="cursor-pointer hover:text-yellow-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="/brochure.pdf" download className="block">
                  Download Brochure
                </a>
              </motion.li>

              <motion.li
                className="cursor-pointer hover:text-yellow-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/curriculum" className="block">
                  Explore Curriculum
                </Link>
              </motion.li>

              <motion.li
                className="cursor-pointer hover:text-yellow-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="mailto:contact@example.com" className="block">
                  Talk to an Expert
                </a>
              </motion.li>
            </ul>


            <hr className="my-8 border-gray-800" />

            <h3 className="text-sm uppercase text-yellow-400 mb-6 font-semibold tracking-wide">
              Follow Us
            </h3>
            <div className="flex gap-5 text-2xl text-gray-400">
              {[
                {
                  icon: <FaTwitter />,
                  href: "https://twitter.com",
                },
                {
                  icon: <FaLinkedin />,
                  href: "https://linkedin.com",
                },
                {
                  icon: <FaInstagram />,
                  href: "https://instagram.com",
                },
                {
                  icon: <FaYoutube />,
                  href: "https://youtube.com",
                },
              ].map(({ icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </aside>

        {/* Main Content */}
        <main className="md:w-3/4 space-y-32 drop-shadow-lg">
          {sectionData.map((section, idx) => {
            const IconComponent = iconMap[section.iconName];
            return (
              <motion.section
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.3 }}
                className="max-w-4xl"
              >
                <motion.h2
                  className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 tracking-tight flex items-center gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.2 }}
                >
                  {IconComponent && (
                    <IconComponent
                      size={38}
                      color={iconColors[section.iconName]}
                      aria-hidden="true"
                      className="drop-shadow-md"
                    />
                  )}
                  {section.heading}
                </motion.h2>

                {section.desc && (
                  <motion.p
                    className="text-gray-700 text-lg mb-12 max-w-3xl leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + idx * 0.2 }}
                  >
                    {section.desc}
                  </motion.p>
                )}

                <ul className="rounded-b-xl">
                  {section.points.map((text, index) => (
                    <motion.li
                      key={index}
                      className={`flex gap-4 items-start py-4 text-gray-700 border-b border-gray-300 last:border-0 cursor-default hover:text-yellow-500 transition-colors duration-300`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.1 + idx * 0.3 }}
                    >
                      <span className="text-yellow-400 text-2xl leading-none select-none">
                        ✦
                      </span>
                      <span className="text-lg leading-relaxed">{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.section>
            );
          })}
        </main>
      </div>
    </div>
  );
}
