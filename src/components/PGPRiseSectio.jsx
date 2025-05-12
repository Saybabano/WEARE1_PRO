import React from "react";
import HeaderSection from "./HeaderSection";
import ActionButtons from "./ActionButtons";
import FooterNav from "./FooterNav";

const PGPRiseSection = () => {
  return (
    <div className="flex flex-col flex-grow min-h-screen">
      <section className="relative flex-grow text-white px-10 py-10 h-screen overflow-hidden">

        {/* Background YouTube Video */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/WmMPzm5l-oU?autoplay=1&mute=1&loop=1&controls=0&playlist=WmMPzm5l-oU&modestbranding=1&showinfo=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        {/* Content aligned bottom-left */}
        <div className="relative z-10 flex flex-col items-start text-left justify-end h-full">
          <HeaderSection />
          <ActionButtons />
        </div>
      </section>

      <div className="sticky mt-0 bg-black text-white shadow-md">
        <FooterNav />
      </div>
    </div>
  );
};

export default PGPRiseSection;
