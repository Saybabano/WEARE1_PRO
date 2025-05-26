import React from "react";

const TeamDetails = [
  {
    name: "Vikas Goel",
    work: "Esports Strategist & Business Mentor",
    role: "15+ years in entertainment & tech, Vikas brings global strategic insight into tournament design and business growth in esports.",
    image: "https://files.mastersunion.link/resources/img/mahek-aug.webp",
  },
  {
    name: "Vaibhav Rathore",
    work: "Gaming Community Architect",
    role: "Deeply rooted in gamer psychology and brand building, Vaibhav helps students understand the pulse of esports audiences.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Bhavesh Vyas",
    work: "Digital Marketing Expert – Gaming Focus",
    role: "Bhavesh specializes in monetization strategies, influencer marketing, and content pipelines specific to esports.",
    image: "https://weare1.academy/images/teamMentor2.svg",
  },
  {
    name: "Saurabh Meena",
    work: "Esports Operations & Events Consultant",
    role: "With 50+ events under his belt, Saurabh guides learners through the intricacies of on-ground execution and logistics.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
];

function ProfessionalGuidens() {
  return (
    <div className="px-6 md:px-16 py-12 bg-white text-center">
      <h5 className="text-yellow-500 uppercase font-semibold text-sm tracking-wider mb-2">
        Professional Guidance
      </h5>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 relative inline-block">
        Meet Your Mentors & Trainers
        <span className="block h-1 w-24 mx-auto mt-2 bg-gradient-to-r from-yellow-400 to-pink-400 rounded"></span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {TeamDetails.map((person, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex justify-center pt-6">
              <img
                src={person.image}
                alt={person.name}
                className="w-28 h-28 rounded-full object-cover shadow-md border-4 border-yellow-400"
              />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-bold text-gray-800">{person.name}</h2>
              <p className="text-sm text-yellow-600 font-medium mt-1">{person.work}</p>
              <p className="text-xs text-gray-600 mt-2 leading-snug line-clamp-4">{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfessionalGuidens;
