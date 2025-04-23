import React from "react";

const TeamDetails = [
  {
    name: "Sayba Bano",
    work: "Director, PGP TBM",
    role: "Ex. Founder, Udayy | Forbes 30 U 30",
    image: "https://files.mastersunion.link/resources/img/mahek-aug.webp",
  },
  {
    name: "Ankit Sharma",
    work: "Senior Product Manager",
    role: "Ex. Google, IIM-A Alumni",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Nisha Rao",
    work: "Career Coach",
    role: "Ex. Amazon, ISB Graduate",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Rohan Mehra",
    work: "Tech Lead",
    role: "Ex. Microsoft, Coding Mentor",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Ayesha Kapoor",
    work: "Marketing Head",
    role: "Ex. Unilever, Brand Strategist",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Tushar Verma",
    work: "Entrepreneur-in-Residence",
    role: "Startup Coach | Ex. Flipkart",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Ritika Malhotra",
    work: "Data Science Lead",
    role: "Ex. IBM, Kaggle Master",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    name: "Aditya Jain",
    work: "Investment Advisor",
    role: "Ex. Morgan Stanley, CFA",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
  },
  {
    name: "Meera Nair",
    work: "Operations Manager",
    role: "Ex. Swiggy, Strategy Expert",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Harsh Patel",
    work: "Founder, EduSpark",
    role: "Startup Mentor | YCombinator Alum",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
  },
];

function ProfessionalGuidens() {
  return (
    <div className="px-6 md:px-16 py-12 bg-white text-center">
      <h5 className="text-yellow-500 uppercase font-semibold text-sm tracking-wider">
        Professional Guidance
      </h5>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Our Career Advisory Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {TeamDetails.map((person, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{person.name}</h2>
              <p className="text-sm text-gray-600">{person.work}</p>
              <p className="text-xs text-gray-500 mt-1">{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfessionalGuidens;
