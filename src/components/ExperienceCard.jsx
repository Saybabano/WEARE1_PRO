import React from 'react';

const experiences = [
  { id: 1, img: 'https://images.mastersunion.link/uploads/25032025/v1/R1.webp' },
  { id: 2, img: 'https://images.mastersunion.link/uploads/25032025/v1/R32.webp' },
  { id: 3, img: 'https://images.mastersunion.link/uploads/25032025/v1/R59.webp' },
  { id: 4, img: 'https://images.mastersunion.link/uploads/25032025/v1/R61.webp' },
  { id: 5, img: 'https://images.mastersunion.link/uploads/25032025/v1/R37.webp' },
  { id: 6, img: 'https://images.mastersunion.link/uploads/25032025/v1/R63.webp' },
  { id: 7, img: 'https://images.mastersunion.link/uploads/25032025/v1/R63.webp' },
  { id: 8, img: 'https://images.mastersunion.link/uploads/25032025/v1/R63.webp' },
  { id: 9, img: 'https://images.mastersunion.link/uploads/25032025/v1/R63.webp' },
  { id: 10, img: 'https://images.mastersunion.link/uploads/25032025/v1/R63.webp' },
  { id: 11, img: 'https://images.mastersunion.link/uploads/25032025/v1/R63.webp' },
  { id: 12, img: 'https://images.mastersunion.link/uploads/25032025/v1/R63.webp' },
];

const ExperienceCard = ({ img }) => (
  <div className="bg-white rounded-xl shadow-lg p-2 overflow-hidden">
    <img
      src={img}
      alt="Experience"
      className="w-full max-h-96 object-contain mx-auto"
    />
  </div>
);

export default function ExperienceGallery() {
  return (
    <div className="bg-black text-white py-12">
      {/* Header section */}
      <div className="relative mb-12">
        <img
          src="https://images.mastersunion.link/uploads/21032025/v1/reviewsPage.webp"
          alt="Header"
          className="w-full h-[300px] object-cover brightness-50"
        />
        <h2 className="absolute inset-0 flex justify-center items-center text-3xl md:text-5xl font-bold text-white">
          Experiences <span className="text-blue-400 ml-2">@The export</span>
        </h2>
      </div>

      {/* Grid of experience cards */}
      <div className="max-w-7xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} img={exp.img} />
        ))}
      </div>
    </div>
  );
}
