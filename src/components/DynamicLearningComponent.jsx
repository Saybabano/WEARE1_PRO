import React from 'react';
import UndergraduateColleges from './UndergraduateColleges';

const DynamicLearningComponent = () => {
  return (
    <div className="bg-white text-gray-900 w-full px-4 py-8 md:px-16 space-y-12">
      {/* Cohort Diversity Section */}
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Experience a <span className="text-blue-600">Dynamic Learning</span> Environment
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm md:text-base">
            {[
              { title: 'Chartered Accountancy', value: '5.5%' },
              { title: 'Product Management', value: '6.5%' },
              { title: 'Marketing/Branding', value: '11%' },
              { title: 'Software Development', value: '5%' },
              { title: 'Consulting & Analytics', value: '16.5%' },
              { title: 'Business Development', value: '10%' },
              { title: 'Finance', value: '7.5%' },
              { title: 'Freshers', value: '8%' },
              { title: 'Others', value: '30%' },
            ].map((item, i) => (
              <div key={i} className="space-y-1">
                <p className="font-semibold text-yellow-500">{item.value}</p>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img
            src="https://files.mastersunion.link/resources/img/studentJourney.webp"
            alt="Audience"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>

      <UndergraduateColleges/>

      {/* United In Education */}
      <div className="bg-gray-900 text-white rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-10">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">United In <span className="text-yellow-400">Education</span></h2>
          <p className="text-gray-400 text-sm md:text-base">
            We proudly showcase the diverse states represented by our students. From coast to coast, our campus is a melting pot of vibrant cultures and perspectives,
            fostering an enriching learning environment for all.
          </p>
          <div className="flex flex-wrap gap-6 mt-4 text-center text-yellow-400">
            <div>
              <p className="text-2xl font-bold">60+</p>
              <p className="text-xs">Cities</p>
            </div>
            <div>
              <p className="text-2xl font-bold">20+</p>
              <p className="text-xs">States</p>
            </div>
            <div>
              <p className="text-2xl font-bold">31%</p>
              <p className="text-xs">Female Students</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src="https://files.mastersunion.link/resources/img/PGPMapNew1.webp"
            alt="India Map"
            className="w-full max-w-sm rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default DynamicLearningComponent;
