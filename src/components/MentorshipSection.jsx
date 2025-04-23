import React from "react";
import { Play } from "lucide-react";

const mentors = [
  {
    name: "Rhea Punjabi",
    title: "Interview Prep & Career Coach",
    experience: "10+ years",
    image: "https://media.gettyimages.com/id/1821631533/photo/seoul-south-korea-south-korean-actor-song-kang-is-seen-at-the-netflix-sweet-home-season-2.jpg?s=612x612&w=gi&k=20&c=dG68GJVH-ZcPL0jKixfSO30XGknWvUUIqVaW-7jxjEI=",
  },
  {
    name: "Sahaj Bana",
    title: "Career Coach & Recruitment Specialist",
    experience: "6+ years",
    image: "https://media.gettyimages.com/id/1821631533/photo/seoul-south-korea-south-korean-actor-song-kang-is-seen-at-the-netflix-sweet-home-season-2.jpg?s=612x612&w=gi&k=20&c=dG68GJVH-ZcPL0jKixfSO30XGknWvUUIqVaW-7jxjEI=",
  },
  {
    name: "Bhanu Potta",
    title: "Principal Advisor, Gray Matters Capital",
    experience: "10+ years",
    image: "https://media.gettyimages.com/id/1821631533/photo/seoul-south-korea-south-korean-actor-song-kang-is-seen-at-the-netflix-sweet-home-season-2.jpg?s=612x612&w=gi&k=20&c=dG68GJVH-ZcPL0jKixfSO30XGknWvUUIqVaW-7jxjEI=",
  },
  {
    name: "Rutveez Roopam Rout",
    title: "Chief of Staff & Investments, Jetapult",
    experience: "10+ years",
    image: "https://media.gettyimages.com/id/1821631533/photo/seoul-south-korea-south-korean-actor-song-kang-is-seen-at-the-netflix-sweet-home-season-2.jpg?s=612x612&w=gi&k=20&c=dG68GJVH-ZcPL0jKixfSO30XGknWvUUIqVaW-7jxjEI=",
  },
  {
    name: "Monica Jasuja",
    title: "Former Head of Digital and Emerging Partnerships, Mastercard",
    experience: "10+ years",
    image: "https://media.gettyimages.com/id/1821631533/photo/seoul-south-korea-south-korean-actor-song-kang-is-seen-at-the-netflix-sweet-home-season-2.jpg?s=612x612&w=gi&k=20&c=dG68GJVH-ZcPL0jKixfSO30XGknWvUUIqVaW-7jxjEI=",
  },
  {
    name: "Siddharth Jain",
    title: "Associate Director, Strategy & Operations, Rapido",
    experience: "10+ years",
    image: "https://media.gettyimages.com/id/1821631533/photo/seoul-south-korea-south-korean-actor-song-kang-is-seen-at-the-netflix-sweet-home-season-2.jpg?s=612x612&w=gi&k=20&c=dG68GJVH-ZcPL0jKixfSO30XGknWvUUIqVaW-7jxjEI=",
  },
];

const MentorshipSection = () => {
  return (
    <section className="px-8 py-16 bg-white">
      {/* Left - Text + Mentors */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-start">
          <div className="flex-1 mb-6">
            <p className="text-xs text-yellow-500 font-semibold uppercase mb-2 tracking-wide">
              ✦ Exclusive Mentorship
            </p>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 mb-2">
              Beyond MBA – Mentorship with Top Leadership Coaches
            </h2>
            <p className="text-gray-600 text-base">
              Tailored coaching from leading mentors who have guided{" "}
              <strong>global CEOs, CXOs</strong> and <strong>Founders</strong>.
            </p>
          </div>

          {/* Right - Image */}
          <div className="relative w-full max-w-md lg:max-w-lg rounded-xl overflow-hidden shadow-lg">
            <img
              src="/mentorship-preview.png"
              alt="Mentorship Video"
              className="w-full h-60 object-cover rounded-xl"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black/30 transition duration-300 hover:bg-black/50 cursor-pointer">
              <Play className="text-white w-12 h-12" />
            </div>
          </div>
        </div>

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {mentors.map((mentor, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300 border border-gray-100"
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-14 h-14 rounded-full object-cover border border-gray-200"
              />
              <div>
                <h4 className="font-semibold text-sm text-gray-900">
                  {mentor.name}
                </h4>
                <p className="text-xs text-gray-700 font-medium">
                  {mentor.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Coaching Experience: {mentor.experience}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-center text-gray-600 border border-yellow-300 p-3 rounded-md w-fit italic">
          *The final list of coaches may vary depending on their availability and programme requirements.
        </p>
      </div>
    </section>
  );
};

export default MentorshipSection;
