import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import HighlightsPage from "./pages/HighlightsPage";
import Curriculum from "./pages/Curriculum";

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
