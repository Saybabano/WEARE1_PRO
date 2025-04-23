import React from "react";

const cards = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1558742619-fd82741daa99?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Student Projects",
    description: "Students work on real-world projects that build problem-solving and teamwork skills.",
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/1357434471/photo/pro-girl-plays-computer-game-plays-rpg-strategy-on-a-championship-diverse-esport-team-of-pro.webp?a=1&b=1&s=612x612&w=0&k=20&c=4yxkpNsOamr1CTJVO7kg2xyW1ivoHx0W5P2pT9hukUQ=",
    title: "Gaming & Esports Clubs",
    description: "Join student-led clubs for esports, gaming, or strategy-based learning and competition.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1577896851231-70ef18881754",
    title: "Campus Culture",
    description: "Experience inclusive learning, cultural fests, workshops, and vibrant student life.",
  },
];

const LifeAtWeare1 = () => {
  return (
    <section className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-sm text-gray-400 font-medium"> ✦ STUDENT JOURNEY</p>
            <h2 className="text-2xl font-bold mt-1">
              Life at <span className="text-white">Weare1 Academy</span>
            </h2>
            <div className="w-42 h-1 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full mt-2" />
          </div>
          <button className="border text-sm border-yellow-400 text-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-white transition">
            Glimpse of Student Life →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative rounded-xl overflow-hidden bg-gray-900 group transition transform hover:scale-105 duration-300"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-opacity-70 cursor-pointer backdrop-blur-sm flex flex-col justify-center items-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-300">{card.description}</p>
                <button className="mt-4 px-4 py-2 border border-yellow-400 text-yellow-400 text-sm rounded-full hover:bg-yellow-500 hover:text-black transition">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeAtWeare1;
