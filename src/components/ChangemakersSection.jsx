import React, { useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

const tabs = ['Board Of Governors', 'Executive Leaders', 'Masters In Residence'];

const members = {
  'Board Of Governors': [
    {
      name: 'Manoj Kohli',
      role: 'Chairman',
      desc: 'Former CEO & MD, Bharti Airtel',
      img: '/manoj-kohli.png',
    },
    {
      name: 'Pankaj Bansal',
      role: 'Board Member',
      desc: 'Co-Founder & Group CEO, PeopleStrong',
      img: '/pankaj-bansal.png',
    },
    {
      name: 'P Dwarkanath',
      role: 'Board Member',
      desc: 'Director, GSK Consumer Healthcare Ltd.',
      img: '/dwarkanath.png',
    },
    {
      name: 'Srirang TK',
      role: 'Board Member',
      desc: 'Group Chief HR Officer, ICICI Bank',
      img: '/srirang-tk.png',
    },
    {
      name: 'Mr. Vivek Gambhir',
      role: 'Board Member',
      desc: 'Ex. CEO, boAt & Godrej Consumer Partner, Lightspeed India',
      img: '/vivek-gambhir.png',
    },
  ],
  'Executive Leaders': [
    {
      name: 'Anita Sharma',
      role: 'CEO',
      desc: 'Former COO, TechCorp',
      img: '/anita-sharma.png',
    },
    {
      name: 'Ravi Mehra',
      role: 'CTO',
      desc: 'Tech Leader, SoftSolutions',
      img: '/ravi-mehra.png',
    },
  ],
  'Masters In Residence': [
    {
      name: 'Dr. Kavita Rao',
      role: 'Visiting Faculty',
      desc: 'Professor at Global Business School',
      img: '/kavita-rao.png',
    },
    {
      name: 'John Smith',
      role: 'Entrepreneur in Residence',
      desc: 'Founder, InnovateX',
      img: '/john-smith.png',
    },
  ],
};

export default function ChangemakersSection() {
  const [activeTab, setActiveTab] = useState('Board Of Governors');

  return (
    <div className="p-6 md:p-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="max-w-md">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Building a Disruptive B-School</p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Creating a Community of Changemakers</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <img src="/chairperson.png" alt="Chairperson" className="w-48 h-64 object-cover rounded-xl" />
          <div className="bg-gray-100 rounded-xl p-4 max-w-md shadow-sm">
            <h3 className="font-semibold text-lg">Hear From Our Chairperson</h3>
            <p className="text-sm font-semibold text-gray-700">Mr. Manoj Kohli</p>
            <p className="text-sm text-gray-600 mt-2">
              I am inspired by the collective passion and drive of our students, faculty, and staff. We are a community of changemakers, pioneers, and lifelong learners who are committed to making a positive impact...
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex mt-10 bg-black rounded-full overflow-hidden text-white">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 font-medium transition-all duration-300 ${
              activeTab === tab ? 'text-green-400 underline' : 'text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
        {members[activeTab]?.map((person, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4 text-center">
            <img
              src={person.img}
              alt={person.name}
              className="w-24 h-24 mx-auto object-cover rounded-full mb-4"
            />
            <h4 className="font-semibold text-lg">{person.name}</h4>
            <p className="text-sm text-gray-600">{person.role}</p>
            <p className="text-xs text-gray-500 mt-1">{person.desc}</p>
            <div className="flex justify-center mt-3">
              <FaLinkedinIn className="text-black hover:text-blue-600 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
