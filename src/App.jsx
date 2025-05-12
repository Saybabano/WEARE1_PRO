import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BecomeExportPage from "./pages/BecomeExportPage";
import BlogsPage from "./pages/BlogsPage";
import CompanyPage from "./pages/CompanyPage";
import EventsPage from "./pages/EventsPage";
import JobsPage from "./pages/JobsPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import HighlightsPage from "./pages/HighlightsPage";
import Curriculum from "./pages/Curriculum";
import Immersions from "./pages/Immersions";
import Facult from "./pages/Facult";
import Admissions from "./pages/Admissions";
import Career from "./pages/Career";
import CohortProfile from "./pages/CohortProfile";
import ExperiencePage from "./pages/ExperiencePage";
import OurStory from "./pages/OurStory";
import CreateAccountPage from "./pages/CreateAccountPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Nested routing for HomePage */}
        <Route path="/" element={<HomePage />}>
          <Route index element={<Curriculum />} />
          <Route path="highlights" element={<HighlightsPage />} />
          <Route path="curriculum" element={<Curriculum />} />
    
        </Route>

      
        <Route path="/create-account" element={<CreateAccountPage/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
