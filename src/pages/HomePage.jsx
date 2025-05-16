import React from 'react';
import ExploreAcademy from '../components/ExploreAcademy';
import FAQSection from '../components/FAQSection';
import { Outlet } from 'react-router-dom';
import Weare1seSection from '../components/Weare1seSectio';

function HomePage() {
  return (
    <>
      <div>
        <Weare1seSection/>
  
        <Outlet />
        <FAQSection />
        <ExploreAcademy />
      </div>
    </>
  );
}

export default HomePage;
