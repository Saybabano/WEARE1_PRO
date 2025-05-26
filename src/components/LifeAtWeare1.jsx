import React from 'react';
import { motion } from 'framer-motion';

const LifeAtWeare1 = () => {
  const cards = [
    {
      title: 'Hands-on Practical Events',
      description: 'Plan and manage real-time esports tournaments and showcase your skills.',
      image: 'https://i.dailymail.co.uk/1s/2022/01/07/13/52655929-10378821-image-a-1_1641560503733.jpg',
    },
    {
      title: 'Live Online Classrooms',
      description: 'Attend classes led by top esports professionals from anywhere in the world.',
      image: 'https://media.istockphoto.com/id/1129493258/photo/esports-team-winning-the-match.jpg?s=612x612&w=0&k=20&c=iLdOsaZOuQBc_5bSHVkOwd8dTh0HW5w5MeGZdQdadCM=',
    },
    {
      title: 'Doubt-Solving & Mentorship Sessions',
      description: 'Get your questions answered in dedicated one-on-one sessions.',
      image: 'https://eu-central-1-gamescom.graphassets.com/AMwDHZTUSMaIlRlMFLL7Qz/resize=fit:clip,width:1200/PssD8VBzTXq72TP0ISkN',
    },
    {
      title: 'Real-Time Classes',
      description: 'Stay up-to-date with industry trends through interactive learning formats.',
      image: 'https://www.lifeupnorth.co.uk/wp-content/uploads/gaming.jpg',
    },
    {
      title: 'Capstone Projects with Industry Partners',
      description: 'Work on real business problems with top-tier esports brands.',
      image: 'https://www.lifeupnorth.co.uk/wp-content/uploads/gaming.jpg',
    },
    {
      title: 'Certification',
      description: 'Boost your profile with an industry-recognized certificate.',
      image: 'https://media.istockphoto.com/id/1411414490/photo/diverse-blue-pro-gamer-team-with-female-players-competing-at-video-game-esport-championship.jpg?s=612x612&w=0&k=20&c=2WyE9Np3FAAd76dL9DuqF1TrzS39gKPtgGXs9_PI4YA=',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-16 font-sans">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-3xl md:text-4xl font-bold leading-tight mb-12 "
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose This Program?
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-5 rounded-2xl shadow-lg hover:shadow-yellow-500/20 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="rounded-xl mb-4 w-full h-56 object-cover"
              />
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">{card.title}</h2>
              <p className="text-sm text-gray-300">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifeAtWeare1;
