import HeaderSection from "./HeaderSection";
import ActionButtons from "./ActionButtons";
import VideoCard from "./VideoCard";
import React from "react";
import FooterNav from "./FooterNav";

const PGPRiseSection = () => {
  return (
    <div className="flex flex-col flex-grow">
      <section className="flex-grow bg-black text-white flex flex-col md:flex-row justify-around items-center px-10 py-20">
        <div>
          <HeaderSection />
          <ActionButtons />
        </div>
        <VideoCard />
      </section>
      <div className="sticky mt-0 bg-black text-white shadow-md">
        <FooterNav />
      </div>
    </div>
  );
};

export default PGPRiseSection;