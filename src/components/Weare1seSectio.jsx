import React from "react";
import HeaderSection from "./HeaderSection";
import ActionButtons from "./ActionButtons";
import FooterNav from "./FooterNav";
// import Videos from "../videos/V4.mp4";

const Weare1seSection = () => {
  return (
    <div className="flex flex-col flex-grow min-h-screen">
      <section className="relative flex-grow text-white px-4 sm:px-6 md:px-10 py-10 h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
          src={'../videos/V4.mp4'}
          autoPlay
          muted
          loop
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start text-left justify-end h-full pb-24 sm:pb-40 md:pb-60">
          <HeaderSection />
          <ActionButtons />
        </div>
      </section>

      {/* Footer */}
      <div className="sticky mt-0 bg-black text-white shadow-md ">
        <FooterNav />
      </div>
    </div>
  );
};

export default Weare1seSection;
