import React, { useState } from "react";

const upcomingEvents = [
  {
    title: "Admissions Webinar: How Students Learn Outside the Classroom at MU",
    date: "23rd April | Wednesday",
    time: "02:00 PM",
    location: "Online",
    program: "PGP TBM",
    image: "https://thumbs.dreamstime.com/b/gamers-esports-event-johannesburg-south-africa-th-october-their-computers-online-gaming-184165665.jpg",
    platform: "ON ZOOM",
    badge: null,
  },
  {
    title: "Masters' Union Mixer - Dehradun Edition",
    date: "27th April | Sunday",
    time: "05:00 PM",
    location: "Dehradun",
    program: "UG",
    image: "https://thumbs.dreamstime.com/b/gamers-esports-event-johannesburg-south-africa-th-october-their-computers-online-gaming-184165665.jpg",
    badge: "Dehradun",
  },
  {
    title: "UG Information Session and Campus Tour",
    date: "3rd May | Saturday",
    time: "11:00 AM",
    location: "On Campus",
    program: "UG",
    image: "https://thumbs.dreamstime.com/b/gamers-esports-event-johannesburg-south-africa-th-october-their-computers-online-gaming-184165665.jpg",
    badge: null,
  },
  {
    title: "Summer Startup Week",
    date: "29th June | Sunday",
    time: "09:00 AM",
    location: "On Campus",
    program: "PGP Base",
    image: "https://thumbs.dreamstime.com/b/gamers-esports-event-johannesburg-south-africa-th-october-their-computers-online-gaming-184165665.jpg",
    badge: null,
  },
  {
    title: "Attend a Webinar",
    date: "",
    time: "",
    location: "Online",
    program: "PGP TBM",
    image: "https://thumbs.dreamstime.com/b/gamers-esports-event-johannesburg-south-africa-th-october-their-computers-online-gaming-184165665.jpg",
    platform: "ON ZOOM",
    badge: null,
  },
  {
    title: "Connect with the admissions office",
    date: "",
    time: "",
    location: "Online",
    program: "UG",
    image: "https://thumbs.dreamstime.com/b/gamers-esports-event-johannesburg-south-africa-th-october-their-computers-online-gaming-184165665.jpg",
    badge: null,
  },
  {
    title: "Connect with the students of Masters' Union",
    date: "",
    time: "",
    location: "Online",
    program: "PGP Base",
    image: "https://thumbs.dreamstime.com/b/gamers-esports-event-johannesburg-south-africa-th-october-their-computers-online-gaming-184165665.jpg",
    badge: null,
  },
  {
    title: "Visit our campus",
    date: "",
    time: "",
    location: "On Campus",
    program: "UG",
    image: "https://thumbs.dreamstime.com/b/gamers-esports-event-johannesburg-south-africa-th-october-their-computers-online-gaming-184165665.jpg",
    badge: null,
  },
];

const pastEvents = [
  {
    title: "Tech Innovators Conference 2024",
    date: "12th March | Tuesday",
    time: "10:00 AM",
    location: "Online",
    program: "PGP TBM",
    image: "https://thumbs.dreamstime.com/b/gamers-esports-event-johannesburg-south-africa-th-october-their-computers-online-gaming-184165665.jpg",
    platform: "ON ZOOM",
    badge: "Past",
  },
  {
    title: "Hackathon 2023 Grand Finale",
    date: "15th Feb | Thursday",
    time: "01:00 PM",
    location: "On Campus",
    program: "UG",
    image: "https://thumbs.dreamstime.com/b/gamers-esports-event-johannesburg-south-africa-th-october-their-computers-online-gaming-184165665.jpg",
    badge: "Past",
  },
];

const UpcomingEvents = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedProgram, setSelectedProgram] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const allEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  const filteredEvents = allEvents.filter((event) => {
    const programMatch = selectedProgram === "All" || event.program === selectedProgram;
    const locationMatch =
      selectedLocation === "All" ||
      event.location === selectedLocation ||
      (selectedLocation === "Online" && event.location === "Online") ||
      (selectedLocation === "On Campus" && event.location === "On Campus");

    return programMatch && locationMatch;
  });

  return (
    <div className="bg-black min-h-screen px-6 py-10 text-white font-sans">
      {/* Tabs */}
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-6 text-sm">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`pb-1 border-b-2 transition-colors ${
              activeTab === "upcoming"
                ? "border-yellow-400 text-yellow-400 font-semibold"
                : "border-transparent text-gray-400"
            }`}
          >
            UPCOMING EVENTS
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`pb-1 border-b-2 transition-colors ${
              activeTab === "past"
                ? "border-yellow-400 text-yellow-400 font-semibold"
                : "border-transparent text-gray-400"
            }`}
          >
            PAST EVENTS
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="text-2xl font-bold mb-6">
        {activeTab === "upcoming" ? "Upcoming Events" : "Past Events"}
        <div className="w-20 border-b-4 border-yellow-400 mt-1"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters */}
        <div className="w-full lg:w-1/5 space-y-6">
          {/* Program */}
          <div className="bg-[#111] p-4 rounded-xl">
            <h3 className="text-sm font-semibold mb-4">PROGRAMS</h3>
            <ul className="space-y-2 text-sm">
              {["All", "PGP TBM", "UG", "PGP Base"].map((program) => (
                <li key={program}>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="program"
                      checked={selectedProgram === program}
                      onChange={() => setSelectedProgram(program)}
                      className="accent-yellow-400 text-blue-500 mr-2 w-4 h-4"
                    />
                    {program}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="bg-[#111] p-4 rounded-xl">
            <h3 className="text-sm font-semibold mb-4">EVENT LOCATION</h3>
            <ul className="space-y-2 text-sm">
              {["All", "Online", "On Campus"].map((loc) => (
                <li key={loc}>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="location"
                      checked={selectedLocation === loc}
                      onChange={() => setSelectedLocation(loc)}
                      className="accent-yellow-400 text-blue-500 mr-2 w-4 h-4"
                    />
                    {loc}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Events */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
          {filteredEvents.map((event, idx) => (
            <div
              key={idx}
              className="bg-[#111] rounded-xl overflow-hidden hover:scale-105 transition-transform shadow-md hover:shadow-yellow-500/30"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt="event"
                  className="w-full h-40 object-cover"
                />
                {event.badge && (
                  <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded">
                    {event.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-sm mb-2 leading-snug">
                  {event.title}
                </h4>
                {event.date && (
                  <div className="text-xs text-gray-400 flex justify-between">
                    <span>{event.date}</span>
                    <span>{event.time}</span>
                  </div>
                )}
                {event.location && (
                  <div className="text-xs mt-2 text-yellow-400 flex items-center gap-2">
                    <span>{event.location.toUpperCase()}</span>
                    {event.platform && (
                      <span className="text-gray-400">| {event.platform}</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
