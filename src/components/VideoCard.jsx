import { FaPlay, FaCalendarAlt } from "react-icons/fa";
import React from "react";

const VideoCard = () => {
  return (
    <div className="relative w-[550px] h-[250px] mt-8 md:mt-0 rounded-xl overflow-hidden shadow-xl">
      {/* YouTube Video */}
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/8FEMi8z-uTg"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-xl"
      ></iframe>

      {/* Deadline Badge */}
      {/* <div className="absolute bottom-3 left-3 bg-gray-900 text-white text-sm flex items-center gap-2 px-4 py-1 rounded-md shadow">
        <FaCalendarAlt className="text-yellow-500" />
        Round 1 Deadline: 30th April <sup>’25</sup>
      </div> */}
    </div>
  );
};

export default VideoCard;
