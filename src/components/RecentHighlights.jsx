import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const highlights = [
  {
    title: "The Dropshipping Challenge",
    cohort: "Cohort III",
    date: "8th December, 2024",
    video: "8FEMi8z-uTg", // YouTube video ID
  },
  {
    title: "Venture Initiation Programme Demo Day",
    cohort: "Cohort II",
    date: "17th November, 2024",
    video: "8FEMi8z-uTg", // YouTube video ID
  },
  {
    title: "Another Great Event",
    cohort: "Cohort I",
    date: "1st October, 2024",
    video: "8FEMi8z-uTg", // YouTube video ID
  },
  {
    title: "Startup Showcase",
    cohort: "Cohort IV",
    date: "20th January, 2025",
    video: "8FEMi8z-uTg", // YouTube video ID
  },
  {
    title: "Tech Innovation Summit",
    cohort: "Cohort V",
    date: "10th February, 2025",
    video: "8FEMi8z-uTg", // YouTube video ID
  },
];

const RecentHighlights = () => {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    const container = sliderRef.current;
    const cardWidth = container?.querySelector(".highlight-card")?.offsetWidth || 300;

    if (direction === "left") {
      container.scrollBy({ left: -cardWidth - 16, behavior: "smooth" });
    } else {
      container.scrollBy({ left: cardWidth + 16, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white px-6 sm:px-8 py-10 relative overflow-hidden">
      <h2 className="text-white font-semibold text-3xl sm:text-xl mb-10">RECENT HIGHLIGHTS</h2>

      <div className="relative">
        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex space-x-4 sm:space-x-6 overflow-x-hidden scroll-smooth"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="highlight-card min-w-[260px] sm:min-w-[340px] md:min-w-[400px] bg-white text-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row"
            >
              {/* Left - Video */}
              <div className="relative sm:w-3/3 w-full">
                <iframe
                  className="w-full h-36 sm:h-40 md:h-48 xl:h-56" // Reduced height and adjusted for better appearance
                  src={`https://www.youtube.com/embed/${item.video}`}
                  title="YouTube video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Right - Description */}
              <div className="p-4 sm:w-2/3 sm:pl-6">
                <h3 className="font-semibold text-base sm:text-sm">{item.title}</h3>
                <span className="inline-block text-xs sm:text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full mt-2">
                  {item.cohort}
                </span>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Prev/Next Buttons */}
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex space-x-2 z-10">
          <button
            onClick={() => handleScroll("left")}
            className="bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 transition"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentHighlights;
