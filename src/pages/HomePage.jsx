import React from 'react';
import ExploreAcademy from '../components/ExploreAcademy';
import FAQSection from '../components/FAQSection';
import PGPRiseSection from '../components/PGPRiseSectio';
import { Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <div>
        <PGPRiseSection />
  
        <Outlet />
        <FAQSection />
        <ExploreAcademy />
      </div>
    </>
  );
}

export default HomePage;
