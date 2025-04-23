import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categoryData = {
  practitioner: {
    title: "Master Practitioner",
    description: "Lead structured courses with support.",
    image: "https://img.freepik.com/free-photo/medium-shot-smiley-people-playing-videogame_23-2149350011.jpg?semt=ais_hybrid&w=740",
    sections: [
      {
        title: "Teach a course",
        description: "Deliver lectures, lead seminars, and conduct workshops curated from real-life industry experiences.",
      },
      {
        title: "How we'll help",
        description: "We offer a research assistant to help you craft course material and deliver it.",
      },
      {
        title: "Time commitment",
        description: "This will be a visiting faculty engagement, with flexible hours.",
      },
    ],
  },
  mentor: {
    title: "Master Mentor",
    description: "One-on-one mentoring sessions.",
    image: "https://media.istockphoto.com/id/1411414490/photo/diverse-blue-pro-gamer-team-with-female-players-competing-at-video-game-esport-championship.jpg?s=612x612&w=0&k=20&c=2WyE9Np3FAAd76dL9DuqF1TrzS39gKPtgGXs9_PI4YA=",
    sections: [
      {
        title: "Mentor individuals",
        description: "Guide students one-on-one and help them grow their skills with your expert insights.",
      },
      {
        title: "Resources provided",
        description: "We provide session guides and scheduling tools to ease the mentoring process.",
      },
      {
        title: "Flexible engagement",
        description: "Mentor at your convenience — sessions can be weekly or bi-weekly.",
      },
    ],
  },
  guest: {
    title: "Master Guest",
    description: "Inspire with short, impactful sessions.",
    image: "https://img.freepik.com/free-photo/side-view-friends-winning-videogame_23-2149349984.jpg?semt=ais_hybrid&w=740",
    sections: [
      {
        title: "Guest Speaking",
        description: "Join in for single-session talks to share your experience and inspire students.",
      },
      {
        title: "Event support",
        description: "Our team will coordinate everything, you just need to show up and share.",
      },
      {
        title: "Minimal time commitment",
        description: "Perfect for professionals with limited time but big impact.",
      },
    ],
  },
};

const ExportCategories = () => {
  const [activeTab, setActiveTab] = useState("practitioner");

  const activeContent = categoryData[activeTab];

  return (
    <section className="py-10 px-4 md:px-20 bg-white">
      <h4 className="text-sm text-gray-400 font-semibold uppercase">
        Types of Engagement
      </h4>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Understanding Our Masters Categories
      </h2>

      {/* Tab Buttons with Image & Title */}
      <div className="flex justify-center mb-10">
        <div className="bg-gray-100 rounded-xl p-3 flex flex-wrap gap-4 justify-center shadow-inner">
          {Object.entries(categoryData).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 w-64 text-left ${
                activeTab === key
                  ? "bg-black text-white shadow-lg"
                  : "bg-white text-gray-800 hover:bg-gray-200"
              }`}
            >
              <img
                src={data.image}
                alt={data.title}
                className="w-12 h-12 object-cover rounded-full"
              />
              <div>
                <h3 className="text-md font-semibold">{data.title}</h3>
                <p className="text-xs text-gray-500">{data.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + "-content"}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {activeContent.sections.map((item, index) => (
              <div key={index}>
                <h3 className="font-semibold text-xl text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.img
            key={activeTab + "-image"}
            src={activeContent.image}
            alt={`${activeContent.title} Visual`}
            className="rounded-xl shadow-lg w-full max-w-md mx-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ExportCategories;
