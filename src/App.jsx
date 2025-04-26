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
          <Route path="immersions" element={<Immersions />} />
          <Route path="faculty" element={<Facult />} />
          <Route path="admissions-fees" element={<Admissions />} />
          <Route path="career-prospects" element={<Career />} />
          <Route path="cohort-profile" element={<CohortProfile />} />
        </Route>

        {/* Other non-nested routes */}
        <Route path="/companypage" element={<CompanyPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/become-a-master" element={<BecomeExportPage />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/experience-page" element={<ExperiencePage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
